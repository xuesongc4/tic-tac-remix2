import React from 'react'

const DifficultySelector = (props)=>{
    let style = {
        rookie: 'boardSizeButton rookie',
        pro: 'boardSizeButton pro',
        superstar: 'boardSizeButton superstar'
    }

    if(props.currentLevel === 'SuperStar'){
        style.superstar = 'boardSizeButton superstar selected';
    }else if (props.currentLevel === 'Pro'){
        style.pro = 'boardSizeButton pro selected';
    }else{
        style.rookie = 'boardSizeButton rookie selected';
    }

    return(
        <div className='selectDifficultyWrapper'>
            <div className={style.rookie} onClick={()=>props.changeBoardSizeClick('Rookie')}>Rookie (3x3)</div>
            <div className={style.pro}  onClick={()=>props.changeBoardSizeClick('Pro')}>Pro (8x8)</div>
            <div className={style.superstar}  onClick={()=>props.changeBoardSizeClick('SuperStar')}>SuperStar (19x19)</div>
        </div>
    )
}

export default DifficultySelector
