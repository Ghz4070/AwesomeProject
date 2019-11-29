import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Map from './src/screens/Map'
import Listes from './src/screens/Listes';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const Nav = createMaterialTopTabNavigator(
  {
    Listes: { screen: Listes },
    Map: { screen: Map },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
      },
      labelStyle: {
        textAlign: 'center',
        color: 'black'
      },
      indicatorStyle: {
        opacity: 0,
      }
    }
  }
);

const AppContainer = createAppContainer(Nav);

export default () => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});