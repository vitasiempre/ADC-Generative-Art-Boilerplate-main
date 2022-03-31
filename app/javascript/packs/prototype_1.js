const colors = ['#E10957', '#F1D01F']

function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function createCircle(frame) {
  const circleElement = document.createElement('div')
  circleElement.classList.add('circle')

  const left = getRandomArbitrary(-100, 400)
  const top = getRandomArbitrary(-100, 800)
  const size = getRandomArbitrary(60, 200)

  circleElement.style.top = [top, 'px'].join('')
  circleElement.style.left = [left, 'px'].join('')
  circleElement.style.width = [size, 'px'].join('')
  circleElement.style.height = [size, 'px'].join('')
  circleElement.style.backgroundColor = sample(colors)

  frame.appendChild(circleElement)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_1')
  const frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)
  for (var i = 0; i < 50; i++) {
    createCircle(frame)
  }

})
