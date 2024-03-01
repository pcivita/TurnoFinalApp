import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Themes } from '../assets/Themes';
import { FontAwesome5 } from '@expo/vector-icons';
import Images from '../assets/Themes/Images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PersonalDiceCard({ imageUri, title, subText}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.image}/>
      <View style={styles.textCol}>
        <Text style={styles.titleText}>{title}</Text>
        {subText === "" ? 
          <View style={{height: 16}} />
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    width: windowWidth * 0.95,
    borderRadius: 20,
    // height: 150,
    borderWidth: 1,
    borderColor: Themes.colors.mediumGray,
    padding: 10,
    flexDirection: 'row',
    alignItems: "center",
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
    height: 110,
    borderRadius: 10,
  },
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    width: "90%",
  },
  descText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
})