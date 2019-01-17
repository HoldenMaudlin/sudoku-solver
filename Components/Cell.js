/*

Summary.
Cell input component for Sodoku Board. Filled with a number on user press.

Description.
This component displays the input for a current cell in the board. When selected,
user can input a number into the board. The highlighted cell is darkened.

Parameters.
@prop     int        index               Index of this specific cell
@prop     int        num                 Number user has selected
@prop     int        activeCell          Index of cell that is selected
@prop     function   onPressCell(int)    Function to update parent's board state

Return.
One Cell each time called 

*/

import React, { Component } from 'react'
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native'
import { width } from '../Constants/Dimensions'

class Cell extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            num: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.answer) {
            this.setState({num: nextProps.answer[this.props.index]})
        }
        else if (nextProps.num !== this.props.num && this.props.index === nextProps.activeCell) {
            this.setState({
                num: nextProps.num
            })
        }
    }

    render() {
        var textColor = 'black'
        if (this.props.invalidCells) {
            for ( var i = 0; i < this.props.invalidCells.length; i++) {
                if (this.props.invalidCells[i] === this.props.index) {
                    var textColor = 'red'
                }
            }
        }
        const activeRow = Math.floor(this.props.activeCell / 9);
        const activeCol = this.props.activeCell % 9;
        if (Math.floor(this.props.index / 9) === activeRow && this.props.index % 9 === activeCol) {
            var color = 'rgba(0, 76, 219, 0.4)'
        } else if (this.props.index % 9 === activeCol || Math.floor(this.props.index / 9) === activeRow) {
            var color = 'rgba(0, 76, 219, 0.2)'
        }
        // Math to create 9 big boxes of sudoku grid
        const borderLeft = this.props.index % 3 === 0 ? 1.2 : 0.3
        const borderRight = this.props.index % 3 === 2 ? 1.2 : 0.3
        const borderTop = Math.floor(this.props.index / 9) % 3 === 0 ? 1.2 : 0.3
        const borderBottom = Math.floor(this.props.index / 9) % 3 === 2 ? 1.2 : 0.3
        return (
            <TouchableHighlight underlayColor='rgba(0, 76, 219, 0.4)' onPress={() => this.props.onPressCell(this.props.index)} style={[styles.cell, {backgroundColor: color, borderLeftWidth: borderLeft, borderRightWidth: borderRight, borderBottomWidth: borderBottom, borderTopWidth: borderTop}]}>
                <Text style={[styles.digit, {color: textColor}]} adjustsFontSizeToFit={true}>{this.state.num !== '' ? this.state.num : ''}</Text>
            </TouchableHighlight>
        )
    }
}

export default Cell

const styles = StyleSheet.create({
    cell: {
        width: width / 9,
        height: width / 9,
        borderColor: 'black',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 1,  
        elevation: 10
    },
    digit: {
        fontSize: 100,
    }
})