const router = require('express').Router();
const LogEvents = require('../App/Controllers/LogEvents');


router.get('/events',LogEvents.showAll);
router.get('/events/:event_id',LogEvents.showEventsById);

router.post('/events/create',LogEvents.create);


module.exports = router;

