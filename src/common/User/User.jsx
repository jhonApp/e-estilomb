import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { Link } from 'react-router-dom';
import { login } from '../../api/userAPI';
import Loading from '../../Loading';
import { useHistory } from 'react-router-dom';
import { success as notifySuccess, error as notifyError } from '../../notification/notification'; // Importe ambas as funções success e error
import "./User.css";

const User = () => {
  const history = useHistory();
  const createCookie = (userData) => {
    const expirationTimeInDays = 5;
    const expiration = new Date(new Date().getTime() + expirationTimeInDays * 24 * 60 * 60 * 1000).toUTCString();
    const userDataString = JSON.stringify(userData);
    document.cookie = `userData=${userDataString}; expires=${expiration}; path=/`;
    return userDataString;
  };
  const [loading, setLoading] = useState(false);
  const {
      values,
      errors,
      touched,
      isSubmitting,
      setFieldValue,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async (formValues, actions) => {
        setLoading(true);
        try {
          const response = await login(formValues);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if(response.Status != 200){
            notifyError("Usuário Inválido");
          }else{
            notifySuccess("Login efetuado com sucesso.");
            const userDataString = createCookie(response.Data.data);
            if(userDataString.isAdmin == 1){
                history.push('/OptionAdmin');
            }else{
              history.push('/');
            }
          }
        } catch (error) {
          notifyError(error);
        } finally {
          setLoading(false);
        }
      },
  });

  return (
    <>
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <div className="p-10 bg-white w-6/12 rounded-xl shadow-lg -mt-28">
          <h1 className="text-3xl font-semibold mb-1">Que bom ter ver por aqui!</h1>
          <p className="font-medium text-base text-gray-500 mb-8">Acesse com seu login ou cadastre-se!</p>
          {loading && <Loading />} {/* Render the loading overlay when loading is true */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-6">
              <div className="relative">
                <input
                  className="w-full border border-solid border-gray-300 rounded-xl p-3 pl-3 focus:outline-none"
                  placeholder="Insira seu email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="absolute left-3 -mt-3 bg-white font-medium text-gray-500">Email</span>
              </div>
              {touched.email && errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
            </div>
            {/* Senha */}
            <div className="mb-6">
              <div className="relative">
                <input
                  className="w-full border border-solid border-gray-300 rounded-xl p-3 pl-3 focus:outline-none"
                  placeholder="Insira sua senha"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="absolute left-3 -mt-3 bg-white font-medium text-gray-500">Senha</span>
              </div>
              {touched.password && errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Lembrar da senha</label>
              </div>
              <button className="text-purple-500 hover:underline">Esqueci a senha</button>
            </div>
            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-500 text-white rounded-xl p-3 hover:bg-purple-600 focus:outline-none">
                Entrar
            </button>
          </form>
          <button className="w-full border-solid border-2 border-purple-500 text-purple-500 rounded-xl p-3 mt-4 focus:outline-none">
              <Link to="/SignUp">
                  Cadastre-se
              </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
