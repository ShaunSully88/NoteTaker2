const router = require('express').Router();
const { notes } = require('../../db/db.json');

//getRoute for notes page
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});


//postRoute for writing note to note page
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).json('Note is not properly formatted. Please enter again.');
    } else {
        const note = createNewNote(req.body, notes);

        res.json(note);
    }
});

module.exports = router;