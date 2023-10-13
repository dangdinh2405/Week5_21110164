const mygroup = require('../models/mygroup');

exports.getAllData = (req, res) => {
  res.json(mygroup);
};

exports.addMember = (req, res) => {
  const newItem = req.body;
  if (mygroup.some((item) => item.id === newItem.id)) {
    res.status(400).json({ error: 'Not valid' });
  } else {
    mygroup.push(newItem);
    res.json(newItem);
  }
};

exports.getMemberById = (req, res) => {
  const id = req.params.id;
  const member = mygroup.find((item) => item.id === id);
  if (member) {
    res.json(member);
  } else {
    res.status(404).json({ error: 'Not valid' });
  }
};
