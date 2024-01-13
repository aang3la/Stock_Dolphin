const Orders = require("../../../pkg/orders/ordersSchema");

// Show all orders
exports.getAllOrders = async(req, res) => {
    try{
        const orders = await Orders.find(query).populate("itemId");

        res.status(200).json({
            status: "success",
            data: orders
        });
    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Show one order
exports.getOneOrder = async(req, res) => {
    try{
        const order = await Orders.findById(req.params.id);
        
        res.status(200).json({
            status: "success",
            data: order
        });
    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Create order
exports.createOrder = async(req, res) => {
    try{
        const { name, itemId } = req.body;

        const newOrder = await Orders.create({ name, itemId });

        res.status(200).json({
            status: "success",
            data: newOrder
        });

    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Make changes in a order
exports.updateOrder = async(req, res) => {
    try{
        const order = await Orders.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(201).json({
            status: "success",
            data: order
        });
    } catch(err){
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// Delete order
exports.deleteOrder = async(req, res) => {
    try{
        await Orders.findByIdAndDelete(req.params.id);

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