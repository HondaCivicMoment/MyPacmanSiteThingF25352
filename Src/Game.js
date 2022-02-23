import TileSheet from "./TileSheet.js";

const tileSize = 32;
const velocity= 2;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const tileSheet = new TileSheet(tileSize);
const pacman = tileSheet.getPacman(velocity)



function gameLoop(){
    tileSheet.draw(ctx);
    pacman.draw(ctx)
}
tileSheet.setCanvasSize(canvas);
setInterval(gameLoop,1000/75);