import styled from 'styled-components'

export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 70vh;
`

export const Image = styled.img`
  width: 40%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  margin-top: 20px;
`

export const FormHeading = styled.h1`
  font-family:'Roboto';
  color: #334155;
  font-size: 50px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 20px;
`

// export const InputContainer = styled.div`
// display:flex;
// flex-direction:column;
// align-items:flex-start;
// `

export const Label = styled.label`
  font-family:'Roboto';
  color: #7b8794;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`

export const Input = styled.input`
  font-family:'Roboto';
  color: #7b8794;
  font-size: 16px;
  height: 40px;
  width: 50%;
  outline: none;
  border: 1px solid #7b8794;
  margin-bottom: 30px;
  padding-left: 15px;
`

export const Select = styled.select`
  font-family:'Roboto';
  color: #334155;
  background-color: transparent;
  font-size: 17px;
  font-weight: 500;
  height: 40px;
  width: 50%;
  outline: none;
  border: 1px solid #7b8794;
  margin-bottom: 30px;
  padding-left: 15px;
`

export const Options = styled.option`
  font-family:'Roboto';
  color: #334155;
  font-size: 18px;
`

export const FormButton = styled.button`
  font-family:'Roboto';
  color: #ffffff;
  background-color: #3b82f6;
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const FormError = styled.p`
  font-family:'Roboto';
  color: #ff0b37;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  margin-left: 5px;
`
