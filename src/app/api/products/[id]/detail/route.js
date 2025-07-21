import { connectDB } from "../../../../../../lib/db"
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const connection = await connectDB();

  const idfind = params.id;

  try {
    // گرفتن category_id محصول با id مورد نظر
    const [productRows] = await connection.execute(
      'SELECT category_id FROM products WHERE id = ?',
      [idfind]
    );

    if (productRows.length === 0) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    const category_id = productRows[0].category_id;

    // گرفتن محصولات با همان category_id، به جز محصول فعلی
    const [rows] = await connection.execute(
      'SELECT * FROM products WHERE category_id = ? AND id != ? LIMIT 10',
      [category_id, idfind]
    );

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    connection.end();
  }
}
