const path = require('path');
const router = require('express').Router();

// Main
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Statistics
router.get('/stats', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// Exercises
router.get('/exercise', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;