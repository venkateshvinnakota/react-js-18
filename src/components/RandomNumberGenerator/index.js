import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onRandomNumber = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="randomNumberContainer">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onRandomNumber}
          >
            Generate
          </button>
          <p className="result">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
