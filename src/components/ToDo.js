import React from 'react'
// import './ToDo.css';

export default function ToDo({todo}) {

    return (
        
            <div className="page">
                <div className="page__toggle">
                <label className="toggle">
                    <input className="toggle__input" type="checkbox" checked />
                    <span className="toggle__label">
                        <span className="toggle__text">{todo}</span>
                    </span>
                </label>                               
                </div>
            </div>

        
    )
}
