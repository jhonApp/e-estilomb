const express = require("express");
const routerProducts = require("./models/products");
const app = express();
const port = 8000;

app.use('/products', routerProducts);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})