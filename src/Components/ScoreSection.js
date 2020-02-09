import React from 'react'
import ScoreBlock from "./ScoreBlock";

const ScoreSection = (props) => {
    return (
        <div className='ScoreSection'>
            <ScoreBlock active={props.gameData.player1Turn}>{props.gameData.player1}</ScoreBlock>
            <div className="vs">
                VS.
            </div>
            <ScoreBlock active={!props.gameData.player1Turn}>{props.gameData.player2}</ScoreBlock>
            <ScoreBlock>{(() => {
                if (props.gameData.boardSize === 'Rookie') {
                    return '3 in a row to win'
                } else if (props.gameData.boardSize === 'Pro') {
                    return '4 in a row to win'
                } else {
                    return '5 in a row to win'
                }
            })()
            }</ScoreBlock>
            <div className="resetButton" onClick={props.restartClick}>
                Restart Game
            </div>
        </div>
    )
};

export default ScoreSection
