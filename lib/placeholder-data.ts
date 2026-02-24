// ---------------------------------------------------------------
//  Existing constants (unchanged)
// ---------------------------------------------------------------
const room1Id = crypto.randomUUID();
const room2Id = crypto.randomUUID();
const room3Id = crypto.randomUUID();
const room4Id = crypto.randomUUID();
const room5Id = crypto.randomUUID();
const room6Id = crypto.randomUUID();
const room7Id = crypto.randomUUID();
const room8Id = crypto.randomUUID();
const room9Id = crypto.randomUUID();
const room10Id = crypto.randomUUID();
const room11Id = crypto.randomUUID();
const room12Id = crypto.randomUUID();
const room13Id = crypto.randomUUID();

const user1Id = crypto.randomUUID();
const user2Id = crypto.randomUUID();
const user3Id = crypto.randomUUID();

const reservation1Id = crypto.randomUUID();

// ---------------------------------------------------------------
//  Existing data (unchanged)
// ---------------------------------------------------------------
const users = [
  {
    id: user1Id,
    name: 'amelia',
    password: '123456',
    role: 'boss'
  },
  {
    id: user2Id,
    name: 'sander',
    password: '123456',
    role: 'boss'
  },
  {
    id: user3Id,
    name: 'carmen',
    password: '123456',
    role: 'cleaning'
  },
];

const rooms = [
  { type: '1', price: 'price1', message: 'description1', pension: 'Pensiunea Amelia', link: 'pensiuneaamelia', index: 1, id: room1Id },
  { type: '2', price: 'price1', message: 'description2', pension: 'Pensiunea Amelia', link: 'pensiuneaamelia', index: 2, id: room2Id },
  { type: '3', price: 'price1', message: 'description3', pension: 'Pensiunea Amelia', link: 'pensiuneaamelia', index: 3, id: room3Id },
  { type: '4', price: 'price1', message: 'description4', pension: 'Pensiunea Amelia', link: 'pensiuneaamelia', index: 4, id: room4Id },
  { type: '5', price: 'price1', message: 'description4', pension: 'Pensiunea Amelia', link: 'pensiuneaamelia', index: 5, id: room5Id },
  { type: '6', price: 'price1', message: 'description3', pension: 'Pensiunea Amelia', link: 'pensiuneaamelia', index: 6, id: room6Id },
  { type: '7', price: 'price1', message: 'description4', pension: 'Pensiunea Amelia', link: 'pensiuneaamelia', index: 7, id: room7Id },
  { type: '8', price: 'price1', message: 'description4', pension: 'Pensiunea Amelia', link: 'pensiuneaamelia', index: 8, id: room8Id },
  { type: '1', price: 'price2', message: 'description5', pension: 'Vila Grădina Verde', link: 'gradinaverde', index: 9, id: room9Id },
  { type: '2', price: 'price2', message: 'description5', pension: 'Vila Grădina Verde', link: 'gradinaverde', index: 10, id: room10Id },
  { type: '3', price: 'price2', message: 'description7', pension: 'Vila Grădina Verde', link: 'gradinaverde', index: 11, id: room11Id },
  { type: '4', price: 'price3', message: 'description7', pension: 'Vila Grădina Verde', link: 'gradinaverde', index: 12, id: room12Id },
  { type: '5', price: 'price2', message: 'description8', pension: 'Vila Grădina Verde', link: 'gradinaverde', index: 13, id: room13Id }
];

// ---------------------------------------------------------------
//  NEW RESERVATIONS + JOIN TABLE
// ---------------------------------------------------------------
const reservation2Id = crypto.randomUUID();
const reservation3Id = crypto.randomUUID();
const reservation4Id = crypto.randomUUID();
const reservation5Id = crypto.randomUUID();
const reservation6Id = crypto.randomUUID();
const reservation7Id = crypto.randomUUID();
const reservation8Id = crypto.randomUUID();
const reservation9Id = crypto.randomUUID();
const reservation10Id = crypto.randomUUID();
const reservation11Id = crypto.randomUUID();
const reservation12Id = crypto.randomUUID();
const reservation13Id = crypto.randomUUID();
const reservation14Id = crypto.randomUUID();
const reservation15Id = crypto.randomUUID();
const reservation16Id = crypto.randomUUID();
const reservation17Id = crypto.randomUUID();
const reservation18Id = crypto.randomUUID();
const reservation19Id = crypto.randomUUID();
const reservation20Id = crypto.randomUUID();
const reservation21Id = crypto.randomUUID();

const reservations = [
  // ---- original (kept) ----
  {
    id: reservation1Id,
    contact: 'Mr Ciobanu',
    checkin: '2025-11-01',
    checkout: '2025-11-07',
    phone: '07 55 688 493',
    email: 'test@example.com',
    adults: 4,
    children: 2,
    status: 'reserved'
  },

  // ---- new fake data (November & December) ----
  {
    id: reservation2Id,
    contact: 'Dna Popescu',
    checkin: '2025-11-03',
    checkout: '2025-11-06',
    phone: '07 44 112 233',
    email: 'popescu.maria@fake.ro',
    adults: 2,
    children: 0,
    status: 'confirmed'
  },
  {
    id: reservation3Id,
    contact: 'Dl Ionescu',
    checkin: '2025-11-08',
    checkout: '2025-11-12',
    phone: '07 33 998 877',
    email: 'ion.ionescu@fake.ro',
    adults: 3,
    children: 1,
    status: 'reserved'
  },
  {
    id: reservation4Id,
    contact: 'Fam. Dumitrescu',
    checkin: '2025-11-14',
    checkout: '2025-11-18',
    phone: '07 22 554 321',
    email: 'dumitrescu.fam@fake.ro',
    adults: 2,
    children: 2,
    status: 'paid'
  },
  {
    id: reservation5Id,
    contact: 'Dl Stanescu',
    checkin: '2025-11-20',
    checkout: '2025-11-24',
    phone: '07 11 667 788',
    email: 'stanescu.vlad@fake.ro',
    adults: 1,
    children: 0,
    status: 'cancelled'
  },
  {
    id: reservation6Id,
    contact: 'Dna Radulescu',
    checkin: '2025-11-22',
    checkout: '2025-11-28',
    phone: '07 66 223 344',
    email: 'radulescu.ana@fake.ro',
    adults: 4,
    children: 3,
    status: 'checked in'
  },
  {
    id: reservation7Id,
    contact: 'Dl Gheorghe',
    checkin: '2025-11-29',
    checkout: '2025-12-03',
    phone: '07 77 889 900',
    email: 'gheorghe.mihai@fake.ro',
    adults: 2,
    children: 0,
    status: 'reserved'
  },
  {
    id: reservation8Id,
    contact: 'Fam. Marin',
    checkin: '2025-12-01',
    checkout: '2025-12-05',
    phone: '07 88 445 566',
    email: 'marin.familia@fake.ro',
    adults: 3,
    children: 1,
    status: 'confirmed'
  },
  {
    id: reservation9Id,
    contact: 'Dl Vasilescu',
    checkin: '2025-12-06',
    checkout: '2025-12-10',
    phone: '07 99 112 233',
    email: 'vasilescu.ionut@fake.ro',
    adults: 2,
    children: 2,
    status: 'paid'
  },
  {
    id: reservation10Id,
    contact: 'Dna Stoica',
    checkin: '2025-12-07',
    checkout: '2025-12-12',
    phone: '07 55 667 788',
    email: 'stoica.laura@fake.ro',
    adults: 1,
    children: 0,
    status: 'reserved'
  },
  {
    id: reservation11Id,
    contact: 'Dl Petrescu',
    checkin: '2025-12-13',
    checkout: '2025-12-17',
    phone: '07 44 223 344',
    email: 'petrescu.dan@fake.ro',
    adults: 4,
    children: 0,
    status: 'checked out'
  },
  {
    id: reservation12Id,
    contact: 'Fam. Dragomir',
    checkin: '2025-12-18',
    checkout: '2025-12-23',
    phone: '07 33 998 877',
    email: 'dragomir.fam@fake.ro',
    adults: 2,
    children: 1,
    status: 'confirmed'
  },
  {
    id: reservation13Id,
    contact: 'Dl Neagu',
    checkin: '2025-12-20',
    checkout: '2025-12-26',
    phone: '07 22 554 321',
    email: 'neagu.cristi@fake.ro',
    adults: 3,
    children: 2,
    status: 'reserved'
  },
  {
    id: reservation14Id,
    contact: 'Dna Enache',
    checkin: '2025-12-24',
    checkout: '2025-12-28',
    phone: '07 11 667 788',
    email: 'enache.elena@fake.ro',
    adults: 2,
    children: 0,
    status: 'paid'
  },
  {
    id: reservation15Id,
    contact: 'Dl Munteanu',
    checkin: '2025-12-27',
    checkout: '2025-12-31',
    phone: '07 66 223 344',
    email: 'munteanu.andrei@fake.ro',
    adults: 5,
    children: 2,
    status: 'checked in'
  },
  {
    id: reservation16Id,
    contact: 'Fam. Barbu',
    checkin: '2025-11-10',
    checkout: '2025-11-15',
    phone: '07 77 889 900',
    email: 'barbu.fam@fake.ro',
    adults: 3,
    children: 1,
    status: 'cancelled'
  },
  {
    id: reservation17Id,
    contact: 'Dl Iliescu',
    checkin: '2025-11-25',
    checkout: '2025-11-30',
    phone: '07 88 445 566',
    email: 'iliescu.victor@fake.ro',
    adults: 2,
    children: 0,
    status: 'reserved'
  },
  {
    id: reservation18Id,
    contact: 'Dna Tudor',
    checkin: '2025-12-02',
    checkout: '2025-12-07',
    phone: '07 99 112 233',
    email: 'tudor.monica@fake.ro',
    adults: 1,
    children: 1,
    status: 'confirmed'
  },
  {
    id: reservation19Id,
    contact: 'Dl Popa',
    checkin: '2025-12-15',
    checkout: '2025-12-20',
    phone: '07 55 667 788',
    email: 'popa.adrian@fake.ro',
    adults: 4,
    children: 3,
    status: 'checked out'
  },
  {
    id: reservation20Id,
    contact: 'Fam. Nicolescu',
    checkin: '2025-12-29',
    checkout: '2026-01-03',
    phone: '07 44 223 344',
    email: 'nicolescu.fam@fake.ro',
    adults: 2,
    children: 2,
    status: 'reserved'
  },
  {
    id: reservation21Id,
    contact: 'Dl Anghel',
    checkin: '2025-11-05',
    checkout: '2025-11-09',
    phone: '07 33 998 877',
    email: 'anghel.bogdan@fake.ro',
    adults: 3,
    children: 0,
    status: 'paid'
  }
];

// ---------------------------------------------------------------
//  JOIN TABLE: reservedrooms
// ---------------------------------------------------------------
const reservedrooms = [
  // original (kept – note: you had two identical rows, I kept one)
  { roomid: room1Id, reservationId: reservation1Id },

  // ---- new links ------------------------------------------------
  // reservation2 – 2 rooms (Pensiunea Amelia)
  { roomid: room2Id, reservationId: reservation2Id },
  { roomid: room3Id, reservationId: reservation2Id },

  // reservation3 – 1 room
  { roomid: room4Id, reservationId: reservation3Id },

  // reservation4 – 3 rooms
  { roomid: room5Id, reservationId: reservation4Id },
  { roomid: room6Id, reservationId: reservation4Id },
  { roomid: room7Id, reservationId: reservation4Id },

  // reservation5 – 1 room (cancelled)
  { roomid: room8Id, reservationId: reservation5Id },

  // reservation6 – 4 rooms (big family)
  { roomid: room1Id, reservationId: reservation6Id },
  { roomid: room2Id, reservationId: reservation6Id },
  { roomid: room3Id, reservationId: reservation6Id },
  { roomid: room4Id, reservationId: reservation6Id },

  // reservation7 – 2 rooms
  { roomid: room9Id, reservationId: reservation7Id },
  { roomid: room10Id, reservationId: reservation7Id },

  // reservation8 – 1 room
  { roomid: room11Id, reservationId: reservation8Id },

  // reservation9 – 2 rooms
  { roomid: room12Id, reservationId: reservation9Id },
  { roomid: room13Id, reservationId: reservation9Id },

  // reservation10 – 1 room
  { roomid: room5Id, reservationId: reservation10Id },

  // reservation11 – 3 rooms
  { roomid: room6Id, reservationId: reservation11Id },
  { roomid: room7Id, reservationId: reservation11Id },
  { roomid: room8Id, reservationId: reservation11Id },

  // reservation12 – 2 rooms
  { roomid: room9Id, reservationId: reservation12Id },
  { roomid: room10Id, reservationId: reservation12Id },

  // reservation13 – 4 rooms (Vila Grădina Verde)
  { roomid: room9Id, reservationId: reservation13Id },
  { roomid: room10Id, reservationId: reservation13Id },
  { roomid: room11Id, reservationId: reservation13Id },
  { roomid: room12Id, reservationId: reservation13Id },

  // reservation14 – 1 room
  { roomid: room13Id, reservationId: reservation14Id },

  // reservation15 – 3 rooms (big new-year group)
  { roomid: room1Id, reservationId: reservation15Id },
  { roomid: room2Id, reservationId: reservation15Id },
  { roomid: room3Id, reservationId: reservation15Id },

  // reservation16 – 2 rooms (cancelled)
  { roomid: room4Id, reservationId: reservation16Id },
  { roomid: room5Id, reservationId: reservation16Id },

  // reservation17 – 1 room
  { roomid: room6Id, reservationId: reservation17Id },

  // reservation18 – 2 rooms
  { roomid: room7Id, reservationId: reservation18Id },
  { roomid: room8Id, reservationId: reservation18Id },

  // reservation19 – 3 rooms
  { roomid: room11Id, reservationId: reservation19Id },
  { roomid: room12Id, reservationId: reservation19Id },
  { roomid: room13Id, reservationId: reservation19Id },

  // reservation20 – 2 rooms (new-year cross-over)
  { roomid: room1Id, reservationId: reservation20Id },
  { roomid: room2Id, reservationId: reservation20Id },

  // reservation21 – 1 room
  { roomid: room3Id, reservationId: reservation21Id }
];

// ---------------------------------------------------------------
//  EXPORT
// ---------------------------------------------------------------
export { reservations, users, rooms, reservedrooms };