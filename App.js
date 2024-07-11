import { View, StyleSheet } from 'react-native';
import { GestureHandlers } from 'react-native-reanimated';
import React from 'react';
import ItemList from './Screens/ItemList'; // Make sure to adjust the import paths
import DrawerNavigator from './DrawerContent/DrawerNavigator';
import ProductDisplay from './Screens/ProductDisplay';

const MultiScreenDisplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <ItemList />
      </View>
      <View style={styles.screen}>
        <DrawerNavigator />
      </View>
      <View style={styles.screen}>
        <ProductDisplay />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <MultiScreenDisplay />
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  screen: {
    width: 400,
    height: 350, // Adjust as needed
  },
});

export default App;
