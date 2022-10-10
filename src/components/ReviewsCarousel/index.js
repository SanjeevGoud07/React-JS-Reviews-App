// Write your code here
import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  leftBtn = () => {
    const {activeId} = this.state
    if (activeId === 0) {
      this.setState({activeId: 0})
    } else {
      this.setState(prevState => {
        console.log('Left')
        return {activeId: prevState.activeId - 1}
      })
    }
  }

  rightBtn = () => {
    const {activeId} = this.state

    const {reviewsList} = this.props

    const Len = reviewsList.length
    if (activeId === Len - 1) {
      this.setState({activeId: Len - 1})
    } else {
      this.setState(prevState => {
        console.log('Right')
        return {activeId: prevState.activeId + 1}
      })
    }
  }

  render() {
    const {activeId} = this.state
    const {reviewsList} = this.props

    const Len = reviewsList.length
    const source = reviewsList[activeId].imgUrl
    const User = reviewsList[activeId].username
    const Comp = reviewsList[activeId].companyName
    const Desc = reviewsList[activeId].description
    return (
      <div className="BG">
        <h1 className="heading">Reviews</h1>
        <div className="Review">
          <button
            type="button"
            testid="leftArrow"
            className="Icon"
            onClick={this.leftBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="Box">
            <img src={source} alt={User} />
            <p className="Name">{User}</p>
            <p className="Company">{Comp}</p>
            <p className="Description Company">{Desc}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            className="Icon"
            onClick={this.rightBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
