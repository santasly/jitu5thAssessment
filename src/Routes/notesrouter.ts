import { Router, } from "express";
import { addNoteController, 
    TestingRoute,
         deleteNoteController,
         getAllNotesController,
         getSpecificNoteController,
        } from "../Controllers/notescontroller";

const noterouter: Router  = Router()

noterouter.get('/', TestingRoute)
noterouter.get("/", getAllNotesController)
noterouter.get('/:noteID', getSpecificNoteController)
noterouter.delete("/:noteID", deleteNoteController)
noterouter.post("/", addNoteController)






export default noterouter;