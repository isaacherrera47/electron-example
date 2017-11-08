var connection = require('../../config/db')
window.$ = window.jQuery = require('jquery')
const bootstrap = require('bootstrap')


let resultados = $('#results')

connection.db.find({}, function(err, docs) {
    for(let i = 0; i <= docs.length; i++) {
        resultados.append("<li>" + docs[i].nombre + " - " + docs[i].telefono + "</li>")
    }
})

