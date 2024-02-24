import { Drawer } from 'expo-router/drawer';
import React from 'react';

// custom types for DrawerMenu
type drawerMenu = [
  width: number,
  color: string,
]
const DrawerMenu = () => {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          width: 490,
        },
      }}>
      {/* <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerTitle: 'Tabs',
          drawerLabel: 'Tabs',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="border-bottom" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color="gray"
                    style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      /> */}
    </Drawer>
  );
}

export default DrawerMenu