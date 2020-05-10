import React, { useEffect } from 'react'
// import './ToDo.css';

export default function ToDo({todo}) {

    useEffect(() => {
        console.log('called', todo.id)
    }, [todo.text, todo.id])

    return (
        
            <div className="page">
                <div className="page__toggle">
                <label className="toggle">
                    <input className="toggle__input" type="checkbox" checked={todo.isCompleted} />
                    <span className="toggle__label">
                        <span className="toggle__text">{todo.text}</span>
                    </span>
                </label>                               
                </div>
            </div>

        
    )
}
