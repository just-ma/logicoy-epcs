import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useHistory } from "react-router-dom";

const pages = [
  { address: "/", label: "Home" },
  { address: "/patients", label: "Patients" }
];

const NavigationBar = () => {
  const [active, setActive] = useState("/");
  let history = useHistory();
  useEffect(() => {
    history.push(active);
  }, [active]);

  const navigatePage = address => {
    setActive(address);
  };

  return (
    <View style={styles.container}>
      {pages.map((p, i) => (
        <Text
          key={i}
          style={styles.item}
          onPress={() => navigatePage(p.address)}
        >
          {p.label}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
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
