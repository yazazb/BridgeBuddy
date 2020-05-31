chrome.storage.sync.get(['storedIdValue', 'storedPasswordValue'], function(result) {

  if (result.storedIdValue != "") {

    if(document.querySelector('[aria-label="Your Bridge ID"]')){
      
      document.querySelector('[aria-label="Your Bridge ID"]').value = result.storedIdValue;
      
    }else if(document.querySelector('[aria-label="Bridge ID"]')){

      document.querySelector('[aria-label="Bridge ID"]').value = result.storedIdValue;

    }else if(document.querySelector('[aria-label="Bridge Id"]')){

      document.querySelector('[aria-label="Bridge Id"]').value = result.storedIdValue;

    }else if(document.querySelector('[aria-label="Bridge Id:"]')){

      document.querySelector('[aria-label="Bridge Id:"]').value = result.storedIdValue;
    }

    document.querySelectorAll('div.exportLabel')[0].textContent = "";

  }

  if (result.storedPasswordValue != "") {

    if(document.querySelector('[aria-label="Your Password"]')){
      
      
      document.querySelector('[aria-label="Your Password"]').value = result.storedPasswordValue;
      document.querySelector('[aria-label="Your Password"]').setAttribute("type", "password");
      
    }else if(document.querySelector('[aria-label="Password"]')){

      
      document.querySelector('[aria-label="Password"]').value = result.storedPasswordValue;
      document.querySelector('[aria-label="Password"]').setAttribute("type", "password");
    }

    document.querySelectorAll('div.exportLabel')[1].textContent = "";
    
  }

  // console.log('storedIdValue currently is ' + result.storedIdValue + ' storedPasswordValue currently is ' + result.storedPasswordValue);

});

  
