const { query } = require('express');
const fs = require('fs');
const  path = require('path');

function filterByQuery(query, notes) {
    let filteredResults = notes;

        if (query.text === 'string') {
            filteredResults = filteredResults.filter(note => note.age === query.age);
        }
        if (query.title === 'string') {
            filteredResults = filteredResults.filter(note => note.name === query.name);
        }
    return filteredResults;

};

function findById(id, notes) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
};

function createNewNote(body, notes) {
    const note = body;

    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../NoteTaker2/db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );

    return note;
};

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote
};