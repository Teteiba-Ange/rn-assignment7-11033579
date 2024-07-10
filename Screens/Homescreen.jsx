import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Firstscreen from '../component/Firstscreen';
import Secondscreen from '../component/Secondscreen';
const HomeScreen = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Office Wear', price: 120, image: require('../assets/dress1.png') },
    { id: 2, name: 'Black', price: 120, image: require('../assets/dress2.png') },
    { id: 3, name: 'Church Wear', price: 120, image: require('../assets/dress3.png') },
    { id: 4, name: 'Lamerei', price: 120, image: require('../assets/dress4.png') },
    { id: 5, name: '21WN', price: 120, image: require('../assets/dress5.png') },
    { id: 6, name: 'Lopo', price: 120, image: require('../assets/dress6.png') },
    { id: 7, name: '21WN', price: 120, image: require('../assets/dress7.png') },
    { id: 8, name: 'Lame', price: 120, image: require('../assets/dress3.png') }
  ]);
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cart').then((cartItems) => {
      if (cartItems) {
        setCart(JSON.parse(cartItems));
      }
    });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => handleAddToCart(item)}>
      <Image source={item.image} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>reversible angora cardigan</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Image source={require('../assets/add_circle.png')} style={styles.addButton} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Firstscreen/>
      <Text>OUR STORY</Text>
      <Secondscreen/>
      <FlatList
        data={products}
        numColumns={2} // Display two items per row
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain', // Adjust the image's content mode as per your requirement
  },
  price: {
    color: 'brown',
    marginTop: 5,
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain', // Adjust the image's content mode as per your requirement
  },
});

export default HomeScreen;


