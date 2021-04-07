const db = require('../database/models')

indexController = {
    home: function (req, res, next){
        res.render('home')
    },
    admin: function (req, res, next){
        res.render('administrator')
    }
};

module.exports = indexController