const router = require('express').Router();

const userController = require('../controllers/userController');
const { verifyToken } = require('../utils/token');

router.get('/', (req, res) => {
    res.status(200).send('API HOME')
});

router.post('/login', userController.login);
router.get('/user', verifyToken, userController.read);

module.exports = router;