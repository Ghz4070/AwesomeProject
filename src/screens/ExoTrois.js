import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    AsyncStorage,
} from 'react-native';

export default class ExoTrois extends Component {
    state = {
        value: [],
        url: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=1&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state'
    }

    componentDidMount() {
        this.getApiVelib(this.state.url)
    }

    getApiVelib = async (url) => {
        try {
            let response = await fetch(
                url,
            );
            let responseJson = await response.json();

            if (responseJson !== null) {
                await AsyncStorage.setItem('responseJson', JSON.stringify(responseJson));
                return responseJson;
            }
        } catch (error) {
            const data = await AsyncStorage.getItem('responseJson');
            return JSON.parse(data);
        }
    }

    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.homePage}>
                    Mise en cache responseJson
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