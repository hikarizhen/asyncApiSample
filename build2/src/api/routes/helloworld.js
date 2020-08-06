const Router = require('hermesjs/lib/router');
const router = new Router();
const helloworldHandler = require('../handlers/helloworld');
module.exports = router;

router.use('helloworld', async (message, next) => {
  try {
    await helloworldHandler.helloworld({message});
    next();
  } catch (e) {
    next(e);
  }
});
