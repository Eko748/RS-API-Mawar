const LowonganKerja = require('../models/LowonganKerja');

exports.getAllLowonganKerja = async (req, res) => {
  try {
    const lowonganKerja = await LowonganKerja.findAll();
    res.status(200).json({
      status: 'success',
      data: lowonganKerja
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.getLowonganKerjaById = async (req, res) => {
  const { id } = req.params;
  try {
    const lowonganKerja = await LowonganKerja.findByPk(id);
    if (!lowonganKerja) {
      return res.status(404).json({
        status: 'error',
        message: 'Lowongan kerja not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: lowonganKerja
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};
