
/*class Pipe{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 1;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    drawPipe() {
        let aboveImage = new Image();
        aboveImage.src = "../image/abovepipe.jpg";
        aboveImage.onload = () => {
            this.ctx.drawImage(aboveImage, this.x, this.y, this.width, this.height);
        }
        let belowImage = new Image();
        belowImage.src = "../image/belowpipe.jpg";
        belowImage.onload = () => {
            this.ctx.drawImage(belowImage, this.x, this.y + this.height + 40, this.width, this.height);
        }
        pipeArray.push(this);
        if (pipeArray.length > 10) {
            pipeArray.shift();
        }
        }
}*/