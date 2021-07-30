const Product = require('../models/product');

async function updateQuanity(request, response) {
    if(typeof request.body.quantity !== 'number') {
        request.body.quantity = Number(request.body.quantity);
    }
    const product = new Product(request.body);
    const result = await product.save()
    response.send(result);
}

module.exports = updateQuanity;
