import { connectDB } from "../../../../../lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const min = parseInt(searchParams.get('min') || '0', 10);
  const max = parseInt(searchParams.get('max') || '9999999', 10);
  const sort = searchParams.get('sort'); // asc یا desc

  const connection = await connectDB();

  try {
    let query = `
      SELECT * FROM products
      WHERE category_id = 2
      AND CAST(REPLACE(price, ',', '') AS UNSIGNED) BETWEEN ? AND ?
    `;

    if (sort === 'asc') {
      query += ` ORDER BY CAST(REPLACE(price, ',', '') AS UNSIGNED) ASC`;
    } else if (sort === 'desc') {
      query += ` ORDER BY CAST(REPLACE(price, ',', '') AS UNSIGNED) DESC`;
    }
console.log("Query min:", min, "max:", max);

    const [rows] = await connection.execute(query, [min, max]);
    return Response.json(rows);
  } catch (error) {
    console.error(error);
    return Response.json({ message: error.message }, { status: 500 });
  } finally {
    connection.end();
  }
}
