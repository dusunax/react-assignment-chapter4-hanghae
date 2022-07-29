import { customAlphabet, nanoid } from "nanoid";
// console.log(nanoid(8))

//액션 타입
const READ = "note/READ"

const initialList = {
	list: [
		{ title: '제목00', context: '내용00', done: false, id: '-8_UveSY'},
		{ title: '제목01', context: '내용01', done: true, id: 'fNogmBF8'}
	],
}

//액션 생성
export function readNote(list_index){
	return {type: READ, list_index}
}

// 리듀서
export default function reducer(state = initialList, action = {}) {
    switch (action.type) {
        case 'note/READ': {
            //
            return {state}; //추가한 값 return
        }
        default: {
            return state;
        }
    }
}