import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { Router, Switch, Route } from "./routing/routing";
import NavigationBar from "./components/NavigationBar";
import Home from "./screens/Home";
import Patients from "./screens/Patients";

export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        {Platform.OS === "web" && <NavigationBar />}
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/patients" render={props => <Patients {...props} />} />
        </Switch>
        {Platform.OS !== "web" && <NavigationBar />}
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  }
});
