import styles from './PlayingCell.module.css';
import testIds from "../App/testIs";
import {checkWin, fillArr} from "./helpers";

const {
    playingCellId
} = testIds;

let countOfClicks = 0;
const resultArr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let winner;

export const PlayingCell = ({pos, p1Name, p2Name }) => {
    const onClick = (e) => {
        setValue(e)
        winner && alert(`Победил ${winner}`)
    }

    const setValue = (e) => {
        let currentCell = e.target;
        let pos = Number(currentCell.getAttribute('data-pos'));
        let value;
        if ( countOfClicks % 2 === 0 ){
            value = 'x';
        } else{
            value = '0';
        }
        setDisabled(currentCell);
        currentCell.innerHTML = value;
        countOfClicks++

        fillArr(resultArr, pos, value);
        if(checkWin(resultArr)){
            winner = value === 'x' ? p1Name : p2Name;

        }

    }

    const setDisabled = (e) =>{
        e.setAttribute('disabled', true)
    }

    return (
        <button
            data-testid={playingCellId}
            className={styles.cell}
            onClick={onClick}
            data-pos={pos}
        >
        </button>
    )
};



