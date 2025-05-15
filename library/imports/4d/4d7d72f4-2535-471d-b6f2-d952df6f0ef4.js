"use strict";
cc._RF.push(module, '4d7d7L0JTVHHbby2VLfbw70', 'Bai_6');
// Bai_6/Scripts/Bai_6.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var Items = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2', 'https://jsonplaceholder.typicode.com/posts/3', 'https://jsonplaceholder.typicode.com/posts/4', 'https://jsonplaceholder.typicode.com/posts/5', 'https://jsonplaceholder.typicode.com/posts/6', 'https://jsonplaceholder.typicode.com/posts/7'];
cc.Class({
  "extends": cc.Component,
  properties: {
    TIMEOUT: 5000,
    URL: 'https://jsonplaceholder.typicode.com/posts/1'
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    console.log('Item', Items[1]); // Usage example

    this.fetchDataWithTimeout(URL, TIMEOUT).then(function (data) {
      console.log('Fetched data:', data);
      console.log('Title:', data.title);
      console.log('Body:', data.body);
    })["catch"](function (error) {
      console.error('Error:', error.message);
    });
  },
  fetchDataWithTimeout: function fetchDataWithTimeout(url, timeout) {
    return new Promise(function (resolve, resject) {
      var controller = new AbortController();
      var signal = controller.signal;
      var timer = setTimeout(function () {
        controller.abort();
        resject('Request timeout');
      }, timeout);
      fetch(url, {
        signal: signal
      }).then(function (response) {
        console.log("Request is complete \uD83C\uDF89");
      })["catch"](function (e) {
        console.log("Fetch error: " + e.message + " \uD83D\uDE2F");
      });
    });
  },
  start: function start() {} // update (dt) {},

}); // fetchDataWithTimeout(url, timeout) {
//     return new Promise((resolve, reject) => {
//         const controller = new AbortController(); 
//         const signal = controller.signal;
//         const timer = setTimeout(() => {
//             controller.abort(); 
//             reject('Request timed out'); 
//         }, timeout);
//         fetch(url, { signal })
//             .then(response => {
//                 clearTimeout(timer); 
//                 if (!response.ok) {
//                     reject('Network response was not ok');
//                     return;
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data); 
//             })
//             .catch(err => {
//                 if (err.name === 'AbortError') {
//                     reject('Fetch aborted due to timeout');
//                 } else {
//                     reject(err); 
//                 }
//             });
//     });
// },

cc._RF.pop();