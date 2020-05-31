chrome.storage.sync.get(['storedIdValue', 'storedPasswordValue'], function(result) {

    document.querySelector('.inputId').value = result.storedIdValue;
    document.querySelector('.inputPassword').value = result.storedPasswordValue;
});

let idValue = document.querySelector('.inputId').value;
let passwordValue = document.querySelector('.inputPassword').value;

function saveValues() {
  
  setIdValue = document.querySelector('.inputId').value;
  chrome.storage.sync.set({'storedIdValue': setIdValue},function name(params) {
  }
  );

  setPasswordValue = document.querySelector('.inputPassword').value;
  chrome.storage.sync.set({'storedPasswordValue': setPasswordValue},function name(params) {
  }
  );
}

document.querySelector('.saveButton').addEventListener("click", saveValues);

// console.log('idValue currently is ' + result.idvalue + ' passwordValue currently is ' + result.passwordvalue);

