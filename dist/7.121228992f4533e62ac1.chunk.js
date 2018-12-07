webpackJsonp([7],{

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(422)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(414),
  /* template */
  __webpack_require__(457),
  /* scopeId */
  "data-v-0f40ed98",
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/receipt-by-mobile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] receipt-by-mobile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f40ed98", Component.options)
  } else {
    hotAPI.reload("data-v-0f40ed98", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 414:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'mobile',
    data() {
        return {
            height: window.innerHeight - 100
        };
    },
    mounted() {
        console.log(this.height);
    }
});

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "containerByMobole"
  }, [_c('div', {
    staticClass: "header"
  }), _vm._v(" "), _c('div', {
    staticClass: "container",
    style: ({
      height: (_vm.height + "px")
    })
  }, [_c('div', {
    staticClass: "container-conent"
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0f40ed98", module.exports)
  }
}

/***/ })

});