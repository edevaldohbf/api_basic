const router = require('express').Router();

const UserController = require('./controllers/UserController');

router.post('/login', UserController.login);
router.post('/user', UserController.create);
// router.get('/user', UserController.read);
// router.put('/user', UserController.update);
// router.delete('/user', UserController.delete);

module.exports = router;