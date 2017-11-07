window.$ = window.jQuery = require('jquery')
const bootstrap = require('bootstrap')
var Datastore = require('nedb')
var contactos =  new Datastore({filename: 'contactos.db', autoload: true})

$('#form_contacto').on('submit', function(e) {
    e.preventDefault()
    let data = $(this).serializeArray()
    contactos.insert({nombre: data[0].value, telefono: data[1].value}, function(err, docs) {
        console.log(docs)
    })
    window.location = "contactos.html"
})