"use strict";
cc._RF.push(module, '19690kcQMZPs4UbdjW0AOCW', 'Bai_7');
// Bai_7/Scripts/Bai_7.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var LazyMan = /*#__PURE__*/function () {
  function LazyMan(name) {
    this.name = name;
    console.log("My name is " + this.name);
    this.promise = Promise.resolve();
    return this;
  }

  var _proto = LazyMan.prototype;

  _proto.eat = function eat(_eat) {
    this.promise = this.promise.then(function () {
      return new Promise(function (resolve) {
        return setTimeout(function () {
          console.log("I am eating " + _eat);
          resolve();
        }, 3000);
      });
    });
    return this;
  };

  _proto.sleep = function sleep(_sleep) {
    this.promise = this.promise.then(function () {
      console.log('I am sleeping...');
      return new Promise(function (resolve) {
        setTimeout(function () {
          console.log("After " + _sleep + " seconds");
          resolve();
        }, _sleep);
      });
    });
    return this;
  };

  return LazyMan;
}();

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var lazyMan = new LazyMan('jack');
    lazyMan.eat('apple').sleep(5000).eat('hamburger').sleep(3000).eat('pear');
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();