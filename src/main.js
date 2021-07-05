import allBooks from './books.json'
import './main.scss'

console.log(allBooks)
console.log(allBooks.data.slice(0,5))
document.addEventListener('DOMContentLoaded',function(){
    const dataSet=20;
    const showBooks = document.getElementById('cards')
    const books = allBooks.data.slice(0,dataSet);
    
    books.forEach(num =>{
        const booksDom= getEachdata(num)
        showBooks.insertAdjacentHTML('beforeend',booksDom)
    })
})

function getEachdata(num) {
   const booksDom =
    `<div class="card">
        <img src="https://images.bwbcovers.com/${num.ImageURL}">
        <div class="title">${num.Title}</div>
        <div class="author">${num.Authors[0]}</div>
        <div class="age">${num.AudienceAge}</div>
        <div class="price">$${num.ListPrice} <span>usd</span></div>
    </div>`
    return booksDom
}