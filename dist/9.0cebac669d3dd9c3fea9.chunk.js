webpackJsonp([9],{

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(427)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(403),
  /* template */
  __webpack_require__(453),
  /* scopeId */
  "data-v-eaa21068",
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/equipment-monitor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] equipment-monitor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eaa21068", Component.options)
  } else {
    hotAPI.reload("data-v-eaa21068", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 403:
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
        return {};
    },
    methods: {
        // 选择会议室
        selectRoom: function (item) {}
    }
});

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('Header', {
    attrs: {
      "mold": "eqipment"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "left inner-shadow"
  }, [_c('div', {
    staticClass: "head inner-shadow"
  }, [_vm._v("\n                会议室列表\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((4), function(item) {
    return _c('div', {
      key: item,
      staticClass: "item-room",
      class: {
        active: item === 3
      },
      on: {
        "click": function($event) {
          _vm.selectRoom(item)
        }
      }
    }, [_vm._v("\n                    深圳本部\n                    "), _c('span')])
  })), _vm._v(" "), _c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "head inner-shadow"
  }, [_vm._v("\n            深圳本部\n            "), _c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('div', {
    staticClass: "view inner-shadow"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("电视机")]), _vm._v(" "), _c('div', {
    staticClass: "tinfo"
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("设备控制")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("开机")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("确定")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("上")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("下")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("左")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("右")]), _c('Button', {
    staticClass: "btn-oran"
  }, [_vm._v("音量+")]), _c('Button', {
    staticClass: "btn-oran"
  }, [_vm._v("音量-")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("信号源")]), _c('Button', {
    staticClass: "btn-gree"
  }, [_vm._v("静音")])], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("空调机")]), _vm._v(" "), _c('div', {
    staticClass: "tinfo"
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("设备控制")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("开")]), _c('Button', {
    staticClass: "btn-gren"
  }, [_vm._v("关")])], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("投影机")]), _vm._v(" "), _c('div', {
    staticClass: "tinfo"
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("设备状态")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("开")]), _c('Button', {
    staticClass: "btn-gren"
  }, [_vm._v("关")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("上")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("下")]), _c('Button', {
    staticClass: "btn-gree"
  }, [_vm._v("切换HDMI")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tinfo",
    staticStyle: {
      "margin-top": "-30px"
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("设备控制")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("开")]), _c('Button', {
    staticClass: "btn-gren"
  }, [_vm._v("关")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("上")]), _c('Button', {
    staticClass: "btn-blue"
  }, [_vm._v("下")]), _c('Button', {
    staticClass: "btn-gree"
  }, [_vm._v("切换HDMI")])], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("宝利通会议终端")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "rigt"
  }, [_c('div', {
    staticClass: "monitor-frame inner-shadow"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("会场监控画面")]), _vm._v(" "), _c('div', {
    staticClass: "frame"
  }), _vm._v(" "), _c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "task-view inner-shadow"
  }, [_c('Corner')], 1)])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tinfo"
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("设备控制")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-eaa21068", module.exports)
  }
}

/***/ })

});