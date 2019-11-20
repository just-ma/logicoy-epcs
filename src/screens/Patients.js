import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <TextInput
      placeholder="John Smith"
      style={styles.searchBar}
      value={searchValue}
      onChangeText={text => setSearchValue(text)}
    />
  );
};

const SearchBarContainer = ({ children }) => {
  return <View style={styles.searchBarContainer}>{children}</View>;
};

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.searchContainer}>
      <SearchBarContainer>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </SearchBarContainer>
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
    padding: 20
  },
  searchBar: {
    padding: 15,
    borderRadius: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "white",
    fontSize: 18
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
