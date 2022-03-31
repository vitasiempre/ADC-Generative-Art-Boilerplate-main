import React, { Component } from 'react'

import Button from '../components/Button'
import ButtonSet from '../components/ButtonSet'

import { generateText } from "../packs/text_generator.js"
import { generateGrid, gridModule } from "../packs/grid_generator.js"
import { generateDesign} from "../packs/design_generator.js"
import {sample, getRandomArbitrary} from "../packs/utilities.js"



const colors = ['black', 'pink', 'grey', "#4000C7"]
const backcolors = ['black', 'pink', "#4000C7"]


// const Generate = (frame) => {
//
//   function createCircle(frame) {
//     const circleElement = document.createElement('div')
//     circleElement.classList.add('circle')
//
//     const left = Math.floor(Math.random() * (frame.clientWidth / gridModule)) * gridModule
//     const top = Math.floor(Math.random() * (frame.clientHeight / gridModule)) * gridModule
//
//     circleElement.style.top = [top, 'px'].join('')
//     circleElement.style.left = [left, 'px'].join('')
//     circleElement.style.width = [gridModule, 'px'].join('')
//     circleElement.style.height = [gridModule, 'px'].join('')
//     circleElement.style.backgroundColor = sample(colors)
//
//     frame.appendChild(circleElement)
//   }
//
//   generateGrid(frame)
//
//   for (var i = 0; i < 20; i++) {
//     createCircle(frame)
//   }
//
//   generateText(frame)
//
//   // console.log(this.frame.current)
//   // let fire = "fire"
//   return (
//       <h1>frame</h1>
//   )
//
//
// }










export default class Artboard extends React.Component {
  constructor(props) {
    super(props)
    this.artboard = React.createRef();
    this.frame = React.createRef();
    this.state = {
      width: 0,
      height: 0
    }
  }


  componentDidMount(){
    const { frame, frames } = this.props
    const proportions = frames[frame.type].proportions
    const artboardWidth = this.artboard.current.getBoundingClientRect().width
    const artboardHeight = this.artboard.current.getBoundingClientRect().height
    let frameWidth = 0
    let frameHeight = 0

    if (proportions.width > proportions.height) {
      console.log("hor");
    } else {
      console.log("ver");
      frameHeight = artboardHeight - 30
      frameWidth = artboardHeight / 16 * 9 - 30
    }

    this.setState({
      width: frameWidth,
      height: frameHeight
    })

    // console.log(this.frame.current)
  }



  render() {
    const { artboard, frame } = this.props
    const { width, height } = this.state
    // const iFrame = useRef

    return (
      <div className="Artboard" style={{backgroundColor: "#DDDDDD"}} ref={this.artboard}>
        <div className="FrameWrapper" style={{width: width + "px", height: height + "px", overflow: "clip"}}>
          <div className="Frame" ref={this.frame} style={{backgroundColor: frame.backgroundColor, width: width + "px", height: height + "px"}} onClick={() => generateDesign(this.frame.current)}>
          </div>
        </div>
      </div>
    )



  }
}

// generate должен быть компонентом тут
// реальную ширину и высоту фрейма создавать за пределами экрана и сохранять ее
