import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

openai.configure({
    apiKey: process.env.OPENAI_API_KEY,
    });
    
export default openai;