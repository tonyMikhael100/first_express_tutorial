const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
} = require('../controller/products.js');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/add', addProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;
