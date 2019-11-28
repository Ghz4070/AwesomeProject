import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

// Geolocation.setRNConfiguration(config);

export default class ExoSix extends Component {
    componentDidMount() {
       
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ExoSix</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});