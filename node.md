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
