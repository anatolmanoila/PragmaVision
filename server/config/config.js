var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/pragmavision',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://anatolm:pragmavisiondb@ds045637.mongolab.com:45637/pragmavision',
    port: process.env.PORT || 80
  }
}