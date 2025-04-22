document.addEventListener("DOMContentLoaded", e => {
  class Hamburger {
    constructor(exsemplar, nachinka) {
      this.exsemplar = exsemplar;
      this.nachinka = nachinka;

      if(this.exsemplar === 'small') {
        this.price = 60;
        this.calory = 200;
      } else if(this.exsemplar === 'big') {
        this.price = 80;
        this.calory = 300;
      }

      if (this.nachinka === 'cheese') {
        this.price2 = 15;
        this.calory2 = 50;
      } else if(this.nachinka === 'salad') {
        this.price2 = 5;
        this.calory2 = 5;
      }else if(this.nachinka === 'potato fri') {
        this.price2 = 10;
        this.calory2 = 25;
      } else {
        console.log('another meal');
      }
    }

    getPrice() {
      console.log(this.price + this.price2);
    }

    getCalory() {
      console.log(this.calory + this.calory2);
    }
  }

  const cheeseburger = new Hamburger('small','cheese');
  cheeseburger.getPrice();
  cheeseburger.getCalory();
  e.preventDefault();
});
