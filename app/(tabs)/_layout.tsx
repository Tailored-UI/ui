import { Tabs } from 'expo-router';
import { Home, Sparkles } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 25,
          right: 25,
          height: 80,
          elevation: 20,
          shadowColor: '#000',
          borderRadius: 25,
          backgroundColor: '#18181b',
          borderColor: '#1a2e05',
        },
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return (
              <Home
                size={25}
                className={`${props.focused ? 'text-gray-100' : 'text-zinc-500'}`}
                fill={props.focused ? '#f3f4f6' : '#71717a'}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="uiComponents"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return (
              <Sparkles
                size={25}
                className={`${props.focused ? 'text-gray-100' : 'text-zinc-500'}`}
                fill={props.focused ? '#f3f4f6' : '#71717a'}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
