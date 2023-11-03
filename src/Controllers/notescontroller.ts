import { Response, Request } from "express";
import Joi from "joi";
import {
 addNote,
 deleteNote,
 getSpecifNote,
 getNotes,
} from "../services/notesServices";


export function TestingRoute(req: Request, res: Response) {
 return res.send("Server is Running ");
}

export async function getAllNotesController(req: Request, res: Response) {
 try {
    const notes = await getNotes();
    res.json(notes);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
}

export async function getSpecificNoteController(req: Request, res: Response) {
 try {
    const noteID = parseInt(req.params.noteID);
    const note = await getSpecifNote(noteID);
    res.json(note);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
}

export async function deleteNoteController(req: Request, res: Response) {
 try {
    const { noteID } = req.params;
    const parsedID = parseInt(noteID);

    const result = await deleteNote(parsedID);

    if (result !== null) {
      res.send(`Note on index: ${result} deleted`);
    } else {
      res.send("Note not found");
    }
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
}

export async function addNoteController(req: Request, res: Response) {
 try {
    const new_note = req.body;

    const result = await addNote(new_note);

    res.json({
      id: result.id,
      success: true,
    });
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
}

export