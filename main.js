// const counter = document.querySelector('.counter');
// console.log(parseInt(counter.textContent) + 1);


const countupButton = document.querySelector('.countup');
const countdownButton = document.querySelector('.countdown');
const resetButton = document.querySelector('.reset');

// カウントアップ処理
countupButton.addEventListener('click', function () {
    const counter = document.querySelector('.counter');
    counter.textContent = parseInt(counter.textContent) + 1;
}, false);

// カウントダウン処理
countdownButton.addEventListener('click', function () {
    const counter = document.querySelector('.counter');
    counter.textContent = parseInt(counter.textContent) - 1;
}, false);

// リセット処理
resetButton.addEventListener('click', function () {
    const counter = document.querySelector('.counter');
    counter.textContent = 0;
}, false);