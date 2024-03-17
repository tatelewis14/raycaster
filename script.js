import { Input } from "./Input.js";

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
console.log(ctx)

canvas.width = innerWidth;
canvas.height = innerHeight;

const input = new Input()


let  tileSize = 32, mapX = 8, mapY = 8
let map = [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
]

function drawMap2d(x, y) {
    ctx.fillStyle = 'green';
    let xo = x ?? 0, yo = y ?? 0; //stands for last x and y positions so they can be shifted
    let mapIndex = 0; 
    for (let r = 0; r < mapY; r++) { 
        for (let c = 0; c < mapX; c++) {
            if (map[mapIndex] === 1) { 
                ctx.fillRect(xo, yo, tileSize, tileSize);
            }
            xo += tileSize + 1; 
            mapIndex++; 
        }
        xo = y ?? 0; 
        yo += tileSize + 1; 
    }
}


let px = 50, py = 50 // player position
let pa = 0 //player angle
let pdx, pdy // delta x and delta y

function drawPlayer(px, py) {
    ctx.beginPath()
    ctx.fillRect(px, py, 10, 10)
}
let direction;

function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    drawMap2d()
    ctx.fillStyle = 'red'
    drawPlayer(px, py);
    direction = input.direction
    switch(direction) {
        case'UP':
            py -= 5
            break;
        case'DOWN':
            py += 5;
            break;
        case'RIGHT':
            px +=5
            break;
        case'LEFT':
            px-=5
            break;
    }

    requestAnimationFrame(animate)
}
animate()