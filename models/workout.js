const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            required: 'Please enter an exercise name'
        },
        type: {
            type: String,
            required: 'Please enter an exercise type'
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
    {
        toJSON: {
            virtuals: true
        }
    });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;