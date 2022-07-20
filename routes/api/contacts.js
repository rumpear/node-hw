const express = require('express');
const router = express.Router();
const contactsController = require('../../controllers/');

router.get('/', contactsController.getAll);

router.get('/:contactId', contactsController.getById);

router.post('/', contactsController.add);

router.delete('/:contactId', contactsController.remove);

router.put('/:contactId', contactsController.update);

module.exports = router;
