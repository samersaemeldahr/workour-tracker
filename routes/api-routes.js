const router = require('express').Router();
const Workout = require('../models/workout.js');

// Find all
router.get('/api/workouts', (req, res) => {
	Workout.find()
		.then((dbWorkouts) => {
			res.json(dbWorkouts);
		})
		.catch((err) => {
			res.json(err);
		});
});
