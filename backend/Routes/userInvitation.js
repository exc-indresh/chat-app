const inviteUser = require('../Controllers/inviteController');
const router = require('express').Router();

router.post('/',inviteUser);

module.exports = router;