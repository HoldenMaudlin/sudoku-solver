/*

Summary.
Number button to set active position of board to a number.

Parameters.
@prop       helpText      Brief description of screen to be shown before title.

Return.
One Cell each time called 

*/

import React, { Component } from 'react'
import {
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
    View,
    Dimensions,
    Text,
} from 'react-native'

var { height, width } = Dimensions.get('window')

class Number extends Component {

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPressDigit(this.props.num)}>
                <View style={styles.numberBox}>
                    <Text style={styles.digit} adjustsFontSizeToFit={true}>{this.props.num}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Number

const styles = StyleSheet.create({
    numberBox: {
        backgroundColor: 'pink',
        width: width / 5,
        height: width / 5,
        borderWidth: .3,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    digit: {
        fontSize: 100,
    }
})