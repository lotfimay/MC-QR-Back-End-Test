const express = require('express');
require('dotenv').config();
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.DATA_BASE_URL, { useNewUrlParser: true })



const db = mongoose.connection
db.on('error', (error) => console.log('ERRORR'))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json());

const superHerosRouter = require('./routes/superHeroRoutes');
const savedPersonsRouter = require('./routes/savedPersonRoutes');


app.use('/superheroes', superHerosRouter);
app.use('/savedpersons', savedPersonsRouter);




app.listen(3000,() =>{
console.log('listening on port 3000 ....');
});

