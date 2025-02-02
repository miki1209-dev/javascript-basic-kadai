const clickBtn = document.getElementById('btn');
const displayText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  displayText.textContent = 'ボタンをクリックしました';
})