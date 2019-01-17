import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native'
import { width } from '../Constants/Dimensions'
import { mainColor } from '../Constants/Colors';

class SideButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.hint)
        if (this.props.hint) {
            console.log('hi')
            var background =   {
                backgroundColor: mainColor,
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.5,
                shadowRadius: 4,  
                elevation: 10,
            }
            var color = 'white'
        } else {
            var color = mainColor
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.onPress()} style={[styles.button, background]}>
                    <Text style={[styles.buttonTitle, {color: color}]}>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SideButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        // Separate from numbers and bottom
        marginTop: 20,
        marginBottom: 30,

        height: 40,
        width: 90,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 0.5,  
        elevation: 10
    },
    buttonTitle: {
        fontSize: 24,
    }
})