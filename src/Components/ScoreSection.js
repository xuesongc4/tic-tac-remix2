import React from 'react'
import ScoreBlock from "./ScoreBlock";

const ScoreSection = (props)=>{
    let active;
    if(props.gameData.active === 1){
        active = true
    }else{
        active = false
    }

    return(
        <div className='ScoreSection'>
            <ScoreBlock active={active} content={props.gameData.player1}/>
            <div className="vs">
                VS.
            </div>
            <ScoreBlock active={!active} content={props.gameData.player2}/>
            <ScoreBlock content={props.gameData.rule}/>
            <div className="resetButton">
                Restart Game
            </div>
        </div>
    )
}

export default ScoreSection
