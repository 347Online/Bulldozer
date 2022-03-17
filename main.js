//Main

chrome.runtime.onInstalled.addListener(() => {
  console.log('Installed');
});

chrome.runtime.onMessage.addListener(function() {
  console.log("Received a message");
});

// chrome.storage.sync.set({text: 'write anything you want'}, function() {
//   console.log('Set the text');
// });

// chrome.storage.sync.get(['text'],function(result) {
//   console.log(result.text);
// });









// chrome.runtime.oninstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log('The color is green.');
//   });
// });



  // STORAGE 
  // chrome.storage.sync.set({key: value}, function() {
  //   console.log('Value is set to ' + value);
  // });
  
  // chrome.storage.sync.get(['key'], function(result) {
  //   console.log('Value currently is ' + result.key);
  // });