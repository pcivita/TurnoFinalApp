import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";

const ProgressNavigation = ({ onData }) => {
  const [activeTab, setActiveTab] = useState("Stats"); // Default active tab

  const tabs = ["Posts", "Stats"];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => {
            onData(tab);
            setActiveTab(tab);
          }}
        >
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 22,
    backgroundColor: "#E0E0E0",
    borderRadius: 25,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    // Add additional styling to match the screenshot
  },
  activeTab: {
    backgroundColor: Themes.colors.background, // Active tab background color
  },
  tabText: {
    fontWeight: "bold",
    fontSize: 20,
    // Add additional text styling
  },
});

export default ProgressNavigation;
