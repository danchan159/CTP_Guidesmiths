const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');
const fs = require('fs');
const multer  = require('multer');
const router = express.Router();

let path = '../backend-starter-code/gifs/';
let upload = multer({dest: path})

router.get('/whoami', (req, res) => {
  res.json(req.user);
})

router.get('/logout', (req, res) => {
  req.logout();
})

router.get('/guide/', (req, res) => {
  models.Steps.findAll({
    where: {
      GuideGuideID: req.query.id
    }
  })
  .then(guide => {
    res.json(guide);
  })
})

router.get('/comment', (req, res) => {
  models.Comments.findAll({
    where: {
      GuideGuideID: req.guide.id
    }
  })
  .then(comments => {
    res.json(comments);
  })
})

router.post('/sign-up', (req,res) => {
  models.Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  })
})

router.post('/guide-form/gif', upload.single('photo'), (req, res) => {
  let new_directory = path+'newFolder/';
  if (!fs.existsSync(new_directory)){
    fs.mkdirSync(new_directory);
  }

  fs.rename(path + req.file.filename, new_directory + req.file.filename, err => {
    if(err) throw err;
    console.log('Move complete!');
  })
  res.json(req.file);
})

router.post('/guide-form/gifs', upload.array('gifs', 5), (req, res) => {
  let new_directory = path+'newFolders/';
  if (!fs.existsSync(new_directory)){
    fs.mkdirSync(new_directory);
  }

  for (let gif of req.files){
    fs.rename(path + gif.filename, new_directory + gif.filename, err => {
      if(err) throw err;
      console.log('Move complete!');
    })
  }

  res.json(req.files);
})

router.post('/guide-form/post', upload.array('gifs', 5), (req,res) => {
  models.Guide.create({
    UserId: "1",
    title: req.body.title,
    subtitle: req.body.subtitle,
    summary: req.body.summary,
    Steps: [
      {content: req.body.Step1, title: req.body.Step1Title},
      {content: req.body.Step2, title: req.body.Step2Title},
      {content: req.body.Step3, title: req.body.Step3Title},
      {content: req.body.Step4, title: req.body.Step4Title},
      {content: req.body.Step5, title: req.body.Step5Title},
    ],
    Categories: [
      {name: req.body.CatName}
    ]
  }, {
    include: [ models.Steps, models.Categories]
  }).success(guide => {
    let new_directory = path + guide.guide_ID + '/';
    if (!fs.existsSync(new_directory)){
      fs.mkdirSync(new_directory);
    }
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
  passport.authenticate('local')(req, res);
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
