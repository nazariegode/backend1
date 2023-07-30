
const sushiController = require('../sushi/controller')

const router = (app) => {
    app.use ('/api/carts')
    app.use ('/api/products')
    app.use ('/sushi', sushiController)
}

module.exports = router