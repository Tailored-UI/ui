import { View, Text } from 'react-native';
import React from 'react';
import { fullHeight, fullWidth } from '../button';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView className='bg-white' >
      <View
        style={{ height: fullHeight, width: fullWidth }}
        className="flex justify-center items-center bg-white">
        <Text className="text-4xl font-bold text-zinc-800">index</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
