const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Routes of API
router.get('/', employeeController.getAllEmployees);

// get a specific quote
router.get('/:id', employeeController.getEmployeeById);

// create an employee
router.post('/', employeeController.createEmployee);

// update an employee
router.patch('/:id', employeeController.updateEmployee);

// delete an employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;