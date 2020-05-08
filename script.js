const container = document.querySelector('#container');
let rainbowToggled = false;

function makeGrid(cols, rows){
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);

    for(i= 0; i<= (cols * rows); i++){
        const pixel = document.createElement('div');
        pixel.onmouseover = changeToGray();
        container.appendChild(pixel).classList.add('gridPixel');
    }
}

function clearCanvas(){
    let pixels = document.querySelectorAll('.gridPixel');
    pixels.forEach((pixel) => {
        pixel.style['background-color']= "transparent";
    })
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

function changeToGray(){
    const pixels = document.querySelectorAll('.gridPixel');
    pixels.forEach((pixel) => {
        pixel.onmouseover = e => {
            e.target.style['background-color'] = "rgb(22,22,22)";
        }
    })
}

function changeToRainbow(){
    if (!rainbowToggled){
        rainbowToggled = true;
        document.querySelector('#rainbowToggle').textContent = "ON"
        const pixels = document.querySelectorAll('.gridPixel');
        pixels.forEach((pixel) => {
            pixel.onmouseover = e => {
                let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                e.target.style['background-color'] = randomColor;
            }
        })
    }else {
        rainbowToggled = false;
        document.querySelector('#rainbowToggle').textContent = "OFF"
        changeToGray();
    }
}

makeGrid(16,16);