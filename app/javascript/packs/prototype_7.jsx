import { generateDesign } from "./design_generator.js"
import {sample, getRandomArbitrary} from "./utilities.js"
import React from 'react'
import ReactDOM from 'react-dom'
import html2canvas from 'html2canvas'
import Screen from '../containers/Screen'


document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Screen />,
    document.body.appendChild(document.createElement('div'))
    // container.appendChild(frame),
    // generateDesign(frame)
  )


  // setInterval(function functionName() { generateDesign(frame) }, 3000);


})

function print() {
  const printRef = React.useRef()
  frame.setAttribute('ref', '{printRef}')
}
