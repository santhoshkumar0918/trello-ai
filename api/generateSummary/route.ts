import openai from "@/openai";
import { NextResponse } from "next/server";

export default async function POST(request: Request) {
  // request todos in the body of the req
  const { todos } = await request.json();
  console.log(todos);

  // communicate with openai gpt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-tirbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `hello `,
      },
    ],
  });

  const { choices } = response.data;
  console.log("DATA IS:", choices);
  console.log("Message content:", choices[0].message.content);

  return NextResponse.json({ choices });
}
