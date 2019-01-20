/*

Summary.
Home view of application. Allows user to input their desired sodoku board.



*/

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    Alert,
    AsyncStorage
} from 'react-native'
import AppTitle from '../Components/AppTitle'
import Board from '../Components/Board'
import Numbers from '../Components/Numbers'
import { ScrollView } from 'react-native-gesture-handler';
import SolveButton from '../Components/SolveButton';
import _solveSudoku from '../Algorithms/SudokuSolver'
import _checkValidBoard from '../Algorithms/ValidBoard'
import { mainColor } from '../Constants/Colors'
import SideButton from '../Components/SideButton';
import { devicePlatform } from '../Constants/Device';

class InputScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeCell: -1,
            activeNumber: '',
            board: new Array(81).fill('.'),
            answer: '',
            hintAnswer: '',
            invalidCells: '',
            hint: false,
        }
    }

    // Logic for pressing button
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

    // Highlight active cell
    onPressCell(index) {
        var num = this.state.board[index] === '.' ? '' : this.state.board[index]
        this.setState({activeNumber: num, activeCell: index})
        if (this.state.hint) {
            this.state.board[index] = this.state.hintAnswer[index]
        }
    }

    // Determines if there one solution to puzzle
    compareGrids(grid1, grid2){
        for(var i = 0; i < 81; i++) {
            if (grid1[i] != grid2[i]) {
                return false
            }
        }
        return true
    }

    // Solve if valid grid
    onPressSolve(){
        var cells = this.checkValidBoard()
        if (cells.length > 0) {
            this.setState({invalidCells: cells})
        } else {
            const ans = _solveSudoku(this.state.board)
            const secAns = _solveSudoku(this.state.board.reverse()).reverse()
            const different = this.compareGrids(ans, secAns)
            if (!different) {
                Alert.alert(
                    'Warning!',
                    'There are mutliple solutions to this puzzle, displaying the first one.',
                    [
                        {text: 'Got It!', style: 'cancel'}
                    ]
                )
            }
            this.setState({answer: ans})
        }
    }

    // Reset board
    onPressReset(){
        Alert.alert(
            'Are you sure?',
            'This will clear the board.',
            [
              {text: 'Reset', onPress: () => {this.setState({board: new Array(81).fill('.'), answer: '', invalidCells: '', hint: false})}},
              {text: 'Cancel', style: 'cancel'},
            ],
            { cancelable: true }
        )
    }

    // Checks if board has errors
    checkValidBoard(){
        this.setState({invalidCells: ''}) 
        return (_checkValidBoard(this.state.board))
    }

    // Hint button logic, will solve puzzle if board is valid
    onPressHint = async() => {
        var cells = this.checkValidBoard()
        if (cells.length > 0) {
            this.setState({invalidCells: cells})
        } else {
            // Informs user how to use hint
            this.setState({hint: !this.state.hint})
            const showHint = await AsyncStorage.getItem('showAlert')
            if (this.state.hint && showHint !== 'false') {
                Alert.alert(
                    'Tap a square to reveal a number!',
                    'Then tap hint again to deactivate!',
                    [
                      {text: 'Got it!'},
                      {text: "Don't show this again.", onPress: () => {AsyncStorage.setItem('showAlert', 'false')}, style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            }
            const ans = _solveSudoku(this.state.board)
            this.setState({hintAnswer: ans})
        }
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, {paddingTop: devicePlatform == 'android' ? 10 : 0}]}>
                <ScrollView>
                    <View style={styles.body}>
                        <AppTitle color={mainColor} helpText='Tap to enter your puzzle!'/>
                        <Board invalidCells={this.state.invalidCells} board={this.state.board} activeNumber={this.props.activeNumber} num={this.state.activeNumber} activeCell={this.state.activeCell} answer={this.state.answer} onPressCell={this.onPressCell.bind(this)}/>
                        <Numbers onPressDigit={this.onPressDigit.bind(this)}/>
                        <View style={styles.buttonContainer}>
                            <SideButton hint={this.state.hint} onPress={this.onPressHint.bind(this)} name='Hint'/>
                            <SolveButton board={this.state.board} onPressSolve={this.onPressSolve.bind(this)} navigation={this.props.navigation}/>
                            <SideButton onPress={this.onPressReset.bind(this)} name='Reset'/>
                        </View>
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
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})