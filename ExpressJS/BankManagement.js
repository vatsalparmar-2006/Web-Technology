const express = require('express');
const app = express();

require('dotenv').config();

const clientRoutes = require('./Router.BankManagement');

app.use('/', clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running @ "+PORT);
});