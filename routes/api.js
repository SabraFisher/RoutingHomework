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
    res.status(200);
    res.send(data);
});
//POST /api/person
router.post('/person', function (req, res, next) {
    //adding any data sent to the endpoint to the array check this
    res.status(200);
    data.push(req.body);
    res.send(req.body);
});
// PUT /api/person/:id
router.put('/person/:id', function (req, res, next) {
    res.status(200); 

    var index = data.indexOf(person => {
        return person.id === req.params.id;
    });

    data[index] = req.body;
    res.send(data[inex]);
});

// DELETE /api/person/:id
router.delete('/person/:id', function (req, res, next) {
    res.status(200);
    data[index] = data.filter(person => person.id != req.params.id);
    res.send(data[index]);
});
