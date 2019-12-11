var express = require('express');
var router = express.Router();

router.post('/users/enter', function (req, res) {
    let db = req.db;
    let collection = db.get('usercollection');
    let user = collection.findOne({"username" : req.body.username}).size();
    if (user) {
        res.redirect('/')
    } else {
        collection.insert({'username' : req.body.username});
        user = collection.findOne({"username" : req.body.username});
        res.redirect('/');
    }

});

module.exports = router;
