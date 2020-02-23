## node.js 学习用demo

#### 开发环境

- node.js: 10.16.0
- npm: 6.9.0
- IDE: VScode
- 托管平台: github
  - url: https://github.com/rabkool/nodejs

#### node_modules

cross-env

```
npm i cross-env@5.2.0
```

nodemon
```
npm i nodemon@1.18.9
```



#### api

| 機能名   | API         | 方法 | url参数 |                            |
| -------- | ----------- | ---- | ------- | -------------------------- |
| 获取列表 | /api/list   | GET  | id, key | 不为空                     |
| 获取详情 | /api/detail | GET  | id      |                            |
| 添加     | /api/new    | POST |         | post中含内容               |
| 更新     | /api/update | POST | id      |                            |
| 删除     | /api/delete | POST | id      |                            |
| 登陆     | /api/login  | POST |         | post中含userName, passWord |

