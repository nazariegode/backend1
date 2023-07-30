const { Router } = require('express')
const uploader = require('../utils/multer')

const router = Router()

router.get('/', (req, res) => {
    res.json({message: 'products'})
})

router.get('/:id', (req, res) => {
    res.json({message: `product ${req.params.id}`})
})

router.post('/', uploader.single('file'), (req, res) => {
    console.log(req.body)
    product.profile = req.file.path
    res.json({message: `${product}`})
})

router.put('/:id', (req, res) => {
    console.log(req.body)
    res.json({message: `update product`})
})

router.delete('/:id', (req, res) => {
    res.json({message: `delete product ${req.params.id}`})
})

module.exports = router