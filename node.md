## node.js

#### 指令
##### 初始化npm:
``` 
npm init -y
```

##### 安装lodash:
```
npm i lodash --save
```


#### mysql error
##### Error:
```
ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

##### 原因:
```
修改加密规则为普通模式，默认是严格加密模式
```

##### 解决办法:

1. 修改加密规则（必写）
```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
```

2. 更新用户密码
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

3. 刷新权限（不输入也可以）
```
FLUSH PRIVILEGES;
```

#### git
新建文件删除
git clean -df


#### cookie
 - 存储在游览器的一段字符串(最大5kb)
 - 跨域不共享
 - 格式 k1=v1; k2=v2; k3=v3; 因此可以存储结构化数据
 - path=/: 所有path下
 - httpOnly: 只允许后端来改
 - expires=${getCookieExpires()}: 设置过期时间


 #### sesssion
  1. session是js变量 放在nodejs进程内存中
     - nodeJs 32位系统只有1.6G内存限制 64中不会超过3G
  2. 进程内存有限 访问量过大后 内存暴涨 后会挂
  3. 正式上线后 运行是多进程 进程之间内存无法共享
      - 多核可以处理多个任务进程
  4. 解决方案 redis

  ```
  进程内存模型
  _____________________
  |0x8000    Stack(栈) : 基础变量(数字类型 布尔类型)
  |
  |
  |
  |____________________
  |0x1020    Heap(堆) : 引用类型(对象数组 函数 session)
  |0x1000
  |____________________
  ```


  #### redis
  - web server 最常用缓存数据库 数据存放在内存中

    - 优点: 读取快

    - 缺点: 贵(成本高 比硬盘贵) 容量小*(可存储数据量小) 断电丢失(关机就凉)
  - 为什么session 适合用 redis

    1. session 访问频繁 对性能要求极高

    2. session 可以不考虑断电丢失数据问题 (redis也可以做到断电不丢失数据)

    3. session 数据量不会太大
  - 为何网站数据不适合redis

    1. 操作频率不高

    2. 断电不能丢失 必须保留 (可断电恢复 但备份恢复繁琐)

    3. 数据量大 内存成本太大