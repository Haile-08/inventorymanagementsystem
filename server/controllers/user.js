const customer = require("../model/Customer");

const handlePost = async (req, res) => {
  try {
    const { userid, customerName, Address, Phone } = req.body;

    const newCustomer = new customer({
      userid: userid,
      customerName: customerName,
      Address: Address,
      Phone: Phone,
    });
    await newCustomer.save();
    const customers = await customer.find({ userid: { $in: userid } });

    res.status(201).json({ customers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleGet = async (req, res) => {
  try {
    const { userid } = req.body;
    const customers = await customer.find({ userid: { $in: userid } });

    res.status(201).json({ customers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleDelete = async (req, res) => {
  try {
    const { id, userid } = req.body;
    await customer.findByIdAndRemove(id);
    const customers = await customer.find({ userid: { $in: userid } });
    res.status(201).json({ customers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleEdit = async (req, res) => {
  try {
    const { id, userid, customerName, Address, Phone } = req.body;
    await customer.findByIdAndUpdate(
      id,
      {
        customerName: customerName,
        Address: Address,
        Phone: Phone,
      },
      { new: true }
    );
    const customers = await customer.find({ userid: { $in: userid } });
    res.status(201).json({ customers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handlePost, handleGet, handleDelete, handleEdit };
