import { FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Link } from 'expo-router'
import DiceCard from '../../components/DiceCard'
import PersonalDiceCard from '../../components/PersonalDiceCard'
import { FontAwesome5 } from '@expo/vector-icons'
import { Themes } from '../../assets/Themes'

const windowWidth = Dimensions.get('window').width;

export default function Page() {
  const DICE_DATA = [
    {
        img: Images.banners.tapas,
        id: 1,
        title: "Tapas in Barcelona",
        numRolled: 201,
        numSaved: 40,
        user: {
            username: "malina123",
            profilePic: require("../../assets/Themes/Images/profileImages/Malina.jpg"),
        },
        activities: [
          "Bar Cañete",
          "Bar del Pla",
          "Bodega 1900",
          "Casa Lolea",
          "Casa Xica",
          "Cervecería Catalana",
        ]
    },
    {
        img: Images.banners.museum,
        id: 2,
        title: "Museums in the Bay",
        numRolled: 12,
        numSaved: 3,
        user: {
            username: "karinali",
            profilePic: require("../../assets/Themes/Images/profileImages/Malina.jpg"),
        },
        activities: [
          "SFMOMA",
          "De Young",
          "Asian Art Museum",
          "Cantor Arts Center",
          "The Tech Interactive",
          "Computer History Museum",
        ]
    },
    {
        img: Images.banners.library,
        id: 3,
        title: "Stanford Study Spots",
        numRolled: 54,
        numSaved: 13,
        user: {
            username: "cliu18",
            profilePic: require("../../assets/Themes/Images/profileImages/Digo.jpeg"),
        }, 
        activities: [
          "Green Library",
          "Tresidder",
          "Coupa Cafe",
          "Law School",
          "CCRMA Lounge",
          "Huang Basement",
        ]
    },
  ]
  
  const addDice = [{}];
  const dataList = [...DICE_DATA, ...addDice];

  return (
    <View style={styles.container}>
      <Header title="My Dice" />
      <View style={{height: 24}} />
      <FlatList 
        data={dataList}
        numColumns={2}
        renderItem={({item, index}) => 
        <TouchableOpacity style={{margin: 5}}>
          {index !== dataList.length - 1 ? (
            <Link href={{
                pathname: `/roll/roll`, 
                params: {
                  title: item.title,
                  numRolled: item.numRolled,
                  numSaved: item.numSaved,
                  username: item.user.username,
                  profilePic: item.user.profilePic,
                  img: item.img,
                  id: item.id,
                  activities: item.activities,
                }
              }}>
              <PersonalDiceCard 
                img={item.img}
                title={item.title}
                user={item.user}
                numRolled={item.numRolled}
                numSaved={item.numSaved}
              />
            </Link>
          ) : ( 
            <Link href={{
              pathname: `/roll/createNewDice`, 
            }}>
              <View style={styles.createDiceContainer}>
                <FontAwesome5
                  name="plus"
                  size={45}
                  color={Themes.colors.salmon}
                />
              </View>
            </Link>
          )}
          </TouchableOpacity>
        }
        keyExtractor={(item) => item.id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  createDiceContainer: {
    width: (windowWidth / 2) - (windowWidth * 0.05),
    borderRadius: 20,
    height: 250,
    borderWidth: 1,
    borderColor: Themes.colors.mediumGray,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
})