import { Stack } from 'expo-router';
import React from 'react';

const componentNavigator = () => {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default componentNavigator;