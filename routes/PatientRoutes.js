var express = require('express');
var router = express.Router();
var PatientController = require('../controllers/PatientController.js');

/*
 * GET
 */
router.get('/', PatientController.list);

/*
 * GET
 */
router.get('/:id', PatientController.show);

/*
 * POST
 */
router.post('/', PatientController.create);

/*
 * PUT
 */
router.put('/:id', PatientController.update);

/*
 * DELETE
 */
router.delete('/:id', PatientController.remove);

module.exports = router;
