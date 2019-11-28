import React, { useState, useEffect } from "react";
import { Button, View, Platform, StyleSheet, Text } from "react-native";
import { useHistory } from "react-router-dom";

const pages = [
  { address: "/", label: "Home" },
  { address: "/patients", label: "Patients" }
];

const isWeb = Platform.OS === "web";

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
        <View key={i} style={styles.item}>
          <Button
            color="black"
            title={p.label}
            onPress={() => navigatePage(p.address)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: isWeb ? "row-reverse" : "row",
    justifyContent: isWeb ? "flex-start" : "center",
    paddingHorizontal: 40,
    backgroundColor: "grey"
  },
  item: {
    margin: 10
  }
});

export default NavigationBar;
