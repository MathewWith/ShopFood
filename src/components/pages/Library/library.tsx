import {connect} from "react-redux";
import {useEffect} from "react";
import NoteBlock from "src/components/pages/NoteBlock";
import {Note} from "src/shared/models/note";
import getNotes from 'src/store/actions/notes'

// type LibraryProps = {
//     getNotes: Function,
//     notes: Note[]
// }

const Library = (props: any) => {

    const {getNotes} = props
    const {notes} = props

    useEffect(() => {
        async function fetchData() {
            await getNotes()
        }
        fetchData()
    }, [] );


    console.log('array notes', notes)
    return (
        <div>
            {!!notes &&  notes.map((note: Note, index: number) => <NoteBlock note={note} key={index}/>) }
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return{
        notes: state.notes
    }
}

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         getNotes: bindActionCreators(getNotes, dispatch)
//     }
// }

export default connect(mapStateToProps, getNotes)(Library);