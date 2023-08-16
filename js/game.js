let background = new Background(0, 0, 600, 300);
let bird = new Bird(50, 150, 30, 30);
let pipeArray = [];
let abovepipe = new Abovepipe(600, 0, 50, 100);
let belowpipe = new Belowpipe(600, 200, 50, 100);
//tạo class Game
class Game {
    constructor() {
        this.status = "start";
        this.score = 0;
        this.bestScore = 0;
        this.bird = new Bird();
        this.abovepipe = new Abovepipe();
        this.belowpipe = new Belowpipe();
    }
     
    start() {
        background.drawBackground();
        bird.moveBird();
        abovepipe.moveAbovepipe();
        belowpipe.moveBelowpipe();
        document.addEventListener('keydown', (event) => {
            if (event.key === " ") {
                bird.flap(); 
            }
        });
    }

    gameover() {
      // nếu mà xảy ra va chạm thì kết thúc trò chơi
      this.status = "gameover"
    }

    showScore() {  
        
    }


}

//Sự kiện phím

// Tạo đối tượng trò chơi
let game = new Game();

function init() {
    game.start();
    requestAnimationFrame(init);
}
init();
