import React from 'react';
import { useDispatch } from 'react-redux';
import { selectFilter } from '../redux/actions';

const FilterToDos = () => {

    const dispatch = useDispatch();

    return(
        <React.Fragment>
            <a onClick={() => dispatch(selectFilter('ALL'))}>ALL</a>
            <a onClick={() => dispatch(selectFilter('TODO'))}>TODO</a>
            <a onClick={() => dispatch(selectFilter('DONE'))}>COMPLETED</a>
        </React.Fragment>
    )
}

export default FilterToDos;