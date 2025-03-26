const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const label = document.getElementById('numberLabel');

canvas.width = 300;
canvas.height = 200;

ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 300, 200);

let currentValue = 5; // 初始值
let isDragging = false;
let startX = 0;

// 鼠标按下事件
canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.offsetX;
});

// 鼠标移动事件
canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const currentX = e.offsetX;
        const diff = currentX - startX;
        
        // 根据滑动距离调整数值，每10像素变化1个单位
        const change = Math.floor(diff / 10);
        label.textContent = currentValue + change;
    }
});

// 鼠标松开事件
canvas.addEventListener('mouseup', (e) => {
    if (isDragging) {
        const currentX = e.offsetX;
        const diff = currentX - startX;
        const change = Math.floor(diff / 10);
        currentValue += change; // 更新基准值
        label.textContent = currentValue;
        isDragging = false;
    }
});

// 鼠标离开canvas区域时停止
canvas.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
    }
});