var express = require('express');
var router = express.Router();

// Remove after done testing
const testJSON = require('../testJSON');

router.get('/', function(req, res){

  res.render('index', {
    title: 'Home',
    jobs: testJSON.jobs,
    files: testJSON.files,
  });
});

module.exports = router;