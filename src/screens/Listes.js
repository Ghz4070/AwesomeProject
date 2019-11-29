import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { getApiVelib, URL } from '../components/GetApiVelib'

export default class Listes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
    }

    componentDidMount() {
        this.velib()
    }

    velib = async () => {
        const velibs = await getApiVelib(URL)
        this.setState({ datas: velibs })
        // console.log(velibs);
    }

    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.homePage}>Listes</Text>
                {this.state.datas.map(velib => {
                    return <Text style={styles.homePage}>{velib.fields.station_name}</Text>
                })}
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