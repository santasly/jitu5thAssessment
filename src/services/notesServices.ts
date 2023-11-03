
import { Err } from "joi";
import { dbService } from "./dbServices";

interface Note{
    id: number,
    title: string,
    content:string,
    createdAt?: Date
}
const notes: Note[] = [
    {
        id:1,
        title:"Buy Rice",
        content:"I am going to buy rice",
        createdAt: new Date()
    },
        {
        id:2,
        title:"Sleep",
        content:"I am going to sleep",
        createdAt:new Date()
    }
]

export function getNotes(){
      return notes;
    }

    export function getSpecifNote(id: number){
      let note = notes.find((note)=>note.id===id)
      if(note)return note;
      return null
    }

    export async function addNote(note: Note){
        let { id, title, content,createdAt } = note;
        let connectionPool = await dbService();
        let query = `INSERT INTO notes (note_id, title, content,createdAt) VALUES ('${id}', '${title}', '${content}','${createdAt}')`;
  
        connectionPool?.connect(async(err:Error)=>{
          if(err){
            console.log(err)
          }else{
           let results = await  connectionPool?.request()
                                               .query(query)
           console.log(results)
          }
      }
        )}
      


          
        export async function updateNote(note: Note) {
  const { id, title, content, createdAt } = note;
  const connectionPool = await dbService();

 
    const query = `
      UPDATE notes 
      SET title = '${title}', content = '${content}', createdAt = '${createdAt}'
      WHERE note_id = '${id}'
    `;
    connectionPool?.connect(async (err:Error) => {
      if (err) {
        console.log(err);
      } else {
        const results = await connectionPool?.request().query(query);
        console.log(results);
      }
    });
  } 




      

    

    export function deleteNote(id: number){
      let indexofNote = notes.findIndex((note)=>note.id === id)

      if(indexofNote<0){
        return null
      }else{
        notes.splice(indexofNote, 1)
        return indexofNote
      }
    }