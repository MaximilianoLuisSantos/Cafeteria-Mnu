const form = document.querySelector('form');

document.addEventListener('DOMContentLoaded', function() {

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'confirm.html';
  });
});