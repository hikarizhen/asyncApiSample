const Router = require('hermesjs/lib/router');
const router = new Router();
const heyHandler = require('../handlers/hey');
module.exports = router;

router.use('hey', async (message, next) => {
  try {
    await heyHandler.hey({message});
    next();
  } catch (e) {
    next(e);
  }
});
