import { useState } from "react";
import Soln from "./soln";

export default function Btn({board}) {
    let [isPop, setIspop] = useState(false);
    let onClose = () => setIspop(false); 
    return (
        <>
            <div className="btn">
                <button
                    onClick={() => setIspop(true)}
                >
                    Solve
                </button>
            </div>
            {isPop && (
                <>
                    <Soln onClose={onClose} board={board} />
                </>
            )}
        </>
    );
}