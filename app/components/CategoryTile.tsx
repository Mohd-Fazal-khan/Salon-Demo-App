import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { colors } from "@/constants/Colors";
import { fonts } from "@/constants/Fonts";

const { width, height } = Dimensions.get("window");

export default function CategoryTile({ label, imageUrl }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image source={imageUrl} style={styles.image} />
      <Text numberOfLines={2} style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.27, 
    borderColor: colors.border,
    borderRadius: width * 0.03, 
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: height * 0.10, 
    borderRadius: width * 0.02, 
    marginBottom: height * 0.012, 
    backgroundColor: "#eee",
  },
  label: {
    fontSize: width * 0.03, 
    color: colors.text,
    textAlign: "center",
    fontFamily: fonts.InterMedium,
  },
});
