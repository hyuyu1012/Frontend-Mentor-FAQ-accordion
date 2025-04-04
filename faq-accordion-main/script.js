  document.querySelectorAll('.faq_box').forEach(faq => {
  const plusBtn = faq.querySelector('.plus');
  const minusBtn = faq.querySelector('.minus');
  const answer = faq.querySelector('.answer'); 

  plusBtn.addEventListener('click', () => {
    answer.style.display = "block";
    plusBtn.style.display = "none";
    minusBtn.style.display = "block";
  });

  minusBtn.addEventListener('click', () => {
    answer.style.display = "none";
    minusBtn.style.display = "none";
    plusBtn.style.display = "block";
  });
});
