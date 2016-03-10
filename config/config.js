var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'api_codenamu_org'
    },
    port: 3000,
    version: 'v1.0',
    db: 'mysql://root@localhost/api_codenamu_org_development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'api-codenamu-org'
    },
    port: 3000,
    db: 'mysql://localhost/api_codenamu_org_test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'api-codenamu-org'
    },
    port: 3000,
    db: 'mysql://localhost/api_codenamu_org_production'
  }
};

module.exports = config[env];
