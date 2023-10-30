import React from "react";
import "./UserHeader.css";
import logo from "../../components/assets/images/logo-site.png"
import { Link } from 'react-router-dom';


const UserHeader = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className='logo w-full py-2 ml-4'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserHeader;
