const express = require('express');
const contactsController = require('../../controllers/contacts');
const router = express.Router();

router.get('/', contactsController.getAll);

router.get('/:contactId', contactsController.getById);

router.post('/', contactsController.add);

router.delete('/:contactId', contactsController.remove);

router.put('/:contactId', contactsController.update);

router.patch('/:contactId/favorite', contactsController.updateFavorite);

module.exports = router;
