import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "../routing/routing";

const links = [
  { address: "/", name: "Home" },
  { address: "/patients", name: "Patients" }
];

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      {links.map(l => (
        <Link style={{ textDecoration: "none" }} to={l.address}>
          <Text style={styles.item}>{l.name}</Text>
        </Link>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "black"
  },
  item: {
    color: "white",
    margin: 30,
    fontSize: 16
  }
});

export default NavigationBar;
