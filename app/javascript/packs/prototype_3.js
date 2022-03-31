const colors = ['#E10957', '#396F19']
const faceQuantity = [4, 5, 6, 8, 10, 12, 16]
const faces = ['face-white', 'face-pink', 'face-black']
const circleTypes = {
  red: ['red', 100,200,1, 1],
  green: ['green', 100,200,1, 1],
  greenWhite: ['greenWhite', 100,200,1, 1]
}


function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function createCircle(frame, settings) {
  const circleElement = document.createElement('div')
  circleElement.classList.add('circle')

  const left = getRandomArbitrary(-100, 400)
  const top = getRandomArbitrary(-100, 800)
  const size = getRandomArbitrary(60, 200)
  const rotate = getRandomArbitrary(settings[1], settings[2])
  const zIndex = getRandomArbitrary(settings[3], settings[4])

  circleElement.style.top = [top, 'px'].join('')
  circleElement.style.left = [left, 'px'].join('')
  circleElement.style.width = [size, 'px'].join('')
  circleElement.style.height = [size, 'px'].join('')
  circleElement.style.transform = ['rotate(', rotate, 'deg)'].join('')
  circleElement.classList.add(sample(faces))
  circleElement.style.backgroundColor = sample(colors)

  frame.appendChild(circleElement)
}

function generateStory() {
  createCircle(frame, circleTypes['red'])

}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_3')
  const frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)
  generateStory(frame)

})
