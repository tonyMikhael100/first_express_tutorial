const products = require('../data.js');

const checkAvalibilityOfProductsMiddleware = (req, res, next) => {

    if (products.length <= 0) {
        return res.status(200).json({
            products: [],
        });
    }
    //this mean execute the annoumus function in the app.get or post or whtatever after you finish above code 
    next();
};

module.exports = checkAvalibilityOfProductsMiddleware;