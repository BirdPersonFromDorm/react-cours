import React, {useState} from 'react';

const TodoList = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const [list, setList] = useState([
        {
            id: 1,
            title: 'test',
            desc: 'test',
            isChecked: false
        },
        {
            id: 2,
            title: 'test',
            desc: 'test',
            isChecked: false
        },
    ])

    const handleAddTodo = () =>{
        const newToDo = {
            id: Date.now(),
            title,
            desc,
            isChecked
        }

        setList((list) => [...list, newToDo])
        setList((list) => [...list, newToDo])
        setTitle('')
        setDesc('')
        setIsChecked(false)
    }

    const handleDelete = (id) =>{
        let filter = list.filter(item => item.id !== id);
        setList(filter)
    }

    return (
        <div className="todo-wrap">
            <div className="to-do-list">
                {
                    list.map((item) =>
                    <div className="to-do-list-item">
                        <h3>{item?.title}</h3>

                        <div className="to-do-list-item-bottom">
                            <input type="checkbox" checked={item.isChecked}/>
                            <p>{item?.desc}</p>
                        </div>

                        <div
                            onClick={() => handleDelete(item.id)}
                            className="to-do-list-item-delete"
                        >
                            x
                        </div>
                    </div>
                    )
                }
            </div>
            <div className="input-block">
                <input
                    placeholder={'Title'}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e?.target?.value)}
                />
                <input
                    placeholder={'desc'}
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e?.target?.value)}
                />
                <input
                    type="checkbox"
                    value={isChecked}
                    onChange={(e) => setIsChecked(e?.target?.checked)}
                />
                <button onClick={handleAddTodo}>
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default TodoList;