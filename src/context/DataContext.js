import React from 'react'

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
const DataContext = React.createContext({
  userName: '',
  userOption: topicsList[0].id,
  onChangeTheSelectedValue: () => {},
  onChangeUserInput: () => {},
  validateForm: () => {},
  showErrorMsg: '',
  registrationMsg: '',
})

export default DataContext
