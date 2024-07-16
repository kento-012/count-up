// const counter = document.querySelector('.counter');
// console.log(parseInt(counter.textContent) + 1);


const countupButton = document.querySelector('.countup');
countupButton.addEventListener('click', function(){
    const counter = document.querySelector('.counter');
    counter.textContent = parseInt(counter.textContent) + 1;
})