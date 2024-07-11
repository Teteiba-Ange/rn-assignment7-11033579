import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import SecondDisplay from '../DrawerContent/SecondDisplay';

const ProductDisplay = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/1')
      .then(res => {
        setProduct(res.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handlePress = () => {
    console.log('Add to Basket pressed');
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.header} source={require('../assets/Logo.png')} />
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <SecondDisplay />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
        >
          <Image
            source={require('../assets/Plus.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Add to Basket</Text>
          <Image
            source={require('../assets/Heart.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 5,
    width: '110%',
    justifyContent: 'space-between',
    marginBottom:0
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default ProductDisplay;

