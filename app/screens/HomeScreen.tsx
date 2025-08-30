import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  categoriesTop,
  hotFilters,
  hotPicks,
  essentialsHer,
  essentialsHim,
  packagesForYou,
} from "../../data/home";
import LocationBar from "@/app/components/LocationBar";
import SearchBar from "@/app/components/SearchBar";
import Chip from "@/app/components/Chip";
import ServiceCard from "@/app/components/ServiceCard";
import PackageCard from "@/app/components/PackageCard";
import { colors } from "@/constants/Colors";
import CategoryTile from "@/app/components/CategoryTile";
import { fonts } from "@/constants/Fonts";
import ServicesList from "@/app/components/ServiceList";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const horizontalPadding = 18;
const cardWidth = width * 0.65; // 65% of screen width for package cards

export default function HomeScreen() {
  const [selected, setSelected] = useState("Male");
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  const router = useRouter();

  const toggleFilter = (f: string) => {
    setSelectedFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <LocationBar />
        <SearchBar text={"Looking for.."} />

        {/* Section Header */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Every Service Sorted For You</Text>
        </View>

        {/* Categories */}
        <View style={styles.grid}>
          {categoriesTop.map((item) => (
            <CategoryTile
              key={item.id}
              label={item.label}
              imageUrl={item.imageUrl}
            />
          ))}
        </View>

        {/* Hot Picks Section */}
        <View style={styles.sectionContainer}>
          <View
            style={[
              styles.sectionHeaderContainer,
              { backgroundColor: colors.textbg },
            ]}
          >
            <Text style={styles.sectionHeader}>Hot Picks Near You</Text>
          </View>
          <View style={styles.textToggleContainer}>
            <TouchableOpacity onPress={() => setSelected("Male")}>
              <Text
                style={[
                  styles.toggleText,
                  selected === "Male" && styles.activeText,
                ]}
              >
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected("Women")}>
              <Text
                style={[
                  styles.toggleText,
                  selected === "Women" && styles.activeText,
                ]}
              >
                Women
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.filterRow}>
            {hotFilters.map((f) => (
              <Chip
                key={f}
                label={f}
                selected={selectedFilters.includes(f)}
                onPress={() => toggleFilter(f)}
              />
            ))}
          </View>
          <FlatList
            data={hotPicks}
            keyExtractor={(i) => i.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ServiceCard
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                duration={item.duration}
                imageUrl={item.imageUrl}
              />
            )}
          />
        </View>

        {/* Essentials for Her */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>
            Glow & Grace — Essentials for Her
          </Text>
        </View>
        <View style={styles.grid}>
          {essentialsHer.map((item) => (
            <CategoryTile
              key={item.id}
              label={item.label}
              imageUrl={item.imageUrl}
            />
          ))}
        </View>

        {/* View All Link */}
        <TouchableOpacity
          onPress={() => router.push("/screens/SalonServices")}
          style={styles.viewAllContainer}
        >
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>

        {/* Now Serving */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Now Serving</Text>
        </View>
        <ServicesList />

        {/* Essentials for Him */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>
            Sharp & Styled — Grooming Essentials for Him
          </Text>
        </View>
        <View style={styles.grid}>
          {essentialsHim.map((item) => (
            <CategoryTile
              key={item.id}
              label={item.label}
              imageUrl={item.imageUrl}
            />
          ))}
        </View>

        {/* Packages Section */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Packages for you</Text>
        </View>
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[styles.toggleBtn, selected === "Men" && styles.activeBtn]}
            onPress={() => setSelected("Men")}
          >
            <Text
              style={[
                styles.toggleBtnText,
                selected === "Men" && styles.activeBtnText,
              ]}
            >
              Men
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleBtn, selected === "Women" && styles.activeBtn]}
            onPress={() => setSelected("Women")}
          >
            <Text
              style={[
                styles.toggleBtnText,
                selected === "Women" && styles.activeBtnText,
              ]}
            >
              Women
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={packagesForYou}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.packageRow}
          renderItem={({ item }) => (
            <View style={styles.packageItem}>
              <PackageCard title={item.title} bullets={item.bullets} />
            </View>
          )}
        />

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
  scroll: { paddingBottom: 32 },

  sectionHeaderContainer: {
    paddingHorizontal: horizontalPadding,
    height: width * 0.1, // Responsive height
    justifyContent: "center",
  },
  sectionHeader: {
    fontSize: width * 0.038, // Responsive font
    fontFamily: fonts.InterMedium,
    color: colors.text,
  },
  sectionContainer: {
    marginTop: width * 0.045, // Responsive margin
  },

  toggleRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: width * 0.03,
    marginBottom: width * 0.025,
    paddingHorizontal: horizontalPadding,
  },
  toggleBtn: {
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.05,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeBtn: {
    backgroundColor: colors.text,
    borderColor: colors.background,
  },
  toggleBtnText: {
    fontSize: width * 0.035,
    fontWeight: "500",
    color: colors.text,
  },
  activeBtnText: {
    color: "#fff",
  },

  filterRow: {
    paddingHorizontal: horizontalPadding,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: width * 0.035,
  },
  textToggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: width * 0.025,
    marginTop: width * 0.025,
    gap: width * 0.05,
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
    gap: width * 0.040,
  },

  packageRow: {
    flexDirection: "row",
    gap: width * 0.035,
    paddingHorizontal: horizontalPadding,
    marginBottom: width * 0.045,
  },
  packageItem: {
    width: cardWidth,
  },

  viewAllContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: horizontalPadding,
    marginVertical: width * 0.015,
  },
  viewAllText: {
    fontSize: width * 0.033,
    color: colors.primary,
    textDecorationLine: "underline",
    fontFamily: fonts.InterMedium,
  },

  tagline: {
    marginTop: width * 0.08,
    paddingHorizontal: horizontalPadding,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  taglineRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  taglineTitle: {
    fontSize: width * 0.04,
    fontFamily: fonts.InterBold,
    color: "#00000048",
    textAlign: "left",
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
