var express = require('express');
var router = express.Router();

const myArr = [
  {
    firstName: "Shery",
    secName: "Hany",
    id: 0
  },
  {
    firstName: "Reem",
    secName: "Mohamed",
    id: 1
  },
  {
    firstName: "Mirhan",
    secName: "Ashraf",
    id: 2
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { users: myArr });
});

//send data after edit
router.post('/:id', function (req, res, next) {
  const userData = myArr.find(a => Number(a.id) === Number(req.params.id));
  console.log(userData);
  console.log(req.body.firstName);

  userData.firstName = req.body.firstName;
  userData.secName = req.body.secName;
  userData.id = req.body.id;

  res.redirect('/');
});

//add user
router.post('/', function (req, res, next) {
  myArr.push({
    firstName: req.body.firstName,
    secName: req.body.secName,
    id: req.body.id
  });
  console.log(req.body.input);
  res.redirect('/');
});

//edit user
router.get('/edit/:id', function (req, res, next) {

  const userData = myArr.find(a => Number(a.id) === Number(req.params.id));
  // console.log(userData);
  res.render('edit', {
    firstName: userData.firstName,
    secName: userData.secName,
    id: userData.id
  });

});


//delete user by id
router.get('/:id', function (req, res, next) {
  const userData = myArr.findIndex(a => Number(a.id) === Number(req.params.id));
  const delId = myArr.splice(tst, 1);
  res.redirect('/');
});



module.exports = router;
