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
import Line from './Line'

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var lines = []
        for (var i = 0; i < 9; i++) {
            lines.push(
                <Line index={i} num={this.props.num} key={i} activeCell={this.props.activeCell} onPressCell={this.props.onPressCell.bind(this)} />
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
        backgroundColor: 'green',
    },
    line: {
        flexDirection: 'row',
    }
})