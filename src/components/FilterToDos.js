import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/actions';

const FilterToDos = () => {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.selectedFilter)

    return(
        <React.Fragment>
            <a href="#ALL" onClick={() => dispatch(selectFilter('ALL'))} className={filter === 'ALL'? 'selected': 'regular'}>ALL</a>
            <a href="#TODO" onClick={() => dispatch(selectFilter('TODO'))} className={filter === 'TODO'? 'selected': 'regular'}>TODO</a>
            <a href="#DONE" onClick={() => dispatch(selectFilter('DONE'))} className={filter === 'DONE'? 'selected': 'regular'}>COMPLETED</a>
        </React.Fragment>
    )
}


export default FilterToDos;