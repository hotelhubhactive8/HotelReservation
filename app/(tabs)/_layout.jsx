import { Tabs } from 'expo-router';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#003580" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="heart" size={24} color="#003580" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: 'Booking',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="notifications" size={24} color="#003580" />
            ) : (
              <Ionicons name="notifications-outline" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="#003580" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
      {/* <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          href: null,
        }}
      /> */}
    </Tabs>
  );
}
