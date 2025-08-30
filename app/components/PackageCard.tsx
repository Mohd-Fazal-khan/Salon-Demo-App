import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/constants/Colors";
import { fonts } from "@/constants/Fonts";

const { width, height } = Dimensions.get("window");

export default function PackageCard({
  title,
  bullets,
  rating = "4.3 | 2.3k",
  price = "₹1199",
  duration = "40 mins",
  uniqueId = null,
}) {
  if (uniqueId) {
    return (
      <View style={styles.cardUnique}>
        <Text style={styles.headerUnique}>{title}</Text>

        {/* Rating + ADD Button */}
        <View style={styles.topRowUnique}>
          <View style={styles.ratingUnique}>
            <Ionicons name="star" size={width * 0.037} color={colors.success} />
            <Text style={styles.ratingTextUnique}>{rating}</Text>
          </View>

          <TouchableOpacity style={styles.addBtnUnique}>
            <Ionicons name="add" size={width * 0.037} color={colors.primary} />
            <Text style={styles.addText}>ADD</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.metaUnique}>
          {price} • {duration}
        </Text>

        <View style={styles.bulletsContainerUnique}>
          {bullets.map((b, i) => {
            const [boldPart, normalPart] = b.split(":");
            return (
              <View key={i} style={styles.bulletRowUnique}>
                <Text style={styles.bulletDotUnique}>•</Text>
                <Text style={styles.bulletTextUnique}>{`${boldPart}:${normalPart}`}</Text>
              </View>
            );
          })}

          <TouchableOpacity style={styles.linkBtnUnique}>
            <Text style={styles.linkTextUnique}>Edit Your Package</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <View style={styles.topRow}>
        <View style={styles.rating}>
          <Ionicons name="star" size={width * 0.037} color={colors.success} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={width * 0.037} color={colors.primary} />
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.background}>
        <View style={{ gap: height * 0.01 }}>
          {bullets.map((b, i) => {
            const [boldPart, normalPart] = b.split(":");
            return (
              <View key={i} style={styles.bulletRow}>
                <Text style={{ color: colors.text, fontSize: width * 0.032 }}>•</Text>
                <Text style={styles.bullet}>
                  <Text style={{ fontWeight: "700" }}>{boldPart}:</Text>
                  {normalPart}
                </Text>
              </View>
            );
          })}
        </View>

        <TouchableOpacity style={styles.linkBtn}>
          <Text style={styles.linkText}>Edit Your Package</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.meta}>
          {price} • {duration}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /* DEFAULT CARD STYLES */
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: width * 0.04, 
    overflow: "hidden",
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: height * 0.017, 
    paddingHorizontal: width * 0.045,
  },
  headerTitle: {
    color: colors.background,
    fontSize: width * 0.043, 
    fontWeight: "700",
    textAlign: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.045,
    marginTop: height * 0.017,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.01,
  },
  ratingText: {
    fontSize: width * 0.032, 
    color: colors.text,
    fontWeight: "600",
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
    paddingVertical: height * 0.005, 
    paddingHorizontal: width * 0.025, 
    borderRadius: width * 0.02, 
    gap: width * 0.01,
  },
  addText: {
    fontSize: width * 0.032,
    color: colors.primary,
    fontWeight: "700",
  },
  background: {
    backgroundColor: colors.textbgcolor,
    padding: width * 0.025, 
    marginTop: height * 0.012,
    borderRadius: width * 0.02,
  },
  bulletRow: {
    flexDirection: "row",
    gap: width * 0.015,
    alignItems: "flex-start",
  },
  bullet: {
    fontSize: width * 0.032,
    color: colors.text,
  },
  linkBtn: {
    paddingVertical: height * 0.007, 
    paddingHorizontal: width * 0.025, 
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: width * 0.02,
    marginTop: height * 0.012,
    width: width * 0.37, 
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    fontSize: width * 0.032,
    color: colors.text,
  },
  footer: {
    marginTop: height * 0.017,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: width * 0.045,
    marginBottom: height * 0.017,
  },
  meta: {
    fontSize: width * 0.032,
    color: colors.muted,
    fontFamily:fonts.InterRegular
  },

  /* UNIQUE ID CARD STYLES */
  cardUnique: {
    flex: 1,
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: width * 0.04,
    padding: width * 0.035, // ~14
    overflow: "hidden",
  },
  headerUnique: {
    fontSize: width * 0.043,
    fontWeight: "600",
    color: colors.text,
    marginBottom: height * 0.012,
  },
  topRowUnique: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height * 0.012,
  },
  ratingUnique: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.01,
  },
  ratingTextUnique: {
    fontSize: width * 0.032,
    color: colors.text,
    fontWeight: "600",
  },
  bulletsContainerUnique: {
    padding: width * 0.025,
    borderRadius: width * 0.02,
  },
  bulletRowUnique: {
    flexDirection: "row",
    gap: width * 0.015,
    marginBottom: height * 0.007,
  },
  bulletDotUnique: {
    color: colors.text,
    fontSize: width * 0.032,
  },
  bulletTextUnique: {
    color: colors.text,
    fontSize: width * 0.032,
  },
  linkBtnUnique: {
    marginTop: height * 0.012,
    paddingVertical: height * 0.007,
    paddingHorizontal: width * 0.025,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: width * 0.02,
    width: width * 0.37,
    alignItems: "center",
    justifyContent: "center",
  },
  linkTextUnique: {
    fontSize: width * 0.032,
    color: colors.text,
  },
  addBtnUnique: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.025,
    borderRadius: width * 0.02,
    gap: width * 0.01,
  },
  metaUnique: {
    fontSize: width * 0.032,
    color: colors.text,
    fontFamily:fonts.InterRegular,
    marginBottom: height * 0.012,
    marginTop: 0,
  },
});
