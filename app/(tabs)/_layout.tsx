import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// Custom TabBarIcon component
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs

      screenOptions={{
        tabBarLabelPosition: 'beside-icon', // Show text beside icon
        tabBarActiveTintColor: '#272320', // Active tab text color
        tabBarInactiveTintColor: '#272320', // Inactive tab text color
        tabBarActiveBackgroundColor: '#958574',
        tabBarInactiveBackgroundColor: '#ead0b3',
        tabBarStyle: {
          backgroundColor: '#ead0b3', // Tab bar background
          borderTopWidth: 0,
          elevation: 5, // Adds shadow effect
        },
        tabBarLabelStyle: {
          // fontWeight: 'bold', // Bold tab text
          fontSize: 19, // Consistent text size
          fontFamily: 'SpaceMono'
        },
        // tabBarItemStyle: {
        //   flexDirection: 'row', // Align icon and text horizontally
        //   alignItems: 'center', // Center items vertically
        //   paddingHorizontal: 10, // Add spacing inside the tab items
        // },
        // tabBarIconStyle: {
        //   marginRight: 10, // Add spacing between icon and text
        // },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Quests',
          headerTitleStyle: {
            fontFamily: 'SpaceMono',
            fontSize: 28,
            margin:'auto',
            marginLeft:10
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="th-list" color={color} size={24} />
          ),
          headerBackground: () => (
            <LinearGradient
              colors={['#ead0b3', '#bfaa93']} // Gradient for header background
              style={{ flex: 1 }}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          headerTitleStyle: {
            fontFamily: 'SpaceMono',
            fontSize: 28,
            margin:'auto',
            marginLeft:10
          },
          title: 'Achievements',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="trophy" color={color} size={24} />
          ),
          headerBackground: () => (
            <LinearGradient
              colors={['#ead0b3', '#bfaa93']} // Gradient for header background
              style={{ flex: 1 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
