const clickBtn = document.getElementById('btn');
const changeText = document.getElementById('text');

const asyncText = () => {
  setTimeout(() => {
    changeText.textContent = 'ボタンをクリックしました';
  }, 2000)
}

clickBtn.addEventListener('click', asyncText);

