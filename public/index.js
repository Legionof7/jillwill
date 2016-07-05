document.addEventListener('DOMContentLoaded', function() {
  var typeInputs = [
    'workers',
    'the environment',
    'me'
  ];

  var typeWidths = [
    150,
    320,
    60
  ];

  var intervalDurationMs = 3048;
  var typeInput = document.querySelector('h1 .type-input');
  var typeInputContainer = document.querySelector('h1 .type-input-container');
  var currentIndex = 0;

  setTypeInput();
  typeInput.addEventListener('animationiteration', function() {
    setTypeInput();
  });

  function setTypeInput() {
    var newInput = typeInputs[currentIndex];
    typeInput.textContent = newInput;
    typeInputContainer.style.width = `${typeWidths[currentIndex]}px`;
    currentIndex++;

    if (currentIndex > typeInputs.length - 1) {
      currentIndex = 0;
    }
  }
});
