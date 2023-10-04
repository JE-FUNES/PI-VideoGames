import React from 'react';
import { filterPlatform } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import './Css/Filter.css';

function PlatformFilter({ setCurrentPage }) {
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    const value = event.target.value;
    setCurrentPage(1);
    dispatch(filterPlatform(value));
  };

  return (
    <form id="platformFilter">
      <select className='platformFilterList' onChange={handleSelect} defaultValue={'All'}>
        <option className='platformOptionsD' value="All">All Platforms</option>
        <option className='platformOptions' value="xbox">Xbox</option>
        <option className='platformOptions' value="android">Android</option>
        <option className='platformOptions' value="playstation">Playstation</option>
        <option className='platformOptions' value="pc">PC</option>
        <option className='platformOptions' value="nintendo">Nintendo</option>
      </select>
    </form>
  );
}

export default PlatformFilter;
