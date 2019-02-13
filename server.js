const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users')
const { getSecret } = require("./secret")
const User = require('./models/user')

app = express()
const router = express.Router()
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use('/api/users',userRoutes)
mongoose.Promise = global.Promise
mongoose
    .connect(
        getSecret('dbUri'),
        {
            useNewUrlParser: true
        }).then(
            () => {
                console.log('Connected to mongoDB');
            },
            (err) => console.log('Error connecting to mongoDB', err)
        );
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = { app, router };