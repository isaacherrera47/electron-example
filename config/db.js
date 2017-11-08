var Datastore = require('nedb')
var contactos =  new Datastore({
    filename: 'contactos.db', 
    autoload: true,
    afterSerialization: function(doc) {},
    beforeDeserialization: function(doc) {},
})


exports.db = contactos