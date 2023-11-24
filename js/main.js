function addYear() {
    var yearList = document.getElementById('yearList');
    var year = yearList.childElementCount; // Nästa år
  
    var listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.innerHTML = `
      <h1>År ${year}</h1>
      <span class="title">Beräkning</span>
      <div class="container">
        <span class="undertitle">Eget kapital</span>
        <input type="number" class="equity" placeholder="Ange eget kapital">
      </div>
      <div class="container">
        <span class="undertitle">Tillgångar</span>
        <input type="number" class="assets" placeholder="Ange tillgångar">
      </div>
      <div class="container">
        <span class="undertitle">Skulder</span>
        <input type="number" class="liabilities" placeholder="Ange skulder">
      </div>
    `;
  
    yearList.appendChild(listItem);
  }
  
  function calculate() {
    var yearList = document.getElementById('yearList').children;
    var resultContainer = document.getElementById('result');
    var totalBalances = [];
    var totalEquity = 0;
  
    for (var i = 0; i < yearList.length; i++) {
      var equityInput = yearList[i].querySelector('.equity');
      var assetsInput = yearList[i].querySelector('.assets');
      var liabilitiesInput = yearList[i].querySelector('.liabilities');
  
      var equity = parseFloat(equityInput.value) || 0;
      var assets = parseFloat(assetsInput.value) || 0;
      var liabilities = parseFloat(liabilitiesInput.value) || 0;
  
      if (i === 0) {
        totalEquity = equity;
      }
  
      var balance = assets - liabilities;
      totalBalances.push(balance);
  
      // Resultatberäkning
      if (i > 0) {
        totalEquity += balance; // Påverkas av föregående års balans
      }
    }
  
    // Visa resultatet för varje år
    resultContainer.innerHTML = '';
    for (var i = 0; i < totalBalances.length; i++) {
      resultContainer.innerHTML += `Balans år ${i}: ${totalBalances[i].toFixed(2)} | Resultat år ${i}: ${totalEquity.toFixed(2)}<br>`;
    }
  }
  
  // Lägg till två år automatiskt
  addYear();
  addYear();
  