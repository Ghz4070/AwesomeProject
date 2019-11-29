import React, { Component } from 'react';
import {
    AsyncStorage,
} from 'react-native';

export const URL = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel'

export const getApiVelib = async (url) => {
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