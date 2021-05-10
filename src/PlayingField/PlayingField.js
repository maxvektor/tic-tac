import React from "react";
import styles from './PlayingField.module.css';
import testIds from "../App/testIs";

import {PlayingCell} from "../PlayingCell/PlayingCell";

export const PlayingField = ({ p1Name, p2Name, isGameStarted}) => {

    const playersNames = {
        p1Name,
        p2Name,
    };

    return <>
        {
            isGameStarted && (
                <div data-testid={testIds.playingFieldId} className={styles.container}>
                    {
                        [...Array(9)].map((_, i) => <PlayingCell key={i} pos={i+1} {...playersNames}/>)
                    }
                </div>
            )
        }
    </>
};




