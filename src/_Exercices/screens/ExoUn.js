import React, {
    Component,
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
} from 'react-native';

export default class ExoUn extends Component {
    state = {
        value: new Animated.Value(1)
    }

    componentDidMount() {
        Animated.loop(Animated.timing(
            this.state.value,
            {
                toValue: 4,
                duration: 1000,
            },
            this.state.value,
            {
                toValue: 0.4,
                duration: 1000,
            },
        )).start()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Animated.View style={[styles.styleViewYellow, { flex: this.state.value }]}>
                    <Text>View 1</Text>
                </Animated.View>
                <View style={styles.styleViewGreen}>
                    <Text>View 2</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    styleViewYellow: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: "center",
        justifyContent: "center",
    },
    styleViewGreen: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: "center",
        justifyContent: "center",
    },
})