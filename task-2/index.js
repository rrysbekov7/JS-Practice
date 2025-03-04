document.addEventListener('DOMContentLoaded', event => {
  let chessBoard = document.createElement('div');
  chessBoard.className = 'chess__container';
  chessBoard.style.border = '1px solid red';
  chessBoard.style.width = '160px';
  chessBoard.style.height = '160px';
  document.body.appendChild(chessBoard);
  chessBoard.style.margin = '50px auto';

  const chessWidth = 8;
  const chessHeight = 8;

  for (let i = 0; i < chessHeight; i++) {

    for (let j = 0; j < chessWidth; j++) {
      let chessBox = document.createElement('div');
      chessBox.style.display = 'inline-block';
      chessBox.style.width = '20px';
      chessBox.style.height = '20px';
      chessBox.style.outline = '1px solid black';
      if (j % 2 == 0) {
        chessBox.style.background = 'black';
      } else {
        chessBox.style.background = 'white';
      }
      chessBoard.append(chessBox);
    }
  }
  event.preventDefault();
});
