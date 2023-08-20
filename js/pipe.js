class Pipe {
    constructor(pipeX, pipeY, pipeW, pipeH, space, image) {
        this.pipeX = pipeX;
        this.pipeY = pipeY;
        this.pipeW = pipeW;
        this.pipeH = pipeH;
        this.space = space;
        this.speed = 1;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.image = image;

    }



    drawPipe() {
        let aboveImage = new Image();
        aboveImage.src = this.image;
        aboveImage.onload = () => {
            this.ctx.drawImage(aboveImage, this.pipeX, this.pipeY, this.pipeW, this.pipeH);
        }

    }

    movePipe() {
        this.pipeX = this.pipeX - this.speed;
        this.drawPipe();
    }
}



