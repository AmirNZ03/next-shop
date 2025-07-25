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

// برای افزودن کاربر جدید
export async function POST(req) {
  const connection = await connectDB();
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return Response.json({ message: "Name and Email required" }, { status: 400 });
    }

    const [result] = await connection.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );

    return Response.json({ id: result.insertId, name, email }, { status: 201 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  } finally {
    connection.end();
  }
}
