const connect = require('./index');
const loginData = require('../data/login');
const tokenApi = require('../config/token');
const loginInfo = {
  async login(params, res) {
    const { name, password } = params;
    let data = null;
    const login = `select * from user where name =${JSON.stringify(
      name
    )} and password = ${JSON.stringify(password)}`;
    data = await connect.query(login, (err, req) => {
      if (err) {
        res.send(loginData.loginErr());
        throw err;
      } else {
        if (req.length) {
          tokenApi.setToken(name).then(token => {
            res.send(Object.assign(loginData.loginOk(req), { token }));
          });
        } else {
          res.send(loginData.loginFail(data));
        }
      }
    });
    return data;
    // return new Promise(resolve => {
    //   resolve(data);
    // });
  },
};
module.exports = loginInfo;
