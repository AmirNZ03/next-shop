import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, description, email, mobile } = body;

    const data = {
      merchant_id: 'c3b845c7-2a75-4fa4-a6e4-2d0a154930c2',
      amount,
      callback_url: 'http://localhost:3000/pardakht',
      description,
      metadata: { email, mobile }
    };

    const response = await axios.post(
      'https://sandbox.zarinpal.com/pg/v4/payment/request.json',
      data,
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.data.data && response.data.data.code === 100) {
      const { authority } = response.data.data;
      return Response.json({ url: `https://sandbox.zarinpal.com/pg/StartPay/${authority}` });
    } else {
      return Response.json(
        { message: response.data.errors.message || 'خطا در ایجاد پرداخت' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error.response?.data || error.message);
    return Response.json({ message: 'مشکل در اتصال به درگاه پرداخت' }, { status: 500 });
  }
}
