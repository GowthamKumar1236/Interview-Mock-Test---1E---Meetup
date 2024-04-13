import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'

import RegisterContext from './context/RegisterContext'

import './App.css'

class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegister: false,
    errorMsg: false,
  }

  changeName = changeName => {
    this.setState({name: changeName})
  }

  changeTopic = changeTopic => {
    this.setState({topic: changeTopic})
  }

  changeRegistrationStatus = () => {
    this.setState({isRegister: true})
  }
  
  changeError = () => {
    this.setState({errorMsg: true})
  }

  render() {
    const {name, topic, isRegister, errorMsg} = this.state

    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegister,
          errorMsg,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          changeRegistrationStatus: this.changeRegistrationStatus,
          changeError: this.changeError,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
