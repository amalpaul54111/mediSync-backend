var SessionModel = require('../models/SessionModel.js');

/**
 * SessionController.js
 *
 * @description :: Server-side logic for managing Sessions.
 */
module.exports = {

    /**
     * SessionController.list()
     */
    list: function (req, res) {
        SessionModel.find(function (err, Sessions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Session.',
                    error: err
                });
            }

            return res.json(Sessions);
        });
    },

    /**
     * SessionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        SessionModel.findOne({_id: id}, function (err, Session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Session.',
                    error: err
                });
            }

            if (!Session) {
                return res.status(404).json({
                    message: 'No such Session'
                });
            }

            return res.json(Session);
        });
    },

    /**
     * SessionController.create()
     */
    create: function (req, res) {
        var Session = new SessionModel({
			reason : req.body.reason,
			symptoms : req.body.symptoms,
			identified_issue : req.body.identified_issue
        });

        Session.save(function (err, Session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Session',
                    error: err
                });
            }

            return res.status(201).json(Session);
        });
    },

    /**
     * SessionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        SessionModel.findOne({_id: id}, function (err, Session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Session',
                    error: err
                });
            }

            if (!Session) {
                return res.status(404).json({
                    message: 'No such Session'
                });
            }

            Session.reason = req.body.reason ? req.body.reason : Session.reason;
			Session.symptoms = req.body.symptoms ? req.body.symptoms : Session.symptoms;
			Session.identified_issue = req.body.identified_issue ? req.body.identified_issue : Session.identified_issue;
			
            Session.save(function (err, Session) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Session.',
                        error: err
                    });
                }

                return res.json(Session);
            });
        });
    },

    /**
     * SessionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        SessionModel.findByIdAndRemove(id, function (err, Session) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Session.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
