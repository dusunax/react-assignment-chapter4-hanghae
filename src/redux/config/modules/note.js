import {nanoid} from 'nanoid'

//액션 타입
const CREATE = "note/CREATE"
const LOAD = "note/LOAD"
const UPDATE = "note/UPDATE"
const DELETE = "note/DELETE"

const initialList = {
	list: [
		{ 
            title: '기본 미완 노트 A', 
            context: '기본 노트 내용입니다.', 
            done: false, 
            id: '-8_UveSY'
        },
		{ 
            title: '기본 완료 노트 B', 
            context: '기본 노트 내용입니다.', 
            done: true, 
            id: 'fNogmBF8'
        }
	],
}

//액션 생성
export function loadNote(payload){
	return {type: LOAD, payload}
}

export function addNote(payload){
    payload = {id: nanoid(8), ...payload};
	return {type: CREATE, payload}
}

export function doneNote(payload){
	return {type: UPDATE, payload}
}

export function deleteNote(payload){
	return {type: DELETE, payload}
}

// 리듀서
export default function reducer(state = initialList, action = {}) {
    const {payload}=action;
    switch (action.type) {
        case 'note/CREATE': {
            return {list: [...state.list, payload]};
        }
        case 'note/LOAD': {
            return {list: [...payload]}
        }
        case 'note/UPDATE': {
            const new_list = state.list.map( l =>{
                if(payload === l.id){
                    let isDone = l.done ? false : true;
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