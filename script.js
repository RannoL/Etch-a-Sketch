const container = document.querySelector('#container');

function makeGrid(cols, rows){
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    for(i= 0; i< (cols * rows); i++){
        const cell = document.createElement('div');
        cell.textContent = i + 1;
        container.appendChild(cell).className = 'gridElement';
    }
}

makeGrid(16,16);