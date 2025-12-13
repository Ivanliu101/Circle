// CircleOS 工具函数模块

// 全局变量
let globalState = {
  isLoggedIn: false,
  currentUser: null,
  isSafeMode: false,
  windows: []
};

// 生成随机圆球背景
function createOrbs(count = 5) {
  const container = document.body;
  const existingOrbs = document.querySelectorAll('.orb');
  existingOrbs.forEach(orb => orb.remove());
  
  for (let i = 0; i < count; i++) {
    const orb = document.createElement('div');
    orb.className = 'orb';
    
    // 随机大小和位置
    const size = Math.random() * 150 + 50;
    const posX = Math.random() * (window.innerWidth - size);
    const posY = Math.random() * (window.innerHeight - size);
    const delay = Math.random() * 5;
    const duration = Math.random() * 4 + 4;
    
    orb.style.width = size + 'px';
    orb.style.height = size + 'px';
    orb.style.left = posX + 'px';
    orb.style.top = posY + 'px';
    orb.style.animationDelay = delay + 's';
    orb.style.animationDuration = duration + 's';
    
    container.appendChild(orb);
  }
}

// 窗口管理系统
class WindowManager {
  constructor() {
    this.windows = [];
    this.activeWindow = null;
  }
  
  createWindow(options) {
    const { title, content, width = 400, height = 300, x, y } = options;
    
    const windowElement = document.createElement('div');
    windowElement.className = 'window';
    windowElement.style.width = width + 'px';
    windowElement.style.height = height + 'px';
    
    if (x !== undefined && y !== undefined) {
      windowElement.style.left = x + 'px';
      windowElement.style.top = y + 'px';
      windowElement.style.transform = 'none';
    }
    
    windowElement.innerHTML = `
      <div class="window-header">
        <span>${title}</span>
        <button class="window-close" onclick="windowManager.closeWindow(${this.windows.length})">×</button>
      </div>
      <div class="window-content">
        ${content}
      </div>
    `;
    
    document.body.appendChild(windowElement);
    
    const windowObj = {
      id: this.windows.length,
      element: windowElement,
      title,
      isActive: true
    };
    
    this.windows.push(windowObj);
    this.setActiveWindow(windowObj.id);
    this.makeDraggable(windowElement);
    
    return windowObj.id;
  }
  
  closeWindow(id) {
    const windowObj = this.windows.find(w => w.id === id);
    if (windowObj) {
      windowObj.element.remove();
      this.windows = this.windows.filter(w => w.id !== id);
      
      if (this.activeWindow === id && this.windows.length > 0) {
        this.setActiveWindow(this.windows[this.windows.length - 1].id);
      }
    }
  }
  
  setActiveWindow(id) {
    this.windows.forEach(windowObj => {
      windowObj.isActive = windowObj.id === id;
      if (windowObj.isActive) {
        windowObj.element.style.zIndex = '1000';
        windowObj.element.querySelector('.window-header').style.boxShadow = '0 2px 10px rgba(255, 105, 180, 0.5)';
      } else {
        windowObj.element.style.zIndex = '100';
        windowObj.element.querySelector('.window-header').style.boxShadow = 'none';
      }
    });
    this.activeWindow = id;
  }
  
  makeDraggable(element) {
    const header = element.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;
    
    header.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('window-close')) return;
      
      isDragging = true;
      const rect = element.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      
      element.style.transform = 'none';
      this.setActiveWindow(this.windows.find(w => w.element === element).id);
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      
      element.style.left = Math.max(0, Math.min(x, window.innerWidth - element.offsetWidth)) + 'px';
      element.style.top = Math.max(0, Math.min(y, window.innerHeight - element.offsetHeight)) + 'px';
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
}

// 创建全局窗口管理器实例
const windowManager = new WindowManager();

// 页面跳转函数
function navigateTo(page) {
  const pages = {
    'boot': '/home/user/vibecoding/workspace/circle_system/boot.html',
    'safe-mode': '/home/user/vibecoding/workspace/circle_system/safe-mode.html',
    'lock-screen': '/home/user/vibecoding/workspace/circle_system/lock-screen.html',
    'desktop': '/home/user/vibecoding/workspace/circle_system/desktop.html'
  };
  
  if (pages[page]) {
    window.location.href = pages[page];
  }
}

// 登录验证
function authenticate(username, password) {
  // 简化的验证逻辑（实际系统中应该更安全）
  const validCredentials = {
    'admin': 'admin123',
    'user': 'password123'
  };
  
  if (validCredentials[username] === password) {
    globalState.isLoggedIn = true;
    globalState.currentUser = username;
    return true;
  }
  return false;
}

// 安全模式检测
function checkSafeMode() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('safeMode') === 'true';
}

// 系统初始化
function initializeSystem() {
  createOrbs();
  
  // 监听窗口大小变化
  window.addEventListener('resize', () => {
    createOrbs();
  });
  
  // 检测安全模式
  globalState.isSafeMode = checkSafeMode();
  
  console.log('CircleOS System initialized');
  console.log('Global state:', globalState);
}

// 显示通知
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(45deg, var(--primary-pink), var(--primary-purple));
    color: white;
    padding: 15px 20px;
    border-radius: 25px;
    box-shadow: var(--shadow-glow);
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, duration);
}

// 添加通知动画样式
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// 导出函数（供其他模块使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createOrbs,
    windowManager,
    navigateTo,
    authenticate,
    checkSafeMode,
    initializeSystem,
    showNotification,
    globalState
  };
}