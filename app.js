const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const WrittenRout = require('./routes/WrittenRoute')
const UserRout = require('./routes/UserRoute')
const { url } = require('./config/DataBase');

const app = express();

app.use(express.urlencoded({ extended:true}))//body-parser
app.use(express.json())//con esto convierto en json 
app.use(express.static('public'));
app.use(cors())

app.use(WrittenRout)
app.use(UserRout)
app.get('/', (req, res) =>  res.send('Welcome to ESCRITOS.MV--API'))

// Connection to DDBB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000,    
})
.then((res) => {

    const server = app.listen(process.env.PORT || 8000, () => {console.log(`conectado a http://localhost:${server.address().port}`)})

    console.log(`Conexión con la BBDD ${process.env.DB_NAME}`);

})
.catch((err) => {

    console.log("Error al conectar a la base de datos:", err);

});