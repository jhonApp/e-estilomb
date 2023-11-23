const express = require("express");
const routerProducts = require("./models/products");
const routerUsers = require("./models/users");
const app = express();
const port = 8000;

app.use('/products', routerProducts);
app.use('/users', routerUsers);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})