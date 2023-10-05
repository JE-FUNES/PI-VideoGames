import React from 'react'
import { filterCreated } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './Css/Filter.css'

function CreatedFilter({ setCurrentPage }) {
    const dispatch = useDispatch();

    const handleSelect = ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        dispatch( filterCreated( value ))
    }
    return (
        <form className='CreatedFilters'>
            <select className='createdFiltersList' onChange={ handleSelect } defaultValue={'All'}>
                <option className='origionOptionsD' value="All"> All Origins </option>
                <option className='origionOptions' value="Api"> API Games </option>
                <option className='origionOptions' value="created"> DB Games </option>
            </select>
            
        </form>
    )
}

export default CreatedFilter
