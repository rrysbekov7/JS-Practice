document.addEventListener("DOMContentLoaded", e => {
  class Machine {
    turnOn() {
      console.log("Turning on");
    }
    turnOff() {
      console.log("Turning off");
    }
  }

  class HomeAppliance extends Machine {
    plugIn() {
      console.log("Plug In");
    } // включить сеть
    plugOff() {
      console.log("Plug Off");
    } // выключить сеть
  }

  class WashingMachine extends HomeAppliance {
    run(){
      console.log("Running Machine");
    } // запускать
  }

  class LightSource extends HomeAppliance {
    setLevel(level) {
      console.log(level);
    } // уровень освещенности
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
      console.log("setPosition", x, y);
    }
  }

  class Car extends AutoVehicle {
    constructor(speed) {
      super();
      speed = 100;
    }

    setSpeed(speed) {
      console.log(speed);
    }

    run(x, y){
      console.log(x, y);
    }
  }





  const machine = new Machine();
  console.log(machine);

  const homeappliance = new HomeAppliance();
  console.log(homeappliance);

  const washingMachine = new WashingMachine();
  washingMachine.plugIn();
  washingMachine.plugOff();
  washingMachine.run();
  console.log(washingMachine);

  const lightSource = new LightSource();
  console.log(lightSource);
  lightSource.plugIn();
  lightSource.setLevel(60);
  lightSource.turnOn();

  const honda = new Car();
  honda.setPosition(40, 50);
  honda.turnOn();
  honda.setSpeed(50);
  honda.run(140,250);
  e.preventDefault();
})
