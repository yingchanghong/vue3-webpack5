const app = require('../index');
const bodyParser = require('body-parser');
//处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//设置允许跨域访问该服务器
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT,GET,DELETE,OPTIONS');
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization,authorization, Accept, X-Requested-With'
  );
  next();
});
