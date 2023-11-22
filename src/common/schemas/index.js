import * as yup from "yup"

const passwordRules = /^(?=.*[a-zA-Z]).{5,}$/;

export const isValidCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11) {
    return false; // CPF deve ter 11 dígitos
  }

  // Calcula o dígito verificador do CPF
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.charAt(9))) {
    return false; // Primeiro dígito verificador não é válido
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.charAt(10))) {
    return false; // Segundo dígito verificador não é válido
  }

  return true; // CPF é válido
};

export const basicSchema = yup.object().shape({
    name: yup.string().min(3, "O nome deve ter pelo menos 3 caracteres").required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    cpf: yup
      .string()
      .test("valid-cpf", "CPF inválido", function (value) {
        return isValidCPF(value);
      })
      .required("Campo Obrigatório"),
    phoneNumber: yup
      .string()
      .matches(/^\(\d{2}\)\d{4,5}-\d{4}$/, 'O formato do número é inválido')
      .required('Campo Obrigatório'),
    password: yup
      .string()
      .min(5, "A senha deve ter pelo menos 5 caracteres.")
      .matches(passwordRules, "A senha deve ter pelo menos 5 caracteres e incluir pelo menos uma letra.")
      .required('Campo Obrigatório'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha deve ser semelhante a anterior.")
      .required('Campo Obrigatório'),
});