import React from 'react'

const GameBoardSquare = (props)=>{
    return(
        <div className='gameSquare' data-row={props.positionX} data-column={props.positionY}
             onClick={()=>{
                 props.scoreBlockClick(props.positionX,props.positionY);
             }}>
        </div>
    )
}

export default GameBoardSquare
