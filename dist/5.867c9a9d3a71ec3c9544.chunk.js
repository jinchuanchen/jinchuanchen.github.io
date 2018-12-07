webpackJsonp([5],{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(429)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(415),
  /* template */
  __webpack_require__(464),
  /* scopeId */
  "data-v-7a6e677f",
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a6e677f", Component.options)
  } else {
    hotAPI.reload("data-v-7a6e677f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 394:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'base-table',
    props: {
        options: {
            type: Object, default: function () {
                return {
                    searchs: [],
                    columns: []
                };
            }
        }
    },
    data() {
        return {
            headerId: 'header' + Date.now(),
            data: [],
            append: this.$slots.append,
            total: 0,
            pager: {
                currPage: 1,
                pageSize: 10
            },
            height: window.innerHeight - 240,
            loading: false
        };
    },
    computed: {
        // 表格头部
        columns() {
            return this.options.columns;
        }
    },
    mounted() {
        // console.log(this.height);

        // for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        //     this.data.push({
        //         code: '控制编码',
        //         name: '操控类型',
        //     })
        // }

        if (this.options.ajaxURL) this.ajaxRequest();
    },
    methods: {
        //查询按钮
        searchAjax() {
            this.pager.currPage = 1;
            this.ajaxRequest();
        },
        // 查询数据
        ajaxRequest: function () {
            const ajaxURL = this.options.ajaxURL;
            if (!ajaxURL) return console.log('%c 请填写请求接口连接 ', 'background:#ed4014;color:#fff');

            const params = this.searchParam();
            // this.loading=true
            this.$http.get(ajaxURL, { params }).then(res => {
                // this.loading=false
                if (res.code != '0') return;
                this.data = res.result.list;
                this.total = res.result.totalRow;
            }).catch(res => {
                // this.loading=false
            });
        },

        // 查询参数
        searchParam: function () {
            let obj = {
                page: this.pager.currPage,
                limit: this.pager.pageSize
            };

            for (let item of this.options.searchs) {
                const value = typeof item.value === 'string' ? item.value.trim() : item.value;
                if (item.prop && value !== '') obj[item.prop] = value;
            }

            return obj;
        },

        // 监听页码
        currpageMonitor: function (currPage) {
            this.pager.currPage = currPage;
            this.ajaxRequest();
        },

        // 监听页数
        pagesizeMonitor: function (pageSize) {
            this.pager.pageSize = pageSize;
            this.ajaxRequest();
        }
    }
});

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(395)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(394),
  /* template */
  __webpack_require__(397),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/components/Table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23b371d4", Component.options)
  } else {
    hotAPI.reload("data-v-23b371d4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "base-table"
  }, [(!_vm.options.hideHeader) ? _c('div', {
    staticClass: "header",
    attrs: {
      "id": _vm.headerId
    }
  }, [_vm._l((_vm.options.searchs), function(item, index) {
    return [(item.type === 'input') ? [_c('Input', {
      key: 'input' + index,
      attrs: {
        "placeholder": item.placeholder,
        "clearable": ""
      },
      on: {
        "on-enter": _vm.searchAjax
      },
      model: {
        value: (item['value']),
        callback: function($$v) {
          _vm.$set(item, 'value', $$v)
        },
        expression: "item['value']"
      }
    })] : (item.type === 'select') ? [_c('Select', {
      key: 'select' + index,
      attrs: {
        "placeholder": item.placeholder,
        "clearable": "",
        "not-found-text": ""
      },
      model: {
        value: (item['value']),
        callback: function($$v) {
          _vm.$set(item, 'value', $$v)
        },
        expression: "item['value']"
      }
    }, _vm._l((item.option), function(opt) {
      return _c('Option', {
        key: opt.code,
        attrs: {
          "value": opt.code
        }
      }, [_vm._v(_vm._s(opt.name))])
    }))] : _vm._e()]
  }), _vm._v(" "), _c('Button', {
    on: {
      "click": _vm.searchAjax
    }
  }, [_vm._v("搜索")]), (_vm.append) ? [_vm._t("append")] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('Table', {
    staticClass: "iau-table",
    attrs: {
      "columns": _vm.columns,
      "data": _vm.data,
      "no-data-text": "",
      "height": ("" + _vm.height),
      "loading": _vm.loading
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('Page', {
    attrs: {
      "current": _vm.pager.currPage,
      "page-size": _vm.pager.pageSize,
      "total": _vm.total,
      "no-data-text": "暂时没有数据",
      "no-filtered-data-text": "暂时没有数据",
      "show-sizer": "",
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.currpageMonitor,
      "on-page-size-change": _vm.pagesizeMonitor
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-23b371d4", module.exports)
  }
}

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Table__);
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
    components: {
        BaseTable: __WEBPACK_IMPORTED_MODULE_0__components_Table___default.a
    },
    data() {
        return {
            options: {
                searchs: [{
                    type: 'input',
                    prop: 'input'
                }],
                columns: [{
                    title: '控制类型',
                    key: 'name'
                }, {
                    title: '控制编码',
                    key: 'code'
                }, {
                    title: '操作',
                    render: (dom, { row, index }) => {
                        return dom('span', [dom('Button', {
                            props: {
                                type: 'primary', size: 'small'
                            },
                            on: {
                                click: evt => {
                                    console.log('todo');
                                }
                            }
                        }, '编辑'), dom('Button', {
                            style: {
                                marginLeft: '12px'
                            },
                            props: {
                                type: 'warning', size: 'small'
                            },
                            on: {
                                click: evt => this.$refs.table.data.splice(index, 1)
                            }
                        }, '删除')]);
                    }
                }]
            }
        };
    },
    methods: {
        // 新增操作
        addList: function () {
            this.$refs.table.data.push({
                code: '操控类型',
                name: '控制编码'
            });
        }
    }
});

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('Header'), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "left inner-shadow"
  }, [_c('Corner')], 1), _vm._v(" "), _c('div', {
    staticClass: "rigt inner-shadow"
  }, [_c('base-table', {
    ref: "table",
    attrs: {
      "options": _vm.options
    }
  }, [_c('Button', {
    attrs: {
      "slot": "append"
    },
    on: {
      "click": _vm.addList
    },
    slot: "append"
  }, [_vm._v("新增")]), _vm._v(" "), _c('Button', {
    attrs: {
      "slot": "append"
    },
    on: {
      "click": _vm.addList
    },
    slot: "append"
  }, [_vm._v("自增")])], 1), _vm._v(" "), _c('Corner')], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7a6e677f", module.exports)
  }
}

/***/ })

});