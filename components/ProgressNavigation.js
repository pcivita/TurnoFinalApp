import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";
const ProgressNavigation = () => {
  const [activeTab, setActiveTab] = useState("D"); // Default active tab

  const tabs = ["Journey", "Stats"];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
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
    padding: 10,
    backgroundColor: Themes.colors.background, // Use the background color of your choice
    borderRadius: 20,
    borderWidth: 1,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    // Add additional styling to match the screenshot
  },
  activeTab: {
    backgroundColor: "#E0E0E0", // Active tab background color
  },
  tabText: {
    fontWeight: "bold",
    // Add additional text styling
  },
});

export default ProgressNavigation;
