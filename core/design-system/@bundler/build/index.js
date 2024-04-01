(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import Ve, { useState as ie, useEffect as ze } from "react";
var ae = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Tr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ve, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), z = Symbol.iterator, B = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[B];
      return typeof t == "function" ? t : null;
    }
    var $ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        Ke("error", e, a);
      }
    }
    function Ke(e, t, a) {
      {
        var l = $.ReactDebugCurrentFrame, v = l.getStackAddendum();
        v !== "" && (t += "%s", a = a.concat([v]));
        var m = a.map(function(d) {
          return String(d);
        });
        m.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Xe = !1, Ze = !1, Qe = !1, er = !1, rr = !1, se;
    se = Symbol.for("react.module.reference");
    function tr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === f || rr || e === s || e === w || e === b || er || e === S || Xe || Ze || Qe || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === _ || e.$$typeof === u || e.$$typeof === p || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function nr(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var v = t.displayName || t.name || "";
      return v !== "" ? a + "(" + v + ")" : a;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case f:
          return "Profiler";
        case s:
          return "StrictMode";
        case w:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var t = e;
            return le(t) + ".Consumer";
          case u:
            var a = e;
            return le(a._context) + ".Provider";
          case h:
            return nr(e, e.render, "ForwardRef");
          case _:
            var l = e.displayName || null;
            return l !== null ? l : O(e.type) || "Memo";
          case x: {
            var v = e, m = v._payload, d = v._init;
            try {
              return O(d(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, ue, ce, fe, de, pe, ve, he;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function ar() {
      {
        if (A === 0) {
          ue = console.log, ce = console.info, fe = console.warn, de = console.error, pe = console.group, ve = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        A++;
      }
    }
    function ir() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ue
            }),
            info: P({}, e, {
              value: ce
            }),
            warn: P({}, e, {
              value: fe
            }),
            error: P({}, e, {
              value: de
            }),
            group: P({}, e, {
              value: pe
            }),
            groupCollapsed: P({}, e, {
              value: ve
            }),
            groupEnd: P({}, e, {
              value: he
            })
          });
        }
        A < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = $.ReactCurrentDispatcher, G;
    function M(e, t, a) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (v) {
            var l = v.stack.trim().match(/\n( *(at )?)/);
            G = l && l[1] || "";
          }
        return `
` + G + e;
      }
    }
    var K = !1, W;
    {
      var or = typeof WeakMap == "function" ? WeakMap : Map;
      W = new or();
    }
    function _e(e, t) {
      if (!e || K)
        return "";
      {
        var a = W.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      K = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = J.current, J.current = null, ar();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (T) {
              l = T;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (T) {
              l = T;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            l = T;
          }
          e();
        }
      } catch (T) {
        if (T && l && typeof T.stack == "string") {
          for (var c = T.stack.split(`
`), j = l.stack.split(`
`), y = c.length - 1, R = j.length - 1; y >= 1 && R >= 0 && c[y] !== j[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (c[y] !== j[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || c[y] !== j[R]) {
                    var C = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, C), C;
                  }
                while (y >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = m, ir(), Error.prepareStackTrace = v;
      }
      var D = e ? e.displayName || e.name : "", $e = D ? M(D) : "";
      return typeof e == "function" && W.set(e, $e), $e;
    }
    function sr(e, t, a) {
      return _e(e, !1);
    }
    function lr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Y(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, lr(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case w:
          return M("Suspense");
        case b:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return sr(e.render);
          case _:
            return Y(e.type, t, a);
          case x: {
            var l = e, v = l._payload, m = l._init;
            try {
              return Y(m(v), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ge = {}, be = $.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, a = Y(e.type, e._source, t ? t.type : null);
        be.setExtraStackFrame(a);
      } else
        be.setExtraStackFrame(null);
    }
    function ur(e, t, a, l, v) {
      {
        var m = Function.call.bind(q);
        for (var d in e)
          if (m(e, d)) {
            var c = void 0;
            try {
              if (typeof e[d] != "function") {
                var j = Error((l || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              c = e[d](t, d, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (L(v), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, d, typeof c), L(null)), c instanceof Error && !(c.message in ge) && (ge[c.message] = !0, L(v), E("Failed %s type: %s", a, c.message), L(null));
          }
      }
    }
    var cr = Array.isArray;
    function X(e) {
      return cr(e);
    }
    function fr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function dr(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Re(e) {
      if (dr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fr(e)), ye(e);
    }
    var F = $.ReactCurrentOwner, pr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, we, Z;
    Z = {};
    function vr(e) {
      if (q.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function hr(e) {
      if (q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function mr(e, t) {
      if (typeof e.ref == "string" && F.current && t && F.current.stateNode !== t) {
        var a = O(F.current.type);
        Z[a] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(F.current.type), e.ref), Z[a] = !0);
      }
    }
    function _r(e, t) {
      {
        var a = function() {
          Ee || (Ee = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function gr(e, t) {
      {
        var a = function() {
          we || (we = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var br = function(e, t, a, l, v, m, d) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: d,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function yr(e, t, a, l, v) {
      {
        var m, d = {}, c = null, j = null;
        a !== void 0 && (Re(a), c = "" + a), hr(t) && (Re(t.key), c = "" + t.key), vr(t) && (j = t.ref, mr(t, v));
        for (m in t)
          q.call(t, m) && !pr.hasOwnProperty(m) && (d[m] = t[m]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (m in y)
            d[m] === void 0 && (d[m] = y[m]);
        }
        if (c || j) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && _r(d, R), j && gr(d, R);
        }
        return br(e, c, j, v, l, F.current, d);
      }
    }
    var Q = $.ReactCurrentOwner, xe = $.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var t = e._owner, a = Y(e.type, e._source, t ? t.type : null);
        xe.setExtraStackFrame(a);
      } else
        xe.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function je() {
      {
        if (Q.current) {
          var e = O(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Rr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + t + ":" + a + ".";
        }
        return "";
      }
    }
    var Se = {};
    function Er(e) {
      {
        var t = je();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function Ce(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Er(t);
        if (Se[a])
          return;
        Se[a] = !0;
        var l = "";
        e && e._owner && e._owner !== Q.current && (l = " It was passed a child from " + O(e._owner.type) + "."), k(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, l), k(null);
      }
    }
    function Oe(e, t) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var a = 0; a < e.length; a++) {
            var l = e[a];
            re(l) && Ce(l, t);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = H(e);
          if (typeof v == "function" && v !== e.entries)
            for (var m = v.call(e), d; !(d = m.next()).done; )
              re(d.value) && Ce(d.value, t);
        }
      }
    }
    function wr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === _))
          a = t.propTypes;
        else
          return;
        if (a) {
          var l = O(t);
          ur(a, e.props, "prop", l, e);
        } else if (t.PropTypes !== void 0 && !ee) {
          ee = !0;
          var v = O(t);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var l = t[a];
          if (l !== "children" && l !== "key") {
            k(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Te(e, t, a, l, v, m) {
      {
        var d = tr(e);
        if (!d) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = Rr(v);
          j ? c += j : c += je();
          var y;
          e === null ? y = "null" : X(e) ? y = "array" : e !== void 0 && e.$$typeof === n ? (y = "<" + (O(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var R = yr(e, t, a, v, m);
        if (R == null)
          return R;
        if (d) {
          var C = t.children;
          if (C !== void 0)
            if (l)
              if (X(C)) {
                for (var D = 0; D < C.length; D++)
                  Oe(C[D], e);
                Object.freeze && Object.freeze(C);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(C, e);
        }
        return e === o ? xr(R) : wr(R), R;
      }
    }
    function jr(e, t, a) {
      return Te(e, t, a, !0);
    }
    function Sr(e, t, a) {
      return Te(e, t, a, !1);
    }
    var Cr = Sr, Or = jr;
    I.Fragment = o, I.jsx = Cr, I.jsxs = Or;
  }()), I;
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
var ke;
function $r() {
  if (ke)
    return N;
  ke = 1;
  var r = Ve, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(p, h, w) {
    var b, _ = {}, x = null, S = null;
    w !== void 0 && (x = "" + w), h.key !== void 0 && (x = "" + h.key), h.ref !== void 0 && (S = h.ref);
    for (b in h)
      o.call(h, b) && !f.hasOwnProperty(b) && (_[b] = h[b]);
    if (p && p.defaultProps)
      for (b in h = p.defaultProps, h)
        _[b] === void 0 && (_[b] = h[b]);
    return { $$typeof: n, type: p, key: x, ref: S, props: _, _owner: s.current };
  }
  return N.Fragment = i, N.jsx = u, N.jsxs = u, N;
}
process.env.NODE_ENV === "production" ? ae.exports = $r() : ae.exports = Tr();
var g = ae.exports;
const te = {
  "theme-light": "_theme-light_qp7ji_16",
  "theme-dark": "_theme-dark_qp7ji_36",
  "ds-button-arrow": "_ds-button-arrow_qp7ji_96",
  "arrow-bottom": "_arrow-bottom_qp7ji_124",
  "arrow-top": "_arrow-top_qp7ji_128",
  "size-small": "_size-small_qp7ji_132",
  "size-medium": "_size-medium_qp7ji_137"
};
function De({
  ariaLabel: r,
  className: n = "",
  direction: i,
  disabled: o,
  id: s,
  onClick: f,
  size: u
}) {
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      "aria-label": r,
      className: `
				${te["ds-button-arrow"]}
				${te[`arrow-${i}`]}
				${te[`size-${u}`]}
				${n}
			`,
      "data-testid": `ds-button-arrow-${s}-${i}`,
      disabled: o,
      type: "button",
      onClick: f
    }
  );
}
const Pr = "_frame_hpida_96", kr = "_title_hpida_104", Ae = {
  "theme-light": "_theme-light_hpida_16",
  "theme-dark": "_theme-dark_hpida_36",
  frame: Pr,
  title: kr
};
function Rt({
  children: r,
  className: n = "",
  id: i,
  title: o
}) {
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: `${Ae.frame} ${n}`,
      "data-testid": `ds-frame-${i}`,
      children: [
        o && /* @__PURE__ */ g.jsx(
          bt,
          {
            className: Ae.title,
            text: o,
            id: `frame-${i}`
          }
        ),
        r
      ]
    }
  );
}
function Dr() {
  return /* @__PURE__ */ g.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", children: [
    /* @__PURE__ */ g.jsx(
      "path",
      {
        fill: "#DFDFDF",
        fillRule: "evenodd",
        d: "M15 0H0v16h1V1h14V0z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ g.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M2 1H1v14h1V2h12V1H2z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ g.jsx(
      "path",
      {
        fill: "#000",
        fillRule: "evenodd",
        d: "M16 17H0v-1h15V0h1v17z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ g.jsx(
      "path",
      {
        fill: "gray",
        fillRule: "evenodd",
        d: "M15 1h-1v14H1v1h14V1z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ g.jsx("path", { fill: "silver", d: "M2 2h12v13H2z" }),
    /* @__PURE__ */ g.jsx(
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
const Ar = {
  "select-button": /* @__PURE__ */ g.jsx(Dr, {})
};
function Fr({
  className: r = "",
  name: n
}) {
  return /* @__PURE__ */ g.jsx("span", { className: r, children: Ar[n] });
}
const Ir = "_input_e0ixd_111", Nr = "_label_e0ixd_112", ne = {
  "theme-light": "_theme-light_e0ixd_16",
  "theme-dark": "_theme-dark_e0ixd_36",
  "wrapper-horizontal": "_wrapper-horizontal_e0ixd_96",
  "wrapper-vertical": "_wrapper-vertical_e0ixd_102",
  input: Ir,
  label: Nr
};
function Vr({ initialValue: r, onChange: n }) {
  const [i, o] = ie(r);
  return ze(() => {
    o(r);
  }, [r, o]), { value: i, handleInputChange: (f) => {
    const u = f.target.value;
    o(u), n && n(u);
  } };
}
function zr({
  className: r = "",
  type: n = "text",
  id: i,
  disabled: o = !1,
  readonly: s = !1,
  initialValue: f = "",
  labelName: u,
  wrapperLayout: p = "vertical",
  min: h,
  max: w,
  onChange: b
}) {
  const { value: _, handleInputChange: x } = Vr({ initialValue: f, onChange: b }), S = `ds-input-${i}`;
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: `${ne[`wrapper-${p}`]} ${r}`,
      "data-testid": S,
      children: [
        u && /* @__PURE__ */ g.jsx(
          "label",
          {
            className: ne.label,
            "data-testid": `ds-input-label-${i}`,
            htmlFor: S,
            children: u
          }
        ),
        /* @__PURE__ */ g.jsx(
          "input",
          {
            id: S,
            className: ne.input,
            "data-testid": `ds-input-input-${i}`,
            type: n,
            disabled: o,
            readOnly: s,
            value: _,
            min: h ?? void 0,
            max: w ?? void 0,
            name: S,
            onChange: x
          }
        )
      ]
    }
  );
}
function Mr(r) {
  const [n, i] = ie(r);
  return {
    value: n,
    handleChange: (s) => {
      i(s.target.value);
    }
  };
}
const Wr = "_wrapper_1id5f_96", Yr = "_label_1id5f_100", qr = "_select_1id5f_105", Lr = "_arrow_1id5f_115", V = {
  "theme-light": "_theme-light_1id5f_16",
  "theme-dark": "_theme-dark_1id5f_36",
  wrapper: Wr,
  label: Yr,
  select: qr,
  arrow: Lr
};
function Et({
  className: r = "",
  id: n,
  required: i = !1,
  disabled: o = !1,
  modelValue: s,
  options: f,
  labelName: u,
  onSelect: p
}) {
  const { value: h, handleChange: w } = Mr(s), b = (_) => {
    w(_), p(_);
  };
  return /* @__PURE__ */ g.jsxs("div", { className: `${V.wrapper} ${r}`, children: [
    u && /* @__PURE__ */ g.jsx(
      "label",
      {
        className: V.label,
        "data-testid": `ds-select-label-${n}`,
        htmlFor: n,
        children: u
      }
    ),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        className: V.select,
        "data-testid": `ds-select-select-${n}`,
        disabled: o,
        id: n,
        name: n,
        onChange: b,
        required: i,
        value: h,
        children: f.map((_, x) => /* @__PURE__ */ g.jsx(
          "option",
          {
            className: V.option,
            "data-testid": `ds-select-option-${n}-${x}`,
            value: _.value,
            children: _.name
          },
          `${n}-${_.value}`
        ))
      }
    ),
    /* @__PURE__ */ g.jsx(
      Fr,
      {
        className: V.arrow,
        name: "select-button"
      }
    )
  ] });
}
const Fe = {
  "theme-light": "_theme-light_p8wyg_16",
  "theme-dark": "_theme-dark_p8wyg_36",
  "ds-stepper": "_ds-stepper_p8wyg_96",
  "state-disabled": "_state-disabled_p8wyg_111"
};
function Ur({
  modelValue: r,
  onIncrease: n,
  onDecrease: i
}) {
  const [o, s] = ie(r);
  return ze(() => {
    s(r);
  }, [r]), { value: o, handleIncrease: () => {
    n && n();
  }, handleDecrease: () => {
    i && i();
  } };
}
function wt({
  className: r = "",
  id: n,
  modelValue: i,
  disabled: o = !1,
  onIncrease: s,
  onDecrease: f
}) {
  const {
    value: u,
    handleIncrease: p,
    handleDecrease: h
  } = Ur({ modelValue: i, onIncrease: s, onDecrease: f });
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: `
        ${Fe["ds-stepper"]}
        ${o ? Fe["state-disabled"] : ""}
        ${r}
      `,
      children: [
        /* @__PURE__ */ g.jsx(
          zr,
          {
            id: `stepper-${n}`,
            initialValue: u,
            readonly: !0
          }
        ),
        /* @__PURE__ */ g.jsx(
          De,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: o,
            id: n,
            size: "small",
            onClick: p
          }
        ),
        /* @__PURE__ */ g.jsx(
          De,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: o,
            id: n,
            size: "small",
            onClick: h
          }
        )
      ]
    }
  );
}
function U(r) {
  return typeof r == "object" && r != null && !Array.isArray(r);
}
function Br(r) {
  return Object.fromEntries(Object.entries(r ?? {}).filter(([n, i]) => i !== void 0));
}
var Hr = (r) => r === "base";
function Jr(r) {
  return r.slice().filter((n) => !Hr(n));
}
function Ie(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
}
function Gr(r) {
  let n = "", i;
  for (i = Math.abs(r); i > 52; i = i / 52 | 0)
    n = Ie(i % 52) + n;
  return Ie(i % 52) + n;
}
function Kr(r, n) {
  let i = n.length;
  for (; i; )
    r = r * 33 ^ n.charCodeAt(--i);
  return r;
}
function Xr(r) {
  return Gr(Kr(5381, r) >>> 0);
}
var Me = /\s*!(important)?/i;
function Zr(r) {
  return typeof r == "string" ? Me.test(r) : !1;
}
function Qr(r) {
  return typeof r == "string" ? r.replace(Me, "").trim() : r;
}
function We(r) {
  return typeof r == "string" ? r.replaceAll(" ", "_") : r;
}
var oe = (r) => {
  const n = /* @__PURE__ */ new Map();
  return (...o) => {
    const s = JSON.stringify(o);
    if (n.has(s))
      return n.get(s);
    const f = r(...o);
    return n.set(s, f), f;
  };
};
function Ye(...r) {
  return r.filter(Boolean).reduce((i, o) => (Object.keys(o).forEach((s) => {
    const f = i[s], u = o[s];
    U(f) && U(u) ? i[s] = Ye(f, u) : i[s] = u;
  }), i), {});
}
var et = (r) => r != null;
function qe(r, n, i = {}) {
  const { stop: o, getKey: s } = i;
  function f(u, p = []) {
    if (U(u) || Array.isArray(u)) {
      const h = {};
      for (const [w, b] of Object.entries(u)) {
        const _ = (s == null ? void 0 : s(w, b)) ?? w, x = [...p, _];
        if (o != null && o(u, x))
          return n(u, p);
        const S = f(b, x);
        et(S) && (h[_] = S);
      }
      return h;
    }
    return n(u, p);
  }
  return f(r);
}
function rt(r, n) {
  return r.reduce(
    (i, o, s) => {
      const f = n[s];
      return o != null && (i[f] = o), i;
    },
    {}
  );
}
function Le(r, n, i = !0) {
  const { utility: o, conditions: s } = n, { hasShorthand: f, resolveShorthand: u } = o;
  return qe(
    r,
    (p) => Array.isArray(p) ? rt(p, s.breakpoints.keys) : p,
    {
      stop: (p) => Array.isArray(p),
      getKey: i ? (p) => f ? u(p) : p : void 0
    }
  );
}
var tt = {
  shift: (r) => r,
  finalize: (r) => r,
  breakpoints: { keys: [] }
}, nt = (r) => typeof r == "string" ? r.replaceAll(/[\n\s]+/g, " ") : r;
function at(r) {
  const { utility: n, hash: i, conditions: o = tt } = r, s = (u) => [n.prefix, u].filter(Boolean).join("-"), f = (u, p) => {
    let h;
    if (i) {
      const w = [...o.finalize(u), p];
      h = s(n.toHash(w, Xr));
    } else
      h = [...o.finalize(u), s(p)].join(":");
    return h;
  };
  return oe(({ base: u, ...p } = {}) => {
    const h = Object.assign(p, u), w = Le(h, r), b = /* @__PURE__ */ new Set();
    return qe(w, (_, x) => {
      const S = Zr(_);
      if (_ == null)
        return;
      const [z, ...B] = o.shift(x), H = Jr(B), $ = n.transform(z, Qr(nt(_)));
      let E = f(H, $.className);
      S && (E = `${E}!`), b.add(E);
    }), Array.from(b).join(" ");
  });
}
function it(...r) {
  return r.filter((n) => U(n) && Object.keys(Br(n)).length > 0);
}
function ot(r) {
  function n(s) {
    const f = it(...s);
    return f.length === 1 ? f : f.map((u) => Le(u, r));
  }
  function i(...s) {
    return Ye(...n(s));
  }
  function o(...s) {
    return Object.assign({}, ...n(s));
  }
  return { mergeCss: oe(i), assignCss: o };
}
var st = /([A-Z])/g, lt = /^ms-/, ut = oe((r) => r.startsWith("--") ? r : r.replace(st, "-$1").replace(lt, "-ms-").toLowerCase()), ct = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${ct.split(",").join("|")}`;
const ft = "base", Ue = new Set(ft.split(","));
function Ne(r) {
  return Ue.has(r) || /^@|&|&$/.test(r);
}
const dt = /^_/, pt = /&|@/;
function vt(r) {
  return r.map((n) => Ue.has(n) ? n.replace(dt, "") : pt.test(n) ? `[${We(n.trim())}]` : n);
}
function ht(r) {
  return r.sort((n, i) => {
    const o = Ne(n), s = Ne(i);
    return o && !s ? 1 : !o && s ? -1 : 0;
  });
}
const mt = "", Be = /* @__PURE__ */ new Map();
mt.split(",").forEach((r) => {
  const [n, i] = r.split(":");
  Be.set(n, i);
});
const He = {
  conditions: {
    shift: ht,
    finalize: vt,
    breakpoints: { keys: ["base"] }
  },
  utility: {
    prefix: "ds",
    transform: (r, n) => ({ className: `${Be.get(r) || ut(r)}-${We(n)}` }),
    toHash: (r, n) => n(r.join(":")),
    resolveShorthand: (r) => r
  }
}, _t = at(He), Je = (...r) => _t(Ge(...r));
Je.raw = (...r) => Ge(...r);
const { mergeCss: Ge, assignCss: xt } = ot(He), gt = {
  text: Je({
    color: "primary",
    fontFamily: "medium",
    fontSize: "md",
    lineHeight: "normal"
  })
};
function bt({
  className: r = "",
  id: n,
  text: i
}) {
  return /* @__PURE__ */ g.jsx(
    "p",
    {
      className: `${gt.text} ${r}`,
      "data-testid": `ds-text-${n}`,
      children: i
    }
  );
}
export {
  De as DSButtonArrow,
  Rt as DSFrame,
  Fr as DSIcon,
  zr as DSInput,
  Et as DSSelect,
  wt as DSStepper,
  bt as DSText
};
//# sourceMappingURL=index.js.map
