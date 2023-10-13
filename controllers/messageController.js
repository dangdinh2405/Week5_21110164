const mygroup = require('../models/mygroup');

exports.getMessageHaveID = (req, res) => {
  const id = req.params.id;
    // Xử lý khi có id
    const member = mygroup.find((item) => item.id === id);
    if (member) {
      res.send(`<html><body><ul><li>${member.name}</li></ul></body></html>`);
    } else {
      res.status(404).send('Not valid');
    }
};

exports.getMessageNoID = (req, res) => {

  // Xử lý khi không có id
  const memberNames = mygroup.map((item) => `<li>${item.name}</li>`).join('');
  res.send(`<html><body><ul>${memberNames}</ul></body></html>`);
  
};
