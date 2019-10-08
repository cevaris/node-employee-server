import { Employee } from '../models/employee';

/**
 * Global in memory storage
 */
const store: Employee[] = new Array();

class InMemoryEmployeeDB {
    get(id: number): Employee {
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

    insert(employee: Employee): Employee {
        employee.id = nextId()
        store.push(employee);

        return employee;
    }
}

/**
 * Generates next id number.
 * Guarantees uniqueness, or no other employee has the same id.
 */
let prevId = 999;
function nextId(): number {
    prevId = ++prevId;
    return prevId;
}

/**
 * Global singleton
 */
export const employeeDB = new InMemoryEmployeeDB();