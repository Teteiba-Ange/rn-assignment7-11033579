import React, { useState, useEffect } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import ItemList from '../Screens/ItemList';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems(); 
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setItems(response.data); 
    } catch (error) {
      console.error('Error fetching items: ', error);
    }
  };

  const navigateToDetail = (item) => {
    console.log('Navigate to detail for item:', item);
  };

  const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
      <Text style={{fontWeight:400,marginVertical:1}}>Angela Acquah</Text>
      <TouchableOpacity style={styles.drawerHeader} onPress={() => props.navigation.closeDrawer()}>
        <Image source={require('../assets/Close.png')} style={styles.drawerHeaderIcon} />
      </TouchableOpacity>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item)}>
            <View style={styles.drawerItem}>
              <Text style={styles.drawerItemText}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </DrawerContentScrollView>
  );

  const ItemListScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1 }}>
        <ItemList/>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={ItemListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  drawerHeaderIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerItemText: {
    fontSize: 16,
  },
  menuIconContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  screenTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default DrawerNavigator;

