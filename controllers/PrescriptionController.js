var PrescriptionModel = require('../models/PrescriptionModel.js');

/**
 * PrescriptionController.js
 *
 * @description :: Server-side logic for managing Prescriptions.
 */
module.exports = {

    /**
     * PrescriptionController.list()
     */
    list: function (req, res) {
        PrescriptionModel.find(function (err, Prescriptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Prescription.',
                    error: err
                });
            }

            return res.json(Prescriptions);
        });
    },

    /**
     * PrescriptionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PrescriptionModel.findOne({_id: id}, function (err, Prescription) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Prescription.',
                    error: err
                });
            }

            if (!Prescription) {
                return res.status(404).json({
                    message: 'No such Prescription'
                });
            }

            return res.json(Prescription);
        });
    },

    /**
     * PrescriptionController.create()
     */
    create: function (req, res) {
        var Prescription = new PrescriptionModel({
			medicines : req.body.medicines
        });

        Prescription.save(function (err, Prescription) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Prescription',
                    error: err
                });
            }

            return res.status(201).json(Prescription);
        });
    },

    /**
     * PrescriptionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PrescriptionModel.findOne({_id: id}, function (err, Prescription) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Prescription',
                    error: err
                });
            }

            if (!Prescription) {
                return res.status(404).json({
                    message: 'No such Prescription'
                });
            }

            Prescription.medicines = req.body.medicines ? req.body.medicines : Prescription.medicines;
			
            Prescription.save(function (err, Prescription) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Prescription.',
                        error: err
                    });
                }

                return res.json(Prescription);
            });
        });
    },

    /**
     * PrescriptionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PrescriptionModel.findByIdAndRemove(id, function (err, Prescription) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Prescription.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
