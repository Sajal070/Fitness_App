import { Animated, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import FitnessCards from '../Components/FitnessCards'
import { FitnessItems } from '../Context'

const HomeScreen = () => {
    const { completed, setcompleted, workout, setworkout, calories, setcalories, minutes, setminutes } = useContext(FitnessItems)
    console.log("excercise completed : ", completed);

    return (
        <>
                <View style={{ backgroundColor: '#CD853F', padding: 10, height: 150, width: '100%', marginTop: 30 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign:'center', marginTop:10}}>PERSONAL HOME WORKOUT</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 }}>
                        <View>
                            <Text style={styles.txt}>{workout}</Text>
                            <Text style={styles.subtext}>WORKOUTS</Text>
                        </View>

                        <View>
                            <Text style={styles.txt}>{Math.ceil(calories)}  KCAL</Text>
                            <Text style={styles.subtext}>CALORIES</Text>
                        </View>

                        <View>
                            <Text style={styles.txt}>{minutes}</Text>
                            <Text style={styles.subtext}>MINUTES</Text>
                        </View>
                    </View>
                </View>
        <ScrollView style={{marginBottom:20}}
        showsVerticalScrollIndicator={false}
        >
            <FitnessCards />
        </ScrollView>
        </>
            )
}

export default HomeScreen

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    subtext: {
        color: '#D0D0D0',
        fontSize: 17,
        marginTop: 10
    }
})