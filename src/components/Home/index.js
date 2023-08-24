import {Link} from 'react-router-dom'
import DataContext from '../../context/DataContext'
import './index.css'

const Home = () => (
  <DataContext.Consumer>
    {value => {
      const {userName, userOption, registrationMsg} = value
      const isTrue = userName !== ''
      return (
        <div>
          <nav>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
              alt="website logo"
            />
          </nav>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isTrue ? (
                <div>
                  <h1>Hello {userName}</h1>
                  <p>welcome to {registrationMsg}</p>
                </div>
              ) : (
                <div>
                  <h1>Welcome to Meetup</h1>
                  <p>Please register for the topic</p>
                  <button type="button">
                    <Link
                      to="/register"
                      style={{color: 'white', textDecoration: 'none'}}
                    >
                      Register
                    </Link>
                  </button>
                </div>
              )}
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </div>
      )
    }}
  </DataContext.Consumer>
)
export default Home
