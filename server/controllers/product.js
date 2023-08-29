const Product = require("../model/product.js");

const handlePost = async (req, res) => {
  try {
    const { userid, product, price, quantity, store, Availability } = req.body;

    const newProduct = new Product({
      userid: userid,
      product: product,
      price: price,
      quantity: quantity,
      store: store,
      Availability: Availability,
    });
    await newProduct.save();
    const products = await Product.find({ userid: { $in: userid } });

    res.status(201).json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleGet = async (req, res) => {
  try {
    const { userid } = req.body;
    const products = await Product.find({ userid: { $in: userid } });

    res.status(201).json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleDelete = async (req, res) => {
  try {
    const { id, userid } = req.body;
    await Product.findByIdAndRemove(id);
    const products = await Product.find({ userid: { $in: userid } });
    res.status(201).json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleEdit = async (req, res) => {
  try {
    const { id, userid, product, price, quantity, store, Availability } =
      req.body;
    await Product.findByIdAndUpdate(
      id,
      {
        product: product,
        price: price,
        quantity: quantity,
        store: store,
        Availability: Availability,
      },
      { new: true }
    );

    const products = await Product.find({ userid: { $in: userid } });

    res.status(201).json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handlePost, handleGet, handleDelete, handleEdit };
