import React, { Component } from 'react'
import Button from '../components/Button'
import ButtonSet from '../components/ButtonSet'
import Artboard from '../components/Artboard'
import {sample, getRandomArbitrary} from "../packs/utilities.js"
const backcolors = ['black', 'pink', "#4000C7", "red", "gray"]
import { generateDesign} from "../packs/design_generator.js"

const frames = {
  square: {
      proportions: {
        width: 1,
        height: 1
      }
  },
  story: {
    proportions: {
      width: 9,
      heigth: 16
    }
  }

}

export default class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      artboard: {
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
      <div className="Editor">
        <div className="add">
          <Button text="Добавить" handleClick={() => this.refs.frame.generateDesign(frame)}/>
          <Button text="Палитра" handleClick={null}/>
        </div>

        <Artboard frames={frames} frame={frame} artboard={artboard} />

        <Button text="Заново" handleClick={() => this.refs.frame.generateDesign(frame)}/>
        <Button text="Сохранить" handleClick={null}/>
      </div>
    )
  }
}
