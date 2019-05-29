# 基于vue的admin前端框架

预览地址：https://coderzhong.github.io/vue-admin/dist/

## 介绍
- 基于3个vue的admin开发项目和多个开源的admin项目，抽象整理出此vue-admin
- 基础框架，clone本项目后可以基于此直接进行前端业务开发和扩展
- vue-cli3 + vue-router + axios + vuex + element-ui + echarts + mockjs + lodash

## 功能
- 登录、登出、JWT、管理token过期时间、记录登录状态
- element-ui和echarts组件按需引用
- 路由懒加载
- 前端鉴权
    - 页面鉴权
    - 组件鉴权（指令封装）
    - 权限配置
- mock数据
- Gzip
- 全局功能
    - 路由递归渲染侧边栏，多级菜单嵌套
    - 面包屑导航
    - 收缩及自适应收缩侧边栏
    - screenfull全屏切换
    - 页面加载进度条
    - 页面切换动效
- 组件封装
    - 分页条
- 页面
    - 登录页
    - dashboard
    - 列表查询
    - 表单 & 分步表单
    - 404

## 使用
### clone本项目
```
git clone https://github.com/Coderzhong/vue-admin.git
```
### 进入项目目录

```
cd vue-admin
```
### 安装依赖(建议使用淘宝镜像)
```
cnpm install
```

### 启动服务
```
npm run serve
```

### 打包
```
npm run build
```
