import React from "react";
import "./User.css";

const User = () => {
  return (
    <>
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="p-10 bg-white w-6/12 rounded-xl shadow-lg -mt-28">
          <h1 className="text-3xl font-semibold mb-1">Que bom ter ver por aqui!</h1>
          <p className="font-medium text-base text-gray-500 mb-8">Acesse com seu login ou cadastre-se!</p>
          <div className="mb-6">
            <div className="relative">
              <input
                className="w-full border border-solid border-gray-100 rounded-xl p-3 pl-3 focus:outline-none"
                placeholder="Insira seu email"
              />
              <span className="absolute left-3 -mt-3 bg-white font-medium text-gray-500">Email</span>
            </div>
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                className="w-full border border-solid border-gray-100 rounded-xl p-3 pl-3 focus:outline-none"
                placeholder="Insira sua senha"
                type="password"
              />
              <span className="absolute left-3 -mt-3 bg-white font-medium text-gray-500">Senha</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Lembrar da senha</label>
            </div>
            <button className="text-purple-500 hover:underline">Esqueci a senha</button>
          </div>
          <button className="w-full bg-purple-500 text-white rounded-xl p-3 hover:bg-purple-600 focus:outline-none">
            Entrar
          </button>
          <button className="w-full border-solid border-2 border-purple-500 text-purple-500 rounded-xl p-3 mt-4 focus:outline-none">
            Cadastre-se
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
