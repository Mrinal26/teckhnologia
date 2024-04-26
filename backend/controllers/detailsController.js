const Details = require('../db/models/details');

exports.createDetail = async (req, res) => {
  try {
    const { name } = req.body;
    const resumePath = req.file ? req.file.path : null;
    const newDetail = await Details.create({ name, resumePath });
    res.json({ message: 'Detail created successfully', detail: newDetail });
  } catch (err) {
    console.error('Error creating detail:', err);
    res.status(500).json({ error: 'Error creating detail' });
  }
};

exports.getDetails = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    const details = await Details.findAndCountAll({
      limit,
      offset,
    });
    res.json(details);
  } catch (err) {
    console.error('Error fetching details:', err);
    res.status(500).json({ error: 'Error fetching details' });
  }
};

exports.deleteDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const detail = await Details.findByPk(id);
    if (!detail) {
      return res.status(404).json({ error: 'Detail not found' });
    }
    await detail.destroy();
    res.json({ message: 'Detail deleted successfully' });
  } catch (err) {
    console.error('Error deleting detail:', err);
    res.status(500).json({ error: 'Error deleting detail' });
  }
};
