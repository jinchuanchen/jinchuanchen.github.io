webpackJsonp([2],{

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(417)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(405),
  /* template */
  __webpack_require__(443),
  /* scopeId */
  "data-v-2a7512ad",
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/fault-management.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fault-management.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a7512ad", Component.options)
  } else {
    hotAPI.reload("data-v-2a7512ad", Component.options)
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

/***/ 404:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        options: {
            type: Object,
            default: {}
        }
    },
    data: function () {
        return {
            data: this.options.data,
            roleList: [],
            implementerList: []
        };
    },
    mounted() {
        this.searchImplementers();
    },
    methods: {
        //获取实施人
        searchImplementers() {
            this.$http.get(`/mcc/faultTicket/implementers`).then(res => {
                if (res.code != 0) return;
                this.roleList = res.result;
            });
        },
        roleChange(val) {
            this.data.implementerId = '';
            if (!val) {
                this.implementerList = [];
                return;
            }
            this.roleList.map(item => {
                if (item.roleId == val) {
                    this.implementerList = item.implementers;
                }
            });
        }
    }
});

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fault_detail_components__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fault_detail_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fault_detail_components__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



let searchs = [{
    type: 'input',
    placeholder: '设备名称',
    prop: 'deviceNameSearch',
    value: ''
}, {
    type: 'select',
    placeholder: '选择派单状态',
    prop: 'ticketStatus',
    option: [{
        code: 1,
        name: '未派单'
    }, {
        code: 2,
        name: '已派单'
    }, {
        code: 3,
        name: '已接单'
    }, {
        code: 4,
        name: '处理中'
    }, {
        code: 5,
        name: '完工'
    }, {
        code: 6,
        name: '不处理'
    }]
}];
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        BaseTable: __WEBPACK_IMPORTED_MODULE_0__components_Table___default.a,
        detaulComponent: __WEBPACK_IMPORTED_MODULE_1__fault_detail_components___default.a
    },
    data() {
        return {
            options: {
                searchs: searchs,
                columns: [],
                ajaxURL: `/mcc/faultTicket`
            },
            columnsOrder: [{
                title: '工单ID',
                align: 'center',
                key: 'faultTicketId',
                width: 100
            }, {
                title: '设备名称',
                align: 'center',
                key: 'deviceName',
                minWidth: 180
            }, {
                title: '会议室',
                align: 'center',
                key: 'councilHall',
                minWidth: 100
            }, {
                title: '工单状态',
                align: 'center',
                key: 'ticketStatus',
                width: 100,
                render: (h, params) => {
                    let ticketStatuName = '';
                    let color = '#10B49B';
                    switch (params.row.ticketStatus) {
                        case 1:
                            ticketStatuName = '未派单';
                            color = '#E00005';
                            break;
                        case 2:
                            ticketStatuName = '已派单';
                            color = '#0A73F2';
                            break;
                        case 3:
                            ticketStatuName = '已接单';
                            break;
                        case 4:
                            ticketStatuName = '处理中';
                            color = '#EA9812';
                            break;
                        case 5:
                            ticketStatuName = '完工';
                            break;
                        case 6:
                            ticketStatuName = '不处理';
                            break;

                        default:
                            break;
                    }
                    return h('span', {
                        style: {
                            color: color
                        },
                        domProps: {
                            innerHTML: ticketStatuName
                        }
                    });
                }
            }, {
                title: '描述',
                align: 'center',
                width: 160,
                key: 'describe'
            }, {
                align: 'center',
                title: '创建时间',
                width: 190,
                key: 'createDate'
            }, {
                title: '创建人',
                align: 'center',
                width: 100,
                key: 'founder'
            }, {
                title: '操作',
                width: 144,
                align: 'center',
                render: (dom, params) => {
                    return params.row.ticketStatus !== 1 ? dom('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        on: {
                            click: evt => {
                                this.detail('detail', params.row);
                            }
                        }
                    }, '派单详情') : dom('span', [dom('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        on: {
                            click: evt => {
                                // console.log('todo')
                                this.detail('sendOrder', params.row);
                                this.$refs.table.searchAjax();
                            }
                        }
                    }, '派单'), dom('Button', {
                        style: {
                            marginLeft: '12px'
                        },
                        props: {
                            type: 'warning',
                            size: 'small'
                        },
                        on: {
                            click: evt => {
                                // console.log('todo')
                                this.detail('destroy', params.row);
                            }
                        }
                    }, '销单')]);
                }
            }],
            columnsLog: [{
                title: '日志ID',
                align: 'center',
                key: 'faultId'
            }, {
                title: '设备名称',
                align: 'center',
                key: 'deviceName'
            }, {
                title: '描述',
                align: 'center',
                key: 'describe'
            }, {
                title: '故障分类',
                align: 'center',
                key: 'faultType'
            }, {
                title: '创建时间',
                align: 'center',
                key: 'faultTime'
            }],
            active: 0

        };
    },
    mounted() {
        this.options.columns = this.columnsOrder;
    },
    methods: {
        tabActive(type) {
            this.active = type;
            if (type) {
                this.options.columns = this.columnsLog;
                this.options.ajaxURL = `/mcc/faultLog`;
                this.options.searchs = [{
                    type: 'input',
                    placeholder: '设备名称',
                    prop: 'deviceNameSearch',
                    value: ''
                }];
                this.$refs.table.searchAjax();
            } else {
                this.options.columns = this.columnsOrder;
                this.options.ajaxURL = `/mcc/faultTicket`;
                this.options.searchs = searchs;
                this.$refs.table.searchAjax();
            }
        },
        detail(type, row) {
            if (type == 'destroy') {
                this.$popup({
                    content: '此操作将永久删除该记录, 是否继续?',
                    onOk: vm => {
                        console.log(vm);
                        this.$http.post(`/mcc/faultTicket/receive?faultTicketId=${row.faultTicketId}&type=2`).then(res => {
                            if (res.code != '0') this.$toast.error(res.message);
                            this.$toast.success(res.message);
                        });
                    }
                });
            } else {
                row.implementerId = null;
                row.managerRoleid = null;
                this.$popup({
                    component: __WEBPACK_IMPORTED_MODULE_1__fault_detail_components___default.a,
                    hideTips: true,
                    loading: true,
                    props: {
                        options: {
                            type: type,
                            data: row
                        }
                    },
                    onOk: (vm, child) => {
                        if (type == 'detail') return vm.remove();
                        child.$refs.form.validate(valid => {
                            if (valid) {
                                let data = child.data;
                                let params = `?faultTicketId=${data.faultTicketId}&managerRoleid=${data.managerRoleid}&implementerId=${data.implementerId}&remark=${data.remark}`;
                                this.$http.post(`/mcc/faultTicket/update${params}`).then(res => {
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
            }
        }
    }
});

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(426)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(404),
  /* template */
  __webpack_require__(452),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/cai/Documents/project/orangePomelo/src/pages/fault-detail-components.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fault-detail-components.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfb5fbd0", Component.options)
  } else {
    hotAPI.reload("data-v-cfb5fbd0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('Header'), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('Corner'), _vm._v(" "), _c('ul', [_c('li', {
    class: _vm.active == '0' ? 'active' : '',
    on: {
      "click": function($event) {
        _vm.tabActive(0)
      }
    }
  }, [_vm._v("故障工单")]), _vm._v(" "), _c('li', {
    class: _vm.active == '1' ? 'active' : '',
    on: {
      "click": function($event) {
        _vm.tabActive(1)
      }
    }
  }, [_vm._v("故障日志")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "rigt"
  }, [_c('base-table', {
    ref: "table",
    attrs: {
      "options": _vm.options
    }
  }), _vm._v(" "), _c('Corner')], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2a7512ad", module.exports)
  }
}

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "faultdetail"
  }, [(_vm.options.type == 'detail') ? _c('div', [_c('Steps', {
    attrs: {
      "current": 5,
      "direction": "vertical"
    }
  }, _vm._l((_vm.data.handles), function(item, index) {
    return _c('Step', {
      key: index,
      attrs: {
        "title": item.handleDesc,
        "content": ("时间：" + (item.handleTime))
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "detailfoot"
  }, [_c('p', [_vm._v("预计耗时：" + _vm._s(_vm.data.estimatedTime))]), _vm._v(" "), _c('p', [_vm._v("实际耗时：" + _vm._s(_vm.data.actualTime))])])], 1) : (_vm.options.type == 'sendOrder') ? _c('div', [_c('Form', {
    ref: "form",
    attrs: {
      "label-position": "left",
      "model": _vm.data,
      "label-width": 78,
      "show-message": false
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "设备名称",
      "prop": "deviceName"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "",
      "value": _vm.data.deviceName,
      "readonly": ""
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "会议室"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "",
      "value": _vm.data.councilHall,
      "readonly": ""
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "故障描述"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "",
      "type": "textarea",
      "value": _vm.data.describe,
      "readonly": ""
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "角色",
      "prop": "managerRoleid",
      "rules": {
        required: true,
        message: '必填',
        type: 'number',
        trigger: 'change'
      }
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": ""
    },
    on: {
      "on-change": _vm.roleChange
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
      key: item.roleId,
      attrs: {
        "value": item.roleId
      }
    }, [_vm._v(_vm._s(item.roleName))])
  }))], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "实施人",
      "prop": "implementerId",
      "rules": {
        required: true,
        message: '必填',
        type: 'number',
        trigger: 'change'
      }
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.data.implementerId),
      callback: function($$v) {
        _vm.$set(_vm.data, "implementerId", $$v)
      },
      expression: "data.implementerId"
    }
  }, _vm._l((_vm.implementerList), function(item) {
    return _c('Option', {
      key: item.managerId,
      attrs: {
        "value": item.managerId
      }
    }, [_vm._v(_vm._s(item.managerNickname))])
  }))], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "备注"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "",
      "type": "textarea"
    },
    model: {
      value: (_vm.data.remark),
      callback: function($$v) {
        _vm.$set(_vm.data, "remark", $$v)
      },
      expression: "data.remark"
    }
  })], 1)], 1)], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cfb5fbd0", module.exports)
  }
}

/***/ })

});