var express = require('express');
var router = express.Router();
var SessionController = require('../controllers/SessionController.js');

/*
 * GET
 */
router.get('/', SessionController.list);

/*
 * GET
 */
router.get('/:id', SessionController.show);

/*
 * POST
 */
router.post('/', SessionController.create);

/*
 * PUT
 */
router.put('/:id', SessionController.update);

/*
 * DELETE
 */
router.delete('/:id', SessionController.remove);

module.exports = router;
