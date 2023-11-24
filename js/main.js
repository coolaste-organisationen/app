function addYear() {
    var yearList = document.getElementById('yearList');
    var year = yearList.childElementCount; // Nästa år

    var listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.innerHTML = `<span class="title">Räkning år ${year}</span>
    <div class="container">
      <span class="undertitle">Tillgångar</span>
      <input type="number" class="assets" placeholder="Ange tillgångar">
    </div>
    <div class="container">
      <span class="undertitle">Skulder & eget kapital</span>
      <input type="number" class="liabilitiesEquity" placeholder="Ange skulder & eget kapital">
    </div>
    `;

    yearList.appendChild(listItem);
  }

  function calculate() {
    var yearList = document.getElementById('yearList').children;
    var resultContainer = document.getElementById('result');
    var totalBalances = [];

    for (var i = 0; i < yearList.length; i++) {
      var assetsInput = yearList[i].querySelector('.assets');
      var liabilitiesEquityInput = yearList[i].querySelector('.liabilitiesEquity');

      var assets = parseFloat(assetsInput.value) || 0;
      var liabilitiesEquity = parseFloat(liabilitiesEquityInput.value) || 0;

      var balance = assets - liabilitiesEquity;
      totalBalances.push(balance);
    }

    // Visa resultatet för varje år
    resultContainer.innerHTML = '';
    for (var i = 0; i < totalBalances.length; i++) {
      resultContainer.innerHTML += `Balans år ${i}: ${totalBalances[i].toFixed(2)}<br>`;
    }
  }

  // Lägg till två år automatiskt
  addYear();
  addYear();