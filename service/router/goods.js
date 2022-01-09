const router = require('../index'); // express实例
const tokenApi = require('../config/token');
router.get('/goodList', async (req, res) => {
  const isValue = await tokenApi.verToken(req.headers.authorization);
  console.log(isValue.token);
  if (!isValue.token) {
    const data = {
      code: 5005,
    };
    res.send(data);
  } else {
    const data = {
      code: 200,
      success: true,
    };
    res.send(data);
  }
});
module.exports = router;
