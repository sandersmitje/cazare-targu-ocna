import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { reservations, users, rooms, reservedrooms } from '../../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedRooms() {
    
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`DROP TABLE IF EXISTS rooms`;
  await sql`
    CREATE TABLE IF NOT EXISTS rooms(
      id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
      property text NOT NULL,
      index smallint NOT NULL,
      message text NOT NULL,
      price text NOT NULL,
      type text NOT NULL,
      link text NOT NULL
    );
  `;

  
  const insertedReservations = await Promise.all(
    rooms.map(
      (room) => sql`
        INSERT INTO rooms (id, property, index, price, type, message, link)
        VALUES (${room.id}, ${room.pension}, ${room.index}, ${room.price}, ${room.type}, ${room.message}, ${room.link})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );
}

async function seedUsers() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`DROP TABLE IF EXISTS users`;
    await sql`
        CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL,
        password TEXT NOT NULL
        );
    `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, role, password)
        VALUES (${user.id}, ${user.name}, ${user.role}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
}

async function seedReservations() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`DROP VIEW IF EXISTS planning;`;
  await sql`DROP TABLE IF EXISTS reservations`;
    await sql`
        CREATE TABLE IF NOT EXISTS reservations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        contact VARCHAR(255) NOT NULL,
        checkin DATE NOT NULL,
        checkout DATE NOT NULL,
        phone VARCHAR(100) NULL,
        email VARCHAR(100) NULL,
        adults smallint NULL,
        children smallint NULL,
        status VARCHAR(20) NOT NULL
        );
    `;

  const insertedReservations = await Promise.all(
    reservations.map(async (reservation) => {     
        return sql`
        INSERT INTO reservations (id, contact, checkin, checkout, phone, email, adults, children, status)
        VALUES (${reservation.id}, ${reservation.contact}, ${reservation.checkin}, 
        ${reservation.checkout}, ${reservation.phone}, ${reservation.email}, ${reservation.adults}, 
        ${reservation.children}, ${reservation.status})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedReservations;
}


async function seedReservedRooms() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`DROP TABLE IF EXISTS reservedrooms`;
    await sql`
        CREATE TABLE IF NOT EXISTS reservedrooms (
        roomid UUID NOT NULL,
        reservationid UUID NOT NULL
        );
    `;

  const insertedReservations = await Promise.all(
    reservedrooms.map(async (reservedroom) => {     
        return sql`
        INSERT INTO reservedrooms (roomid, reservationid)
        VALUES (${reservedroom.roomid}, ${reservedroom.reservationId})
      `;
    }),
  );
  return insertedReservations;
}

async function createViews(){
    await sql`
    CREATE VIEW planning
    AS
        SELECT r.contact AS name, r.checkin, r.checkout, rm.link, rm.index, rm.type FROM reservations AS r 
        JOIN reservedrooms AS rr
        ON rr.reservationid = r.id
        JOIN rooms AS rm
        ON rm.id = rr.roomid
        ORDER BY rm.INDEX ASC, r.checkin asc`;

}






export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedRooms(),
      seedUsers(),
      seedReservations(),
      seedReservedRooms()
    ]);
    const result2 = await sql.begin((sql) => [      
      createViews()
    ]);
    
    return Response.json({message: "success!"})
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}