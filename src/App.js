import React from "react";
import { Platform, View } from "react-native";
import { Router, Switch, Route } from "./routing/routing";
import NavigationBar from "./components/NavigationBar";
import Home from "./screens/Home";
import Patients from "./screens/Patients";
import { getStyle } from "./utils/styleUtils";

const isWeb = Platform.OS === "web";

export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        {isWeb && <NavigationBar />}
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/patients" render={props => <Patients {...props} />} />
        </Switch>
        {!isWeb && <NavigationBar />}
      </Router>
    </View>
  );
}

const stylesRoot = {
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  }
};

const stylesWeb = {};

const stylesMobile = {
  container: {
    paddingTop: 20
  }
};

const styles = getStyle(stylesRoot, stylesWeb, stylesMobile, isWeb);
