var express = require('express');
var router = express.Router();
var PrescriptionController = require('../controllers/PrescriptionController.js');

/*
 * GET
 */
router.get('/', PrescriptionController.list);

/*
 * GET
 */
router.get('/:id', PrescriptionController.show);

/*
 * POST
 */
router.post('/', PrescriptionController.create);

/*
 * PUT
 */
router.put('/:id', PrescriptionController.update);

/*
 * DELETE
 */
router.delete('/:id', PrescriptionController.remove);

module.exports = router;
