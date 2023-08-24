import {withRouter} from 'react-router-dom'
import DataContext from '../../context/DataContext'
import './index.css'

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

const Register = props => (
  <DataContext.Consumer>
    {value => {
      const {
        userName,
        userOption,
        showErrorMsg,
        onChangeTheSelectedValue,
        onChangeUserInput,
        validateForm,
        registrationMsg,
      } = value

      const getTheUserName = event => {
        onChangeUserInput(event)
      }

      const onChangeTheValue = event => {
        onChangeTheSelectedValue(event)
      }

      const validateError = event => {
        event.preventDefault()
        const {history} = props
        if (userName !== '' && userOption !== '') {
          history.replace('/')
        }
        validateForm()
      }

      return (
        <>
          <nav>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
              alt="website logo"
            />
          </nav>
          <div className="myCls">
            <form
              style={{display: 'flex', alignItems: 'center'}}
              onSubmit={validateError}
            >
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'self-start',
                }}
              >
                <h1>Let us join</h1>
                <label htmlFor="nameFor">NAME</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="nameFor"
                  value={userName}
                  onChange={getTheUserName}
                />
                <label htmlFor="df">TOPICS</label>
                <select value={userOption} onChange={onChangeTheValue}>
                  {topicsList.map(eachItem => (
                    <option value={eachItem.id} key={eachItem.id}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit">Register Now</button>
                {showErrorMsg ? <p>Please enter your name</p> : null}
              </div>
            </form>
          </div>
        </>
      )
    }}
  </DataContext.Consumer>
)

export default withRouter(Register)
