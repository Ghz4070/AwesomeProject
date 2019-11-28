import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import ExoUn from './src/screens/ExoUn';
import ExoTrois from './src/screens/ExoTrois';
import ExoQuatreEtCinq from './src/screens/ExoQuatreEtCinq';
import ExoSix from './src/screens/ExoSix'
import Home from './src/screens/Home';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const Nav = createMaterialTopTabNavigator(
  {
    Home: { screen: Home },
    Un: { screen: ExoUn },
    Trois: { screen: ExoTrois },
    QuatreEtCinq: { screen: ExoQuatreEtCinq },
    Six: { screen: ExoSix },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'green',
      }
    }
  }
);

const TopBar = createStackNavigator({
  tabScreen: {
    screen: Nav,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'green'
      },
      title: '  ⃔  Exo Deux   ⃕ '
    }
  }
})

const AppContainer = createAppContainer(TopBar);

export default () => {
  return (
    // SafeAreaView permet de rajouter des en haut et en bas de la page
    // <SafeAreaView style={styles.container} >   
    // <StatusBar /> 
    <AppContainer />
    //</SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});