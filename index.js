function updateSaveData() {
  const value = document.querySelector('#notepad').value;
  chrome.storage.sync.set({text: value});
}

function loadSaveData() {
  chrome.storage.sync.get(['text'], function(response) {
    document.querySelector('#notepad').textContent = response.text;
    setInterval(updateSaveData,600)
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadSaveData();
});


//chrome.storage.sync.set({"key": "value"});

document.getElementById('notepad');

//setTimeout(sendmsg,1000);

// const button = document.querySelector('#button');
// document.write(button);
// chrome.runtime.sendMessage(
//   extensionId?: string,
//   message: any,
//   options?: object,
//   callback?: function,
// )


