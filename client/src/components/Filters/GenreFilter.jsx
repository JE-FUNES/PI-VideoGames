import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGenres, filterGenre } from '../../redux/actions'
import './Css/Filter.css'

function GenreFilter({ setCurrentPage }) {
    const dispatch = useDispatch();
    const genres = useSelector( state => state.genresFilter )

    const games = useSelector(state => state.games);

    
    
    useEffect(() => {
        dispatch( getGenres() )
    },[ dispatch ]);
    
    const handleSelect =  ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        dispatch( filterGenre( value ));
        console.log('Género seleccionado:', value);
        console.log('Juegos después del filtrado:', games);
    };
    
    return (
        <form id="genreFilter">
            <select className='genreFilters' onChange={ handleSelect } defaultValue={'All'}>
                <option className='genreOptions' value="All" > All Genres </option>
                {
                    genres.map(( genre, i ) => {
                        return(
                            <option className='genreOptions' value={ genre.name } key={ i } > { genre.name } </option>
                        )
                    }
                    )
                }
            </select>
        </form>
    )
}

export default GenreFilter
                        