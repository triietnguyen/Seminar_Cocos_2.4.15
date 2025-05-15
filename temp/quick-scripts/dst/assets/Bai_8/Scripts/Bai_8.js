
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