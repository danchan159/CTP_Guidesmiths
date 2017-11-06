const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication')

const router = express.Router();


router.get('/whoami', (req, res) => {
  res.json(req.user);
})

router.get('/profile', 
  passport.redirectIfNotLoggedIn('/sign-up'), 
  (req, res) => {
    res.send('The secret profile page');
})

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
  //res.send('You signed up!');
})

router.get('/post', (req, res) => {
  res.render('post');
})

router.post('/sign-up', (req,res) =>{
  models.Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  }).then((user) => {
    req.login(user, () =>{
      res.redirect('/profile');
    })
  })
})

router.post('/post', (req,res) =>{
  models.Guide.create({
    UserId: req.user.id,
    Steps: [
      {content: req.body.Step1},
      {content: req.body.Step2},
      {content: req.body.Step3},
    ]
  }, {
    include: [ models.Steps ]
  }).then((user) => {
    res.redirect('/');
  })
})

router.get('/login', 
  passport.redirectIfLoggedIn('/profile'),
  (req, res) => {
  res.render('login');
})

router.post('/login', (req, res) => {
  passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/error',
    })(req, res);
})

router.get('/logout', (req, res) =>{
  req.logout();
  res.redirect('/login');
})


router.get('/', (req, res) => {
  res.json({
    msg: "Successful GET to '/' route"
  });
});

router.post('/', (req, res) => {
  res.json({
    msg: "Successful POST to '/' route"
  });
});

/*
router.put('/:id', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route",
    id: req.params.id
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});
*/


module.exports = router;
