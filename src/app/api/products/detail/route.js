import { connectDB } from "../../../../../lib/db";

// برای دریافت همه کاربران
export async function GET(req) {
  const connection = await connectDB();
  try {
    const [rows] = await connection.execute('SELECT * FROM products WHERE category_id=2');
    return Response.json(rows);
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  } finally {
    connection.end();
  }
}
