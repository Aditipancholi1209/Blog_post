import React from 'react'
import { useGlobalContext } from './Context'
const Search = () => {
const {searchPost} =useGlobalContext();
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input
          className='search'
          type='text'
          placeholder='search here'
          onChange={(e)=>searchPost(e.target.value)}>
          </input>
        </div>

      </form>
    </div>
  );
};

export default Search;
