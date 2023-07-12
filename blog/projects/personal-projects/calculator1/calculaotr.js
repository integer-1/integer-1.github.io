// This is the code that makes the calculator.
// The value was obtained from HTML and the numbers and operators are operated,
// and the remaining values were calculated directly by function.

console.log('Operate Calculator')

let display = document.getElementById('display')

document.querySelector('.clear').addEventListener('click', clearDisplay)

document.querySelectorAll('.number').forEach((button) =>
  button.addEventListener('click', function () {
    appendValue(this.value)
  })
)
document.querySelector('.decimal').addEventListener('click', function () {
  appendValue(this.value)
})

document.querySelector('.equal').addEventListener('click', calculate)

document.querySelectorAll('.operator').forEach((button) =>
  button.addEventListener('click', function () {
    appendValue(this.value)
  })
)

document.querySelector('.root').addEventListener('click', function () {
  display.value = Math.sqrt(display.value)
})

document.querySelector('.percentage').addEventListener('click', function () {
  // if (display.value.match('%')) {
  display.value = display.value * 0.01
  // }else {
  //   display.value = (display.value *100) + '%'
  // }
})

document.querySelector('.plusOrMinus').addEventListener('click', function () {
  display.value = -display.value
})

function appendValue(value) {
  display.value += value
}

function clearDisplay() {
  display.value = ''
}

function calculate() {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = 'Error'
  }
}
