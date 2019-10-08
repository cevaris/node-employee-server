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

    push(employee: Employee): Employee {
        employee.id = nextId()
        store.push(employee);

        return employee;
    }

    delete(id: number): Employee | undefined {
        const indexOfEmployee = store.findIndex(e => e.id == id);
        if (indexOfEmployee > 0) {
            const deletedEmployee = this.get(id);
            store.splice(indexOfEmployee, 1);
            return deletedEmployee;
        } else {
            return undefined;
        }
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