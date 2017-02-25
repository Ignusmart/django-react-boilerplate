import React from 'react'
import ReactDOM from 'react-dom'

class FirstContainer extends React.Component {
    render() {
      return (
        <h1> Hello, From first container! </h1>
      )
    }
}

ReactDOM.render(<FirstContainer />, document.getElementById('root'));