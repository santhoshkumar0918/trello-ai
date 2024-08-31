// import openai from "@/openai";
// import { NextResponse } from "next/server";

// export default async function POST(request: Request) {
//   // request todos in the body of the req
//   const { todos } = await request.json();
//   console.log(todos);

//   // communicate with openai gpt
//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     temperature: 0.8,
//     n: 1,
//     stream: false,
//     messages: [
//       {
//         role: "system",
//         content: `hello `,
//       },
//     ],
//   });

//   const choices = response.choices;
//   console.log("DATA IS:", choices);
//   console.log("Message content:", choices[0].message.content);

//   return NextResponse.json({ choices });
// }

import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { todos } = await request.json();
    console.log(todos);

    // Communicate with OpenAI GPT
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content: `hello`,
        },
      ],
    });

    const choices = response.data.choices;
    console.log("DATA IS:", choices);
    console.log("Message content:", choices[0].message.content);

    // Return the choices as JSON
    return NextResponse.json({ choices });
  } catch (error) {
    console.error("Error in API request:", error);
    return NextResponse.error();
  }
}

// import { OpenAI } from "openai";

// // Initialize OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// async function generateChatCompletion() {
//   try {
//     // Call the createChatCompletion method
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo", // Or the model you are using
//       messages: [
//         { role: "user", content: "Tell me a joke about programming." },
//       ],
//     });

//     // Log the response
//     console.log("Chat Completion:", response.data.choices[0].message.content);
//   } catch (error) {
//     console.error("Error generating chat completion:", error);
//   }
// }

// // Run the function
// generateChatCompletion();
