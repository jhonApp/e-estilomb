
export const formatPhoneNumber = (originalValue) => {
    let formattedValue = originalValue.replace(/\D/g, '');
    if (formattedValue.length > 2) {
      formattedValue = `(${formattedValue.slice(0, 2)})${formattedValue.slice(2)}`;
    }
    if (formattedValue.length >= 10) {
      formattedValue = `${formattedValue.slice(0, 9)}-${formattedValue.slice(9, 13)}`;
    }
    return formattedValue;
};

export const formatCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};
  
  