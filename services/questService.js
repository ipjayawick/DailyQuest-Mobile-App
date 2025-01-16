import { generateQuests } from "../open ai/openaiservice";
import { getAchievements, addQuestsToUser } from "../firebase/firestore";

const updateNewQuests = async () => {

    const achievements = await getAchievements();
    const completedQuests = achievements.filter(achievement => achievement.completed);
    const newQuests = await generateQuests(completedQuests);
    addQuestsToUser(newQuests)

}
