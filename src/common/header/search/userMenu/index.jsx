import { Link } from "react-router-dom";

const UserMenu = ({ userData, isMenuOpen, setIsMenuOpen }) => {
    return (
      <>
        {userData.name ? (
          <>
            <div className='user_txt ml-2 flex flex-col items-start'>
              <span className='text-xs'>Bem-vindo!</span>
              <span className='text-xs font-semibold'>{userData.name}</span>
            </div>
            <div className='user_txt ml-2 flex flex-col items-start'>
              <div className="dropdown">
                <i className='fa fa-user icon-circle w-12 h-12 line-height-12 text-center bg-gray-200 rounded-full'></i>
                <ul className={`absolute mt-2 py-2 bg-white border border-gray-300 shadow-md rounded w-40 ${isMenuOpen ? 'block' : 'hidden'} z-20`}
                  onClick={() => { setIsMenuOpen(false); }}
                > 
                  <li className="hover:bg-gray-100 px-4 py-2"><Link to="/myConta">Minha Conta</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link to="/listaDesejos">Favoritos</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link to="/meusPedidos">Meus Pedidos</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link to="/sair" className="text-red-500">Sair</Link></li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='user_txt ml-2 flex flex-col items-start'>
              <span className='text-xs'>Bem-vindo!</span>
              <span className='text-xs font-semibold whitespace-pre'> Entre ou<br/>cadastre-se </span>
            </div>
            <div className='user_txt ml-2 flex flex-col items-start'>
              <Link to='/user'>
                <i className='fa fa-user icon-circle w-12 h-12 line-height-12 text-center bg-gray-200 rounded-full'></i>
              </Link>
            </div>
          </>
        )}
      </>
    );
};

export default UserMenu;