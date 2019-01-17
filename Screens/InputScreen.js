/*

Summary.
Home view of application. Allows user to input their desired sodoku board.



*/

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import AppTitle from '../Components/AppTitle'
import Board from '../Components/Board'
import Numbers from '../Components/Numbers'
import { ScrollView } from 'react-native-gesture-handler';
import SolveButton from '../Components/SolveButton';
import _solveSudoku from '../Algorithms/SudokuSolver'
import _checkValidBoard from '../Algorithms/ValidBoard'
import { mainColor } from '../Constants/Colors'


class InputScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeCell: -1,
            activeNumber: '',
            board: new Array(81).fill('.'),
            answer: '',
        }
    }

    onPressDigit(number) {
        var arr = this.state.board
        arr[this.state.activeCell] = number !== 0 ? number.toString() : '.'
        var num = number === 0 ? '' : number
        this.setState({activeNumber: num, board: arr})
        var cells = this.checkValidBoard()
        if(cells.length > 0 ) {
            this.setState({invalidCells: cells})
        }
    }
    onPressCell(index) {
        var num = this.state.board[index] === '.' ? '' : this.state.board[index]
        this.setState({activeNumber: num, activeCell: index})
    }
    onPressSolve(){
        var cells = this.checkValidBoard()
        if (cells.length > 0) {
            this.setState({invalidCells: cells})
        } else {
            const ans = _solveSudoku(this.state.board)
            this.setState({answer: ans})
        }
    }
    checkValidBoard(){
        this.setState({invalidCells: ''}) 
        return (_checkValidBoard(this.state.board))
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.body}>
                        <AppTitle color={mainColor} helpText='Tap to enter your puzzle!'/>
                        <Board invalidCells={this.state.invalidCells} activeNumber={this.props.activeNumber} num={this.state.activeNumber} activeCell={this.state.activeCell} answer={this.state.answer} onPressCell={this.onPressCell.bind(this)}/>
                        <Numbers onPressDigit={this.onPressDigit.bind(this)}/>
                        <SolveButton board={this.state.board} onPressSolve={this.onPressSolve.bind(this)} navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default InputScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        alignItems: 'center',
    }
})