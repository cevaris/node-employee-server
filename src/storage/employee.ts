import { Employee } from '../models/employee';
import uuidv4 from 'uuid/v4';

/**
 * Global in memory storage
 */
const store: Employee[] = new Array();

class InMemoryEmployeeDB {
    get(id: string): Employee {
        const employee = store.find(e => e.id == id);

        if (employee) {
            return employee;
        } else {
            throw new Error(`employee id=${id} not found`);
        }
    }

    getAll(): Employee[] {
        return store;
    }

    push(employee: Employee): Employee {
        employee.id = nextId()
        store.push(employee);

        return employee;
    }

    delete(id: string): Employee {
        const indexOfEmployee = store.findIndex(e => e.id == id);
        if (indexOfEmployee >= 0) {
            const deletedEmployee = store[indexOfEmployee];
            store.splice(indexOfEmployee, 1); // removes employee from array
            return deletedEmployee;
        } else {
            throw new Error(`employee id=${id} not found`);
        }
    }
}

function nextId(): string {
    return uuidv4();
}

/**
 * Global singleton
 */
export const employeeDB = new InMemoryEmployeeDB();