const router = require('express-promise-router')();

const { auth } = require('../controllers');

router.route('/').post(auth.create);

module.exports = router;
