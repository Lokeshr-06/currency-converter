const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultContainer = document.getElementById('result');
const convertedAmountEl = document.getElementById('converted-amount');

const exchangeRates = {
  USD: { USD: 1, EUR: 0.85, INR: 84.5, AED: 3.67 },
  EUR: { USD: 1.18, EUR: 1, INR: 88.5, AED: 4.3 },
  INR: { USD: 0.013, EUR: 0.011, INR: 1, AED: 0.049 },
  AED: { USD: 0.27, EUR: 0.23, INR: 20.4, AED: 1 }
};

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrencyValue = fromCurrency.value;
  const toCurrencyValue = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  const conversionRate = exchangeRates[fromCurrencyValue][toCurrencyValue];
  const convertedAmount = (amount * conversionRate).toFixed(2);

  convertedAmountEl.textContent = `${convertedAmount} ${toCurrencyValue}`;
  resultContainer.classList.remove('hidden');
});
