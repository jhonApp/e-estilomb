const SearchBox = ({ search, handleSearchChange }) => {
  return (
    <div className='search-box flex w-4/5 h-12 mt-5 ml-4 items-center border border-black rounded-full border-opacity-25'>
      <i className='fa fa-search w-1/12 text-center text-lg opacity-50'></i>
      <input
        type='text'
        placeholder='Buscar produto...'
        value={search}
        onChange={handleSearchChange}
        className='w-10/12  outline-none placeholder-base'
      />
      <span className='w-1/6 opacity-50 border-l border-black p-2'></span>
    </div>
  );
};

export default SearchBox;
