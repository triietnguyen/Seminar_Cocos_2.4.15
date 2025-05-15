
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