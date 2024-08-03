(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_12q8r_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_12q8r_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_12q8r_96{position:relative;display:flex;align-items:center;column-gap:6px}@media (hover: hover){._wrapper_12q8r_96:hover{cursor:pointer}}._disabled_12q8r_108{pointer-events:none;opacity:.5}._input_12q8r_113{position:absolute;width:1px;height:1px;background-color:transparent}._input_12q8r_113[disabled]{pointer-events:none}._icon_12q8r_123{width:12px;height:12px;display:flex;align-items:center}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pg4yx_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pg4yx_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._DSText_pg4yx_96{font:400 11px/13px MSSansSerifMedium,sans-serif;color:var(--text-color)}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import Ve, { useState as L, useEffect as ne } from "react";
var te = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function mr() {
  if ($e)
    return z;
  $e = 1;
  var o = Ve, l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, m = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(y, p, S) {
    var R, b = {}, j = null, T = null;
    S !== void 0 && (j = "" + S), p.key !== void 0 && (j = "" + p.key), p.ref !== void 0 && (T = p.ref);
    for (R in p)
      c.call(p, R) && !v.hasOwnProperty(R) && (b[R] = p[R]);
    if (y && y.defaultProps)
      for (R in p = y.defaultProps, p)
        b[R] === void 0 && (b[R] = p[R]);
    return { $$typeof: l, type: y, key: j, ref: T, props: b, _owner: m.current };
  }
  return z.Fragment = s, z.jsx = h, z.jsxs = h, z;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function gr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ve, l = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), y = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), ae = Symbol.iterator, ze = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[ze];
      return typeof r == "function" ? r : null;
    }
    var O = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var a = O.ReactDebugCurrentFrame, f = a.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var He = !1, Ne = !1, Me = !1, We = !1, Ye = !1, le;
    le = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === v || Ye || e === m || e === S || e === R || We || e === T || He || Ne || Me || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === b || e.$$typeof === h || e.$$typeof === y || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case s:
          return "Portal";
        case v:
          return "Profiler";
        case m:
          return "StrictMode";
        case S:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ie(r) + ".Consumer";
          case h:
            var t = e;
            return ie(t._context) + ".Provider";
          case p:
            return Le(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : C(e.type) || "Memo";
          case j: {
            var f = e, d = f._payload, u = f._init;
            try {
              return C(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, V = 0, oe, se, ue, ce, fe, de, ve;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ue() {
      {
        if (V === 0) {
          oe = console.log, se = console.info, ue = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function Be() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: oe
            }),
            info: D({}, e, {
              value: se
            }),
            warn: D({}, e, {
              value: ue
            }),
            error: D({}, e, {
              value: ce
            }),
            group: D({}, e, {
              value: fe
            }),
            groupCollapsed: D({}, e, {
              value: de
            }),
            groupEnd: D({}, e, {
              value: ve
            })
          });
        }
        V < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = O.ReactCurrentDispatcher, B;
    function N(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (f) {
            var a = f.stack.trim().match(/\n( *(at )?)/);
            B = a && a[1] || "";
          }
        return `
` + B + e;
      }
    }
    var G = !1, M;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ge();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      G = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = U.current, U.current = null, Ue();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch ($) {
              a = $;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch ($) {
              a = $;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            a = $;
          }
          e();
        }
      } catch ($) {
        if ($ && a && typeof $.stack == "string") {
          for (var i = $.stack.split(`
`), w = a.stack.split(`
`), _ = i.length - 1, g = w.length - 1; _ >= 1 && g >= 0 && i[_] !== w[g]; )
            g--;
          for (; _ >= 1 && g >= 0; _--, g--)
            if (i[_] !== w[g]) {
              if (_ !== 1 || g !== 1)
                do
                  if (_--, g--, g < 0 || i[_] !== w[g]) {
                    var E = `
` + i[_].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, E), E;
                  }
                while (_ >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        G = !1, U.current = d, Be(), Error.prepareStackTrace = f;
      }
      var P = e ? e.displayName || e.name : "", Ce = P ? N(P) : "";
      return typeof e == "function" && M.set(e, Ce), Ce;
    }
    function Je(e, r, t) {
      return pe(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ke(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case S:
          return N("Suspense");
        case R:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Je(e.render);
          case b:
            return W(e.type, r, t);
          case j: {
            var a = e, f = a._payload, d = a._init;
            try {
              return W(d(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, _e = {}, me = O.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Xe(e, r, t, a, f) {
      {
        var d = Function.call.bind(Y);
        for (var u in e)
          if (d(e, u)) {
            var i = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              i = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              i = _;
            }
            i && !(i instanceof Error) && (q(f), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof i), q(null)), i instanceof Error && !(i.message in _e) && (_e[i.message] = !0, q(f), x("Failed %s type: %s", t, i.message), q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function J(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function be(e) {
      if (er(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), ge(e);
    }
    var F = O.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, ye, K;
    K = {};
    function tr(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = C(F.current.type);
        K[t] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(F.current.type), e.ref), K[t] = !0);
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          ye || (ye = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, a, f, d, u) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function sr(e, r, t, a, f) {
      {
        var d, u = {}, i = null, w = null;
        t !== void 0 && (be(t), i = "" + t), nr(r) && (be(r.key), i = "" + r.key), tr(r) && (w = r.ref, ar(r, f));
        for (d in r)
          Y.call(r, d) && !rr.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (d in _)
            u[d] === void 0 && (u[d] = _[d]);
        }
        if (i || w) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && lr(u, g), w && ir(u, g);
        }
        return or(e, i, w, f, a, F.current, u);
      }
    }
    var X = O.ReactCurrentOwner, xe = O.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function we() {
      {
        if (X.current) {
          var e = C(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function cr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + C(e._owner.type) + "."), k(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), k(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Q(a) && je(a, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Ie(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), u; !(u = d.next()).done; )
              Q(u.value) && je(u.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = C(r);
          Xe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = C(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            k(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Te(e, r, t, a, f, d) {
      {
        var u = qe(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = ur(f);
          w ? i += w : i += we();
          var _;
          e === null ? _ = "null" : J(e) ? _ = "array" : e !== void 0 && e.$$typeof === l ? (_ = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, i);
        }
        var g = sr(e, r, t, f, d);
        if (g == null)
          return g;
        if (u) {
          var E = r.children;
          if (E !== void 0)
            if (a)
              if (J(E)) {
                for (var P = 0; P < E.length; P++)
                  Se(E[P], e);
                Object.freeze && Object.freeze(E);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(E, e);
        }
        return e === c ? dr(g) : fr(g), g;
      }
    }
    function vr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function hr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var pr = hr, _r = vr;
    I.Fragment = c, I.jsx = pr, I.jsxs = _r;
  }()), I;
}
process.env.NODE_ENV === "production" ? te.exports = mr() : te.exports = gr();
var n = te.exports;
const ee = {
  "theme-light": "_theme-light_qp7ji_16",
  "theme-dark": "_theme-dark_qp7ji_36",
  "ds-button-arrow": "_ds-button-arrow_qp7ji_96",
  "arrow-bottom": "_arrow-bottom_qp7ji_124",
  "arrow-top": "_arrow-top_qp7ji_128",
  "size-small": "_size-small_qp7ji_132",
  "size-medium": "_size-medium_qp7ji_137"
};
function Oe({
  ariaLabel: o,
  className: l = "",
  direction: s,
  disabled: c,
  id: m,
  onClick: v,
  size: h
}) {
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      "aria-label": o,
      className: `
				${ee["ds-button-arrow"]}
				${ee[`arrow-${s}`]}
				${ee[`size-${h}`]}
				${l}
			`,
      "data-testid": `ds-button-arrow-${m}-${s}`,
      disabled: c,
      type: "button",
      onClick: v
    }
  );
}
const br = "_frame_hpida_96", Rr = "_title_hpida_104", ke = {
  "theme-light": "_theme-light_hpida_16",
  "theme-dark": "_theme-dark_hpida_36",
  frame: br,
  title: Rr
};
function Mr({
  children: o,
  className: l = "",
  id: s,
  title: c
}) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${ke.frame} ${l}`,
      "data-testid": `ds-frame-${s}`,
      children: [
        c && /* @__PURE__ */ n.jsx(
          Fe,
          {
            className: ke.title,
            text: c,
            id: `frame-${s}`
          }
        ),
        o
      ]
    }
  );
}
const yr = ({
  isChecked: o = !1
}) => o ? /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", children: [
  /* @__PURE__ */ n.jsxs("g", { className: "layer", children: [
    /* @__PURE__ */ n.jsx("title", { children: "Layer 1" }),
    /* @__PURE__ */ n.jsx("path", { clipRule: "evenodd", d: "m8,0l-4,0l0,1l-2,0l0,1l-1,0l0,2l-1,0l0,4l1,0l0,2l1,0l0,-2l-1,0l0,-4l1,0l0,-2l2,0l0,-1l4,0l0,1l2,0l0,-1l-2,0l0,-1z", fill: "gray", fillRule: "evenodd", id: "svg_1" }),
    /* @__PURE__ */ n.jsx("path", { clipRule: "evenodd", d: "m8,1l-4,0l0,1l-2,0l0,2l-1,0l0,4l1,0l0,1l1,0l0,-1l-1,0l0,-4l1,0l0,-1l1,0l0,-1l4,0l0,1l2,0l0,-1l-2,0l0,-1z", fill: "#000", fillRule: "evenodd", id: "svg_2" }),
    /* @__PURE__ */ n.jsx("path", { clipRule: "evenodd", d: "m9,3l1,0l0,1l-1,0l0,-1zm1,5l0,-4l1,0l0,4l-1,0zm-2,2l0,-1l1,0l0,-1l1,0l0,2l-2,0zm-4,0l0,1l4,0l0,-1l-4,0zm0,0l0,-1l-2,0l0,1l2,0z", fill: "#DFDFDF", fillRule: "evenodd", id: "svg_3" }),
    /* @__PURE__ */ n.jsx("path", { clipRule: "evenodd", d: "m11,2l-1,0l0,2l1,0l0,4l-1,0l0,2l-2,0l0,1l-4,0l0,-1l-2,0l0,1l2,0l0,1l4,0l0,-1l2,0l0,-1l1,0l0,-2l1,0l0,-4l-1,0l0,-2z", fill: "#fff", fillRule: "evenodd", id: "svg_4" }),
    /* @__PURE__ */ n.jsx("path", { clipRule: "evenodd", d: "m4,2l4,0l0,1l1,0l0,1l1,0l0,4l-1,0l0,1l-1,0l0,1l-4,0l0,-1l-1,0l0,-1l-1,0l0,-4l1,0l0,-1l1,0l0,-1z", fill: "#fff", fillRule: "evenodd", id: "svg_5" }),
    /* @__PURE__ */ n.jsx("use", { id: "svg_7", x: "3.88", xlinkHref: "#svg_6", y: "3.88" })
  ] }),
  /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsx("symbol", { xmlns: "http://www.w3.org/2000/svg", height: "4", id: "svg_6", width: "4", children: /* @__PURE__ */ n.jsx("path", { clipRule: "evenodd", d: "m3,0l-2,0l0,1l-1,0l0,2l1,0l0,1l2,0l0,-1l1,0l0,-2l-1,0l0,-1z", fill: "black", fillRule: "evenodd" }) }) })
] }) : o ? null : /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", children: [
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z", fill: "gray" }),
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z", fill: "#000" }),
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z", fill: "#DFDFDF" }),
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z", fill: "#fff" }),
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z", fill: "#fff" })
] }), xr = () => /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", children: [
  /* @__PURE__ */ n.jsx(
    "path",
    {
      fill: "#DFDFDF",
      fillRule: "evenodd",
      d: "M15 0H0v16h1V1h14V0z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ n.jsx(
    "path",
    {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M2 1H1v14h1V2h12V1H2z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ n.jsx(
    "path",
    {
      fill: "#000",
      fillRule: "evenodd",
      d: "M16 17H0v-1h15V0h1v17z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ n.jsx(
    "path",
    {
      fill: "gray",
      fillRule: "evenodd",
      d: "M15 1h-1v14H1v1h14V1z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ n.jsx("path", { fill: "silver", d: "M2 2h12v13H2z" }),
  /* @__PURE__ */ n.jsx(
    "path",
    {
      fill: "#000",
      fillRule: "evenodd",
      d: "M11 6H4v1h1v1h1v1h1v1h1V9h1V8h1V7h1V6z",
      clipRule: "evenodd"
    }
  )
] }), wr = "_input_e0ixd_111", Er = "_label_e0ixd_112", re = {
  "theme-light": "_theme-light_e0ixd_16",
  "theme-dark": "_theme-dark_e0ixd_36",
  "wrapper-horizontal": "_wrapper-horizontal_e0ixd_96",
  "wrapper-vertical": "_wrapper-vertical_e0ixd_102",
  input: wr,
  label: Er
};
function jr({ initialValue: o, onChange: l }) {
  const [s, c] = L(o);
  return ne(() => {
    c(o);
  }, [o, c]), { value: s, handleInputChange: (v) => {
    const h = v.target.value;
    c(h), l && l(h);
  } };
}
function Sr({
  className: o = "",
  type: l = "text",
  id: s,
  disabled: c = !1,
  readonly: m = !1,
  initialValue: v = "",
  labelName: h,
  wrapperLayout: y = "vertical",
  min: p,
  max: S,
  onChange: R
}) {
  const { value: b, handleInputChange: j } = jr({ initialValue: v, onChange: R }), T = `ds-input-${s}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${re[`wrapper-${y}`]} ${o}`,
      "data-testid": T,
      children: [
        h && /* @__PURE__ */ n.jsx(
          "label",
          {
            className: re.label,
            "data-testid": `ds-input-label-${s}`,
            htmlFor: T,
            children: h
          }
        ),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            id: T,
            className: re.input,
            "data-testid": `ds-input-input-${s}`,
            type: l,
            disabled: c,
            readOnly: m,
            value: b,
            min: p ?? void 0,
            max: S ?? void 0,
            name: T,
            onChange: j
          }
        )
      ]
    }
  );
}
const Tr = "_wrapper_12q8r_96", Cr = "_disabled_12q8r_108", $r = "_input_12q8r_113", Dr = "_icon_12q8r_123", A = {
  "theme-light": "_theme-light_12q8r_16",
  "theme-dark": "_theme-dark_12q8r_36",
  wrapper: Tr,
  disabled: Cr,
  input: $r,
  icon: Dr
};
function Or({ initialChecked: o, onChange: l }) {
  const [s, c] = L(o);
  return ne(() => {
    c(o);
  }, [o]), {
    checked: s,
    handleChange: (v) => {
      l && l(), c(v.target.checked);
    }
  };
}
const Wr = ({
  initialChecked: o = !1,
  disabled: l = !1,
  id: s,
  onChange: c,
  name: m,
  text: v
}) => {
  const {
    checked: h,
    handleChange: y
  } = Or({
    initialChecked: o,
    onChange: c
  });
  return /* @__PURE__ */ n.jsxs(
    "label",
    {
      "aria-label": v.visible ? void 0 : v.content,
      className: `${A.wrapper} ${l ? A.disabled : ""}`,
      "data-testid": `${s}-radio`,
      children: [
        /* @__PURE__ */ n.jsx(
          "input",
          {
            className: A.input,
            checked: h,
            "data-testid": `${s}-radio-input`,
            disabled: l,
            name: m,
            type: "radio",
            value: s,
            onChange: y
          }
        ),
        /* @__PURE__ */ n.jsx(
          "span",
          {
            className: A.icon,
            "data-testid": `${s}-radio-icon`,
            children: /* @__PURE__ */ n.jsx(yr, { isChecked: h })
          }
        ),
        v.visible && /* @__PURE__ */ n.jsx(
          Fe,
          {
            className: A.text,
            id: s,
            text: v.content
          }
        )
      ]
    }
  );
};
function kr(o) {
  const [l, s] = L(o);
  return {
    value: l,
    handleChange: (m) => {
      s(m.target.value);
    }
  };
}
const Pr = "_wrapper_1id5f_96", Vr = "_label_1id5f_100", Fr = "_select_1id5f_105", zr = "_arrow_1id5f_115", H = {
  "theme-light": "_theme-light_1id5f_16",
  "theme-dark": "_theme-dark_1id5f_36",
  wrapper: Pr,
  label: Vr,
  select: Fr,
  arrow: zr
};
function Yr({
  className: o = "",
  id: l,
  required: s = !1,
  disabled: c = !1,
  modelValue: m,
  options: v,
  labelName: h,
  onSelect: y
}) {
  const { value: p, handleChange: S } = kr(m), R = (b) => {
    S(b), y(b);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `${H.wrapper} ${o}`, children: [
    h && /* @__PURE__ */ n.jsx(
      "label",
      {
        className: H.label,
        "data-testid": `ds-select-label-${l}`,
        htmlFor: l,
        children: h
      }
    ),
    /* @__PURE__ */ n.jsx(
      "select",
      {
        className: H.select,
        "data-testid": `ds-select-select-${l}`,
        disabled: c,
        id: l,
        name: l,
        onChange: R,
        required: s,
        value: p,
        children: v.map((b, j) => /* @__PURE__ */ n.jsx(
          "option",
          {
            className: H.option,
            "data-testid": `ds-select-option-${l}-${j}`,
            value: b.value,
            children: b.name
          },
          `${l}-${b.value}`
        ))
      }
    ),
    /* @__PURE__ */ n.jsx(
      "span",
      {
        className: H.arrow,
        children: /* @__PURE__ */ n.jsx(xr, {})
      }
    )
  ] });
}
const Pe = {
  "theme-light": "_theme-light_p8wyg_16",
  "theme-dark": "_theme-dark_p8wyg_36",
  "ds-stepper": "_ds-stepper_p8wyg_96",
  "state-disabled": "_state-disabled_p8wyg_111"
};
function Ir({
  modelValue: o,
  onIncrease: l,
  onDecrease: s
}) {
  const [c, m] = L(o);
  return ne(() => {
    m(o);
  }, [o]), { value: c, handleIncrease: () => {
    l && l();
  }, handleDecrease: () => {
    s && s();
  } };
}
function qr({
  className: o = "",
  id: l,
  modelValue: s,
  disabled: c = !1,
  onIncrease: m,
  onDecrease: v
}) {
  const {
    value: h,
    handleIncrease: y,
    handleDecrease: p
  } = Ir({ modelValue: s, onIncrease: m, onDecrease: v });
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `
        ${Pe["ds-stepper"]}
        ${c ? Pe["state-disabled"] : ""}
        ${o}
      `,
      children: [
        /* @__PURE__ */ n.jsx(
          Sr,
          {
            id: `stepper-${l}`,
            initialValue: h,
            readonly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          Oe,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: c,
            id: l,
            size: "small",
            onClick: y
          }
        ),
        /* @__PURE__ */ n.jsx(
          Oe,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: c,
            id: l,
            size: "small",
            onClick: p
          }
        )
      ]
    }
  );
}
const Ar = "_DSText_pg4yx_96", Hr = {
  "theme-light": "_theme-light_pg4yx_16",
  "theme-dark": "_theme-dark_pg4yx_36",
  DSText: Ar
};
function Fe({
  className: o = "",
  id: l,
  text: s
}) {
  return /* @__PURE__ */ n.jsx(
    "p",
    {
      className: `${Hr.DSText} ${o}`,
      "data-testid": `ds-text-${l}`,
      children: s
    }
  );
}
export {
  Oe as DSButtonArrow,
  Mr as DSFrame,
  yr as DSIconRadioSVG,
  xr as DSIconSelectButton,
  Sr as DSInput,
  Wr as DSRadio,
  Yr as DSSelect,
  qr as DSStepper,
  Fe as DSText
};
//# sourceMappingURL=index.js.map
