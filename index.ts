import express, { response } from 'express';
import { isNumber } from 'util';

interface Employee {
    name: string,
    salary: string
}

const store: Employee[] = new Array();

var app = express();
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/employees/create', function (req, res) {
    const employee = req.body;
    if (employee) {
        store.push(employee);
        res.json(employee);
    } else {
        console.error(`failed to create employee ${employee}`)
    }
});

app.get('/employees/:id', function (req, res) {
    const index = parseInt(req.params.id);
    if (isNumber(index) && index < store.length) {
        res.json(store[index]);
    } else {
        res.json({ 'error': `no such employee ${index}` });
    }
});

app.get('/employees', function (req, res) {
    res.json(store);
});

const PORT = process.env.PORT || '3000';
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});
