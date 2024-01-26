import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, Stack, useLocalSearchParams, useSearchParams } from 'expo-router'
import Header from '../../components/Header'
import { Themes } from '../../assets/Themes'

export default function DicePage() {
    const params = useLocalSearchParams()

    const [currentDice, setCurrentDice] = useState(null)
    const [activities, setActivities] = useState([])

    const handleImageSource = (index) => {
      switch (index) {
        case 0:
          return require('../../assets/Themes/Images/diceIcons/diceOne.png')
        case 1:
          return require('../../assets/Themes/Images/diceIcons/diceTwo.png')
        case 2:
          return require('../../assets/Themes/Images/diceIcons/diceThree.png')
        case 3:
          return require('../../assets/Themes/Images/diceIcons/diceFour.png')
        case 4:
          return require('../../assets/Themes/Images/diceIcons/diceFive.png')
        case 5:
          return require('../../assets/Themes/Images/diceIcons/diceSix.png')
        default:
          return require('../../assets/Themes/Images/diceIcons/diceOne.png')
      }
    }
    const handleAdd = () => {
      router.replace('/roll')
    }
    useEffect(() => {
      if (params) {
        console.log("dice page", params)
        const arr = params.activities.split(',')
        setActivities(arr)
        
        
        // const currentDice = DATA.find(dice => dice.id === params.itemId)
      }
    }, [params])

    
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Browse" />
      {params && (
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.headerText}>Community Dice</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleText}>{params.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2, marginLeft: 10}}>
                <Image source={params.profilePic} style={styles.profilePic}/>
                <Text style={{fontSize: 12}}>By @{params.username}</Text>
            </View>
          </View>
        </View>
      )}
      {/* <View style={{alignItems: 'center', width: '100%'}}> */}
      <FlatList
        data={activities}
        numColumns={2}
        renderItem={({item, index}) => (
          <View style={styles.activityBox}>
            <Image source={handleImageSource(index)} style={{width: 50, height: 50}} />
            <Text style={styles.boxText}>{item}</Text>
          </View>
        )}
        keyExtractor={item => item}
        contentContainerStyle={styles.listContentContainer}
        ListFooterComponent={
          <TouchableOpacity style={styles.addToDiceButton} onPress={handleAdd}>
          <Text style={styles.addToDiceText}>Add to My Dice</Text>
        </TouchableOpacity>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.background,
},
addToDiceButton: {
  backgroundColor: Themes.colors.salmon,
  width: 200,
  marginTop: 12,
  height: 40,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
},
addToDiceText: {
  fontFamily: 'Poppins-Bold',
  fontSize: 16,
  color: 'white',
},
headerText: {
  fontFamily: "Poppins-Bold",
  fontSize: 24,
  marginTop: 30,
  marginBottom: 24,
},
titleText: {
  fontFamily: 'Poppins-Bold',
  fontSize: 16,
  marginTop: 10,
  fontWeight: '700',
  alignItems: 'center',
  textAlign: 'center',
},
boxText: {
  fontFamily: 'Poppins-Bold',
  fontSize: 16,
  marginTop: 10,
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
},
activityBox: {
  alignItems: 'center',
  width: 140,
  height: 140,
  backgroundColor: Themes.colors.salmonLight,
  borderRadius: 5,
  padding: 16,
  margin: 8, // added space between elements
},
profilePic: {
    width: 30,
    height: 30,
    borderRadius: 999,
    marginRight: 10,
}, 
image: {
  width: "100%",
  height: 120,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
listContentContainer: {
  justifyContent: 'center', // centers the items in FlatList
  alignItems: 'center',
},
})