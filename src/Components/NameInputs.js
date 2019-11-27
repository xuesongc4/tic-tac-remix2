import React from 'react'

const NameInputs = (props) =>{
    return (
        <div className="nameInputWrapper">
            <div className="ticket ticket1">
                <input maxLength="18" type="text" placeholder="Input DJ1 Name" className="input_name" id="player1_sn"/>
            </div>
            <div className="ticket ticket2">
                <input maxLength="18" type="text" placeholder="Input DJ2 Name" className="input_name" id="player2_sn"/>
            </div>
        </div>
    )
}

export default NameInputs