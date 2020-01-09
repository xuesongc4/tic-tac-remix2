import React from 'react'
import ScoreBlock from "./ScoreBlock";

const ScoreSection = (props)=>{
    return(
        <div className='ScoreSection'>
            <ScoreBlock/>
            <div className="vs">
                VS.
            </div>
            <ScoreBlock/>
            <ScoreBlock/>
            <div className="resetButton">
                Restart Game
            </div>
        </div>
    )
}

export default ScoreSection
