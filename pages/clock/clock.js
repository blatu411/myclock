Page({
  data: {
    time: '00:00:00'
  },

  onLoad() {
    // 立即显示当前时间
    this.updateTime();

    // 每秒刷新一次
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  },

  updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    this.setData({
      time: `${hours}:${minutes}:${seconds}`
    });
  },

  onUnload() {
    // 页面卸载时清除定时器，释放内存
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
})
