const express = require('express');
const controller = require('../../controllers/auth/');
const router = express.Router();

// router.get('/', controller.getAll);

// router.get('/:contactId', controller.getById);

router.post('/signup', controller.signup);

// router.delete('/:contactId', controller.remove);

// router.put('/:contactId', controller.update);

// router.patch('/:contactId/favorite', controller.updateFavorite);

module.exports = router;
