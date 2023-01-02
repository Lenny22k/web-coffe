const navBar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('active')
  cartItem.classList.remove('active')
  searchForm.classList.remove('active')
})

const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')

cartBtn.addEventListener('click', () => {
  cartItem.classList.toggle('active')
  navBar.classList.remove('active')
  searchForm.classList.remove('active')
})

const searchForm = document.querySelector('.search-form')
const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('active')
  navBar.classList.remove('active')
  cartItem.classList.remove('active')
})

window.onscroll = () => {
  navBar.classList.remove('active')
  cartItem.classList.remove('active')
  searchForm.classList.remove('active')
}
