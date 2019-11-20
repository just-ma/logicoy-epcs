import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

const SearchBar = () => {
  return (
    <View>
      <Text>Search Bar</Text>
    </View>
  );
};

const SearchContainer = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.searchResult}>
        <Text>Search Container</Text>
      </View>
    </View>
  );
};

const ViewContainer = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>View Container</Text>
    </View>
  );
};

const Patients = () => {
  return (
    <View style={styles.container}>
      <SearchContainer />
      <ViewContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    flexDirection: "row"
  },
  searchContainer: {
    flex: 1
  },
  searchBarContainer: {
    height: 100,
    backgroundColor: "brown"
  },
  searchResult: {
    flex: 1,
    backgroundColor: "orange"
  },
  viewContainer: {
    flex: 3,
    backgroundColor: "green"
  }
});

export default Patients;
