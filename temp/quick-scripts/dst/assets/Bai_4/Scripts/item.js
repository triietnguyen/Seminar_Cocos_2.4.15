
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
  },
  wait: function wait(stores) {
    if (Array.isArray(stores)) {
      var _this$dependencies;

      (_this$dependencies = this.dependencies).push.apply(_this$dependencies, stores);
    } else {
      this.dependencies.push(stores);
    }
  },
  run: function () {
    var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stepTime) {
      var _iterator, _step, dep, depResult;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.executed) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!(this.timeExcute > stepTime)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _iterator = _createForOfIteratorHelperLoose(this.dependencies);

            case 5:
              if ((_step = _iterator()).done) {
                _context.next = 16;
                break;
              }

              dep = _step.value;

              if (!(dep.timeExcute > stepTime)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", false);

            case 9:
              _context.next = 11;
              return dep.run(stepTime);

            case 11:
              depResult = _context.sent;

              if (depResult) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", false);

            case 14:
              _context.next = 5;
              break;

            case 16:
              this.executed = true;
              _context.next = 19;
              return this.execute(stepTime * 1000);

            case 19:
              this.node.active = false;
              return _context.abrupt("return", true);

            case 21:
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
  execute: function execute(ms) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("\uD83D\uDD04 \u0110ang ch\u1EA1y " + _this.title);
              _context2.next = 3;
              return new Promise(function (resolve) {
                return setTimeout(resolve, ms);
              });

            case 3:
              console.log("\u2705 Ho\xE0n th\xE0nh " + _this.title);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNC9TY3JpcHRzL2l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aXRsZSIsInRpbWVFeGN1dGUiLCJvbkxvYWQiLCJkZXBlbmRlbmNpZXMiLCJleGVjdXRlZCIsImluaXQiLCJ3YWl0Iiwic3RvcmVzIiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCIsInJ1biIsInN0ZXBUaW1lIiwiZGVwIiwiZGVwUmVzdWx0IiwiZXhlY3V0ZSIsIm5vZGUiLCJhY3RpdmUiLCJtcyIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7Ozs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLEtBQUssRUFBRSxFQURDO0lBRVJDLFVBQVUsRUFBRTtFQUZKLENBSFA7RUFRTEMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtDLFlBQUwsR0FBb0IsRUFBcEI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0VBQ0gsQ0FYSTtFQWFMQyxJQUFJLEVBQUUsY0FBVUwsS0FBVixFQUFpQkMsVUFBakIsRUFBNkI7SUFDL0IsS0FBS0QsS0FBTCxHQUFhQSxLQUFiO0lBQ0EsS0FBS0ksUUFBTCxHQUFnQixLQUFoQjtJQUNBLEtBQUtELFlBQUwsR0FBb0IsRUFBcEI7SUFDQSxLQUFLRixVQUFMLEdBQWtCQSxVQUFsQjtFQUNILENBbEJJO0VBb0JMSyxJQUFJLEVBQUUsY0FBVUMsTUFBVixFQUFrQjtJQUNwQixJQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsTUFBZCxDQUFKLEVBQTJCO01BQUE7O01BQ3ZCLDJCQUFLSixZQUFMLEVBQWtCTyxJQUFsQiwyQkFBMEJILE1BQTFCO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS0osWUFBTCxDQUFrQk8sSUFBbEIsQ0FBdUJILE1BQXZCO0lBQ0g7RUFDSixDQTFCSTtFQTRCTEksR0FBRztJQUFBLHNFQUFFLGlCQUFnQkMsUUFBaEI7TUFBQTs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBLEtBQ0csS0FBS1IsUUFEUjtnQkFBQTtnQkFBQTtjQUFBOztjQUFBOztZQUFBO2NBQUEsTUFFRyxLQUFLSCxVQUFMLEdBQWtCVyxRQUZyQjtnQkFBQTtnQkFBQTtjQUFBOztjQUFBOztZQUFBO2NBQUEsNENBSWlCLEtBQUtULFlBSnRCOztZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FJVVUsR0FKVjs7Y0FBQSxNQUtPQSxHQUFHLENBQUNaLFVBQUosR0FBaUJXLFFBTHhCO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUEsaUNBTWMsS0FOZDs7WUFBQTtjQUFBO2NBQUEsT0FRMkJDLEdBQUcsQ0FBQ0YsR0FBSixDQUFRQyxRQUFSLENBUjNCOztZQUFBO2NBUVNFLFNBUlQ7O2NBQUEsSUFTUUEsU0FUUjtnQkFBQTtnQkFBQTtjQUFBOztjQUFBLGlDQVMwQixLQVQxQjs7WUFBQTtjQUFBO2NBQUE7O1lBQUE7Y0FZRCxLQUFLVixRQUFMLEdBQWdCLElBQWhCO2NBWkM7Y0FBQSxPQWFLLEtBQUtXLE9BQUwsQ0FBYUgsUUFBUSxHQUFHLElBQXhCLENBYkw7O1lBQUE7Y0FjRCxLQUFLSSxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7Y0FkQyxpQ0FlTSxJQWZOOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUY7O0lBQUE7TUFBQTtJQUFBOztJQUFBO0VBQUEsR0E1QkU7RUE4Q0NGLE9BOUNELG1CQThDU0csRUE5Q1QsRUE4Q2E7SUFBQTs7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQ2RDLE9BQU8sQ0FBQ0MsR0FBUix1Q0FBNEIsS0FBSSxDQUFDcEIsS0FBakM7Y0FEYztjQUFBLE9BRVIsSUFBSXFCLE9BQUosQ0FBWSxVQUFDQyxPQUFEO2dCQUFBLE9BQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVSixFQUFWLENBQXZCO2NBQUEsQ0FBWixDQUZROztZQUFBO2NBR2RDLE9BQU8sQ0FBQ0MsR0FBUiw4QkFBNEIsS0FBSSxDQUFDcEIsS0FBakM7O1lBSGM7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFJakI7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHRpbWVFeGN1dGU6IDAsXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xuICAgICAgICB0aGlzLmV4ZWN1dGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICh0aXRsZSwgdGltZUV4Y3V0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZXhlY3V0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lRXhjdXRlID0gdGltZUV4Y3V0ZTtcbiAgICB9LFxuXG4gICAgd2FpdDogZnVuY3Rpb24gKHN0b3Jlcykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZXMpKSB7XG4gICAgICAgICAgICB0aGlzLmRlcGVuZGVuY2llcy5wdXNoKC4uLnN0b3Jlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlcGVuZGVuY2llcy5wdXNoKHN0b3Jlcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcnVuOiBhc3luYyBmdW5jdGlvbiAoc3RlcFRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhlY3V0ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMudGltZUV4Y3V0ZSA+IHN0ZXBUaW1lKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChjb25zdCBkZXAgb2YgdGhpcy5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgICAgIGlmIChkZXAudGltZUV4Y3V0ZSA+IHN0ZXBUaW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVwUmVzdWx0ID0gYXdhaXQgZGVwLnJ1bihzdGVwVGltZSk7XG4gICAgICAgICAgICBpZiAoIWRlcFJlc3VsdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5leGVjdXRlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMuZXhlY3V0ZShzdGVwVGltZSAqIDEwMDApO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBhc3luYyBleGVjdXRlKG1zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5SEIMSQYW5nIGNo4bqheSAke3RoaXMudGl0bGV9YCk7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGDinIUgSG/DoG4gdGjDoG5oICR7dGhpcy50aXRsZX1gKTtcbiAgICB9LFxufSk7XG4iXX0=