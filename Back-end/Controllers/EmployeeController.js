
import employeeModel from '../Model/Employee.js';

export const getpostdb = (req,res)=>{
    modelPosts.deleteOne({_id:'63ffa2a0e563017e53893bd0'}).then(docs=>{
       console.log(docs);
       res.send(docs);
     }).catch(err=>{
       console.log("errr : "+err);
     })
 }

 export const getAll =  (req, res) => {
    employeeModel.find().then(docs=>{
            res.json(docs);
    }).catch(err=>{
            console.log(err);
    })     
}

export const addEmployee = (req, res) => {
   // let employee = new employeeModel(req.body);
   // employee.save()
   employeeModel.insertMany(req.body)
        .then(game => {
            res.status(200).json({ 'employee': 'Employee Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });
}

export const updateEmployee = (req, res)=>{
    employeeModel.findById({_id:req.params.id}).then(employee=> {
        if (!employee)
            return next(new Error('Unable To Find Employee With This Id'));
        else {
            employee.firstName = req.body.firstName;
            employee.lastName = req.body.lastName;
            employee.email = req.body.email;
            employee.phone = req.body.phone;

            employee.save().then(emp => {
                res.json('Employee Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Employee");
                });
        }
    }).catch(err=>{
        console.log(err);
    });
}

export const editEmployee = (req, res) => {
    let id = req.params.id;
    employeeModel.findById(id).then(employee=>{
        res.json(employee);
    }).catch(err=>{
        res;json(err);
    })
} 


export const deleteEmployee = (req,res)=>{
    employeeModel.findByIdAndRemove(req.params.id).then(rep=>{
        console.log("good");
        res.json(rep);
    }).catch(err=>{
        res.json(err);
    })
}

