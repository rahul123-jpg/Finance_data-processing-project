const Record = require("../models/Record");

// CREATE
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;

    if (!amount || !type) {
      return res.status(400).json({ message: "Amount & type required" });
    }

    const record = await Record.create({
      amount,
      type,
      category,
      date,
      note,
      userId: req.user.id
    });

    res.status(201).json(record);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET (with filters)
exports.getRecords = async (req, res) => {
  try {
    const filter = {};

    if (req.query.type) filter.type = req.query.type;
    if (req.query.category) filter.category = req.query.category;

    const records = await Record.find(filter).sort({ createdAt: -1 });

    res.json(records);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Record.findByIdAndUpdate(id, req.body, {
      new: true
    });

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;

    await Record.findByIdAndDelete(id);

    res.json({ message: "Record deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};