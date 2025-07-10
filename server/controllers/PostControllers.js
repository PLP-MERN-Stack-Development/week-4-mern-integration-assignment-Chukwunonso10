const Post = require('../models/postmodels')
const Category = require('../models/CategoryModels')
const User = require('../models/UserModels')

//CREATE POST

const createpost =  async (req, res) =>{
    const {category, title, content } = req.body
    try {
        const postCategory = await Category.findOne({ name: category })
        const authorId = req.user._id  //id of the logged user
        userName= req.user.userName

        const post = new Post(
        {title:title,
         content: content,
         author: authorId,
         category: postCategory._id
        }
    )
        await post.save()
        if (!post) return res.status(400).json("unable to create post")
        res.status(201).json(post)
        } catch (error) {
        res.status(500).json({message: "oops...something happened while creating post."})
    }
}

//GET ALL POST
const getAllPost = async (req, res) =>{
    try {
        const posts = await Post.find().populate("author category")
        if (!posts) return res.status(404).json({message: "No post "})
        res.status(200).json(posts)

    } catch (error) {
        res.status(404).json({message: "unable to locate posts"})
    }
}

//GET A SINGLE POST BY SLUG
const getmypost = async (req, res) =>{
    try {
            const post = await Post.findOne({ slug: req.params.slug}).populate("author category")
            if (!post) return res.status(404).json({message: "post not found"})
            res.status(200).json(post)
    } catch (error) {
        res.status(401).json({message: "Error in location msg", error: error.message})
    }

}

//  UPDATE POST
const updatepost = async (req, res) =>{
    const post = await Post.findOneAndUpdate({slug: req.params.slug}, {$set: req.body}, {new: true, runValidators:true})
    if (!post) return res.status(404).json({message: "unable to update"})
    res.status(200).json(post)
}

//DELETE POST

const deletepost = async (req, res) =>{
    try {
        const post = await Post.findOneAndDelete({slug: req.params.slug})
        if (!post) return res.status(404).json({message: "unable to delete"})
        res.status(200).json({ message: "Deleted Successfully"})
    } catch (error) {
        res.status(403).json({message: "unabel to delete", error: error.message})
    }
}

const addComment = async (req, res) =>{
    const { content } = req.body;
    const userId = req.user._id
    const { slug } = req.params;

    const post = await Post.findOne({ slug })
    try {
        if (!post) return res.status(404).json({message: "unable to locate post "})
        await post.addComment(userId, content);  //calling the instance method

    } catch (error) {
        res.status(500).json({ message: "Error sending comment", error:error.message})
    }
}

const viewCount = async (req, res) =>{
    const { slug } = req.params;
    try {
        const post = await Post.findOne({ slug })
        if (!post) return res.status(404).json({ message: "post not found!"})
        await incrementViewCount()
        res.status(200).json(post)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "oops...an error has occured"})
    }

}
module.exports = {
    createpost,
    getAllPost,
    getmypost,
    updatepost,
    deletepost,
    addComment,
    viewCount
}