import OpenAI from "openai";
import Configuration from "openai";

const configuration = new Configuration();
// Initialize OpenAI with configuration options
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // You can add other configuration options here if needed
});

export default openai;
