import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { getProduct  } from '../../api/productAPI';


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ addToCart }) => {
  const [count, setCount] = useState(0)
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct();
        setProductItems(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
    fetchData();
  }, []);

  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        
        {productItems.map((product) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{product.discount}% Off</span>
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
      </Slider>
    </>
  )
}

export default FlashCard
