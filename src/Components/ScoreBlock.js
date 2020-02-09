import React from 'react'

const ScoreBlock = (props) => {
    return(
        <div className={props.active ? 'ScoreBlock active' : 'ScoreBlock'}>
            {props.children}
        </div>
    )
};

export default ScoreBlock
