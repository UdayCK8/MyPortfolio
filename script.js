const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  alert('Message Sent Successfully!');

  form.reset();
});

// Header Shadow Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if(window.scrollY > 50) {
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
});