// Importing important packages
import express from 'express';
import {getAll,addEmployee,editEmployee,updateEmployee,deleteEmployee} from '../Controllers/EmployeeController.js';

const app = express();

const employeeRoute = express.Router()
// To Get List Of Employees
employeeRoute.get('/',getAll);
// To Add Employee
employeeRoute.post('/addEmployee',addEmployee);
// To submit Update an Employee
employeeRoute.post('/updateEmployee/:id',updateEmployee);
// To Get Employee Details By Employee ID
employeeRoute.get('/editEmployee/:id',editEmployee);
// To Delete The Employee
employeeRoute.delete('/deleteEmployee/:id',deleteEmployee);

export default employeeRoute;