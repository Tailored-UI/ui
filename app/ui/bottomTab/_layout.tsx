import { Stack } from 'expo-router';
import React from 'react';
import BottomTab, { tab } from '~/app/components/BottomTab';

const tabData: tab[] = [
  {
    name: 'index',
    Icon: 'Home',
    label: 'Home',
    size: 25,
  },
  {
    name: 'tabtwo',
    Icon: 'Brush',
    label: 'UI',
    size: 25,
  },
];

const BottomTabNav = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <BottomTab TabData={tabData} filled showLabel floating elevation={10} />
    </>
  );
};

export default BottomTabNav;
