const express = require('express');
const path = require('path');
const morgan = require('morgan');
const authorized = require('./middleware/authorize.js');
const checkAvalibilityOfProductsMiddleware = require('./middleware/check_avalibility_of_proudtcs.js');
const productsRouter = require('./router/products.js');
const authRouter = require('./router/auth.js');

const app = express();
const port = 8000;

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use(morgan('tiny'));

// Custom middleware for /api routes
app.use('/api/product', authorized, checkAvalibilityOfProductsMiddleware);

// Routers
app.use('/api/product', productsRouter);
app.use('/api/login', authRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'This page not found'
    });
});

app.listen(port, () => {
    console.log(`server is  listening to port ${port} `);
});
