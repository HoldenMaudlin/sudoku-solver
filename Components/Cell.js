/*

Summary.
Cell input component for Sodoku Board

Parameters.
@prop       helpText      Brief description of screen to be shown before title.

Return.
One Cell each time called 

*/

import React, { Component } from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native'

var { height, width } = Dimensions.get('window')

class Cell extends Component {
    consturctor(props) {
        super(props) 
        this.state = {
            num: ''
        }
    }

    render() {
        if (this.props.num.index == this.props.index && this.props.num.num) {
            this.setState({
                num: this.props.num.num
            })
            console.log(this.props.num.num)
        }
        const activeRow = Math.floor(this.props.activeCell / 9);
        const activeCol = this.props.activeCell % 9;
        if (Math.floor(this.props.index / 9) == activeRow && this.props.index % 9 == activeCol) {
            var color = 'white'
        } else if (this.props.index % 9 == activeCol || Math.floor(this.props.index / 9) == activeRow) {
            var color = 'grey'
        }
        return (
            <TouchableOpacity onPress={() => this.props.onPressCell(this.props.index)} style={[styles.cell, {backgroundColor: color}]}>
                <Text style={styles.digit} adjustsFontSizeToFit={true}>{this.props.num}</Text>
            </TouchableOpacity>
        )
    }
}

export default Cell

const styles = StyleSheet.create({
    cell: {
        backgroundColor: 'pink',
        width: width / 9,
        height: width / 9,
        borderWidth: .3,
        borderColor: 'black',
    },
    digit: {
        fontSize: 100,
    }
})