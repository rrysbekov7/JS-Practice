document.addEventListener("DOMContentLoaded", e => {
  const PiggyBank = {
    coins: {1: 0, 3: 0, 5: 0, 10: 0},
    addCoin: function(value) {
      switch (value) {
        case 1: case 3: case 5: case 10:
          this.coins[value]++;
          break;
        default:
          console.log('This is not a correct value!');
      }
    },

    showCoins: function() {
      for (const key in this.coins) {
        console.log('key, this.coins[key]',key, this.coins[key]);
      }
    },

    getTotal: function() {
      let total = 0;
      for (const key in this.coins) {
        total += key * this.coins[key];
      }
      return total;
    }
  };

  PiggyBank.addCoin(10);
  PiggyBank.addCoin(5);
  PiggyBank.addCoin(3);
  PiggyBank.showCoins();
  console.log('getTotal',PiggyBank.getTotal());
  e.preventDefault();
});
