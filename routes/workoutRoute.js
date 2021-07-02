const express = require("express")
const workoutController = require("../controllers/workoutController")

const router = express.Router();


router.route('/').post(workoutController.createWorkout)
router.route('/').get(workoutController.getAllWorkout)

module.exports =router;