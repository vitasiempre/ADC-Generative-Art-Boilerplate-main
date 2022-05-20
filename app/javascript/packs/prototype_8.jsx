function init() {
  createCircle('price')
  createCircle('spread')

}


function createCircle(id) {
  const prototype = document.getElementsByClassName('prototype_8')[0]
  const circle = document.createElement('div')
  circle.classList.add('circle')
  circle.id = id
  prototype.appendChild(circle)

}

function changeCircleSize(number, id) {
  const circle = document.getElementById(id)
  circle.style.height = number + 'px'
  circle.style.width = number + 'px'


}

function convertPriceToPixels(price) {
  return Math.floor(price / 100)
}

function convertSpreadToPixels(spread) {
  return Math.floor(spread * 500)
}


document.addEventListener('DOMContentLoaded', () => {


  let exampleSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@aggTrade")

  // {
  //   "e": "aggTrade",  // Event type
  //   "E": 123456789,   // Event time
  //   "s": "BNBBTC",    // Symbol
  //   "a": 12345,       // Aggregate trade ID
  //   "p": "0.001",     // Price
  //   "q": "100",       // Quantity
  //   "f": 100,         // First trade ID
  //   "l": 105,         // Last trade ID
  //   "T": 123456785,   // Trade time
  //   "m": true,        // Is the buyer the market maker?
  //   "M": true         // Ignore
  // }


  exampleSocket.onmessage = function (event) {
  const data = JSON.parse(event.data);
  const p = parseFloat(data.p)
  const number = convertPriceToPixels(p)
  init()
  createCircle('price')
  console.log(p);
}


  // setInterval(function functionName() { generateDesign(frame) }, 3000);


})
