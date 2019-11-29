import React, { Component } from 'react';
import { View } from 'react-native';
import StationVelib from './../components/StationVelib'
import Geolocation from '@react-native-community/geolocation';
import { getApiVelib, URL } from '../components/ExoTrois';

export default class ExoSix extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: '',
            longitude: '',
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
            name: '',
        }
    }

    componentDidMount() {
        this.getGeolocation()
    }

    getGeolocation = async () => {
        Geolocation.getCurrentPosition(info => {
            this.setState({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                name: 'Ma Position',
            })

            // TODO Add geolocation to url request
            getApiVelib(URL).then(velibs => {
                console.log(velibs);
            })
        });
    }

    render() {
        let station = null

        if (this.state.latitude != '') {
            station = <StationVelib
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                latitudeDelta={this.state.latitudeDelta}
                longitudeDelta={this.state.longitudeDelta}
                name={this.state.name}>
            </StationVelib>
        }

        // console.log(this.state)
        return (
            <View>
                {station}
            </View>
        )
    }
}