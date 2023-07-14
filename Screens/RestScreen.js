import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const RestScreen = () => {
    const navigation=useNavigation();
    let timer=0;
    const [timeleft,settimeleft]=useState(3)

    const starttimer=()=>{
        setTimeout(()=> {
            if(timeleft<=0){
                navigation.goBack()
                clearTimeout(timer)
            }
            settimeleft(timeleft-1)
        },1000)
    }

    useEffect(()=>{
        starttimer();
        return ()=> clearTimeout(timer)
    }) 
  return (
    <SafeAreaView style={{marginTop:30}}>
       <Image
        // resizeMode="cover"
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%", height: 350 }}
      />
      <Text style={styles.text}>TAKE A BREAK</Text>
      <Text style={{...styles.text, color:'black',marginTop:20}}>{timeleft}</Text>
    </SafeAreaView>
  )
}

export default RestScreen

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'900',
        marginTop:50,
        textAlign:'center'
    }
})