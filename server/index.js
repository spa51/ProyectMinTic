const express= require('express');
const cors=require('cors');
const router = require('./routes/routes');
const app= express();
require("dotenv").config();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/',router);

app.listen(process.env.PORT,console.log(`listening on port ${process.env.PORT}`));
