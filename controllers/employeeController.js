// import the Employee Model
const Employee = require('../Models/Employee');

const getAllEmployees = (req, res)=>{
    Employee.find()
     .then((result)=>{
         res.send(result)
     })
     .catch((error)=>{
         res.send(error.message)
     })
}

const getEmployeeById = (req, res)=>{
    Employee.findById(req.params.id)
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message)
        })
}

const createEmployee = (req, res)=>{
    const employee = new Employee(req.body);
    employee.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message)
        })
}

const updateEmployee = (req, res)=>{
    Employee.findByIdAndUpdate(req.params.id,req.body)
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message)
        })
}

const deleteEmployee = (req, res)=>{
    Employee.findByIdAndDelete(req.params.id)
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send('Employee Terminated')
        })
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}