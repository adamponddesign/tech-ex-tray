import React from 'react'
import ReactDOM from 'react-dom'
// require.context('../images', true, /\.svg$/)

import './style.scss'

import UserParent from './components/UserParent'

// function ftAndInchesToCm(feet, inches) {
//   return 2
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <img id="logo" src="https://i.imgur.com/KRCC7xH.png" alt="Tray Logo" />
        <UserParent />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
