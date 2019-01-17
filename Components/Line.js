/*

Summary.
Small component to bundle 9 cells together.

Description.
Bundles and passes props to cell component.

Parameters. (Only used to pass to Cell components)
@prop     int        index               Index of this specific cell
@prop     int        num                 Number user has selected
@prop     int        activeCell          Index of cell that is selected
@prop     function   onPressCell(int)    Function to update parent's board state

Return.
1 x 9 Line of Sudoku cells

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
                <Cell key={this.props.index * 9 + i} invalidCells={this.props.invalidCells} num={this.props.board[this.props.index * 9 + i]} answer={this.props.answer} index={this.props.index * 9 + i} activeCell={this.props.activeCell} onPressCell={this.props.onPressCell.bind(this)}/>
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