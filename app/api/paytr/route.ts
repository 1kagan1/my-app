import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  try {
    const { email, phone, serviceType, amount } = await req.json();

    const merchantId = process.env.PAYTR_MERCHANT_ID;
    const merchantKey = process.env.PAYTR_MERCHANT_KEY;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    if (!merchantId || !merchantKey) {
      return NextResponse.json(
        { status: 'error', message: 'PayTR credentials missing' },
        { status: 500 }
      );
    }

    if (!email || !serviceType || !amount) {
      return NextResponse.json(
        { status: 'error', message: 'Missing required fields' },
        { status: 400 }
      );
    }

    let client;
    try {
      client = await pool.connect();
      const result = await client.query(
        `INSERT INTO orders (email, phone, service_type, amount, status)
         VALUES ($1, $2, $3, $4, 'pending')
         RETURNING id`,
        [email, phone || null, serviceType, parseFloat(amount as any)]
      );

      const orderId = result.rows[0].id;
      const merchantOid = `ORDER-${orderId}`;

      const hashStr = `${merchantId}${merchantOid}${amount}${appUrl}/success${appUrl}/fail`;
      const token = crypto
        .createHmac('sha256', merchantKey)
        .update(hashStr)
        .digest('base64');

      return NextResponse.json({
        status: 'success',
        token,
        merchantId,
        merchantOid,
        redirectUrl: `https://www.paytr.com/odeme/guvenli/${token}`,
      });
    } finally {
      if (client) client.release();
    }
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Payment processing failed' },
      { status: 500 }
    );
  }
}