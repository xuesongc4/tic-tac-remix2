import React from 'react'

const ScoreBlock = (props)=>{
    let style;
    if(props.active){
        style = 'ScoreBlock active'
    }else{
        style = 'ScoreBlock'
    }
    return(
        <div className={style}>
            {props.content}
        </div>
    )
}

export default ScoreBlock
