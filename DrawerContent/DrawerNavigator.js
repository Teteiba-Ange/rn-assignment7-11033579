// Navigation.js
// Navigation.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler'; // Import TouchableOpacity
import { Image ,Text} from 'react-native'; // Import Image from react-native for the Menu image
import ItemList from '../Screens/ItemList';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ItemList} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;


