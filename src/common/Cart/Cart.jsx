import React from "react"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.Valor, 0)
  const quantidadeTotal = CartItem.reduce((total, item) => total + item.qty, 0);
  return (
    <>
      <section className="cart-items bg-gray-100 py-16">
        <div className="container flex">
          <div className="cart-details w-3/4">
            {CartItem.length === 0 && <h1 className="no-items text-purple-500 text-2xl">Nenhum item adicionado no carrinho</h1>}
          
            {CartItem.map((item) => {
              const productQty = item.Valor * item.qty;
              return (
                <div className="cart-list flex items-center bg-white mt-8 p-4 rounded" key={item.ID}>
                  <div className="img w-24 h-24">
                    <img src={item.ProdutoImagems && item.ProdutoImagems.length > 0 ? './images/flash/' + item.ProdutoImagems[0].ImageURL : 'URL_PADRAO_PARA_IMAGEM_SEM_URL'} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="cart-details ml-4">
                    <h3 className="text-xl font-semibold tiny">{item.Nome}</h3>
                    <h4 className="text-gray-600 tiny">
                      R$ {item.Valor} * {item.qty} <span className="text-purple-500">R$ {productQty}</span>
                    </h4>
                  </div>
                  <div className="cart-items-function ml-auto">
                    <button className="removeCart text-red-500 justify-end">
                      <i className="fas fa-times"></i>
                    </button>
                    <div className="cartControl flex">
                      <button className="incCart border border-gray-300 text-black p-2 rounded" onClick={() => addToCart(item)}>
                        <i className="fas fa-plus"></i>
                      </button>
                      <button className="desCart bg-gray-100 text-black p-2 rounded" onClick={() => decreaseQty(item)}>
                        <i className="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-total w-1/4 bg-white p-8 rounded ml-10">
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-black">Resumo da compra</h2>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-gray-600 text-sm">Produtos ({quantidadeTotal})</h4>
              <h3 className="text-gray-600 ml-2 text-sm">R${totalPrice}</h3>
            </div>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-gray-600 font-bold text-custom">Valor Total:</h4>
              <h3 className="text-gray-600 ml-2 font-bold text-custom">R${totalPrice}</h3>
            </div>
            <button className="mt-8 py-2 w-full w- bg-green-600 text-white rounded cursor-pointer mx-auto block">
              Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
