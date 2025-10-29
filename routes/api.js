var express = require('express');
var router = express.Router();

var data = [        // creating a sample data array JSON object
    { id: 0, name: "person1", username: "user1" },
    { id: 1, name: "person2", username: "user2" },
    { id: 2, name: "person3", username: "user3" }
]

//create endpoints
//GET /api/person
router.get('/person', function (req, res, next) {
    res.status(200);
    res.send(data);
});
//GET /api/person/:id
router.get('/person/:id', function (req, res, next) {
    const id = Number(req.params.id);
    const person = data.find(p => p.id === id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.status(200).json(person);
});
//POST /api/person
router.post('/person', function (req, res, next) {
    const person = req.body || {};
    if (typeof person.id !== 'number') {
        person.id = data.length ? Math.max(...data.map(p => p.id)) + 1 : 0;
    }
    data.push(person);
    res.status(201).json(person);
});
// PUT /api/person/:id
router.put('/person/:id', function (req, res, next) {
    const id = Number(req.params.id);
    const index = data.findIndex(person => person.id === id);
    if (index === -1) return res.status(404).json({ error: 'Person not found' });

    data[index] = Object.assign({}, req.body, { id });
    res.status(200).json(data[index]);
});

// DELETE /api/person/:id
router.delete('/person/:id', function (req, res, next) {
    const id = Number(req.params.id);
    const index = data.findIndex(person => person.id === id);
    if (index === -1) return res.status(404).json({ error: 'Person not found' });

    const deleted = data.splice(index, 1)[0];
    res.status(200).json(deleted);
});

module.exports = router;
