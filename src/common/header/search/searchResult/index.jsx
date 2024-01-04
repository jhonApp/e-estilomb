import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProductByNome } from "../../../../rest_api/productAPI";
import Header from "../../Header";


const SearchResults = ({ query, page, produtos, addToCart }) => {
    const [count, setCount] = useState(0);
    const [resultado, setResultado] = useState([]);

    const increment = () => {
        setCount(count + 1)
    }

    const StyledContent = styled.div`
        min-height: 400px;
        background-color: #f6f9fc;
        padding:30px;
    `;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log(query);
                const resultadoFiltrado = await getProductByNome(query);
                setResultado(resultadoFiltrado);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchProducts();
    }, [query, produtos]);

    // Renderize os resultados da busca aqui
    return (
        <>
            <Header />
            <StyledContent>
                <h1 className="text-2xl p-3">Resultados da busca por: '{query}'</h1>
                <div className='grid'>
                    {Array.isArray(resultado) && resultado.length > 0 ? (
                        resultado.map((product) => (
                            <div className='box' key={product.ID}>
                                <div className='product mtop'>
                                    <div className='img'>
                                        {/* <span className='discount'>{product.discount}% Off</span> */}
                                        <img src={product.ProdutoImagems && product.ProdutoImagems.length > 0 ? './images/flash/' + product.ProdutoImagems[0].ImageURL : 'URL_PADRAO_PARA_IMAGEM_SEM_URL'} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{product.Nome}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>R${product.Valor}</h4>
                                            <button onClick={() => addToCart(product)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado</p>
                    )}
                </div>
            </StyledContent>
        </>
    );
};

export default SearchResults;
