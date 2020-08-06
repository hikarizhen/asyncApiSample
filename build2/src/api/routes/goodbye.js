const Router = require('hermesjs/lib/router');
const router = new Router();
const goodbyeHandler = require('../handlers/goodbye');
module.exports = router;

router.use('goodbye', async (message, next) => {
  try {
    await goodbyeHandler.goodbye({message});
    next();
  } catch (e) {
    next(e);
  }
});
