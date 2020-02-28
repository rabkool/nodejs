## node.js

### 指令
##### 初始化npm: 
``` 
npm init -y
```

##### 安装lodash: 
```
npm i lodash --save
```


### mysql error
##### Error: 
```
ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

##### 原因: 
```
修改加密规则为普通模式，默认是严格加密模式
```

##### 解决办法:

1. 修改加密规则 （必写）
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
