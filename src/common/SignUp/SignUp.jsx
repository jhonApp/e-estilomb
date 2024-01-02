import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { formatPhoneNumber } from '../formats';
import { formatCPF } from '../formats';
import { createUser } from '../../api/userAPI';
import Loading from '../../Loading';
import { success as notifySuccess, error as notifyError } from '../../notification/notification'; // Importe ambas as funções success e error
import "./SignUp.css";

const SignUp = () => {
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
        name: "",
        cpf: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit: async (formValues, actions) => {
        setLoading(true);
        try {
          const usuario = await createUser(formValues);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          notifySuccess("Usuário criado.");
          actions.resetForm();
        } catch (error) {
          notifyError(error);
        } finally {
          setLoading(false);
        }
      },
  });

  const handlePhoneNumberChange = (event) => {
      const formattedValue = formatPhoneNumber(event.target.value);
      setFieldValue('phoneNumber', formattedValue);
  };

  const handleCPFChange = (event) => {
    const formattedValue = formatCPF(event.target.value);
    setFieldValue('cpf', formattedValue);
  };

    return (
        <>
          <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="p-10 bg-white w-6/12 rounded-xl shadow-lg m-7">
              <h1 className="text-3xl font-semibold mb-1">Vamos Iniciar nossa jornada</h1>
              <p className="font-medium text-base text-gray-500 mb-8">Crie seu usuário!</p>
              {loading && <Loading />} {/* Render the loading overlay when loading is true */}
              <form onSubmit={handleSubmit}>
                {/* Nome */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      className="w-full border border-solid border-gray-300 rounded-xl p-3 pl-3 focus:outline-none"
                      placeholder="Insira seu nome"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="absolute left-3 -mt-3 bg-white font-medium text-gray-500">Nome</span>
                  </div>
                  {touched.name && errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                </div>
                {/* Celular */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      className="w-full border border-solid border-gray-300 rounded-xl p-3 pl-3 focus:outline-none"
                      placeholder="Insira seu celular"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handlePhoneNumberChange}
                      onBlur={handleBlur}
                    />
                    <span className="absolute left-3 -mt-3 bg-white font-medium text-gray-500">Celular</span>
                  </div>
                  {touched.phoneNumber && errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber}</p>}
                </div>
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
                {/* CPF */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      className="w-full border border-solid border-gray-300 rounded-xl p-3 pl-3 focus:outline-none"
                      placeholder="Insira seu CPF"
                      name="cpf"
                      value={values.cpf}
                      onChange={handleCPFChange}
                      onBlur={handleBlur}
                    />
                    <span className="absolute left-3 -mt-3 bg-white font-medium text-gray-500">CPF</span>
                  </div>
                  {touched.cpf && errors.cpf && <p className="text-red-500 mt-1">{errors.cpf}</p>}
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
                {/* Confirmação de Senha */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      className="w-full border border-solid border-gray-300 rounded-xl p-3 pl-3 focus:outline-none"
                      placeholder="Confirme sua senha"
                      type="password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="absolute left-3 -mt-3 bg-white font-medium text-gray-500">Confirme a senha</span>
                  </div>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-500 text-white rounded-xl p-3 hover:bg-purple-600 focus:outline-none"
                >
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        </>
      );
};

export default SignUp;
