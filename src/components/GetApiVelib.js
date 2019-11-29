import {
    AsyncStorage,
} from 'react-native';

export const URL = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=20&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state'

export const getApiVelib = async (url) => {
    try {
        let response = await fetch(
            url,
        );
        let responseJson = await response.json();

        if (responseJson !== null) {
            await AsyncStorage.setItem('responseJson', JSON.stringify(responseJson.records));
            //console.log(responseJson)
            return responseJson.records;
        }
    } catch (error) {
        const data = await AsyncStorage.getItem('responseJson');
        return JSON.parse(data);
    }
}