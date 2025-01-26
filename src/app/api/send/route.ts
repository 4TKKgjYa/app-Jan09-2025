import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('content') as string;
  const file = formData.get('file') as File;

  // 画像をS3等にアップロードしたり、メール送信するにはBufferに変換する必要がある
  // 画像をそのまま送信する場合は、以下のコードをコメントアウトする
  // 画像の保存は バッファーオブジェクトに変換しなければならない
  const arrayBuffer = await file.arrayBuffer();
  const attachmentContent = Buffer.from(arrayBuffer).toString('base64');

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ce118ununoctium@gmail.com'],
      subject,
      react: EmailTemplate({ username, email, content }) as React.ReactElement,
      attachments: [{ filename: file.name, content: attachmentContent }],
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
