const axios = require('axios');
const axois = require('axios');


async function fetchProducts() {

    const res = await axios.get(
        "http://localhost:8000/api/products"
    );
    console.log(res.data);

}

fetchProducts();