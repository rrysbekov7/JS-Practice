document.addEventListener('DOMContentLoaded', event => {
  let chessBoard = document.createElement('div');
  chessBoard.className = 'chess__container';
  document.body.appendChild(chessBoard);
  chessBoard.style.margin = '50px auto';
  chessBoard.style.display = 'flex';
  chessBoard.style.flexWrap = 'wrap';

  const myChess = (width, height, color, blockWidth) => {
    chessBoard.style.width = `${width * blockWidth}px`;
    chessBoard.style.outline = `1px solid ${color}`;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const chessBox = document.createElement('div');
        chessBox.style.width = `${blockWidth}px`;
        chessBox.style.height = `${blockWidth}px`;
        chessBox.style.outline = `1px solid ${color}`;
        chessBox.style.background = 'white';
        chessBoard.appendChild(chessBox);
        if (i % 2 == 0) {
          if (j % 2 == 0) {
            chessBox.style.background = color;
          }
        } else {
          if (j % 2 != 0) {
            chessBox.style.background = color;
          }
        }
      }
    }
  }

  myChess(16, 16, 'green', 20);

  event.preventDefault();
});
