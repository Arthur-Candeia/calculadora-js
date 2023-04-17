let main = document.querySelector('main')
let root = document.querySelector(':root')
let switchTheme = document.getElementById('switchTheme')
let input = document.getElementById('input')
let charKeys = document.querySelectorAll('.charKey')
let copy = document.getElementById('copy')
let resultView = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

switchTheme.addEventListener('click', function() {
  if (main.dataset.theme == 'dark') {
    root.style.setProperty('--cor1', '#DAFDBA')
    root.style.setProperty('--cor2', '#9AEBA3')
    root.style.setProperty('--cor4', '#13678A')
    root.style.setProperty('--cor5', '#012030')
    main.dataset.theme = 'light'
  }
  else {
    root.style.setProperty('--cor1', '#012030')
    root.style.setProperty('--cor2', '#13678A')
    root.style.setProperty('--cor4', '#9AEBA3')
    root.style.setProperty('--cor5', '#DAFDBA')
    main.dataset.theme = 'dark'
  }
})

charKeys.forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

input.addEventListener('keydown', function(ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === 'Enter') {
    calculate()
  }
})

document.getElementById('clear').addEventListener('click', function() {
  input.value = ''
  resultView.value = ''
  input.focus()
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
  resultView.value =  'ERROR'
  resultView.classList.add('error')
  const result = eval(input.value)
  resultView.classList.remove('error')
  resultView.classList.add('confirm')
  resultView.value = result
}

copy.addEventListener('click', function(ev) {
  if (copy.innerText == 'Copy' && resultView.className == 'confirm') {
    copy.innerText = 'Copied!'
    copy.classList.add('sucess')
    navigator.clipboard.writeText(resultView.value)
  }
  else {
    copy.innerText = 'Copy'
    copy.classList.remove('sucess')
  }
})
console.log(resultView.className)