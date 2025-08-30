import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/Colors";
import { fonts } from "@/constants/Fonts";

const { width, height } = Dimensions.get("window");

export default function LocationBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={width * 0.045} color={colors.text} />
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <Text style={styles.title}>Your Location?</Text>
          <Ionicons name="chevron-down" size={width * 0.04} color={colors.muted} />
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Add Your Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.045, 
    paddingVertical: height * 0.017, 
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.035, 
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.01, 
  },
  title: {
    fontSize: width * 0.037, 
    fontFamily: fonts.InterMedium,
    color: colors.text,
  },
  link: {
    marginTop: height * 0.0025, 
    fontSize: width * 0.032, 
    fontFamily: fonts.InterRegular,
    textDecorationLine: "underline",
    color: colors.primary,
  },
});
