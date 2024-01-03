import React, { useState }  from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Style.css"

const Search = ({ searchResults, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div className='content grid product'>
        {searchResults.map((product) => {
          return (
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
                      {/* step : 3  
                      if hami le button ma click garryo bahne 
                      */}
                      <button onClick={() => addToCart(product)}>
                        <i className='fa fa-plus'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          )
        })}
      </div>
    </>
  )
}

export default Search
