
import noteModel from '../Model/Note.js';

 export const getAll =  (req, res) => {
    noteModel.find().then(docs=>{
            res.json(docs);
    }).catch(err=>{
            console.log(err);
    })     
}

export const addNote = (req, res) => {
   // let Note = new noteModel(req.body);
   // Note.save()
   noteModel.insertMany(req.body)
        .then(game => {
            res.status(200).json({ 'Note': 'Note Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });
}

export const updateNote = (req, res)=>{
    noteModel.findById({_id:req.params.id}).then(Note => {
        if (!Note)
            return next(new Error('Unable To Find Note With This Id'));
        else {
            Note.title = req.body.title;
            Note.details = req.body.details;
            Note.status = req.body.status;

            Note.save().then(emp => {
                res.json('Note Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Note");
                });
        }
    }).catch(err => {
        console.log(err);
    });
}

export const editNote = (req, res) => {
    let id = req.params.id;
    noteModel.findById(id).then(Note=>{
        res.json(Note);
    }).catch(err=>{
        res;json(err);
    })
} 


export const deleteNote = (req,res)=>{
    noteModel.findByIdAndRemove(req.params.id).then(rep=>{
        console.log("good");
        res.json(rep);
    }).catch(err=>{
        res.json(err);
    })
}

