const express = require('express');
const rawTasks = require('./src/exampleTasks.json');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const app = express();
let tasks = [...rawTasks];
app.use(bodyParser.json());

app.get('/task', function (__req, res) {
    res.json(tasks);
});

app.post('/task', function (req, res) {
    console.log(req.body);
    const {task} = req.body;
    tasks.push({
        task,
        id: uuid.v4(),
    });
    res.status(200).json({
        status: 'ok',
    });
});

app.delete('/task/:id', function (req, res) {
    const id = parseInt(req.params.id);
    tasks = tasks.filter((obj) => obj.id !== id);
    res.status(200).json({
        tasks,
        status: 'ok',
    });
});

app.listen(3000);
