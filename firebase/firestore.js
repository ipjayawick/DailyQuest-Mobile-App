import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

//get all users
export const getAllUsers = async () => {
    const users = [];
    addUser({ description: "this and that", title: "job", points: 100 });
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });
    return users;
};

export const getAllQuests = async () => {
    const quests = [];
    const querySnapshot = await getDocs(collection(db, "quests"));
    querySnapshot.forEach((doc) => {
        quests.push(doc.data());
    });
    console.log("quests", quests)
    return quests;
};

export const addUser = async (user) => {
    await addDoc(collection(db, "quests"), user);
}