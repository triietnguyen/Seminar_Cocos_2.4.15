
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_7/Scripts/Bai_7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNy9TY3JpcHRzL0JhaV83LmpzIl0sIm5hbWVzIjpbIkxhenlNYW4iLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImVhdCIsInRoZW4iLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImxhenlNYW4iLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFTUE7RUFDRixpQkFBWUMsSUFBWixFQUFrQjtJQUNkLEtBQUtBLElBQUwsR0FBWUEsSUFBWjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsaUJBQTBCLEtBQUtGLElBQS9CO0lBQ0EsS0FBS0csT0FBTCxHQUFlQyxPQUFPLENBQUNDLE9BQVIsRUFBZjtJQUNBLE9BQU8sSUFBUDtFQUNEOzs7O1NBRUhDLE1BQUEsYUFBSUEsSUFBSixFQUFRO0lBQ0osS0FBS0gsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUksSUFBYixDQUFrQixZQUFJO01BQ2pDLE9BQU8sSUFBSUgsT0FBSixDQUFZLFVBQUFDLE9BQU87UUFBQSxPQUFJRyxVQUFVLENBQUMsWUFBSTtVQUN6Q1AsT0FBTyxDQUFDQyxHQUFSLGtCQUEyQkksSUFBM0I7VUFDQUQsT0FBTztRQUNWLENBSHVDLEVBR3RDLElBSHNDLENBQWQ7TUFBQSxDQUFuQixDQUFQO0lBTUgsQ0FQYyxDQUFmO0lBUUEsT0FBTyxJQUFQO0VBQ0g7O1NBRURJLFFBQUEsZUFBTUEsTUFBTixFQUFhO0lBQ1QsS0FBS04sT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUksSUFBYixDQUFrQixZQUFNO01BQ3JDTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtNQUNBLE9BQU8sSUFBSUUsT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtRQUM1QkcsVUFBVSxDQUFDLFlBQU07VUFDZlAsT0FBTyxDQUFDQyxHQUFSLFlBQXFCTyxNQUFyQjtVQUNBSixPQUFPO1FBQ1IsQ0FIUyxFQUdQSSxNQUhPLENBQVY7TUFJRCxDQUxNLENBQVA7SUFNRCxDQVJjLENBQWY7SUFTQSxPQUFPLElBQVA7RUFDRDs7Ozs7QUFHUEMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFLEVBSFA7RUFPTDtFQUVBQyxNQVRLLG9CQVNJO0lBQ0wsSUFBTUMsT0FBTyxHQUFHLElBQUloQixPQUFKLENBQVksTUFBWixDQUFoQjtJQUNBZ0IsT0FBTyxDQUFDVCxHQUFSLENBQVksT0FBWixFQUFxQkcsS0FBckIsQ0FBMkIsSUFBM0IsRUFBaUNILEdBQWpDLENBQXFDLFdBQXJDLEVBQWtERyxLQUFsRCxDQUF3RCxJQUF4RCxFQUE4REgsR0FBOUQsQ0FBa0UsTUFBbEU7RUFDSCxDQVpJO0VBY0xVLEtBZEssbUJBY0csQ0FFUCxDQWhCSSxDQWtCTDs7QUFsQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2xhc3MgTGF6eU1hbiB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhgTXkgbmFtZSBpcyAke3RoaXMubmFtZX1gKTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG5cbiAgICBlYXQoZWF0KXtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSSBhbSBlYXRpbmcgJHtlYXR9YClcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH0sMzAwMCkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbGVlcChzbGVlcCkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0kgYW0gc2xlZXBpbmcuLi4nKTtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYEFmdGVyICR7c2xlZXB9IHNlY29uZHNgKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgc2xlZXApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9ICAgICAgXG59XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGxhenlNYW4gPSBuZXcgTGF6eU1hbignamFjaycpO1xuICAgICAgICBsYXp5TWFuLmVhdCgnYXBwbGUnKS5zbGVlcCg1MDAwKS5lYXQoJ2hhbWJ1cmdlcicpLnNsZWVwKDMwMDApLmVhdCgncGVhcicpO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19