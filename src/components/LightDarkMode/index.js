// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    container: 'dark-container',
    heading: 'dark-heading',
    button: 'dark-button',
    buttonContent: 'Light Mode',
  }

  onClickingButton = () => {
    this.setState(prevState => {
      const presentContainer = prevState.container
      if (presentContainer === 'dark-container') {
        return {
          container: 'light-container',
          heading: 'light-heading',
          button: 'light-button',
          buttonContent: 'Dark Mode',
        }
      }
      return {
        container: 'dark-container',
        heading: 'dark-heading',
        button: 'dark-button',
        buttonContent: 'Light Mode',
      }
    })
  }

  render() {
    const {container, heading, button, buttonContent} = this.state
    return (
      <div className="light-dark-bg-container">
        <div className={container}>
          <h1 className={heading}>Click to change mode</h1>
          <button
            type="button"
            className={button}
            onClick={this.onClickingButton}
          >
            {buttonContent}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
