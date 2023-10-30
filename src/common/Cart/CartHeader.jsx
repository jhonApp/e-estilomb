import React, { useState } from "react";
import "./CartHeader.css";
import { TiTick } from "react-icons/ti";
import logo from "../../components/assets/images/logo-site.png"
import { Link } from 'react-router-dom';


const CartHeader = () => {
  const steps = ["Sacola", "Endereço", "Pagamento", "Finalizado"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between">
        <div className='logo w-full py-2 ml-4'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className="flex py-5 mr-4">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500 mt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

export default CartHeader;
