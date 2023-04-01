// Importing important packages
import express from 'express';
import {getAll,addNote,editNote,updateNote,deleteNote} from '../Controllers/NoteController.js';

const app = express();

const NoteRoute = express.Router()
// To Get List Of Notes
NoteRoute.get('/',getAll);
// To Add Note
NoteRoute.post('/addNote',addNote);
// To submit Update an Note
NoteRoute.post('/updateNote/:id',updateNote);
// To Get Note Details By Note ID
NoteRoute.get('/editNote/:id',editNote);
// To Delete The Note
NoteRoute.delete('/deleteNote/:id',deleteNote);

export default NoteRoute;