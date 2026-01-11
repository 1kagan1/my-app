import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const merchantOid = formData.get('merchant_oid') as string;
    const status = formData.get('status') as string;
    const hash = formData.get('hash') as string;

    const merchantKey = process.env.PAYTR_MERCHANT_KEY;

    if (!merchantKey) {
      return NextResponse.json(
        { status: 'error', message: 'PayTR key missing' },
        { status: 500 }
      );
    }

    // Hash doğrula
    const hashStr = `${merchantOid}${merchantKey}${status}`;
    const validHash = crypto
      .createHmac('sha256', merchantKey)
      .update(hashStr)
      .digest('base64');

    if (hash !== validHash) {
      console.warn('Invalid webhook hash');
      return NextResponse.json({ status: 'error' }, { status: 400 });
    }

    if (status === 'success') {
      const orderId = parseInt(merchantOid.split('-')[1]);
      let client;

      try {
        client = await pool.connect();

        // Siparişi güncelle
        const updateResult = await client.query(
          `UPDATE orders SET status = 'completed', updated_at = NOW() WHERE id = $1 RETURNING *`,
          [orderId]
        );

        if (updateResult.rows.length === 0) {
          console.warn(`Order ${orderId} not found`);
          return NextResponse.json({ status: 'error' }, { status: 404 });
        }

        // Başarılı
        return NextResponse.json({ status: 'success' });
      } finally {
        if (client) client.release();
      }
    }

    return NextResponse.json({ status: 'error' }, { status: 400 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}