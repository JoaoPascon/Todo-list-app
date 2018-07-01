const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // trocar a api de promisses do mongoose pela a do node
module.exports = mongoose.connect('mongodb://localhost/todo');