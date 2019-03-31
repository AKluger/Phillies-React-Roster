import React, { Component } from "react";
import Header from "./components/Header/header";
import PlayerCard from "./components/PlayerCard/PlayerCard";
// import Wrapper from "./components/Wrapper";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar"
import players from "./players.json";

class App extends Component {
  // Setting this.state.players to the players json array
constructor() {
  super();
  this.state = {
    players,
    score: 0,
    topScore: 0,
    guesses: [],
    message: "Click a player to begin!"
  };

  this.shufflePlayers = this.shufflePlayers.bind(this)
}
  // shuffle players function
  // this function will shuffle the array then rerender the array
  shufflePlayers = () => {
    if (this.state.score > this.state.topScore) {this.setState({ topScore : this.state.score})}
    const players = this.state.players.slice()
    for (let i = players.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [players[i], players[rand]] = [players[rand], players[i]];
    }
    this.setState({ players: players});
};

gameReset = () => {
  this.setState({score: 0,
  guesses: [], 
message: "You guessed incorrectly"})
}

// if not in the guess array increment score and run topscore function,
// else init new Game.
  checkScore = id => {
  //   const guesses = 
  console.log(id)
  if (this.state.guesses.includes(id))
  {this.gameReset()}

  else {
    // let player  = id => player.id === id
    this.setState({
       guesses:  [...this.state.guesses, id],
    score: this.state.score + 1,
  message: "You guessed correctly!"});
  this.shufflePlayers()
        }
  // this.state.guesses.push(player => player.id);
  //   // Set this.state.players equal to the new players array
  //   this.setState({ score: this.state.score + 1 });
  };

  // Map over this.state.players and render a PlayerCard component for each player object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore = {this.state.topScore} message = {this.state.message}></Navbar>
        <Header></Header>
        <Main>
        {this.state.players.map(player => (
          <PlayerCard
          shufflePlayers={this.shufflePlayers}
          checkScore={this.checkScore}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
          />
        ))}
        </Main>
      </div>
    );
  }
}

export default App;
