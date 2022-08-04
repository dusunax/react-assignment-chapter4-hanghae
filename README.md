## React 숙련 주차 개인 과제🪂

> My Todo List 다시 만들기
> using **react-router-dom**, **style-components**, **redux**

---

### Features
![image](https://user-images.githubusercontent.com/94776135/182825125-f1f85992-6ad5-4be3-8649-fa96c2e53343.png)
![image](https://user-images.githubusercontent.com/94776135/182825272-2fcc9a74-dba0-4d03-8e58-0f8df53d405b.png)

## CRUD
- CREATE Todo
- READ Todos, Todo
- UPDATE Todo
- DELETE Todo

## Requirement
- ### **공통**
  - Todo 데이터는 **Redux**를 사용해 **전역 상태 관리**
  - todos 모듈: **_Ducks 패턴_**
  - 컴포넌트 구조
  	- TodoList에서 map메소드로 Todo를 출력함
  	- ROUTE에서 이동하는 컴포넌트를 Pages로 빼서 관리
  - 디자인과 화면 구성 자유

- ### **메인 페이지**
  - Todo의 상태: **완료:해냄, 진행중:아직**
	- 그룹을 나뉘어서 보이도록 구현
  - **input value 초기화**하는 경우
	- Todo를 추가 
	- input에 값이 있는 상태에서 상세페이지로 이동
	- input에 값이 있는 상태에서 메인페이지로 이동
  - **버튼 textContent**
	- Todo의 완료 상태가 true일 때: "O"
	- Todo의 완료 상태가 false일 때: "X"
  - **Contents Area**
	- 최대 넓이: **600px**
	- 최소 넓이: **없음**
	- 컨텐츠: **가운데 정렬**
  
  - **상세 페이지로 이동**
	- "상세보기"를 **클릭**하여 Todo의 상세 페이지로 이동

- ### **상세 페이지**
  - 필수 출력 요소
    	- Todo ID
        - Todo 제목
        - Todo 내용
        - "이전으로" 버튼 
        
- ### **구현사항**
  - Todo
     - Todo Id에는 nanoId를 사용
     - Todos 리스트의 갯수가 0일 때는 문구를 출력
     - Todo의 내용이 20자 이상일 때, 자르고 ...을 붙임
  - Form
     - 제목 | title | 1~20자
     - 내용 | context | 1~100자
     - 제목이나 내용이 없으면 알림창
     - 페이지를 이동하면 state값(pageChange) 상태를 변경하고, input을 초기화
---

## Notice
### initialState: 필수 아님
```
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
```


