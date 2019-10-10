import express from 'express';
import { employeeDB } from '../storage/employee';

module.exports = (app: express.Express) => {
    app.post('/api/employees', function (req, res) {
        const employee = req.body;
        if (employee) {
            employeeDB.push(employee);
            success(res, employee);
        } else {
            badRequest(res, `could not parse ${req.body}`);
        }
    });

    app.delete('/api/employees/:id', function (req, res) {
        const deletedEmployee = employeeDB.delete(req.params.id);
        success(res, deletedEmployee);
    });

    app.get('/api/employees/:id', function (req, res) {
        if (!req.params.id) {
            badRequest(res, `parameter id is missing '${req.params.id}' is missing`);
            return;
        }

        try {
            success(res, employeeDB.get(req.params.id));
        } catch (e) {
            notFound(res, e.message);
        }
    });

    app.get('/api/employees', function (req, res) {
        success(res, employeeDB.getAll());
    });
}

function success(res: express.Response, results: any): void {
    const apiContent = { 'success': true, results: results };
    res.status(200).json(apiContent);
}

function badRequest(res: express.Response, msg: string): void {
    const apiContent = { 'success': false, 'message': msg };
    res.status(400).json(apiContent);
}

function notFound(res: express.Response, msg: string): void {
    const apiContent = { 'success': false, 'message': msg };
    res.status(404).json(apiContent);
}