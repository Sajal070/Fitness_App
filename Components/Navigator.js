import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import WorkoutLists from '../Screens/WorkoutLists';
import Workout from '../Screens/Workout';
import RestScreen from '../Screens/RestScreen';
import AnimationCard from '../Components/AnimationCard';

const Navigator = () => {
    const stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <stack.Screen name='WorkoutList' component={WorkoutLists} options={{headerShown:false}}/>
            <stack.Screen name='Workout' component={Workout} options={{headerShown:false}}/>
            <stack.Screen name='Rest' component={RestScreen} options={{headerShown:false}}/>
            <stack.Screen name='Done' component={AnimationCard} options={{headerShown:false}}/>

        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})