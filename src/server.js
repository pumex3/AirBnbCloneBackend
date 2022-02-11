const express = require ('express')
const routes = require ('./routes')
const mongose = require('mongoose')
const port = 3333


const app = express()

mongose.connect('mongodb+srv://pumex3:pumex3@aleixossoftware-9epej.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})



//Middlewares
app.use(express.json());
app.use(routes)


app.listen(port, _=> {
    console.log('ONLINE ON PORT :', + port)
}) 
