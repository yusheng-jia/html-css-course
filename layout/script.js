const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 200;

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 310, 210); // 超出部分被裁剪
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 100, 100);   // 正常显示