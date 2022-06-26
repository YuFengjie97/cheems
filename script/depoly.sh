#!/usr/bin/env sh

# 发生错误时终止
set -e

git checkout -b gh-pages

# 构建
npm run build

# 进入构建文件夹
# cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add .
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
git push -f git@github.com:YuFengjie97/cheems.git gh-pages
cd -