#### header 参数
1. x-token => xxxxxxxxxx
2. Content-Type => application/json

#### API
1. 验证码
   1. Method: POST
   2. URL: http://118.25.195.73:9999/base/captcha
	```
	Request Payload:
	{}

	Response:
	{
	    "data": {
	        "captchaId": "GpfwTyILbnNgYjLS97C0",
	        "picPath": "/base/captcha/GpfwTyILbnNgYjLS97C0.png"
	    },
	    "msg": "验证码获取成功",
	    "success": true
	}
	```

2. 登录
   1. Method: POST
   2. URL: http://118.25.195.73:9999/base/login
	```
	Request Payload:
	{"username":"admin","password":"bi@2020","captcha":"819311","captchaId":"GpfwTyILbnNgYjLS97C0"}

	Response:
	{
	    "data": {
	        "expiresAt": 1587352203000,
	        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiY2UwZDY2ODUtYzE1Zi00MTI2LWE1YjQtODkwYmM5ZDIzNTZkIiwiSUQiOjEwLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjoiODg4IiwiZXhwIjoxNTg3MzUyMjAzLCJpc3MiOiJCaXJkbWFuIiwibmJmIjoxNTg2NzQ2NDAzfQ.QpiG4wy9NO0GPS_284GgY73RrTDZEJyev2CQDMKVQ9g",
	        "user": {
	            "ID": 10,
	            "CreatedAt": "2019-09-13T17:23:46+08:00",
	            "UpdatedAt": "2020-04-12T23:40:55+08:00",
	            "DeletedAt": null,
	            "uuid": "ce0d6685-c15f-4126-a5b4-890bc9d2356d",
	            "userName": "admin",
	            "nickName": "超级管理员",
	            "headerImg": "",
	            "authority": {
	                "ID": 2,
	                "CreatedAt": "2019-09-08T16:18:45+08:00",
	                "UpdatedAt": "2019-09-08T16:18:45+08:00",
	                "DeletedAt": null,
	                "authorityId": "888",
	                "authorityName": "普通用户",
	                "parentId": "0",
	                "dataAuthorityId": null,
	                "children": null
	            },
	            "authorityId": "888"
	        }
	    },
	    "msg": "登录成功",
	    "success": true
	}
	```

3. Todo...