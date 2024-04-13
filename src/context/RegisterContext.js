import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  isRegister: false,
  errorMsg: false,
  changeName: () => {},
  changeTopic: () => {},
  changeRegistrationStatus: () => {},
  changeError: () => {},
})

export default RegisterContext
