import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams, useSearchParams } from 'expo-router'
import Header from '../../components/Header'
import { Themes } from '../../assets/Themes'

export default function DicePage() {
    const params = useSearchParams()

    const [currentDice, setCurrentDice] = useState(null)

    const DATA = [
      {
          img: Images.banners.tapas,
          id: "1",
          title: "Tapas in Barcelona",
          numRolled: 201,
          numSaved: 40,
          user: {
              username: "malina123",
              profilePic: require("../../assets/Themes/Images/profileImages/Malina.jpg"),
          },
      },
      {
          img: Images.banners.museum,
          id: "2",
          title: "Museums in the Bay",
          numRolled: 12,
          numSaved: 3,
          user: {
              username: "karinali",
              profilePic: require("../../assets/Themes/Images/profileImages/Malina.jpg"),
          },
      },
      {
          img: Images.banners.library,
          id: "3",
          title: "Stanford Study Spots",
          numRolled: 54,
          numSaved: 13,
          user: {
              username: "cliu18",
              profilePic: require("../../assets/Themes/Images/profileImages/Digo.jpeg"),
          }
      }
    ]

    useEffect(() => {
      if (params) {
        console.log("dice page", params)
        setCurrentDice(DATA.find(dice => dice.id === params.itemId))
        
        // const currentDice = DATA.find(dice => dice.id === params.itemId)
      }
    }, [params])

    useEffect(() => {
      console.log("current dice", currentDice)
    }, [currentDice])
    
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Browse" />
      {currentDice && (
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.headerText}>Community Dice</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleText}>{currentDice.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2, marginLeft: 10}}>
                <Image source={currentDice.user.profilePic} style={styles.profilePic}/>
                <Text style={{fontSize: 12}}>By @{currentDice.user.username}</Text>
            </View>
          </View>
        </View>
      )}
      
      
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.colors.background,
    },
    headerText: {
      fontFamily: "Poppins-Bold",
      fontSize: 24,
      marginTop: 30,
      marginBottom: 24,
    },
    titleText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      marginTop: 10,
      fontWeight: '700',
      alignItems: 'center'
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
})