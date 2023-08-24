import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Register from './components/Register/index'
import NotFound from './components/NotFound/index'
import Home from './components/Home/index'
import DataContext from './context/DataContext'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
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
// Replace your code here
class App extends Component {
  state = {
    userName: '',
    userOption: topicsList[0].id,
    showErrorMsg: false,
    registrationMsg: '',
  }

  onChangeTheSelectedValue = event => {
    const objIndex = topicsList.findIndex(obj => obj.id === event.target.value)
    console.log(topicsList[objIndex].displayText)
    this.setState({userOption: event.target.value})
    this.setState({registrationMsg: topicsList[objIndex].displayText})
  }

  onChangeUserInput = event => {
    this.setState({userName: event.target.value})
  }

  validateForm = () => {
    const {userName} = this.state
    if (userName !== '') {
      this.setState({showErrorMsg: false})
      //   {<Redirect to="/">}
    } else if (userName === '') {
      this.setState({showErrorMsg: true})
    }
  }

  render() {
    const {userName, userOption, showErrorMsg, registrationMsg} = this.state
    // const as = showErrorMsg === false
    // if (as) {
    //   return <Redirect to="/" />
    // }
    return (
      <DataContext.Provider
        value={{
          userName,
          userOption,
          showErrorMsg,
          registrationMsg,
          validateForm: this.validateForm,
          onChangeTheSelectedValue: this.onChangeTheSelectedValue,
          onChangeUserInput: this.onChangeUserInput,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </DataContext.Provider>
    )
  }
}

export default App
