const router = require('express').Router();
const Event = require('../models/Events');



router.route('/').get((req, res) => {
    Event.find()
    .then((Event) => res.json(Event))
    .catch(err => console.log(err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const snippet = req.body.snippet;
    const image = req.body.imageUrl;
    const content = req.body.content;
   
   
   
    const newEvent = new Event({
        title: title,
        snippet: snippet,
        image: image,
        content: content
    });

    newEvent.save()
    .then(() => res.json('Event added'))
    .catch(err => res.json(`Error: ${err}`));

});

module.exports = router; 
    

