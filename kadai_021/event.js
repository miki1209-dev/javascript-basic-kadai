const clickBtn = document.getElementById('btn');
console.log(clickBtn);
const changeText = document.getElementById('text');
console.log(changeText);

const asyncText = () => {
  setTimeout(() => {
    changeText.textContent = 'ボタンをクリックしました';
  }, 2000)
}

clickBtn.addEventListener('click', asyncText);

