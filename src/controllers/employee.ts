import express from 'express';
import { employeeDB } from '../storage/employee';

module.exports = (app: express.Express) => {
    app.post('/employees/create', function (req, res) {
        const employee = req.body;
        if (employee) {
            employeeDB.push(employee);
            success(res, employee);
        } else {
            badRequest(res, `could not parse ${req.body}`);
        }
    });

    app.post('/employees/delete/:id', function (req, res) {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            badRequest(res, `id '${req.params.id}' is not a number`);
            return;
        }

        const deletedEmployee = employeeDB.delete(id);
        success(res, deletedEmployee);
    });

    app.get('/employees/:id', function (req, res) {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            badRequest(res, `id '${req.params.id}' is not a number`);
            return;
        }

        try {
            success(res, employeeDB.get(id));
        } catch (e) {
            notFound(res, e.message);
        }
    });

    app.get('/employees', function (req, res) {
        success(res, employeeDB.getAll());
    });
}

function success(res: express.Response, results: any): void {
    const apiContent = { 'status': 'ok', results: results };
    res.status(200).json(apiContent);
}

function badRequest(res: express.Response, msg: string): void {
    const apiContent = { 'error': msg };
    res.status(400).json(apiContent);
}

function notFound(res: express.Response, msg: string): void {
    const apiContent = { 'error': msg };
    res.status(404).json(apiContent);
}