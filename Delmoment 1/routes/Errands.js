const express = require('express')
const errands = express.Router()
const cors = require('cors');


const Errand = require('../models/Errand');
errands.use(cors())

errands.get('/errands', (req, res) => {
  Errand.find()
  .then(errands => res.json(errands))
  .catch(err => res.status(400).json('Error: ' + err));
});

errands.post('/add', (req, res) => {
  const userErrands = {
    user_title: req.body.user_title,
    user_description: req.body.user_description,
    user_address: req.body.user_address,
    user_mobile: Number(req.body.user_mobile),
    user_firstname: req.body.user_firstname,
    user_lastname: req.body.user_lastname,
    user_email: req.body.user_email
  }

  Errand.findOne({
    user_title: req.body.user_title
  })
    .then(errand => {
      if (!errand) {
          Errand.create(userErrands)
            .then(errand => {
              res.json({ status: errand.user_email + 'Added!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
      } else {
        res.json({ error: 'Errand already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
  })
  
errands.get('/:id', (req, res) => {
  Errand.findById(req.params.id)
  .then(errand => res.json(errand))
  .catch(err =>  res.status(400).json('Error: ' + err))
})

errands.delete('/:id', (req, res) => {
  Errand.findByIdAndDelete(req.params.id)
  .then(() => res.json('Errand deleted.'))
  .catch(err =>  res.status(400).json('Error: ' + err))
})

errands.post('/update/:id', (req, res) => {
  Errand.findById(req.params.id)
  .then(errand => {
    user_title = req.body.user_title;
    user_description = req.body.user_description;
    user_adress = (req.body.user_adress);
    user_mobile = Number(req.body.user_mobile);
    user_firstname = (req.body.user_firstname);
    user_lastname = (req.body.user_lastname);
    user_email = (req.body.user_email);

    errand.save()
    .then(() => res.json('Errand updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err =>  res.status(400).json('Error: ' + err));
});

module.exports = errands