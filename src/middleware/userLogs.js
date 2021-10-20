const fs = require('fs')
const path = require('path')

const userLogs = (req,res,next) => {
    //console.log(req.url)
    fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'), 'El usuario ingresó a la ruta:' + req.url, 'utf-8')//que quiero guardar? 'el usuario....' concateno req.url + '/n', SALTO EN LINEA
    next()
}


module.exports = userLogs