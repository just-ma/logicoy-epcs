import React, { useState } from "react";
import {
  Button,
  FlatList,
  View,
  Image,
  Platform,
  Text,
  TextInput
} from "react-native";
import UserItem from "../components/UserItem";
import users from "../mock/users";
import { getStyle } from "../utils/styleUtils";

const isWeb = Platform.OS === "web";

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
        keyExtractor={(item, i) => i.toString()}
      />
    </View>
  );
};

const PatientPreview = ({ user }) => {
  return (
    <View style={styles.patientPreview}>
      <View style={styles.previewHeader}>
        <Image
          style={styles.profilePicture}
          source={{ uri: user.picture.large }}
        />
        <View style={styles.previewInfo}>
          <Text>
            <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
          </Text>
          <View style={styles.previewButton}>
            <Button title="View Profile" />
          </View>
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
      {isWeb && <ViewContainer user={user} />}
    </View>
  );
};

const stylesRoot = {
  container: {
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
  searchResultList: {
    flex: 1
  }
};

const stylesWeb = {
  container: {
    flexDirection: "row"
  },
  searchContainer: {
    width: 350
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
    borderRadius: 64
  },
  previewInfo: {
    margin: 40
  },
  previewButton: {
    width: 150,
    paddingBottom: 20
  }
};

const stylesMobile = {
  searchContainer: {
    flex: 1
  },
};

const styles = getStyle(stylesRoot, stylesWeb, stylesMobile, isWeb);

export default Patients;
