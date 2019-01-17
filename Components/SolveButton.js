import React, { Component } from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native'
import { width } from '../Constants/Dimensions'
import { mainColor } from '../Constants/Colors';

class SolveButton extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPressSolve()} style={styles.button}>
                <Text style={styles.buttonTitle}>Solve!</Text>
            </TouchableOpacity>
        )
    }
}

export default SolveButton

const styles = StyleSheet.create({
    button: {
        // Separate from numbers
        marginTop: 20,
        height: 50,
        width: 120,
        borderRadius: 5,
        backgroundColor: mainColor,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 4,  
        elevation: 10
    },
    buttonTitle: {
        fontSize: 30,
        color: 'white',
    }
})