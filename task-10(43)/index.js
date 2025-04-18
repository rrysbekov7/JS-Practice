document.addEventListener("DOMContentLoaded", e => {
  class Machine {
    turnOn() {}
    turnOff() {}
  }

  class HomeAppliance extends Machine {
    plugIn() {} // включить сеть
    plugOff() {} // выключить сеть
  }

  class WashingMachine extends HomeAppliance {
    run(){} // запускать
  }

  class LightSource extends HomeAppliance {
    setLevel(level) {} // уровень освещенности
  }

  class AutoVehicle extends Machine {
    constructor(x, y) {
      super();
      x = 0;
      y = 0;
    }
    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  class Car extends AutoVehicle {
    constructor(speed) {
      super();
      speed = 100;
    }

    setSpeed(speed) {

    }

    run(x, y){}
  }





  const machine = new Machine();
  console.log(machine);

  const homeappliance = new HomeAppliance();
  console.log(homeappliance);

  const washingMachine = new WashingMachine();
  console.log(washingMachine);

  const lightSource = new LightSource();
  console.log(lightSource);

  e.preventDefault();
})
