export default function Todo(props){
    console.log()
    return (
        <p>
            <span>{props.list.title}</span>
            <span>{props.list.context}</span>
        </p>
    )
}