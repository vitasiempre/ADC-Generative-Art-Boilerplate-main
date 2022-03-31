function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export {sample}
export {getRandomArbitrary}
