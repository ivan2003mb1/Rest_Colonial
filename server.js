/*const { response } = require('express')*/
const { response } = require('express')
const express = require('express')
/* { dirname } = require('path')*/

const app =  express()

const path = require('path')

app.listen(3000, () => {
    console.log('Puerto 3000')
}) 

app.use(express.static('assets'))

//rutas
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'assets/login.html'))
})

/*app.get('/c', (req, res)=>{
    response.send({
        Nombre: 'Colonial'
    })
})*/

/*app.listen(port, () => {
    console.log('La app esta en linea')
})*/