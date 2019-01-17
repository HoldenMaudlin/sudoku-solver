/*
 * Summary. Checks if a board is valid.
 * 
 * @props    string   board           81 char string of Sudoku board
 * 
 * @return   array    invalidCells    Array of invalid cells.
 * 
*/

export default function _checkValidBoard(board) {
    invalidCells = []
    for(var i = 0; i < 81; i++){
        if(board[i] === '.') continue;
        const startRow = 3 * Math.floor(i / 27);
        const startCol = 3 * Math.floor((i % 9) / 3);
        const startPos = 9 * startRow + startCol;
        var count = 0;
        while(count < 9) {
            if (board[i] === board[startPos] && i !== startPos) {
                invalidCells.push(i)
                break;
            }
            if (count % 3 === 2) {
                startPos += 7
            } else {
                startPos++
            }
            count++
        }
        for (var k = 0; k < 9; k++) {
            const tempRow = 9 * Math.floor(i / 9)
            if (board[i] === board[tempRow + k] && i !== tempRow + k) {
                invalidCells.push(i);
                break;
            }
            const tempCol = i % 9;
            if (board[i] === board[tempCol + 9 * k] && i !== tempCol + 9 * k) {
                invalidCells.push(i)
                break;
            }
        }
    }    
    return invalidCells
}