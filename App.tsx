import React from 'react';
import { GlobalProviders } from './src/context';

import Users from './src/pages/users';
import Posts from './src/pages/posts';

import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
    <GlobalProviders>
      <NavigationContainer >
        <Tab.Navigator  
        tabBarOptions= {{
          indicatorStyle:{backgroundColor:'#C50505'}, 
          tabStyle: {height: 0}, style:{backgroundColor: '#F83838'}
        }}>
          <Tab.Screen name="Posts" component={Posts} />
          <Tab.Screen name="Users" component={Users} />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalProviders>
  );
}