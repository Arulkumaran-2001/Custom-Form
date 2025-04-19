document.addEventListener('DOMContentLoaded',() => {
  const selected = document.querySelector('.selected');
  const selectedValue = document.querySelector('.custom-product-selectbox');
  const dropdown = document.querySelector('.dropdown');
  const optionsContainer = document.querySelector('.options');
  const optionsList = document.querySelectorAll('.option');
  selected.addEventListener('click',() => {
    optionsContainer.style.display = optionsContainer.style.display === 'block'?'none' : 'block';
    dropdown.classList.toggle("active");
  });
  optionsList.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedValue.value = option.textContent.trim();
      optionsContainer.style.display = 'none';
      dropdown.classList.remove("active");
    });
  });
  document.addEventListener('click',(e) => {
    if(!e.target.closest('.custom-select-box')) {
      optionsContainer.style.display = 'none';
      dropdown.classList.remove("active");
    }
  });
});