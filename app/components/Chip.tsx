import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { colors } from "@/constants/Colors";
import { fonts } from "@/constants/Fonts";

const { width, height } = Dimensions.get("window");

export default function Chip({ label, selected }) {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        selected && {
          backgroundColor: colors.primary + "20",
          borderColor: colors.primary,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          selected && { color: colors.primary, fontFamily: fonts.InterRegular },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingHorizontal: width * 0.035, 
    paddingVertical: height * 0.007, 
    backgroundColor: colors.chipBg,
    marginRight: width * 0.025, 
    marginBottom: height * 0.012, 
  },
  text: {
    fontSize: width * 0.032, 
    color: "#374151",
    fontFamily: fonts.InterMedium,
  },
});
