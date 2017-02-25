import React from 'react'
import ReactDOM from 'react-dom'
let styles = require('./FirstContainer.scss');

class FirstContainer extends React.Component {
    render() {
      return (
        <h1 className={styles.title}> Hello, From first container! </h1>
      )
    }
}

ReactDOM.render(<FirstContainer />, document.getElementById('root'));