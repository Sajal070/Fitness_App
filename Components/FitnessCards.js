import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Data from '../Data/Data'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Typewriter from 'typewriter-effect';


const FitnessCards = () => {
    const fitnessData=Data;
    const navigation=useNavigation();
    
  return (
    <View>

        {/* <ScrollView> */}
        {fitnessData.map((item,key)=>(
            <Pressable key={item.id}
            onPress={()=>navigation.navigate('WorkoutList',{
                image:item.image,
                excersises:item.excersises,
                id:item.id
            })}
            style={{alignItems:'center',justifyContent:'center',marginTop:10}}>

                {item.id==1 ? (
                <Image 
                style={{
                    width:'95%', 
                    height:200,
                    borderRadius:8,
                    transform: [
                        {scaleX: -1},
                    ]
                }}
                source={{uri:item.image}}
                />)
            :(
                <Image 
                style={{
                    width:'95%', 
                    height:200,
                    borderRadius:8,
                }}
                source={{uri:item.image}}
                />
                )}
                
                    <Text style={styles.picturetext}>{item.name}</Text>
               
                <MaterialCommunityIcons style={{position:'absolute',color:'white',bottom:15,left:20}} name='lightning-bolt' size={24}/>
           </Pressable>
        ))}
        {/* </ScrollView> */}
    </View> 
  )
} 

export default FitnessCards

const styles = StyleSheet.create({
    picturetext:{
        color:'white',
        position:'absolute',
        fontSize:16,
        fontWeight:'bold',
        left:25,
        top:20,
        backgroundColor:'black',
        paddingHorizontal:10,
        paddingVertical:5
    },
})