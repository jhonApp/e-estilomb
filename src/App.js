import React, { useState, useEffect } from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import CartPage from "./common/Cart/CartPages"
import User from "./common/User/User"
import SignUp from "./common/SignUp/SignUp"
import UserHeader from "./common/User/UserHeader"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Notification from './notification/notification';
import SearchResults from './common/header/search/searchResult';


function App({ initialData }) {

  const [productItems, setProductItems] = useState(initialData);
  const [searchResults, setSearchResults] = useState([]);
  const { shopItems } = Sdata

  useEffect(() => {
    // Use useEffect para atualizar productItems quando initialData mudar
    setProductItems(initialData);
  }, [initialData]);

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.ID === product.ID);
    
    if (productExit) {
      setCartItem(CartItem.map((item) => {
        if (item.ID === product.ID) {
          console.log("Produto já está no carrinho");
          return { ...productExit, qty: productExit.qty + 1 };
        } else {
          return item;
        }
      }));
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.ID === product.ID)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.ID !== product.ID))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.ID === product.ID ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  
  return (
    <>
      <Router>
        <Notification /> {/* Include the Notification component */}
        <Switch>
          <Route path='/cart' exact>
            <CartPage CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/user' exact>
            <UserHeader/>
            <User />
          </Route>
          <Route path='/SignUp' exact>
            <UserHeader/>
            <SignUp />
          </Route>
          <Route path='/busca' render={({ location }) => {
            const searchParams = new URLSearchParams(location.search);
            const query = searchParams.get('q');
            const page = searchParams.get('page');

            return <SearchResults query={query} page={page} addToCart={addToCart}/>;
          }} />
          <Route path='/' exact>
            <Header CartItem={CartItem} productItems={productItems} />
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} searchResults={searchResults}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
