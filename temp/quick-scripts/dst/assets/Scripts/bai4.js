
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/bai4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e75e0g8qc5JPqKOHAyWCsO1', 'bai4');
// Scripts/bai4.js

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
// bai4.js
cc.Class({
  "extends": cc.Component,
  properties: {
    scrollView: cc.ScrollView,
    itemPrefab: cc.Prefab,
    autoBtn: cc.Button
  },
  init: function init(i) {
    var item = cc.instantiate(this.itemPrefab);
    var title = item.getChildByName("title").getComponent(cc.Label);
    title.string = "Nhiệm vụ " + i;
    var compItem = item.getComponent("item");
    compItem.init("Nhiệm vụ " + i);
    this.scrollView.content.addChild(item);
  },
  onLoad: function onLoad() {
    this.init(4);
    this.init(5);
    this.init(2);
    this.init(3);
    this.init(1);
  },
  start: function start() {},
  autoClick: function autoClick() {
    this.scrollView.content.children[4].getComponent("item").wait(this.scrollView.content.children[3].getComponent("item"));
    this.scrollView.content.children[3].getComponent("item").wait(this.scrollView.content.children[2].getComponent("item"));
    this.scrollView.content.children[2].getComponent("item").wait(this.scrollView.content.children[1].getComponent("item"));
    this.scrollView.content.children[1].getComponent("item").wait(this.scrollView.content.children[0].getComponent("item"));
    var store1 = this.scrollView.content.children[4].getComponent("item");
    var store2 = this.scrollView.content.children[2].getComponent("item");
    var store3 = this.scrollView.content.children[3].getComponent("item");
    var store4 = this.scrollView.content.children[0].getComponent("item");
    var store5 = this.scrollView.content.children[1].getComponent("item");
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
              console.log(stepTime);

              for (_len = _args.length, stores = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                stores[_key - 1] = _args[_key];
              }

              console.log(stores);

              for (_i = 0, _stores = stores; _i < _stores.length; _i++) {
                store = _stores[_i];
                store.executed = false;
              }

              _i2 = 0, _stores2 = stores;

            case 5:
              if (!(_i2 < _stores2.length)) {
                _context.next = 12;
                break;
              }

              _store = _stores2[_i2];
              _context.next = 9;
              return _store.run(stepTime);

            case 9:
              _i2++;
              _context.next = 5;
              break;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2JhaTQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY3JvbGxWaWV3IiwiU2Nyb2xsVmlldyIsIml0ZW1QcmVmYWIiLCJQcmVmYWIiLCJhdXRvQnRuIiwiQnV0dG9uIiwiaW5pdCIsImkiLCJpdGVtIiwiaW5zdGFudGlhdGUiLCJ0aXRsZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJjb21wSXRlbSIsImNvbnRlbnQiLCJhZGRDaGlsZCIsIm9uTG9hZCIsInN0YXJ0IiwiYXV0b0NsaWNrIiwiY2hpbGRyZW4iLCJ3YWl0Iiwic3RvcmUxIiwic3RvcmUyIiwic3RvcmUzIiwic3RvcmU0Iiwic3RvcmU1IiwiY29udHJpYnV0ZSIsInN0ZXBUaW1lIiwiY29uc29sZSIsImxvZyIsInN0b3JlcyIsInN0b3JlIiwiZXhlY3V0ZWQiLCJydW4iLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssVUFEUDtJQUVSQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ08sTUFGUDtJQUdSQyxPQUFPLEVBQUVSLEVBQUUsQ0FBQ1M7RUFISixDQUhQO0VBU0xDLElBQUksRUFBRSxjQUFVQyxDQUFWLEVBQWE7SUFDZixJQUFJQyxJQUFJLEdBQUdaLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlLEtBQUtQLFVBQXBCLENBQVg7SUFDQSxJQUFJUSxLQUFLLEdBQUdGLElBQUksQ0FBQ0csY0FBTCxDQUFvQixPQUFwQixFQUE2QkMsWUFBN0IsQ0FBMENoQixFQUFFLENBQUNpQixLQUE3QyxDQUFa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QUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBOztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQ1JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaOztjQURRLDBCQUE2QkcsTUFBN0I7Z0JBQTZCQSxNQUE3QjtjQUFBOztjQUVSRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBWjs7Y0FFQSx1QkFBb0JBLE1BQXBCLDZCQUE0QjtnQkFBakJDLEtBQWlCO2dCQUN4QkEsS0FBSyxDQUFDQyxRQUFOLEdBQWlCLEtBQWpCO2NBQ0g7O2NBTk8sb0JBUVlGLE1BUlo7O1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtjQUFBOztjQVFHQyxNQVJIO2NBQUE7Y0FBQSxPQVNFQSxNQUFLLENBQUNFLEdBQU4sQ0FBVU4sUUFBVixDQVRGOztZQUFBO2NBQUE7Y0FBQTtjQUFBOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUY7O0lBQUE7TUFBQTtJQUFBOztJQUFBO0VBQUEsR0F0REw7RUFtRUxPLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjLENBQUc7QUFuRXBCLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbi8vIGJhaTQuanNcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcsXG4gICAgICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYixcbiAgICAgICAgYXV0b0J0bjogY2MuQnV0dG9uLFxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoaSkge1xuICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgIGxldCB0aXRsZSA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aXRsZS5zdHJpbmcgPSBcIk5oaeG7h20gduG7pSBcIiArIGk7XG4gICAgICAgIGxldCBjb21wSXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKTtcbiAgICAgICAgY29tcEl0ZW0uaW5pdChcIk5oaeG7h20gduG7pSBcIiArIGkpO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChpdGVtKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5pdCg0KTtcbiAgICAgICAgdGhpcy5pbml0KDUpO1xuICAgICAgICB0aGlzLmluaXQoMik7XG4gICAgICAgIHRoaXMuaW5pdCgzKTtcbiAgICAgICAgdGhpcy5pbml0KDEpO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkgeyB9LFxuXG4gICAgYXV0b0NsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmNoaWxkcmVuWzRdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiaXRlbVwiKVxuICAgICAgICAgICAgLndhaXQodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKSk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW5bM11cbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoXCJpdGVtXCIpXG4gICAgICAgICAgICAud2FpdCh0aGlzLnNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlblsyXVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChcIml0ZW1cIilcbiAgICAgICAgICAgIC53YWl0KHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChcIml0ZW1cIikpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmNoaWxkcmVuWzFdXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KFwiaXRlbVwiKVxuICAgICAgICAgICAgLndhaXQodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKSk7XG5cbiAgICAgICAgbGV0IHN0b3JlMSA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBzdG9yZTIgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpO1xuICAgICAgICBsZXQgc3RvcmUzID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KFwiaXRlbVwiKTtcbiAgICAgICAgbGV0IHN0b3JlNCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBzdG9yZTUgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoXCJpdGVtXCIpO1xuXG4gICAgICAgIHRoaXMuY29udHJpYnV0ZSgzLCBzdG9yZTEsIHN0b3JlMiwgc3RvcmUzLCBzdG9yZTQsIHN0b3JlNSk7XG4gICAgfSxcblxuICAgIGNvbnRyaWJ1dGU6IGFzeW5jIGZ1bmN0aW9uIChzdGVwVGltZSwgLi4uc3RvcmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0ZXBUaW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RvcmVzKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHN0b3Jlcykge1xuICAgICAgICAgICAgc3RvcmUuZXhlY3V0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc3RvcmUgb2Ygc3RvcmVzKSB7XG4gICAgICAgICAgICBhd2FpdCBzdG9yZS5ydW4oc3RlcFRpbWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7IH0sXG59KTtcbiJdfQ==