window.$ = window.jQuery = require('jquery')
const bootstrap = require('bootstrap')

var Datastore = require('nedb')
var contactos =  new Datastore({filename: 'contactos.db', autoload: true})
let resultados = $('#results')

contactos.find({}, function(err, docs) {
    for(let i = 0; i <= docs.length; i++) {
        resultados.append("<p>" + docs[i].nombre + " - " + docs[i].telefono + "</p>")
    }
})

