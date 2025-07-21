import { connectDB } from "../../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const connection = await connectDB();

  const idfind = params.id; // اینجا پارامتر URL گرفته می‌شود

  try {
    const [rows] = await connection.execute('SELECT * FROM products WHERE id = ?', [idfind]);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    connection.end();
  }
}
