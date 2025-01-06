// app/(tabs)/physical-activity/index.tsx
import { View, Text, StyleSheet } from "react-native";

export default function PhysicalActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Physical Activity</Text>
      <Text style={styles.task}>- Stretch for 10 minutes.</Text>
      <Text style={styles.task}>- Walk outside for 15 minutes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  task: { fontSize: 16, marginVertical: 10 },
});
