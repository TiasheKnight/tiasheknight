function calculate() {
  var amountInput = document.getElementById('amount');
  var wonAmountInput = document.getElementById('wonAmount');
  var audAmountInput = document.getElementById('audAmount');

  if (amountInput.checkValidity()) {
    var amount = parseFloat(amountInput.value);
    var xmlData = loadXMLData();
	if (xmlData) {
      var twdToKrw = amount * parseFloat(xmlData.querySelector("rate[currency='KRW']").textContent);
      var twdToAud = amount * parseFloat(xmlData.querySelector("rate[currency='AUD']").textContent);
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

  xmlhttp.open('GET', 'rate.xml', false);
  xmlhttp.send();

  if (xmlhttp.status == 200) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlhttp.responseText, 'text/xml');
    return xmlDoc;
  } else {
    alert('Failed to load exchange rate data.');
    return null;
  }
}