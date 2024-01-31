import { Redirect, Stack } from 'expo-router';
import React from 'react';

const index = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: true }} />
      <Redirect href="/home" />
    </>
  );
};

export default index;
