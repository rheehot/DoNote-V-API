const Router = require('koa-router');
const authCtrl = require('auth.controller');
const dmw = require("modules/donoteMiddleware");

const router = new Router();

router.use(dmw.sidAuthMiddleware);
router.get('/catch', authCtrl.loginFlow);

module.exports = router;