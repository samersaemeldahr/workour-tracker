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

// Find past 7 workouts
router.get('/api/workouts/range', (req, res) => {
	Workout.find({}).limit(7)
		.then((dbWorkouts) => {
			res.json(dbWorkouts);
		})
		.catch((err) => {
			res.json(err);
		});
});

