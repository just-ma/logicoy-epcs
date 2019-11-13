import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route, Link } from './routing/routing';
import Home from './screens/Home';
import Patients from './screens/Patients';

export default function App() {
  return (
    <View style={styles.container}>
      <Router>
      <View> 
        <Link to="/">Home</Link>
        <Link to="/patients">Patients</Link>
      </View>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/patients" render={props => <Patients {...props} />} />
        </Switch>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
