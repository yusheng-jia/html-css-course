Page({
    onReady() {
      // 使用选择器获取 Canvas 节点
      const query = wx.createSelectorQuery();
      query.select('#myCanvas')
        .fields({ node: true, size: true })
        .exec((res) => {
          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');
  
          // 获取设备像素比并设置 Canvas 真实尺寸
          const dpr = wx.getSystemInfoSync().pixelRatio;
          canvas.width = res[0].width * dpr;
          canvas.height = res[0].height * dpr;
          ctx.scale(dpr, dpr); // 适配高分辨率屏幕
  
          // 绘制圆弧
          ctx.beginPath();
          ctx.arc(250, 150, 120, -20 * Math.PI / 180, -160 * Math.PI / 180, true);
  
          // 创建线性渐变
          const gradient = ctx.createLinearGradient(130, 150, 370, 150); // 从左到右
          gradient.addColorStop(0, 'darkblue');   // 最左端：深蓝色
          gradient.addColorStop(0.2, 'blue');     // 稍内：亮蓝色
          gradient.addColorStop(0.8, 'red');      // 稍内：亮红色
          gradient.addColorStop(1, 'darkred');    // 最右端：深红色
  
          // 应用渐变到线条
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 10;
          ctx.stroke();
          ctx.closePath();
        });
    }
  });