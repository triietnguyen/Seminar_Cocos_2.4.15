
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