/*

Summary.
Input board component allowing user to select cell and enter a number.

Description.
Receives props from the Input Screen and passes them along to the line component.

Parameters. (Only used to pass to Line components)
@prop     int        index               Index of this specific cell
@prop     int        num                 Number user has selected
@prop     int        activeCell          Index of cell that is selected
@prop     function   onPressCell(int)    Function to update parent's board state

Return.
Returns 9x9 Sudoku board to Screen.

*/

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import Line from './Line'

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var lines = []
        for (var i = 0; i < 9; i++) {
            lines.push(
                <Line index={i} num={this.props.num} key={i} activeCell={this.props.activeCell} answer={this.props.answer} onPressCell={this.props.onPressCell.bind(this)} />
            )
        }
        return (
            <View style={styles.board}>
                {lines}
            </View>
        )
    }
}

export default Board

const styles = StyleSheet.create({
    board: {
        flexDirection: 'column',
    },
    line: {
        flexDirection: 'row',
    }
})