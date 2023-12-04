const Suppliers = require("../../../pkg/suppliers/suppliersSchema");

// Show all suppliers
exports.getAllSuppliers = async(req, res) => {
    try{
        const suppliers = await Suppliers.find();

        res.status(200).json({
            status: "success",
            data: suppliers
        });
    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Show one supplier
exports.getOneSupplier = async(req, res) => {
    try{
        const supplier = await Suppliers.findById(req.params.id);
        
        res.status(200).json({
            status: "success",
            data: supplier
        });
    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Create supplier
exports.createSupplier = async(req, res) => {
    try{
        const newSupplier = await Suppliers.create(req.body);

        res.status(200).json({
            status: "success",
            data: newSupplier
        });

    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Make changes in a supplier
exports.updateSupplier = async(req, res) => {
    try{
        const supplier = await Suppliers.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(201).json({
            status: "success",
            data: supplier
        });
    } catch(err){
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Delete supplier
exports.deleteSupplier = async(req, res) => {
    try{
        await Suppliers.findByIdAndDelete(req.params.id);

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