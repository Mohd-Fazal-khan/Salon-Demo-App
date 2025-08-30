import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { colors } from "@/constants/Colors";
import { fonts } from "@/constants/Fonts";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function ServiceCard({
  title,
  subtitle,
  price,
  duration,
  imageUrl,
  ctaLabel = "ADD",
}) {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        {subtitle ? (
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
        <View style={styles.metaRow}>
          {price ? <Text style={styles.meta}>{price}</Text> : null}
          {duration ? <Text style={styles.meta}> • {duration}</Text> : null}
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Ionicons name="add" size={height * 0.018} color={colors.primary} />
          <Text style={styles.buttonText}>{ctaLabel}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.76, 
    flexDirection: "row",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: height * 0.02,
    padding: width * 0.02, 
    gap: width * 0.02,
    marginHorizontal: width * 0.025,
    position: "relative",
  },
  image: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: height * 0.015,
    backgroundColor: "#eee",
  },
  title: {
    fontSize: height * 0.017,
    fontFamily: fonts.InterRegular,
    color: colors.primary,
    marginBottom: height * 0.004,
  },
  subtitle: {
    fontSize: height * 0.015,
    color: colors.muted,
    marginBottom: height * 0.035,
  },
  metaRow: { flexDirection: "row", alignItems: "center" },
  meta: {
    fontSize: height * 0.015,
    color: colors.text,
    fontFamily: fonts.InterRegular,
  },
  button: {
    position: "absolute",
    bottom: height * 0.01,
    right: width * 0.02,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: height * 0.012,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.006,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: height * 0.015,
    color: colors.primary,
    fontFamily: fonts.InterMedium,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.01,
  },
});
