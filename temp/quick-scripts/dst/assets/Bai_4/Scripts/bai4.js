
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNC9TY3JpcHRzL2JhaTQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsIml0ZW1QcmVmYWIiLCJQcmVmYWIiLCJhdXRvQnRuIiwiQnV0dG9uIiwicG9wVXAiLCJpbml0IiwiaSIsInRpbWUiLCJpdGVtIiwiaW5zdGFudGlhdGUiLCJ0aXRsZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJjb21wSXRlbSIsImFkZENoaWxkIiwib25Mb2FkIiwiYWN0aXZlIiwic3RhcnQiLCJhdXRvQ2xpY2siLCJjaGlsZHJlbiIsIndhaXQiLCJzdG9yZTEiLCJzdG9yZTIiLCJzdG9yZTMiLCJzdG9yZTQiLCJzdG9yZTUiLCJjb250cmlidXRlIiwic3RlcFRpbWUiLCJzdG9yZXMiLCJzdG9yZSIsInJ1biIsImV4ZWN1dGVkIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxJQURKO0lBRVJDLFVBQVUsRUFBRU4sRUFBRSxDQUFDTyxNQUZQO0lBR1JDLE9BQU8sRUFBRVIsRUFBRSxDQUFDUyxNQUhKO0lBSVJDLEtBQUssRUFBRVYsRUFBRSxDQUFDSztFQUpGLENBSFA7RUFVTE0sSUFBSSxFQUFFLGNBQVVDLENBQVYsRUFBYUMsSUFBYixFQUFtQjtJQUNyQixJQUFJQyxJQUFJLEdBQUdkLEVBQUUsQ0FBQ2UsV0FBSCxDQUFlLEtBQUtULFVBQXBCLENBQVg7SUFDQSxJQUFJVSxLQUFLLEdBQUdGLElBQUksQ0FBQ0csY0FBTCxDQUFvQixPQUFwQixFQUE2QkMs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NkJBLE1BQTdCO2NBQUE7O2NBQUEsa0JBQ1lBLE1BRFo7O1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtjQUFBOztjQUNHQyxLQURIO2NBQUE7Y0FBQSxPQUVFQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUgsUUFBVixDQUZGOztZQUFBO2NBQUE7Y0FBQTtjQUFBOztZQUFBO2NBS1IseUJBQW1CQyxNQUFuQixnQ0FBMEI7Z0JBQWhCQyxNQUFnQjs7Z0JBQ3RCLElBQUdBLE1BQUssQ0FBQ0UsUUFBTixJQUFrQixLQUFyQixFQUEyQjtrQkFDdkIsS0FBSzdCLEtBQUwsQ0FBV2MsTUFBWCxHQUFxQixJQUFyQjtnQkFDSDtjQUNKOztZQVRPO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUY7O0lBQUE7TUFBQTtJQUFBOztJQUFBO0VBQUEsR0F6REw7RUFxRUxnQixNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUFHO0FBckVwQixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb250ZW50OiBjYy5Ob2RlLFxuICAgICAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIGF1dG9CdG46IGNjLkJ1dHRvbixcbiAgICAgICAgcG9wVXA6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKGksIHRpbWUpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICBsZXQgdGl0bGUgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGl0bGUuc3RyaW5nID0gXCJOaGnhu4dtIHbhu6UgXCIgKyBpO1xuICAgICAgICBsZXQgY29tcEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGNvbXBJdGVtLmluaXQoXCJOaGnhu4dtIHbhu6UgXCIgKyBpLHRpbWUpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBvcFVwLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuaW5pdCg0LCAyKTtcbiAgICAgICAgdGhpcy5pbml0KDUsIDIpO1xuICAgICAgICB0aGlzLmluaXQoMiwgMik7XG4gICAgICAgIHRoaXMuaW5pdCgzLCA0KTtcbiAgICAgICAgdGhpcy5pbml0KDEsIDIpO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkgeyB9LFxuXG4gICAgYXV0b0NsaWNrOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmNoaWxkcmVuWzRdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiaXRlbVwiKVxuICAgICAgICAgICAgLndhaXQodGhpcy5jb250ZW50LmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChcIml0ZW1cIikpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5jaGlsZHJlblszXVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChcIml0ZW1cIilcbiAgICAgICAgICAgIC53YWl0KHRoaXMuY29udGVudC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bMl1cbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoXCJpdGVtXCIpXG4gICAgICAgICAgICAud2FpdCh0aGlzLmNvbnRlbnQuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmNoaWxkcmVuWzFdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiaXRlbVwiKVxuICAgICAgICAgICAgLndhaXQodGhpcy5jb250ZW50LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIml0ZW1cIikpO1xuXG4gICAgICAgIGxldCBzdG9yZTEgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bNF0uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKTtcbiAgICAgICAgbGV0IHN0b3JlMiA9IHRoaXMuY29udGVudC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpO1xuICAgICAgICBsZXQgc3RvcmUzID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBzdG9yZTQgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKTtcbiAgICAgICAgbGV0IHN0b3JlNSA9IHRoaXMuY29udGVudC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpO1xuXG4gICAgICAgIHRoaXMuY29udHJpYnV0ZSgzLCBzdG9yZTEsIHN0b3JlMiwgc3RvcmUzLCBzdG9yZTQsIHN0b3JlNSk7XG4gICAgfSxcblxuICAgIGNvbnRyaWJ1dGU6IGFzeW5jIGZ1bmN0aW9uIChzdGVwVGltZSwgLi4uc3RvcmVzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3RvcmUgb2Ygc3RvcmVzKSB7XG4gICAgICAgICAgICBhd2FpdCBzdG9yZS5ydW4oc3RlcFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGNvbnN0IHN0b3JlIG9mIHN0b3Jlcyl7XG4gICAgICAgICAgICBpZihzdG9yZS5leGVjdXRlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVcC5hY3RpdmUgPSAgdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7IH0sXG59KTtcbiJdfQ==