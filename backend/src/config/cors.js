module.exports = function(req, res, next){

    res.header('Access-Control-Allow-Origin', '*') // '*' permite a chamada da api de qualquer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next() // para continuar o fluxo da aplicação
}