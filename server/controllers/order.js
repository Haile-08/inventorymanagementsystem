const order = require("../model/order");

const handlePost = async (req, res) => {
  try {
    const {
      userid,
      productid,
      customerid,
      customerName,
      ProductName,
      ProductQuantity,
    } = req.body;

    const newOrder = new order({
      userid: userid,
      productid: productid,
      customerid: customerid,
      customerName: customerName,
      ProductName: ProductName,
      ProductQuantity: ProductQuantity,
    });
    await newOrder.save();
    const orders = await order.find({ userid: { $in: userid } });

    res.status(201).json({ orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleGet = async (req, res) => {
  try {
    const { userid } = req.body;
    const orders = await order.find({ userid: { $in: userid } });

    res.status(201).json({ orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleDelete = async (req, res) => {
  try {
    const { id, userid } = req.body;
    await order.findByIdAndRemove(id);
    const orders = await order.find({ userid: { $in: userid } });
    res.status(201).json({ orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleEdit = async (req, res) => {
  try {
    const { id, customerName, ProductName, ProductQuantity } = req.body;
    await order.findByIdAndUpdate(
      id,
      {
        customerName: customerName,
        ProductName: ProductName,
        ProductQuantity: ProductQuantity,
      },
      { new: true }
    );
    const orders = await order.find({ userid: { $in: userid } });
    res.status(201).json({ orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { handlePost, handleGet, handleDelete, handleEdit };
