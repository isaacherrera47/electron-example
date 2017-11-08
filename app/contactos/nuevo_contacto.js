var connection = require('../../config/db')
window.$ = window.jQuery = require('jquery')
const bootstrap = require('bootstrap')


$('#form_contacto').on('submit', function(e) {
    e.preventDefault()
    let data = $(this).serializeArray()
    connection.db.insert({nombre: data[0].value, telefono: data[1].value}, function(err, docs) {
        console.log(docs)
    })
    window.location = "contactos.html"
})