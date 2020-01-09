import React, {Component} from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";

class App extends Component {
    state = {
        boardSize: 'rookie',
        consoleScreen: true,
        player1: 'X-treme',
        player2: 'O-mega'
    }

    changeBoardSize = (size) => {
        this.setState({boardSize: size})
    }
    changeScreenClick = () =>{
        this.setState({consoleScreen:false})
    }
    playerNameInput = (event, index) => {
        const name = event.target.value;
        if (name && index === 1) {
            this.setState({player1: name})
        }
        if (name && index === 2) {
            this.setState({player2: name})
        }
    }

    render() {
        return (
            <div className="App">
                <GameScreen/>
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
