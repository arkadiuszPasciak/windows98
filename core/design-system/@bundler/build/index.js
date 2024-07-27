(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pwpci_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pwpci_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_pwpci_96{position:relative;display:flex;align-items:center;column-gap:6px}@media (hover: hover){._wrapper_pwpci_96:hover{cursor:pointer}}._disabled_pwpci_108{pointer-events:none;opacity:.5}._input_pwpci_113{position:absolute;width:100%;height:100%;background-color:transparent}._input_pwpci_113[disabled]{pointer-events:none}._icon_pwpci_123{width:12px;height:12px;display:flex;align-items:center}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pg4yx_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pg4yx_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._DSText_pg4yx_96{font:400 11px/13px MSSansSerifMedium,sans-serif;color:var(--text-color)}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import Ve, { useState as U, useEffect as ne } from "react";
var te = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function gr() {
  if (Ce)
    return I;
  Ce = 1;
  var l = Ve, i = Symbol.for("react.element"), f = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(b, h, S) {
    var y, R = {}, j = null, T = null;
    S !== void 0 && (j = "" + S), h.key !== void 0 && (j = "" + h.key), h.ref !== void 0 && (T = h.ref);
    for (y in h)
      u.call(h, y) && !g.hasOwnProperty(y) && (R[y] = h[y]);
    if (b && b.defaultProps)
      for (y in h = b.defaultProps, h)
        R[y] === void 0 && (R[y] = h[y]);
    return { $$typeof: i, type: b, key: j, ref: T, props: R, _owner: v.current };
  }
  return I.Fragment = f, I.jsx = p, I.jsxs = p, I;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function br() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Ve, i = Symbol.for("react.element"), f = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), b = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), ae = Symbol.iterator, ze = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[ze];
      return typeof r == "function" ? r : null;
    }
    var O = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var a = O.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(o) {
          return String(o);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var He = !1, Me = !1, Le = !1, We = !1, Ye = !1, le;
    le = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === g || Ye || e === v || e === S || e === y || We || e === T || He || Me || Le || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === R || e.$$typeof === p || e.$$typeof === b || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case f:
          return "Portal";
        case g:
          return "Profiler";
        case v:
          return "StrictMode";
        case S:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ie(r) + ".Consumer";
          case p:
            var t = e;
            return ie(t._context) + ".Provider";
          case h:
            return qe(e, e.render, "ForwardRef");
          case R:
            var a = e.displayName || null;
            return a !== null ? a : D(e.type) || "Memo";
          case j: {
            var c = e, d = c._payload, o = c._init;
            try {
              return D(o(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, V = 0, se, oe, ue, ce, fe, de, ve;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Be() {
      {
        if (V === 0) {
          se = console.log, oe = console.info, ue = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
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
    function Ge() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: se
            }),
            info: $({}, e, {
              value: oe
            }),
            warn: $({}, e, {
              value: ue
            }),
            error: $({}, e, {
              value: ce
            }),
            group: $({}, e, {
              value: fe
            }),
            groupCollapsed: $({}, e, {
              value: de
            }),
            groupEnd: $({}, e, {
              value: ve
            })
          });
        }
        V < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = O.ReactCurrentDispatcher, B;
    function H(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            B = a && a[1] || "";
          }
        return `
` + B + e;
      }
    }
    var G = !1, M;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Je();
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
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = q.current, q.current = null, Be();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (C) {
              a = C;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (C) {
              a = C;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            a = C;
          }
          e();
        }
      } catch (C) {
        if (C && a && typeof C.stack == "string") {
          for (var s = C.stack.split(`
`), w = a.stack.split(`
`), _ = s.length - 1, m = w.length - 1; _ >= 1 && m >= 0 && s[_] !== w[m]; )
            m--;
          for (; _ >= 1 && m >= 0; _--, m--)
            if (s[_] !== w[m]) {
              if (_ !== 1 || m !== 1)
                do
                  if (_--, m--, m < 0 || s[_] !== w[m]) {
                    var E = `
` + s[_].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, E), E;
                  }
                while (_ >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = d, Ge(), Error.prepareStackTrace = c;
      }
      var P = e ? e.displayName || e.name : "", De = P ? H(P) : "";
      return typeof e == "function" && M.set(e, De), De;
    }
    function Ke(e, r, t) {
      return pe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Xe(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case S:
          return H("Suspense");
        case y:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Ke(e.render);
          case R:
            return L(e.type, r, t);
          case j: {
            var a = e, c = a._payload, d = a._init;
            try {
              return L(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, _e = {}, me = O.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Ze(e, r, t, a, c) {
      {
        var d = Function.call.bind(W);
        for (var o in e)
          if (d(e, o)) {
            var s = void 0;
            try {
              if (typeof e[o] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              s = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              s = _;
            }
            s && !(s instanceof Error) && (Y(c), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof s), Y(null)), s instanceof Error && !(s.message in _e) && (_e[s.message] = !0, Y(c), x("Failed %s type: %s", t, s.message), Y(null));
          }
      }
    }
    var Qe = Array.isArray;
    function J(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
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
      if (rr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), ge(e);
    }
    var F = O.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, ye, K;
    K = {};
    function nr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = D(F.current.type);
        K[t] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(F.current.type), e.ref), K[t] = !0);
      }
    }
    function ir(e, r) {
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
    function sr(e, r) {
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
    var or = function(e, r, t, a, c, d, o) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function ur(e, r, t, a, c) {
      {
        var d, o = {}, s = null, w = null;
        t !== void 0 && (be(t), s = "" + t), ar(r) && (be(r.key), s = "" + r.key), nr(r) && (w = r.ref, lr(r, c));
        for (d in r)
          W.call(r, d) && !tr.hasOwnProperty(d) && (o[d] = r[d]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (d in _)
            o[d] === void 0 && (o[d] = _[d]);
        }
        if (s || w) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(o, m), w && sr(o, m);
        }
        return or(e, s, w, c, a, F.current, o);
      }
    }
    var X = O.ReactCurrentOwner, xe = O.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function we() {
      {
        if (X.current) {
          var e = D(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
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
    function fr(e) {
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
        var t = fr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + D(e._owner.type) + "."), k(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), k(null);
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
          var c = Ae(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), o; !(o = d.next()).done; )
              Q(o.value) && je(o.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = D(r);
          Ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var c = D(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
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
    function Te(e, r, t, a, c, d) {
      {
        var o = Ue(e);
        if (!o) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = cr(c);
          w ? s += w : s += we();
          var _;
          e === null ? _ = "null" : J(e) ? _ = "array" : e !== void 0 && e.$$typeof === i ? (_ = "<" + (D(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, s);
        }
        var m = ur(e, r, t, c, d);
        if (m == null)
          return m;
        if (o) {
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
        return e === u ? vr(m) : dr(m), m;
      }
    }
    function hr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function pr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var _r = pr, mr = hr;
    z.Fragment = u, z.jsx = _r, z.jsxs = mr;
  }()), z;
}
process.env.NODE_ENV === "production" ? te.exports = gr() : te.exports = br();
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
  ariaLabel: l,
  className: i = "",
  direction: f,
  disabled: u,
  id: v,
  onClick: g,
  size: p
}) {
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      "aria-label": l,
      className: `
				${ee["ds-button-arrow"]}
				${ee[`arrow-${f}`]}
				${ee[`size-${p}`]}
				${i}
			`,
      "data-testid": `ds-button-arrow-${v}-${f}`,
      disabled: u,
      type: "button",
      onClick: g
    }
  );
}
const Rr = "_frame_hpida_96", yr = "_title_hpida_104", ke = {
  "theme-light": "_theme-light_hpida_16",
  "theme-dark": "_theme-dark_hpida_36",
  frame: Rr,
  title: yr
};
function Lr({
  children: l,
  className: i = "",
  id: f,
  title: u
}) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${ke.frame} ${i}`,
      "data-testid": `ds-frame-${f}`,
      children: [
        u && /* @__PURE__ */ n.jsx(
          Ie,
          {
            className: ke.title,
            text: u,
            id: `frame-${f}`
          }
        ),
        l
      ]
    }
  );
}
const xr = ({
  isChecked: l = !1
}) => l ? /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", children: [
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
] }) : l ? null : /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", children: [
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z", fill: "gray" }),
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z", fill: "#000" }),
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z", fill: "#DFDFDF" }),
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z", fill: "#fff" }),
  /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z", fill: "#fff" })
] }), wr = () => /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", children: [
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
] }), Er = "_input_e0ixd_111", jr = "_label_e0ixd_112", re = {
  "theme-light": "_theme-light_e0ixd_16",
  "theme-dark": "_theme-dark_e0ixd_36",
  "wrapper-horizontal": "_wrapper-horizontal_e0ixd_96",
  "wrapper-vertical": "_wrapper-vertical_e0ixd_102",
  input: Er,
  label: jr
};
function Sr({ initialValue: l, onChange: i }) {
  const [f, u] = U(l);
  return ne(() => {
    u(l);
  }, [l, u]), { value: f, handleInputChange: (g) => {
    const p = g.target.value;
    u(p), i && i(p);
  } };
}
function Tr({
  className: l = "",
  type: i = "text",
  id: f,
  disabled: u = !1,
  readonly: v = !1,
  initialValue: g = "",
  labelName: p,
  wrapperLayout: b = "vertical",
  min: h,
  max: S,
  onChange: y
}) {
  const { value: R, handleInputChange: j } = Sr({ initialValue: g, onChange: y }), T = `ds-input-${f}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${re[`wrapper-${b}`]} ${l}`,
      "data-testid": T,
      children: [
        p && /* @__PURE__ */ n.jsx(
          "label",
          {
            className: re.label,
            "data-testid": `ds-input-label-${f}`,
            htmlFor: T,
            children: p
          }
        ),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            id: T,
            className: re.input,
            "data-testid": `ds-input-input-${f}`,
            type: i,
            disabled: u,
            readOnly: v,
            value: R,
            min: h ?? void 0,
            max: S ?? void 0,
            name: T,
            onChange: j
          }
        )
      ]
    }
  );
}
const Dr = "_wrapper_pwpci_96", Cr = "_disabled_pwpci_108", $r = "_input_pwpci_113", Or = "_icon_pwpci_123", A = {
  "theme-light": "_theme-light_pwpci_16",
  "theme-dark": "_theme-dark_pwpci_36",
  wrapper: Dr,
  disabled: Cr,
  input: $r,
  icon: Or
};
var Fe = /* @__PURE__ */ ((l) => (l.ACTIVE = "active", l.DISABLED = "disabled", l.IDLE = "idle", l.LOADING = "loading", l))(Fe || {});
function kr({
  initialValue: l,
  onChange: i,
  state: f
}) {
  const [u, v] = U(l);
  ne(() => {
    v(l);
  }, [l, v]);
  const g = () => {
    const b = !u;
    v(b), i && i(b);
  };
  return {
    isDisabled: f === Fe.DISABLED,
    handleChange: g,
    value: u
  };
}
const Wr = ({
  id: l,
  name: i,
  state: f,
  initialValue: u,
  text: v,
  onChange: g
}) => {
  const {
    handleChange: p,
    value: b,
    isDisabled: h
  } = kr({
    initialValue: u,
    onChange: g,
    state: f
  });
  return /* @__PURE__ */ n.jsxs(
    "label",
    {
      "aria-label": v.visible ? void 0 : v.content,
      className: `${A.wrapper} ${h ? A.disabled : ""}`,
      "data-testid": `${l}-radio`,
      children: [
        /* @__PURE__ */ n.jsx(
          "input",
          {
            className: A.input,
            checked: b,
            "data-testid": `${l}-radio-input`,
            disabled: h,
            name: i,
            type: "radio",
            value: l,
            onClick: p
          }
        ),
        /* @__PURE__ */ n.jsx(
          "span",
          {
            className: A.icon,
            "data-testid": `${l}-radio-icon`,
            children: /* @__PURE__ */ n.jsx(xr, { isChecked: b })
          }
        ),
        v.visible && /* @__PURE__ */ n.jsx(
          Ie,
          {
            className: A.text,
            id: l,
            text: v.content
          }
        )
      ]
    }
  );
};
function Pr(l) {
  const [i, f] = U(l);
  return {
    value: i,
    handleChange: (v) => {
      f(v.target.value);
    }
  };
}
const Vr = "_wrapper_1id5f_96", Fr = "_label_1id5f_100", Ir = "_select_1id5f_105", zr = "_arrow_1id5f_115", N = {
  "theme-light": "_theme-light_1id5f_16",
  "theme-dark": "_theme-dark_1id5f_36",
  wrapper: Vr,
  label: Fr,
  select: Ir,
  arrow: zr
};
function Yr({
  className: l = "",
  id: i,
  required: f = !1,
  disabled: u = !1,
  modelValue: v,
  options: g,
  labelName: p,
  onSelect: b
}) {
  const { value: h, handleChange: S } = Pr(v), y = (R) => {
    S(R), b(R);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `${N.wrapper} ${l}`, children: [
    p && /* @__PURE__ */ n.jsx(
      "label",
      {
        className: N.label,
        "data-testid": `ds-select-label-${i}`,
        htmlFor: i,
        children: p
      }
    ),
    /* @__PURE__ */ n.jsx(
      "select",
      {
        className: N.select,
        "data-testid": `ds-select-select-${i}`,
        disabled: u,
        id: i,
        name: i,
        onChange: y,
        required: f,
        value: h,
        children: g.map((R, j) => /* @__PURE__ */ n.jsx(
          "option",
          {
            className: N.option,
            "data-testid": `ds-select-option-${i}-${j}`,
            value: R.value,
            children: R.name
          },
          `${i}-${R.value}`
        ))
      }
    ),
    /* @__PURE__ */ n.jsx(
      "span",
      {
        className: N.arrow,
        children: /* @__PURE__ */ n.jsx(wr, {})
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
function Ar({
  modelValue: l,
  onIncrease: i,
  onDecrease: f
}) {
  const [u, v] = U(l);
  return ne(() => {
    v(l);
  }, [l]), { value: u, handleIncrease: () => {
    i && i();
  }, handleDecrease: () => {
    f && f();
  } };
}
function Ur({
  className: l = "",
  id: i,
  modelValue: f,
  disabled: u = !1,
  onIncrease: v,
  onDecrease: g
}) {
  const {
    value: p,
    handleIncrease: b,
    handleDecrease: h
  } = Ar({ modelValue: f, onIncrease: v, onDecrease: g });
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `
        ${Pe["ds-stepper"]}
        ${u ? Pe["state-disabled"] : ""}
        ${l}
      `,
      children: [
        /* @__PURE__ */ n.jsx(
          Tr,
          {
            id: `stepper-${i}`,
            initialValue: p,
            readonly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          Oe,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: u,
            id: i,
            size: "small",
            onClick: b
          }
        ),
        /* @__PURE__ */ n.jsx(
          Oe,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: u,
            id: i,
            size: "small",
            onClick: h
          }
        )
      ]
    }
  );
}
const Nr = "_DSText_pg4yx_96", Hr = {
  "theme-light": "_theme-light_pg4yx_16",
  "theme-dark": "_theme-dark_pg4yx_36",
  DSText: Nr
};
function Ie({
  className: l = "",
  id: i,
  text: f
}) {
  return /* @__PURE__ */ n.jsx(
    "p",
    {
      className: `${Hr.DSText} ${l}`,
      "data-testid": `ds-text-${i}`,
      children: f
    }
  );
}
export {
  Oe as DSButtonArrow,
  Lr as DSFrame,
  xr as DSIconRadioSVG,
  wr as DSIconSelectButton,
  Tr as DSInput,
  Wr as DSRadio,
  Yr as DSSelect,
  Ur as DSStepper,
  Ie as DSText
};
//# sourceMappingURL=index.js.map
