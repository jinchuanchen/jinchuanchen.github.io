webpackJsonp([1],{

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(421)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(417),
  /* template */
  __webpack_require__(456),
  /* scopeId */
  "data-v-0509af14",
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/user-management.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user-management.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0509af14", Component.options)
  } else {
    hotAPI.reload("data-v-0509af14", Component.options)
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

/***/ 416:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        options: {
            type: Object,
            default: {}
        }
    },
    data: function () {
        return {
            data: {
                managerName: '',
                managerNickname: '',
                managerPassword: '',
                phoneNumber: '',
                smsNotification: true,
                emailNotification: true,
                managerRoleid: 1
            },

            roleList: [{
                name: '超级管理员', code: 1
            }, {
                name: '运维人员', code: 2
            }, {
                name: '供应商', code: 3
            }, {
                name: '原厂', code: 4
            }]
        };
    },
    mounted() {
        if (this.options.data) {
            this.data = this.options.data;
        }
    },
    methods: {}
});

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_detail_components__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_detail_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__user_detail_components__);
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
    components: {
        BaseTable: __WEBPACK_IMPORTED_MODULE_0__components_Table___default.a,
        detaulComponent: __WEBPACK_IMPORTED_MODULE_1__user_detail_components___default.a
    },
    data() {
        return {
            options: {
                searchs: [{
                    type: 'input',
                    placeholder: '用户名',
                    prop: 'managerSearch',
                    value: ''
                }],
                columns: [{
                    title: 'ID',
                    align: 'center',
                    key: 'managerId',
                    width: 100
                }, {
                    title: '用户名',
                    align: 'center',
                    key: 'managerName',
                    minWidth: 140
                }, {
                    title: '密码',
                    align: 'center',
                    key: 'code',
                    width: 80,
                    render: h => {
                        return h('span', "******");
                    }
                }, {
                    title: '手机号',
                    align: 'center',
                    width: 140,
                    key: 'phoneNumber'
                }, {
                    title: '昵称',
                    align: 'center',
                    key: 'managerNickname',
                    minWidth: 140
                },
                // {
                //     align: 'center',
                //     title: '部门',
                //     key: 'code',
                //     width:100,
                // },
                {
                    title: '角色',
                    align: 'center',
                    width: 120,
                    key: 'managerRoleid',
                    render: (h, params) => {
                        return h('span', params.row.managerRoleid == 1 ? '超级管理员' : params.row.managerRoleid == 2 ? '运维人员' : params.row.managerRoleid == 3 ? '供应商' : '原厂');
                    }
                }, {
                    title: '创建时间',
                    align: 'center',
                    width: 190,
                    key: 'createDate'
                }, {
                    title: '操作',
                    width: 144,
                    align: 'center',
                    render: (dom, params) => {
                        return dom('span', [dom('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            on: {
                                click: evt => {
                                    this.editUesr(params.row);
                                }
                            }
                        }, '编辑'), dom('Button', {
                            style: {
                                marginLeft: '12px'
                            },
                            props: {
                                type: 'warning',
                                size: 'small'
                            },
                            on: {
                                click: evt => {
                                    this.delUser(params.row.managerId);
                                }
                            }
                        }, '删除')]);
                    }
                }],
                ajaxURL: `/mcc/manager`
            },
            active: 0
        };
    },
    mounted() {},
    methods: {
        addUser() {
            let url = `mcc/manager/create`;
            this.$popup({
                component: __WEBPACK_IMPORTED_MODULE_1__user_detail_components___default.a,
                hideTips: true,
                loading: true,
                props: {
                    options: {
                        data: {
                            managerName: '',
                            managerNickname: '',
                            managerPassword: '',
                            phoneNumber: '',
                            smsNotification: true,
                            emailNotification: true,
                            managerRoleid: 1
                        }
                    }
                },
                onOk: (vm, child) => {
                    child.$refs.form.validate(valid => {
                        if (valid) {
                            let data = child.data;
                            let params = `?managerName=${data.managerName}&managerNickname=${data.managerNickname}&managerPassword=${data.managerPassword}&phoneNumber=${data.phoneNumber}&smsNotification=${data.smsNotification}&emailNotification=${data.emailNotification}&managerRoleid=${data.managerRoleid}`;

                            this.$http.post(url + params).then(res => {
                                if (res.code != '0') {
                                    this.$toast.error(res.message);
                                    vm.regain();
                                    return;
                                }
                                this.$toast.success(res.message);
                                vm.remove();
                                this.$refs.table.searchAjax();
                            });
                        } else {
                            vm.regain();
                        }
                    });
                }
            });
        },
        editUesr(data) {
            let url = `mcc/manager/update`;
            this.$popup({
                component: __WEBPACK_IMPORTED_MODULE_1__user_detail_components___default.a,
                hideTips: true,
                loading: true,
                props: {
                    options: {
                        data: data
                    }
                },
                onOk: (vm, child) => {
                    child.$refs.form.validate(valid => {
                        if (valid) {
                            let data = child.data;
                            let params = `?managerId=${data.managerId}&managerName=${data.managerName}&managerNickname=${data.managerNickname}&managerPassword=${data.managerPassword}&phoneNumber=${data.phoneNumber}&smsNotification=${data.smsNotification}&emailNotification=${data.emailNotification}&managerRoleid=${data.managerRoleid}`;

                            this.$http.post(url + params).then(res => {
                                if (res.code != '0') {
                                    this.$toast.error(res.message);
                                    vm.regain();
                                    return;
                                }
                                this.$toast.success(res.message);
                                vm.remove();
                                this.$refs.table.searchAjax();
                            });
                        } else {
                            vm.regain();
                        }
                    });
                }
            });
        },
        delUser(id) {
            this.$popup({
                content: '此操作将永久删除该记录, 是否继续?',
                onOk: (vm, child) => {
                    this.$http.post(`/mcc/manager/delete?managerId=${id}`).then(res => {
                        if (res.code != '0') {
                            this.$toast.error(res.message);
                            // vm.regain()
                            return;
                        }
                        // vm.remove()
                        this.$toast.success(res.message);
                        this.$refs.table.searchAjax();
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(430)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(416),
  /* template */
  __webpack_require__(465),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/user-detail-components.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user-detail-components.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ad9882f", Component.options)
  } else {
    hotAPI.reload("data-v-7ad9882f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('Header'), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('Corner'), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "rigt"
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
      "click": _vm.addUser
    },
    slot: "append"
  }, [_vm._v("新建用户")])], 1), _vm._v(" "), _c('Corner')], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', {
    staticClass: "active"
  }, [_vm._v("用户管理")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0509af14", module.exports)
  }
}

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "faultdetail"
  }, [_c('div', [_c('Form', {
    ref: "form",
    attrs: {
      "label-position": "left",
      "model": _vm.data,
      "label-width": 78,
      "show-message": false
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "用户名",
      "prop": "managerName",
      "rules": {
        required: true,
        message: '',
        trigger: 'blur'
      }
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "用户名"
    },
    model: {
      value: (_vm.data.managerName),
      callback: function($$v) {
        _vm.$set(_vm.data, "managerName", $$v)
      },
      expression: "data.managerName"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "昵称 ",
      "prop": "managerNickname"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "昵称"
    },
    model: {
      value: (_vm.data.managerNickname),
      callback: function($$v) {
        _vm.$set(_vm.data, "managerNickname", $$v)
      },
      expression: "data.managerNickname"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "密码",
      "prop": "managerPassword"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "密码",
      "type": "password"
    },
    model: {
      value: (_vm.data.managerPassword),
      callback: function($$v) {
        _vm.$set(_vm.data, "managerPassword", $$v)
      },
      expression: "data.managerPassword"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "手机号",
      "prop": "phoneNumber"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "手机号"
    },
    model: {
      value: (_vm.data.phoneNumber),
      callback: function($$v) {
        _vm.$set(_vm.data, "phoneNumber", $$v)
      },
      expression: "data.phoneNumber"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "角色",
      "prop": "managerRoleid",
      "rules": {
        required: true,
        message: '',
        trigger: 'change',
        type: 'number'
      }
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "角色"
    },
    model: {
      value: (_vm.data.managerRoleid),
      callback: function($$v) {
        _vm.$set(_vm.data, "managerRoleid", $$v)
      },
      expression: "data.managerRoleid"
    }
  }, _vm._l((_vm.roleList), function(item) {
    return _c('Option', {
      key: item.code,
      attrs: {
        "value": item.code
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1), _vm._v(" "), _c('div', [_c('span', {
    staticStyle: {
      "margin-right": "10px"
    }
  }, [_vm._v("短信通知"), _c('i-switch', {
    staticStyle: {
      "margin-left": "10px"
    },
    model: {
      value: (_vm.data.smsNotification),
      callback: function($$v) {
        _vm.$set(_vm.data, "smsNotification", $$v)
      },
      expression: "data.smsNotification"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticStyle: {
      "float": "right"
    }
  }, [_vm._v("邮件通知"), _c('i-switch', {
    staticStyle: {
      "margin-left": "10px"
    },
    model: {
      value: (_vm.data.emailNotification),
      callback: function($$v) {
        _vm.$set(_vm.data, "emailNotification", $$v)
      },
      expression: "data.emailNotification"
    }
  })], 1)])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7ad9882f", module.exports)
  }
}

/***/ })

});