const mongoose = require('mongoose')
const slugify = require('../middlewares/slugify')

const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    slug: {type: String, unique: true, required: true},
    description: {type: String, unique: true, required: true}

})


CategorySchema.pre('save', function(next){
    if (!this.isModified('title')) return next()
    
    this.slug = slugify(this.title)
    next()
})

const Category = mongoose.model("Category", CategorySchema)

module.exports = Category;