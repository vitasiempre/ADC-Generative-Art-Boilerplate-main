import { gridModule } from "./grid_generator.js"

const texts = [
  "Привет! Как дела?",
  "Bonjour",
  "Hello",
  "Auf wiedersehen, meine Liebe",
  "Ça va bien! Merci! Et comment allez-vous?",
  "Et tu, Brut?"
]

function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

const textAlign = [
  'left', 'center'
]

// определить количество строк по высоте элемента
// сделать content-editable и потом сделать фокус, там можно будет узнать место каретки

function generateText(frame) {
  var text = sample(texts)
  const length = text.length
  var textSymbolIndex = 0

  // Вставка непереносимых пробелов
  for (var i = 0; i < text.length; i++) {
    if (text[i] == ',') {
      i = i + 2
    } else if (text[i] != ' ') {
      textSymbolIndex++
      // console.log(textSymbolIndex);
    } else if (textSymbolIndex <= 3) {
      // console.log("NBSP");
      textSymbolIndex = 0
      text = text.slice(0, i) + '\xa0' + text.slice(i + 1, text.length)
      i++
    } else {
      // console.log("Break");
      textSymbolIndex = 0
      i++
    }
  }


  const div = document.createElement('div')
  div.innerText = text

  // Форматирование текста
  div.classList.add('text')
  div.style.textAlign = sample(textAlign)
  div.style.display = "block"
  div.style.width = "auto"
  // if (text.length < 10) {  div.style.fontSize = '220px'  }
  // if (text.length < 15) {  div.style.fontSize = '180px'  }
  // if (text.length > 15) {  div.style.fontSize = '120px'  }
  // if (text.length > 25) {  div.style.fontSize = '100px'  }
  // if (text.length > 35) {  div.style.fontSize = '88px'  }
  let rect = div.getBoundingClientRect()
  let w = rect.clientWidth
  let resize = w / frame.clientWidth
  // console.log(div.getBoundingClientRect());
  div.style.transform = `scale(${resize})`
  //

  div.style.top = [Math.floor(Math.random() * (frame.clientHeight / gridModule)) * gridModule].join('')

  frame.appendChild(div)
  // console.log(div.style.fontSize);
  // console.log(length);
}

export { generateText }
