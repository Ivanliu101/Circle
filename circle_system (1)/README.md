# CircleOS v0.0.1

一个美观且功能完整的HTML模拟操作系统，采用现代化玻璃态设计和粉色紫色高科技流线型背景。

## 🌟 主要特性

### 🎨 现代化界面设计
- 玻璃态效果，带有模糊和透明效果
- 粉色和紫色高科技流线型动态背景
- 简洁的白色主题，搭配紫色和粉色点缀
- 响应式侧边栏，使用表情符号作为图标

### 🚀 多窗口管理系统
- 支持同时打开多个应用窗口
- 拖放式窗口定位
- 最小化、最大化和关闭功能
- 窗口焦点管理
- 打开和最小化窗口的视觉指示器（蓝色竖线和波浪号）

### 📱 内置应用程序
- **VS Code** - 代码编辑器模拟，支持语法高亮
- **记事本** - 简单的文本编辑器
- **日历** - 月历视图
- **文件管理器** - 支持文件拖放和管理（可拖入文件显示信息）
- **浏览器** - 网页浏览器模拟（开发中）
- **画图** - 绘图应用程序，支持多种工具
- **设置** - 系统配置面板，支持数据管理

### 🔐 用户系统与安全性
- **首次使用向导** - 设置用户名和PIN码
- **欢迎界面** - 点击开始进入系统
- **PIN码锁定** - 4位数字PIN码保护
- **自动锁定** - 1分钟无活动后自动锁定
- **数据持久化** - 用户数据和设置本地保存
- **数据管理** - 支持清除所有用户数据

### 🎭 视觉与动画效果
- **高科技背景** - 粉色和紫色流线型动态背景
- **粒子动画** - 交互式粒子效果
- **流畅过渡** - 窗口和界面元素的平滑动画
- **玻璃态设计** - 现代化的半透明界面风格

### 🔍 搜索功能
- 侧边栏快速应用搜索
- 实时搜索结果，带有动画效果
- 点击搜索结果直接启动应用

### 💾 数据持久化
- 窗口状态保存到localStorage
- 用户信息和PIN码安全存储
- 系统偏好设置持久化
- 文件数据本地保存

## 🚀 快速开始

1. 克隆或下载此仓库
2. 在现代Web浏览器中打开`index.html`
3. 开始使用CircleOS！

### 📝 首次使用
首次启动时，系统会引导您：
1. 设置用户名
2. 创建4位数字PIN码
3. 确认PIN码
4. 进入主界面

### 🔒 PIN码信息
- 首次设置后，PIN码将用于系统解锁
- 默认PIN码（未设置时）：`1234`
- 可在设置中修改PIN码

## 📖 使用指南

### 🚀 启动应用程序
1. 点击左侧边栏中的任何应用图标
2. 使用搜索功能（放大镜图标）快速查找和启动应用
3. 应用将在新窗口中打开，可以随意定位

### 🪟 窗口管理
- **拖动**：点击并按住窗口标题栏移动窗口
- **最小化**：点击减号按钮隐藏/显示窗口
- **最大化**：点击方形按钮全屏/还原窗口
- **关闭**：点击X按钮关闭窗口

### 📁 文件管理器使用
1. 将文件拖放到文件管理器窗口中
2. 文件将显示名称、类型、大小和日期信息
3. 双击文件可以"打开"（显示文件信息）
4. 支持多种文件类型的图标识别

### 🎨 画图应用使用
1. 从左侧工具栏选择工具：
   - 画笔（默认）
   - 橡皮擦
   - 矩形
   - 圆形
2. 从调色板中选择颜色
3. 在画布上点击并拖动进行绘制

### 🔒 系统锁定
- 在设置中点击"立即锁定"立即锁定
- 系统将在1分钟无活动后自动锁定
- 输入您的PIN码解锁系统

### ⚙️ 设置面板
- **General（通用）**：查看系统信息、用户名、自动锁定设置
- **Security（安全）**：修改PIN码、立即锁定、清除数据
- 支持设置的实时保存和加载

## 🔧 技术细节

### 🛠️ 使用的技术
- HTML5 语义化结构
- Tailwind CSS 样式框架
- Vanilla JavaScript 功能实现
- Lucide 图标库
- Canvas API 背景动画和画图应用

### 📁 文件结构
- `index.html` - 主应用程序文件
- `animations.css` - 综合动画库
- `README.md` - 此文档文件

### ✨ 核心功能实现
- **玻璃态设计**：使用 `backdrop-filter: blur()` 和半透明背景
- **多窗口管理**：自定义JavaScript拖放和状态管理
- **高科技背景**：Canvas粒子系统与流线型动画
- **文件拖放**：HTML5 File API 和拖放事件
- **数据持久化**：localStorage API 用户数据存储

### 🌐 浏览器兼容性
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

为获得最佳性能和视觉效果，建议使用最新版本的Chrome或Firefox浏览器。

## 📝 更新日志

### v0.0.1 (2024-12-11)
- ✨ 新增首次使用设置向导
- 🎨 全新高科技粉色紫色流线型背景
- 📁 文件管理器支持文件拖放功能
- 🔐 完整的用户系统和PIN码保护
- 🖥️ 改进的多窗口管理系统
- ⚙️ 设置面板支持数据管理
- 🎭 丰富的动画和视觉效果
- 💾 完善的数据持久化机制

## Customization

### Changing the Theme
The theme colors are defined in the Tailwind CSS configuration:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#8B5CF6',    // Purple
                secondary: '#EC4899',  // Pink
                accent: '#06B6D4',     // Cyan
                // ... more colors
            }
        }
    }
}
```

### Adding New Applications
1. Define your app in the `apps` object in `index.html`
2. Add an icon to the sidebar with the corresponding `data-app` attribute
3. Implement the app content HTML structure
4. Add any necessary JavaScript initialization code

## Performance Optimization
- CSS animations use hardware acceleration where possible
- Event listeners are properly managed to prevent memory leaks
- Canvas animations are optimized for performance
- Responsive design ensures good performance on all devices

## Future Enhancements
- [ ] Taskbar with running applications
- [ ] Start menu with more options
- [ ] File system with actual file operations
- [ ] More advanced paint tools
- [ ] Browser with tab support
- [ ] User profiles and customization
- [ ] Sound effects and notifications

## License
This project is open source and available under the MIT License.

## Credits
Created with ❤️ using modern web technologies.

---

**Note**: This is a simulation and not a real operating system. All data is stored locally in the browser and will be lost if you clear your browser data.