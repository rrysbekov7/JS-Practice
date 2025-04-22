class Hamburger {
  public price: number;
  public calory: number;
  public price2: number;
  public calory2: number;
  constructor(public exs: string, public nach: string) {
    this.exs = exs;
    this.nach = nach;
    this.price = 0;
    this.calory = 0;
    this.price2 = 0;
    this.calory2 = 0;

    if(this.exs === 'small') {
      this.price = 60;
      this.calory = 200;
    } else if(this.exs === 'big') {
      this.price = 80;
      this.calory = 300;
    }

    if (this.nach === 'cheese') {
      this.price2 = 15;
      this.calory2 = 50;
    } else if(this.nach === 'salad') {
      this.price2 = 5;
      this.calory2 = 5;
    }else if(this.nach === 'potato fri') {
      this.price2 = 10;
      this.calory2 = 25;
    } else {
      console.log('another meal');
    }
  }
  getPrice() {
    console.log('Common Price is: ' + (this.price + this.price2));
  }

  getCalory() {
    console.log('Common calory is: ' + (this.calory + this.calory2));
  }

}

const cheese = new Hamburger('small', 'cheese');
cheese.getPrice();
cheese.getCalory();

