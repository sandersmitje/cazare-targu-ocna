
import postgres from 'postgres';
import {
  reservationsView
} from '.definitions/';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function fetchReservations(
  month: number,
  year: number,
  link: string
) {

  try {
    const invoices = await sql<reservationsView[]>`
      SELECT * FROM planning 
        WHERE 
        ((EXTRACT(MONTH FROM checkin) = ${month} AND EXTRACT(YEAR FROM checkin) = ${year}) OR
        (EXTRACT(MONTH FROM checkout) = ${month} AND EXTRACT(YEAR FROM checkout) = ${year}))
        AND link=${link}
        ORDER BY index, checkin ASC
    `;

    return invoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}