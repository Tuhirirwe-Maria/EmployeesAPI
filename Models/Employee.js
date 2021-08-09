const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    
})

// create a model out of a Schema

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;