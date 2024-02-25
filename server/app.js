const express = require('express');
const cors = require('cors');
const knex = require('./knex/knex.js');
const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (request, response) => {
    response.json("HELLO")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});