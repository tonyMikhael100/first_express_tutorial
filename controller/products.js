const products = require('../data.js');

const getAllProducts = (req, res) => {
    const { name, minPrice, maxPrice } = req.query;
    let result = [...products];

    if (name) {
        result = result.filter((p) =>
            p.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (minPrice) {
        result = result.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
        result = result.filter((p) => p.price <= Number(maxPrice));
    }

    if (result.length === 0) {
        return res.status(404).json({ error: 'No products found' });
    }

    return res.status(200).json(result);
};

const getProductById = (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ error: 'This product not found' });
    }

    res.status(200).json(product);
};

const addProduct = (req, res) => {
    const { name, price, description, image } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: 'error missing data',
            data: [],
        });
    }

    const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name,
        price,
        description,
        image,
    };

    products.push(newProduct);
    return res.status(201).json({
        message: 'success',
        data: newProduct,
    });
};

const deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'the id is empty' });
    }

    products.splice(index, 1);
    return res.status(200).json({
        message: `Success Deletion product of id ${id}`,
    });
};

module.exports = { getAllProducts, getProductById, addProduct, deleteProduct };
