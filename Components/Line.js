/*

Summary.
Line element of Sudoku board

Parameters.
@prop    int        index          Number line in board (0 indexed).
@prop    int        activCell      Index of cell that is pressed
@prop    funciton   onPressCell    Retrieves index of pressed cell.

Return.
Styled title to the Input Screen page

*/

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import Cell from './Cell'

class Line extends Component {
    render() {
        var cells = []
        for (var i = 0; i < 9; i++){
            cells.push(
                <Cell key={this.props.index * 9 + i} num={this.props.num} index={this.props.index * 9 + i} activeCell={this.props.activeCell} onPressCell={this.props.onPressCell.bind(this)}/>
            )
        }
        return (
            <View style={styles.line}>
                {cells}
            </View>
        )
    }
}

export default Line

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
    }
})