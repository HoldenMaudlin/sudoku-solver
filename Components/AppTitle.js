/*

Summary.
Styled title 'Sodoku Source' of main input page

Parameters.
@prop       helpText      Brief description of screen to be shown before title.

Return.
Styled title to the Input Screen page

*/

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

class AppTitle extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.head}>
                <Text style={[styles.title, {color: this.props.color}]}>Sudoku Source</Text>
                <Text style={styles.helpText}>{this.props.helpText}</Text>
            </View>
        )
    }
}

export default AppTitle

const styles = StyleSheet.create({
    head: {
        height: 80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
    }
})