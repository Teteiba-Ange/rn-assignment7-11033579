import { View, Text,Image } from 'react-native'
import React from 'react'

const SecondDisplay = () => {
  return (
    <View style={{flex:1}}>
      <View style={{marginleft:10}}>
       <Image source={require('../assets/Do Not Bleach.png')}/>
        <Text>Do not use bleach</Text>
      </View>
      <View style={{marginleft:10}}>
        <Image source={require('../assets/Do Not Tumble Dry.png')}/>
        <Text>Do not tumble Dry</Text>
      </View>
      <View> 
        <Image source={require('../assets/Do Not Wash.png')}/>
        <Text>Dry clean with tetrachloroethylene</Text>
      </View>
      <View>
        <Image source={require('../assets/Iron Low Temperature.png')}/>
        <Text>Iron at a maximum of 100'C/230'F</Text>
      </View>
      <View style={{marginTop:20}}>
        <Image source={require('../assets/Shipping.png')}/>
        <Text>Free flat  Rate Shipping</Text>
        <Text style={{tintcolor:'white'}}>Estimated to be delivered on</Text>
        <Text  style={{tintcolor:'black'}}>09/11/2021-12/11/2021</Text>
      </View>
    </View>
  )
}

export default SecondDisplay