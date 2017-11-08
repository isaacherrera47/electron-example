let Datastore = require('nedb')
let crypto = require('crypto');

let algorithm = 'aes256';
let key = 'password';


let contactos = new Datastore({
    filename: 'contactos.db',
    autoload: true,
    afterSerialization: function (doc) {
        if (isJson(doc)) {
            let cipher = crypto.createCipher(algorithm, key);
            encrypted = cipher.update(JSON.stringify(doc), 'utf8', 'hex') + cipher.final('hex');
            return encrypted;
        }
        return doc;
    },
    beforeDeserialization: function (doc) {
        let decipher = crypto.createDecipher(algorithm, key);

        try {
            let decrypted = decipher.update(doc, 'hex', 'utf8') + decipher.final('utf8');
            return JSON.parse(decrypted);
        } catch (e) {
            return doc
        }
    }
})

function isJson(item) {
    item = typeof item !== "string" ?
        JSON.stringify(item) :
        item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}

exports.db = contactos