import {Note} from "src/shared/models/note";


const NoteBlock = ({note}: {note: Note}) => {
    return(
        <div className='container'>
             <div className='thumbnail'>
                 <img 
                 className="image"
                 alt={note.title}
                 src="https://cdn.tgdd.vn/Products/Images/7264/204904/citizen-bi1041-22l-nam-2-org.jpg"
                />
                <div className='caption'>
                 <h3 className='title'>{note.title}</h3>
                 <h3 className='price'>{note.score}</h3>
                 </div>
             </div>
         </div>
    )
}

export default NoteBlock;