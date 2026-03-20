import OpenAI from 'openai';
import { NextResponse } from 'next/server';

let POST: (req: Request) => Promise<Response>;

if (!process.env.OPENAI_API_KEY) {
  POST = async function () {
    return NextResponse.json({
      error: 'OPENAI_API_KEY is missing from environment variables.',
      status: 500,
    });
  };
} else {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  POST = async function (req: Request) {
    const { messages, model } = await req.json();

    const response = await openai.chat.completions.create({
      model: model || 'gpt-4',
      messages,
    });

    return NextResponse.json({ reply: response.choices[0].message.content });
  };
}

export { POST };
