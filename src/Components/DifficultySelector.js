import React from 'react'

const DifficultySelector = (props) => {
    return (
        <div className='selectDifficultyWrapper'>
            <div
                className={props.currentLevel === 'Rookie' ? 'boardSizeButton rookie selected' : 'boardSizeButton rookie'}
                onClick={() => props.changeBoardSizeClick('Rookie')}>Rookie (3x3)
            </div>
            <div className={props.currentLevel === 'Pro' ? 'boardSizeButton pro selected' : 'boardSizeButton pro'}
                 onClick={() => props.changeBoardSizeClick('Pro')}>Pro (8x8)
            </div>
            <div
                className={props.currentLevel === 'SuperStar' ? 'boardSizeButton superstar selected' : 'boardSizeButton superstar'}
                onClick={() => props.changeBoardSizeClick('SuperStar')}>SuperStar (19x19)
            </div>
        </div>
    )
};

export default DifficultySelector
