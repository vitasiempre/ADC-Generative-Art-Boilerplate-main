import React, { PureComponent } from 'react'
import Button from "../components/Button"

export default class ButtonSet extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props

    return (
      <div className="button" onClick={handleClick}>
        {text}
      </div>
    )
  }
}
