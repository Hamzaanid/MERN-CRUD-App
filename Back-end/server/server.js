import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ModelEmp from '../Model/Employee.js';
import employeeRoutes from '../Routes/Employee.route.js';
import NoteRoute from '../Routes/Note.route.js';

 const app = express();
 
 // Connect Mongodb Database
 mongoose.connect('mongodb://127.0.0.1:27017/mydatabase',{ useNewUrlParser: true }).then(()=>{
    console.log("connected");
});
 
 // Conver incoming data to JSON format
 app.use(bodyParser.json());
 // Setup for the server port number
 const port = process.env.PORT || 4000;
 // Routes Configuration
 // for employees
 app.use('/employees', employeeRoutes);
 // for To Do app 
 app.use('/Note', NoteRoute);
 // Staring our express server
 const server = app.listen(port, function () {
 console.log('Server Lisening On Port : ' + port);
 });