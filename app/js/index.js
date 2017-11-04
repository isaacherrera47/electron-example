window.$ = window.jQuery = require('jquery')
const bootstrap = require('bootstrap')

let resultados = $('#results')

var jxqfr = $.get('http://coremtest.tfscorp.com.mx/api/criticidades', function(response) {
    console.log(response)
})