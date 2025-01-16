import React from 'react';
import { StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function AchievementsScreen() {
  // Sample data for the user's points and completed quests
  const user = {
    points: 150, // Example total points
    image: 'https://media.istockphoto.com/id/1399395748/photo/cheerful-business-woman-with-glasses-posing-with-her-hands-under-her-face-showing-her-smile.jpg?s=612x612&w=0&k=20&c=EbnuxLE-RJP9a08h2zjfgKUSFqmjGubk0p6zwJHnbrI=', // Example user image URL
    completedQuests: [
      { title: 'Ethereal Ascent', description: 'Completed the first quest.', date: '2025-01-01' },
      { title: 'Echoed Triumph', description: 'Finished the second quest.', date: '2025-01-03' },
      { title: 'Pathfinder\'s Dawn', description: 'Completed the third quest.', date: '2025-01-05' },
    ],
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/ach.jpg')} style={styles.container}>
        {/* Top Section: User Info (Image and Total Points) */}
        <View style={styles.header}>
          <Image source={{ uri: user.image }} style={styles.userImage} />
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsText}>Total Points : {user.points}</Text>
          </View>
        </View>

        {/* Completed Quests List */}
        <ScrollView style={styles.questsContainer}>
          {user.completedQuests.map((quest, index) => (
            <View key={index} style={styles.questCard}>
              <Text style={styles.questTitle}>{quest.title}</Text>
              <Text style={styles.questDate}>Completed on: {quest.date}</Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Background color for the page
    borderRadius: 80,
  },
  header: {
    flexDirection: 'row', // Aligning image and points horizontally
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.45)', // Slightly transparent white background
    backfaceVisibility: 'hidden',
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 5, // Add shadow for iOS and Android
    borderRadius: 10,
    margin: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Make the image round
    marginRight: 20,
  },
  pointsContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Slightly transparent white background
    backfaceVisibility: 'hidden',

  },
  pointsText: {
    fontSize: 18,
    color: '#333', // Text color for points
    fontFamily: 'DynaPuff',
  },
  questsContainer: {
    padding: 10,
  },
  questCard: {
    fontFamily: 'DynaPuff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.71)', // Slightly transparent white background
    backfaceVisibility: 'hidden',
    // elevation: 3, // For Android shadow
  },
  questTitle: {
    fontSize: 18,
    fontFamily: 'DynaPuff',
    color: '#333',
  },
  questDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
  },
  questDate: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'DynaPuff',
    marginTop: 2,
  },
});
