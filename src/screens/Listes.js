import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class Listes extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.homePage}>
                    Listes
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    homePage: {
        fontSize: 25,
        textAlign: 'center',
    }
})