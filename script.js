const apiKey = '0563b293e365ae308f8820ce';
const apiURL = `https://v6.exchangerate-api.com/v6/0563b293e365ae308f8820ce/latest/USD`;

let exchangeRates = {};

window.onload = function () {
  loadExchangeRates();
};

function loadExchangeRates() {
  const loadingDiv = document.getElementById('loading');
  loadingDiv.style.display = 'block';

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      exchangeRates = data.conversion_rates;
      populateDropdowns(exchangeRates);
      loadingDiv.style.display = 'none';
    })
    .catch(error => {
      console.error('Error fetching exchange rates:', error);
      alert('Failed to fetch exchange rates. Please try again later.');
      loadingDiv.style.display = 'none';
    });
}

function populateDropdowns(rates) {
  const fromCurrencyDropdown = document.getElementById('fromCurrency');
  const toCurrencyDropdown = document.getElementById('toCurrency');

  for (let currency in rates) {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.text = currency;
    fromCurrencyDropdown.add(option1);

    const option2 = document.createElement('option');
    option2.value = currency;
    option2.text = currency;
    toCurrencyDropdown.add(option2);
  }

  fromCurrencyDropdown.value = 'USD'; // Default currency
  toCurrencyDropdown.value = 'EUR'; // Default currency
}

function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (amount === '' || isNaN(amount)) {
    alert('Please enter a valid amount.');
    return;
  }

  if (fromCurrency === toCurrency) {
    document.getElementById('result').textContent = amount;
    return;
  }

  const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
  document.getElementById('result').textContent = convertedAmount.toFixed(2);
}
