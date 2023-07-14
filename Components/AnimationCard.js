import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

const Animation = () => {
  const route = useRoute();
  // console.log(route.params);
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,marginTop:150}}>
      <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>EXERCISE COMPLETED</Text>
      <LottieView
        source={require('../assets/Done.json')}
        autoPlay
        />
        </View>
         <TouchableOpacity onPress={()=>navigation.navigate('Home')}
         style={{alignItems:'center', marginBottom:200}}
         >
         <Text style={{fontSize:24,fontWeight:'bold',backgroundColor:'green',color:'white',paddingHorizontal:20,paddingVertical:10,borderRadius:20}}>HOME</Text>
         
    </TouchableOpacity>

    
        </View>
  )
}

export default Animation