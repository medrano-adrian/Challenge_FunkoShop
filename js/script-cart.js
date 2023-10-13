// Función para manejar la funcionalidad de incremento y decremento
function setupQuantityControls(inputId, incrementBtnId, decrementBtnId) {
    const quantityInput = document.getElementById(inputId);
    const incrementButton = document.getElementById(incrementBtnId);
    const decrementButton = document.getElementById(decrementBtnId);
  
    incrementButton.addEventListener('click', function () {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    });
  
    decrementButton.addEventListener('click', function () {
      if (parseInt(quantityInput.value) > 0) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
      }
    });
  }
  
  // Configura la funcionalidad para el primer conjunto
  setupQuantityControls('quantity-one', 'increment-one', 'decrement-one');
  
  // Configura la funcionalidad para el segundo conjunto
  setupQuantityControls('quantity-two', 'increment-two', 'decrement-two');