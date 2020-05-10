import React, { useEffect, useState } from 'react'
// import './ToDo.css';

export default function ToDo({todo}) {

    const [checked, setChecked] = useState(false);

    // useEffect(() => {
    //     console.log('called', todo.id)
    // }, [todo.text, todo.id]);

    const handleChange = (e) => {
        setChecked(!checked)
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
