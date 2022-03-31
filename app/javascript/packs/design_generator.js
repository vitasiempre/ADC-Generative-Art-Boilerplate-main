import { generateText } from "./text_generator.js"
import { generateGrid, gridModule } from "./grid_generator.js"
import {sample, getRandomArbitrary} from "./utilities.js"

import synapse1 from '/app/assets/images/synapse-1.svg'
import synapse2 from '/app/assets/images/synapse-2.svg'
import synapse3 from '/app/assets/images/synapse-3.svg'

const colors = ['black', 'pink', 'grey', "#4000C7"]
const backcolors = ['black', 'pink', "#4000C7"]



function createSynapses(frame) {




  const columns = Math.floor(frame.clientWidth / gridModule)
  const rows = Math.floor(frame.clientHeight / gridModule)

  for (var i = 0; i <= (columns / 2 - 2); i++) {
    const synapse = document.createElement('img')
    synapse.classList.add('synapse')

    let randomizer = getRandomArbitrary(1,4)
    switch (randomizer) {
      case 1:
        synapse.src = synapse1
      break
      case 2:
        synapse.src = synapse2
      break
      case 3:
        synapse.src = synapse3
      break
    }

    synapse.style.width = [(gridModule * 2), 'px'].join('')
    synapse.style.height = [(gridModule * 2), 'px'].join('')
    synapse.setAttribute("fill", "red")

    let left = i * 2 * gridModule + gridModule
    let top

    for (var b = 0; b <= (rows / 2 - 2); b++) {
      top = b * gridModule
      console.log('top', top);

      let rotateAngle = Math.floor(getRandomArbitrary(1,4)) * 90
      synapse.style.top = `${top}px`


      frame.appendChild(synapse)
    }
  }
}




function generateDesign(frame) {



  frame.style.backgroundColor = sample(backcolors)

  var circles = document.querySelectorAll('.synapse')
  circles.forEach(circle => {
    circle.remove()
  })

  var textss = document.querySelectorAll('.text')
  textss.forEach(text => {
    text.remove()
  })

  generateGrid(frame)


  createSynapses(frame)


  generateText(frame)

  console.log(gridModule);
}




export { generateDesign }
