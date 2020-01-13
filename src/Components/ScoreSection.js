import React from 'react'
import ScoreBlock from "./ScoreBlock";

const ScoreSection = (props)=>{
    let active;
    let rule;

    if(props.gameData.player1Turn){
        active = true
    }else{
        active = false
    }

    if(props.gameData.boardSize === 'Rookie'){
        rule = '3 in a row to win'
    }else if(props.gameData.boardSize === 'Pro'){
        rule = '4 in a row to win'
    }else{
        rule = '5 in a row to win'
    }

    return(
        <div className='ScoreSection'>
            <ScoreBlock active={active} content={props.gameData.player1}/>
            <div className="vs">
                VS.
            </div>
            <ScoreBlock active={!active} content={props.gameData.player2}/>
            <ScoreBlock content={rule}/>
            <div className="resetButton">
                Restart Game
            </div>
        </div>
    )
}

export default ScoreSection
