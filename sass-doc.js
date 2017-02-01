var sassdoc = require('sassdoc');

sassdoc('./sass-doc.scss', { verbose: true })
  .then(function () {
    console.log('Your documentation has been generated!');
  }, function (err) {
    console.error(err);
  });