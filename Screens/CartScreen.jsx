// screens/CartScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import ThirdScreen from '../component/ThirdScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    
    { id: 2, name: 'Lamerei', Text:'Recycle Boucle Knit Cardigan Pink',price: 120, image: require('../assets/dress4.png') },
    { id: 3, name: 'Church Wear', price:120, image: require('../assets/dress3.png') },
    { id: 1, name: 'Office Wear',Text:'Office wear for your office', price: 120, image: require('../assets/dress1.png') },
  ]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await AsyncStorage.getItem('cartItems');
        if (items) {
          setCartItems(JSON.parse(items));
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      let updatedCartItems = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row',}}>
      <View>
      <Image source={item.image} style={{width:120,height:150,justifyContent: 'space-between' }}></Image>
      </View>
      <View style={{flexDirection:'column',marginTop:10}}>
      <Text >{item.name} </Text>
      <Text>{item.id}</Text>
      <Text style={{color:'brown'}}>${item.price}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Image
          source={require('../assets/remove.png')}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff',justifyContent:'space-between' }}>
      <View style={{flex:1,alignSelf:'center',marginBottom:0,marginTop:10}}>
      <Image source={require('../assets/Logo.png')}  />
      </View>
     <View style={{flexDirection:'row-reverse',marginRight:30,marginBottom:20}}>
        <Image source={require('../assets/Search.png')}/>
      </View>
      <View>
        <Text style={{fontWeight:700, alignSelf:'center',fontStyle:'Poppin'}}>CHECKOUT</Text>
      </View>
    
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={<Text>Your cart is empty</Text>}
    />
    <ThirdScreen/>
    </View>
  );
};

export default CartScreen;

