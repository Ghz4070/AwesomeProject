import React, { Component } from 'react';
import StationVelib from '../components/StationVelib';

export default class ExoQuatreEtCinq extends Component {
    static navigationOptions = {
        title: "Quatre et Cinq"
    }

    static defaultProps = {
        latitude: 48.865983,
        longitude: 2.275725,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
        name: "Benjamin Godard - Victor Hugo",
    }

    render() {
        return (
            <StationVelib
                latitude={this.props.latitude}
                longitude={this.props.longitude}
                latitudeDelta={this.props.latitudeDelta}
                longitudeDelta={this.props.longitudeDelta}
                name={this.props.name}/>
        )
    }
}