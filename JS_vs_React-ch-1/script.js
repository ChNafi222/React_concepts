const firstBasket  = document.querySelector(' .basket-1 span');
const secondBasket  = document.querySelector(' .basket-2 span');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const totalApples = 10;

let secondBasketAppleCount = 0;

let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightArrow.addEventListener('click',() =>{
    if(firstBasketAppleCount > 0 )
    {
    firstBasketAppleCount--
    firstBasket.innerText = firstBasketAppleCount // update the DOM
    secondBasketAppleCount++
    secondBasket.innerText = secondBasketAppleCount
    }
})

leftArrow.addEventListener('click',() =>{
    if(secondBasketAppleCount > 0 )
    {
    firstBasketAppleCount++
    firstBasket.innerText = firstBasketAppleCount // update the DOM
    secondBasketAppleCount--
    secondBasket.innerText = secondBasketAppleCount
    }
})


// above problem solved - interactive programming- tell the browser to update values in DOM


// vs
//React benefits
// React is a declarative programming - to need to update values
// component based architecture- 
// single-page application - once loaded then navigate to another page so it will not reload



