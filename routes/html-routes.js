const path = require('path');
const router = require('express').Router();

// Statistics
router.get('/stats', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/stats.html'));
});
