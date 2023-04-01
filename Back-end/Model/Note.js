import mongoose from "mongoose";

var noteModel  = mongoose.model('Note',{
        title: {
         type: String
        },
        details: {
         type: String
        },
        status: {
         type: String
        }
})

export default noteModel;