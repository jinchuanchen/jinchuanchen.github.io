webpackJsonp([3],{

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(418)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(402),
  /* template */
  __webpack_require__(444),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/equipment-control-management.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] equipment-control-management.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ead22b1", Component.options)
  } else {
    hotAPI.reload("data-v-4ead22b1", Component.options)
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

/***/ 401:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        options: {
            type: Object,
            default: {}
        }
    },
    data: function () {
        return {
            data: {},
            councilHallList: [],
            councilHall: '',
            deviceList: []
        };
    },
    mounted() {
        if (this.options.data) {
            this.data = this.options.data;
        }
        this.searchCouncilHallList();
    },
    methods: {
        //会议室列表
        searchCouncilHallList() {
            this.$http.get(`/mcc/common/councilHallList`).then(res => {
                if (res.code != '0') return;
                res.result.map(item => {
                    item.code = item.councilHall;
                    item.name = item.councilHall;
                });
                this.councilHallList = res.result;
                if (this.data.councilHall) {
                    this.councilHallChange(this.data.councilHall);
                }
                // this.options.searchs[1].option = res.result
            });
        },
        councilHallChange(val) {
            this.$http.get(`/mcc/common/deviceListByCouncilHall?councilHall=${val}`).then(res => {
                if (res.code != '0') return;
                this.deviceList = res.result;
            });
        }
    }
});

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipment_control_components__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipment_control_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__equipment_control_components__);
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
    components: {
        BaseTable: __WEBPACK_IMPORTED_MODULE_0__components_Table___default.a,
        detaulComponent: __WEBPACK_IMPORTED_MODULE_1__equipment_control_components___default.a
    },
    data() {
        return {
            options: {
                searchs: [{
                    type: 'input',
                    placeholder: '设备名称',
                    prop: 'deviceNameSearch',
                    value: ''
                }, {
                    type: 'select',
                    placeholder: '会议室',
                    prop: 'councilHall',
                    option: [],
                    value: ''
                }, {
                    type: 'select',
                    placeholder: '控制类型',
                    prop: 'controlType',
                    option: [{
                        code: 1,
                        name: '红外'
                    }, {
                        code: 2,
                        name: '中控'
                    }],
                    value: ''
                }],
                columns: [{
                    title: '设备名称',
                    align: 'center',
                    minWidth: 160,
                    key: 'deviceNmae'

                }, {
                    title: '控制类型',
                    align: 'center',
                    width: 160,
                    key: 'controlType',
                    render: (h, params) => {
                        let name = '红外';
                        let cls = 'Infra-red';
                        if (params.row.controlType == 2) {
                            name = '中控';
                            cls = 'central-control';
                        }
                        return h('div', [h('Icon', {
                            props: {
                                custom: cls,
                                size: '16'
                            }
                        }), h('span', name)]);
                    }
                }, {
                    title: '控制',
                    align: 'center',
                    minWidth: 140,
                    key: 'controlName'
                }, {
                    title: '会议室',
                    align: 'center',
                    minWidth: 180,
                    key: 'councilHall'
                }, {
                    title: '控制码',
                    align: 'center',
                    key: 'controlCode',
                    width: 200
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
                                    this.addOrEdit(2, params.row);
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
                                    this.del(params.row.deviceControlId);
                                }
                            }
                        }, '删除')]);
                    }
                }],
                ajaxURL: `/mcc/device/deviceControlManage`
            },
            active: 1
        };
    },
    mounted() {
        this.searchCouncilHallList();
    },
    methods: {
        //会议室列表
        searchCouncilHallList() {
            this.$http.get(`/mcc/common/councilHallList`).then(res => {
                if (res.code != '0') return;
                res.result.map(item => {
                    item.code = item.councilHall;
                    item.name = item.councilHall;
                });
                this.options.searchs[1].option = res.result;
            });
        },
        addOrEdit(type, row) {
            let data = {
                deviceId: null,
                controlType: 1,
                controlName: '',
                controlCode: '',
                buttonStyle: null,
                councilHall: ''
            };
            let url = '/mcc/device/create';
            if (type == 2) {
                data = row;
                url = `/mcc/device/update`;
            }
            this.$popup({
                component: __WEBPACK_IMPORTED_MODULE_1__equipment_control_components___default.a,
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
                            let params = `?deviceId=${data.deviceId}&controlType=${data.controlType}&controlCode=${data.controlCode}&buttonStyle=${data.buttonStyle}&councilHall=${data.councilHall}&controlName=${data.controlName}`;
                            if (type == 2) {
                                params += `&deviceControlId=${data.deviceControlId}`;
                            }
                            this.$http.post(`${url}${params}`).then(res => {
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
        del(id) {
            this.$popup({
                content: '此操作将永久删除该记录, 是否继续?',
                onOk: vm => {
                    this.$http.post(`/mcc/device/delete?deviceControlId=${id}`).then(res => {
                        if (res.code != '0') {
                            this.$toast.error(res.message);
                        }
                        this.$toast.success(res.message);
                        this.$refs.table.searchAjax();
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(424)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(401),
  /* template */
  __webpack_require__(450),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/equipment-control-components.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] equipment-control-components.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e58e7f8", Component.options)
  } else {
    hotAPI.reload("data-v-8e58e7f8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "equipment-management-container"
  }, [_c('Header'), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "left-container"
  }, [_c('Corner'), _vm._v(" "), _c('ul', [_c('li', {
    class: _vm.active == '0' ? 'active' : '',
    on: {
      "click": function($event) {
        _vm.$router.back()
      }
    }
  }, [_vm._v("设备管控")]), _vm._v(" "), _c('li', {
    class: _vm.active == '1' ? 'active' : ''
  }, [_vm._v("设备控制管理")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "rigt-container"
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
      "click": function($event) {
        _vm.addOrEdit(1)
      }
    },
    slot: "append"
  }, [_vm._v("新建")])], 1), _vm._v(" "), _c('Corner')], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4ead22b1", module.exports)
  }
}

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "faultdetail"
  }, [_c('div', [_c('Form', {
    ref: "form",
    attrs: {
      "label-position": "left",
      "model": _vm.data,
      "label-width": 90,
      "show-message": false
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "会议室"
    }
  }, [_c('Select', {
    on: {
      "on-change": _vm.councilHallChange
    },
    model: {
      value: (_vm.data.councilHall),
      callback: function($$v) {
        _vm.$set(_vm.data, "councilHall", $$v)
      },
      expression: "data.councilHall"
    }
  }, _vm._l((_vm.councilHallList), function(item) {
    return _c('Option', {
      key: item.code,
      attrs: {
        "value": item.code
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "设备名称",
      "prop": "deviceId",
      "rules": {
        required: true,
        message: '',
        type: 'number',
        trigger: 'change'
      }
    }
  }, [_c('Select', {
    model: {
      value: (_vm.data.deviceId),
      callback: function($$v) {
        _vm.$set(_vm.data, "deviceId", $$v)
      },
      expression: "data.deviceId"
    }
  }, _vm._l((_vm.deviceList), function(item) {
    return _c('Option', {
      key: item.deviceId,
      attrs: {
        "value": item.deviceId
      }
    }, [_vm._v(_vm._s(item.deviceName))])
  }))], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "控制名 ",
      "prop": "controlName",
      "rules": {
        required: true,
        message: '',
        trigger: 'blur'
      }
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "控制名"
    },
    model: {
      value: (_vm.data.controlName),
      callback: function($$v) {
        _vm.$set(_vm.data, "controlName", $$v)
      },
      expression: "data.controlName"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "控制类型",
      "prop": "controlType",
      "rules": {
        required: true,
        type: 'number',
        message: '',
        trigger: 'change'
      }
    }
  }, [_c('Select', {
    model: {
      value: (_vm.data.controlType),
      callback: function($$v) {
        _vm.$set(_vm.data, "controlType", $$v)
      },
      expression: "data.controlType"
    }
  }, _vm._l(([{
    code: 1,
    name: '红外'
  }, {
    code: 2,
    name: '中控'
  }]), function(item) {
    return _c('Option', {
      key: item.code,
      attrs: {
        "value": item.code
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "控制码",
      "prop": "controlCode",
      "rules": {
        required: true,
        message: '',
        trigger: 'blur'
      }
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "控制码"
    },
    model: {
      value: (_vm.data.controlCode),
      callback: function($$v) {
        _vm.$set(_vm.data, "controlCode", $$v)
      },
      expression: "data.controlCode"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "按钮风格",
      "prop": "buttonStyle"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "按钮风格"
    },
    model: {
      value: (_vm.data.buttonStyle),
      callback: function($$v) {
        _vm.$set(_vm.data, "buttonStyle", $$v)
      },
      expression: "data.buttonStyle"
    }
  }, _vm._l(([{
    code: 0,
    name: '默认'
  }, {
    code: 1,
    name: '浅蓝'
  }, {
    code: 2,
    name: '浅青'
  }, {
    code: 3,
    name: '橙色'
  }]), function(item) {
    return _c('Option', {
      key: item.code,
      attrs: {
        "value": item.code
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8e58e7f8", module.exports)
  }
}

/***/ })

});