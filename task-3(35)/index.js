document.addEventListener('DOMContentLoaded', event => {
  let container = document.getElementsByTagName('div');
  console.log(container[0].innerText);
  container[0].style.border = '1px solid red';
  container[0].style.borderRadius = '5px';
  container[0].style.marginBottom = '10px';
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const startBtn = document.getElementById('start');
  const pauseBtn = document.getElementById('pause');
  const resetBtn = document.getElementById('reset');
  container[0].style.textAlign = 'center';
  minutes.style.fontSize = '60px';
  seconds.style.fontSize = '60px';
  minutes.style.fontWeight = '700';
  seconds.style.fontWeight = '700';
  minutes.style.fontFamily = "Poppins";
  seconds.style.fontFamily = "Poppins";

  startBtn.addEventListener('click', () => {
    let second = parseInt(seconds.innerText);
    let minute = parseInt(minutes.innerText);
    const count = () => {
      console.log('this is num ' + second);
      second++;


      if (second < 10) {
        seconds.innerText = "0" + second;
      } else {
        seconds.innerText = second;
      }
      if (second === 60) {
        second = "00";
        seconds.innerText = second;
        minute++;
        minutes.innerText = "0" + minute;
      }

      if (minute < 10) {
        minutes.innerText = "0" + minute;
      } else {
        minutes.innerText = minute;
      }

      if (minute === 60) {
        minute = "0";
        minutes.innerText = "0" + minute;
      }

    }

    const interval = setInterval(count, 100);
    pauseBtn.addEventListener('click', () => {
      clearInterval(interval);
    });
    resetBtn.addEventListener('click', () => {
      minutes.innerText = "00";
      seconds.innerText = "00";
      clearInterval(interval);
    });
  });



  console.log(container[0]);
  console.log(parseInt(seconds.innerText));
  event.preventDefault();
});
