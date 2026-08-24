import Btn from './btn';
import Info from './info';
import Input from './input';
import './sudoku.css'
import Title from "./title";

export default function Sudoku() {
    return(
        <>
            <Title />
            <Input />
            <Info />
            <Btn />
        </>
    );
}