const express = require('express');
const router = express.Router();

const reviewsHandler = require('./handler/reviews');

router.get('/', reviewsHandler.getAll);
router.get('/:id', reviewsHandler.get);

router.post('/', reviewsHandler.create);
router.put('/:id', reviewsHandler.update);
router.delete('/:id', reviewsHandler.destroy);

module.exports = router;
