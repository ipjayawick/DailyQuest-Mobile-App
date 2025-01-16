import openai from './config.js';
import { z } from 'zod';

export const generateQuests = async (completedQuests) => {
    const CompletedQuest = z.object({
        name: z.string(),
        date: z.string(),
        participants: z.array(z.string()),
    });
    const CompletedQuestsArray = z.array(CompletedQuest);

    if (completedQuests.length === 0) {
        const prompt = `
        The following is a list of completed quests:
        ${JSON.stringify(completedQuests, null, 2)}
        Generate 5 new quests that are related to these in theme and structure. Each quest should include:
        - A unique title
        - A brief description
        Return the new quests as a JSON array.
        `;
    } else {
        const prompt = `
        Generate a list of 5 random daily tasks designed to increase productivity. Each task should
        Be actionable and achievable within a single day.
        Focus on areas like personal growth, organization, health, or skill development.
        Include a brief description of why it helps productivity.
        Be varied to cover different aspects of life (e.g., mental, physical, professional, or personal). 
        Each quest should include:
        - A unique title
        - A brief description      
        Return the new quests as a JSON array.
        `;
    }

    const completion = await openai.beta.chat.completions.parse({
        model: "gpt-4o-2024-08-06",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt },
        ],
        response_format: zodResponseFormat(CompletedQuestsArray, "generatedQuests"),
    });

    const generatedQuests = completion.choices[0].message.parsed;
    return generatedQuests;
}




