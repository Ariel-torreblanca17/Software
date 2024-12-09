function processPayment() {

    const cardNumber = document.querySelector('input[name="card-num"]').value;
    const cardHolderName = document.querySelector('input[name="name"]').value;
    const expirationDate = document.querySelector('input[name="exp"]').value;
    const cvv = document.querySelector('input[name="cvv"]').value;

    if (!cardNumber || !cardHolderName || !expirationDate || !cvv) {
        alert('Por favor, completa todos los campos.');
        return;
    }

  
    alert('Pago realizado con éxito.');


    window.location.href = 'ejemplo.html';
}
