import React from "react";
import {Note} from "src/shared/models/note";
import './note.scss'

const NoteBlock = ({note}: {note: Note}) => {
    return(
        <div className='container'>
             <div className='caption'>
                 <h4>{note.title}</h4>
                 <h4>{note.score}</h4>
             </div>
         </div>
    )
}

export default NoteBlock;