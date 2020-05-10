import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { selectFilter, toggleToDo } from '../redux/actions';
// import './ToDo.css';

export default function ToDo({todo}) {

    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setChecked(!checked)
        dispatch(toggleToDo(todo.id))
    }

    return (

        <div className="page">
            <div className="page__toggle">
            <label className="toggle">
                <input className="toggle__input" type="checkbox" checked={checked} onChange={handleChange}/>
                <span className="toggle__label">
                    <span className="toggle__text">{todo.text}</span>
                </span>
            </label>                               
            </div>
        </div>        
    )
}
