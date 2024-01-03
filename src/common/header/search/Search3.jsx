// import React, { useState, useEffect } from 'react';
// import logo from "../../components/assets/images/logo-site.png"
// import { Link } from "react-router-dom"

// const Search = ({ CartItem, productItems, setSearchResults }) => {
//   const [search, setSearch] = useState('');
//   const [userData, setUserData] = useState({});
//   const [isMenuOpen, setIsMenuOpen] = useState(false);


//   function getCookie(name) {
//     const cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//       const [cookieName, cookieValue] = cookie.split('=');
//       if (cookieName.trim() === name) {
//         return decodeURIComponent(cookieValue);
//       }
//     }
//     return null;
//   }

//   const handleSearchChange = (e) => {
//     const searchTerm = e.target.value;

//     // Lógica de filtro com base em CartItem e search
//     const filteredResults = productItems.filter(item => {
//       return item.Nome.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     setSearch(searchTerm);
//     setSearchResults(filteredResults);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const searchElement = document.querySelector(".search");
//       if (searchElement) {
//         searchElement.classList.toggle("active", window.scrollY > 100);
//       }
//     };

//     const userDataString = getCookie('userData');
//     if (userDataString) {
//       const parsedUserData = JSON.parse(userDataString);
//       setUserData(parsedUserData);
//     }
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // Não é necessário adicionar search, CartItem ou setSearchResults como dependências aqui

//   return (
//     <>
//       <section className='search'>
//         <div className='container flex justify-between'>
//           <div className='logo w-1/5'>
//             <img src={logo} alt='' />
//           </div>
//           <div className='search-box flex w-4/5 h-12 mt-5 ml-4 items-center border border-black rounded-full border-opacity-25'>
//             <i className='fa fa-search w-1/12 text-center text-lg opacity-50'></i>
//             <input
//               type='text'
//               placeholder='Buscar produto...'
//               value={search}
//               onChange={handleSearchChange}
//               className='w-10/12  outline-none placeholder-base'
//             />
//             <span className='w-1/6 opacity-50 border-l border-black p-2'></span>
//           </div>

//           <div className='icon flex w-1/4 items-center justify-end'>
//           <div className='user flex items-center'>
            
//               {userData.name ? (
//                 <>
//                 <div className='user_txt ml-2 flex flex-col items-start'>
//                   <span className='text-xs'>Bem-vindo!</span>
//                   <span className='text-xs font-semibold'>
//                     {userData.name}
//                   </span>
//                   <div className="dropdown">
//                     <i className='fa fa-user icon-circle w-12 h-12 line-height-12 text-center bg-gray-200 rounded-full'></i>
//                     <ul className={`absolute mt-2 py-2 bg-white border border-gray-300 shadow-md rounded w-40 ${isMenuOpen ? 'block' : 'hidden'} z-20`}
//                       onClick={() => { setIsMenuOpen(false); }}
//                     > 
//                       <li className="hover:bg-gray-100 px-4 py-2"><Link to="/myConta">Minha Conta</Link></li>
//                       <li className="hover:bg-gray-100 px-4 py-2"><Link to="/listaDesejos">Favoritos</Link></li>
//                       <li className="hover:bg-gray-100 px-4 py-2"><Link to="/meusPedidos">Meus Pedidos</Link></li>
//                       <li className="hover:bg-gray-100 px-4 py-2"><Link to="/sair" className="text-red-500">Sair</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//                 </>
//               ) : (
//                 <>
//                   <div className='user_txt ml-2 flex flex-col items-start'>
//                     <span className='text-xs'>Bem-vindo!</span>
//                     <span className='text-xs font-semibold whitespace-pre'>
//                       Entre ou<br/>cadastre-se
//                     </span>
//                     <Link to='/user'>
//                       <i className='fa fa-user icon-circle w-12 h-12 line-height-12 text-center bg-gray-200 rounded-full'></i>
//                     </Link>
//                   </div>
//                 </>
//               )}
//             </div>

//           </div>
//             <div className='cart'>
//               <Link to='/cart'>
//                 <i className='fa fa-shopping-bag icon-circle w-12 h-12 line-height-12 text-center bg-gray-200 rounded-full'></i>
//                 <span className='bg-purple-600 w-6 h-6 text-white rounded-full text-center leading-6'>
//                   {CartItem.length === 0 ? '0' : CartItem.length}
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Search;
