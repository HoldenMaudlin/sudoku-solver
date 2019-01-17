/**
 * Sudoku solver. Solves sudoku puzzles recursively using 
 * Depth First Search algorithm
 *
 * The given puzzle should be an array of integer values
 * where the '0' value represents an unsolved cell in the
 * puzzel. The returned puzzel will be in the same format
 *
 * @param  {string}   board    The partially solved puzzel as a string
 * 
 * @return {Array}    Answer   The solved puzzel as an 2D - Array. 
 */

export default function _solveSudoku(board) {
    var board = parseBoard(board)
    var ans = solve(board, 0)
    return ans.join('').replace(/,/g, '')
}

function parseBoard(rawBoard) {
    var board = []
    for (var i = 0; i < 9; i++) {
        var line = []
        for (var k = 0; k < 9; k++) {
            line.push(rawBoard[9 * i + k])
        }
        board.push(line)
    }
    return board
}

function solve(board, pos) {
    if (pos === 81) return board;
    var r = Math.floor(pos / 9);
    var c = pos % 9;
    if (board[r][c] != '.') {
        return solve(board, pos + 1);
    } else {
        for (var i = '1'; i <= '9'; i++) {
            if(isValid(board, pos, i.toString())) {
                board[r][c] = i.toString();
                var temp = solve(board, pos + 1)
                if(temp !== false) {
                    return temp;
                } else {
                    board[r][c] = '.';
                }
            }
        }
    return false;
    }
}

function isValid(board, pos, letter) {
    var r = Math.floor(pos / 9);
    var c = pos % 9;
    for (var i = 0; i < 9; i++) {
        if (board[r][i] == letter) return false;
        if (board[i][c] == letter) return false;
            
    }
    var startRow = 3 * Math.floor(r / 3);
    var startCol = 3 * Math.floor(c / 3);
    for (var i = startRow; i < startRow + 3; i++) {
        for (var j = startCol; j < startCol + 3; j++) {
            if (board[i][j] == letter) return false;
        }
    }
    return true;
}