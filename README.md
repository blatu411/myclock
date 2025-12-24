# 极简全屏时钟 📱⏰

一个简洁优雅的微信小程序，专为横屏显示设计，是完美的桌面摆件。

## ✨ 功能特性

- 🎨 **极简设计**：黑色背景 + 白色数字，零干扰
- 📱 **全屏横屏**：自动横屏显示，充分利用屏幕空间
- ⏱️ **实时更新**：每秒自动刷新，显示时:分:秒
- 📐 **智能适配**：根据屏幕大小自动调整字体
- 🔋 **轻量级**：极小文件体积，流畅运行

## 📸 预览

黑色背景，白色巨大数字居中显示时间，完全沉浸式体验。

## 🚀 使用方法

### 1. 打开微信开发者工具

访问 [微信开发者工具官网](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 下载安装。

### 2. 导入项目

- 打开微信开发者工具
- 选择 **导入项目**
- 项目目录：选择本仓库文件夹
- AppID：可留空或填写你的小程序ID
- 点击 **导入** 或 **确定**

### 3. 预览效果

编译完成后，模拟器会显示时钟。点击右上角旋转按钮切换横屏。

## 📁 项目结构

```
myclock/
├── app.json                 # 应用配置
├── app.js                   # 应用入口
├── app.wxss                 # 全局样式
├── sitemap.json             # 搜索引擎优化
├── pages/
│   └── clock/
│       ├── clock.wxml       # 页面模板
│       ├── clock.wxss       # 页面样式
│       ├── clock.js         # 页面逻辑
│       └── clock.json       # 页面配置（强制横屏）
└── README.md               # 说明文档
```

## 🔧 技术栈

- **框架**：微信小程序原生框架
- **语言**：JavaScript + WXML + WXSS
- **特性**：
  - `setInterval` 定时器每秒刷新
  - Flexbox 布局完美居中
  - vmin 单位自适应屏幕

## 📝 核心代码

### 时间更新逻辑 (clock.js)

```javascript
updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  this.setData({
    time: `${hours}:${minutes}:${seconds}`
  });
}
```

### 样式布局 (clock.wxss)

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
}

.clock {
  font-size: 32vmin;  /* 自动适应屏幕大小 */
  color: #fff;
  font-family: 'Courier New', monospace;
}
```

## 🎯 适用场景

- 📺 办公桌摆件
- 🏠 家居显示
- 📊 会议室计时
- 🎪 展览展示
- 🛍️ 店铺显示

## 🔄 更新计划

- [ ] 添加日期显示
- [ ] 支持毫秒显示
- [ ] 自定义主题色
- [ ] 防屏幕休眠优化

## 📄 许可证

MIT

## 👨‍💻 贡献

欢迎 Pull Request 或提交 Issue！

---

**Enjoy your minimal clock! ⏰**
