/*

Original Algorithm that I translated to Javascript to be consistent with
the rest of the app. See SudokuSolver.js for the function used in this app.

*/
class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        solve(board, 0);
    }
    
    bool solve(vector<vector<char>>& board, int pos) {
        if (pos == 81) return true;
        int r = pos / 9;
        int c = pos % 9;
        if (board[r][c] != '.') {
            return solve(board, pos + 1);
        } else {
            for (char i = '1'; i <= '9'; i++) {
                if(isValid(board, pos, i)) {
                    board[r][c] = i;
                    if(solve(board, pos + 1)) {
                        return true;
                    } else {
                        board[r][c] = '.';
                    }
                }
            }
            return false;
        }
    }
    
    bool isValid(vector<vector<char>>& board, int pos, char let) {
        int r = pos / 9;
        int c = pos % 9;
        for (int i = 0; i < 9; i++) {
            if (board[r][i] == let) return false;
            if (board[i][c] == let) return false;
                
        }
        int startRow = 3 * ( r /3 );
        int startCol = 3 * ( c /3 );
        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                if (board[i][j] == let) return false;
            }
        }
        return true;
    }
};