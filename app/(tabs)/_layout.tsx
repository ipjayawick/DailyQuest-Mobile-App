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
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#A29BFE', // Soft pastel purple for active tab
        tabBarInactiveTintColor: '#BDC3C7', // Light gray for inactive tabs
        tabBarStyle: {
          backgroundColor: '#ECF0F1', // Soft, light gray for tab bar background
          borderTopWidth: 0,
          paddingBottom: 5,
          paddingTop: 5,
          elevation: 5, // Adds a shadow effect for a soft lift
        },
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Quests',
          tabBarIcon: ({ color }) => <TabBarIcon name="th-list" color={color} />,
          headerBackground: () => (
            <LinearGradient
              colors={['#F0F4F8', '#A8DADC']} // Light gradient from white to soft blue
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
          title: 'Achievements',
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
          headerBackground: () => (
            <LinearGradient
              colors={['#F9E2AE', '#A8DADC']} // Soft golden to soft blue gradient
              style={{ flex: 1 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
