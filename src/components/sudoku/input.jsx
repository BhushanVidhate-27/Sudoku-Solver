import { useState } from "react";

export default function Input() {
    const [board, setBoard] = useState(
        Array.from({ length: 9 }, () => Array(9).fill(""))
    );

    const handleOnchange = (i, j, value) => {
        if (value !== "" && !/^[1-9]$/.test(value)) return;

        const newBoard = board.map((row) => [...row]);
        newBoard[i][j] = value;
        setBoard(newBoard);
    };

    return (
        <div className="grid">
            {board.map((row, i) =>
                row.map((cell, j) => (
                    <input
                        key={`${i}-${j}`}
                        type="text"
                        className="cell"
                        value={cell}
                        maxLength={1}
                        placeholder={`${i + 1},${j + 1}`}
                        onChange={(e) =>
                            handleOnchange(i, j, e.target.value)
                        }
                    />
                ))
            )}
        </div>
    );
}