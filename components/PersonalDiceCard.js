import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Themes } from '../assets/Themes';
import { FontAwesome5 } from '@expo/vector-icons';
import Images from '../assets/Themes/Images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function PersonalDiceCard({ img, title, user, numSaved, numRolled}) {
  console.log(img);
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image}/>
      <View style={styles.row1}>
        <FontAwesome5 name="dice-d6" size={16} color="black" />
        <Text style={styles.titleText}>{title}</Text>    
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
    width: (windowWidth / 2) - (windowWidth * 0.05),
    borderRadius: 20,
    height: 150,
    borderWidth: 1,
    borderColor: Themes.colors.mediumGray,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleText: {
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