import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ItemList from './Screens/ItemList';
import DrawerNavigator from './DrawerContent/DrawerNavigator'
const App = () => {
  return (
    <View style={styles.container}>
      <ItemList/>
      <DrawerNavigator/>
    </View>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
