import React, { Component } from 'react'
import Button from '../components/Button'
import ButtonSet from '../components/ButtonSet'
import Artboard from '../components/Artboard'
import Editor from '../containers/Editor'
import Nav from '../containers/Nav'
import {sample, getRandomArbitrary} from "../packs/utilities.js"
const backcolors = ['black', 'pink', "#4000C7", "red", "gray"]
import { generateDesign} from "../packs/design_generator.js"

export default class Screen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      artboard: {
        backgroundColor: sample(backcolors)
      },
      frame: {
        type: "story",
        backgroundColor: sample(backcolors)
      }
    }
  }

  componentDidMount(){
    console.log("hey");
  }

  render() {
    const { artboard, frame  } = this.state

    return (
      <div>
        <Nav />
        <Editor />
      </div>
    )
  }
}
