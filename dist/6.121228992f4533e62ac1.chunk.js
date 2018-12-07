webpackJsonp([6],{

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(428)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(412),
  /* template */
  __webpack_require__(463),
  /* scopeId */
  "data-v-6f464f70",
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/index-entrance.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index-entrance.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f464f70", Component.options)
  } else {
    hotAPI.reload("data-v-6f464f70", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 412:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    mounted() {},
    methods: {
        jump(code) {
            switch (code) {
                case 1:
                    // this.$router.push('asset-management')
                    this.$router.push('index-assets');
                    break;
                case 2:
                    // this.$router.push('equipment-control-management')
                    this.$router.push('equipment-monitor');
                    break;
                case 3:
                    this.$router.push('fault-management');
                    break;
            }
        },
        systemMangement() {
            this.$router.push('user-management');
        }
    }
});

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "896ebb0101a64eb4bc60c60c0d425948.png";

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "background"
  }, [_c('header', {
    staticClass: "ui-headr"
  }, [_c('img', {
    staticClass: "left",
    attrs: {
      "src": __webpack_require__(245),
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "mide",
    attrs: {
      "src": __webpack_require__(244),
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "rigt",
    attrs: {
      "src": __webpack_require__(246),
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "back",
    attrs: {
      "src": __webpack_require__(448),
      "alt": ""
    },
    on: {
      "click": _vm.systemMangement
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    on: {
      "click": function($event) {
        _vm.jump(1)
      }
    }
  }, [_c('p', [_vm._v("资产管理")])]), _vm._v(" "), _c('div', {
    on: {
      "click": function($event) {
        _vm.jump(2)
      }
    }
  }, [_c('p', [_vm._v("设备监控")])]), _vm._v(" "), _c('div', {
    on: {
      "click": function($event) {
        _vm.jump(3)
      }
    }
  }, [_c('p', [_vm._v("故障管理")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6f464f70", module.exports)
  }
}

/***/ })

});