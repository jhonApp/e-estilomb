import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBox = () => {
  const [search, setSearch] = useState(''); // Definindo o estado search e a função setSearch para atualizá-lo
  const history = useHistory();

  const handleSearchChange = (event) => {
    // Atualizar o estado de busca conforme o usuário digita
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    // Redirecionar para a rota de busca com os parâmetros
    history.push(`/busca?q=${search}&page=1`); // Você pode definir a página inicial como necessário
  };

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
      <span
        className='w-1/6 opacity-50 border-l border-black p-2'
        onClick={handleSearch}
      ></span>
    </div>
  );
};

export default SearchBox;
