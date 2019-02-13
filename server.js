const express = require("express")
const mongoose = require("mongoose")

const { getSecret } = require("./secret")
app = express()
const port = process.env.PORT || 3000;

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

module.exports = { app };