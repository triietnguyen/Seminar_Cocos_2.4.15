
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
require('./assets/Bai_5/Scripts/Bai_5');
require('./assets/Bai_6/Scripts/Bai_6');
require('./assets/Bai_7/Scripts/Bai_7');
require('./assets/Bai_8/Scripts/Bai_8');
require('./assets/Bai_9/Scripts/Bai_9');

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
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.fetchWithAutoRetry(this.simulateAPICall).then(function (result) {
      console.log('Success:', result);
    })["catch"](function (error) {
      console.error('All retries failed:');
    });
  },
  start: function start() {},
  // update (dt) {},
  // Iterative approach
  fetchWithAutoRetry: function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var retry, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (maximumRetryCount === void 0) {
                maximumRetryCount = 5;
              }

              retry = 0;

            case 2:
              if (!(retry < maximumRetryCount)) {
                _context.next = 18;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return fetcher();

            case 6:
              result = _context.sent;
              console.log('result', result);
              return _context.abrupt("return", result);

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              retry++;

              if (!(retry === maximumRetryCount)) {
                _context.next = 16;
                break;
              }

              throw _context.t0;

            case 16:
              _context.next = 2;
              break;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }))();
  },
  // Usage example
  simulateAPICall: function simulateAPICall() {
    return new Promise(function (resolve, reject) {
      // Simulate a 50% chance of failure
      var a = false;
      console.log('a', a);

      if (a == false) {
        reject(new Error('API call failed'));
      } else {
        resolve('API call succeeded');
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfMi9TY3JpcHRzL0JhaV8yLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZmV0Y2hXaXRoQXV0b1JldHJ5Iiwic2ltdWxhdGVBUElDYWxsIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0YXJ0IiwiZmV0Y2hlciIsIm1heGltdW1SZXRyeUNvdW50IiwicmV0cnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImEiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsRUFIUDtFQU9MO0VBRUFDLE1BVEssb0JBU0k7SUFDTCxLQUFLQyxrQkFBTCxDQUF3QixLQUFLQyxlQUE3QixFQUNLQyxJQURMLENBQ1UsVUFBQUMsTUFBTSxFQUFJO01BQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLE1BQXhCO0lBQ0gsQ0FITCxXQUdhLFVBQUFHLEtBQUssRUFBSTtNQUNkRixPQUFPLENBQUNFLEtBQVIsQ0FBYyxxQkFBZDtJQUNILENBTEw7RUFNSCxDQWhCSTtFQWtCTEMsS0FsQkssbUJBa0JHLENBRVAsQ0FwQkk7RUFzQkw7RUFFQTtFQUNNUCxrQkF6QkQsOEJBeUJvQlEsT0F6QnBCLEVBeUI2QkMsaUJBekI3QixFQXlCb0Q7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQSxJQUF2QkEsaUJBQXVCO2dCQUF2QkEsaUJBQXVCLEdBQUgsQ0FBRztjQUFBOztjQUNqREMsS0FEaUQsR0FDekMsQ0FEeUM7O1lBQUE7Y0FBQSxNQUU5Q0EsS0FBSyxHQUFHRCxpQkFGc0M7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FBQTtjQUFBO2NBQUEsT0FJeEJELE9BQU8sRUFKaUI7O1lBQUE7Y0FJdkNMLE1BSnVDO2NBSzdDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixNQUF0QjtjQUw2QyxpQ0FNdENBLE1BTnNDOztZQUFBO2NBQUE7Y0FBQTtjQVE3Q08sS0FBSzs7Y0FSd0MsTUFTekNBLEtBQUssS0FBS0QsaUJBVCtCO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUE7O1lBQUE7Y0FBQTtjQUFBOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBY3hELENBdkNJO0VBd0NMO0VBQ0FSLGVBekNLLDZCQXlDYTtJQUNkLE9BQU8sSUFBSVUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtNQUNwQztNQUNBLElBQUlDLENBQUMsR0FBRyxLQUFSO01BQ0FWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBZ0JTLENBQWhCOztNQUNBLElBQUlBLENBQUMsSUFBSSxLQUFULEVBQWdCO1FBQ1pELE1BQU0sQ0FBQyxJQUFJRSxLQUFKLENBQVUsaUJBQVYsQ0FBRCxDQUFOO01BQ0gsQ0FGRCxNQUVPO1FBQ0hILE9BQU8sQ0FBQyxvQkFBRCxDQUFQO01BQ0g7SUFDSixDQVRNLENBQVA7RUFVSDtBQXBESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmZldGNoV2l0aEF1dG9SZXRyeSh0aGlzLnNpbXVsYXRlQVBJQ2FsbClcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBbGwgcmV0cmllcyBmYWlsZWQ6JylcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcblxuICAgIC8vIEl0ZXJhdGl2ZSBhcHByb2FjaFxuICAgIGFzeW5jIGZldGNoV2l0aEF1dG9SZXRyeShmZXRjaGVyLCBtYXhpbXVtUmV0cnlDb3VudCA9IDUpIHtcbiAgICAgICAgbGV0IHJldHJ5ID0gMDtcbiAgICAgICAgd2hpbGUgKHJldHJ5IDwgbWF4aW11bVJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hlcigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0cnkrKztcbiAgICAgICAgICAgICAgICBpZiAocmV0cnkgPT09IG1heGltdW1SZXRyeUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIFVzYWdlIGV4YW1wbGVcbiAgICBzaW11bGF0ZUFQSUNhbGwoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBTaW11bGF0ZSBhIDUwJSBjaGFuY2Ugb2YgZmFpbHVyZVxuICAgICAgICAgICAgbGV0IGEgPSBmYWxzZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnLGEpXG4gICAgICAgICAgICBpZiAoYSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0FQSSBjYWxsIGZhaWxlZCcpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgnQVBJIGNhbGwgc3VjY2VlZGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cblxufSk7XG4iXX0=
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

cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    itemPrefab: cc.Prefab,
    autoBtn: cc.Button,
    popUpFailed: cc.Node,
    popUpSuccess: cc.Node,
    fadeOverlay: cc.Node
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
    this.popUpFailed.active = false;
    this.popUpSuccess.active = false;
    this.init(1, 3);
    this.init(2, 3);
    this.init(3, 3);
    this.init(4, 3);
    this.init(5, 3);
    this.init(6, 3);
    this.init(7, 3);
    this.init(8, 3);
    this.init(9, 3);
    this.init(10, 3);
    this.button = this.popUpSuccess.getChildByName("CloseButton").getComponent(cc.Button);
    this.button.node.on('click', this.closePopUpSuccess, this);
  },
  start: function start() {},
  showPopUpFailed: function showPopUpFailed() {
    this.popUpFailed.opacity = 0;
    this.popUpFailed.active = true;
    cc.tween(this.popUpFailed).to(0.4, {
      opacity: 255
    }).start();
  },
  closePopUpFailed: function closePopUpFailed() {
    var _this = this;

    cc.tween(this.popUpFailed).to(0.4, {
      opacity: 0
    }).call(function () {
      _this.popUpFailed.active = false;
      _this.fadeOverlay.active = true;
      _this.fadeOverlay.opacity = 0;
      cc.tween(_this.fadeOverlay).to(0.5, {
        opacity: 255
      }).call(function () {
        cc.director.loadScene(cc.director.getScene().name);
      }).start();
    }).start();
  },
  showPopUpSucces: function showPopUpSucces() {
    this.popUpSuccess.opacity = 0;
    this.popUpSuccess.active = true;
    cc.tween(this.popUpSuccess).to(0.4, {
      opacity: 255
    }).start();
  },
  closePopUpSuccess: function closePopUpSuccess() {
    var _this2 = this;

    cc.tween(this.popUpSuccess).to(0.4, {
      opacity: 0
    }).call(function () {
      _this2.popUpSuccess.active = false;
      _this2.fadeOverlay.active = true;
      _this2.fadeOverlay.opacity = 0;
      cc.tween(_this2.fadeOverlay).to(0.5, {
        opacity: 255
      }).call(function () {
        cc.director.loadScene(cc.director.getScene().name);
      }).start();
    }).start();
  },
  autoClick: function autoClick() {
    this.autoBtn.node.active = false;
    var mision1 = this.content.children[0].getComponent("item");
    var mision2 = this.content.children[1].getComponent("item");
    var mision3 = this.content.children[2].getComponent("item");
    var mision4 = this.content.children[3].getComponent("item");
    var mision5 = this.content.children[4].getComponent("item");
    var mision6 = this.content.children[5].getComponent("item");
    var mision7 = this.content.children[6].getComponent("item");
    var mision8 = this.content.children[7].getComponent("item");
    var mision9 = this.content.children[8].getComponent("item");
    var mision10 = this.content.children[9].getComponent("item");
    mision10.wait([mision9, mision6, mision2]);
    mision9.wait([mision8, mision7]);
    mision6.wait([mision4, mision5]);
    mision4.wait(mision3);
    mision2.wait(mision1);
    this.contribute(3, mision10);
  },
  // contribute: async function (stepTime, ...stores) {
  //     for (const store of stores) {
  //         await store.run(stepTime);
  //     }
  //     complete = true;
  //     for (const store of stores) {
  //         if (store.executed == false) {
  //             complete = false;
  //             this.showPopUpFailed();
  //             return
  //         }
  //     }
  //     if (complete == true) {
  //         this.showPopUpSucces();
  //     } else {
  //         this.showPopUpFailed();
  //     }
  // },
  contribute: function () {
    var _contribute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stepTime) {
      var complete,
          _len,
          stores,
          _key,
          _i,
          _stores,
          store,
          result,
          _args = arguments;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              complete = true;

              for (_len = _args.length, stores = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                stores[_key - 1] = _args[_key];
              }

              _i = 0, _stores = stores;

            case 3:
              if (!(_i < _stores.length)) {
                _context.next = 12;
                break;
              }

              store = _stores[_i];
              _context.next = 7;
              return store.run(stepTime);

            case 7:
              result = _context.sent;

              if (!result) {
                complete = false;
              }

            case 9:
              _i++;
              _context.next = 3;
              break;

            case 12:
              if (complete) {
                this.showPopUpSucces();
              } else {
                this.showPopUpFailed();
              }

            case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNC9TY3JpcHRzL2JhaTQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsIml0ZW1QcmVmYWIiLCJQcmVmYWIiLCJhdXRvQnRuIiwiQnV0dG9uIiwicG9wVXBGYWlsZWQiLCJwb3BVcFN1Y2Nlc3MiLCJmYWRlT3ZlcmxheSIsImluaXQiLCJpIiwidGltZSIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsInRpdGxlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsImNvbXBJdGVtIiwiYWRkQ2hpbGQiLCJvbkxvYWQiLCJhY3RpdmUiLCJidXR0b24iLCJub2RlIiwib24iLCJjbG9zZVBvcFVwU3VjY2VzcyIsInN0YXJ0Iiwic2hvd1BvcFVwRmFpbGVkIiwib3BhY2l0eSIsInR3ZWVuIiwidG8iLCJjbG9zZVBvcFVwRmFpbGVkIiwiY2FsbCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiZ2V0U2NlbmUiLCJuYW1lIiwic2hvd1BvcFVwU3VjY2VzIiwiYXV0b0NsaWNrIiwibWlzaW9uMSIsImNoaWxkcmVuIiwibWlzaW9uMiIsIm1pc2lvbjMiLCJtaXNpb240IiwibWlzaW9uNSIsIm1pc2lvbjYiLCJtaXNpb243IiwibWlzaW9uOCIsIm1pc2lvbjkiLCJtaXNpb24xMCIsIndhaXQiLCJjb250cmlidXRlIiwic3RlcFRpbWUiLCJjb21wbGV0ZSIsInN0b3JlcyIsInN0b3JlIiwicnVuIiwicmVzdWx0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxJQURKO0lBRVJDLFVBQVUsRUFBRU4sRUFBRSxDQUFDTyxNQUZQO0lBR1JDLE9BQU8sRUFBRVIsRUFBRSxDQUFDUyxNQUhKO0lBSVJDLFdBQVcsRUFBRVYsRUFBRSxDQUFDSyxJQUpSO0lBS1JNLFlBQVksRUFBRVgsRUFBRSxDQUFDSyxJQUxUO0lBTVJPLFdBQVcsRUFBRVosRUFBRSxDQUFDSztFQU5SLENBSFA7RUFhTFEsSUFBSSxFQUFFLGNBQVVDLENBQVYsRUFBYUMsSUFBYixFQUFtQjtJQUNyQixJQUFJQyxJQUFJLEdBQUdoQixFQUFFLENBQUNpQixXQUFILENBQWUsS0FBS1gsVUFBcEIsQ0FBWDtJQUNBLElBQUlZLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxjQUFMLENBQW9CLE9BQXBCLEVBQTZCQyxZQUE3QixDQUEwQ3BCLEVBQUUsQ0FBQ3FCLEtBQTdDLENBQVo7SUFDQUgsS0FBSyxDQUFDSSxNQUFOLEdBQWUsY0FBY1IsQ0FBN0I7SUFDQSxJQUFJUyxRQUFRLEdBQUdQLElBQUksQ0FBQ0ksWUFBTCxDQUFrQixNQUFsQixDQUFmO0lBQ0FHLFFBQVEsQ0FBQ1YsSUFBVCxDQUFjLGNBQWNDLENBQTVCLEVBQStCQyxJQUEvQjtJQUNBLEtBQUtYLE9BQUwsQ0FBYW9CLFFBQWIsQ0FBc0JSLElBQXRCO0VBQ0gsQ0FwQkk7RUFzQkxTLE1BQU0sRUFBRSxrQkFBWTtJQUVoQixLQUFLZixXQUFMLENBQWlCZ0IsTUFBakIsR0FBMEIsS0FBMUI7SUFDQSxLQUFLZixZQUFMLENBQWtCZSxNQUFsQixHQUEyQixLQUEzQjtJQUNBLEtBQUtiLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxDQUFWLEVBQWEsQ0FBYjtJQUNBLEtBQUtBLElBQUwsQ0FBVSxFQUFWLEVBQWMsQ0FBZDtJQUNBLEtBQUtjLE1BQUwsR0FBYyxLQUFLaEIsWUFBTCxDQUFrQlEsY0FBbEIsQ0FBaUMsYUFBakMsRUFBZ0RDLFlBQWhELENBQTZEcEIsRUFBRSxDQUFDUyxNQUFoRSxDQUFkO0lBQ0EsS0FBS2tCLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsS0FBS0MsaUJBQWxDLEVBQXFELElBQXJEO0VBQ0gsQ0F0Q0k7RUF3Q0xDLEtBQUssRUFBRSxpQkFBWSxDQUFHLENBeENqQjtFQTBDTEMsZUExQ0ssNkJBMENhO0lBQ2QsS0FBS3RCLFdBQUwsQ0FBaUJ1QixPQUFqQixHQUEyQixDQUEzQjtJQUNBLEtBQUt2QixXQUFMLENBQWlCZ0IsTUFBakIsR0FBMEIsSUFBMUI7SUFFQTFCLEVBQUUsQ0FBQ2tDLEtBQUgsQ0FBUyxLQUFLeEIsV0FBZCxFQUNLeUIsRUFETCxDQUNRLEdBRFIsRUFDYTtNQUFFRixPQUFPLEVBQUU7SUFBWCxDQURiLEVBRUtGLEtBRkw7RUFHSCxDQWpESTtFQW1ETEssZ0JBbkRLLDhCQW1EYztJQUFBOztJQUNmcEMsRUFBRSxDQUFDa0MsS0FBSCxDQUFTLEtBQUt4QixXQUFkLEVBQ0t5QixFQURMLENBQ1EsR0FEUixFQUNhO01BQUVGLE9BQU8sRUFBRTtJQUFYLENBRGIsRUFFS0ksSUFGTCxDQUVVLFlBQU07TUFDUixLQUFJLENBQUMzQixXQUFMLENBQWlCZ0IsTUFBakIsR0FBMEIsS0FBMUI7TUFFQSxLQUFJLENBQUNkLFdBQUwsQ0FBaUJjLE1BQWpCLEdBQTBCLElBQTFCO01BQ0EsS0FBSSxDQUFDZCxXQUFMLENBQWlCcUIsT0FBakIsR0FBMkIsQ0FBM0I7TUFFQWpDLEVBQUUsQ0FBQ2tDLEtBQUgsQ0FBUyxLQUFJLENBQUN0QixXQUFkLEVBQ0t1QixFQURMLENBQ1EsR0FEUixFQUNhO1FBQUVGLE9BQU8sRUFBRTtNQUFYLENBRGIsRUFFS0ksSUFGTCxDQUVVLFlBQU07UUFDUnJDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQnZDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWUUsUUFBWixHQUF1QkMsSUFBN0M7TUFDSCxDQUpMLEVBS0tWLEtBTEw7SUFNSCxDQWRMLEVBZUtBLEtBZkw7RUFnQkgsQ0FwRUk7RUFzRUxXLGVBdEVLLDZCQXNFYTtJQUNkLEtBQUsvQixZQUFMLENBQWtCc0IsT0FBbEIsR0FBNEIsQ0FBNUI7SUFDQSxLQUFLdEIsWUFBTCxDQUFrQmUsTUFBbEIsR0FBMkIsSUFBM0I7SUFFQTFCLEVBQUUsQ0FBQ2tDLEtBQUgsQ0FBUyxLQUFLdkIsWUFBZCxFQUNLd0IsRUFETCxDQUNRLEdBRFIsRUFDYTtNQUFFRixPQUFPLEVBQUU7SUFBWCxDQURiLEVBRUtGLEtBRkw7RUFHSCxDQTdFSTtFQStFTEQsaUJBL0VLLCtCQStFZTtJQUFBOztJQUNoQjlCLEVBQUUsQ0FBQ2tDLEtBQUgsQ0FBUyxLQUFLdkIsWUFBZCxFQUNLd0IsRUFETCxDQUNRLEdBRFIsRUFDYTtNQUFFRixPQUFPLEVBQUU7SUFBWCxDQURiLEVBRUtJLElBRkwsQ0FFVSxZQUFNO01BQ1IsTUFBSSxDQUFDMUIsWUFBTCxDQUFrQmUsTUFBbEIsR0FBMkIsS0FBM0I7TUFFQSxNQUFJLENBQUNkLFdBQUwsQ0FBaUJjLE1BQWpCLEdBQTBCLElBQTFCO01BQ0EsTUFBSSxDQUFDZCxXQUFMLENBQWlCcUIsT0FBakIsR0FBMkIsQ0FBM0I7TUFFQWpDLEVBQUUsQ0FBQ2tDLEtBQUgsQ0FBUyxNQUFJLENBQUN0QixXQUFkLEVBQ0t1QixFQURMLENBQ1EsR0FEUixFQUNhO1FBQUVGLE9BQU8sRUFBRTtNQUFYLENBRGIsRUFFS0ksSUFGTCxDQUVVLFlBQU07UUFDUnJDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQnZDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWUUsUUFBWixHQUF1QkMsSUFBN0M7TUFDSCxDQUpMLEVBS0tWLEtBTEw7SUFNSCxDQWRMLEVBZUtBLEtBZkw7RUFnQkgsQ0FoR0k7RUFtR0xZLFNBQVMsRUFBRSxxQkFBWTtJQUNuQixLQUFLbkMsT0FBTCxDQUFhb0IsSUFBYixDQUFrQkYsTUFBbEIsR0FBMkIsS0FBM0I7SUFDQSxJQUFJa0IsT0FBTyxHQUFHLEtBQUt4QyxPQUFMLENBQWF5QyxRQUFiLENBQXNCLENBQXRCLEVBQXlCekIsWUFBekIsQ0FBc0MsTUFBdEMsQ0FBZDtJQUNBLElBQUkwQixPQUFPLEdBQUcsS0FBSzFDLE9BQUwsQ0FBYXlDLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJ6QixZQUF6QixDQUFzQyxNQUF0QyxDQUFkO0lBQ0EsSUFBSTJCLE9BQU8sR0FBRyxLQUFLM0MsT0FBTCxDQUFheUMsUUFBYixDQUFzQixDQUF0QixFQUF5QnpCLFlBQXpCLENBQXNDLE1BQXRDLENBQWQ7SUFDQSxJQUFJNEIsT0FBTyxHQUFHLEtBQUs1QyxPQUFMLENBQWF5QyxRQUFiLENBQXNCLENBQXRCLEVBQXlCekIsWUFBekIsQ0FBc0MsTUFBdEMsQ0FBZDtJQUNBLElBQUk2QixPQUFPLEdBQUcsS0FBSzdDLE9BQUwsQ0FBYXlDLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJ6QixZQUF6QixDQUFzQyxNQUF0QyxDQUFkO0lBQ0EsSUFBSThCLE9BQU8sR0FBRyxLQUFLOUMsT0FBTCxDQUFheUMsUUFBYixDQUFzQixDQUF0QixFQUF5QnpCLFlBQXpCLENBQXNDLE1BQXRDLENBQWQ7SUFDQSxJQUFJK0IsT0FBTyxHQUFHLEtBQUsvQyxPQUFMLENBQWF5QyxRQUFiLENBQXNCLENBQXRCLEVBQXlCekIsWUFBekIsQ0FBc0MsTUFBdEMsQ0FBZDtJQUNBLElBQUlnQyxPQUFPLEdBQUcsS0FBS2hELE9BQUwsQ0FBYXlDLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJ6QixZQUF6QixDQUFzQyxNQUF0QyxDQUFkO0lBQ0EsSUFBSWlDLE9BQU8sR0FBRyxLQUFLakQsT0FBTCxDQUFheUMsUUFBYixDQUFzQixDQUF0QixFQUF5QnpCLFlBQXpCLENBQXNDLE1BQXRDLENBQWQ7SUFDQSxJQUFJa0MsUUFBUSxHQUFHLEtBQUtsRCxPQUFMLENBQWF5QyxRQUFiLENBQXNCLENBQXRCLEVBQXlCekIsWUFBekIsQ0FBc0MsTUFBdEMsQ0FBZjtJQUVBa0MsUUFBUSxDQUFDQyxJQUFULENBQWMsQ0FBQ0YsT0FBRCxFQUFVSCxPQUFWLEVBQW1CSixPQUFuQixDQUFkO0lBQ0FPLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLENBQUNILE9BQUQsRUFBVUQsT0FBVixDQUFiO0lBQ0FELE9BQU8sQ0FBQ0ssSUFBUixDQUFhLENBQUNQLE9BQUQsRUFBVUMsT0FBVixDQUFiO0lBQ0FELE9BQU8sQ0FBQ08sSUFBUixDQUFhUixPQUFiO0lBQ0FELE9BQU8sQ0FBQ1MsSUFBUixDQUFhWCxPQUFiO0lBRUEsS0FBS1ksVUFBTCxDQUFnQixDQUFoQixFQUFtQkYsUUFBbkI7RUFFSCxDQXhISTtFQTBITDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFFQUUsVUFBVTtJQUFBLDZFQUFFLGlCQUFnQkMsUUFBaEI7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDUkMsUUFEUSxHQUNHLElBREg7O2NBQUEsMEJBQTZCQyxNQUE3QjtnQkFBNkJBLE1BQTdCO2NBQUE7O2NBQUEsa0JBRVFBLE1BRlI7O1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtjQUFBOztjQUVEQyxLQUZDO2NBQUE7Y0FBQSxPQUdhQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUosUUFBVixDQUhiOztZQUFBO2NBR0ZLLE1BSEU7O2NBSVIsSUFBSSxDQUFDQSxNQUFMLEVBQWE7Z0JBQ1RKLFFBQVEsR0FBRyxLQUFYO2NBQ0g7O1lBTk87Y0FBQTtjQUFBO2NBQUE7O1lBQUE7Y0FRWixJQUFJQSxRQUFKLEVBQWM7Z0JBQ1YsS0FBS2hCLGVBQUw7Y0FDSCxDQUZELE1BRU87Z0JBQ0gsS0FBS1YsZUFBTDtjQUNIOztZQVpXO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUY7O0lBQUE7TUFBQTtJQUFBOztJQUFBO0VBQUEsR0EvSUw7RUErSkwrQixNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUFHO0FBL0pwQixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb250ZW50OiBjYy5Ob2RlLFxuICAgICAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIGF1dG9CdG46IGNjLkJ1dHRvbixcbiAgICAgICAgcG9wVXBGYWlsZWQ6IGNjLk5vZGUsXG4gICAgICAgIHBvcFVwU3VjY2VzczogY2MuTm9kZSxcbiAgICAgICAgZmFkZU92ZXJsYXk6IGNjLk5vZGUsXG5cbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKGksIHRpbWUpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICBsZXQgdGl0bGUgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGl0bGUuc3RyaW5nID0gXCJOaGnhu4dtIHbhu6UgXCIgKyBpO1xuICAgICAgICBsZXQgY29tcEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGNvbXBJdGVtLmluaXQoXCJOaGnhu4dtIHbhu6UgXCIgKyBpLCB0aW1lKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnBvcFVwRmFpbGVkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcFVwU3VjY2Vzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KDEsIDMpO1xuICAgICAgICB0aGlzLmluaXQoMiwgMyk7XG4gICAgICAgIHRoaXMuaW5pdCgzLCAzKTtcbiAgICAgICAgdGhpcy5pbml0KDQsIDMpO1xuICAgICAgICB0aGlzLmluaXQoNSwgMyk7XG4gICAgICAgIHRoaXMuaW5pdCg2LCAzKTtcbiAgICAgICAgdGhpcy5pbml0KDcsIDMpO1xuICAgICAgICB0aGlzLmluaXQoOCwgMyk7XG4gICAgICAgIHRoaXMuaW5pdCg5LCAzKTtcbiAgICAgICAgdGhpcy5pbml0KDEwLCAzKTtcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLnBvcFVwU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcIkNsb3NlQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5jbG9zZVBvcFVwU3VjY2VzcywgdGhpcylcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHsgfSxcblxuICAgIHNob3dQb3BVcEZhaWxlZCgpIHtcbiAgICAgICAgdGhpcy5wb3BVcEZhaWxlZC5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5wb3BVcEZhaWxlZC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wVXBGYWlsZWQpXG4gICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIGNsb3NlUG9wVXBGYWlsZWQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wVXBGYWlsZWQpXG4gICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcFVwRmFpbGVkLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3ZlcmxheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU92ZXJsYXkub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZhZGVPdmVybGF5KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIHNob3dQb3BVcFN1Y2NlcygpIHtcbiAgICAgICAgdGhpcy5wb3BVcFN1Y2Nlc3Mub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMucG9wVXBTdWNjZXNzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5wb3BVcFN1Y2Nlc3MpXG4gICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIGNsb3NlUG9wVXBTdWNjZXNzKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLnBvcFVwU3VjY2VzcylcbiAgICAgICAgICAgIC50bygwLjQsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wVXBTdWNjZXNzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3ZlcmxheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU92ZXJsYXkub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZhZGVPdmVybGF5KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuXG4gICAgYXV0b0NsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXV0b0J0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGxldCBtaXNpb24xID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb24yID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb24zID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb240ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb241ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb242ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb243ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzZdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb244ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzddLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb245ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzhdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb24xMCA9IHRoaXMuY29udGVudC5jaGlsZHJlbls5XS5nZXRDb21wb25lbnQoXCJpdGVtXCIpO1xuXG4gICAgICAgIG1pc2lvbjEwLndhaXQoW21pc2lvbjksIG1pc2lvbjYsIG1pc2lvbjJdKTtcbiAgICAgICAgbWlzaW9uOS53YWl0KFttaXNpb244LCBtaXNpb243XSk7XG4gICAgICAgIG1pc2lvbjYud2FpdChbbWlzaW9uNCwgbWlzaW9uNV0pO1xuICAgICAgICBtaXNpb240LndhaXQobWlzaW9uMyk7XG4gICAgICAgIG1pc2lvbjIud2FpdChtaXNpb24xKTtcblxuICAgICAgICB0aGlzLmNvbnRyaWJ1dGUoMywgbWlzaW9uMTApO1xuXG4gICAgfSxcblxuICAgIC8vIGNvbnRyaWJ1dGU6IGFzeW5jIGZ1bmN0aW9uIChzdGVwVGltZSwgLi4uc3RvcmVzKSB7XG4gICAgLy8gICAgIGZvciAoY29uc3Qgc3RvcmUgb2Ygc3RvcmVzKSB7XG4gICAgLy8gICAgICAgICBhd2FpdCBzdG9yZS5ydW4oc3RlcFRpbWUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAvLyAgICAgZm9yIChjb25zdCBzdG9yZSBvZiBzdG9yZXMpIHtcbiAgICAvLyAgICAgICAgIGlmIChzdG9yZS5leGVjdXRlZCA9PSBmYWxzZSkge1xuXG4gICAgLy8gICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNob3dQb3BVcEZhaWxlZCgpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVyblxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChjb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnNob3dQb3BVcFN1Y2NlcygpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5zaG93UG9wVXBGYWlsZWQoKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfSxcblxuICAgIGNvbnRyaWJ1dGU6IGFzeW5jIGZ1bmN0aW9uIChzdGVwVGltZSwgLi4uc3RvcmVzKSB7XG4gICAgbGV0IGNvbXBsZXRlID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHN0b3Jlcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yZS5ydW4oc3RlcFRpbWUpO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5zaG93UG9wVXBTdWNjZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dQb3BVcEZhaWxlZCgpO1xuICAgIH1cbn0sXG5cblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7IH0sXG59KTsiXX0=
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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_6/Scripts/Bai_6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNi9TY3JpcHRzL0JhaV82LmpzIl0sIm5hbWVzIjpbIkl0ZW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJUSU1FT1VUIiwiVVJMIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsImZldGNoRGF0YVdpdGhUaW1lb3V0IiwidGhlbiIsImRhdGEiLCJ0aXRsZSIsImJvZHkiLCJlcnJvciIsIm1lc3NhZ2UiLCJ1cmwiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiYWJvcnQiLCJmZXRjaCIsInJlc3BvbnNlIiwiY2xlYXJUaW1lb3V0Iiwib2siLCJqc29uIiwiZXJyIiwibmFtZSIsImVyIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1YsOENBRFUsRUFFViw4Q0FGVSxFQUdWLDhDQUhVLEVBSVYsOENBSlUsRUFLViw4Q0FMVSxFQU1WLDhDQU5VLEVBT1YsOENBUFUsQ0FBZDtBQVVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFFLElBREQ7SUFFUkMsR0FBRyxFQUFFO0VBRkcsQ0FIUDtFQVFMO0VBRUFDLE1BVkssb0JBVUk7SUFDTEMsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlQsS0FBSyxDQUFDLENBQUQsQ0FBekIsRUFESyxDQUVMOztJQUNBLEtBQUtVLG9CQUFMLENBQTBCSixHQUExQixFQUErQkQsT0FBL0IsRUFDS00sSUFETCxDQUNVLFVBQUFDLElBQUksRUFBSTtNQUNWSixPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQ01HLElBRE47TUFFQUosT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUNNRyxJQUFJLENBQUNDLEtBRFg7TUFFQUwsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUNNRyxJQUFJLENBQUNFLElBRFg7SUFFSCxDQVJMLFdBU1csVUFBQUMsS0FBSyxFQUFJO01BQ1pQLE9BQU8sQ0FBQ08sS0FBUixDQUFjLFFBQWQsRUFDTUEsS0FBSyxDQUFDQyxPQURaO0lBRUgsQ0FaTDtFQWFILENBMUJJO0VBNkJMTixvQkE3QkssZ0NBNkJnQk8sR0E3QmhCLEVBNkJxQkMsT0E3QnJCLEVBNkI4QjtJQUMvQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7TUFDcEMsSUFBTUMsVUFBVSxHQUFHLElBQUlDLGVBQUosRUFBbkI7TUFDQSxJQUFNQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0UsTUFBMUI7TUFFQSxJQUFNQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQzNCSixVQUFVLENBQUNLLEtBQVg7UUFDQU4sTUFBTSxDQUFDLG1CQUFELENBQU47TUFDSCxDQUh1QixFQUdyQkgsT0FIcUIsQ0FBeEI7TUFLQVUsS0FBSyxDQUFDWCxHQUFELEVBQU07UUFBRU8sTUFBTSxFQUFOQTtNQUFGLENBQU4sQ0FBTCxDQUNLYixJQURMLENBQ1UsVUFBQWtCLFFBQVEsRUFBSTtRQUNkQyxZQUFZLENBQUNMLEtBQUQsQ0FBWjs7UUFDQSxJQUFJLENBQUNJLFFBQVEsQ0FBQ0UsRUFBZCxFQUFrQjtVQUNkVixNQUFNLENBQUMsUUFBRCxDQUFOO1VBQ0E7UUFDSDs7UUFDRCxPQUFPUSxRQUFRLENBQUNHLElBQVQsRUFBUDtNQUNILENBUkwsRUFTS3JCLElBVEwsQ0FTVSxVQUFBQyxJQUFJLEVBQUk7UUFDVlEsT0FBTyxDQUFDUixJQUFELENBQVA7TUFDSCxDQVhMLFdBWVcsVUFBQXFCLEdBQUcsRUFBSTtRQUNWLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixLQUFhLFlBQWpCLEVBQStCO1VBQzNCYixNQUFNLENBQUNjLEVBQUQsQ0FBTjtRQUNILENBRkQsTUFFTztVQUNIZCxNQUFNLENBQUNZLEdBQUQsQ0FBTjtRQUNIO01BQ0osQ0FsQkw7SUFtQkgsQ0E1Qk0sQ0FBUDtFQTZCSCxDQTNESTtFQStETEcsS0EvREssbUJBK0RHLENBRVAsQ0FqRUksQ0FtRUw7O0FBbkVLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IEl0ZW1zID0gW1xuICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMScsXG4gICAgJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8yJyxcbiAgICAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzMnLFxuICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvNCcsXG4gICAgJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy81JyxcbiAgICAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzYnLFxuICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvNycsXG5dO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBUSU1FT1VUOiA1MDAwLFxuICAgICAgICBVUkw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMScsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSXRlbScsIEl0ZW1zWzFdKVxuICAgICAgICAvLyBVc2FnZSBleGFtcGxlXG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhV2l0aFRpbWVvdXQoVVJMLCBUSU1FT1VUKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoZWQgZGF0YTonXG4gICAgICAgICAgICAgICAgICAgICwgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpdGxlOidcbiAgICAgICAgICAgICAgICAgICAgLCBkYXRhLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQm9keTonXG4gICAgICAgICAgICAgICAgICAgICwgZGF0YS5ib2R5KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOidcbiAgICAgICAgICAgICAgICAgICAgLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIGZldGNoRGF0YVdpdGhUaW1lb3V0KHVybCwgdGltZW91dCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1JlcXVlc3QgdGltZWQgb3V0Jyk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgICAgICAgZmV0Y2godXJsLCB7IHNpZ25hbCB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdOb3QgT2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG5cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG5cblxuXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/Bai_9/Scripts/Bai_9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cb46l34Q9PH4jMmmj349oH', 'Bai_9');
// Bai_9/Scripts/Bai_9.js

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
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.run();
  },
  getServerTime: function getServerTime() {
    return new Date().getTime();
  },
  circuitBreaker: function circuitBreaker(fn, timeThreshold) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var startTime;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              startTime = Date.now();
              return _context.abrupt("return", function () {
                var currentTime = Date.now();

                if (currentTime - startTime > timeThreshold) {
                  return "service closed";
                }

                return fn.apply(void 0, arguments);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  run: function run() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var getTimeLimited;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.circuitBreaker(_this.getServerTime, 2000);

            case 2:
              getTimeLimited = _context2.sent;
              setTimeout(function () {
                console.log(getTimeLimited());
              }, 300);
              setTimeout(function () {
                console.log(getTimeLimited());
              }, 2100);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfOS9TY3JpcHRzL0JhaV85LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwicnVuIiwiZ2V0U2VydmVyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiY2lyY3VpdEJyZWFrZXIiLCJmbiIsInRpbWVUaHJlc2hvbGQiLCJzdGFydFRpbWUiLCJub3ciLCJjdXJyZW50VGltZSIsImdldFRpbWVMaW1pdGVkIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUUsQ0FDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFmUSxDQUhQO0VBcUJMO0VBRUFDLE1BdkJLLG9CQXVCSTtJQUNMLEtBQUtDLEdBQUw7RUFDSCxDQXpCSTtFQTJCTEMsYUEzQkssMkJBMkJXO0lBQ1osT0FBTyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBUDtFQUNILENBN0JJO0VBOEJDQyxjQTlCRCwwQkE4QmdCQyxFQTlCaEIsRUE4Qm9CQyxhQTlCcEIsRUE4Qm1DO0lBQUE7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQzlCQyxTQUQ4QixHQUNsQkwsSUFBSSxDQUFDTSxHQUFMLEVBRGtCO2NBQUEsaUNBRTdCLFlBQW1CO2dCQUN0QixJQUFNQyxXQUFXLEdBQUdQLElBQUksQ0FBQ00sR0FBTCxFQUFwQjs7Z0JBQ0EsSUFBSUMsV0FBVyxHQUFHRixTQUFkLEdBQTBCRCxhQUE5QixFQUE2QztrQkFDekMsT0FBTyxnQkFBUDtnQkFDSDs7Z0JBQ0QsT0FBT0QsRUFBRSxNQUFGLG1CQUFQO2NBQ0gsQ0FSbUM7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFTdkMsQ0F2Q0k7RUF5Q0NMLEdBekNELGlCQXlDTztJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDbUIsS0FBSSxDQUFDSSxjQUFMLENBQW9CLEtBQUksQ0FBQ0gsYUFBekIsRUFBd0MsSUFBeEMsQ0FEbkI7O1lBQUE7Y0FDSlMsY0FESTtjQUVSQyxVQUFVLENBQUMsWUFBTTtnQkFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILGNBQWMsRUFBMUI7Y0FBZ0MsQ0FBekMsRUFBMkMsR0FBM0MsQ0FBVjtjQUNBQyxVQUFVLENBQUMsWUFBTTtnQkFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILGNBQWMsRUFBMUI7Y0FBZ0MsQ0FBekMsRUFBMkMsSUFBM0MsQ0FBVjs7WUFIUTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQUlYLENBN0NJO0VBOENMSSxLQTlDSyxtQkE4Q0csQ0FFUCxDQWhESSxDQWtETDs7QUFsREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucnVuKClcbiAgICB9LFxuXG4gICAgZ2V0U2VydmVyVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgfSxcbiAgICBhc3luYyBjaXJjdWl0QnJlYWtlcihmbiwgdGltZVRocmVzaG9sZCkge1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSAtIHN0YXJ0VGltZSA+IHRpbWVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzZXJ2aWNlIGNsb3NlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBhc3luYyBydW4oKSB7XG4gICAgICAgIGxldCBnZXRUaW1lTGltaXRlZCA9IGF3YWl0IHRoaXMuY2lyY3VpdEJyZWFrZXIodGhpcy5nZXRTZXJ2ZXJUaW1lLCAyMDAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGNvbnNvbGUubG9nKGdldFRpbWVMaW1pdGVkKCkpOyB9LCAzMDApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjb25zb2xlLmxvZyhnZXRUaW1lTGltaXRlZCgpKTsgfSwgMjEwMClcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_8/Scripts/Bai_8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4730eC2TRBIqr0Jooh693bl', 'Bai_8');
// Bai_8/Scripts/Bai_8.js

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
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  getServerTime: function getServerTime() {
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
    return new Date(xmlHttp.getResponseHeader("Date")).getTime();
  },
  getLocalTime: function getLocalTime() {
    return new Date().getTime();
  },
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var localTime, serverTime, latancy;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.promisify(_this.getLocalTime)();

            case 2:
              localTime = _context.sent;
              _context.next = 5;
              return _this.promisify(_this.getServerTime)();

            case 5:
              serverTime = _context.sent;
              latancy = serverTime - localTime;
              console.log("Độ trễ : " + latancy);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  promisify: function promisify(fn) {
    return function () {
      try {
        var checkFunc = fn.apply(void 0, arguments);

        if (checkFunc instanceof Promise) {
          return checkFunc;
        } else {
          return Promise.resolve(checkFunc);
        }
      } catch (error) {
        return Promise.reject(errorr);
      }
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfOC9TY3JpcHRzL0JhaV84LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0U2VydmVyVGltZSIsInhtbEh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsImVycjEiLCJBY3RpdmVYT2JqZWN0IiwiZXJyMiIsImVycjMiLCJhbGVydCIsIm9wZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0b1N0cmluZyIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiRGF0ZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiZ2V0VGltZSIsImdldExvY2FsVGltZSIsIm9uTG9hZCIsInByb21pc2lmeSIsImxvY2FsVGltZSIsInNlcnZlclRpbWUiLCJsYXRhbmN5IiwiY29uc29sZSIsImxvZyIsImZuIiwiY2hlY2tGdW5jIiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnJvciIsInJlamVjdCIsImVycm9yciIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBT0w7RUFDQUMsYUFSSywyQkFRVztJQUNaLElBQUlDLE9BQUo7O0lBQ0EsSUFBSTtNQUNBQSxPQUFPLEdBQUcsSUFBSUMsY0FBSixFQUFWO0lBQ0gsQ0FGRCxDQUdBLE9BQU9DLElBQVAsRUFBYTtNQUNULElBQUk7UUFDQUYsT0FBTyxHQUFHLElBQUlHLGFBQUosQ0FBa0IsZ0JBQWxCLENBQVY7TUFDSCxDQUZELENBRUUsT0FBT0MsSUFBUCxFQUFhO1FBQ1gsSUFBSTtVQUNBSixPQUFPLEdBQUcsSUFBSUcsYUFBSixDQUFrQixtQkFBbEIsQ0FBVjtRQUNILENBRkQsQ0FFRSxPQUFPRSxJQUFQLEVBQWE7VUFDWDtVQUNBQyxLQUFLLENBQUMsb0JBQUQsQ0FBTDtRQUNIO01BQ0o7SUFDSjs7SUFDRE4sT0FBTyxDQUFDTyxJQUFSLENBQWEsTUFBYixFQUFxQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsRUFBckIsRUFBc0QsS0FBdEQ7SUFDQVgsT0FBTyxDQUFDWSxnQkFBUixDQUF5QixjQUF6QixFQUF5QyxXQUF6QztJQUNBWixPQUFPLENBQUNhLElBQVIsQ0FBYSxFQUFiO0lBQ0EsT0FBTyxJQUFJQyxJQUFKLENBQVNkLE9BQU8sQ0FBQ2UsaUJBQVIsQ0FBMEIsTUFBMUIsQ0FBVCxFQUE0Q0MsT0FBNUMsRUFBUDtFQUNILENBN0JJO0VBK0JMQyxZQS9CSywwQkErQlU7SUFDWCxPQUFPLElBQUlILElBQUosR0FBV0UsT0FBWCxFQUFQO0VBQ0gsQ0FqQ0k7RUFtQ0NFLE1BbkNELG9CQW1DVTtJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDYSxLQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFJLENBQUNGLFlBQXBCLEdBRGI7O1lBQUE7Y0FDTEcsU0FESztjQUFBO2NBQUEsT0FFYyxLQUFJLENBQUNELFNBQUwsQ0FBZSxLQUFJLENBQUNwQixhQUFwQixHQUZkOztZQUFBO2NBRUxzQixVQUZLO2NBR0xDLE9BSEssR0FHS0QsVUFBVSxHQUFHRCxTQUhsQjtjQUlYRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjRixPQUExQjs7WUFKVztZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQUtkLENBeENJO0VBMENMSCxTQTFDSyxxQkEwQ0tNLEVBMUNMLEVBMENTO0lBQ1YsT0FBTyxZQUFhO01BQ2hCLElBQUk7UUFDQSxJQUFJQyxTQUFTLEdBQUdELEVBQUUsTUFBRixtQkFBaEI7O1FBQ0EsSUFBSUMsU0FBUyxZQUFZQyxPQUF6QixFQUFrQztVQUM5QixPQUFPRCxTQUFQO1FBQ0gsQ0FGRCxNQUVPO1VBQ0gsT0FBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCRixTQUFoQixDQUFQO1FBQ0g7TUFDSixDQVBELENBT0UsT0FBT0csS0FBUCxFQUFjO1FBQ1osT0FBT0YsT0FBTyxDQUFDRyxNQUFSLENBQWVDLE1BQWYsQ0FBUDtNQUNIO0lBQ0osQ0FYRDtFQVlILENBdkRJO0VBeURMQyxLQXpESyxtQkF5REcsQ0FFUCxDQTNESSxDQTZETDs7QUE3REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgICAgICBsZXQgeG1sSHR0cDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHhtbEh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB4bWxIdHRwID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeG1sSHR0cCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycjMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9BSkFYIG5vdCBzdXBwb3J0ZWQsIHVzZSBDUFUgdGltZS5cbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBSkFYIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhtbEh0dHAub3BlbignSEVBRCcsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnRvU3RyaW5nKCksIGZhbHNlKTtcbiAgICAgICAgeG1sSHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuICAgICAgICB4bWxIdHRwLnNlbmQoJycpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeG1sSHR0cC5nZXRSZXNwb25zZUhlYWRlcihcIkRhdGVcIikpLmdldFRpbWUoKVxuICAgIH0sXG5cbiAgICBnZXRMb2NhbFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIH0sXG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsVGltZSA9IGF3YWl0IHRoaXMucHJvbWlzaWZ5KHRoaXMuZ2V0TG9jYWxUaW1lKSgpO1xuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gYXdhaXQgdGhpcy5wcm9taXNpZnkodGhpcy5nZXRTZXJ2ZXJUaW1lKSgpO1xuICAgICAgICBjb25zdCBsYXRhbmN5ID0gc2VydmVyVGltZSAtIGxvY2FsVGltZTtcbiAgICAgICAgY29uc29sZS5sb2coXCLEkOG7mSB0cuG7hSA6IFwiICsgbGF0YW5jeSlcbiAgICB9LFxuXG4gICAgcHJvbWlzaWZ5KGZuKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tGdW5jID0gZm4oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrRnVuYyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrRnVuYztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNoZWNrRnVuYylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcnIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bai_5/Scripts/Bai_5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3850+UTUxEmamJ+HD/sCCo', 'Bai_5');
// Bai_5/Scripts/Bai_5.js

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
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var startTime, i, currentTime, latancy;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getLocalTime();

            case 2:
              startTime = _context.sent;
              console.log("startTime", startTime);
              i = 0;

            case 5:
              if (!(i < 10)) {
                _context.next = 16;
                break;
              }

              _context.next = 8;
              return _this.getLocalTime();

            case 8:
              currentTime = _context.sent;
              console.log("currentTime", currentTime);
              latancy = currentTime - startTime;
              startTime = currentTime;
              console.log('Độ trễ: ' + latancy);

            case 13:
              i++;
              _context.next = 5;
              break;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getLocalTime: function getLocalTime() {
    return new Promise(function (resolve, reject) {
      var a = new Date().getTime();
      resolve(a);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNS9TY3JpcHRzL0JhaV81LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZ2V0TG9jYWxUaW1lIiwic3RhcnRUaW1lIiwiY29uc29sZSIsImxvZyIsImkiLCJjdXJyZW50VGltZSIsImxhdGFuY3kiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImEiLCJEYXRlIiwiZ2V0VGltZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBT0w7RUFFTUMsTUFURCxvQkFTVTtJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDVyxLQUFJLENBQUNDLFlBQUwsRUFEWDs7WUFBQTtjQUNQQyxTQURPO2NBRVhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLFNBQXpCO2NBQ1NHLENBSEUsR0FHRSxDQUhGOztZQUFBO2NBQUEsTUFHS0EsQ0FBQyxHQUFHLEVBSFQ7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FBQTtjQUFBLE9BSW1CLEtBQUksQ0FBQ0osWUFBTCxFQUpuQjs7WUFBQTtjQUlESyxXQUpDO2NBS1BILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJFLFdBQTNCO2NBRU1DLE9BUEMsR0FPU0QsV0FBVyxHQUFHSixTQVB2QjtjQVFQQSxTQUFTLEdBQUdJLFdBQVo7Y0FDQUgsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBYUcsT0FBekI7O1lBVE87Y0FHYUYsQ0FBQyxFQUhkO2NBQUE7Y0FBQTs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQVdkLENBcEJJO0VBc0JMSixZQUFZLEVBQUUsd0JBQVc7SUFDckIsT0FBTyxJQUFJTyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQW1CO01BQ2xDLElBQU1DLENBQUMsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBVjtNQUNBSixPQUFPLENBQUNFLENBQUQsQ0FBUDtJQUNILENBSE0sQ0FBUDtFQUlILENBM0JJO0VBNkJMRyxLQTdCSyxtQkE2QkcsQ0FFUCxDQS9CSSxDQWlDTDs7QUFqQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IGF3YWl0IHRoaXMuZ2V0TG9jYWxUaW1lKClcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydFRpbWVcIiwgc3RhcnRUaW1lKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gYXdhaXQgdGhpcy5nZXRMb2NhbFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudFRpbWVcIiwgY3VycmVudFRpbWUpXG4gICAgICAgXG4gICAgICAgICAgICBjb25zdCBsYXRhbmN5ID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfEkOG7mSB0cuG7hTogJyArIGxhdGFuY3kpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0TG9jYWxUaW1lIDpmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBjb25zdCBhID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICAgIHJlc29sdmUoYSlcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
