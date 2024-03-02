(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1v33v_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1v33v_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._week-days_1v33v_96{display:grid;height:20px;grid-template-columns:repeat(7,1fr);background-color:gray;color:var(--text-color-3)}._day_1v33v_104{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_12et3_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_12et3_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._month-days_12et3_96{display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(6,1fr)}._day_12et3_102{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}._day-active_12et3_107{color:#fff;background-color:navy}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1xeii_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1xeii_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._days_1xeii_96{width:160px;height:145px;box-shadow:var(--border-field);padding:2px;text-align:center;background-color:var(--background-color-white)}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_s3u64_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_s3u64_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._wrapper_s3u64_96{display:grid;grid-template-columns:90px 70px;background-color:var(--background-color);gap:10px 0;max-width:180px;width:100%}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var Wr = Object.defineProperty;
var Br = (n, a, i) => a in n ? Wr(n, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[a] = i;
var Y = (n, a, i) => (Br(n, typeof a != "symbol" ? a + "" : a, i), i);
import ae, { createContext as qr, useState as Or, useEffect as Pe, useContext as Ur, useMemo as Mr } from "react";
import Jr from "react-dom";
import Hr from "i18next";
import { initReactI18next as Gr, useTranslation as Ve } from "react-i18next";
import { makeAutoObservable as Kr, observable as Xr, action as $e } from "mobx";
import { observer as Ne } from "mobx-react-lite";
var Rr, Fe = Jr;
if (process.env.NODE_ENV === "production")
  Rr = Fe.createRoot, Fe.hydrateRoot;
else {
  var Tr = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Rr = function(n, a) {
    Tr.usingClientEntryPoint = !0;
    try {
      return Fe.createRoot(n, a);
    } finally {
      Tr.usingClientEntryPoint = !1;
    }
  };
}
var Zr = Object.defineProperty, Qr = (n, a, i) => a in n ? Zr(n, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[a] = i, Ae = (n, a, i) => (Qr(n, typeof a != "symbol" ? a + "" : a, i), i);
const et = {
  stringify: (n) => n,
  parse: (n) => n
}, rt = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, tt = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, at = {
  stringify: (n) => n.name,
  parse: (n, a) => {
    const i = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof i == "function" ? i.bind(a) : void 0;
  }
}, nt = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
}, wr = {
  string: et,
  number: rt,
  boolean: tt,
  function: at,
  json: nt
}, Sr = Symbol.for("r2wc.render"), Ie = Symbol.for("r2wc.connected"), re = Symbol.for("r2wc.context"), U = Symbol.for("r2wc.props");
function ot(n, a, i) {
  var c, m, w;
  a.props || (a.props = n.propTypes ? Object.keys(n.propTypes) : []);
  const _ = (Array.isArray(a.props) ? a.props.slice() : Object.keys(a.props)).filter((d) => d !== "container"), S = {}, b = {}, R = {};
  for (const d of _) {
    S[d] = Array.isArray(a.props) ? "string" : a.props[d];
    const y = it(d);
    b[d] = y, R[y] = d;
  }
  class x extends HTMLElement {
    constructor() {
      super(), Ae(this, c, !0), Ae(this, m), Ae(this, w, {}), Ae(this, "container"), a.shadow ? this.container = this.attachShadow({
        mode: a.shadow
      }) : this.container = this, this[U].container = this.container;
      for (const y of _) {
        const E = b[y], P = this.getAttribute(E), $ = S[y], A = wr[$];
        P && A != null && A.parse && (this[U][y] = A.parse(P, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(R);
    }
    connectedCallback() {
      this[Ie] = !0, this[Sr]();
    }
    disconnectedCallback() {
      this[Ie] = !1, this[re] && i.unmount(this[re]), delete this[re];
    }
    attributeChangedCallback(y, E, P) {
      const $ = R[y], A = S[$], M = wr[A];
      $ in S && M != null && M.parse && (this[U][$] = M.parse(P, this), this[Sr]());
    }
    [(c = Ie, m = re, w = U, Sr)]() {
      this[Ie] && (this[re] ? i.update(this[re], this[U]) : this[re] = i.mount(
        this.container,
        n,
        this[U]
      ));
    }
  }
  for (const d of _) {
    const y = b[d], E = S[d];
    Object.defineProperty(x.prototype, d, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[U][d];
      },
      set(P) {
        this[U][d] = P;
        const $ = wr[E];
        if ($ != null && $.stringify) {
          const A = $.stringify(P);
          this.getAttribute(y) !== A && this.setAttribute(y, A);
        }
      }
    });
  }
  return x;
}
function it(n = "") {
  return n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function st(n, a, i) {
  const c = Rr(n), m = ae.createElement(a, i);
  return c.render(m), {
    root: c,
    ReactComponent: a
  };
}
function lt({ root: n, ReactComponent: a }, i) {
  const c = ae.createElement(a, i);
  n.render(c);
}
function ft({ root: n }) {
  n.unmount();
}
function ct(n, a = {}) {
  return ot(n, a, { mount: st, update: lt, unmount: ft });
}
const ut = {
  days: {
    monday: "M",
    tuesday: "T",
    wednesday: "W",
    thursday: "T",
    friday: "F",
    saturday: "S",
    sunday: "S"
  },
  "month-switcher": {
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December"
  },
  wrapper: {
    title: "Calendar"
  }
}, dt = {
  calendar: ut
}, pt = {
  ...dt
}, bt = {
  days: {
    monday: "P",
    tuesday: "W",
    wednesday: "Ś",
    thursday: "C",
    friday: "P",
    saturday: "S",
    sunday: "N"
  },
  "month-switcher": {
    january: "Styczeń",
    february: "Luty",
    march: "Marzec",
    april: "Kwiecień",
    may: "Maj",
    june: "Czerwiec",
    july: "Lipiec",
    august: "Sierpień",
    september: "Wrzesień",
    october: "Październik",
    november: "Listopad",
    december: "Grudzień"
  },
  wrapper: {
    title: "Kalendarz"
  }
}, ht = {
  calendar: bt
}, mt = {
  ...ht
}, xt = {
  en: {
    translation: {
      ...pt
    }
  },
  pl: {
    translation: {
      ...mt
    }
  }
};
async function yt() {
  await Hr.use(Gr).init({
    resources: xt,
    lng: "en",
    fallbackLng: "en"
  });
}
var Er = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function vt() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ae, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), S = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), P = Symbol.iterator, $ = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[$];
      return typeof r == "function" ? r : null;
    }
    var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var o = M.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var u = t.map(function(l) {
          return String(l);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Be = !1, qe = !1, Ue = !1, Je = !1, He = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === w || He || e === m || e === R || e === x || Je || e === E || Be || qe || Ue || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === S || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case w:
          return "Profiler";
        case m:
          return "StrictMode";
        case R:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return ie(r) + ".Consumer";
          case _:
            var t = e;
            return ie(t._context) + ".Provider";
          case b:
            return Ke(e, e.render, "ForwardRef");
          case d:
            var o = e.displayName || null;
            return o !== null ? o : C(e.type) || "Memo";
          case y: {
            var f = e, u = f._payload, l = f._init;
            try {
              return C(l(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, se, le, fe, ce, ue, de, pe;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (I === 0) {
          se = console.log, le = console.info, fe = console.warn, ce = console.error, ue = console.group, de = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        I++;
      }
    }
    function Ze() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: se
            }),
            info: D({}, e, {
              value: le
            }),
            warn: D({}, e, {
              value: fe
            }),
            error: D({}, e, {
              value: ce
            }),
            group: D({}, e, {
              value: ue
            }),
            groupCollapsed: D({}, e, {
              value: de
            }),
            groupEnd: D({}, e, {
              value: pe
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = M.ReactCurrentDispatcher, H;
    function V(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            H = o && o[1] || "";
          }
        return `
` + H + e;
      }
    }
    var G = !1, z;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Qe();
    }
    function he(e, r) {
      if (!e || G)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      G = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, Xe();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (O) {
              o = O;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (O) {
              o = O;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            o = O;
          }
          e();
        }
      } catch (O) {
        if (O && o && typeof O.stack == "string") {
          for (var s = O.stack.split(`
`), g = o.stack.split(`
`), p = s.length - 1, h = g.length - 1; p >= 1 && h >= 0 && s[p] !== g[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (s[p] !== g[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || s[p] !== g[h]) {
                    var k = `
` + s[p].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, k), k;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = u, Ze(), Error.prepareStackTrace = f;
      }
      var F = e ? e.displayName || e.name : "", Ce = F ? V(F) : "";
      return typeof e == "function" && z.set(e, Ce), Ce;
    }
    function er(e, r, t) {
      return he(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, rr(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case R:
          return V("Suspense");
        case x:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return er(e.render);
          case d:
            return W(e.type, r, t);
          case y: {
            var o = e, f = o._payload, u = o._init;
            try {
              return W(u(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, me = {}, xe = M.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function tr(e, r, t, o, f) {
      {
        var u = Function.call.bind(B);
        for (var l in e)
          if (u(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var g = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              s = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              s = p;
            }
            s && !(s instanceof Error) && (q(f), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof s), q(null)), s instanceof Error && !(s.message in me) && (me[s.message] = !0, q(f), v("Failed %s type: %s", t, s.message), q(null));
          }
      }
    }
    var ar = Array.isArray;
    function K(e) {
      return ar(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function or(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function ve(e) {
      if (or(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), ye(e);
    }
    var L = M.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, _e, X;
    X = {};
    function sr(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = C(L.current.type);
        X[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(L.current.type), e.ref), X[t] = !0);
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          _e || (_e = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, t, o, f, u, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: u
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
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function pr(e, r, t, o, f) {
      {
        var u, l = {}, s = null, g = null;
        t !== void 0 && (ve(t), s = "" + t), lr(r) && (ve(r.key), s = "" + r.key), sr(r) && (g = r.ref, fr(r, f));
        for (u in r)
          B.call(r, u) && !ir.hasOwnProperty(u) && (l[u] = r[u]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (u in p)
            l[u] === void 0 && (l[u] = p[u]);
        }
        if (s || g) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && cr(l, h), g && ur(l, h);
        }
        return dr(e, s, g, f, o, L.current, l);
      }
    }
    var Z = M.ReactCurrentOwner, we = M.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Se() {
      {
        if (Z.current) {
          var e = C(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function br(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ke = {};
    function hr(e) {
      {
        var r = Se();
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
        var t = hr(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var o = "";
        e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + C(e._owner.type) + "."), N(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), N(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ee(o) && je(o, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = A(e);
          if (typeof f == "function" && f !== e.entries)
            for (var u = f.call(e), l; !(l = u.next()).done; )
              ee(l.value) && je(l.value, r);
        }
      }
    }
    function mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = C(r);
          tr(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var f = C(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            N(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Ee(e, r, t, o, f, u) {
      {
        var l = Ge(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = br(f);
          g ? s += g : s += Se();
          var p;
          e === null ? p = "null" : K(e) ? p = "array" : e !== void 0 && e.$$typeof === a ? (p = "<" + (C(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, s);
        }
        var h = pr(e, r, t, f, u);
        if (h == null)
          return h;
        if (l) {
          var k = r.children;
          if (k !== void 0)
            if (o)
              if (K(k)) {
                for (var F = 0; F < k.length; F++)
                  Re(k[F], e);
                Object.freeze && Object.freeze(k);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(k, e);
        }
        return e === c ? xr(h) : mr(h), h;
      }
    }
    function yr(e, r, t) {
      return Ee(e, r, t, !0);
    }
    function vr(e, r, t) {
      return Ee(e, r, t, !1);
    }
    var gr = vr, _r = yr;
    Oe.Fragment = c, Oe.jsx = gr, Oe.jsxs = _r;
  }()), Oe;
}
var Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function gt() {
  if (Pr)
    return Me;
  Pr = 1;
  var n = ae, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(S, b, R) {
    var x, d = {}, y = null, E = null;
    R !== void 0 && (y = "" + R), b.key !== void 0 && (y = "" + b.key), b.ref !== void 0 && (E = b.ref);
    for (x in b)
      c.call(b, x) && !w.hasOwnProperty(x) && (d[x] = b[x]);
    if (S && S.defaultProps)
      for (x in b = S.defaultProps, b)
        d[x] === void 0 && (d[x] = b[x]);
    return { $$typeof: a, type: S, key: y, ref: E, props: d, _owner: m.current };
  }
  return Me.Fragment = i, Me.jsx = _, Me.jsxs = _, Me;
}
process.env.NODE_ENV === "production" ? Er.exports = gt() : Er.exports = vt();
var T = Er.exports;
class _t {
  constructor() {
    Y(this, "date");
    Y(this, "firstDayMonth");
    Y(this, "lastDateMonth");
    Y(this, "year");
    Y(this, "month");
    Y(this, "days");
    this.date = null, this.year = null, this.month = null, this.days = null, this.firstDayMonth = null, this.lastDateMonth = null;
  }
  initCalendar(a) {
    this.getDate(a), this.getFullYear(), this.getMonth(), this.getFirstDayMonth(), this.getLastDateMonth(), this.generateDays();
  }
  generateDays() {
    const a = [];
    if (this.date === null || this.firstDayMonth === null || this.lastDateMonth === null)
      throw new Error("Date not found");
    for (let i = this.firstDayMonth; i > 0; i--)
      a.push({
        status: "inactive",
        value: ""
      });
    for (let i = 1; i <= this.lastDateMonth; i++) {
      const c = i === this.date.getDate() && this.month === (/* @__PURE__ */ new Date()).getMonth() && this.year === (/* @__PURE__ */ new Date()).getFullYear();
      a.push({
        status: c ? "active" : "normal",
        value: String(i)
      });
    }
    this.days = a;
  }
  getDate(a) {
    this.date = a || /* @__PURE__ */ new Date();
  }
  getFullYear() {
    if (this.date === null)
      throw new Error("Date not found");
    this.year = this.date.getFullYear();
  }
  getMonth() {
    if (this.date === null)
      throw new Error("Date not found");
    this.month = this.date.getMonth();
  }
  getFirstDayMonth() {
    if (this.year === null || this.month === null)
      throw new Error("Date not found");
    this.firstDayMonth = new Date(this.year, this.month, 1).getDay();
  }
  getLastDateMonth() {
    if (this.year === null || this.month === null)
      throw new Error("Date not found");
    this.lastDateMonth = new Date(this.year, this.month + 1, 0).getDate();
  }
}
var wt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, ne = (n, a, i, c) => {
  for (var m = c > 1 ? void 0 : c ? St(a, i) : a, w = n.length - 1, _; w >= 0; w--)
    (_ = n[w]) && (m = (c ? _(a, i, m) : _(m)) || m);
  return c && m && wt(a, i, m), m;
};
class te {
  constructor() {
    Y(this, "calendar", null);
    Y(this, "year", null);
    Y(this, "month", null);
    Y(this, "calendarRepository", new _t());
    Kr(this);
  }
  generateCalendar(a) {
    this.calendarRepository.initCalendar(a || null), this.calendar = this.calendarRepository.days, this.year = this.calendarRepository.year, this.month = this.calendarRepository.month;
  }
  changeCalendarByYear() {
    if (!this.month && this.month !== 0 || !this.year)
      return;
    const a = new Date(this.year, this.month);
    this.generateCalendar(a);
  }
  changeCalendarByMonth(a) {
    if (!this.year)
      return;
    const i = new Date(this.year, a);
    this.generateCalendar(i);
  }
  increaseYear() {
    this.year && (this.year += 1, this.changeCalendarByYear());
  }
  decreaseYear() {
    this.year && (this.year -= 1, this.changeCalendarByYear());
  }
}
ne([
  Xr
], te.prototype, "calendar", 2);
ne([
  $e
], te.prototype, "generateCalendar", 1);
ne([
  $e
], te.prototype, "changeCalendarByYear", 1);
ne([
  $e
], te.prototype, "changeCalendarByMonth", 1);
ne([
  $e
], te.prototype, "increaseYear", 1);
ne([
  $e
], te.prototype, "decreaseYear", 1);
const Yr = new te(), Vr = qr(Yr);
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pg4yx_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pg4yx_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._DSText_pg4yx_96{font:400 11px/13px MSSansSerifMedium,sans-serif;color:var(--text-color)}')), document.head.appendChild(n);
    }
  } catch (a) {
    console.error("vite-plugin-css-injected-by-js", a);
  }
})();
var Cr = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function kt() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ae, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), S = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), P = Symbol.iterator, $ = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[$];
      return typeof r == "function" ? r : null;
    }
    var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var o = M.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var u = t.map(function(l) {
          return String(l);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Be = !1, qe = !1, Ue = !1, Je = !1, He = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === w || He || e === m || e === R || e === x || Je || e === E || Be || qe || Ue || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === S || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case w:
          return "Profiler";
        case m:
          return "StrictMode";
        case R:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return ie(r) + ".Consumer";
          case _:
            var t = e;
            return ie(t._context) + ".Provider";
          case b:
            return Ke(e, e.render, "ForwardRef");
          case d:
            var o = e.displayName || null;
            return o !== null ? o : C(e.type) || "Memo";
          case y: {
            var f = e, u = f._payload, l = f._init;
            try {
              return C(l(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, se, le, fe, ce, ue, de, pe;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (I === 0) {
          se = console.log, le = console.info, fe = console.warn, ce = console.error, ue = console.group, de = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        I++;
      }
    }
    function Ze() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: se
            }),
            info: D({}, e, {
              value: le
            }),
            warn: D({}, e, {
              value: fe
            }),
            error: D({}, e, {
              value: ce
            }),
            group: D({}, e, {
              value: ue
            }),
            groupCollapsed: D({}, e, {
              value: de
            }),
            groupEnd: D({}, e, {
              value: pe
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = M.ReactCurrentDispatcher, H;
    function V(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            H = o && o[1] || "";
          }
        return `
` + H + e;
      }
    }
    var G = !1, z;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Qe();
    }
    function he(e, r) {
      if (!e || G)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      G = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, Xe();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (O) {
              o = O;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (O) {
              o = O;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            o = O;
          }
          e();
        }
      } catch (O) {
        if (O && o && typeof O.stack == "string") {
          for (var s = O.stack.split(`
`), g = o.stack.split(`
`), p = s.length - 1, h = g.length - 1; p >= 1 && h >= 0 && s[p] !== g[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (s[p] !== g[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || s[p] !== g[h]) {
                    var k = `
` + s[p].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, k), k;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = u, Ze(), Error.prepareStackTrace = f;
      }
      var F = e ? e.displayName || e.name : "", Ce = F ? V(F) : "";
      return typeof e == "function" && z.set(e, Ce), Ce;
    }
    function er(e, r, t) {
      return he(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, rr(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case R:
          return V("Suspense");
        case x:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return er(e.render);
          case d:
            return W(e.type, r, t);
          case y: {
            var o = e, f = o._payload, u = o._init;
            try {
              return W(u(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, me = {}, xe = M.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function tr(e, r, t, o, f) {
      {
        var u = Function.call.bind(B);
        for (var l in e)
          if (u(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var g = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              s = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              s = p;
            }
            s && !(s instanceof Error) && (q(f), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof s), q(null)), s instanceof Error && !(s.message in me) && (me[s.message] = !0, q(f), v("Failed %s type: %s", t, s.message), q(null));
          }
      }
    }
    var ar = Array.isArray;
    function K(e) {
      return ar(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function or(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function ve(e) {
      if (or(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), ye(e);
    }
    var L = M.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, _e, X;
    X = {};
    function sr(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = C(L.current.type);
        X[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(L.current.type), e.ref), X[t] = !0);
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          _e || (_e = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, t, o, f, u, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: u
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
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function pr(e, r, t, o, f) {
      {
        var u, l = {}, s = null, g = null;
        t !== void 0 && (ve(t), s = "" + t), lr(r) && (ve(r.key), s = "" + r.key), sr(r) && (g = r.ref, fr(r, f));
        for (u in r)
          B.call(r, u) && !ir.hasOwnProperty(u) && (l[u] = r[u]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (u in p)
            l[u] === void 0 && (l[u] = p[u]);
        }
        if (s || g) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && cr(l, h), g && ur(l, h);
        }
        return dr(e, s, g, f, o, L.current, l);
      }
    }
    var Z = M.ReactCurrentOwner, we = M.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Se() {
      {
        if (Z.current) {
          var e = C(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function br(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ke = {};
    function hr(e) {
      {
        var r = Se();
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
        var t = hr(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var o = "";
        e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + C(e._owner.type) + "."), N(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), N(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ee(o) && je(o, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = A(e);
          if (typeof f == "function" && f !== e.entries)
            for (var u = f.call(e), l; !(l = u.next()).done; )
              ee(l.value) && je(l.value, r);
        }
      }
    }
    function mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = C(r);
          tr(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var f = C(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            N(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Ee(e, r, t, o, f, u) {
      {
        var l = Ge(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = br(f);
          g ? s += g : s += Se();
          var p;
          e === null ? p = "null" : K(e) ? p = "array" : e !== void 0 && e.$$typeof === a ? (p = "<" + (C(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, s);
        }
        var h = pr(e, r, t, f, u);
        if (h == null)
          return h;
        if (l) {
          var k = r.children;
          if (k !== void 0)
            if (o)
              if (K(k)) {
                for (var F = 0; F < k.length; F++)
                  Re(k[F], e);
                Object.freeze && Object.freeze(k);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(k, e);
        }
        return e === c ? xr(h) : mr(h), h;
      }
    }
    function yr(e, r, t) {
      return Ee(e, r, t, !0);
    }
    function vr(e, r, t) {
      return Ee(e, r, t, !1);
    }
    var gr = vr, _r = yr;
    Le.Fragment = c, Le.jsx = gr, Le.jsxs = _r;
  }()), Le;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function jt() {
  if (Nr)
    return Te;
  Nr = 1;
  var n = ae, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(S, b, R) {
    var x, d = {}, y = null, E = null;
    R !== void 0 && (y = "" + R), b.key !== void 0 && (y = "" + b.key), b.ref !== void 0 && (E = b.ref);
    for (x in b)
      c.call(b, x) && !w.hasOwnProperty(x) && (d[x] = b[x]);
    if (S && S.defaultProps)
      for (x in b = S.defaultProps, b)
        d[x] === void 0 && (d[x] = b[x]);
    return { $$typeof: a, type: S, key: y, ref: E, props: d, _owner: m.current };
  }
  return Te.Fragment = i, Te.jsx = _, Te.jsxs = _, Te;
}
process.env.NODE_ENV === "production" ? Cr.exports = jt() : Cr.exports = kt();
var j = Cr.exports;
const kr = {
  "theme-light": "_theme-light_qp7ji_16",
  "theme-dark": "_theme-dark_qp7ji_36",
  "ds-button-arrow": "_ds-button-arrow_qp7ji_96",
  "arrow-bottom": "_arrow-bottom_qp7ji_124",
  "arrow-top": "_arrow-top_qp7ji_128",
  "size-small": "_size-small_qp7ji_132",
  "size-medium": "_size-medium_qp7ji_137"
};
function Fr({
  ariaLabel: n,
  className: a = "",
  direction: i,
  disabled: c,
  id: m,
  onClick: w,
  size: _
}) {
  return /* @__PURE__ */ j.jsx(
    "button",
    {
      "aria-label": n,
      className: `
				${kr["ds-button-arrow"]}
				${kr[`arrow-${i}`]}
				${kr[`size-${_}`]}
				${a}
			`,
      "data-testid": `ds-button-arrow-${m}-${i}`,
      disabled: c,
      type: "button",
      onClick: w
    }
  );
}
const Rt = "_frame_hpida_96", Et = "_title_hpida_104", Ar = {
  "theme-light": "_theme-light_hpida_16",
  "theme-dark": "_theme-dark_hpida_36",
  frame: Rt,
  title: Et
};
function Ct({
  children: n,
  className: a = "",
  id: i,
  title: c
}) {
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: `${Ar.frame} ${a}`,
      "data-testid": `ds-frame-${i}`,
      children: [
        c && /* @__PURE__ */ j.jsx(
          Ut,
          {
            className: Ar.title,
            text: c,
            id: `frame-${i}`
          }
        ),
        n
      ]
    }
  );
}
function Ot() {
  return /* @__PURE__ */ j.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", children: [
    /* @__PURE__ */ j.jsx(
      "path",
      {
        fill: "#DFDFDF",
        fillRule: "evenodd",
        d: "M15 0H0v16h1V1h14V0z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ j.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M2 1H1v14h1V2h12V1H2z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ j.jsx(
      "path",
      {
        fill: "#000",
        fillRule: "evenodd",
        d: "M16 17H0v-1h15V0h1v17z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ j.jsx(
      "path",
      {
        fill: "gray",
        fillRule: "evenodd",
        d: "M15 1h-1v14H1v1h14V1z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ j.jsx("path", { fill: "silver", d: "M2 2h12v13H2z" }),
    /* @__PURE__ */ j.jsx(
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
const Mt = {
  "select-button": /* @__PURE__ */ j.jsx(Ot, {})
};
function Tt({
  className: n = "",
  name: a
}) {
  return /* @__PURE__ */ j.jsx("span", { className: n, children: Mt[a] });
}
const Dt = "_input_e0ixd_111", Pt = "_label_e0ixd_112", jr = {
  "theme-light": "_theme-light_e0ixd_16",
  "theme-dark": "_theme-dark_e0ixd_36",
  "wrapper-horizontal": "_wrapper-horizontal_e0ixd_96",
  "wrapper-vertical": "_wrapper-vertical_e0ixd_102",
  input: Dt,
  label: Pt
};
function $t({ initialValue: n, onChange: a }) {
  const [i, c] = Or(n);
  return Pe(() => {
    c(n);
  }, [n, c]), { value: i, handleInputChange: (m) => {
    const w = m.target.value;
    c(w), a && a(w);
  } };
}
function Nt({
  className: n = "",
  type: a = "text",
  id: i,
  disabled: c = !1,
  readonly: m = !1,
  initialValue: w = "",
  labelName: _,
  wrapperLayout: S = "vertical",
  min: b,
  max: R,
  onChange: x
}) {
  const { value: d, handleInputChange: y } = $t({ initialValue: w, onChange: x }), E = `ds-input-${i}`;
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: `${jr[`wrapper-${S}`]} ${n}`,
      "data-testid": E,
      children: [
        _ && /* @__PURE__ */ j.jsx(
          "label",
          {
            className: jr.label,
            "data-testid": `ds-input-label-${i}`,
            htmlFor: E,
            children: _
          }
        ),
        /* @__PURE__ */ j.jsx(
          "input",
          {
            id: E,
            className: jr.input,
            "data-testid": `ds-input-input-${i}`,
            type: a,
            disabled: c,
            readOnly: m,
            value: d,
            min: b ?? void 0,
            max: R ?? void 0,
            name: E,
            onChange: y
          }
        )
      ]
    }
  );
}
function Ft(n) {
  const [a, i] = Or(n);
  return {
    value: a,
    handleChange: (c) => {
      i(c.target.value);
    }
  };
}
const At = "_wrapper_1id5f_96", It = "_label_1id5f_100", Lt = "_select_1id5f_105", Yt = "_arrow_1id5f_115", De = {
  "theme-light": "_theme-light_1id5f_16",
  "theme-dark": "_theme-dark_1id5f_36",
  wrapper: At,
  label: It,
  select: Lt,
  arrow: Yt
};
function Vt({
  className: n = "",
  id: a,
  required: i = !1,
  disabled: c = !1,
  modelValue: m,
  options: w,
  labelName: _,
  onSelect: S
}) {
  const { value: b, handleChange: R } = Ft(m), x = (d) => {
    R(d), S(d);
  };
  return /* @__PURE__ */ j.jsxs("div", { className: `${De.wrapper} ${n}`, children: [
    _ && /* @__PURE__ */ j.jsx(
      "label",
      {
        className: De.label,
        "data-testid": `ds-select-label-${a}`,
        htmlFor: a,
        children: _
      }
    ),
    /* @__PURE__ */ j.jsx(
      "select",
      {
        className: De.select,
        "data-testid": `ds-select-select-${a}`,
        disabled: c,
        id: a,
        name: a,
        onChange: x,
        required: i,
        value: b,
        children: w.map((d, y) => /* @__PURE__ */ j.jsx(
          "option",
          {
            className: De.option,
            "data-testid": `ds-select-option-${a}-${y}`,
            value: d.value,
            children: d.name
          },
          `${a}-${d.value}`
        ))
      }
    ),
    /* @__PURE__ */ j.jsx(
      Tt,
      {
        className: De.arrow,
        name: "select-button"
      }
    )
  ] });
}
const Ir = {
  "theme-light": "_theme-light_p8wyg_16",
  "theme-dark": "_theme-dark_p8wyg_36",
  "ds-stepper": "_ds-stepper_p8wyg_96",
  "state-disabled": "_state-disabled_p8wyg_111"
};
function zt({
  modelValue: n,
  onIncrease: a,
  onDecrease: i
}) {
  const [c, m] = Or(n);
  return Pe(() => {
    m(n);
  }, [n]), { value: c, handleIncrease: () => {
    a && a();
  }, handleDecrease: () => {
    i && i();
  } };
}
function Wt({
  className: n = "",
  id: a,
  modelValue: i,
  disabled: c = !1,
  onIncrease: m,
  onDecrease: w
}) {
  const {
    value: _,
    handleIncrease: S,
    handleDecrease: b
  } = zt({ modelValue: i, onIncrease: m, onDecrease: w });
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: `
        ${Ir["ds-stepper"]}
        ${c ? Ir["state-disabled"] : ""}
        ${n}
      `,
      children: [
        /* @__PURE__ */ j.jsx(
          Nt,
          {
            id: `stepper-${a}`,
            initialValue: _,
            readonly: !0
          }
        ),
        /* @__PURE__ */ j.jsx(
          Fr,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: c,
            id: a,
            size: "small",
            onClick: S
          }
        ),
        /* @__PURE__ */ j.jsx(
          Fr,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: c,
            id: a,
            size: "small",
            onClick: b
          }
        )
      ]
    }
  );
}
const Bt = "_DSText_pg4yx_96", qt = {
  "theme-light": "_theme-light_pg4yx_16",
  "theme-dark": "_theme-dark_pg4yx_36",
  DSText: Bt
};
function Ut({
  className: n = "",
  id: a,
  text: i
}) {
  return /* @__PURE__ */ j.jsx(
    "p",
    {
      className: `${qt.DSText} ${n}`,
      "data-testid": `ds-text-${a}`,
      children: i
    }
  );
}
function ze() {
  return {
    calendarService: Ur(Vr)
  };
}
function Jt() {
  const { t: n } = Ve(), { calendarService: a } = ze();
  return Pe(() => {
    a.generateCalendar();
  }, []), {
    title: Mr(
      () => ({
        title: n("calendar.wrapper.title")
      }),
      [n]
    ).title
  };
}
function zr() {
  const { calendarService: n } = ze(), { t: a } = Ve(), i = Mr(
    () => ({
      weekDays: [
        a("calendar.days.sunday"),
        a("calendar.days.monday"),
        a("calendar.days.tuesday"),
        a("calendar.days.wednesday"),
        a("calendar.days.thursday"),
        a("calendar.days.friday"),
        a("calendar.days.saturday")
      ]
    }),
    [a]
  );
  return {
    monthDays: n.calendar,
    weekDays: i.weekDays
  };
}
const Ht = "_day_1v33v_104", Lr = {
  "theme-light": "_theme-light_1v33v_16",
  "theme-dark": "_theme-dark_1v33v_36",
  "week-days": "_week-days_1v33v_96",
  day: Ht
}, Gt = Ne(() => {
  const { weekDays: n } = zr();
  return /* @__PURE__ */ T.jsx("div", { className: Lr["week-days"], children: n.map((a, i) => /* @__PURE__ */ T.jsx(
    "span",
    {
      className: Lr.day,
      "data-testid": `calendar-week-days-day-${i}`,
      children: a
    },
    i
  )) });
}), Kt = "_day_12et3_102", Ye = {
  "theme-light": "_theme-light_12et3_16",
  "theme-dark": "_theme-dark_12et3_36",
  "month-days": "_month-days_12et3_96",
  day: Kt,
  "day-active": "_day-active_12et3_107"
}, Xt = Ne(() => {
  const { monthDays: n } = zr();
  return n && /* @__PURE__ */ T.jsx("div", { className: Ye["month-days"], "data-testid": "calendar-view-days", children: n.map((a, i) => a.value === "" ? /* @__PURE__ */ T.jsx(
    "span",
    {
      className: Ye.day,
      "data-testid": `calendar-month-days-empty-${i}`
    },
    i
  ) : /* @__PURE__ */ T.jsx(
    "button",
    {
      className: `
                        ${Ye.day}
                        ${a.status === "active" ? Ye["day-active"] : ""}
                    `,
      "data-testid": `calendar-month-days-day-${a.value}`,
      type: "button",
      children: a.value
    },
    i
  )) });
}), Zt = "_days_1xeii_96", Qt = {
  "theme-light": "_theme-light_1xeii_16",
  "theme-dark": "_theme-dark_1xeii_36",
  days: Zt
}, ea = () => /* @__PURE__ */ T.jsxs("div", { className: Qt.days, children: [
  /* @__PURE__ */ T.jsx(Gt, {}),
  /* @__PURE__ */ T.jsx(Xt, {})
] });
function ra() {
  const { t: n } = Ve(), { calendarService: a } = ze(), i = (m) => {
    a.changeCalendarByMonth(Number(m.currentTarget.value));
  }, c = Mr(
    () => ({
      months: [
        {
          value: 0,
          name: n("calendar.month-switcher.january")
        },
        {
          value: 1,
          name: n("calendar.month-switcher.february")
        },
        {
          value: 2,
          name: n("calendar.month-switcher.march")
        },
        {
          value: 3,
          name: n("calendar.month-switcher.april")
        },
        {
          value: 4,
          name: n("calendar.month-switcher.may")
        },
        {
          value: 5,
          name: n("calendar.month-switcher.june")
        },
        {
          value: 6,
          name: n("calendar.month-switcher.july")
        },
        {
          value: 7,
          name: n("calendar.month-switcher.august")
        },
        {
          value: 8,
          name: n("calendar.month-switcher.september")
        },
        {
          value: 9,
          name: n("calendar.month-switcher.october")
        },
        {
          value: 10,
          name: n("calendar.month-switcher.november")
        },
        {
          value: 11,
          name: n("calendar.month-switcher.december")
        }
      ]
    }),
    [n]
  );
  return {
    handleSelectChange: i,
    month: a.month,
    months: c.months
  };
}
const ta = Ne(() => {
  const { handleSelectChange: n, month: a, months: i } = ra();
  return a !== null && /* @__PURE__ */ T.jsx(
    Vt,
    {
      id: "month-switcher",
      modelValue: a,
      options: i,
      onSelect: n
    }
  );
});
function aa() {
  const { calendarService: n } = ze();
  return {
    decreaseYear: () => {
      n.decreaseYear();
    },
    increaseYear: () => {
      n.increaseYear();
    },
    year: n.year
  };
}
const na = Ne(() => {
  const { decreaseYear: n, increaseYear: a, year: i } = aa();
  return i && /* @__PURE__ */ T.jsx(
    Wt,
    {
      id: "calendar-year",
      modelValue: i,
      onIncrease: a,
      onDecrease: n
    }
  );
}), oa = "_wrapper_s3u64_96", ia = {
  "theme-light": "_theme-light_s3u64_16",
  "theme-dark": "_theme-dark_s3u64_36",
  wrapper: oa
};
function sa() {
  const { i18n: n } = Ve();
  Pe(() => {
    const a = document.documentElement.lang;
    a && n.changeLanguage(a);
  }, []), Pe(() => {
    const a = new MutationObserver((i) => {
      i.forEach((c) => {
        c.type === "attributes" && c.attributeName === "lang" && n.changeLanguage(c.target.lang);
      });
    });
    return a.observe(document.documentElement, { attributes: !0 }), () => {
      a.disconnect();
    };
  }, [n]);
}
const la = Ne(() => {
  const { title: n } = Jt();
  return sa(), /* @__PURE__ */ T.jsxs(
    Ct,
    {
      className: ia.wrapper,
      id: "calculator",
      title: n,
      children: [
        /* @__PURE__ */ T.jsx(ta, {}),
        /* @__PURE__ */ T.jsx(na, {}),
        /* @__PURE__ */ T.jsx(ea, {})
      ]
    }
  );
}), fa = () => /* @__PURE__ */ T.jsx(Vr.Provider, { value: Yr, children: /* @__PURE__ */ T.jsx(la, {}) }), ca = ct(fa);
customElements.define("ma-calendar", ca);
yt();
//# sourceMappingURL=index.js.map
