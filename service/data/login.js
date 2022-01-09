const loginData = {
  loginOk(data) {
    return {
      code: 200,
      success: true,
      data,
      message: '',
    };
  },
  loginErr() {
    return {
      code: 500,
      success: false,
      message: '服务端错误',
    };
  },
  loginFail(data) {
    return {
      code: 200,
      success: false,
      message: '用户名或密码不正确',
    };
  },
};

module.exports = loginData;
