const express = require('express');
const router = express.Router();

const imageCoursesRouter = require('./handler/image-courses');

router.get('/', imageCoursesRouter.getAll);
router.get('/:id', imageCoursesRouter.get);

router.post('/', imageCoursesRouter.create);
router.put('/:id', imageCoursesRouter.update);
router.delete('/:id', imageCoursesRouter.destroy);

module.exports = router;
