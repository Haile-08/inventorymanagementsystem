const store = require("../model/store");

const handlePost = async (req, res) => {
  try {
    const { userid, storeName, status } = req.body;

    const newstore = new store({
      userid: userid,
      storeName: storeName,
      status: status,
    });
    await newstore.save();
    const stores = await store.find({ userid: { $in: userid } });

    res.status(201).json({ stores });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleGet = async (req, res) => {
  try {
    const { userid } = req.body;
    const stores = await store.find({ userid: { $in: userid } });

    res.status(201).json({ stores });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const handleDelete = async (req, res) => {
  try {
    const { id, userid } = req.body;
    await store.findByIdAndRemove(id);
    const stores = await store.find({ userid: { $in: userid } });
    res.status(201).json({ stores });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const handleEdit = async (req, res) => {
  try {
    const { id, userid, storeName, status } = req.body;
    await store.findByIdAndUpdate(
      id,
      {
        storeName: storeName,
        status: status,
      },
      { new: true }
    );
    const stores = await store.find({ userid: { $in: userid } });
    res.status(201).json({ stores });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handlePost, handleGet, handleDelete, handleEdit };
