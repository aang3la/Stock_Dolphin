const Categories = require("../../../pkg/categories/categoriesSchema");
const Items = require("../../../pkg/items/itemsSchema");

// Show all categories
exports.getAllCategories = async(req, res) => {
    try{
        const queryObj = {...req.query}
        let queryString = JSON.stringify(queryObj); 
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        const query = JSON.parse(queryString);

        const categories = await Categories.find(query).populate("items");

        res.status(200).json({
            status: "success",
            data: categories
        });
    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Show one category
exports.getOneCategory = async(req, res) => {
    try{
        const category = await Categories.findById(req.params.id);
        
        res.status(200).json({
            status: "success",
            data: category
        });
    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Create category
exports.createCategory = async(req, res) => {
    try{

        const newCategory = await Categories.create(req.body);

        res.status(200).json({
            status: "success",
            data: newCategory
        });

    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Make changes in a category
exports.updateCategory = async(req, res) => {
    try{
        const category = await Categories.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(201).json({
            status: "success",
            data: category
        });
    } catch(err){
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Delete category
exports.deleteCategory = async(req, res) => {
    try{
        await Categories.findByIdAndDelete(req.params.id);

        res.status(201).json({
            status: "success",
            data: null
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};