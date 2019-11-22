import React, { useState } from "react";
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import UserItem from "../components/UserItem";
import users from "../mock/users";

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

const SearchContainer = ({ setUser }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.searchContainer}>
      <SearchBarContainer>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </SearchBarContainer>
      <FlatList
        data={users}
        bounceFirstRowOnMount={true}
        maxSwipeDistance={160}
        renderItem={({ item }) => <UserItem item={item} setUser={setUser} />}
      />
    </View>
  );
};

const PatientPreview = ({ user }) => {
  return (
    <View style={styles.patientPreview}>
      <View style={styles.previewHeader}>
        <Image style={styles.profilePicture} source={user.picture.large} />
        <View style={styles.previewInfo}>
          <Text>
            <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
          </Text>
          <Text>
            {`${user.location.street.number} ${user.location.street.name}`}
          </Text>
          <Text>
            {`${user.location.city}, ${user.location.state} ${user.location.postcode}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const ViewContainer = ({ user }) => {
  return (
    <View style={styles.viewContainer}>
      {user ? <PatientPreview user={user} /> : null}
    </View>
  );
};

const Patients = () => {
  const [user, setUser] = useState(null);
  return (
    <View style={styles.container}>
      <SearchContainer setUser={setUser} />
      <ViewContainer user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  searchContainer: {
    width: "350px"
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
  searchResultList: {
    flex: 1
  },
  viewContainer: {
    padding: 20
  },
  patientPreview: {
    margin: 20,
    padding: 40,
    backgroundColor: "white",
    borderRadius: 5
  },
  previewHeader: {
    flexDirection: "row"
  },
  profilePicture: {
    width: 128,
    height: 128,
    borderRadius: "50%",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)"
  },
  previewInfo: {
    margin: 40
  }
});

export default Patients;
