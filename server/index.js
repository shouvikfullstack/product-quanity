const express = require('express');
const cors = require('cors');
const updateQuanity = require('./controllers/updateQuantity');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, () => {
    console.log('connected to mongo');
})

app.get('/', function(req, res) {
    res.send(200);
})

app.post('/update-quantity', updateQuanity);

app.listen(3002, () => {
    console.log('Server running...');
});
