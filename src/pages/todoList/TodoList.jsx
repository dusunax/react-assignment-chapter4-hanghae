import Todo from "../../components/todo/Todo";
import { useSelector, useDispatch } from "react-redux";
import { loadNote } from '../../redux/config/modules/note';
import { useEffect } from "react";
import styled from "styled-components";

export default function TodoList(props){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.note.list)
    const listDone = data.filter(list => list.done )
    const listNotDone = data.filter(list => !list.done )
    
    useEffect(()=>{
        dispatch(loadNote(data))
    },[]);

    return (
        <MyList>
            {data.length === 0 ? <span style={{marginTop: '8px'}}>리스트를 입력해주세요.</span> : ""}
            <div className="list-container">
                <div className="contents-area">
                    <div className="left">
                        <p className="sticky">해냄</p>
                        {listDone.map(list => {
                            return <Todo 
                                list={list} 
                                key={list.id}
                                setPageChange={props.setPageChange}
                            />
                        })}
                    </div>

                    <div className="right">
                        <p>아직</p>
                        {listNotDone.map(list => {
                            return <Todo 
                                list={list} 
                                key={list.id}
                                setPageChange={props.setPageChange}
                            />
                        })}
                    </div>
                </div>
            </div>
        </MyList>
    )
}

const MyList=styled.div`
flex: 1 1 auto;
position: relative;

border-radius: 0 0 16px 16px;

color: #fff;
background-image: linear-gradient(rgba(108, 113, 123, 0.2), transparent);

display: flex;
flex-flow: column;
overflow-y: scroll;

.list-container {
    flex: 1 1 auto;
}

.contents-area {
    display: flex;
    height: 100%;
}

.contents-area > div {
    flex: 0 0 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10px;
    word-break: break-word;
}

p {
    padding: 5px 1em;
    margin: 0px;
    margin-top: 8px;

    color: #ffffff;
    border-bottom: 1px dotted #ffffff;
    
    font-size: 20px;
    font-weight: 500;
    font-family: 'Kirang Haerang', cursive;
}

`