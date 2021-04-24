const genericCurd = require('./generic.controller');
const { Auth } = require('../model');

module.exports = {...genericCurd(Auth)};
