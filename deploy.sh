#!/bin/bash

# GitHub Pages 快速部署脚本
# 使用方法: ./deploy.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
    echo "错误: 请提供你的 GitHub 用户名"
    echo "使用方法: ./deploy.sh YOUR_GITHUB_USERNAME"
    echo "例如: ./deploy.sh zhangsan"
    exit 1
fi

GITHUB_USERNAME=$1
# 如果仓库名是 username.github.io，则使用该名称，否则使用 portfolio
if [ "$GITHUB_USERNAME" = "zhangwencong" ]; then
    REPO_NAME="zhangwencong.github.io"
else
    REPO_NAME="portfolio"
fi

echo "=========================================="
echo "GitHub Pages 部署脚本"
echo "=========================================="
echo "GitHub 用户名: $GITHUB_USERNAME"
echo "仓库名称: $REPO_NAME"
echo ""

# 检查是否已初始化 git
if [ ! -d ".git" ]; then
    echo "初始化 Git 仓库..."
    git init
    git branch -M main
fi

# 检查是否已添加远程仓库
if git remote | grep -q "origin"; then
    echo "检测到已存在的远程仓库，更新 URL..."
    git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
else
    echo "添加远程仓库..."
    git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
fi

# 确保分支名为 main
git branch -M main 2>/dev/null || true

# 添加所有文件
echo "添加文件到 Git..."
git add .

# 检查是否有更改
if git diff --staged --quiet; then
    echo "没有需要提交的更改。"
else
    echo "提交更改..."
    git commit -m "Update website $(date +%Y-%m-%d)"
fi

# 推送到 GitHub
echo ""
echo "推送到 GitHub..."
echo "如果这是第一次推送，GitHub 可能会要求你输入用户名和密码。"
echo "建议使用 Personal Access Token 作为密码。"
echo ""
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "✅ 部署成功！"
    echo "=========================================="
    echo ""
    echo "你的网站将在以下地址可用："
    if [ "$REPO_NAME" = "$GITHUB_USERNAME.github.io" ]; then
        echo "https://$GITHUB_USERNAME.github.io"
    else
        echo "https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
    fi
    echo ""
    echo "⚠️  重要提示："
    echo "1. 确保在 GitHub 仓库设置中启用了 GitHub Pages"
    echo "2. 仓库必须是 Public（公开）"
    echo "3. 等待 1-5 分钟让 GitHub 完成部署"
    echo ""
    echo "如果网站无法访问，请检查："
    echo "- 仓库 Settings → Pages → Source 设置为 'main' 分支"
    echo "- 仓库是否为 Public"
    echo ""
else
    echo ""
    echo "=========================================="
    echo "❌ 推送失败"
    echo "=========================================="
    echo ""
    echo "可能的原因："
    echo "1. GitHub 仓库尚未创建"
    echo "2. 认证失败（需要设置 Personal Access Token）"
    echo "3. 网络连接问题"
    echo ""
    echo "请按照以下步骤操作："
    echo "1. 在 GitHub 上创建仓库: https://github.com/new"
    echo "2. 仓库名称: $REPO_NAME"
    echo "3. 设置为 Public"
    echo "4. 不要初始化 README"
    echo "5. 然后再次运行此脚本"
    echo ""
fi
