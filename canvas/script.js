// 获取canvas元素和上下文
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置canvas尺寸
canvas.width = 500;
canvas.height = 300;

// 绘制圆弧
ctx.beginPath();
ctx.arc(250, 150, 120, -20 * Math.PI / 180, -160 * Math.PI / 180, true);

// 创建线性渐变
const gradient = ctx.createLinearGradient(130, 150, 370, 150); // 从左到右
gradient.addColorStop(0, 'blue');  // 起点蓝色
gradient.addColorStop(1, 'red');   // 终点红色

// 应用渐变到线条
ctx.strokeStyle = gradient; // 使用渐变作为描边颜色
ctx.lineWidth = 10;         // 设置线条宽度
ctx.stroke();
ctx.closePath();