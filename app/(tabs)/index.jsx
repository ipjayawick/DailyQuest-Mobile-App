
import React, { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import { Card, Checkbox, Text, Button } from 'react-native-paper';

export default function TabOneScreen() {
  const [quests, setQuests] = useState([
    { id: '1', title: 'Quest 1', description: 'Explore the forest.', completed: false },
    { id: '2', title: 'Quest 2', description: 'Find the hidden treasure.', completed: false },
    { id: '3', title: 'Quest 3', description: 'Defeat the dragon.', completed: false },
  ]);

  const toggleCompletion = (id) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    );
  };

  const renderQuest = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>
          <Checkbox
            status={item.completed ? 'checked' : 'unchecked'}
            onPress={() => toggleCompletion(item.id)}
          />
        </View>
        <Text style={styles.description}>{item.description}</Text>
        {item.completed && <Button mode="contained" style={styles.completedButton} disabled>Completed</Button>}
      </Card.Content>
    </Card>
  );

  return (
    <ImageBackground source={require('../../assets/images/home.jpg')} style={styles.container}>
      <FlatList
        data={quests}
        keyExtractor={(item) => item.id}
        renderItem={renderQuest}
        contentContainerStyle={styles.list}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily:'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#6c757d',
  },
  completedButton: {
    marginTop: 10,
    backgroundColor: '#28a745',
  },
});
