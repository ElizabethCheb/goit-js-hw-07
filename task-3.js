document.getElementById('name-input').addEventListener('input', function() {
  var inputValue = this.value.trim();
  var outputSpan = document.getElementById('name-output');
  if (inputValue === "") {
      outputSpan.textContent = "Anonymous";
  } else {
      outputSpan.textContent = inputValue;
  }
});
