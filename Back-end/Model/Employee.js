import mongoose from "mongoose";

var employeeModel  = mongoose.model('employee',{
        firstName: {
         type: String
        },
        lastName: {
         type: String
        },
        email: {
         type: String
        },
        phone: {
         type: Number
        }
})

export default employeeModel ;