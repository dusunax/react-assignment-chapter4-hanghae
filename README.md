## React 숙련 주차 개인 과제🪂

> My Todo List 다시 만들기
> using **react-router-dom**, **style-components**, **redux**

---

### Features
## CRUD
- CREATE Todo
- READ Todos, Todo
- UPDATE Todo
- DELETE Todo

## Requirement
- ### **공통**
  - Todo 데이터는 **Redux**를 사용해 **전역 상태 관리**
  - todos 모듈: **_Ducks 패턴_**
  - 컴포넌트 구조는 자유
  	- 이유에 대해 **Readme**에 작성
 
  - 디자인과 화면 구성 자유

- ### **메인 페이지**
  - Todo의 상태: **완료, 진행중**
	- 그룹을 나뉘어서 보이도록 구현
  - **input value 초기화**하는 경우
	- Todo를 추가 
	- input에 값이 있는 상태에서 상세페이지로 이동
  - **버튼 textContent**
	- Todo의 완료 상태가 true일 때: "취소"
	- Todo의 완료 상태가 false일 때: "완료"
  - **Contents Area**
	- 최대 넓이: **1200px**
	- 최소 넓이: **800px**
	- 컨텐츠: **가운데 정렬**
  
  - **상세 페이지로 이동**
	- "상세보기"를 **클릭**하여 Todo의 상세 페이지로 이동

- ### **상세 페이지**
  - 필수 출력 요소
    	- Todo ID
        - Todo 제목
        - Todo 내용
        - "이전으로" 버튼 
        
- ### **제한사항**
  - map을 사용할 때 **key에 index 사용 금지!**
  
  - Todo의 생성 시 **Id값에 todos.length 사용 금지!**

---

## Notice
### initialState: 필수 아님
>```
const initialState = [
	{
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: false
	}
]
```
