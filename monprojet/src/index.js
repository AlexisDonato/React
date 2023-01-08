import React from 'react'
import ReactDOM from 'react-dom'

const Greetings = props => {
  return(
    <span>
      Salut <strong>{props.name}</strong> c'est déjà du React !!!
      </span>
  )
}

const App = () => <Greetings name="K6" />

ReactDOM.render(<App />, document.getElementById('app'))