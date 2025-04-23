const PiggyBank = {
  coins: {1:0, 3:0, 5:0, 10:0},

  addCoins: function (value:number) {
    switch(value) {
      case 1:
        this.coins[value]++;
        break;
      case 3:
        this.coins[value]++;
        break;
      case 5:
        this.coins[value]++;
        break;
      case 10:
        this.coins[value]++;
        break;
      default:
        console.log('This is not a correct value!');
    }
  },

  showCoins: function () {
    for (let key = 0; key < this.coins; key++) {

    }
  }
}

PiggyBank.addCoins(10);
PiggyBank.addCoins(5);
PiggyBank.addCoins(3);
