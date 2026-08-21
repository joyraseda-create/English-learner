# English Learner - 英语综合学习工具

> 为键盘工作者设计的英语学习软件，通过打字建立肌肉记忆，让记单词更高效。

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Deploy](https://github.com/joyraseda-create/English-learner/actions/workflows/deploy.yml/badge.svg)

## ✨ 功能特色

### 🎯 核心：打字记单词
- **肌肉记忆**：通过键盘输入记忆单词，比单纯浏览更高效
- **实时反馈**：输入速度、正确率即时显示，量化学习效果
- **默写模式**：每章结束后可进行默写测试，巩固记忆
- **多词库支持**：CET-4、CET-6、考研、程序员词库等多种选择

### 📚 六大学习模块

| 模块 | 说明 |
|------|------|
| **打字记单词** | 核心功能，打字同时学习音标和释义 |
| **短语学习** | 5大短语库（动词短语、介词短语等），1300+ 条目 |
| **句型学习** | 60+ 核心句型，句型变换 + 错句纠错 + 阶段测试 + 错题本 |
| **句子练习** | 300 道中译英题目（每阶段100题），句子成分标注（主谓宾定状补） |
| **日常对话** | 生活场景对话练习，支持语音发音 |
| **语法参考** | 系统语法参考书，随时查阅 |

### 🎨 其他特性
- 🌓 深色 / 浅色模式切换
- 📊 学习进度统计
- 📖 错题本功能
- 📤 词库 Excel 导出
- 👋 首次访问引导页
- 💾 本地数据持久化

## 🚀 在线体验

**立即体验：https://english-learner-7pd.pages.dev/**

> 推荐使用桌面端浏览器，获得最佳打字练习体验。

## 🛠️ 本地开发

### 环境要求
- Node.js >= 18
- npm

### 安装与运行

```bash
# 进入项目目录
cd englishlearner

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 目录结构

```
English-learner/
├── englishlearner/          # 主应用源码
│   ├── src/
│   │   ├── pages/           # 页面组件
│   │   │   ├── Typing/      # 打字记单词（核心模块）
│   │   │   ├── Phrases/     # 短语学习
│   │   │   ├── SentencePatterns/  # 句型学习
│   │   │   ├── ChineseToEnglish/  # 句子练习（中译英）
│   │   │   ├── Dialogue/    # 日常对话
│   │   │   ├── Grammar/     # 语法参考
│   │   │   └── Gallery/     # 词库选择
│   │   ├── components/      # 通用组件
│   │   ├── db/              # 数据层（dexie）
│   │   └── utils/           # 工具函数
│   ├── public/              # 静态资源
│   └── package.json
├── 竞争分析/                 # 竞品分析报告
├── .github/workflows/       # CI/CD 配置
└── README.md
```

## 📦 技术栈

- **框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式**：Tailwind CSS
- **状态管理**：React Context + useReducer
- **本地数据库**：Dexie.js (IndexedDB)
- **图标**：@iconify/tabler
- **部署**：Cloudflare Pages + GitHub Actions

## 🔄 自动部署

项目通过 GitHub Actions 自动部署到 Cloudflare Pages：

- 推送到 `main` 分支自动触发部署
- 部署状态：![Deploy](https://github.com/joyraseda-create/English-learner/actions/workflows/deploy.yml/badge.svg)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**如果这个项目对你有帮助，欢迎点个 Star ⭐ 支持一下！**
