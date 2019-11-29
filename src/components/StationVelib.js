import React, { Component } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';

export default class StationVelib extends Component {
    render() {
        return (
            <MapView
                style={styles.map}
                showsUserLocation={true}
                initialRegion={{
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                    latitudeDelta: this.props.latitudeDelta,
                    longitudeDelta: this.props.longitudeDelta,
                }}
            >
                {this.props.datas.map(velib => {
                    return <Marker coordinate={{ latitude: velib.fields.geo[0], longitude: velib.fields.geo[1] }}
                        title={velib.fields.station_name} />
                })}
                
            </MapView>
        );
    }
}

StationVelib.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    latitudeDelta: PropTypes.number,
    longitudeDelta: PropTypes.number,
    name: PropTypes.string,
};

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})



