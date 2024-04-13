import {Link} from 'react-router-dom'
import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeBgContainer,
  Heading,
  Description,
  Button,
  RegisterImg,
  RegistrationImg,
  RegisterHeading,
  RegisterDescription,
} from './styledComponents'

const HomeRoute = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  const renderRegister = () => (
    <>
      <Heading>Welcome to Meetup</Heading>
      <Description>Please register for the topic</Description>
      <Link to="/register">
        <Button onClick={onClickRegister}>Register</Button>
      </Link>
      <RegisterImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  const renderRegistration = (name, topic) => (
    <>
      <RegisterHeading>Hello {name}</RegisterHeading>
      <RegisterDescription>Welcome to {topic}</RegisterDescription>
      <RegistrationImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value
        return (
          <>
            <Header />
            <HomeBgContainer>
              {isRegister ? renderRegistration(name, topic) : renderRegister()}
            </HomeBgContainer>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default HomeRoute
