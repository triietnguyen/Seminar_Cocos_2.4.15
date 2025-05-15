
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