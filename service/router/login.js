const router = require('../index'); // express实例
const loginInfo = require('../db/login');
router.post('/login', async (req, res) => {
  const data = await loginInfo.login(req.body, res);
  // console.log(data);
});
module.exports = router;
