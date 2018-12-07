webpackJsonp([8],{

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(416)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(406),
  /* template */
  __webpack_require__(442),
  /* scopeId */
  "data-v-1e4c2b86",
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/index-assets.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index-assets.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e4c2b86", Component.options)
  } else {
    hotAPI.reload("data-v-1e4c2b86", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            // 故障统计
            faultCount: {
                columns: ['日期', '故障次数'],
                rows: [{ '日期': '1', '故障次数': 1393 }, { '日期': '2', '故障次数': 3530 }, { '日期': '3', '故障次数': 2923 }, { '日期': '4', '故障次数': 1723 }, { '日期': '5', '故障次数': 3792 }, { '日期': '6', '故障次数': 4593 }, { '日期': '7', '故障次数': 5201 }]
            },
            lineExtend: {
                legend: {
                    show: false
                },
                grid: {
                    top: '44px',
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                xAxis: {
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#1B4290'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 14
                    }
                },
                yAxis: {
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#1B4290'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#206AFF',
                            type: 'dashed',
                            opacity: '0.4'
                        }
                    },
                    axisLabel: {
                        formatter: (value, index) => value,
                        fontSize: 14
                    }
                },
                textStyle: {
                    color: '#fff'
                },
                series: {
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 7,
                    itemStyle: {
                        color: '#116BE8'
                    },
                    lineStyle: {
                        color: '#1B4290'
                    },
                    smooth: false
                }
            }
        };
    }
});

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('Header', {
    attrs: {
      "mold": "asset"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "220px"
    }
  }, [_c('p', {
    staticClass: "iau-title"
  }, [_vm._v("录入统计")]), _vm._v(" "), _c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "338px"
    }
  }, [_c('p', {
    staticClass: "iau-title"
  }, [_vm._v("故障统计")]), _vm._v(" "), _c('ve-line', {
    attrs: {
      "data": _vm.faultCount,
      "extend": _vm.lineExtend,
      "width": "484px",
      "height": "274px"
    }
  }), _vm._v(" "), _c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "338px"
    }
  }, [_c('p', {
    staticClass: "iau-title"
  }, [_vm._v("派单统计")]), _vm._v(" "), _c('Corner')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "380px"
    }
  }, [_c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "178px"
    }
  }, [_c('p', {
    staticClass: "iau-title"
  }, [_vm._v("会议室运行图")]), _vm._v(" "), _c('Select', {
    staticClass: "float-rigt",
    attrs: {
      "placeholder": "全部",
      "no-found-text": ""
    }
  }), _vm._v(" "), _c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "338px"
    }
  }, [_c('p', {
    staticClass: "iau-title"
  }, [_vm._v("设备使用次数")]), _vm._v(" "), _c('Corner')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "rigt"
  }, [_c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "316px"
    }
  }, [_c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "290px"
    }
  }, [_c('p', {
    staticClass: "iau-title"
  }, [_vm._v("设备年限峰值")]), _vm._v(" "), _vm._l((5), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item-text"
    }, [_c('i', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('p', [_vm._v("数字音频处理 ")]), _vm._v(" "), _c('span', [_vm._v("设备超过期限")])])
  }), _vm._v(" "), _c('Corner')], 2), _vm._v(" "), _c('div', {
    staticClass: "inner-shadow",
    staticStyle: {
      "height": "290px"
    }
  }, [_c('p', {
    staticClass: "iau-title"
  }, [_vm._v("设备使用期限")]), _vm._v(" "), _vm._l((5), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item-text"
    }, [_c('i', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('p', [_vm._v("数字音频处理 ")]), _vm._v(" "), _c('span', [_vm._v("设备即将过期")])])
  }), _vm._v(" "), _c('Corner')], 2)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1e4c2b86", module.exports)
  }
}

/***/ })

});