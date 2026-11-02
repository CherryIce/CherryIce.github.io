# CherryIce · 个人作品集

中文、浅色的静态个人主页，聚焦应用与开发工具。使用原生 HTML、CSS 和 JavaScript，无框架、无安装依赖、无构建步骤或第三方字体请求。

## 本地预览

可直接用浏览器打开 `index.html`，或在仓库目录运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问 <http://127.0.0.1:4173/>。

## 内容维护

- `index.html`：简介、四个精选作品、更多仓库、关于与联系。
- `styles.css`：颜色、排版、项目插画和响应式布局。
- `script.js`：手机导航、作品分类筛选、年份。
- `assets/`：樱桃标记与项目图标。

增加精选作品时，在 `.project-grid` 中添加含 `data-project` 的文章，使用 `data-category="product"` 或 `data-category="tool"`，并更新筛选按钮中的数量。每个项目应使用独立的标题 ID。

脚本不可用时，所有作品仍展示，手机导航仍可访问；筛选控件只在脚本初始化后显示。页面支持键盘操作和减少动态效果偏好。

## 资源与内容

- LangPack 图标来自 [项目公开品牌资源](https://github.com/CherryIce/langpack-prototype/blob/main/design/brand/app-icon.png)。
- NovelReader 图标来自 [项目公开应用资源](https://github.com/CherryIce/NovelReader/blob/main/BookReader/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png)。
- 图标已缩小为适合网页显示的尺寸；其余插画使用 HTML/CSS/SVG 绘制。
- 产品插画为功能示意，不是实际应用截图；项目介绍根据公开 README 整理。
- Cloud Build 是工作流参考实现，不代表已完成真实 Apple 签名、TestFlight 或商店发布验证。

## GitHub Pages

仓库现有配置从 `main` 分支的根目录发布，正式地址为 <https://cherryice.github.io/>。`.nojekyll` 保证按普通静态文件提供服务。

采用新版时，将本次经过检查的改动合入 `main` 并推送，即可触发现有 GitHub Pages 发布。发布后应核对 Pages 构建状态和线上内容；本地预览不代表已经上线。
