import React from 'react'

const SearchBar = () => {
  return (
    <>
       <input 
          type="text" 
          className="w-full p-2 text-gray-900 bg-inherit border-b-[1px] border-gray-300 focus:border-blue-500 focus:outline-0"
          placeholder="Search City..."
        />
    </>
  )
}

export default SearchBar