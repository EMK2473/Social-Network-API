const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;