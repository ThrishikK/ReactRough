import {Component} from 'react'
import Words from '../Words'
import './index.css'

const wordsList = []

class InputElement extends Component {
  state = {
    inputValue: '',
    showWords: false,
  }

  handleInputChange = event => {
    wordsList.push(event.target.value)
    this.setState({inputValue: event.target.value})
  }

  handleDoClick = () => {
    this.setState(prevState => ({
      showWords: !prevState.showWords,
    }))
  }

  render() {
    const {inputValue, showWords} = this.state
    const buttonText = showWords ? 'Undo' : 'Do'
    return (
      <div className="main-container">
        <input
          placeholder="Enter a Word"
          value={inputValue}
          onChange={this.handleInputChange}
          type="text"
        />
        <button
          className="btn-styles"
          onClick={this.handleDoClick}
          type="button"
        >
          {buttonText}
        </button>
        <div className="words-container">
          {showWords && <Words wordsList={wordsList} />}
        </div>
      </div>
    )
  }
}

export default InputElement
