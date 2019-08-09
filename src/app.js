import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import UserParent from './components/UserParent'

// function ftAndInchesToCm(feet, inches) {
//   return 2
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <img id="logo" src="./tray-logo-white.svg" alt="Soul Ponies Logo" />
        <UserParent />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
