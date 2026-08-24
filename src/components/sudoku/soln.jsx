import CloseBtn from "./closeBtn";

export default function Soln({ onClose }) {
    const sol = Array.from({ length: 9 }, () => Array(9).fill(1));

    return (
        <div id="popup" className="popup">
            <div className="popup-content">
                <div className="grid">
                    {sol.map((row, i) =>
                        row.map((cell, j) => (
                            <input
                                key={`${i}-${j}`}
                                type="text"
                                className="cell"
                                value={cell}
                                readOnly
                            />
                        ))
                    )}
                </div>
            
                <CloseBtn text="Close" onClose={onClose}/>
                
            </div>
        </div>
    );
}