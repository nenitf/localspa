const fs = require('fs-extra');

fs.move('./build/', '../static/', { overwrite: true }, err => {
  if(err) return console.error(err);
  console.log('success!');
});
