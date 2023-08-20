class Abovepipe{
constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.speed = 1;
    this.canvas = document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext('2d');
    }

    drawAbovepipe() {
        let image = new Image();
        image.src ="../anh/abovepipe.jpg";
        image.onload =() => {
            this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
        }
    }
    moveAbovepipe() {
        this.x = this.x - this.speed ;
        this.drawAbovepipe();
    

}
}
