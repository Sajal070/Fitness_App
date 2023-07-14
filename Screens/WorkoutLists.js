import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';
import { Feather } from '@expo/vector-icons';

const WorkoutLists = () => {
  const route=useRoute()
  // console.log(route.params);
  const navigation=useNavigation();
  const{completed,setcompleted}=useContext(FitnessItems)
  
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}
    style={{marginTop:30}}>
      <Image
      style={{width:'100%',height:180 }}
      source={{uri:route.params.image}}
      />
      <Ionicons 
      onPress={()=>navigation.goBack()}
      style={{position:'absolute',left:10,top:10}} 
      name="chevron-back" size={28} color="white" />
   
      {route.params.excersises.map((item,index)=>(
        <Pressable style={{margin:10,marginLeft:10, flexDirection:'row',alignItems:'center'}} key={index}>
          <Image
          style={{height:120,width:150}}
          source={{uri:item.image}}
          />
          <View style={{marginLeft:10}}>
          <Text style={{fontSize:17, fontWeight:'bold'}}> {item.name} </Text>
          <Text style={{marginTop:3, fontSize:18, color:'gray'}}> {item.sets} </Text>
          </View>
          {completed.includes(item.name)?(
            <View style={{flex:1,alignItems:'flex-end',marginBottom:20,paddingRight:5}}>

            <Feather name="check-square" size={24} color="green" />
            </View>
          ):
          (
            <></>
          )}
        </Pressable>
      ))}
      </ScrollView>
      <Pressable
      onPress={()=>
        {
          navigation.navigate('Workout',{
        excersises:route.params.excersises,
      })
      setcompleted([])
    }}
      style={{backgroundColor:'blue', padding:8, marginVertical:15, borderRadius:20, margin:5}}>
        <Text style={{textAlign:'center',color:'white', fontSize:16 }}>START</Text>
      </Pressable>
      </>
  )
}

export default WorkoutLists

const styles = StyleSheet.create({})