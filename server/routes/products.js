const {Router} = require("express");
const { getProducts, getProductsByID } = require("../controllers/productsController");
const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductsByID);


router.post('/', (req, res) => {
    res.send('Você fez uma requisição.');
})

module.exports = router;