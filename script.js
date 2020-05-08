const container = document.querySelector('#container');

function makeGrid(cols, rows){
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);

    for(i= 0; i< (cols * rows); i++){
        const cell = document.createElement('div');
        cell.addEventListener("mouseenter", e => { 
            e.target.classList.add("hovered")})
        container.appendChild(cell).classList.add('gridPixel');
    }
}

function clearCanvas(){
    let hovered = document.querySelectorAll('.hovered');
    for (i= 0; i< hovered.length; i++){
        hovered[i].classList.remove('hovered')
    }
}

function makeCanvas(){
    let grid = document.querySelector('#container');
    let size = parseInt(document.querySelector('#sizeInput').value);
    if (size <= 0 || size > 64 || isNaN(size)){
        alert("Size should be a number between 1-64");
    }else{
        /*  remove old grid */
        grid.querySelectorAll('*').forEach(e => e.remove());
        makeGrid(size,size);
    }


}

makeGrid(16,16);