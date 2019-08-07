import React from 'react'
import ReactDOM from 'react-dom'

import UserParent from './components/UserParent'

class App extends React.Component {
  render() {
    return (
      <UserParent />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
