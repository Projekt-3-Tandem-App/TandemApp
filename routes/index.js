const router = require("express").Router();
const User = require('../models/User.model');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/userinformation", (req, res, next) => {
  User.find()
  .then((allUsers) => {
    res.json(allUsers)
  }).catch((err) => {console.log(err)})
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

// router.get('/', (req, res, next) => {
//   Project.find()
//     .then(users => {
//       console.log("ICI USERS",users)
//       res.json(users);
//     })
//     .catch(err => {
//       next(err)
//     })
// });





module.exports = router;
