const express = require('express');
const controller = require('../../controllers/contacts');
const router = express.Router();

router.get('/', controller.getAll);

router.get('/:contactId', controller.getById);

router.post('/', controller.add);

router.delete('/:contactId', controller.remove);

router.put('/:contactId', controller.update);

router.patch('/:contactId/favorite', controller.updateFavorite);

module.exports = router;
