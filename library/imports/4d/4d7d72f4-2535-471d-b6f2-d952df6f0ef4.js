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
    return new Promise(function (resolve, reject) {
      var controller = new AbortController();
      var signal = controller.signal;
      var timer = setTimeout(function () {
        controller.abort();
        reject('Request timed out');
      }, timeout);
      fetch(url, {
        signal: signal
      }).then(function (response) {
        clearTimeout(timer);

        if (!response.ok) {
          reject('Not Ok');
          return;
        }

        return response.json();
      }).then(function (data) {
        resolve(data);
      })["catch"](function (err) {
        if (err.name === 'AbortError') {
          reject(er);
        } else {
          reject(err);
        }
      });
    });
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();