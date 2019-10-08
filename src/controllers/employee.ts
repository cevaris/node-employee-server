import express from 'express';
import { employeeDB } from '../storage/employee';

module.exports = (app: express.Express) => {
    app.post('/employees/create', function (req, res) {
        const employee = req.body;
        if (employee) {
            employeeDB.insert(employee);
            res.json(employee);
        } else {
            console.error(`failed to create employee ${employee}`)
        }
    });

    app.get('/employees/:id', function (req, res) {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            badRequest(res, `id '${id}' is not a number`);
            return;
        }

        try {
            res.json(employeeDB.get(id));
        } catch (e) {
            badRequest(res, e.message);
        }
    });

    app.get('/employees', function (req, res) {
        res.json(employeeDB.getAll());
    });
}

function badRequest(res: express.Response, msg: string): void {
    const apiContent = { 'error': msg };
    res.status(400).json(apiContent);
}