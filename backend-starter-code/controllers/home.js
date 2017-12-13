const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');
const fs = require('fs');
const multer  = require('multer');
const router = express.Router();
const bodyParser = require('body-parser');

let path = './gifs'
let upload = multer({dest: path})

// let upload = multer({dest: './gifs'})

router.get('/whoami', (req, res) => {
  models.Users.findById("rcole831").then((user) => {
    res.json(user.userName);
  });
})

router.get('/logout', (req, res) => {
  req.logout();
})

router.get('/guide/', (req, res) => {
  models.Steps.findAll({
    where: {
      GuideGuideID: req.query.id
    },
    order: [
      ['createdAt','ASC']
    ],
    attributes: ['title', 'content', 'gifLocation']
  })
  .then(steps => {
    models.Guide.findById(req.query.id)
    .then(guide => {
      res.json({steps, guide});
    })
  })
})

router.get('/guide-steps/', (req, res) => {
  let result = [];
  models.Steps.findAll({
    where: {
      GuideGuideID: req.query.id
    },
    order: [
      ['stepNumber','ASC']
    ],
    attributes: ['title', 'content', 'gifLocation', 'GuideGuideID']
  })
  .then(steps => {
    for (let step of steps){
      result.push(step.dataValues);
    }
    res.json(result);
  })
})

router.get('/guides', (req, res) => {
  models.Guide.findAll()
  .then(guides => {
    res.json(guides);
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
    userName: req.body.userName,
    passwordHash: req.body.password,
  })

  res.status(200).json("Done");
})

router.post('/guide-form/post', upload.array('gifs', 5), (req,res) => {
  let count = 1;
  let newFileName = null;

  // req.files[0].path 
  console.log(req.user);

  models.Guide.create({
    UserUserName: "rcole831",
    title: req.body.title,
    subtitle: req.body.subtitle,
    summary: req.body.summary,
    Steps: [
      {content: req.body.Step1, title: req.body.Step1Title, stepNumber: "1"},
      {content: req.body.Step2, title: req.body.Step2Title, stepNumber: "2"},
      {content: req.body.Step3, title: req.body.Step3Title, stepNumber: "3"},
      {content: req.body.Step4, title: req.body.Step4Title, stepNumber: "4"},
      {content: req.body.Step5, title: req.body.Step5Title, stepNumber: "5"},
    ],
    Categories: [
      {name: req.body.CatName}
    ]
  }, {
    include: [ models.Steps, models.Categories]
  }).then(guide => {
    let new_directory = path + '/' + guide.guideID + '/';
    if (!fs.existsSync(new_directory)){
      fs.mkdirSync(new_directory);
    }

    for (let gif of req.files){
      newFileName = "Step" + count + '.gif';
      console.log(newFileName);
      fs.rename(path + '/' + gif.filename, new_directory + newFileName, err => {
        if(err) throw err;
        console.log('Move complete!');
      })
      count++;
    }

    models.Steps.findAll({
      where: {
        GuideGuideID: guide.guideID
      }
    }).then(steps =>{
      count = 1;
      for (let step of steps){        
        newFileName = "Step" + count+ '.gif';
        step.gifLocation = new_directory + newFileName;
        step.save();
        count++;
      }
    })
  })
  res.json("Good");
})

router.post('/comment', (req, res) => {
  models.Comments.create({
    UserId: req.user.userName,
    GuideGuideID: req.guide.id,
    content: req.body.commentBox,
  })
})

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user.userName);
});

/*
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
*/

module.exports = router;
