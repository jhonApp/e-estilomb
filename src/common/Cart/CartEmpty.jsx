import { Link } from 'react-router-dom';
import logo from "../../components/assets/images/SacolaVazia.png"
import "./CartHeader.css";

const CartEmpty = () => {
    return (
      <>
        <div className="w-full h-96 bg-slate-300 flex flex-col items-center justify-center">
            <div className="w-1/4 max-w-xs">
                <p className='text-center font-bold text-lg mb-1'>Sua sacola está vazia</p>
                <button className="py-2 mb-5 w-full bg-sky-600 text-white rounded cursor-pointer">
                    <Link to="/">
                        Ir para a página inicial
                    </Link>
                </button>
            </div>
        </div>
      </>
    );
  };
  
  export default CartEmpty;