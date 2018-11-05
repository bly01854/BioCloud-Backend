var express = require('express');
var router = express.Router();

var passport = require('passport');

router.post('/',
   function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.status(400).json({
            'status':false,
            'message':'No user by that username'
          }); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.status(200).json({
              'status':true,
              'message':"Welcome " + user.username +" !"
          });
        });
      })(req, res, next);
  });

  router.get('/',
   function(req, res, next) {
     res.render('login');
   })

  module.exports = router;