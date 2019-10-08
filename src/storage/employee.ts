import { Employee } from '../models/employee';

/**
 * Global in memory storage
 */
const store: Employee[] = new Array();


class InMemoryEmployeeDB {
    get(id: number): Employee {
        if (id < store.length) {
            return store[id];
        } else {
            throw new Error(`employee id=${id} not found`);
        }
    }
    getAll(): Employee[] {
        return store;
    }
    insert(employee: Employee): number {
        return store.push(employee);
    }
}

export const employeeDB = new InMemoryEmployeeDB();