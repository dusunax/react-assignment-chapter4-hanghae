import {nanoid} from 'nanoid'

//액션 타입
const CREATE = "note/CREATE"
const LOAD = "note/LOAD"
const UPDATE = "note/UPDATE"
const DELETE = "note/DELETE"

const initialList = {
	list: [
		{ title: '제목00', context: '내용00', done: false, id: '-8_UveSY'},
		{ title: '제목01', context: '내용01', done: true, id: 'fNogmBF8'}
	],
}

//액션 생성
export function loadNote(note_list){
	return {type: LOAD, note_list}
}

export function addNote(new_note){
    new_note = {id: nanoid(8), ...new_note};
	return {type: CREATE, new_note}
}

export function doneNote(note_idx){
	return {type: UPDATE, note_idx}
}

export function deleteNote(note){
	return {type: DELETE, note}
}

// 리듀서
export default function reducer(state = initialList, action = {}) {
    switch (action.type) {
        case 'note/CREATE': {
            return {list: [...state.list, action.new_note]};
        }
        case 'note/LOAD': {
            return {list: [...action.note_list]}
        }
        case 'note/UPDATE': {
            const new_list = state.list.map((l)=>{
                if(action.note_idx === l.id){
                    let isDone = l.done?false:true;
                    return { ...l, done: isDone }
                } else {
                    return l
                }
            })
            return {list: new_list}
        }
        case 'note/DELETE': {
            console.log('삭제');
            return state;
        }
        default: {
            return state;
        }
    }
}