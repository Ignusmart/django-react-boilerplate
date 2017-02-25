import React from 'react'
import ReactDOM from 'react-dom'

class SecondContainer extends React.Component {
    render() {
      return (
        <h1> Hello, From second container! </h1>
      )
    }
}

ReactDOM.render(<SecondContainer />, document.getElementById('root'));