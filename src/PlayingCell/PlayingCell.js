import {useState} from "react";
import styles from './PlayingCell.module.css'
import testIds from "../App/testIs";

const {
    playingCellId
} = testIds;

export const PlayingCell = () => {
    const [cellValue, setCellValue] = useState('')

    const onClick = () => {
        setCellValue('x')
    }

    return (
        <button
            data-testid={playingCellId}
            className={styles.box}
            onClick={onClick}
        >
            {cellValue}
        </button>
    )
};



