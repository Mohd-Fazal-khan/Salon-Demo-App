import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import HomeScreen from '@/app/screens/HomeScreen';
import { colors } from '@/constants/Colors';
import { fonts } from '@/constants/Fonts';
import SalonServices from '@/app/screens/SalonServices';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Placeholder = ({ label }: { label: string }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{label}</Text>
  </View>
);

// Example of a screen not in the bottom tabs
const FullScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Full Screen Page</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);

// Bottom Tabs component
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
        tabBarIcon: ({ color, size, focused }) => {
          const nameMap: Record<string, string> = {
            Home: focused ? 'home' : 'home-outline',
            Cart: focused ? 'cart' : 'cart-outline',
            Appointment: focused ? 'calendar' : 'calendar-outline',
            Account: focused ? 'person' : 'person-outline',
          };
          return <Ionicons name={nameMap[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" children={() => <Placeholder label="Cart" />} />
      <Tab.Screen name="Appointment" children={() => <Placeholder label="Appointment" />} />
      <Tab.Screen name="Account" children={() => <Placeholder label="Account" />} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  const [fontsLoaded] = useFonts({
    [fonts.InterMedium]: require('@/assets/fonts/Inter_18pt-Medium.ttf'),
    [fonts.InterRegular]: require('@/assets/fonts/Inter_18pt-Regular.ttf'),
    [fonts.InterBold]: require('@/assets/fonts/Inter_18pt-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
      <Stack.Screen name="SalonServices" component={SalonServices} />
    </Stack.Navigator>
  );
}
