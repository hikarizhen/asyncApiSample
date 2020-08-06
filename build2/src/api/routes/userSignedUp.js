const Router = require('hermesjs/lib/router');
const router = new Router();
const userSignedUpHandler = require('../handlers/userSignedUp');
module.exports = router;

router.use('userSignedUp', async (message, next) => {
  try {
    await userSignedUpHandler.userSignedUp({message});
    next();
  } catch (e) {
    next(e);
  }
});
