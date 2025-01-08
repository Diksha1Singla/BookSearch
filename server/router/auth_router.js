const express = require("express")
const router = express.Router();
// const validate = require("../errorMiddleWare/ValidateMiddleWare")
const authController = require("../controller/auth_controller")
const schemaValid = require("../validator/authValidator")
const LocSchema = require("../validator/LocationValidation")


// router.route("/register").post(validate(schemaValid),authController.register)
router.route("/register").post(authController.register)
router.route("/login").post(authController.login)
// router.route("/location").get(validate(LocSchema),authController.fetchLocation)
router.route("/location").get(authController.fetchLocation)

module.exports = router