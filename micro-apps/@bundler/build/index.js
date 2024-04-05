(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1v33v_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1v33v_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._week-days_1v33v_96{display:grid;height:20px;grid-template-columns:repeat(7,1fr);background-color:gray;color:var(--text-color-3)}._day_1v33v_104{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_12et3_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_12et3_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._month-days_12et3_96{display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(6,1fr)}._day_12et3_102{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}._day-active_12et3_107{color:#fff;background-color:navy}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1xeii_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1xeii_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._days_1xeii_96{width:160px;height:145px;box-shadow:var(--border-field);padding:2px;text-align:center;background-color:var(--background-color-white)}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_s3u64_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_s3u64_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._wrapper_s3u64_96{display:grid;grid-template-columns:90px 70px;background-color:var(--background-color);gap:10px 0;max-width:180px;width:100%}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var rt = Object.defineProperty;
var tt = (a, t, o) => t in a ? rt(a, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[t] = o;
var A = (a, t, o) => (tt(a, typeof t != "symbol" ? t + "" : t, o), o);
import oe, { createContext as Lr, useState as Cr, useEffect as ne, useContext as Vr, useMemo as Ae } from "react";
import at from "react-dom";
import nt from "i18next";
import { initReactI18next as ot, useTranslation as ie } from "react-i18next";
import { makeAutoObservable as Wr, observable as Yr, action as se } from "mobx";
import { observer as te } from "mobx-react-lite";
var Mr, Fe = at;
if (process.env.NODE_ENV === "production")
  Mr = Fe.createRoot, Fe.hydrateRoot;
else {
  var Dr = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Mr = function(a, t) {
    Dr.usingClientEntryPoint = !0;
    try {
      return Fe.createRoot(a, t);
    } finally {
      Dr.usingClientEntryPoint = !1;
    }
  };
}
var it = Object.defineProperty, st = (a, t, o) => t in a ? it(a, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[t] = o, Ie = (a, t, o) => (st(a, typeof t != "symbol" ? t + "" : t, o), o);
const lt = {
  stringify: (a) => a,
  parse: (a) => a
}, ft = {
  stringify: (a) => `${a}`,
  parse: (a) => parseFloat(a)
}, ct = {
  stringify: (a) => a ? "true" : "false",
  parse: (a) => /^[ty1-9]/i.test(a)
}, dt = {
  stringify: (a) => a.name,
  parse: (a, t) => {
    const o = (() => {
      if (typeof window < "u" && a in window)
        return window[a];
      if (typeof global < "u" && a in global)
        return global[a];
    })();
    return typeof o == "function" ? o.bind(t) : void 0;
  }
}, ut = {
  stringify: (a) => JSON.stringify(a),
  parse: (a) => JSON.parse(a)
}, Sr = {
  string: lt,
  number: ft,
  boolean: ct,
  function: dt,
  json: ut
}, Tr = Symbol.for("r2wc.render"), Ge = Symbol.for("r2wc.connected"), re = Symbol.for("r2wc.context"), q = Symbol.for("r2wc.props");
function pt(a, t, o) {
  var f, u, v;
  t.props || (t.props = a.propTypes ? Object.keys(a.propTypes) : []);
  const x = (Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props)).filter((p) => p !== "container"), S = {}, m = {}, j = {};
  for (const p of x) {
    S[p] = Array.isArray(t.props) ? "string" : t.props[p];
    const g = bt(p);
    m[p] = g, j[g] = p;
  }
  class y extends HTMLElement {
    constructor() {
      super(), Ie(this, f, !0), Ie(this, u), Ie(this, v, {}), Ie(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[q].container = this.container;
      for (const g of x) {
        const R = m[g], P = this.getAttribute(R), $ = S[g], F = Sr[$];
        P && F != null && F.parse && (this[q][g] = F.parse(P, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(j);
    }
    connectedCallback() {
      this[Ge] = !0, this[Tr]();
    }
    disconnectedCallback() {
      this[Ge] = !1, this[re] && o.unmount(this[re]), delete this[re];
    }
    attributeChangedCallback(g, R, P) {
      const $ = j[g], F = S[$], O = Sr[F];
      $ in S && O != null && O.parse && (this[q][$] = O.parse(P, this), this[Tr]());
    }
    [(f = Ge, u = re, v = q, Tr)]() {
      this[Ge] && (this[re] ? o.update(this[re], this[q]) : this[re] = o.mount(
        this.container,
        a,
        this[q]
      ));
    }
  }
  for (const p of x) {
    const g = m[p], R = S[p];
    Object.defineProperty(y.prototype, p, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[q][p];
      },
      set(P) {
        this[q][p] = P;
        const $ = Sr[R];
        if ($ != null && $.stringify) {
          const F = $.stringify(P);
          this.getAttribute(g) !== F && this.setAttribute(g, F);
        }
      }
    });
  }
  return y;
}
function bt(a = "") {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function mt(a, t, o) {
  const f = Mr(a), u = oe.createElement(t, o);
  return f.render(u), {
    root: f,
    ReactComponent: t
  };
}
function ht({ root: a, ReactComponent: t }, o) {
  const f = oe.createElement(t, o);
  a.render(f);
}
function yt({ root: a }) {
  a.unmount();
}
function Br(a, t = {}) {
  return pt(a, t, { mount: mt, update: ht, unmount: yt });
}
const xt = {
  "ma-calendar": {
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
  }
}, vt = {
  "ma-timezone": {
    stepper: {
      0: "GMT+0 Greenwich Mean Time (GMT)",
      1: "GMT+1 Central European Time (CET)",
      2: "GMT+2 Eastern European Time (EET)",
      3: "GMT+3 Moscow Time (MSK)",
      4: "GMT+4 Armenia Time (AMT)",
      5: "GMT+5 Pakistan Standard Time (PKT)",
      6: "GMT+6 Omsk Time (OMSK)",
      7: "GMT+7 Kranoyask Time (KRAT)",
      8: "GMT+8 China Standard Time (CST)",
      9: "GMT+9 Japan Standard Time (JST)",
      10: "GMT+10 Eastern Australia Standard Time (AEST)",
      11: "GMT+11 Sakhalin Time (SAKT)",
      12: "GMT+12 New Zealand Standard Time (NZST)",
      "-12": "GMT-12 International Date Line West (IDLW)",
      "-11": "GMT-11 Nome Time (NT)",
      "-10": "GMT-10 Hawaii Standard Time (HST)",
      "-9": "GMT-9 Alaska Standard Time (AKST)",
      "-8": "GMT-8 Pacific Standard Time (PST)",
      "-7": "GMT-7 Mountain Standard Time (MST)",
      "-6": "GMT-6 Central Standard Time (CST)",
      "-5": "GMT-5 Eastern Standard Time (EST)",
      "-4": "GMT-4 Atlantic Standard Time (AST)",
      "-3": "GMT-3 Argentina Time (ART)",
      "-2": "GMT-2 Azores Time (AT)",
      "-1": "GMT-1 West Africa Time (WAT)"
    },
    wrapper: {
      title: "Timezone"
    }
  }
}, gt = {
  ...xt,
  ...vt
}, _t = {
  "ma-calendar": {
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
  }
}, wt = {
  "ma-timezone": {
    stepper: {
      0: "GMT+0 Uniwersynalny Czas (GMT)",
      1: "GMT+1 Środkowoeuropejski Standardowy Czas (CET)",
      2: "GMT+2 Wschodnioeuropejski Standardowy Czas (EET)",
      3: "GMT+3 Moskiewski Czas (MSK)",
      4: "GMT+4 Armeński Czas (AMT)",
      5: "GMT+5 Pakistański Czas Standardowy (PKT)",
      6: "GMT+6 Omsk Czas (OMSK)",
      7: "GMT+7 Kransnojark Czas (KRAT)",
      8: "GMT+8 Chiński Czas Standardowy (CST)",
      9: "GMT+9 Japoński Czas Standardowy (JST)",
      10: "GMT+10 Wschodnioaustraliski Czas Standardowy (AEST)",
      11: "GMT+11 Sachalin Czas (SAKT)",
      12: "GMT+12 Nowa Zelandia Czas Standardowy (NZST)",
      "-12": "GMT-12 Międzynarodowa linia zmiany daty (IDLW)",
      "-11": "GMT-11 Nome Czas (NT)",
      "-10": "GMT-10 Hawaje Czas Standardowy (HST)",
      "-9": "GMT-9 Alaska Czas Standardowy (AKST)",
      "-8": "GMT-8 Pacyfik Czas Standardowy (PST)",
      "-7": "GMT-7 Górki Czas Standardowy (MST)",
      "-6": "GMT-6 Centralny Czas Standardowy (CST)",
      "-5": "GMT-5 Wschodni Czas Standardowy (EST)",
      "-4": "GMT-4 Atlantycki Czas Standardowy (AST)",
      "-3": "GMT-3 Argentyński Czas (ART)",
      "-2": "GMT-2 Azorski Czas (AT)",
      "-1": "GMT-1 Zachodnia Afryka Czas (WAT)"
    },
    wrapper: {
      title: "Strefa czasowa"
    }
  }
}, St = {
  ..._t,
  ...wt
}, Tt = {
  en: {
    translation: {
      ...gt
    }
  },
  pl: {
    translation: {
      ...St
    }
  }
};
async function kt() {
  await nt.use(ot).init({
    resources: Tt,
    lng: "en",
    fallbackLng: "en"
  });
}
var Rr = { exports: {} }, Pe = {};
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
function jt() {
  if (Pr)
    return Pe;
  Pr = 1;
  var a = oe, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, u = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(S, m, j) {
    var y, p = {}, g = null, R = null;
    j !== void 0 && (g = "" + j), m.key !== void 0 && (g = "" + m.key), m.ref !== void 0 && (R = m.ref);
    for (y in m)
      f.call(m, y) && !v.hasOwnProperty(y) && (p[y] = m[y]);
    if (S && S.defaultProps)
      for (y in m = S.defaultProps, m)
        p[y] === void 0 && (p[y] = m[y]);
    return { $$typeof: t, type: S, key: g, ref: R, props: p, _owner: u.current };
  }
  return Pe.Fragment = o, Pe.jsx = x, Pe.jsxs = x, Pe;
}
var $e = {};
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
function Mt() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    var a = oe, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), S = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), P = Symbol.iterator, $ = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[$];
      return typeof r == "function" ? r : null;
    }
    var O = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          n[i - 1] = arguments[i];
        Ye("error", e, n);
      }
    }
    function Ye(e, r, n) {
      {
        var i = O.ReactDebugCurrentFrame, c = i.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var d = n.map(function(l) {
          return String(l);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Be = !1, qe = !1, Ue = !1, Ke = !1, Je = !1, fe;
    fe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === v || Je || e === u || e === j || e === y || Ke || e === R || Be || qe || Ue || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === p || e.$$typeof === x || e.$$typeof === S || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Ze(e, r, n) {
      var i = e.displayName;
      if (i)
        return i;
      var c = r.displayName || r.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case o:
          return "Portal";
        case v:
          return "Profiler";
        case u:
          return "StrictMode";
        case j:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return ce(r) + ".Consumer";
          case x:
            var n = e;
            return ce(n._context) + ".Provider";
          case m:
            return Ze(e, e.render, "ForwardRef");
          case p:
            var i = e.displayName || null;
            return i !== null ? i : E(e.type) || "Memo";
          case g: {
            var c = e, d = c._payload, l = c._init;
            try {
              return E(l(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, de, ue, pe, be, me, he, ye;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Xe() {
      {
        if (I === 0) {
          de = console.log, ue = console.info, pe = console.warn, be = console.error, me = console.group, he = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
    function Qe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: de
            }),
            info: D({}, e, {
              value: ue
            }),
            warn: D({}, e, {
              value: pe
            }),
            error: D({}, e, {
              value: be
            }),
            group: D({}, e, {
              value: me
            }),
            groupCollapsed: D({}, e, {
              value: he
            }),
            groupEnd: D({}, e, {
              value: ye
            })
          });
        }
        I < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = O.ReactCurrentDispatcher, K;
    function L(e, r, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (c) {
            var i = c.stack.trim().match(/\n( *(at )?)/);
            K = i && i[1] || "";
          }
        return `
` + K + e;
      }
    }
    var J = !1, V;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      V = new er();
    }
    function ve(e, r) {
      if (!e || J)
        return "";
      {
        var n = V.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      J = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = U.current, U.current = null, Xe();
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
            } catch (C) {
              i = C;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (C) {
              i = C;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            i = C;
          }
          e();
        }
      } catch (C) {
        if (C && i && typeof C.stack == "string") {
          for (var s = C.stack.split(`
`), w = i.stack.split(`
`), b = s.length - 1, h = w.length - 1; b >= 1 && h >= 0 && s[b] !== w[h]; )
            h--;
          for (; b >= 1 && h >= 0; b--, h--)
            if (s[b] !== w[h]) {
              if (b !== 1 || h !== 1)
                do
                  if (b--, h--, h < 0 || s[b] !== w[h]) {
                    var T = `
` + s[b].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, T), T;
                  }
                while (b >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        J = !1, U.current = d, Qe(), Error.prepareStackTrace = c;
      }
      var N = e ? e.displayName || e.name : "", De = N ? L(N) : "";
      return typeof e == "function" && V.set(e, De), De;
    }
    function rr(e, r, n) {
      return ve(e, !1);
    }
    function tr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, tr(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case j:
          return L("Suspense");
        case y:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return rr(e.render);
          case p:
            return W(e.type, r, n);
          case g: {
            var i = e, c = i._payload, d = i._init;
            try {
              return W(d(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ge = {}, _e = O.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, n = W(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    function ar(e, r, n, i, c) {
      {
        var d = Function.call.bind(Y);
        for (var l in e)
          if (d(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var w = Error((i || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              s = e[l](r, l, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              s = b;
            }
            s && !(s instanceof Error) && (B(c), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, l, typeof s), B(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, B(c), _("Failed %s type: %s", n, s.message), B(null));
          }
      }
    }
    var nr = Array.isArray;
    function H(e) {
      return nr(e);
    }
    function or(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ir(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Se(e) {
      if (ir(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(e)), we(e);
    }
    var G = O.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, ke, Z;
    Z = {};
    function lr(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function fr(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      if (typeof e.ref == "string" && G.current && r && G.current.stateNode !== r) {
        var n = E(G.current.type);
        Z[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(G.current.type), e.ref), Z[n] = !0);
      }
    }
    function dr(e, r) {
      {
        var n = function() {
          Te || (Te = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var n = function() {
          ke || (ke = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, n, i, c, d, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: l,
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
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function br(e, r, n, i, c) {
      {
        var d, l = {}, s = null, w = null;
        n !== void 0 && (Se(n), s = "" + n), fr(r) && (Se(r.key), s = "" + r.key), lr(r) && (w = r.ref, cr(r, c));
        for (d in r)
          Y.call(r, d) && !sr.hasOwnProperty(d) && (l[d] = r[d]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (d in b)
            l[d] === void 0 && (l[d] = b[d]);
        }
        if (s || w) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && dr(l, h), w && ur(l, h);
        }
        return pr(e, s, w, c, i, G.current, l);
      }
    }
    var X = O.ReactCurrentOwner, je = O.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, n = W(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Me() {
      {
        if (X.current) {
          var e = E(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Re = {};
    function hr(e) {
      {
        var r = Me();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = hr(r);
        if (Re[n])
          return;
        Re[n] = !0;
        var i = "";
        e && e._owner && e._owner !== X.current && (i = " It was passed a child from " + E(e._owner.type) + "."), z(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), z(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            ee(i) && Ee(i, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = F(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), l; !(l = d.next()).done; )
              ee(l.value) && Ee(l.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          n = r.propTypes;
        else
          return;
        if (n) {
          var i = E(r);
          ar(n, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = E(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var i = r[n];
          if (i !== "children" && i !== "key") {
            z(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Oe(e, r, n, i, c, d) {
      {
        var l = He(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = mr(c);
          w ? s += w : s += Me();
          var b;
          e === null ? b = "null" : H(e) ? b = "array" : e !== void 0 && e.$$typeof === t ? (b = "<" + (E(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, s);
        }
        var h = br(e, r, n, c, d);
        if (h == null)
          return h;
        if (l) {
          var T = r.children;
          if (T !== void 0)
            if (i)
              if (H(T)) {
                for (var N = 0; N < T.length; N++)
                  Ce(T[N], e);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(T, e);
        }
        return e === f ? xr(h) : yr(h), h;
      }
    }
    function vr(e, r, n) {
      return Oe(e, r, n, !0);
    }
    function gr(e, r, n) {
      return Oe(e, r, n, !1);
    }
    var _r = gr, wr = vr;
    $e.Fragment = f, $e.jsx = _r, $e.jsxs = wr;
  }()), $e;
}
process.env.NODE_ENV === "production" ? Rr.exports = jt() : Rr.exports = Mt();
var M = Rr.exports;
class Rt {
  constructor() {
    A(this, "date");
    A(this, "firstDayMonth");
    A(this, "lastDateMonth");
    A(this, "year");
    A(this, "month");
    A(this, "days");
    this.date = null, this.year = null, this.month = null, this.days = null, this.firstDayMonth = null, this.lastDateMonth = null;
  }
  initCalendar(t) {
    this.getDate(t), this.getFullYear(), this.getMonth(), this.getFirstDayMonth(), this.getLastDateMonth(), this.generateDays();
  }
  generateDays() {
    const t = [];
    if (this.date === null || this.firstDayMonth === null || this.lastDateMonth === null)
      throw new Error("Date not found");
    for (let o = this.firstDayMonth; o > 0; o--)
      t.push({
        status: "inactive",
        value: ""
      });
    for (let o = 1; o <= this.lastDateMonth; o++) {
      const f = o === this.date.getDate() && this.month === (/* @__PURE__ */ new Date()).getMonth() && this.year === (/* @__PURE__ */ new Date()).getFullYear();
      t.push({
        status: f ? "active" : "normal",
        value: String(o)
      });
    }
    this.days = t;
  }
  getDate(t) {
    this.date = t || /* @__PURE__ */ new Date();
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
var Et = Object.defineProperty, Ct = Object.getOwnPropertyDescriptor, le = (a, t, o, f) => {
  for (var u = f > 1 ? void 0 : f ? Ct(t, o) : t, v = a.length - 1, x; v >= 0; v--)
    (x = a[v]) && (u = (f ? x(t, o, u) : x(u)) || u);
  return f && u && Et(t, o, u), u;
};
class ae {
  constructor() {
    A(this, "calendar", null);
    A(this, "year", null);
    A(this, "month", null);
    A(this, "calendarRepository", new Rt());
    Wr(this);
  }
  generateCalendar(t) {
    this.calendarRepository.initCalendar(t || null), this.calendar = this.calendarRepository.days, this.year = this.calendarRepository.year, this.month = this.calendarRepository.month;
  }
  changeCalendarByYear() {
    if (!this.month && this.month !== 0 || !this.year)
      return;
    const t = new Date(this.year, this.month);
    this.generateCalendar(t);
  }
  changeCalendarByMonth(t) {
    if (!this.year)
      return;
    const o = new Date(this.year, t);
    this.generateCalendar(o);
  }
  increaseYear() {
    this.year && (this.year += 1, this.changeCalendarByYear());
  }
  decreaseYear() {
    this.year && (this.year -= 1, this.changeCalendarByYear());
  }
}
le([
  Yr
], ae.prototype, "calendar", 2);
le([
  se
], ae.prototype, "generateCalendar", 1);
le([
  se
], ae.prototype, "changeCalendarByYear", 1);
le([
  se
], ae.prototype, "changeCalendarByMonth", 1);
le([
  se
], ae.prototype, "increaseYear", 1);
le([
  se
], ae.prototype, "decreaseYear", 1);
const qr = new ae(), Ur = Lr(qr);
(function() {
  try {
    if (typeof document < "u") {
      var a = document.createElement("style");
      a.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pg4yx_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pg4yx_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._DSText_pg4yx_96{font:400 11px/13px MSSansSerifMedium,sans-serif;color:var(--text-color)}')), document.head.appendChild(a);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var Er = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Ot() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    var a = oe, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), S = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), P = Symbol.iterator, $ = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[$];
      return typeof r == "function" ? r : null;
    }
    var O = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          n[i - 1] = arguments[i];
        Ye("error", e, n);
      }
    }
    function Ye(e, r, n) {
      {
        var i = O.ReactDebugCurrentFrame, c = i.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var d = n.map(function(l) {
          return String(l);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Be = !1, qe = !1, Ue = !1, Ke = !1, Je = !1, fe;
    fe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === v || Je || e === u || e === j || e === y || Ke || e === R || Be || qe || Ue || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === p || e.$$typeof === x || e.$$typeof === S || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Ze(e, r, n) {
      var i = e.displayName;
      if (i)
        return i;
      var c = r.displayName || r.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case o:
          return "Portal";
        case v:
          return "Profiler";
        case u:
          return "StrictMode";
        case j:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return ce(r) + ".Consumer";
          case x:
            var n = e;
            return ce(n._context) + ".Provider";
          case m:
            return Ze(e, e.render, "ForwardRef");
          case p:
            var i = e.displayName || null;
            return i !== null ? i : E(e.type) || "Memo";
          case g: {
            var c = e, d = c._payload, l = c._init;
            try {
              return E(l(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, de, ue, pe, be, me, he, ye;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Xe() {
      {
        if (I === 0) {
          de = console.log, ue = console.info, pe = console.warn, be = console.error, me = console.group, he = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
    function Qe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: de
            }),
            info: D({}, e, {
              value: ue
            }),
            warn: D({}, e, {
              value: pe
            }),
            error: D({}, e, {
              value: be
            }),
            group: D({}, e, {
              value: me
            }),
            groupCollapsed: D({}, e, {
              value: he
            }),
            groupEnd: D({}, e, {
              value: ye
            })
          });
        }
        I < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = O.ReactCurrentDispatcher, K;
    function L(e, r, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (c) {
            var i = c.stack.trim().match(/\n( *(at )?)/);
            K = i && i[1] || "";
          }
        return `
` + K + e;
      }
    }
    var J = !1, V;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      V = new er();
    }
    function ve(e, r) {
      if (!e || J)
        return "";
      {
        var n = V.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      J = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = U.current, U.current = null, Xe();
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
            } catch (C) {
              i = C;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (C) {
              i = C;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            i = C;
          }
          e();
        }
      } catch (C) {
        if (C && i && typeof C.stack == "string") {
          for (var s = C.stack.split(`
`), w = i.stack.split(`
`), b = s.length - 1, h = w.length - 1; b >= 1 && h >= 0 && s[b] !== w[h]; )
            h--;
          for (; b >= 1 && h >= 0; b--, h--)
            if (s[b] !== w[h]) {
              if (b !== 1 || h !== 1)
                do
                  if (b--, h--, h < 0 || s[b] !== w[h]) {
                    var T = `
` + s[b].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, T), T;
                  }
                while (b >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        J = !1, U.current = d, Qe(), Error.prepareStackTrace = c;
      }
      var N = e ? e.displayName || e.name : "", De = N ? L(N) : "";
      return typeof e == "function" && V.set(e, De), De;
    }
    function rr(e, r, n) {
      return ve(e, !1);
    }
    function tr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, tr(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case j:
          return L("Suspense");
        case y:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return rr(e.render);
          case p:
            return W(e.type, r, n);
          case g: {
            var i = e, c = i._payload, d = i._init;
            try {
              return W(d(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ge = {}, _e = O.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, n = W(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    function ar(e, r, n, i, c) {
      {
        var d = Function.call.bind(Y);
        for (var l in e)
          if (d(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var w = Error((i || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              s = e[l](r, l, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              s = b;
            }
            s && !(s instanceof Error) && (B(c), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, l, typeof s), B(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, B(c), _("Failed %s type: %s", n, s.message), B(null));
          }
      }
    }
    var nr = Array.isArray;
    function H(e) {
      return nr(e);
    }
    function or(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ir(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Se(e) {
      if (ir(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(e)), we(e);
    }
    var G = O.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, ke, Z;
    Z = {};
    function lr(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function fr(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      if (typeof e.ref == "string" && G.current && r && G.current.stateNode !== r) {
        var n = E(G.current.type);
        Z[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(G.current.type), e.ref), Z[n] = !0);
      }
    }
    function dr(e, r) {
      {
        var n = function() {
          Te || (Te = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var n = function() {
          ke || (ke = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, n, i, c, d, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: l,
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
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function br(e, r, n, i, c) {
      {
        var d, l = {}, s = null, w = null;
        n !== void 0 && (Se(n), s = "" + n), fr(r) && (Se(r.key), s = "" + r.key), lr(r) && (w = r.ref, cr(r, c));
        for (d in r)
          Y.call(r, d) && !sr.hasOwnProperty(d) && (l[d] = r[d]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (d in b)
            l[d] === void 0 && (l[d] = b[d]);
        }
        if (s || w) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && dr(l, h), w && ur(l, h);
        }
        return pr(e, s, w, c, i, G.current, l);
      }
    }
    var X = O.ReactCurrentOwner, je = O.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, n = W(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Me() {
      {
        if (X.current) {
          var e = E(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Re = {};
    function hr(e) {
      {
        var r = Me();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = hr(r);
        if (Re[n])
          return;
        Re[n] = !0;
        var i = "";
        e && e._owner && e._owner !== X.current && (i = " It was passed a child from " + E(e._owner.type) + "."), z(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), z(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            ee(i) && Ee(i, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = F(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), l; !(l = d.next()).done; )
              ee(l.value) && Ee(l.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          n = r.propTypes;
        else
          return;
        if (n) {
          var i = E(r);
          ar(n, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = E(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var i = r[n];
          if (i !== "children" && i !== "key") {
            z(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Oe(e, r, n, i, c, d) {
      {
        var l = He(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = mr(c);
          w ? s += w : s += Me();
          var b;
          e === null ? b = "null" : H(e) ? b = "array" : e !== void 0 && e.$$typeof === t ? (b = "<" + (E(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, s);
        }
        var h = br(e, r, n, c, d);
        if (h == null)
          return h;
        if (l) {
          var T = r.children;
          if (T !== void 0)
            if (i)
              if (H(T)) {
                for (var N = 0; N < T.length; N++)
                  Ce(T[N], e);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(T, e);
        }
        return e === f ? xr(h) : yr(h), h;
      }
    }
    function vr(e, r, n) {
      return Oe(e, r, n, !0);
    }
    function gr(e, r, n) {
      return Oe(e, r, n, !1);
    }
    var _r = gr, wr = vr;
    Le.Fragment = f, Le.jsx = _r, Le.jsxs = wr;
  }()), Le;
}
var ze = {};
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
function Dt() {
  if (Nr)
    return ze;
  Nr = 1;
  var a = oe, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, u = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(S, m, j) {
    var y, p = {}, g = null, R = null;
    j !== void 0 && (g = "" + j), m.key !== void 0 && (g = "" + m.key), m.ref !== void 0 && (R = m.ref);
    for (y in m)
      f.call(m, y) && !v.hasOwnProperty(y) && (p[y] = m[y]);
    if (S && S.defaultProps)
      for (y in m = S.defaultProps, m)
        p[y] === void 0 && (p[y] = m[y]);
    return { $$typeof: t, type: S, key: g, ref: R, props: p, _owner: u.current };
  }
  return ze.Fragment = o, ze.jsx = x, ze.jsxs = x, ze;
}
process.env.NODE_ENV === "production" ? Er.exports = Dt() : Er.exports = Ot();
var k = Er.exports;
const kr = {
  "theme-light": "_theme-light_qp7ji_16",
  "theme-dark": "_theme-dark_qp7ji_36",
  "ds-button-arrow": "_ds-button-arrow_qp7ji_96",
  "arrow-bottom": "_arrow-bottom_qp7ji_124",
  "arrow-top": "_arrow-top_qp7ji_128",
  "size-small": "_size-small_qp7ji_132",
  "size-medium": "_size-medium_qp7ji_137"
};
function Ar({
  ariaLabel: a,
  className: t = "",
  direction: o,
  disabled: f,
  id: u,
  onClick: v,
  size: x
}) {
  return /* @__PURE__ */ k.jsx(
    "button",
    {
      "aria-label": a,
      className: `
				${kr["ds-button-arrow"]}
				${kr[`arrow-${o}`]}
				${kr[`size-${x}`]}
				${t}
			`,
      "data-testid": `ds-button-arrow-${u}-${o}`,
      disabled: f,
      type: "button",
      onClick: v
    }
  );
}
const Pt = "_frame_hpida_96", $t = "_title_hpida_104", Fr = {
  "theme-light": "_theme-light_hpida_16",
  "theme-dark": "_theme-dark_hpida_36",
  frame: Pt,
  title: $t
};
function Kr({
  children: a,
  className: t = "",
  id: o,
  title: f
}) {
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: `${Fr.frame} ${t}`,
      "data-testid": `ds-frame-${o}`,
      children: [
        f && /* @__PURE__ */ k.jsx(
          Zt,
          {
            className: Fr.title,
            text: f,
            id: `frame-${o}`
          }
        ),
        a
      ]
    }
  );
}
function zt() {
  return /* @__PURE__ */ k.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", children: [
    /* @__PURE__ */ k.jsx(
      "path",
      {
        fill: "#DFDFDF",
        fillRule: "evenodd",
        d: "M15 0H0v16h1V1h14V0z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ k.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M2 1H1v14h1V2h12V1H2z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ k.jsx(
      "path",
      {
        fill: "#000",
        fillRule: "evenodd",
        d: "M16 17H0v-1h15V0h1v17z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ k.jsx(
      "path",
      {
        fill: "gray",
        fillRule: "evenodd",
        d: "M15 1h-1v14H1v1h14V1z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ k.jsx("path", { fill: "silver", d: "M2 2h12v13H2z" }),
    /* @__PURE__ */ k.jsx(
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
const Nt = {
  "select-button": /* @__PURE__ */ k.jsx(zt, {})
};
function At({
  className: a = "",
  name: t
}) {
  return /* @__PURE__ */ k.jsx("span", { className: a, children: Nt[t] });
}
const Ft = "_input_e0ixd_111", It = "_label_e0ixd_112", jr = {
  "theme-light": "_theme-light_e0ixd_16",
  "theme-dark": "_theme-dark_e0ixd_36",
  "wrapper-horizontal": "_wrapper-horizontal_e0ixd_96",
  "wrapper-vertical": "_wrapper-vertical_e0ixd_102",
  input: Ft,
  label: It
};
function Gt({ initialValue: a, onChange: t }) {
  const [o, f] = Cr(a);
  return ne(() => {
    f(a);
  }, [a, f]), { value: o, handleInputChange: (u) => {
    const v = u.target.value;
    f(v), t && t(v);
  } };
}
function Lt({
  className: a = "",
  type: t = "text",
  id: o,
  disabled: f = !1,
  readonly: u = !1,
  initialValue: v = "",
  labelName: x,
  wrapperLayout: S = "vertical",
  min: m,
  max: j,
  onChange: y
}) {
  const { value: p, handleInputChange: g } = Gt({ initialValue: v, onChange: y }), R = `ds-input-${o}`;
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: `${jr[`wrapper-${S}`]} ${a}`,
      "data-testid": R,
      children: [
        x && /* @__PURE__ */ k.jsx(
          "label",
          {
            className: jr.label,
            "data-testid": `ds-input-label-${o}`,
            htmlFor: R,
            children: x
          }
        ),
        /* @__PURE__ */ k.jsx(
          "input",
          {
            id: R,
            className: jr.input,
            "data-testid": `ds-input-input-${o}`,
            type: t,
            disabled: f,
            readOnly: u,
            value: p,
            min: m ?? void 0,
            max: j ?? void 0,
            name: R,
            onChange: g
          }
        )
      ]
    }
  );
}
function Vt(a) {
  const [t, o] = Cr(a);
  return {
    value: t,
    handleChange: (f) => {
      o(f.target.value);
    }
  };
}
const Wt = "_wrapper_1id5f_96", Yt = "_label_1id5f_100", Bt = "_select_1id5f_105", qt = "_arrow_1id5f_115", Ne = {
  "theme-light": "_theme-light_1id5f_16",
  "theme-dark": "_theme-dark_1id5f_36",
  wrapper: Wt,
  label: Yt,
  select: Bt,
  arrow: qt
};
function Jr({
  className: a = "",
  id: t,
  required: o = !1,
  disabled: f = !1,
  modelValue: u,
  options: v,
  labelName: x,
  onSelect: S
}) {
  const { value: m, handleChange: j } = Vt(u), y = (p) => {
    j(p), S(p);
  };
  return /* @__PURE__ */ k.jsxs("div", { className: `${Ne.wrapper} ${a}`, children: [
    x && /* @__PURE__ */ k.jsx(
      "label",
      {
        className: Ne.label,
        "data-testid": `ds-select-label-${t}`,
        htmlFor: t,
        children: x
      }
    ),
    /* @__PURE__ */ k.jsx(
      "select",
      {
        className: Ne.select,
        "data-testid": `ds-select-select-${t}`,
        disabled: f,
        id: t,
        name: t,
        onChange: y,
        required: o,
        value: m,
        children: v.map((p, g) => /* @__PURE__ */ k.jsx(
          "option",
          {
            className: Ne.option,
            "data-testid": `ds-select-option-${t}-${g}`,
            value: p.value,
            children: p.name
          },
          `${t}-${p.value}`
        ))
      }
    ),
    /* @__PURE__ */ k.jsx(
      At,
      {
        className: Ne.arrow,
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
function Ut({
  modelValue: a,
  onIncrease: t,
  onDecrease: o
}) {
  const [f, u] = Cr(a);
  return ne(() => {
    u(a);
  }, [a]), { value: f, handleIncrease: () => {
    t && t();
  }, handleDecrease: () => {
    o && o();
  } };
}
function Kt({
  className: a = "",
  id: t,
  modelValue: o,
  disabled: f = !1,
  onIncrease: u,
  onDecrease: v
}) {
  const {
    value: x,
    handleIncrease: S,
    handleDecrease: m
  } = Ut({ modelValue: o, onIncrease: u, onDecrease: v });
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: `
        ${Ir["ds-stepper"]}
        ${f ? Ir["state-disabled"] : ""}
        ${a}
      `,
      children: [
        /* @__PURE__ */ k.jsx(
          Lt,
          {
            id: `stepper-${t}`,
            initialValue: x,
            readonly: !0
          }
        ),
        /* @__PURE__ */ k.jsx(
          Ar,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: f,
            id: t,
            size: "small",
            onClick: S
          }
        ),
        /* @__PURE__ */ k.jsx(
          Ar,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: f,
            id: t,
            size: "small",
            onClick: m
          }
        )
      ]
    }
  );
}
const Jt = "_DSText_pg4yx_96", Ht = {
  "theme-light": "_theme-light_pg4yx_16",
  "theme-dark": "_theme-dark_pg4yx_36",
  DSText: Jt
};
function Zt({
  className: a = "",
  id: t,
  text: o
}) {
  return /* @__PURE__ */ k.jsx(
    "p",
    {
      className: `${Ht.DSText} ${a}`,
      "data-testid": `ds-text-${t}`,
      children: o
    }
  );
}
function We() {
  return {
    calendarService: Vr(Ur)
  };
}
function Xt() {
  const { t: a } = ie(), { calendarService: t } = We();
  return ne(() => {
    t.generateCalendar();
  }, []), {
    title: Ae(
      () => ({
        title: a("ma-calendar.wrapper.title")
      }),
      [a]
    ).title
  };
}
function Hr() {
  const { calendarService: a } = We(), { t } = ie(), o = Ae(
    () => ({
      weekDays: [
        t("ma-calendar.days.sunday"),
        t("ma-calendar.days.monday"),
        t("ma-calendar.days.tuesday"),
        t("ma-calendar.days.wednesday"),
        t("ma-calendar.days.thursday"),
        t("ma-calendar.days.friday"),
        t("ma-calendar.days.saturday")
      ]
    }),
    [t]
  );
  return {
    monthDays: a.calendar,
    weekDays: o.weekDays
  };
}
const Qt = "_day_1v33v_104", Gr = {
  "theme-light": "_theme-light_1v33v_16",
  "theme-dark": "_theme-dark_1v33v_36",
  "week-days": "_week-days_1v33v_96",
  day: Qt
}, ea = te(() => {
  const { weekDays: a } = Hr();
  return /* @__PURE__ */ M.jsx("div", { className: Gr["week-days"], children: a.map((t, o) => /* @__PURE__ */ M.jsx(
    "span",
    {
      className: Gr.day,
      "data-testid": `calendar-week-days-day-${o}`,
      children: t
    },
    o
  )) });
}), ra = "_day_12et3_102", Ve = {
  "theme-light": "_theme-light_12et3_16",
  "theme-dark": "_theme-dark_12et3_36",
  "month-days": "_month-days_12et3_96",
  day: ra,
  "day-active": "_day-active_12et3_107"
}, ta = te(() => {
  const { monthDays: a } = Hr();
  return a && /* @__PURE__ */ M.jsx("div", { className: Ve["month-days"], "data-testid": "calendar-view-days", children: a.map((t, o) => t.value === "" ? /* @__PURE__ */ M.jsx(
    "span",
    {
      className: Ve.day,
      "data-testid": `calendar-month-days-empty-${o}`
    },
    o
  ) : /* @__PURE__ */ M.jsx(
    "button",
    {
      className: `
                        ${Ve.day}
                        ${t.status === "active" ? Ve["day-active"] : ""}
                    `,
      "data-testid": `calendar-month-days-day-${t.value}`,
      type: "button",
      children: t.value
    },
    o
  )) });
}), aa = "_days_1xeii_96", na = {
  "theme-light": "_theme-light_1xeii_16",
  "theme-dark": "_theme-dark_1xeii_36",
  days: aa
}, oa = () => /* @__PURE__ */ M.jsxs("div", { className: na.days, children: [
  /* @__PURE__ */ M.jsx(ea, {}),
  /* @__PURE__ */ M.jsx(ta, {})
] });
function ia() {
  const { t: a } = ie(), { calendarService: t } = We(), o = (u) => {
    t.changeCalendarByMonth(Number(u.currentTarget.value));
  }, f = Ae(
    () => ({
      months: [
        {
          value: 0,
          name: a("ma-calendar.month-switcher.january")
        },
        {
          value: 1,
          name: a("ma-calendar.month-switcher.february")
        },
        {
          value: 2,
          name: a("ma-calendar.month-switcher.march")
        },
        {
          value: 3,
          name: a("ma-calendar.month-switcher.april")
        },
        {
          value: 4,
          name: a("ma-calendar.month-switcher.may")
        },
        {
          value: 5,
          name: a("ma-calendar.month-switcher.june")
        },
        {
          value: 6,
          name: a("ma-calendar.month-switcher.july")
        },
        {
          value: 7,
          name: a("ma-calendar.month-switcher.august")
        },
        {
          value: 8,
          name: a("ma-calendar.month-switcher.september")
        },
        {
          value: 9,
          name: a("ma-calendar.month-switcher.october")
        },
        {
          value: 10,
          name: a("ma-calendar.month-switcher.november")
        },
        {
          value: 11,
          name: a("ma-calendar.month-switcher.december")
        }
      ]
    }),
    [a]
  );
  return {
    handleSelectChange: o,
    month: t.month,
    months: f.months
  };
}
const sa = te(() => {
  const { handleSelectChange: a, month: t, months: o } = ia();
  return t !== null && /* @__PURE__ */ M.jsx(
    Jr,
    {
      id: "month-switcher",
      modelValue: t,
      options: o,
      onSelect: a
    }
  );
});
function la() {
  const { calendarService: a } = We();
  return {
    decreaseYear: () => {
      a.decreaseYear();
    },
    increaseYear: () => {
      a.increaseYear();
    },
    year: a.year
  };
}
const fa = te(() => {
  const { decreaseYear: a, increaseYear: t, year: o } = la();
  return o && /* @__PURE__ */ M.jsx(
    Kt,
    {
      id: "calendar-year",
      modelValue: o,
      onIncrease: t,
      onDecrease: a
    }
  );
}), ca = "_wrapper_s3u64_96", da = {
  "theme-light": "_theme-light_s3u64_16",
  "theme-dark": "_theme-dark_s3u64_36",
  wrapper: ca
};
function ua() {
  const { i18n: a } = ie();
  ne(() => {
    const t = document.documentElement.lang;
    t && a.changeLanguage(t);
  }, []), ne(() => {
    const t = new MutationObserver((o) => {
      o.forEach((f) => {
        f.type === "attributes" && f.attributeName === "lang" && a.changeLanguage(f.target.lang);
      });
    });
    return t.observe(document.documentElement, { attributes: !0 }), () => {
      t.disconnect();
    };
  }, [a]);
}
const pa = te(() => {
  const { title: a } = Xt();
  return ua(), /* @__PURE__ */ M.jsxs(
    Kr,
    {
      className: da.wrapper,
      id: "calculator",
      title: a,
      children: [
        /* @__PURE__ */ M.jsx(sa, {}),
        /* @__PURE__ */ M.jsx(fa, {}),
        /* @__PURE__ */ M.jsx(oa, {})
      ]
    }
  );
}), ba = () => /* @__PURE__ */ M.jsx(Ur.Provider, { value: qr, children: /* @__PURE__ */ M.jsx(pa, {}) });
class ma {
  getTimezones() {
    return [-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
}
var ha = Object.defineProperty, ya = Object.getOwnPropertyDescriptor, Zr = (a, t, o, f) => {
  for (var u = f > 1 ? void 0 : f ? ya(t, o) : t, v = a.length - 1, x; v >= 0; v--)
    (x = a[v]) && (u = (f ? x(t, o, u) : x(u)) || u);
  return f && u && ha(t, o, u), u;
};
class Or {
  constructor() {
    A(this, "timezoneRepository", new ma());
    A(this, "timezonesValuePairs", null);
    Wr(this);
  }
  generateTimezones() {
    const t = this.timezoneRepository.getTimezones();
    this.timezonesValuePairs = this.mapTimezonesToValuePairs(t);
  }
  createI18nKey(t) {
    return `ma-timezone.stepper.${t}`;
  }
  mapTimezonesToValuePairs(t) {
    return t.map((o) => ({
      value: o,
      label: this.createI18nKey(o)
    }));
  }
}
Zr([
  Yr
], Or.prototype, "timezoneRepository", 2);
Zr([
  se
], Or.prototype, "generateTimezones", 1);
const Xr = new Or(), Qr = Lr(Xr);
function et() {
  return {
    timezoneService: Vr(Qr)
  };
}
function xa() {
  const { t: a } = ie(), { timezoneService: t } = et();
  return ne(() => {
    t.generateTimezones();
  }, []), {
    title: Ae(
      () => ({
        title: a("ma-timezone.wrapper.title")
      }),
      [a]
    ).title
  };
}
function va() {
  const { t: a } = ie(), { timezoneService: t } = et();
  return {
    dictionary: Ae(
      () => {
        var f;
        return {
          timezones: (f = t == null ? void 0 : t.timezonesValuePairs) == null ? void 0 : f.map((u) => ({
            value: u.value,
            name: a(u.label)
          }))
        };
      },
      [a, t == null ? void 0 : t.timezonesValuePairs]
    )
  };
}
const ga = te(() => {
  const { dictionary: a } = va();
  return (a == null ? void 0 : a.timezones) && /* @__PURE__ */ M.jsx(
    Jr,
    {
      id: "timezone-switcher",
      modelValue: a.timezones[0].value,
      options: a.timezones,
      onSelect: () => {
      }
    }
  );
}), _a = te(() => {
  const { title: a } = xa();
  return /* @__PURE__ */ M.jsx(
    Kr,
    {
      id: "timezone",
      title: a,
      children: /* @__PURE__ */ M.jsx(ga, {})
    }
  );
}), wa = () => /* @__PURE__ */ M.jsx(Qr.Provider, { value: Xr, children: /* @__PURE__ */ M.jsx(_a, {}) }), Sa = Br(ba);
customElements.define("ma-calendar", Sa);
const Ta = Br(wa);
customElements.define("ma-timezone", Ta);
kt();
//# sourceMappingURL=index.js.map
