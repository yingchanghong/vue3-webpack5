const app = require('./index/index');
require('./config');
require('./router');
require('./router/goods');

app.listen(9998, () => {
  console.log('run in 9998');
});
