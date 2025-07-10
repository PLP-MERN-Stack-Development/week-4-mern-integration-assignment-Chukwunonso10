const Category = require('../models/CategoryModels')

const createCategory = async (req, res) =>{
    const { name, slug, description } = req.body
    try {
        const category = await Category.create({ name,slug, description })
        if (!category) return res.status(401).json({message: "category could not be created "})
        res.status(201).json(category)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getAllCategory = async (req, res) =>{
    try {
        const category = await Category.find()
        if (!category.length) return res.status(404).json({message: "category not found "})
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error.message)
    }

}

// GET CATEGORY BY SLUG

const getMyCategory = async (req, res) =>{
    try {
            const category = await Category.findOne({ slug: req.params.slug})
            if (!category) return res.status(404).json({message: "category not found"})
            res.status(200).json(category)
    
    } catch (error) {
        res.status(500).json(error.message)
    }
} 

//DELETE CATEGORY

const deleteCategory = async (req, res) =>{
    try {
        const category = await Category.findOneAndDelete({slug: req.params.slug})
        if (!category) return res.status(404).json({message: "unable to delete"})
        res.status(200).json(category)
            
    } catch (error) {
        res.status(403).json({message: "unable to delete", error: error.message})
    }
}

//  UPDATE CATEGORY
const updateCategory = async (req, res) =>{
    const category = await Category.findOneAndUpdate({slug: req.params.slug}, {$set: req.body}, {new: true, runValidators:true})
    if (!category) return res.status(404).json({message: "unable to update"})
    res.status(200).json(category)
}


module.exports = {
    createCategory,
    getAllCategory,
    getMyCategory,
    deleteCategory,
    updateCategory
}