const expressUser = require("express");
const { userCtrl } = require("./Users.controller");
const {authUser} =require('../Auth')

const router = expressUser.Router();

router.post("/login", userCtrl.login)
router.post("/signup", userCtrl.signup)
router.patch("/add_follower/:follow_id",authUser,userCtrl.addFollower)
router.patch("/remove_follower/:follow_id",authUser,userCtrl.removeFollower)
router.patch("/change_to_manager",authUser,userCtrl.changeToManager)

module.exports = router;