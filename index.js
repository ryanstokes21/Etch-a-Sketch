const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize-btn');


resizeBtn.addEventListener('click', prompAndCreateGrid);
function prompAndCreateGrid() {
  let newSize = prompt('Enter new grid size (max 100):');
  if(newSize !== null) {
    newSize= parseInt(newSize);
    if(isNaN(newSize) || newSize < 1 || newSize > 100) {
      alert('please enter a number between 1 and 100.');
      return;
    }
    createGrid(newSize);
  }
};


function createGrid(size) {
  container.innerHTML = '';
  for (i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    const squareSize = 640 / size;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener('mousemove', () => {
      square.style.background = getRandomColor();
    });
    container.appendChild(square);
  };
};

createGrid(16);

function getRandomColor() {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}