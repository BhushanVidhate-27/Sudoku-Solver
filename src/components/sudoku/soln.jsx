import { useEffect, useState } from "react";
import createSudokuModule from "../../sudoku.js";
import CloseBtn from "./closeBtn";

export default function Soln({ onClose, board }) {

    const [module, setModule] = useState(null);
    const [result, setResult] = useState([]);

    useEffect(() => {
        createSudokuModule().then((Module) => {
            const boardString = board.flat().map(cell => cell === "" ? "." : cell).join("");
            const solved = Module.solve(boardString);
            console.log("solved:", solved);
            const solvedBoard = [];

            for (let i = 0; i < 9; i++) {
                solvedBoard.push(
                    solved.slice(i * 9, i * 9 + 9).split("")
                );
            }

            setResult(solvedBoard);
        });
    }, [board]);

    return (
        <div id="popup" className="popup">
            <div className="popup-content">
                <div className="grid">
                    {result.length > 0 &&
                        result.map((row, i) =>
                            row.map((cell, j) => (
                                <input
                                    key={`${i}-${j}`}
                                    type="text"
                                    readOnly
                                    value={cell}
                                />
                            )))
                    }
                </div>

                <CloseBtn text="Close" onClose={onClose} />

            </div>
        </div>
    );
}