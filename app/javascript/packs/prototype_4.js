const colors = ['#E10957', '#F1D01F']
let gridModule = 0
let vertical = true

function createGrid(frame) {
  if (frame.clientWidth > frame.clientHeight) {
    gridModule = frame.clientHeight / 10
    vertical = false
  } else {
    gridModule = frame.clientWidth / 10
  }
}

function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

function createCircle(frame) {
  const circleElement = document.createElement('div')
  circleElement.classList.add('circle')

  const left = Math.floor(Math.random() * (frame.clientWidth / gridModule)) * gridModule
  const top = Math.floor(Math.random() * (frame.clientHeight / gridModule)) * gridModule

  circleElement.style.top = [top, 'px'].join('')
  circleElement.style.left = [left, 'px'].join('')
  circleElement.style.width = [gridModule, 'px'].join('')
  circleElement.style.height = [gridModule, 'px'].join('')
  circleElement.style.backgroundColor = "white"

  frame.appendChild(circleElement)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_4')
  const frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  createGrid(frame)

  setInterval(function () {
    var circles = document.querySelectorAll('.circle')
    circles.forEach(circle => {
      circle.remove()
    })

    for (var i = 0; i < 20; i++) {
      createCircle(frame)
    }
  }, 1000);

})
