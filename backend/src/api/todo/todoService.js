const  Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']);

// por padrão quando atualiza os dados o mongo tras o dados desatualizado 
// e não o dado novo, esse update corrigi isso e também ativa as validações
Todo.updateOptions({ new: true, runValidators: true});

module.exports = Todo