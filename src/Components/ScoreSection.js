import React from 'react'
import ScoreBlock from "./ScoreBlock";

const ScoreSection = (props)=>{
    return(
        <div className='ScoreSection'>
            <ScoreBlock content={props.gameData.player1}/>
            <div className="vs">
                VS.
            </div>
            <ScoreBlock content={props.gameData.player2}/>
            <ScoreBlock content={props.gameData.rule}/>
            <div className="resetButton">
                Restart Game
            </div>
        </div>
    )
}

export default ScoreSection
