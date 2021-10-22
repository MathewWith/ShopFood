import {connect} from "react-redux";
import React, { useEffect } from "react";
import NoteBlock from "src/components/pages/Note";
import { Note } from "src/shared/models/note";
import getItems from 'src/reducers/thunk'


const Library = ({notes, getItems}: {notes: any, getItems: any}) => {

    useEffect(() => {
        async function fetchData() {
            await getItems()
        }

        fetchData()
    }, [] );


    console.log('array notes', notes)
    return (
        <div>
            {!!notes &&  notes.map((note: Note) => <NoteBlock note={note}/>) }
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return{
        notes: state.notes
    }
}

export default connect(mapStateToProps, getItems)(Library);