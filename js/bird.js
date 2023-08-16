//tạo class
class Bird {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.status = "playing";
        this.height = height;
        this.width = width;
        this.speed = 0;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        
    }
    //vẽ bird lên canvas
    drawBird() {
        let image = new Image();
        image.src ="../image/bird.png";
        image.onload =() => {
            this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
        }
    }
    //bird di chuyển
    moveBird() {
        this.speed += 0.1;
        this.y = this.y + this.speed ;
        this.drawBird();
    }
    
    flap() {
        this.speed -= 0.1;
        
    }
    //xử lý va chạm
    collision() {
        // nếu tọa độ của bird.y + bird.height = pipe. 
    }
}
