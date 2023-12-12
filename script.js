function generateNumbersWithDelay() {
    var contactInfoInput = document.getElementById('contactInfo');
    var siteInput = document.getElementById('site');
    var quantityInput = document.getElementById('quantity');
    
    var contactInfo = contactInfoInput.value.trim();
    var site = siteInput.value.trim();
    var quantity = parseInt(quantityInput.value);

    if (contactInfo === '' || site === '' || isNaN(quantity) || quantity < 1 || quantity > 10) {
        alert('Por favor, preencha todas as informações corretamente.');
        return;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    var i = 0;

    function generateNumber() {
        if (i < quantity) {
            var randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            resultDiv.innerHTML += `Cota: ${randomNumber}, Contato: ${contactInfo}, Site: ${site} <br>`;
            i++;
            setTimeout(generateNumber, 3000); // 3 segundos de atraso
        }
    }

    generateNumber();
}
