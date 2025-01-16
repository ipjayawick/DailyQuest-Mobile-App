import { Link, Stack } from 'expo-router';
<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
=======
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
>>>>>>> dev

export default function NotFoundScreen() {
  return (
    <>
<<<<<<< HEAD
      <Stack.Screen options={{ title: '404 - Page Not Found' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Oops! Page Not Found</Text>
        <Text style={styles.subtitle}>
          The page you're looking for doesn't exist or has been moved.
        </Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to Home</Text>
=======
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
>>>>>>> dev
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
<<<<<<< HEAD
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
=======
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
>>>>>>> dev
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
<<<<<<< HEAD
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
=======
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
>>>>>>> dev
  },
});
