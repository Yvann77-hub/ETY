
const options = document.getElementById('options');


options.addEventListener('click', (event) => {
  if (event.target.classList.contains('option')) {
    console.log('Option sélectionnée :', event.target.textContent);
  }
});