import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { colors } from "@/constants/Colors";
import { fonts } from "@/constants/Fonts";
import SearchBar from "@/app/components/SearchBar";
import CategoryTile from "@/app/components/CategoryTile";
import PackageCard from "@/app/components/PackageCard";
import { salonservices, service } from "@/data/home";

const { width } = Dimensions.get("window");
const horizontalPadding = 18;
const responsiveFont = (size: number) => width * size;

export default function SalonServices() {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedPackage, setSelectedPackage] = useState("Women");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={[styles.scroll, { flexGrow: 1 }]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={width * 0.06} />
          </TouchableOpacity>
          <Text style={styles.headertxt}>Salon Services</Text>
        </View>

        {/* Search Bar */}
        <SearchBar text={"Search Here"} />

        {/* Gender Toggle */}
        <View style={styles.textToggleContainer}>
          <TouchableOpacity onPress={() => setSelectedGender("Male")}>
            <Text
              style={[
                styles.toggleText,
                selectedGender === "Male" && styles.activeText,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedGender("Women")}>
            <Text
              style={[
                styles.toggleText,
                selectedGender === "Women" && styles.activeText,
              ]}
            >
              Women
            </Text>
          </TouchableOpacity>
        </View>

        {/* Salon Services Grid */}
        <View style={styles.grid}>
          {salonservices.map((item) => (
            <CategoryTile
              key={item.id}
              label={item.label}
              imageUrl={item.imageUrl}
            />
          ))}
        </View>

        {/* Packages Section */}
        <View
          style={[
            styles.sectionHeaderContainer,
            { backgroundColor: colors.textbg },
          ]}
        >
          <Feather name="package" size={width * 0.06} color="black" />
          <Text style={styles.sectionHeader}>Packages</Text>
        </View>

        {/* Package Toggle */}
        <View style={styles.textToggleContainer}>
          <TouchableOpacity onPress={() => setSelectedPackage("Women")}>
            <Text
              style={[
                styles.toggleText,
                selectedPackage === "Women" && styles.activeText,
              ]}
            >
              Packages for Women
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedPackage("Men")}>
            <Text
              style={[
                styles.toggleText,
                selectedPackage === "Men" && styles.activeText,
              ]}
            >
              Packages for Men
            </Text>
          </TouchableOpacity>
        </View>

        {/* Vertical Packages List */}
        <FlatList
          data={service}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.packageColumn}
          renderItem={({ item }) => (
            <View style={styles.packageItem}>
              <PackageCard
                title={item.title}
                bullets={item.bullets}
                uniqueId="alon"
              />
            </View>
          )}
          scrollEnabled={false} // Scroll handled by ScrollView
        />

        {/* Spacer to push tagline to bottom */}
        <View style={styles.flexSpacer} />

        {/* Tagline */}
        <View style={styles.tagline}>
          <View style={styles.taglineRow}>
            <Text style={styles.taglineTitle}>Where self-care meets </Text>
            <Text style={styles.heart}>♥</Text>
          </View>
          <Text style={styles.taglineTitle}>convenience</Text>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { paddingBottom: width * 0.08 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalPadding,
    marginBottom: width * 0.035,
  },
  headertxt: {
    fontFamily: fonts.InterMedium,
    fontSize: width * 0.045, // responsive font
    marginLeft: width * 0.025,
  },

  textToggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: horizontalPadding,
    marginBottom: width * 0.025,
    marginTop: width * 0.025,
    gap: width * 0.045,
  },
  toggleText: {
    fontSize: width * 0.035,
    color: "#666",
    fontWeight: "500",
  },
  activeText: {
    color: colors.primary,
    fontWeight: "700",
  },

  grid: {
    paddingHorizontal: horizontalPadding,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: width * 0.035,
  },

  sectionHeaderContainer: {
    paddingHorizontal: horizontalPadding,
    flexDirection: "row",
    alignItems: "center",
    height: width * 0.1,
    marginTop: width * 0.045,
  },
  sectionHeader: {
    fontSize: width * 0.035,
    fontFamily: fonts.InterMedium,
    color: colors.text,
    paddingHorizontal: width * 0.025,
  },

  packageColumn: {
    paddingHorizontal: horizontalPadding,
    paddingVertical: width * 0.025,
  },
  packageItem: {
    marginBottom: width * 0.035,
  },

  flexSpacer: {
    flex: 1,
  },

  tagline: {
    paddingHorizontal: horizontalPadding,
    paddingVertical: width * 0.06,
    borderTopWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  taglineRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  taglineTitle: {
    fontSize: width * 0.04,
    fontFamily: fonts.InterBold,
    color: "#00000048",
  },
  heart: {
    fontSize: width * 0.045,
    color: "#EF4444",
    marginLeft: 4,
  },

  bottomSpacer: {
    height: width * 0.15,
  },
});
