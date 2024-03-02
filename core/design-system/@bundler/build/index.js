(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pg4yx_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pg4yx_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._DSText_pg4yx_96{font:400 11px/13px MSSansSerifMedium,sans-serif;color:var(--text-color)}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import De, { useState as re, useEffect as ke } from "react";
var ee = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function hr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var l = De, i = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), x = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), te = Symbol.iterator, Fe = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Fe];
      return typeof r == "function" ? r : null;
    }
    var P = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ne = !1, Ve = !1, We = !1, Ye = !1, Me = !1, ae;
    ae = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === y || Me || e === g || e === S || e === b || Ye || e === T || Ne || Ve || We || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === m || e.$$typeof === _ || e.$$typeof === x || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case c:
          return "Portal";
        case y:
          return "Profiler";
        case g:
          return "StrictMode";
        case S:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return ne(r) + ".Consumer";
          case _:
            var t = e;
            return ne(t._context) + ".Provider";
          case v:
            return Le(e, e.render, "ForwardRef");
          case m:
            var a = e.displayName || null;
            return a !== null ? a : C(e.type) || "Memo";
          case j: {
            var s = e, u = s._payload, o = s._init;
            try {
              return C(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, F = 0, ie, oe, se, le, ue, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ue() {
      {
        if (F === 0) {
          ie = console.log, oe = console.info, se = console.warn, le = console.error, ue = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        F++;
      }
    }
    function qe() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: ie
            }),
            info: $({}, e, {
              value: oe
            }),
            warn: $({}, e, {
              value: se
            }),
            error: $({}, e, {
              value: le
            }),
            group: $({}, e, {
              value: ue
            }),
            groupCollapsed: $({}, e, {
              value: ce
            }),
            groupEnd: $({}, e, {
              value: fe
            })
          });
        }
        F < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = P.ReactCurrentDispatcher, q;
    function W(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var B = !1, Y;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Be();
    }
    function ve(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      B = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ue();
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
            } catch (O) {
              a = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              a = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            a = O;
          }
          e();
        }
      } catch (O) {
        if (O && a && typeof O.stack == "string") {
          for (var n = O.stack.split(`
`), E = a.stack.split(`
`), p = n.length - 1, h = E.length - 1; p >= 1 && h >= 0 && n[p] !== E[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (n[p] !== E[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || n[p] !== E[h]) {
                    var w = `
` + n[p].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, w), w;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = u, qe(), Error.prepareStackTrace = s;
      }
      var k = e ? e.displayName || e.name : "", Se = k ? W(k) : "";
      return typeof e == "function" && Y.set(e, Se), Se;
    }
    function He(e, r, t) {
      return ve(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Je(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case S:
          return W("Suspense");
        case b:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return He(e.render);
          case m:
            return M(e.type, r, t);
          case j: {
            var a = e, s = a._payload, u = a._init;
            try {
              return M(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, pe = {}, he = P.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ge(e, r, t, a, s) {
      {
        var u = Function.call.bind(z);
        for (var o in e)
          if (u(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var E = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              n = p;
            }
            n && !(n instanceof Error) && (L(s), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), L(null)), n instanceof Error && !(n.message in pe) && (pe[n.message] = !0, L(s), R("Failed %s type: %s", t, n.message), L(null));
          }
      }
    }
    var Ke = Array.isArray;
    function H(e) {
      return Ke(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function me(e) {
      if (Ze(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), _e(e);
    }
    var I = P.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, be, J;
    J = {};
    function er(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = C(I.current.type);
        J[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(I.current.type), e.ref), J[t] = !0);
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          ge || (ge = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          be || (be = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, a, s, u, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function or(e, r, t, a, s) {
      {
        var u, o = {}, n = null, E = null;
        t !== void 0 && (me(t), n = "" + t), rr(r) && (me(r.key), n = "" + r.key), er(r) && (E = r.ref, tr(r, s));
        for (u in r)
          z.call(r, u) && !Qe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (u in p)
            o[u] === void 0 && (o[u] = p[u]);
        }
        if (n || E) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && ar(o, h), E && nr(o, h);
        }
        return ir(e, n, E, s, a, I.current, o);
      }
    }
    var G = P.ReactCurrentOwner, ye = P.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Re() {
      {
        if (G.current) {
          var e = C(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
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
    function lr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = lr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var a = "";
        e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + C(e._owner.type) + "."), D(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            X(a) && xe(a, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Ie(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              X(o.value) && xe(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = C(r);
          Ge(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var s = C(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function je(e, r, t, a, s, u) {
      {
        var o = ze(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = sr(s);
          E ? n += E : n += Re();
          var p;
          e === null ? p = "null" : H(e) ? p = "array" : e !== void 0 && e.$$typeof === i ? (p = "<" + (C(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, n);
        }
        var h = or(e, r, t, s, u);
        if (h == null)
          return h;
        if (o) {
          var w = r.children;
          if (w !== void 0)
            if (a)
              if (H(w)) {
                for (var k = 0; k < w.length; k++)
                  we(w[k], e);
                Object.freeze && Object.freeze(w);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(w, e);
        }
        return e === f ? cr(h) : ur(h), h;
      }
    }
    function fr(e, r, t) {
      return je(e, r, t, !0);
    }
    function dr(e, r, t) {
      return je(e, r, t, !1);
    }
    var vr = dr, pr = fr;
    A.Fragment = f, A.jsx = vr, A.jsxs = pr;
  }()), A;
}
var N = {};
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
function _r() {
  if (Ce)
    return N;
  Ce = 1;
  var l = De, i = Symbol.for("react.element"), c = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, g = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(x, v, S) {
    var b, m = {}, j = null, T = null;
    S !== void 0 && (j = "" + S), v.key !== void 0 && (j = "" + v.key), v.ref !== void 0 && (T = v.ref);
    for (b in v)
      f.call(v, b) && !y.hasOwnProperty(b) && (m[b] = v[b]);
    if (x && x.defaultProps)
      for (b in v = x.defaultProps, v)
        m[b] === void 0 && (m[b] = v[b]);
    return { $$typeof: i, type: x, key: j, ref: T, props: m, _owner: g.current };
  }
  return N.Fragment = c, N.jsx = _, N.jsxs = _, N;
}
process.env.NODE_ENV === "production" ? ee.exports = _r() : ee.exports = hr();
var d = ee.exports;
const Z = {
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
  direction: c,
  disabled: f,
  id: g,
  onClick: y,
  size: _
}) {
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      "aria-label": l,
      className: `
				${Z["ds-button-arrow"]}
				${Z[`arrow-${c}`]}
				${Z[`size-${_}`]}
				${i}
			`,
      "data-testid": `ds-button-arrow-${g}-${c}`,
      disabled: f,
      type: "button",
      onClick: y
    }
  );
}
const mr = "_frame_hpida_96", gr = "_title_hpida_104", $e = {
  "theme-light": "_theme-light_hpida_16",
  "theme-dark": "_theme-dark_hpida_36",
  frame: mr,
  title: gr
};
function Ar({
  children: l,
  className: i = "",
  id: c,
  title: f
}) {
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `${$e.frame} ${i}`,
      "data-testid": `ds-frame-${c}`,
      children: [
        f && /* @__PURE__ */ d.jsx(
          Fr,
          {
            className: $e.title,
            text: f,
            id: `frame-${c}`
          }
        ),
        l
      ]
    }
  );
}
function br() {
  return /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", children: [
    /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#DFDFDF",
        fillRule: "evenodd",
        d: "M15 0H0v16h1V1h14V0z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M2 1H1v14h1V2h12V1H2z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#000",
        fillRule: "evenodd",
        d: "M16 17H0v-1h15V0h1v17z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "gray",
        fillRule: "evenodd",
        d: "M15 1h-1v14H1v1h14V1z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ d.jsx("path", { fill: "silver", d: "M2 2h12v13H2z" }),
    /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#000",
        fillRule: "evenodd",
        d: "M11 6H4v1h1v1h1v1h1v1h1V9h1V8h1V7h1V6z",
        clipRule: "evenodd"
      }
    )
  ] });
}
const yr = {
  "select-button": /* @__PURE__ */ d.jsx(br, {})
};
function Rr({
  className: l = "",
  name: i
}) {
  return /* @__PURE__ */ d.jsx("span", { className: l, children: yr[i] });
}
const Er = "_input_e0ixd_111", xr = "_label_e0ixd_112", Q = {
  "theme-light": "_theme-light_e0ixd_16",
  "theme-dark": "_theme-dark_e0ixd_36",
  "wrapper-horizontal": "_wrapper-horizontal_e0ixd_96",
  "wrapper-vertical": "_wrapper-vertical_e0ixd_102",
  input: Er,
  label: xr
};
function wr({ initialValue: l, onChange: i }) {
  const [c, f] = re(l);
  return ke(() => {
    f(l);
  }, [l, f]), { value: c, handleInputChange: (y) => {
    const _ = y.target.value;
    f(_), i && i(_);
  } };
}
function jr({
  className: l = "",
  type: i = "text",
  id: c,
  disabled: f = !1,
  readonly: g = !1,
  initialValue: y = "",
  labelName: _,
  wrapperLayout: x = "vertical",
  min: v,
  max: S,
  onChange: b
}) {
  const { value: m, handleInputChange: j } = wr({ initialValue: y, onChange: b }), T = `ds-input-${c}`;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `${Q[`wrapper-${x}`]} ${l}`,
      "data-testid": T,
      children: [
        _ && /* @__PURE__ */ d.jsx(
          "label",
          {
            className: Q.label,
            "data-testid": `ds-input-label-${c}`,
            htmlFor: T,
            children: _
          }
        ),
        /* @__PURE__ */ d.jsx(
          "input",
          {
            id: T,
            className: Q.input,
            "data-testid": `ds-input-input-${c}`,
            type: i,
            disabled: f,
            readOnly: g,
            value: m,
            min: v ?? void 0,
            max: S ?? void 0,
            name: T,
            onChange: j
          }
        )
      ]
    }
  );
}
function Sr(l) {
  const [i, c] = re(l);
  return {
    value: i,
    handleChange: (g) => {
      c(g.target.value);
    }
  };
}
const Tr = "_wrapper_1id5f_96", Cr = "_label_1id5f_100", Or = "_select_1id5f_105", $r = "_arrow_1id5f_115", V = {
  "theme-light": "_theme-light_1id5f_16",
  "theme-dark": "_theme-dark_1id5f_36",
  wrapper: Tr,
  label: Cr,
  select: Or,
  arrow: $r
};
function Nr({
  className: l = "",
  id: i,
  required: c = !1,
  disabled: f = !1,
  modelValue: g,
  options: y,
  labelName: _,
  onSelect: x
}) {
  const { value: v, handleChange: S } = Sr(g), b = (m) => {
    S(m), x(m);
  };
  return /* @__PURE__ */ d.jsxs("div", { className: `${V.wrapper} ${l}`, children: [
    _ && /* @__PURE__ */ d.jsx(
      "label",
      {
        className: V.label,
        "data-testid": `ds-select-label-${i}`,
        htmlFor: i,
        children: _
      }
    ),
    /* @__PURE__ */ d.jsx(
      "select",
      {
        className: V.select,
        "data-testid": `ds-select-select-${i}`,
        disabled: f,
        id: i,
        name: i,
        onChange: b,
        required: c,
        value: v,
        children: y.map((m, j) => /* @__PURE__ */ d.jsx(
          "option",
          {
            className: V.option,
            "data-testid": `ds-select-option-${i}-${j}`,
            value: m.value,
            children: m.name
          },
          `${i}-${m.value}`
        ))
      }
    ),
    /* @__PURE__ */ d.jsx(
      Rr,
      {
        className: V.arrow,
        name: "select-button"
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
function Pr({
  modelValue: l,
  onIncrease: i,
  onDecrease: c
}) {
  const [f, g] = re(l);
  return ke(() => {
    g(l);
  }, [l]), { value: f, handleIncrease: () => {
    i && i();
  }, handleDecrease: () => {
    c && c();
  } };
}
function Vr({
  className: l = "",
  id: i,
  modelValue: c,
  disabled: f = !1,
  onIncrease: g,
  onDecrease: y
}) {
  const {
    value: _,
    handleIncrease: x,
    handleDecrease: v
  } = Pr({ modelValue: c, onIncrease: g, onDecrease: y });
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `
        ${Pe["ds-stepper"]}
        ${f ? Pe["state-disabled"] : ""}
        ${l}
      `,
      children: [
        /* @__PURE__ */ d.jsx(
          jr,
          {
            id: `stepper-${i}`,
            initialValue: _,
            readonly: !0
          }
        ),
        /* @__PURE__ */ d.jsx(
          Oe,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: f,
            id: i,
            size: "small",
            onClick: x
          }
        ),
        /* @__PURE__ */ d.jsx(
          Oe,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: f,
            id: i,
            size: "small",
            onClick: v
          }
        )
      ]
    }
  );
}
const Dr = "_DSText_pg4yx_96", kr = {
  "theme-light": "_theme-light_pg4yx_16",
  "theme-dark": "_theme-dark_pg4yx_36",
  DSText: Dr
};
function Fr({
  className: l = "",
  id: i,
  text: c
}) {
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      className: `${kr.DSText} ${l}`,
      "data-testid": `ds-text-${i}`,
      children: c
    }
  );
}
export {
  Oe as DSButtonArrow,
  Ar as DSFrame,
  Rr as DSIcon,
  jr as DSInput,
  Nr as DSSelect,
  Vr as DSStepper,
  Fr as DSText
};
//# sourceMappingURL=index.js.map
