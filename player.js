class Player {
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
    this.wins = 0;
    this.choice = '';
  }
  playRound(gameVersionChosen){
    if (gameVersionChosen === 'classic'){
      var buddies = ['rock', 'paper', 'scissors'];
      return buddies = [Math.floor(Math.random() * buddies.length)];
    }
    if (gameVersionChosen === 'spicy'){
      var buddies = ['rock', 'paper', 'scissors', 'alien', 'ufo'];
      return buddies = [Math.floor(Math.random() * buddies.length)];
    }
  }
  winCount(){
    this.wins += 1;
  }
}
