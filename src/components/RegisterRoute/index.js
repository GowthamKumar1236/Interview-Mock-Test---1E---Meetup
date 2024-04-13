import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import {
  RegistrationContainer,
  RegisterFormContainer,
  Image,
  Form,
  FormHeading,
  Label,
  Input,
  Select,
  Options,
  FormButton,
  FormError,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterRoute = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        errorMsg,
        changeName,
        changeTopic,
        changeRegistrationStatus,
        changeError,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          changeRegistrationStatus()
        } else {
          changeError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <RegistrationContainer>
            <RegisterFormContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={onSubmitForm}>
                <FormHeading>Let us Join</FormHeading>
                <Label htmlFor="name">NAME</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  placeholder="Your name"
                  onChange={onChangeName}
                />
                <Label htmlFor="topic">TOPICS</Label>
                <Select id="topic" value={topic} onChange={onChangeTopic}>
                  {topicsList.map(eachOption => (
                    <Options key={eachOption.id} value={eachOption.id}>
                      {eachOption.displayText}
                    </Options>
                  ))}
                </Select>
                <FormButton type="submit">Register Now</FormButton>
                {errorMsg === true ? (
                  <FormError>Please enter your name</FormError>
                ) : (
                  ''
                )}
              </Form>
            </RegisterFormContainer>
          </RegistrationContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterRoute
