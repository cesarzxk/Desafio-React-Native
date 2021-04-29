import React from 'react';
import {View } from 'react-native';
import { GlobalProviders } from './src/context';
import Posts from './src/pages/posts';

export default function App() {
  return (
    <View>
      <GlobalProviders>
         <Posts/>
      </GlobalProviders>
    </View>
  );
}