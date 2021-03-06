import React, { Component } from 'react'
import {
    View,
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
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.onPressSolve()} style={styles.button}>
                    <Text style={styles.buttonTitle}>Solve!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SolveButton

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