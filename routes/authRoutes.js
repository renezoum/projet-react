const {Router} = require('express');
const authentification = require('../controllers/authenControllers');


const router = Router();

router.get('/signup', authentification.signup_get);
router.post('/signup', authentification.signup_post);
router.get('/login', authentification.login_get);
router.post('/login', authentification.login_post);
router.get('/logout', authentification.logout_get);


module.exports = router;