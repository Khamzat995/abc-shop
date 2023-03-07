const Brand = require('../models/brandModel')
const Products = require('../models/productModel')

const brandCtrl = {
    getBrands: async (req, res) => {
        try {
            const brands = await Brand.find()
            res.json(brands)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createBrand: async (req, res) => {
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const { name } = req.body;
            const brand = await Brand.findOne({ name })
            if (brand) return res.status(400).json({ msg: "Этот бренд уже существует." })

            const newBrand = new Brand({ name })

            await newBrand.save()
            res.json({ msg: "Создал бренд, поздравляю" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteBrand: async (req, res) => {
        try {
            const products = await Products.findOne({ brand: req.params.id })
            if (products) return res.status(400).json({
                msg: "Пожалуйста, удалите все продукты с отношениями."
            })

            await Brand.findByIdAndDelete(req.params.id)
            res.json({ msg: "Бренд удален" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateBrand: async (req, res) => {
        try {
            const { name } = req.body;
            await Brand.findOneAndUpdate({ _id: req.params.id }, { name })

            res.json({ msg: "Обновил бренд" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = brandCtrl