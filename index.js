const container = document.querySelector('#container');

function createGrid(size) {
container.innerHTML = '';
for (i = 0; i < size * size; i++) {
  const square = document.createElement('div');
  square.classList.add('grid-square');
  const squareSize = 640 / size;
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;
  square.addEventListener('mousemove', () => {
    square.style.background = 'black';
  });
  container.appendChild(square);
}
};

createGrid(16);
