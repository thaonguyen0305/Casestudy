let background = new Background(0, 0, 600, 300);
let text = new Text(10, 10, 100, 45);
let bird = new Bird(50, 150, 30, 30);
let arrPipe = [];
for (let i = 0; i < 10; i++) {
    let pipe1 = new Pipe(500 + i * 50, 0, 30, 100, 40, "anh/abovepipe.jpg");
    arrPipe.push(pipe1);
    let pipe2 = new Pipe(500 + i * 50, 300 - 100, 30, 100, 40, "anh/belowpipe.jpg");
    arrPipe.push(pipe2);
}
function drawArrPipe() {
    arrPipe.forEach(pipe => {
        pipe.drawPipe();
        pipe.movePipe();
    });
}


//let abovepipe = new Abovepipe(600, 0, 50, 100);
//let belowpipe = new Belowpipe(600, 200, 50, 100);
//tạo class Game
class Game {
    constructor() {
        this.status = "start";
        this.score = 0;
        this.bestScore = 0;
        this.bird = new Bird();
        //this.abovepipe = new Abovepipe();
        //this.belowpipe = new Belowpipe();
    }

    start() {
        //background.drawBackground();
        text.drawText();
        bird.moveBird();
        
        //abovepipe.moveAbovepipe();
        //belowpipe.moveBelowpipe();


    }

    gameover() {
        // nếu mà xảy ra va chạm thì kết thúc trò chơi
        bird.collision();
    }

    showScore() {

    }


}

//Sự kiện phím

// Tạo đối tượng trò chơi
let game = new Game();

function init() {
    game.start();
    game.gameover();
    drawArrPipe();
    requestAnimationFrame(init);
}
init();
    
document.addEventListener('keydown', (event) => {
    if (event.key === " ") {
        bird.flap();
    }
});

