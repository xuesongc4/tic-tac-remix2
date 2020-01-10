import React, {Component} from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";

class App extends Component {
    state = {
        boardSize: 'rookie',
        consoleScreen: true,
        player1: 'X-treme',
        player2: 'O-mega',
        rule: '3 in a row to win',
        active: 1
    }

    changeBoardSize = (size) => {
        this.setState({boardSize: size})

        if(size === 'Rookie'){
            this.setState({rule: '3 in a row to win'})
        }else if(size === 'Pro'){
            this.setState({rule: '4 in a row to win'})
        }else{
            this.setState({rule: '5 in a row to win'})
        }
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
                <GameScreen
                    gameData={
                        {
                            player1:'DJ '+this.state.player1,
                            player2:'DJ '+this.state.player2,
                            rule: this.state.rule,
                            active: this.state.active
                        }
                    }
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
