import React, { Component } from 'react';
import { View } from 'react-native';
import StationVelib from '../components/StationVelib'
import Geolocation from '@react-native-community/geolocation';
import { getApiVelib, URL } from '../components/GetApiVelib';

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: [],
            latitude: '',
            longitude: '',
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
            name: '',
        }
    }

    componentDidMount() {
        this.getGeolocation()
        this.velib()
    }

    getGeolocation = async () => {
        Geolocation.getCurrentPosition(info => {
            this.setState({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
            })
        });
    }

    velib = async () => {
        const velibs = await getApiVelib(URL)
        this.setState({ datas: velibs })
        // console.log(this.state)
    }

    render() {
        let station = null

        if (this.state.latitude != '') {
            station = <StationVelib
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                latitudeDelta={this.state.latitudeDelta}
                longitudeDelta={this.state.longitudeDelta}
                name={this.state.name}
                datas={this.state.datas}>
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