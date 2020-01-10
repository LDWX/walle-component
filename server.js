let path = require('path')
let express = require('express')
let app = express()

app.use( express.static(__dirname + '/dist') )
app.listen(3000)