var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://172.17.5.175:27017/TodoApp');

module.exports = {mongoose};
