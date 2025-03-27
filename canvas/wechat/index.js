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



  addContext(canvasId, zIndex) {
    const ctx = wx.createCanvasContext(canvasId);
    // const ctx = canvas.getContext('2d')
    this.contexts.push({ id: canvasId, ctx, zIndex });

    // const query = wx.createSelectorQuery();
    // console.log(canvasId)
    // query.select(`#${canvasId}`)
    //     .fields({ node: true, size: true })
    //     .exec((res) => {
    //       const canvas = res[0].node;
    //       const ctx = canvas.getContext('2d');
          
    //       canvas.width = res[0].width;
    //       canvas.height = res[0].height;
    //       // const dpr = wx.getSystemInfoSync().pixelRatio;
    //       // console.log(dpr);
    //       // canvas.width = res[0].width * dpr;
    //       // canvas.height = res[0].height * dpr;
    //       // ctx.scale(dpr, dpr); // 适配高分辨率屏幕

    //       this.arcX = canvas.width / 2;
    //       this.arcY = this.isArc ? this.arcX + 4 * this.unit : this.arcX;
    //       if(this.isArc){
    //         this.arcRadius = this.arcX + 1.5 * this.unit;
    //         canvas.height = 2 * this.unit + (1 - Math.cos(52 * Math.PI / 180)) * this.arcRadius;
    //       }

    //       console.log(canvas.width, canvas.height, this.arcX, this.arcY, this.arcRadius)
    //       this.contexts.push({ id: canvasId, ctx, zIndex });
    //     });
  }