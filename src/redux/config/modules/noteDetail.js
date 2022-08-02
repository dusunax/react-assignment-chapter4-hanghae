const READ = "detail/READ"

const noteDetail = {
    title: '',
    context: '',
    id: '',
    done: ''
}

export function pickNote(note_title){
	return {type: READ, note_title}
}

export default function reducer(state=noteDetail, action = {}){
    switch (action.type) {
        case "detail/READ": {
            console.log(action)
            return state;
        }
        default: {
            return state;
        }
    }
}