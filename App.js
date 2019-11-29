import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AppNavigator from './src/components/navigation/AppNavigation'

export default function App() {
  return (
    <View style={styles.container} >
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});