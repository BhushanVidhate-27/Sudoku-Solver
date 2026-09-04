#include <iostream>
#include <emscripten/bind.h>
#include <vector>
#include <string>

using namespace std;
using namespace emscripten;

bool solveSudoku(vector<vector<char>> &board);
bool isSafe(vector<vector<char>> &board, int row, int col, char digit);

string solveSudokuJS(string board)
{
    vector<vector<char>> grid(9, vector<char>(9));

    for (int i = 0; i < 81; i++)
        grid[i / 9][i % 9] = board[i];

    solveSudoku(grid);

    string ans;

    for (int i = 0; i < 9; i++)
        for (int j = 0; j < 9; j++)
            ans += grid[i][j];

    return ans;
}

bool isSafe(vector<vector<char>> &board, int row, int col, char digit)
{
    for (int j = 0; j < 9; j++)
    {
        if (board[row][j] == digit)
            return false;
    }

    for (int i = 0; i < 9; i++)
    {
        if (board[i][col] == digit)
            return false;
    }

    int startRow = (row / 3) * 3;
    int startCol = (col / 3) * 3;

    for (int i = startRow; i < startRow + 3; i++)
    {
        for (int j = startCol; j < startCol + 3; j++)
        {
            if (board[i][j] == digit)
                return false;
        }
    }

    return true;
}

bool solveSudoku(vector<vector<char>> &board)
{
    for (int row = 0; row < 9; row++)
    {
        for (int col = 0; col < 9; col++)
        {
            if (board[row][col] == '.')
            {
                for (char digit = '1'; digit <= '9'; digit++)
                {
                    if (isSafe(board, row, col, digit))
                    {
                        board[row][col] = digit;

                        if (solveSudoku(board))
                            return true;

                        board[row][col] = '.';
                    }
                }

                return false;
            }
        }
    }

    return true;
}

EMSCRIPTEN_BINDINGS(my_module)
{
    emscripten::function("solve", &solveSudokuJS);
}
