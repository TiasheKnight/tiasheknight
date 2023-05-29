function calculate() {
  var amountInput = document.getElementById('amount');
  var wonAmountInput = document.getElementById('wonAmount');
  var audAmountInput = document.getElementById('audAmount');

  if (amountInput.checkValidity()) {
    var amount = parseFloat(amountInput.value);
    var xmlData = loadXMLData();
    if (xmlData) {
      var twdToKrw = amount * parseFloat(xmlData.querySelector("currency[name='KRW'] rate").textContent);
      var twdToAud = amount * parseFloat(xmlData.querySelector("currency[name='AUD'] rate").textContent);
      wonAmountInput.value = twdToKrw.toFixed(2);
      audAmountInput.value = twdToAud.toFixed(2);
    } else {
      alert('Failed to load exchange rate data.');
    }
  } else {
    alert('Please enter a valid amount.');
  }
}

function reset() {
  document.getElementById('amount').value = '';
  document.getElementById('wonAmount').value = '';
  document.getElementById('audAmount').value = '';
}

function loadXMLData() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xmlhttp.open('GET', 'https://github.com/TiasheKnight/110403561/rate.xml', false);
  xmlhttp.send();
  return xmlhttp.responseXML;
}
