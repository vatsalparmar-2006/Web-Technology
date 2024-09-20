const express = require('express');
const app = express();

require('dotenv').config();

const customersRoutes = require('./Router.CoffeeShop');

app.use('/', customersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running @ "+PORT);
});