
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Bai_1/Scripts/Bai_1');
require('./assets/Bai_2/Scripts/Bai_2');
require('./assets/Bai_3/Scripts/Bai_3');
require('./assets/Bai_4/Scripts/bai4');
require('./assets/Bai_4/Scripts/item');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_4/Scripts/bai4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e75e0g8qc5JPqKOHAyWCsO1', 'bai4');
// Bai_4/Scripts/bai4.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    itemPrefab: cc.Prefab,
    autoBtn: cc.Button,
    popUp: cc.Node
  },
  init: function init(i, time) {
    var item = cc.instantiate(this.itemPrefab);
    var title = item.getChildByName("title").getComponent(cc.Label);
    title.string = "Nhiệm vụ " + i;
    var compItem = item.getComponent("item");
    compItem.init("Nhiệm vụ " + i, time);
    this.content.addChild(item);
  },
  onLoad: function onLoad() {
    this.popUp.active = false;
    this.init(4, 2);
    this.init(5, 2);
    this.init(2, 2);
    this.init(3, 4);
    this.init(1, 2);
  },
  start: function start() {},
  autoClick: function autoClick() {
    this.content.children[4].getComponent("item").wait(this.content.children[3].getComponent("item"));
    this.content.children[3].getComponent("item").wait(this.content.children[2].getComponent("item"));
    this.content.children[2].getComponent("item").wait(this.content.children[1].getComponent("item"));
    this.content.children[1].getComponent("item").wait(this.content.children[0].getComponent("item"));
    var store1 = this.content.children[4].getComponent("item");
    var store2 = this.content.children[2].getComponent("item");
    var store3 = this.content.children[3].getComponent("item");
    var store4 = this.content.children[0].getComponent("item");
    var store5 = this.content.children[1].getComponent("item");
    this.contribute(3, store1, store2, store3, store4, store5);
  },
  contribute: function () {
    var _contribute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stepTime) {
      var _len,
          stores,
          _key,
          _i,
          _stores,
          store,
          _i2,
          _stores2,
          _store,
          _args = arguments;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, stores = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                stores[_key - 1] = _args[_key];
              }

              _i = 0, _stores = stores;

            case 2:
              if (!(_i < _stores.length)) {
                _context.next = 9;
                break;
              }

              store = _stores[_i];
              _context.next = 6;
              return store.run(stepTime);

            case 6:
              _i++;
              _context.next = 2;
              break;

            case 9:
              for (_i2 = 0, _stores2 = stores; _i2 < _stores2.length; _i2++) {
                _store = _stores2[_i2];

                if (_store.executed == false) {
                  this.popUp.active = true;
                }
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function contribute(_x) {
      return _contribute.apply(this, arguments);
    }

    return contribute;
  }(),
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNC9TY3JpcHRzL2JhaTQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsIml0ZW1QcmVmYWIiLCJQcmVmYWIiLCJhdXRvQnRuIiwiQnV0dG9uIiwicG9wVXAiLCJpbml0IiwiaSIsInRpbWUiLCJpdGVtIiwiaW5zdGFudGlhdGUiLCJ0aXRsZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJjb21wSXRlbSIsImFkZENoaWxkIiwib25Mb2FkIiwiYWN0aXZlIiwic3RhcnQiLCJhdXRvQ2xpY2siLCJjaGlsZHJlbiIsIndhaXQiLCJzdG9yZTEiLCJzdG9yZTIiLCJzdG9yZTMiLCJzdG9yZTQiLCJzdG9yZTUiLCJjb250cmlidXRlIiwic3RlcFRpbWUiLCJzdG9yZXMiLCJzdG9yZSIsInJ1biIsImV4ZWN1dGVkIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxJQURKO0lBRVJDLFVBQVUsRUFBRU4sRUFBRSxDQUFDTyxNQUZQO0lBR1JDLE9BQU8sRUFBRVIsRUFBRSxDQUFDUyxNQUhKO0lBSVJDLEtBQUssRUFBRVYsRUFBRSxDQUFDSztFQUpGLENBSFA7RUFVTE0sSUFBSSxFQUFFLGNBQVVDLENBQVYsRUFBYUMsSUFBYixFQUFtQjtJQUNyQixJQUFJQyxJQUFJLEdBQUdkLEVBQUUsQ0FBQ2UsV0FBSCxDQUFlLEtBQUtULFVBQXBCLENBQVg7SUFDQSxJQUFJVSxLQUFLLEdBQUdGLElBQUksQ0FBQ0csY0FBTCxDQUFvQixPQUFwQixFQUE2QkMsWUFBN0IsQ0FBMENsQixFQUFFLENBQUNtQixLQUE3QyxDQUFaO0lBQ0FILEtBQUssQ0FBQ0ksTUFBTixHQUFlLGNBQWNSLENBQTdCO0lBQ0EsSUFBSVMsUUFBUSxHQUFHUCxJQUFJLENBQUNJLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBZjtJQUNBRyxRQUFRLENBQUNWLElBQVQsQ0FBYyxjQUFjQyxDQUE1QixFQUE4QkMsSUFBOUI7SUFDQSxLQUFLVCxPQUFMLENBQWFrQixRQUFiLENBQXNCUixJQUF0QjtFQUNILENBakJJO0VBbUJMUyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS2IsS0FBTCxDQUFXYyxNQUFYLEdBQW9CLEtBQXBCO0lBQ0EsS0FBS2IsSUFBTCxDQUFVLENBQVYsRUFBYSxDQUFiO0lBQ0EsS0FBS0EsSUFBTCxDQUFVLENBQVYsRUFBYSxDQUFiO0lBQ0EsS0FBS0EsSUFBTCxDQUFVLENBQVYsRUFBYSxDQUFiO0lBQ0EsS0FBS0EsSUFBTCxDQUFVLENBQVYsRUFBYSxDQUFiO0lBQ0EsS0FBS0EsSUFBTCxDQUFVLENBQVYsRUFBYSxDQUFiO0VBQ0gsQ0ExQkk7RUE0QkxjLEtBQUssRUFBRSxpQkFBWSxDQUFHLENBNUJqQjtFQThCTEMsU0FBUyxFQUFFLHFCQUFZO0lBRW5CLEtBQUt0QixPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQ0tULFlBREwsQ0FDa0IsTUFEbEIsRUFFS1UsSUFGTCxDQUVVLEtBQUt4QixPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQXlCVCxZQUF6QixDQUFzQyxNQUF0QyxDQUZWO0lBSUEsS0FBS2QsT0FBTCxDQUFhdUIsUUFBYixDQUFzQixDQUF0QixFQUNLVCxZQURMLENBQ2tCLE1BRGxCLEVBRUtVLElBRkwsQ0FFVSxLQUFLeEIsT0FBTCxDQUFhdUIsUUFBYixDQUFzQixDQUF0QixFQUF5QlQsWUFBekIsQ0FBc0MsTUFBdEMsQ0FGVjtJQUlBLEtBQUtkLE9BQUwsQ0FBYXVCLFFBQWIsQ0FBc0IsQ0FBdEIsRUFDS1QsWUFETCxDQUNrQixNQURsQixFQUVLVSxJQUZMLENBRVUsS0FBS3hCLE9BQUwsQ0FBYXVCLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJULFlBQXpCLENBQXNDLE1BQXRDLENBRlY7SUFJQSxLQUFLZCxPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQ0tULFlBREwsQ0FDa0IsTUFEbEIsRUFFS1UsSUFGTCxDQUVVLEtBQUt4QixPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQXlCVCxZQUF6QixDQUFzQyxNQUF0QyxDQUZWO0lBSUEsSUFBSVcsTUFBTSxHQUFHLEtBQUt6QixPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQXlCVCxZQUF6QixDQUFzQyxNQUF0QyxDQUFiO0lBQ0EsSUFBSVksTUFBTSxHQUFHLEtBQUsxQixPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQXlCVCxZQUF6QixDQUFzQyxNQUF0QyxDQUFiO0lBQ0EsSUFBSWEsTUFBTSxHQUFHLEtBQUszQixPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQXlCVCxZQUF6QixDQUFzQyxNQUF0QyxDQUFiO0lBQ0EsSUFBSWMsTUFBTSxHQUFHLEtBQUs1QixPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQXlCVCxZQUF6QixDQUFzQyxNQUF0QyxDQUFiO0lBQ0EsSUFBSWUsTUFBTSxHQUFHLEtBQUs3QixPQUFMLENBQWF1QixRQUFiLENBQXNCLENBQXRCLEVBQXlCVCxZQUF6QixDQUFzQyxNQUF0QyxDQUFiO0lBRUEsS0FBS2dCLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJMLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsTUFBbkMsRUFBMkNDLE1BQTNDLEVBQW1EQyxNQUFuRDtFQUNILENBdkRJO0VBeURMQyxVQUFVO0lBQUEsNkVBQUUsaUJBQWdCQyxRQUFoQjtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBOztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUEsMEJBQTZCQyxNQUE3QjtnQkFBNkJBLE1BQTdCO2NBQUE7O2NBQUEsa0JBQ1lBLE1BRFo7O1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtjQUFBOztjQUNHQyxLQURIO2NBQUE7Y0FBQSxPQUVFQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUgsUUFBVixDQUZGOztZQUFBO2NBQUE7Y0FBQTtjQUFBOztZQUFBO2NBS1IseUJBQW1CQyxNQUFuQixnQ0FBMEI7Z0JBQWhCQyxNQUFnQjs7Z0JBQ3RCLElBQUdBLE1BQUssQ0FBQ0UsUUFBTixJQUFrQixLQUFyQixFQUEyQjtrQkFDdkIsS0FBSzdCLEtBQUwsQ0FBV2MsTUFBWCxHQUFxQixJQUFyQjtnQkFDSDtjQUNKOztZQVRPO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUY7O0lBQUE7TUFBQTtJQUFBOztJQUFBO0VBQUEsR0F6REw7RUFxRUxnQixNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUFHO0FBckVwQixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb250ZW50OiBjYy5Ob2RlLFxuICAgICAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIGF1dG9CdG46IGNjLkJ1dHRvbixcbiAgICAgICAgcG9wVXA6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKGksIHRpbWUpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICBsZXQgdGl0bGUgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGl0bGUuc3RyaW5nID0gXCJOaGnhu4dtIHbhu6UgXCIgKyBpO1xuICAgICAgICBsZXQgY29tcEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGNvbXBJdGVtLmluaXQoXCJOaGnhu4dtIHbhu6UgXCIgKyBpLHRpbWUpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBvcFVwLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuaW5pdCg0LCAyKTtcbiAgICAgICAgdGhpcy5pbml0KDUsIDIpO1xuICAgICAgICB0aGlzLmluaXQoMiwgMik7XG4gICAgICAgIHRoaXMuaW5pdCgzLCA0KTtcbiAgICAgICAgdGhpcy5pbml0KDEsIDIpO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkgeyB9LFxuXG4gICAgYXV0b0NsaWNrOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmNoaWxkcmVuWzRdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiaXRlbVwiKVxuICAgICAgICAgICAgLndhaXQodGhpcy5jb250ZW50LmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChcIml0ZW1cIikpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5jaGlsZHJlblszXVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChcIml0ZW1cIilcbiAgICAgICAgICAgIC53YWl0KHRoaXMuY29udGVudC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bMl1cbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoXCJpdGVtXCIpXG4gICAgICAgICAgICAud2FpdCh0aGlzLmNvbnRlbnQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmNoaWxkcmVuWzFdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiaXRlbVwiKVxuICAgICAgICAgICAgLndhaXQodGhpcy5jb250ZW50LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIml0ZW1cIikpO1xuXG4gICAgICAgIGxldCBzdG9yZTEgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bNF0uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKTtcbiAgICAgICAgbGV0IHN0b3JlMiA9IHRoaXMuY29udGVudC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpO1xuICAgICAgICBsZXQgc3RvcmUzID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBzdG9yZTQgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKTtcbiAgICAgICAgbGV0IHN0b3JlNSA9IHRoaXMuY29udGVudC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpO1xuXG4gICAgICAgIHRoaXMuY29udHJpYnV0ZSgzLCBzdG9yZTEsIHN0b3JlMiwgc3RvcmUzLCBzdG9yZTQsIHN0b3JlNSk7XG4gICAgfSxcblxuICAgIGNvbnRyaWJ1dGU6IGFzeW5jIGZ1bmN0aW9uIChzdGVwVGltZSwgLi4uc3RvcmVzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3RvcmUgb2Ygc3RvcmVzKSB7XG4gICAgICAgICAgICBhd2FpdCBzdG9yZS5ydW4oc3RlcFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGNvbnN0IHN0b3JlIG9mIHN0b3Jlcyl7XG4gICAgICAgICAgICBpZihzdG9yZS5leGVjdXRlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVcC5hY3RpdmUgPSAgdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7IH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_4/Scripts/item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '092c36NADVGj4BWiVG1zAUo', 'item');
// Bai_4/Scripts/item.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// item.js
cc.Class({
  "extends": cc.Component,
  properties: {
    title: "",
    timeExcute: 0
  },
  onLoad: function onLoad() {
    this.dependencies = [];
    this.executed = false;
  },
  init: function init(title, timeExcute) {
    this.title = title;
    this.executed = false;
    this.dependencies = [];
    this.timeExcute = timeExcute;
    console.log(this.timeExcute);
  },
  wait: function wait(store) {
    this.dependencies.push(store);
  },
  run: function () {
    var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stepTime) {
      var _iterator, _step, dep;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(this.timeExcute > stepTime)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _iterator = _createForOfIteratorHelperLoose(this.dependencies);

            case 3:
              if ((_step = _iterator()).done) {
                _context.next = 11;
                break;
              }

              dep = _step.value;

              if (!(dep.timeExcute > stepTime)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              _context.next = 9;
              return dep.run(stepTime);

            case 9:
              _context.next = 3;
              break;

            case 11:
              if (!this.executed) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              console.log(this.timeExcute);
              this.executed = true;
              console.log(this.title);
              this.node.active = false;
              _context.next = 19;
              return this.sleep(stepTime * 1000);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function run(_x) {
      return _run.apply(this, arguments);
    }

    return run;
  }(),
  sleep: function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNC9TY3JpcHRzL2l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aXRsZSIsInRpbWVFeGN1dGUiLCJvbkxvYWQiLCJkZXBlbmRlbmNpZXMiLCJleGVjdXRlZCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwid2FpdCIsInN0b3JlIiwicHVzaCIsInJ1biIsInN0ZXBUaW1lIiwiZGVwIiwibm9kZSIsImFjdGl2ZSIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFLEVBREM7SUFFUkMsVUFBVSxFQUFDO0VBRkgsQ0FIUDtFQVFMQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0MsWUFBTCxHQUFvQixFQUFwQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7RUFDSCxDQVhJO0VBYUxDLElBQUksRUFBRSxjQUFVTCxLQUFWLEVBQWlCQyxVQUFqQixFQUE2QjtJQUMvQixLQUFLRCxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLSSxRQUFMLEdBQWdCLEtBQWhCO0lBQ0EsS0FBS0QsWUFBTCxHQUFvQixFQUFwQjtJQUNBLEtBQUtGLFVBQUwsR0FBa0JBLFVBQWxCO0lBQ0FLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtOLFVBQWpCO0VBQ0gsQ0FuQkk7RUFxQkxPLElBQUksRUFBRSxjQUFVQyxLQUFWLEVBQWlCO0lBQ25CLEtBQUtOLFlBQUwsQ0FBa0JPLElBQWxCLENBQXVCRCxLQUF2QjtFQUNILENBdkJJO0VBeUJMRSxHQUFHO0lBQUEsc0VBQUUsaUJBQWdCQyxRQUFoQjtNQUFBOztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUEsTUFDRyxLQUFLWCxVQUFMLEdBQWtCVyxRQURyQjtnQkFBQTtnQkFBQTtjQUFBOztjQUFBOztZQUFBO2NBQUEsNENBS2lCLEtBQUtULFlBTHRCOztZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FLVVUsR0FMVjs7Y0FBQSxNQU1NQSxHQUFHLENBQUNaLFVBQUosR0FBaUJXLFFBTnZCO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUE7O1lBQUE7Y0FBQTtjQUFBLE9BU1NDLEdBQUcsQ0FBQ0YsR0FBSixDQUFRQyxRQUFSLENBVFQ7O1lBQUE7Y0FBQTtjQUFBOztZQUFBO2NBQUEsS0FZRyxLQUFLUixRQVpSO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUE7O1lBQUE7Y0FhREUsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS04sVUFBakI7Y0FDQSxLQUFLRyxRQUFMLEdBQWdCLElBQWhCO2NBR0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtQLEtBQWpCO2NBQ0EsS0FBS2MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO2NBbEJDO2NBQUEsT0FtQkssS0FBS0MsS0FBTCxDQUFXSixRQUFRLEdBQUcsSUFBdEIsQ0FuQkw7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBRjs7SUFBQTtNQUFBO0lBQUE7O0lBQUE7RUFBQSxHQXpCRTtFQStDTEksS0FBSyxFQUFFLGVBQVVDLEVBQVYsRUFBYztJQUNqQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO01BQUEsT0FBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBdkI7SUFBQSxDQUFaLENBQVA7RUFDSDtBQWpESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG4vLyBpdGVtLmpzXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgdGltZUV4Y3V0ZTowLFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5leGVjdXRlZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAodGl0bGUsIHRpbWVFeGN1dGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmV4ZWN1dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG4gICAgICAgIHRoaXMudGltZUV4Y3V0ZSA9IHRpbWVFeGN1dGU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGltZUV4Y3V0ZSlcbiAgICB9LFxuXG4gICAgd2FpdDogZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLnB1c2goc3RvcmUpO1xuICAgIH0sXG5cbiAgICBydW46IGFzeW5jIGZ1bmN0aW9uIChzdGVwVGltZSkge1xuICAgICAgICAgaWYodGhpcy50aW1lRXhjdXRlID4gc3RlcFRpbWUpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGRlcCBvZiB0aGlzLmRlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgaWYoZGVwLnRpbWVFeGN1dGUgPiBzdGVwVGltZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBkZXAucnVuKHN0ZXBUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV4ZWN1dGVkKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGltZUV4Y3V0ZSlcbiAgICAgICAgdGhpcy5leGVjdXRlZCA9IHRydWU7XG4gICAgICAgIFxuICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoc3RlcFRpbWUgKiAxMDAwKTtcbiAgICB9LFxuXG4gICAgc2xlZXA6IGZ1bmN0aW9uIChtcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_1/Scripts/Bai_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af842wn0/xF6bY9wpSjpoRQ', 'Bai_1');
// Bai_1/Scripts/Bai_1.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    label: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.getLabel();
  },
  start: function start() {},
  getServerTime: function getServerTime() {
    return new Promise(function (resolve, reject) {
      var xmlHttp;

      try {
        xmlHttp = new XMLHttpRequest();
      } catch (err1) {
        try {
          xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (err2) {
          try {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
          } catch (err3) {
            //AJAX not supported, use CPU time.
            alert("AJAX not supported");
          }
        }
      }

      xmlHttp.open('HEAD', window.location.href.toString(), false);
      xmlHttp.setRequestHeader("Content-Type", "text/html");
      xmlHttp.send('');
      resolve(new Date(xmlHttp.getResponseHeader("Date")).getTime());
    });
  },
  getLabel: function getLabel() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getServerTime();

            case 2:
              result = _context.sent;
              _context.next = 5;
              return result;

            case 5:
              _this.label.string = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfMS9TY3JpcHRzL0JhaV8xLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGFiZWwiLCJMYWJlbCIsIm9uTG9hZCIsImdldExhYmVsIiwic3RhcnQiLCJnZXRTZXJ2ZXJUaW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4bWxIdHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJlcnIxIiwiQWN0aXZlWE9iamVjdCIsImVycjIiLCJlcnIzIiwiYWxlcnQiLCJvcGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9TdHJpbmciLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsIkRhdGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldFRpbWUiLCJyZXN1bHQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBRUosRUFBRSxDQUFDSztFQURGLENBSFA7RUFPTDtFQUVBQyxNQVRLLG9CQVNLO0lBQ04sS0FBS0MsUUFBTDtFQUNILENBWEk7RUFhTEMsS0FiSyxtQkFhSSxDQUVSLENBZkk7RUFpQkxDLGFBakJLLDJCQWlCVTtJQUNYLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO01BQ3pDLElBQUlDLE9BQUo7O01BQ0EsSUFBRztRQUNDQSxPQUFPLEdBQUcsSUFBSUMsY0FBSixFQUFWO01BQ0gsQ0FGRCxDQUdBLE9BQU9DLElBQVAsRUFBWTtRQUNSLElBQUc7VUFDQ0YsT0FBTyxHQUFHLElBQUlHLGFBQUosQ0FBa0IsZ0JBQWxCLENBQVY7UUFDSCxDQUZELENBRUMsT0FBTUMsSUFBTixFQUFXO1VBQ1IsSUFBRztZQUNDSixPQUFPLEdBQUcsSUFBSUcsYUFBSixDQUFrQixtQkFBbEIsQ0FBVjtVQUNILENBRkQsQ0FFQyxPQUFNRSxJQUFOLEVBQVc7WUFDUjtZQUNBQyxLQUFLLENBQUMsb0JBQUQsQ0FBTDtVQUNIO1FBQ0o7TUFDSjs7TUFDRE4sT0FBTyxDQUFDTyxJQUFSLENBQWEsTUFBYixFQUFxQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsRUFBckIsRUFBc0QsS0FBdEQ7TUFDQVgsT0FBTyxDQUFDWSxnQkFBUixDQUF5QixjQUF6QixFQUF3QyxXQUF4QztNQUNBWixPQUFPLENBQUNhLElBQVIsQ0FBYSxFQUFiO01BQ0FmLE9BQU8sQ0FBQyxJQUFJZ0IsSUFBSixDQUFTZCxPQUFPLENBQUNlLGlCQUFSLENBQTBCLE1BQTFCLENBQVQsRUFBNENDLE9BQTVDLEVBQUQsQ0FBUDtJQUNDLENBckJFLENBQVA7RUFzQkgsQ0F4Q0k7RUEwQ0N0QixRQTFDRCxzQkEwQ1c7SUFBQTs7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BQ1MsS0FBSSxDQUFDRSxhQUFMLEVBRFQ7O1lBQUE7Y0FDTnFCLE1BRE07Y0FBQTtjQUFBLE9BRWVBLE1BRmY7O1lBQUE7Y0FFWixLQUFJLENBQUMxQixLQUFMLENBQVcyQixNQUZDOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBR2YsQ0E3Q0ksQ0ErQ0w7O0FBL0NLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsOiBjYy5MYWJlbFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuZ2V0TGFiZWwoKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIGdldFNlcnZlclRpbWUoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHhtbEh0dHA7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgeG1sSHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycjEpe1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgeG1sSHR0cCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpO1xuICAgICAgICAgICAgICAgIH1jYXRjaChlcnIyKXtcbiAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgeG1sSHR0cCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0FKQVggbm90IHN1cHBvcnRlZCwgdXNlIENQVSB0aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBSkFYIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4bWxIdHRwLm9wZW4oJ0hFQUQnLCB3aW5kb3cubG9jYXRpb24uaHJlZi50b1N0cmluZygpLCBmYWxzZSk7XG4gICAgICAgICAgICB4bWxIdHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcInRleHQvaHRtbFwiKTtcbiAgICAgICAgICAgIHhtbEh0dHAuc2VuZCgnJyk7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBEYXRlKHhtbEh0dHAuZ2V0UmVzcG9uc2VIZWFkZXIoXCJEYXRlXCIpKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXN5bmMgZ2V0TGFiZWwoKXtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRTZXJ2ZXJUaW1lKClcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgID0gYXdhaXQgcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_3/Scripts/Bai_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b16fCxv15CZ5TSMO0LkuEf', 'Bai_3');
// Bai_3/Scripts/Bai_3.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var imageApis = ['https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4', 'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ', 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'];
cc.Class({
  "extends": cc.Component,
  properties: {
    imageScollViewContent: cc.Node
  },
  onLoad: function onLoad() {
    // this.imageScollViewContent.removeAllChildren();
    // this._loadImageByIndex(0)
    this.imageScollViewContent.removeAllChildren(); // this.fetchImageApi(imageApis[0]);

    this.getImages(0);
  },
  getImages: function getImages(index) {
    var _this = this;

    if (index == imageApis.length) return;
    this.scheduleOnce(function () {
      _this.fetchImageApi(imageApis[index]);

      index++;

      _this.getImages(index);
    }, 2);
  },
  fetchImageApi: function fetchImageApi(url) {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, blob, img, texture, spriteFrame, spriteNode, sprite;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(url);

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.blob();

            case 6:
              blob = _context.sent;
              _context.next = 9;
              return _this2.createImageFromBlob(blob);

            case 9:
              img = _context.sent;
              texture = new cc.Texture2D();
              texture.initWithElement(img);
              texture.handleLoadedTexture();
              spriteFrame = new cc.SpriteFrame(texture);
              spriteNode = new cc.Node("ImageNode");
              sprite = spriteNode.addComponent(cc.Sprite);
              sprite.spriteFrame = spriteFrame;
              spriteNode.width = 80;
              spriteNode.height = 80;

              _this2.imageScollViewContent.addChild(spriteNode);

              cc.log("Ảnh đã được gán vào Sprite");
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              cc.error("Lỗi khi tải ảnh:", _context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 23]]);
    }))();
  },
  createImageFromBlob: function createImageFromBlob(blob) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.src = URL.createObjectURL(blob);

      img.onload = function () {
        return resolve(img);
      };

      img.onerror = reject;
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfMy9TY3JpcHRzL0JhaV8zLmpzIl0sIm5hbWVzIjpbImltYWdlQXBpcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VTY29sbFZpZXdDb250ZW50IiwiTm9kZSIsIm9uTG9hZCIsInJlbW92ZUFsbENoaWxkcmVuIiwiZ2V0SW1hZ2VzIiwiaW5kZXgiLCJsZW5ndGgiLCJzY2hlZHVsZU9uY2UiLCJmZXRjaEltYWdlQXBpIiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsImJsb2IiLCJjcmVhdGVJbWFnZUZyb21CbG9iIiwiaW1nIiwidGV4dHVyZSIsIlRleHR1cmUyRCIsImluaXRXaXRoRWxlbWVudCIsImhhbmRsZUxvYWRlZFRleHR1cmUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlTm9kZSIsInNwcml0ZSIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkQ2hpbGQiLCJsb2ciLCJlcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiSW1hZ2UiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvbmxvYWQiLCJvbmVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREEsSUFBSUEsU0FBUyxHQUFHLENBQ1osa0dBRFksRUFFWixrR0FGWSxFQUdaLGtHQUhZLEVBSVosa0dBSlksQ0FBaEI7QUFPQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLHFCQUFxQixFQUFFSixFQUFFLENBQUNLO0VBRGxCLENBSFA7RUFPTEMsTUFQSyxvQkFPSztJQUNOO0lBRUE7SUFDQSxLQUFLRixxQkFBTCxDQUEyQkcsaUJBQTNCLEdBSk0sQ0FLTjs7SUFFQSxLQUFLQyxTQUFMLENBQWUsQ0FBZjtFQUNILENBZkk7RUFpQkxBLFNBakJLLHFCQWlCS0MsS0FqQkwsRUFpQlk7SUFBQTs7SUFDYixJQUFJQSxLQUFLLElBQUlWLFNBQVMsQ0FBQ1csTUFBdkIsRUFBK0I7SUFDL0IsS0FBS0MsWUFBTCxDQUFrQixZQUFNO01BQ3BCLEtBQUksQ0FBQ0MsYUFBTCxDQUFtQmIsU0FBUyxDQUFDVSxLQUFELENBQTVCOztNQUNBQSxLQUFLOztNQUNMLEtBQUksQ0FBQ0QsU0FBTCxDQUFlQyxLQUFmO0lBQ0gsQ0FKRCxFQUlHLENBSkg7RUFNSCxDQXpCSTtFQTJCQ0csYUEzQkQseUJBMkJlQyxHQTNCZixFQTJCb0I7SUFBQTs7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUEsT0FFTUMsS0FBSyxDQUFDRCxHQUFELENBRlg7O1lBQUE7Y0FFWEUsUUFGVztjQUFBO2NBQUEsT0FHRUEsUUFBUSxDQUFDQyxJQUFULEVBSEY7O1lBQUE7Y0FHWEEsSUFIVztjQUFBO2NBQUEsT0FJQyxNQUFJLENBQUNDLG1CQUFMLENBQXlCRCxJQUF6QixDQUpEOztZQUFBO2NBSVhFLEdBSlc7Y0FNWEMsT0FOVyxHQU1ELElBQUluQixFQUFFLENBQUNvQixTQUFQLEVBTkM7Y0FPakJELE9BQU8sQ0FBQ0UsZUFBUixDQUF3QkgsR0FBeEI7Y0FDQUMsT0FBTyxDQUFDRyxtQkFBUjtjQUNNQyxXQVRXLEdBU0csSUFBSXZCLEVBQUUsQ0FBQ3dCLFdBQVAsQ0FBbUJMLE9BQW5CLENBVEg7Y0FXYk0sVUFYYSxHQVdBLElBQUl6QixFQUFFLENBQUNLLElBQVAsQ0FBWSxXQUFaLENBWEE7Y0FZYnFCLE1BWmEsR0FZSkQsVUFBVSxDQUFDRSxZQUFYLENBQXdCM0IsRUFBRSxDQUFDNEIsTUFBM0IsQ0FaSTtjQWFqQkYsTUFBTSxDQUFDSCxXQUFQLEdBQXFCQSxXQUFyQjtjQUVBRSxVQUFVLENBQUNJLEtBQVgsR0FBbUIsRUFBbkI7Y0FDQUosVUFBVSxDQUFDSyxNQUFYLEdBQW9CLEVBQXBCOztjQUVBLE1BQUksQ0FBQzFCLHFCQUFMLENBQTJCMkIsUUFBM0IsQ0FBb0NOLFVBQXBDOztjQUVBekIsRUFBRSxDQUFDZ0MsR0FBSCxDQUFPLDRCQUFQO2NBcEJpQjtjQUFBOztZQUFBO2NBQUE7Y0FBQTtjQXNCakJoQyxFQUFFLENBQUNpQyxLQUFILENBQVMsa0JBQVQ7O1lBdEJpQjtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQXdCeEIsQ0FuREk7RUFxRExoQixtQkFyREssK0JBcURlRCxJQXJEZixFQXFEcUI7SUFDdEIsT0FBTyxJQUFJa0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtNQUNwQyxJQUFNbEIsR0FBRyxHQUFHLElBQUltQixLQUFKLEVBQVo7TUFDQW5CLEdBQUcsQ0FBQ29CLEdBQUosR0FBVUMsR0FBRyxDQUFDQyxlQUFKLENBQW9CeEIsSUFBcEIsQ0FBVjs7TUFDQUUsR0FBRyxDQUFDdUIsTUFBSixHQUFhO1FBQUEsT0FBTU4sT0FBTyxDQUFDakIsR0FBRCxDQUFiO01BQUEsQ0FBYjs7TUFDQUEsR0FBRyxDQUFDd0IsT0FBSixHQUFjTixNQUFkO0lBQ0gsQ0FMTSxDQUFQO0VBTUg7QUE1REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGltYWdlQXBpcyA9IFtcbiAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8wLzUwMDAvMzMzMy5qcGc/aG1hYz1fajZnaFk1ZkNmU0Q2dHZ0Y1Y3NHpYaXZrSlNQSWZSOUI4dzM0WGVRbXZVJyxcbiAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8xLzUwMDAvMzMzMy5qcGc/aG1hYz1Bc3YyRFUzckFfNUQxeFNlMjJ4Wks0N1dFQU4wd2pXZUZPaHpkMTN1alc0JyxcbiAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8yLzUwMDAvMzMzMy5qcGc/aG1hYz1fS0RrcVFWdHRYd19uTS1SeUpmTEltSWJhZkZycUxzdUdPNVl1SHFELXFRJyxcbiAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8zLzUwMDAvMzMzMy5qcGc/aG1hYz1HRGpaMnVOV0UzVjU5UGtkRGFPelRPdVYzdFBXV3hKU2Y0Zk5jeHU0UzJnJyxcbl1cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaW1hZ2VTY29sbFZpZXdDb250ZW50OiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvLyB0aGlzLmltYWdlU2NvbGxWaWV3Q29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIC8vIHRoaXMuX2xvYWRJbWFnZUJ5SW5kZXgoMClcbiAgICAgICAgdGhpcy5pbWFnZVNjb2xsVmlld0NvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgLy8gdGhpcy5mZXRjaEltYWdlQXBpKGltYWdlQXBpc1swXSk7XG5cbiAgICAgICAgdGhpcy5nZXRJbWFnZXMoMCk7XG4gICAgfSxcblxuICAgIGdldEltYWdlcyhpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT0gaW1hZ2VBcGlzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZldGNoSW1hZ2VBcGkoaW1hZ2VBcGlzW2luZGV4XSk7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgdGhpcy5nZXRJbWFnZXMoaW5kZXgpO1xuICAgICAgICB9LCAyKVxuICAgICAgICBcbiAgICB9LFxuXG4gICAgYXN5bmMgZmV0Y2hJbWFnZUFwaSh1cmwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBhd2FpdCB0aGlzLmNyZWF0ZUltYWdlRnJvbUJsb2IoYmxvYik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XG4gICAgICAgICAgICB0ZXh0dXJlLmluaXRXaXRoRWxlbWVudChpbWcpO1xuICAgICAgICAgICAgdGV4dHVyZS5oYW5kbGVMb2FkZWRUZXh0dXJlKCk7XG4gICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcblxuICAgICAgICAgICAgbGV0IHNwcml0ZU5vZGUgPSBuZXcgY2MuTm9kZShcIkltYWdlTm9kZVwiKTtcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBzcHJpdGVOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG5cbiAgICAgICAgICAgIHNwcml0ZU5vZGUud2lkdGggPSA4MDtcbiAgICAgICAgICAgIHNwcml0ZU5vZGUuaGVpZ2h0ID0gODA7XG5cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTY29sbFZpZXdDb250ZW50LmFkZENoaWxkKHNwcml0ZU5vZGUpO1xuXG4gICAgICAgICAgICBjYy5sb2coXCLhuqJuaCDEkcOjIMSRxrDhu6NjIGfDoW4gdsOgbyBTcHJpdGVcIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJM4buXaSBraGkgdOG6o2kg4bqjbmg6XCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlSW1hZ2VGcm9tQmxvYihibG9iKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_2/Scripts/Bai_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f480a4jo51F+L5dkTmY546M', 'Bai_2');
// Bai_2/Scripts/Bai_2.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfMi9TY3JpcHRzL0JhaV8yLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBT0w7RUFFQTtFQUVBQyxLQVhLLG1CQVdJLENBRVIsQ0FiSSxDQWVMOztBQWZLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------
