'use strict';
module.exports = function(app)
{
    var TrIn = require('../controllers/TrInController');

    app.route('/setRecord')
        .get(TrIn.createUser);
    
    app.route('/getRecord')
        .post(TrIn.getUser);
};