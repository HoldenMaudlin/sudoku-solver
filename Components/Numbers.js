/*

Summary.
Styled numbers into a number pad

Parameters.
@prop       helpText      Brief description of screen to be shown before title.

Return.
One Cell each time called 

*/

import React, { Component } from 'react'
import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native'
import Number from './Number'

class Numbers extends Component {

    render() {
        var line1 = []
        var line2 = []
        for (var i = 0; i < 5; i ++ ) {
            line1.push(
                <Number onPressDigit={this.props.onPressDigit.bind(this)} key={i} num={i}/>
            )
            line2.push(
                <Number onPressDigit={this.props.onPressDigit.bind(this)} key={i + 5} num={i + 5}/>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    {line1}
                </View>
                <View style={styles.row}>
                    {line2}
                </View>
            </View>
        )
    }
}

export default Numbers

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row'
    }
})