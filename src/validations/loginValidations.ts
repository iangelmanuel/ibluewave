export const emailValidation = {
  required: {
    value: true,
    message: 'El campo email es requerido'
  },
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
    message: 'El campo email no es valido'
  }
}

export const passwordValidation = {
  required: {
    value: true,
    message: 'El campo contraseña es requerido'
  }
}
