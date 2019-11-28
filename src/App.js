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

    changeConsoleScreen = (player1, player2) => {
        this.setState({consoleScreen: false, players: [player1, player2]})
    }
    changeBoardSize = (size) => {
        this.setState({boardSize: size})
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
                    playerNameInput={this.playerNameInput}
                    consoleScreenClick={this.changeConsoleScreen}
                    changeBoardSizeClick={this.changeBoardSize}
                    currentLevel={this.state.boardSize}
                />
            </div>
        );
    }
}

export default App;
