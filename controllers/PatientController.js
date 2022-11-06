var PatientModel = require('../models/PatientModel.js');

/**
 * PatientController.js
 *
 * @description :: Server-side logic for managing Patients.
 */
module.exports = {

    /**
     * PatientController.list()
     */
    list: function (req, res) {
        PatientModel.find(function (err, Patients) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Patient.',
                    error: err
                });
            }

            return res.json(Patients);
        });
    },

    /**
     * PatientController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PatientModel.findOne({_id: id}, function (err, Patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Patient.',
                    error: err
                });
            }

            if (!Patient) {
                return res.status(404).json({
                    message: 'No such Patient'
                });
            }

            return res.json(Patient);
        });
    },

    /**
     * PatientController.create()
     */
    create: function (req, res) {
        var Patient = new PatientModel({
			name : req.body.name,
			phone : req.body.phone,
			aadhaar : req.body.aadhaar,
            age : req.body.age,
            weight : req.body.weight,
            height : req.body.weight,
            sex : req.body.sex,
        });

        Patient.save(function (err, Patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Patient',
                    error: err
                });
            }

            return res.status(201).json(Patient);
        });
    },

    /**
     * PatientController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PatientModel.findOne({_id: id}, function (err, Patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Patient',
                    error: err
                });
            }

            if (!Patient) {
                return res.status(404).json({
                    message: 'No such Patient'
                });
            }

            Patient.name = req.body.name ? req.body.name : Patient.name;
			Patient.phone = req.body.phone ? req.body.phone : Patient.phone;
			Patient.aadhaar = req.body.aadhaar ? req.body.aadhaar : Patient.aadhaar;
            Patient.age = req.body.age ? req.body.age : Patient.age;
            Patient.weight = req.body.weight ? req.body.weight : Patient.weight;
            Patient.height = req.body.height ? req.body.height : Patient.height;
            Patient.sex = req.body.sex ? req.body.sex : Patient.sex;
			
            Patient.save(function (err, Patient) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Patient.',
                        error: err
                    });
                }

                return res.json(Patient);
            });
        });
    },

    /**
     * PatientController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PatientModel.findByIdAndRemove(id, function (err, Patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Patient.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
