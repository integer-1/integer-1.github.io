//Menubar 관련

let homeButton = document.getElementById('home')
homeButton.addEventListener('click', (event) => {
  window.location.href = '../index.html'
})

let github = document.getElementById('icon-github')
github.addEventListener('click', (event) => {
  window.location.href = 'https://github.com/integer-1/'
})

let linkedin = document.getElementById('icon-linkedin')
linkedin.addEventListener('click', (event) => {
  window.location.href = 'https://www.linkedin.com/in/suwon-jeong-225959171/'
})

// let menuButton = document.getElementById('btn')
// menuButton.addEventListener('click', (event) => {
//   document.getElementById('mainText').style.display = 'none'
//   document.getElementById('mainImage').style.display = 'none'
// })

// let noMenuButton = document.getElementById('cancel')
// noMenuButton.addEventListener('click', (event) => {
//   document.getElementById('mainText').style.display = 'block'
//   document.getElementById('mainImage').style.display = 'block'
// })
