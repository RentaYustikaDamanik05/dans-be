const { response } = require('express');

const url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
const urlDetail = 'http://dev3.dansmultipro.co.id/api/recruitment/positions';

exports.allJob = async (req, res) => {
  try {
    const response = await fetch(url);
    const body = await response.json();
    res.status(200).send({
      data: body,
      message: 'All jobs is fetch succesfully',
      succes: true,
    });
  } catch (error) {
    res.status(500).send({
      data: {},
      message: 'All jobs is fetch unsuccesfully',
      succes: false,
    });
  }
};

exports.detailJob = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`${urlDetail}/${id}`);
    const body = await response.json();
    res.status(200).send({
      data: body,
      message: `Job with id ${id} is fetch succesfully`,
      succes: true,
    });
  } catch (error) {
    res.status(500).send({
      data: {},
      message: `Job with id ${id} is fetch unsuccesfully`,
      succes: false,
    });
  }
};
