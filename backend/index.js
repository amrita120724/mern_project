const express = require("express");

const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

const users = [{
    id: 1,
    name: "Rahul"
},
{
    id: 2,
    name: "Amrita"
},
{
    id: 3,
    name: "Sid"
},
{
    id: 4,
    name: "Arjun"
},


]

app.get('/api/users', (req, res) => {
    res.status(200).send({users: users})
})

app.listen(PORT, () => {
  console.log('App running');
})