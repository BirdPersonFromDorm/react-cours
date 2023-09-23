import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/slice/todos";

const TodoList = () => {


    const ref = useRef()
    const inputTitleRef = useRef()

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

    const handleAddTodo = () => {
        const newToDo = {
            id: Date.now(),
            title,
            desc,
            isChecked
        }

        if (title && desc) {
            setList((list) => [...list, newToDo])
            // setList((list) => [...list, newToDo])
            setTitle('')
            setDesc('')
            setIsChecked(false)
        }

    }

    const handleDelete = (id) => {
        let filter = list.filter(item => item.id !== id);
        setList(filter)
    }

    useEffect(() => {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }, [list.length])

    useEffect(() => {
      inputTitleRef.current.focus()
    }, [])


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
            <div className="input-block" ref={ref}>
                <input
                    ref={inputTitleRef}
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
                <button
                    onClick={handleAddTodo}
                    disabled={!(desc && title)}
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default TodoList;