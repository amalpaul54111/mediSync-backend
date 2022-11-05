var express = require('express');
var router = express.Router();
var DoctorController = require('../controllers/DoctorController.js');

/*
 * GET
 */
router.get('/', DoctorController.list);

/*
 * GET
 */
router.get('/:id', DoctorController.show);

/*
 * POST
 */
router.post('/', DoctorController.create);

/*
 * PUT
 */
router.put('/:id', DoctorController.update);

/*
 * DELETE
 */
router.delete('/:id', DoctorController.remove);

module.exports = router;
