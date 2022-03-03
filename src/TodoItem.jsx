export default function TodoItem(props) {
    return (
        <div className="todoItem">
            <button
                className="todoDeleteButton"
                onClick={() => {
                    props.dispatcher({ type: "remove", key: props.data.key });
                }}
            >
                Remove
            </button>
            <h4 className="todoItemText">{props.data.title}</h4>
            <p className="todoDescription">{props.data.desc}</p>
        </div>
    );
}
