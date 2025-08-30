import { colors } from "@/constants/Colors";
import { services } from "@/data/home";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={item.image}
        style={styles.image}
        imageStyle={{ borderRadius: height * 0.015 }}
      >
        <LinearGradient
          colors={["#99788A", "transparent"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.gradient}
        />
        <View style={styles.overlay}>
          <View style={styles.left}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.details}>
              {item.price} • {item.duration}
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default function ServicesList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ServiceCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: height * 0.012, 
    marginHorizontal: width * 0.05, 
  },
  card: {
    width: width * 0.65, 
    marginRight: width * 0.03, 
    borderRadius: height * 0.015, 
    overflow: "hidden",
    shadowColor: "pink",
    shadowOffset: { width: 0, height: height * 0.007 },
    shadowOpacity: 0.3,
    shadowRadius: height * 0.01,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: height * 0.23, 
    justifyContent: "flex-end",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: height * 0.015,
  },
  overlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: height * 0.012,
    borderBottomLeftRadius: height * 0.015,
    borderBottomRightRadius: height * 0.015,
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: height * 0.02, 
    fontWeight: "bold",
    color: "#fff",
  },
  details: {
    fontSize: height * 0.018,
    color: "#fff",
    marginTop: height * 0.003,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: height * 0.007,
    paddingHorizontal: width * 0.03,
    borderRadius: height * 0.008,
    marginLeft: width * 0.025,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: height * 0.018,
  },
});
