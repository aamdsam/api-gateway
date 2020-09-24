const express = require('express');
const router = express.Router();

const myCoursesRouter = require('./handler/my-courses');

router.get('/', myCoursesRouter.getAll);
router.get('/:id', myCoursesRouter.get);

router.post('/', myCoursesRouter.create);
router.put('/:id', myCoursesRouter.update);
router.delete('/:id', myCoursesRouter.destroy);

module.exports = router;
