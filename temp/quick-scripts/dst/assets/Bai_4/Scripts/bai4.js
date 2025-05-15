
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNC9TY3JpcHRzL2JhaTQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsIml0ZW1QcmVmYWIiLCJQcmVmYWIiLCJhdXRvQnRuIiwiQnV0dG9uIiwicG9wVXBGYWlsZWQiLCJwb3BVcFN1Y2Nlc3MiLCJmYWRlT3ZlcmxheSIsImluaXQiLCJpIiwidGltZSIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsInRpdGxlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsImNvbXBJdGVtIiwiYWRkQ2hpbGQiLCJvbkxvYWQiLCJhY3RpdmUiLCJidXR0b24iLCJub2RlIiwib24iLCJjbG9zZVBvcFVwU3VjY2VzcyIsInN0YXJ0Iiwic2hvd1BvcFVwRmFpbGVkIiwib3BhY2l0eSIsInR3ZWVuIiwidG8iLCJjbG9zZVBvcFVwRmFpbGVkIiwiY2FsbCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiZ2V0U2NlbmUiLCJuYW1lIiwic2hvd1BvcFVwU3VjY2VzIiwiYXV0b0NsaWNrIiwibWlzaW9uMSIsImNoaWxkcmVuIiwibWlzaW9uMiIsIm1pc2lvbjMiLCJtaXNpb240IiwibWlzaW9uNSIsIm1pc2lvbjYiLCJtaXNpb243IiwibWlzaW9uOCIsIm1pc2lvbjkiLCJtaXNpb24xMCIsIndhaXQiLCJjb250cmlidXRlIiwic3RlcFRpbWUiLCJjb21wbGV0ZSIsInN0b3JlcyIsInN0b3JlIiwicnVuIiwicmVzdWx0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxJQURKO0lBRVJDLFVBQVUsRUFBRU4sRUFBRSxDQUFDTyxN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QWM7Z0JBQ1YsS0FBS2hCLGVBQUw7Y0FDSCxDQUZELE1BRU87Z0JBQ0gsS0FBS1YsZUFBTDtjQUNIOztZQVpXO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUY7O0lBQUE7TUFBQTtJQUFBOztJQUFBO0VBQUEsR0EvSUw7RUErSkwrQixNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUFHO0FBL0pwQixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb250ZW50OiBjYy5Ob2RlLFxuICAgICAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIGF1dG9CdG46IGNjLkJ1dHRvbixcbiAgICAgICAgcG9wVXBGYWlsZWQ6IGNjLk5vZGUsXG4gICAgICAgIHBvcFVwU3VjY2VzczogY2MuTm9kZSxcbiAgICAgICAgZmFkZU92ZXJsYXk6IGNjLk5vZGUsXG5cbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKGksIHRpbWUpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICBsZXQgdGl0bGUgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGl0bGUuc3RyaW5nID0gXCJOaGnhu4dtIHbhu6UgXCIgKyBpO1xuICAgICAgICBsZXQgY29tcEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGNvbXBJdGVtLmluaXQoXCJOaGnhu4dtIHbhu6UgXCIgKyBpLCB0aW1lKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnBvcFVwRmFpbGVkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcFVwU3VjY2Vzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KDEsIDMpO1xuICAgICAgICB0aGlzLmluaXQoMiwgMyk7XG4gICAgICAgIHRoaXMuaW5pdCgzLCAzKTtcbiAgICAgICAgdGhpcy5pbml0KDQsIDMpO1xuICAgICAgICB0aGlzLmluaXQoNSwgMyk7XG4gICAgICAgIHRoaXMuaW5pdCg2LCAzKTtcbiAgICAgICAgdGhpcy5pbml0KDcsIDMpO1xuICAgICAgICB0aGlzLmluaXQoOCwgMyk7XG4gICAgICAgIHRoaXMuaW5pdCg5LCAzKTtcbiAgICAgICAgdGhpcy5pbml0KDEwLCAzKTtcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLnBvcFVwU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcIkNsb3NlQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5jbG9zZVBvcFVwU3VjY2VzcywgdGhpcylcbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHsgfSxcblxuICAgIHNob3dQb3BVcEZhaWxlZCgpIHtcbiAgICAgICAgdGhpcy5wb3BVcEZhaWxlZC5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5wb3BVcEZhaWxlZC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wVXBGYWlsZWQpXG4gICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIGNsb3NlUG9wVXBGYWlsZWQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wVXBGYWlsZWQpXG4gICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcFVwRmFpbGVkLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3ZlcmxheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU92ZXJsYXkub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZhZGVPdmVybGF5KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIHNob3dQb3BVcFN1Y2NlcygpIHtcbiAgICAgICAgdGhpcy5wb3BVcFN1Y2Nlc3Mub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMucG9wVXBTdWNjZXNzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5wb3BVcFN1Y2Nlc3MpXG4gICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIGNsb3NlUG9wVXBTdWNjZXNzKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLnBvcFVwU3VjY2VzcylcbiAgICAgICAgICAgIC50bygwLjQsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wVXBTdWNjZXNzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3ZlcmxheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU92ZXJsYXkub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZhZGVPdmVybGF5KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuXG4gICAgYXV0b0NsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXV0b0J0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGxldCBtaXNpb24xID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb24yID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb24zID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb240ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb241ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb242ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb243ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzZdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb244ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzddLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb245ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuWzhdLmdldENvbXBvbmVudChcIml0ZW1cIik7XG4gICAgICAgIGxldCBtaXNpb24xMCA9IHRoaXMuY29udGVudC5jaGlsZHJlbls5XS5nZXRDb21wb25lbnQoXCJpdGVtXCIpO1xuXG4gICAgICAgIG1pc2lvbjEwLndhaXQoW21pc2lvbjksIG1pc2lvbjYsIG1pc2lvbjJdKTtcbiAgICAgICAgbWlzaW9uOS53YWl0KFttaXNpb244LCBtaXNpb243XSk7XG4gICAgICAgIG1pc2lvbjYud2FpdChbbWlzaW9uNCwgbWlzaW9uNV0pO1xuICAgICAgICBtaXNpb240LndhaXQobWlzaW9uMyk7XG4gICAgICAgIG1pc2lvbjIud2FpdChtaXNpb24xKTtcblxuICAgICAgICB0aGlzLmNvbnRyaWJ1dGUoMywgbWlzaW9uMTApO1xuXG4gICAgfSxcblxuICAgIC8vIGNvbnRyaWJ1dGU6IGFzeW5jIGZ1bmN0aW9uIChzdGVwVGltZSwgLi4uc3RvcmVzKSB7XG4gICAgLy8gICAgIGZvciAoY29uc3Qgc3RvcmUgb2Ygc3RvcmVzKSB7XG4gICAgLy8gICAgICAgICBhd2FpdCBzdG9yZS5ydW4oc3RlcFRpbWUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAvLyAgICAgZm9yIChjb25zdCBzdG9yZSBvZiBzdG9yZXMpIHtcbiAgICAvLyAgICAgICAgIGlmIChzdG9yZS5leGVjdXRlZCA9PSBmYWxzZSkge1xuXG4gICAgLy8gICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNob3dQb3BVcEZhaWxlZCgpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVyblxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChjb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnNob3dQb3BVcFN1Y2NlcygpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5zaG93UG9wVXBGYWlsZWQoKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfSxcblxuICAgIGNvbnRyaWJ1dGU6IGFzeW5jIGZ1bmN0aW9uIChzdGVwVGltZSwgLi4uc3RvcmVzKSB7XG4gICAgbGV0IGNvbXBsZXRlID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHN0b3Jlcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yZS5ydW4oc3RlcFRpbWUpO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5zaG93UG9wVXBTdWNjZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dQb3BVcEZhaWxlZCgpO1xuICAgIH1cbn0sXG5cblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7IH0sXG59KTsiXX0=