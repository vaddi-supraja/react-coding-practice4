// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="container1">
        <div className="container2">
          <h1 className="heading">
            Bab ate <span className="span">{mango}</span> mangoes
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <img
              className="image"
              alt="mango"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            />
            <button className="button" type="button" onClick={this.onMango}>
              Eat Mango
            </button>
          </div>
          <div className="fruits-container">
            <img
              className="image"
              alt="banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
            <button className="button" type="button" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
