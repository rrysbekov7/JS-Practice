class PiggyBank {
  private coins: {[key: number]: number}
  constructor() {
    this.coins =  {1: 0, 3: 0, 5: 0, 10: 0}
  }

  addCoin (value: number) {
    switch (value) {
      case 1: case 3: case 5: case 10:
        this.coins[value]++;
        break;
      default:
        console.log('This is not a correct value!');
    }
  }

  showCoins () {
    for (const key in this.coins) {
      console.log('key, this.coins[key]',key, this.coins[key]);
    }
  }

  getTotal () {
    let total = 0;
    for (const key in this.coins) {
      total += Number(key) * this.coins[key];
    }
    return total;
  }
};
const price = new PiggyBank();
price.addCoin(10);
price.addCoin(5);
price.addCoin(3);
price.showCoins();
console.log('getTotal',price.getTotal());
