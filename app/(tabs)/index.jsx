import React, { useState } from 'react';
import { StyleSheet, ScrollView, ImageBackground, View } from 'react-native';
import { Card, Checkbox, Text } from 'react-native-paper';

export default function TabOneScreen() {
  const [quests, setQuests] = useState([
    { id: '1', title: 'Morning Walk', description: 'Take a 30-minute walk outdoors.', completed: false },
    { id: '2', title: 'Read & Reflect', description: 'Read a chapter from a book and write a quick summary.', completed: false },
    { id: '3', title: 'Hydration Goal', description: 'Drink 2 liters of water today.', completed: false },
  ]);

  const toggleCompletion = (id) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    );
  };

  const renderQuest = (item) => (
    <Card style={styles.qCard} key={item.id}>
      <Card.Content style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>
          <Checkbox
            status={item.completed ? 'checked' : 'unchecked'}
            onPress={() => toggleCompletion(item.id)}
            color='#66e56b'
          />
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <ImageBackground source={require('../../assets/images/home.jpg')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        {quests.map((quest) => renderQuest(quest))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    justifyContent: 'center', // Ensures content is centered in the background
  },
  list: {
    paddingBottom: 20,
  },
  qCard: {
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.18)', // Transparent white background for the card
    borderRadius: 10, // Rounded corners for the card
    elevation: 0, // No shadow on the card
  },
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly more opaque white for content area of the card
    borderRadius: 10,
    elevation: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'DynaPuff',
    fontSize: 18,
  },
  description: {
    marginTop: 0,
    fontSize: 14,
    color: '#6c757d',
    fontFamily: 'DynaPuff',
  },
});
