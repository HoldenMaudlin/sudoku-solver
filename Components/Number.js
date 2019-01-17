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
    Text,
} from 'react-native'
import { Haptic } from 'expo'
import { Icon } from 'react-native-elements'
import { width } from '../Constants/Dimensions'
import ReactNativeHaptic from 'react-native-haptic';

class Number extends Component {

    onPressNumber() {
        this.props.onPressDigit(this.props.num)
    }

    render() {

        var button = 
            this.props.num ? <Text style={styles.digit} adjustsFontSizeToFit={true}>{this.props.num}</Text>
            : <Icon size={40} name='close-circle-outline' type='material-community'/>
        return (
            <TouchableOpacity onPress={() => {this.onPressNumber()}}>
                <View style={styles.numberBox}>
                    {button}
                </View>
            </TouchableOpacity>
        )
    }
}

export default Number

const styles = StyleSheet.create({
    numberBox: {
        width: width / 5,
        height: width / 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,  
        elevation: 10
    },
    digit: {
        fontSize: 100,
    }
})