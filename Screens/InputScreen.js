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

class InputScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeCell: -1,
            activeNumber: '',
        }
    }
    onPressDigit(number) {
        this.setState({activeNumber: number})
    }
    onPressCell(index) {
        this.setState({activeNumber: ''})
        this.setState({activeCell: index})
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <AppTitle helpText='Enter your puzzle, then press go!'/>
                    <Board activeNumber={this.props.activeNumber} num={{index: this.state.activeCell, num: this.state.activeNumber}} activeCell={this.state.activeCell} onPressCell={this.onPressCell.bind(this)}/>
                    <Numbers onPressDigit={this.onPressDigit.bind(this)}/>
                </View>
            </SafeAreaView>
        )
    }
}

export default InputScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    body: {
        flex: 1,
        backgroundColor: 'red'
    }
})