import React, {Component} from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";

class App extends Component {
    state = {
        boardSize: 'Rookie',
        consoleScreen: true,
        player1: 'X-treme',
        player2: 'O-mega',
        player1Turn: true
    };

    changeBoardSize = (size) => {
        this.setState({boardSize: size})
    };

    changeScreenClick = () =>{
        this.setState({consoleScreen:false})
    };

    scoreBlockClick = (i,j) =>{
        this.setState({player1Turn: !this.state.player1Turn});
        console.log(i,j)
    };

    playerNameInput = (event, index) => {
        const name = event.target.value;
        if (name && index === 1) {
            this.setState({player1: name})
        }
        if (name && index === 2) {
            this.setState({player2: name})
        }
    };


    render() {
        return (
            <div className="App">
                <GameScreen
                    gameData={
                        {
                            player1:'DJ '+this.state.player1,
                            player2:'DJ '+this.state.player2,
                            player1Turn: this.state.player1Turn,
                            boardSize: this.state.boardSize
                        }
                    }
                    scoreBlockClick={this.scoreBlockClick}
                />
                <ConsoleScreen
                    currentScreen={this.state.consoleScreen}
                    changeScreenClick={this.changeScreenClick}
                    playerNameInput={this.playerNameInput}
                    changeBoardSizeClick={this.changeBoardSize}
                    currentLevel={this.state.boardSize}
                />
            </div>
        );
    }
}

export default App;
