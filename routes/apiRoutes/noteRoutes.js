const router = require('express').Router();
const { filterByQuery, createNewNote, validateNotes, findById } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

//getRoute for notes page
router.get("/notes", (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});


//postRoute for writing note to note page
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNotes(req.body)) {
        res.status(400).send('Note is not properly formatted. Please enter again.');
    } else {
        const note = createNewNote(req.body, notes);

        res.json(note);
    }
});

module.exports = router;