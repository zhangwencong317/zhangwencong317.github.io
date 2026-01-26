# 个人科研网站

这是我的个人科研网站，展示我的研究方向、论文发表和学术动态。

## 🌐 网站地址

访问网站：**https://Vincent0317.github.io/zhangwencong/**

## 🚀 功能特性

- **研究简介**：个人介绍和研究方向
- **论文发表**：学术论文列表，包含 PDF、代码和项目页面链接
- **最新动态**：最新更新和成就
- **访问统计**：网站访问统计，包括页面访问量、下载量、链接点击量和论文查看量
- **响应式设计**：完美适配桌面、平板和移动设备

## 📁 文件结构

```
zhangwencong/
├── index.html          # 主页面
├── assets/
│   ├── css/
│   │   └── style.css   # 样式文件
│   └── js/
│       ├── script.js   # 交互脚本
│       └── analytics.js # 统计追踪
├── documents/
│   └── resume.pdf      # 简历文件
├── README.md           # 英文说明
└── README_CN.md        # 中文说明
```

## 🛠️ 本地开发

1. 克隆仓库
```bash
git clone https://github.com/Vincent0317/zhangwencong.git
cd zhangwencong
```

2. 启动本地服务器
```bash
python3 -m http.server 8000
```

3. 在浏览器中打开 `http://localhost:8000`

## 📝 更新网站

1. 修改文件
2. 提交更改
```bash
git add .
git commit -m "更新网站内容"
git push origin main
```

GitHub Pages 会自动更新（通常需要几分钟）。

## 📊 访问统计

网站包含内置的访问统计功能，统计数据会实时显示在页面底部。

### 查看统计数据

**在网站上查看：**
- 滚动到页面底部，可以看到"访问统计"模块
- 统计模块显示：
  - 👁️ **页面访问量**：每日独立访问（每个访客每天只计数一次）
  - 📥 **简历下载量**：简历 PDF 的下载次数
  - 🔗 **链接点击量**：外部链接的点击次数
  - 📄 **论文查看量**：论文相关链接的点击次数（PDF、网页、arXiv、摘要、bibtex）
- 统计数据会自动更新，并显示最后更新时间

**在浏览器控制台查看（高级）：**
1. 打开你的网站
2. 按 `F12`（或右键 → 检查）打开开发者工具
3. 切换到"控制台"（Console）标签
4. 输入：`websiteAnalytics.getStats()` 然后按回车
5. 你会看到详细的统计数据（JSON 格式）

**注意：** 统计数据存储在浏览器的 localStorage 中，因此：
- 每个访客看到的是自己的统计数据
- 数据会在会话间保持，但清除浏览器缓存后会重置
- 不同设备/浏览器会显示不同的计数

### 高级统计分析

如需服务器端统计和更详细的分析报告（访客地理位置、流量来源、设备类型等），可以集成 **Google Analytics**：

1. 从 [Google Analytics](https://analytics.google.com/) 获取你的 Measurement ID
2. 打开 `index.html`，找到 Google Analytics 部分（大约第 10-19 行）
3. 取消注释 GA 代码，将 `G-XXXXXXXXXX` 替换为你的 Measurement ID
4. 保存并推送到 GitHub

配置完成后，可在 [Google Analytics 控制台](https://analytics.google.com/) 查看详细报告

## 📄 许可证

本项目采用 MIT 许可证开源。
