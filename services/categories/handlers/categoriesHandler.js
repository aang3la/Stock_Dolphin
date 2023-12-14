const Category = require("../../../pkg/categories/categoriesSchema");

// Show all categories
exports.getAllCategories = async(req, res) => {
    try{
        const queryObj = {...req.query}
        let queryString = JSON.stringify(queryObj); 
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        const query = JSON.parse(queryString);

        const categories = await Category.find(query);

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
        const category = await Category.findById(req.params.id);
        
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
        const newCategory = await Category.create(req.body);

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
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
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
        await Category.findByIdAndDelete(req.params.id);

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