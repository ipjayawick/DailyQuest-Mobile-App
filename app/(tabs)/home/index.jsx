// app/(tabs)/home/index.tsx
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Daily Quests</Text>
      <Text style={styles.subtitle}>Focus on meaningful tasks each day!</Text>
      <Button title="Go to Journaling" onPress={() => router.push("/journaling")} />
      <Button title="Go to Mindfulness" onPress={() => router.push("/mindfulness")} />
      <Button title="Go to Activity" onPress={() => router.push("/physical-activity")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { fontSize: 16, marginVertical: 10 },
});
