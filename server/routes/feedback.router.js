const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) => {
    const newFeedback = req.body;
    const queryText = `
    INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4)
    `;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comment])
    .then( dbResponse => {
        res.sendStatus(201);
    })
    .catch( err => {
        console.log('Could not POST feedback object to DB');
        res.sendStatus(500);
    });
});