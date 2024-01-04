import { Link } from "react-router-dom";

const Cart = ({ CartItem }) => (
  <div className='cart'>
    <Link to='/cart'>
      <i className='fa fa-shopping-bag icon-circle w-12 h-12 line-height-12 text-center bg-gray-200 rounded-full'></i>
      <span className='bg-purple-600 w-6 h-6 text-white rounded-full text-center leading-6'>
        {CartItem?.length ?? 0}
      </span>
    </Link>
  </div>
);

export default Cart;
