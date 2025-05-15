
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
    return new Promise(function (resolve, resject) {
      var controller = new AbortController();
      var signal = controller.signal;
      var timer = setTimeout(function () {
        controller.abort();
        resject('Request timeout');
      }, timeout);
      fetch(url, {
        signal: signal
      }).then(function (response) {
        console.log("Request is complete \uD83C\uDF89");
      })["catch"](function (e) {
        console.log("Fetch error: " + e.message + " \uD83D\uDE2F");
      });
    });
  },
  start: function start() {} // update (dt) {},

}); // fetchDataWithTimeout(url, timeout) {
//     return new Promise((resolve, reject) => {
//         const controller = new AbortController(); 
//         const signal = controller.signal;
//         const timer = setTimeout(() => {
//             controller.abort(); 
//             reject('Request timed out'); 
//         }, timeout);
//         fetch(url, { signal })
//             .then(response => {
//                 clearTimeout(timer); 
//                 if (!response.ok) {
//                     reject('Network response was not ok');
//                     return;
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data); 
//             })
//             .catch(err => {
//                 if (err.name === 'AbortError') {
//                     reject('Fetch aborted due to timeout');
//                 } else {
//                     reject(err); 
//                 }
//             });
//     });
// },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9CYWlfNi9TY3JpcHRzL0JhaV82LmpzIl0sIm5hbWVzIjpbIkl0ZW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJUSU1FT1VUIiwiVVJMIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsImZldGNoRGF0YVdpdGhUaW1lb3V0IiwidGhlbiIsImRhdGEiLCJ0aXRsZSIsImJvZHkiLCJlcnJvciIsIm1lc3NhZ2UiLCJ1cmwiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNqZWN0IiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsInRpbWVyIiwic2V0VGltZW91dCIsImFib3J0IiwiZmV0Y2giLCJyZXNwb25zZSIsImUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDViw4Q0FEVSxFQUVWLDhDQUZVLEVBR1YsOENBSFUsRUFJViw4Q0FKVSxFQUtWLDhDQUxVLEVBTVYsOENBTlUsRUFPViw4Q0FQVSxDQUFkO0FBVUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsSUFERDtJQUVSQyxHQUFHLEVBQUU7RUFGRyxDQUhQO0VBUUw7RUFFQUMsTUFWSyxvQkFVSTtJQUNMQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CVCxLQUFLLENBQUMsQ0FBRCxDQUF6QixFQURLLENBRUw7O0lBQ0EsS0FBS1Usb0JBQUwsQ0FBMEJKLEdBQTFCLEVBQStCRCxPQUEvQixFQUNLTSxJQURMLENBQ1UsVUFBQUMsSUFBSSxFQUFJO01BQ1ZKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFDTUcsSUFETjtNQUVBSixPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQ01HLElBQUksQ0FBQ0MsS0FEWDtNQUVBTCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQ01HLElBQUksQ0FBQ0UsSUFEWDtJQUVILENBUkwsV0FTVyxVQUFBQyxLQUFLLEVBQUk7TUFDWlAsT0FBTyxDQUFDTyxLQUFSLENBQWMsUUFBZCxFQUNNQSxLQUFLLENBQUNDLE9BRFo7SUFFSCxDQVpMO0VBYUgsQ0ExQkk7RUE2QkxOLG9CQTdCSyxnQ0E2QmdCTyxHQTdCaEIsRUE2QnFCQyxPQTdCckIsRUE2QjhCO0lBQy9CLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsT0FBVixFQUFzQjtNQUNyQyxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsZUFBSixFQUFuQjtNQUNBLElBQVFDLE1BQVIsR0FBbUJGLFVBQW5CLENBQVFFLE1BQVI7TUFDQSxJQUFNQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQzNCSixVQUFVLENBQUNLLEtBQVg7UUFDQU4sT0FBTyxDQUFDLGlCQUFELENBQVA7TUFDSCxDQUh1QixFQUdyQkgsT0FIcUIsQ0FBeEI7TUFJQVUsS0FBSyxDQUFDWCxHQUFELEVBQU07UUFBRU8sTUFBTSxFQUFOQTtNQUFGLENBQU4sQ0FBTCxDQUF1QmIsSUFBdkIsQ0FBNEIsVUFBQWtCLFFBQVEsRUFBSTtRQUVwQ3JCLE9BQU8sQ0FBQ0MsR0FBUjtNQUNILENBSEQsV0FHUyxVQUFBcUIsQ0FBQyxFQUFJO1FBQ1Z0QixPQUFPLENBQUNDLEdBQVIsbUJBQTRCcUIsQ0FBQyxDQUFDZCxPQUE5QjtNQUNILENBTEQ7SUFPSCxDQWRNLENBQVA7RUFlSCxDQTdDSTtFQWdETGUsS0FoREssbUJBZ0RHLENBRVAsQ0FsREksQ0FvREw7O0FBcERLLENBQVQsR0F5REE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgSXRlbXMgPSBbXG4gICAgJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xJyxcbiAgICAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzInLFxuICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMycsXG4gICAgJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy80JyxcbiAgICAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzUnLFxuICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvNicsXG4gICAgJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy83Jyxcbl07XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFRJTUVPVVQ6IDUwMDAsXG4gICAgICAgIFVSTDogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xJyxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJdGVtJywgSXRlbXNbMV0pXG4gICAgICAgIC8vIFVzYWdlIGV4YW1wbGVcbiAgICAgICAgdGhpcy5mZXRjaERhdGFXaXRoVGltZW91dChVUkwsIFRJTUVPVVQpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBkYXRhOidcbiAgICAgICAgICAgICAgICAgICAgLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGl0bGU6J1xuICAgICAgICAgICAgICAgICAgICAsIGRhdGEudGl0bGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCb2R5OidcbiAgICAgICAgICAgICAgICAgICAgLCBkYXRhLmJvZHkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6J1xuICAgICAgICAgICAgICAgICAgICAsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuXG4gICAgZmV0Y2hEYXRhV2l0aFRpbWVvdXQodXJsLCB0aW1lb3V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVzamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2lnbmFsIH0gPSBjb250cm9sbGVyO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgcmVzamVjdCgnUmVxdWVzdCB0aW1lb3V0JylcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpXG4gICAgICAgICAgICBmZXRjaCh1cmwsIHsgc2lnbmFsIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlcXVlc3QgaXMgY29tcGxldGUg8J+OiWApO1xuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEZldGNoIGVycm9yOiAke2UubWVzc2FnZX0g8J+Yr2ApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcbiAgICB9LFxuXG5cbiAgICBzdGFydCgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuXG5cblxuLy8gZmV0Y2hEYXRhV2l0aFRpbWVvdXQodXJsLCB0aW1lb3V0KSB7XG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTsgXG4vLyAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuXG4vLyAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7IFxuLy8gICAgICAgICAgICAgcmVqZWN0KCdSZXF1ZXN0IHRpbWVkIG91dCcpOyBcbi8vICAgICAgICAgfSwgdGltZW91dCk7XG5cbi8vICAgICAgICAgZmV0Y2godXJsLCB7IHNpZ25hbCB9KVxuLy8gICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7IFxuLy8gICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7IFxuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnRmV0Y2ggYWJvcnRlZCBkdWUgdG8gdGltZW91dCcpO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpOyBcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICB9KTtcbi8vIH0sXG4iXX0=