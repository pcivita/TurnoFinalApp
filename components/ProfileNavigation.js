import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";
import KudosIcon from "./Icons/Kudos";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const ProfileNavigation = ({ onData }) => {
  const [activeTab, setActiveTab] = useState("Posts"); 
  const tabs = ["Posts", "Stats"];
  const overlayPosition = useSharedValue(0);

  const overlayStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: overlayPosition.value }],
    };
  });

  const handleTabChange = (tab) => {
    onData(tab);
    setActiveTab(tab);
    overlayPosition.value = withTiming(tab === "Posts" ? 0 : 97, { duration: 300 });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.overlay, overlayStyle]} />

      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          style={styles.tab}
          onPress={() => handleTabChange(tab)}
        >
          <KudosIcon size={18} color={activeTab === tab ? "black" : "gray"} notFilled={true} />
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
    padding: 5,
    backgroundColor: Themes.colors.mediumGray,
    borderRadius: 30,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    width: '49%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 999,
    left: 5,
    top: 5,
  },
  tab: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },  
  tabText: {
    color: 'gray',
    fontSize: 14,
  },
  activeTabText: {
    color: 'black',
  },
});

export default ProfileNavigation;
