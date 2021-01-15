import testIs from "../App/testIs";
import styles from './PlayingCell.module.css'
import { useState } from 'react';

export const PlayingCell = () => {
    const [ cellValue, setCellValue ] = useState('')

    const onCellClick = () => {
        cellValue ? setCellValue('') : setCellValue('x')
    }

    return (
        <button
            data-testid={testIs.playingCell}
            onClick={ onCellClick }
            className={styles.box}
        >
            {cellValue}
        </button>
    )
};



