const { response } = require('express');

const url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
const urlDetail = 'http://dev3.dansmultipro.co.id/api/recruitment/positions';

const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

exports.allJob = async (req, res) => {
  const serializeQuery = serialize(req.query);
  try {
    const response = await fetch(`${url}?${serializeQuery}`);
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
