function getProducts(req, res){
    try {
        res.send('Ola produtos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getProductsByID(req, res){
    try {
        const id = req.params.id;
        const product = getByID(id);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getProducts,
    getProductsByID
}