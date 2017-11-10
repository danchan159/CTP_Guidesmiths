const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication')

const router = express.Router();


router.get('/whoami', (req, res) => {
  res.json(req.user);
})

router.get('/logout', (req, res) => {
  req.logout();
})

router.get('/guide', (req, res) => {
  res.json(models.Guide.findById(req.guide.id))
})

router.get('/comment', (req, res) => {
  res.json(models.Comments.findAll(
    {
      where: {
        GuideGuideID: req.guide.id
      }
    })
  )
})

router.post('/sign-up', (req,res) => {
  models.Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  })
})

router.post('/post', (req,res) => {
  models.Guide.create({
    UserId: req.user.id,
    Steps: [
      {content: req.body.Step1},
      {content: req.body.Step2},
      {content: req.body.Step3},
      {content: req.body.Step4},
      {content: req.body.Step5},
    ],
    Categories: [
      {name: req.body.CatName}
    ]
  }, {
    include: [ models.Steps, models.Categories]
  })
})

router.post('/comment', (req, res) => {
  models.Comments.create({
    UserId: req.user.id,
    GuideGuideID: req.guide.id,
    content: req.body.commentBox,
  })
})

router.post('/login', (req, res) => {
  passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/error',
    })(req, res);
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



module.exports = router;
