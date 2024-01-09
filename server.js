const express = require('express');
const rawTasks = require('./src/exampleTasks.json');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const app = express();
let tasks = [...rawTasks];

app.use((__req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

app.get('/task', function (__req, res) {
    setTimeout(() => {
        res.json(tasks);
    }, 1500);
    // res.json(tasks);
});

app.post('/task', function (req, res) {
    const {task} = req.body;
    const createdTask = {
        task,
        id: uuid.v4(),
    };
    tasks.push(createdTask);
    setTimeout(() => {
        res.status(200).json({
            createdTask,
        });
    }, 1500);
    // res.status(200).json({
    //     createdTask,
    // });
});

app.delete('/task/:id', function (req, res) {
    const id = req.params.id;
    tasks = tasks.filter((obj) => obj.id !== id);
    // res.status(200).json({
    //     tasks,
    //     status: 'ok',
    // });
    setTimeout(() => {
        res.status(200).json({
            tasks,
            status: 'ok',
        });
    }, 1500);
});

app.listen(3000);
