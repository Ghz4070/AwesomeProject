import React, { Component } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';

export default class StationVelib extends Component {
    render() {
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                    latitudeDelta: this.props.latitudeDelta,
                    longitudeDelta: this.props.longitudeDelta,
                }}
            >
                {/* {this.state.markers.map(marker => ( */}
                    <Marker coordinate={{ latitude: this.props.latitude, longitude: this.props.longitude }}
                        title={this.props.name} />
                {/* ))} */}
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



