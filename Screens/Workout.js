import { Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from '../Context';


const Workout = () => {
  const route = useRoute();
  // console.log(route.params);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  // console.log(current);
  // const obj=Object.entries(excersise)

  const { completed, setcompleted, workout, setworkout, calories, setcalories, minutes, setminutes } = useContext(FitnessItems)
  // console.log("excercise completed : ", completed);
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <Image
        style={{ width: '100%', height: 320 }}
        source={{ uri: current.image }}
      />
      <Text style={styles.txt}>{current.name}</Text>
      <Text style={{ ...styles.txt, marginTop: -20, fontSize: 40 }}>x{current.sets}</Text>
      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate('Done')
            setcompleted([...completed, current.name])
            // navigation.navigate('')
          }}
          style={styles.btn}
        >
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>DONE</Text>
          
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate('Rest')

            setcompleted([...completed, current.name])
            setworkout(workout + 1)
            setminutes(minutes + 1.5)
            setcalories(calories + 6.3)
            setTimeout(() => {
              setIndex(index + 1)
            }, 2000)
          }}
          style={styles.btn}
        >
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>DONE</Text>
        </Pressable>
      )}


      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 50, alignItems: 'center' }}>
        <TouchableOpacity style={styles.smallbtn}
          disabled={index === 0}
          onPress={() => {
            navigation.navigate('Rest')
            setTimeout(() => {
              setIndex(index - 1)
            }, 2000)
          }}
        >
          <Text style={styles.smalltxt}>PREV</Text>
        </TouchableOpacity>
        {index + 1 >= excersise.length ? (
          <TouchableOpacity style={styles.smallbtn}
            onPress={() => {
              navigation.navigate('Done')
            }}
          >
            <Text style={styles.smalltxt}>SKIP</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.smallbtn}
            onPress={() => {
              navigation.navigate('Rest')
              setTimeout(() => {
                setIndex(index + 1)
              }, 2000)
            }}
          >
            <Text style={styles.smalltxt}>SKIP</Text>
          </TouchableOpacity>
        )}

      </View>
    </SafeAreaView>
  )
}

export default Workout

const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    marginVertical: 30,
    fontSize: 30,
    fontWeight: 'bold',
    // color:'gray'
  },
  smalltxt: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    // paddingHorizontal:15,
    paddingVertical: 5
    // fontWeight:'bold',
  },
  btn: {
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 0
  },
  smallbtn: {
    backgroundColor: 'green',
    // alignItems:'center',
    borderRadius: 20,
    padding: 5,
    width: 88,
    // width:'60%',
    // marginLeft:'auto',
    // marginRight:'auto',
    // marginTop:50,
    // marginBottom:0 
  }
})