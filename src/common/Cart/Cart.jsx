import React from "react"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.Valor, 0)
  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>Nenhum item adicionado no carrinho</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.Valor * item.qty

              return (
                <div className='cart-list product d_flex' key={item.ID}>
                  <div className='img'>
                    <img src={item.ProdutoImagems && item.ProdutoImagems.length > 0 ? './images/flash/' + item.ProdutoImagems[0].ImageURL : 'URL_PADRAO_PARA_IMAGEM_SEM_URL'} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.Nome}</h3>
                    <h4>
                      R$ {item.Valor} * {item.qty}
                      <span>R$ {productQty}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Resumo da compra</h2>
            <div className=' d_flex'>
              <h4>Valor Total:</h4>
              <h3>R${totalPrice}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
