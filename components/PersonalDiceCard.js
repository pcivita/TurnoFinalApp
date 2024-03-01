import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Themes } from '../assets/Themes';
import { FontAwesome5 } from '@expo/vector-icons';
import Images from '../assets/Themes/Images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function PersonalDiceCard({ imageUri, title, subText}) {
  console.log(imageUri)
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.image}/>
      <View style={styles.textCol}>
        <Text style={styles.titleText}>{title}</Text>
        {subText === "" ? 
            <View style={{height: 16}}/> 
        : 
            <Text style={styles.descText}>{subText}</Text>
        }
        <View style={styles.button}>
            <FontAwesome5 name="dice-d6" size={16} color="white" />
            <Text style={[styles.descText, {color: 'white'}]}>Roll</Text>    
        </View>
        <View style={styles.menuDots}>
            <FontAwesome5 name="ellipsis-h" size={12} color="black" />
        </View>
        
      </View>
      
      {/* <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2, marginLeft: 10}}>
        <Image source={user.profilePic} style={styles.profilePic}/>
        <Text style={{fontSize: 12}}>By @{user.username}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 8}}>
        <Image style={styles.bookmarkIcon} source={require('../assets/Themes/Images/other/bookmarkGrey.png')}/>
        <Text style={styles.statsText}>{numSaved}</Text>
        <Image style={styles.bookmarkIcon} source={require('../assets/Themes/Images/other/diceRoll.png')}/>
        <Text style={styles.statsText}>{numRolled}</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    width: windowWidth*0.95,
    borderRadius: 20,
    // height: 150,
    borderWidth: 1,
    borderColor: Themes.colors.mediumGray,
    padding: 10,
    flexDirection: 'row',
  },
  textCol: {
    marginLeft: 10,
    padding: 10,
    flex: 1,
  },
  button: {
    marginTop: 8,
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Themes.colors.salmon,
    gap: 8,
    borderRadius: 30,
    paddingVertical: 8,
  },
  menuDots: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  titleText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  descText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    // marginTop: 10,
    // marginLeft: 10,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 999,
    marginRight: 10,
  }, 
  statsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginRight: 4,
    color: "#9C9C9C",
  },
  bookmarkIcon: {
    width: 16,
    height: 16,
    marginRight: 2,
  }
})