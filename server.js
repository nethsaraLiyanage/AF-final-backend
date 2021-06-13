const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

//created apis
const prouctAPI = require("./src/apis/product.api"); 
const categoryAPI = require("./src/apis/category.api"); 


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Connected Successfully!!!');
});

app.route('/').get((req, res) => {
    res.send('SLIIT AF FINAL PAPER BACKEND WORKING SUCCESSFULLY!');
});

//api connectiong
app.use('/product', prouctAPI());
app.use('/category', categoryAPI());


app.listen(8080, () => {
    console.log(`Server is up and running on port: 8080`);
});