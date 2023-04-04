let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let four = document.querySelector('.four');
let lis = four.querySelectorAll('li');

let width = canvas.width = canvas.offsetWidth;
let height = canvas.height = canvas.offsetHeight;

let r = 50; //小球半径
let x = 775; //圆心横坐标
let y = 385; //圆心纵坐标
let vx = 3.2; //默认横向速度
let vy = 0; //默认纵向速度
let g = 0.5; //重力加速度

context.beginPath();
context.fillStyle = "white";
context.arc(x, y, r, Math.PI, Math.PI * 2);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "black";
context.arc(x, y, r + 1, 0, Math.PI * 2);
context.stroke();
context.closePath();

context.beginPath();
context.fillStyle = "black";
context.arc(x, y, r, 0, Math.PI);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "black";
context.arc(x - 25, y, r / 2, 0, Math.PI * 2);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "white";
context.arc(x + 25, y, r / 2, 0, Math.PI * 2);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "white";
context.arc(x - 25, y, r / 6, 0, Math.PI * 2);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = "black";
context.arc(x + 25, y, r / 6, 0, Math.PI * 2);
context.fill();
context.closePath();

lis[2].addEventListener('mouseout', function draw() {
    //清空画布、重新绘制
    context.clearRect(0, 0, width, height);
    context.beginPath();

    vy += g;
    x += vx;
    y += vy;

    //碰到底部
    if (y >= height - r) {
        y = height - r;

        vy *= -0.6; //纵向速度方向改变 损耗0.4
        vx -= 0.05; //横向速度减少
        if (vx <= 0) {
            vx = 0;
        }
    }

    //画实心圆
    context.beginPath();
    context.fillStyle = "white";
    context.arc(x, y, r, Math.PI, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x, y, r + 1, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x, y, r, 0, Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x - 25, y, r / 2, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "white";
    context.arc(x + 25, y, r / 2, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "white";
    context.arc(x - 25, y, r / 6, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x + 25, y, r / 6, 0, Math.PI * 2);
    context.fill();
    context.closePath();


    requestAnimationFrame(draw);
},)
