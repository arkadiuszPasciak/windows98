(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_wc6ff_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_wc6ff_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_wc6ff_96{display:grid;row-gap:15px;padding:13px 22px 10px;background-color:var(--background-color)}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1hx69_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1hx69_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._screen_1hx69_96{background-color:var(--background-color-white);color:var(--text-color);width:100%;height:20px;padding:5px;text-align:right;box-shadow:var(--border-field);font:400 11px/13px MSSansSerifMedium,sans-serif}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_uzbrq_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_uzbrq_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._keypad_uzbrq_96{display:grid;justify-content:center;grid-template-rows:repeat(3,30px);grid-template-columns:repeat(4,35px);gap:1px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_9arum_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_9arum_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._button_9arum_96{display:flex;justify-content:center;align-items:center;font:400 11px/11px MSSansSerifMedium,sans-serif;border:none;border-radius:0;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);width:35px;height:30px}@media (hover: hover){._button_9arum_96{cursor:pointer}}._button_9arum_96:disabled{pointer-events:none;opacity:.5}._button_9arum_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._primary_9arum_122{color:#00f}._secondary_9arum_126{color:#fe0000}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1v33v_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1v33v_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._week-days_1v33v_96{display:grid;height:20px;grid-template-columns:repeat(7,1fr);background-color:gray;color:var(--text-color-3)}._day_1v33v_104{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_12et3_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_12et3_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._month-days_12et3_96{display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(6,1fr)}._day_12et3_102{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}._day-active_12et3_107{color:#fff;background-color:navy}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1xeii_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1xeii_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._days_1xeii_96{width:160px;height:145px;box-shadow:var(--border-field);padding:2px;text-align:center;background-color:var(--background-color-white)}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_s3u64_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_s3u64_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._wrapper_s3u64_96{display:grid;grid-template-columns:90px 70px;background-color:var(--background-color);gap:10px 0;max-width:180px;width:100%}')),document.head.appendChild(o)}}catch(f){console.error("vite-plugin-css-injected-by-js",f)}})();
var Mt = Object.defineProperty;
var Ot = (t, n, c) => n in t ? Mt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: c }) : t[n] = c;
var H = (t, n, c) => (Ot(t, typeof n != "symbol" ? n + "" : n, c), c);
import o, { createContext, useContext, useState, useEffect, useMemo } from "react";
import require$$0 from "react-dom";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { makeAutoObservable, observable, action } from "mobx";
import { observer } from "mobx-react-lite";
var createRoot, m = require$$0;
if (process.env.NODE_ENV === "production")
  createRoot = m.createRoot, m.hydrateRoot;
else {
  var i$2 = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function(t, n) {
    i$2.usingClientEntryPoint = !0;
    try {
      return m.createRoot(t, n);
    } finally {
      i$2.usingClientEntryPoint = !1;
    }
  };
}
var j = Object.defineProperty, x = (t, n, c) => n in t ? j(t, n, { enumerable: !0, configurable: !0, writable: !0, value: c }) : t[n] = c, b = (t, n, c) => (x(t, typeof n != "symbol" ? n + "" : n, c), c);
const C = {
  stringify: (t) => t,
  parse: (t) => t
}, T = {
  stringify: (t) => `${t}`,
  parse: (t) => parseFloat(t)
}, V$1 = {
  stringify: (t) => t ? "true" : "false",
  parse: (t) => /^[ty1-9]/i.test(t)
}, N$1 = {
  stringify: (t) => t.name,
  parse: (t, n) => {
    const c = (() => {
      if (typeof window < "u" && t in window)
        return window[t];
      if (typeof global < "u" && t in global)
        return global[t];
    })();
    return typeof c == "function" ? c.bind(n) : void 0;
  }
}, P = {
  stringify: (t) => JSON.stringify(t),
  parse: (t) => JSON.parse(t)
}, w = {
  string: C,
  number: T,
  boolean: V$1,
  function: N$1,
  json: P
}, A$1 = Symbol.for("r2wc.render"), h = Symbol.for("r2wc.connected"), p = Symbol.for("r2wc.context"), i$1 = Symbol.for("r2wc.props");
function z(t, n, c) {
  var y, S, $;
  n.props || (n.props = t.propTypes ? Object.keys(t.propTypes) : []);
  const D = (Array.isArray(n.props) ? n.props.slice() : Object.keys(n.props)).filter((R) => R !== "container"), W = {}, M = {}, B = {};
  for (const R of D) {
    W[R] = Array.isArray(n.props) ? "string" : n.props[R];
    const F = J(R);
    M[R] = F, B[F] = R;
  }
  class I extends HTMLElement {
    constructor() {
      super(), b(this, y, !0), b(this, S), b(this, $, {}), b(this, "container"), n.shadow ? this.container = this.attachShadow({
        mode: n.shadow
      }) : this.container = this, this[i$1].container = this.container;
      for (const F of D) {
        const q = M[F], re = this.getAttribute(q), ae = W[F], ie = w[ae];
        re && ie != null && ie.parse && (this[i$1][F] = ie.parse(re, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(B);
    }
    connectedCallback() {
      this[h] = !0, this[A$1]();
    }
    disconnectedCallback() {
      this[h] = !1, this[p] && c.unmount(this[p]), delete this[p];
    }
    attributeChangedCallback(F, q, re) {
      const ae = B[F], ie = W[ae], X = w[ie];
      ae in W && X != null && X.parse && (this[i$1][ae] = X.parse(re, this), this[A$1]());
    }
    [(y = h, S = p, $ = i$1, A$1)]() {
      this[h] && (this[p] ? c.update(this[p], this[i$1]) : this[p] = c.mount(
        this.container,
        t,
        this[i$1]
      ));
    }
  }
  for (const R of D) {
    const F = M[R], q = W[R];
    Object.defineProperty(I.prototype, R, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[i$1][R];
      },
      set(re) {
        this[i$1][R] = re;
        const ae = w[q];
        if (ae != null && ae.stringify) {
          const ie = ae.stringify(re);
          this.getAttribute(F) !== ie && this.setAttribute(F, ie);
        }
      }
    });
  }
  return I;
}
function J(t = "") {
  return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function f(t, n, c) {
  const y = createRoot(t), S = o.createElement(n, c);
  return y.render(S), {
    root: y,
    ReactComponent: n
  };
}
function i({ root: t, ReactComponent: n }, c) {
  const y = o.createElement(n, c);
  t.render(y);
}
function a({ root: t }) {
  t.unmount();
}
function s(t, n = {}) {
  return z(t, n, { mount: f, update: i, unmount: a });
}
const calendarEN = {
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
}, timezoneEN = {
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
}, localesMicroAppsEN = {
  ...calendarEN,
  ...timezoneEN
}, calendarPL = {
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
}, timezonePL = {
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
}, localesMicroAppsPL = {
  ...calendarPL,
  ...timezonePL
}, localesReact = {
  en: {
    translation: {
      ...localesMicroAppsEN
    }
  },
  pl: {
    translation: {
      ...localesMicroAppsPL
    }
  }
};
async function i18nInit() {
  await i18next.use(initReactI18next).init({
    resources: localesReact,
    lng: "en",
    fallbackLng: "en"
  });
}
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var t = o, n = Symbol.for("react.element"), c = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(W, M, B) {
    var I, R = {}, F = null, q = null;
    B !== void 0 && (F = "" + B), M.key !== void 0 && (F = "" + M.key), M.ref !== void 0 && (q = M.ref);
    for (I in M)
      y.call(M, I) && !$.hasOwnProperty(I) && (R[I] = M[I]);
    if (W && W.defaultProps)
      for (I in M = W.defaultProps, M)
        R[I] === void 0 && (R[I] = M[I]);
    return { $$typeof: n, type: W, key: F, ref: q, props: R, _owner: S.current };
  }
  return reactJsxRuntime_production_min.Fragment = c, reactJsxRuntime_production_min.jsx = D, reactJsxRuntime_production_min.jsxs = D, reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var t = o, n = Symbol.for("react.element"), c = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), W = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), re = Symbol.iterator, ae = "@@iterator";
    function ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ae];
      return typeof r == "function" ? r : null;
    }
    var X = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(e) {
      {
        for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          l[u - 1] = arguments[u];
        Ze("error", e, l);
      }
    }
    function Ze(e, r, l) {
      {
        var u = X.ReactDebugCurrentFrame, g = u.getStackAddendum();
        g !== "" && (r += "%s", l = l.concat([g]));
        var E = l.map(function(_) {
          return String(_);
        });
        E.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var Xe = !1, Qe = !1, et = !1, tt = !1, rt = !1, we;
    we = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === $ || rt || e === S || e === B || e === I || tt || e === q || Xe || Qe || et || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === R || e.$$typeof === D || e.$$typeof === W || e.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === we || e.getModuleId !== void 0));
    }
    function nt(e, r, l) {
      var u = e.displayName;
      if (u)
        return u;
      var g = r.displayName || r.name || "";
      return g !== "" ? l + "(" + g + ")" : l;
    }
    function Se(e) {
      return e.displayName || "Context";
    }
    function U(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case c:
          return "Portal";
        case $:
          return "Profiler";
        case S:
          return "StrictMode";
        case B:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            var r = e;
            return Se(r) + ".Consumer";
          case D:
            var l = e;
            return Se(l._context) + ".Provider";
          case M:
            return nt(e, e.render, "ForwardRef");
          case R:
            var u = e.displayName || null;
            return u !== null ? u : U(e.type) || "Memo";
          case F: {
            var g = e, E = g._payload, _ = g._init;
            try {
              return U(_(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, se = 0, Ee, Re, je, ke, Me, De, Ne;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function ot() {
      {
        if (se === 0) {
          Ee = console.log, Re = console.info, je = console.warn, ke = console.error, Me = console.group, De = console.groupCollapsed, Ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ze,
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
        se++;
      }
    }
    function it() {
      {
        if (se--, se === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, e, {
              value: Ee
            }),
            info: te({}, e, {
              value: Re
            }),
            warn: te({}, e, {
              value: je
            }),
            error: te({}, e, {
              value: ke
            }),
            group: te({}, e, {
              value: Me
            }),
            groupCollapsed: te({}, e, {
              value: De
            }),
            groupEnd: te({}, e, {
              value: Ne
            })
          });
        }
        se < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = X.ReactCurrentDispatcher, be;
    function ce(e, r, l) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (g) {
            var u = g.stack.trim().match(/\n( *(at )?)/);
            be = u && u[1] || "";
          }
        return `
` + be + e;
      }
    }
    var he = !1, ue;
    {
      var st = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new st();
    }
    function Ae(e, r) {
      if (!e || he)
        return "";
      {
        var l = ue.get(e);
        if (l !== void 0)
          return l;
      }
      var u;
      he = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = me.current, me.current = null, ot();
      try {
        if (r) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (K) {
              u = K;
            }
            Reflect.construct(e, [], _);
          } else {
            try {
              _.call();
            } catch (K) {
              u = K;
            }
            e.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            u = K;
          }
          e();
        }
      } catch (K) {
        if (K && u && typeof K.stack == "string") {
          for (var v = K.stack.split(`
`), G = u.stack.split(`
`), k = v.length - 1, O = G.length - 1; k >= 1 && O >= 0 && v[k] !== G[O]; )
            O--;
          for (; k >= 1 && O >= 0; k--, O--)
            if (v[k] !== G[O]) {
              if (k !== 1 || O !== 1)
                do
                  if (k--, O--, O < 0 || v[k] !== G[O]) {
                    var Y = `
` + v[k].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && ue.set(e, Y), Y;
                  }
                while (k >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        he = !1, me.current = E, it(), Error.prepareStackTrace = g;
      }
      var oe = e ? e.displayName || e.name : "", He = oe ? ce(oe) : "";
      return typeof e == "function" && ue.set(e, He), He;
    }
    function lt(e, r, l) {
      return Ae(e, !1);
    }
    function ct(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function fe(e, r, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, ct(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case B:
          return ce("Suspense");
        case I:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return lt(e.render);
          case R:
            return fe(e.type, r, l);
          case F: {
            var u = e, g = u._payload, E = u._init;
            try {
              return fe(E(g), r, l);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Ie = {}, Fe = X.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, l = fe(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(l);
      } else
        Fe.setExtraStackFrame(null);
    }
    function ut(e, r, l, u, g) {
      {
        var E = Function.call.bind(de);
        for (var _ in e)
          if (E(e, _)) {
            var v = void 0;
            try {
              if (typeof e[_] != "function") {
                var G = Error((u || "React class") + ": " + l + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              v = e[_](r, _, u, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              v = k;
            }
            v && !(v instanceof Error) && (pe(g), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", l, _, typeof v), pe(null)), v instanceof Error && !(v.message in Ie) && (Ie[v.message] = !0, pe(g), L("Failed %s type: %s", l, v.message), pe(null));
          }
      }
    }
    var ft = Array.isArray;
    function xe(e) {
      return ft(e);
    }
    function dt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, l = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function pt(e) {
      try {
        return Ve(e), !1;
      } catch {
        return !0;
      }
    }
    function Ve(e) {
      return "" + e;
    }
    function Le(e) {
      if (pt(e))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(e)), Ve(e);
    }
    var le = X.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, We, ye;
    ye = {};
    function bt(e) {
      if (de.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ht(e) {
      if (de.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xt(e, r) {
      if (typeof e.ref == "string" && le.current && r && le.current.stateNode !== r) {
        var l = U(le.current.type);
        ye[l] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(le.current.type), e.ref), ye[l] = !0);
      }
    }
    function yt(e, r) {
      {
        var l = function() {
          Ge || (Ge = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function vt(e, r) {
      {
        var l = function() {
          We || (We = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var _t = function(e, r, l, u, g, E, _) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: l,
        props: _,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function gt(e, r, l, u, g) {
      {
        var E, _ = {}, v = null, G = null;
        l !== void 0 && (Le(l), v = "" + l), ht(r) && (Le(r.key), v = "" + r.key), bt(r) && (G = r.ref, xt(r, g));
        for (E in r)
          de.call(r, E) && !mt.hasOwnProperty(E) && (_[E] = r[E]);
        if (e && e.defaultProps) {
          var k = e.defaultProps;
          for (E in k)
            _[E] === void 0 && (_[E] = k[E]);
        }
        if (v || G) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && yt(_, O), G && vt(_, O);
        }
        return _t(e, v, G, g, u, le.current, _);
      }
    }
    var ve = X.ReactCurrentOwner, Ye = X.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, l = fe(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(l);
      } else
        Ye.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Be() {
      {
        if (ve.current) {
          var e = U(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wt(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + r + ":" + l + ".";
        }
        return "";
      }
    }
    var qe = {};
    function St(e) {
      {
        var r = Be();
        if (!r) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (r = `

Check the top-level render call using <` + l + ">.");
        }
        return r;
      }
    }
    function Ue(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = St(r);
        if (qe[l])
          return;
        qe[l] = !0;
        var u = "";
        e && e._owner && e._owner !== ve.current && (u = " It was passed a child from " + U(e._owner.type) + "."), ne(e), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, u), ne(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var l = 0; l < e.length; l++) {
            var u = e[l];
            ge(u) && Ue(u, r);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = ie(e);
          if (typeof g == "function" && g !== e.entries)
            for (var E = g.call(e), _; !(_ = E.next()).done; )
              ge(_.value) && Ue(_.value, r);
        }
      }
    }
    function Et(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var l;
        if (typeof r == "function")
          l = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          l = r.propTypes;
        else
          return;
        if (l) {
          var u = U(r);
          ut(l, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !_e) {
          _e = !0;
          var g = U(r);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(e) {
      {
        for (var r = Object.keys(e.props), l = 0; l < r.length; l++) {
          var u = r[l];
          if (u !== "children" && u !== "key") {
            ne(e), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), L("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    function Ke(e, r, l, u, g, E) {
      {
        var _ = at(e);
        if (!_) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = wt(g);
          G ? v += G : v += Be();
          var k;
          e === null ? k = "null" : xe(e) ? k = "array" : e !== void 0 && e.$$typeof === n ? (k = "<" + (U(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : k = typeof e, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, v);
        }
        var O = gt(e, r, l, g, E);
        if (O == null)
          return O;
        if (_) {
          var Y = r.children;
          if (Y !== void 0)
            if (u)
              if (xe(Y)) {
                for (var oe = 0; oe < Y.length; oe++)
                  Je(Y[oe], e);
                Object.freeze && Object.freeze(Y);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(Y, e);
        }
        return e === y ? Tt(O) : Et(O), O;
      }
    }
    function Rt(e, r, l) {
      return Ke(e, r, l, !0);
    }
    function Ct(e, r, l) {
      return Ke(e, r, l, !1);
    }
    var jt = Ct, kt = Rt;
    reactJsxRuntime_development.Fragment = y, reactJsxRuntime_development.jsx = jt, reactJsxRuntime_development.jsxs = kt;
  }()), reactJsxRuntime_development;
}
process.env.NODE_ENV === "production" ? jsxRuntime.exports = requireReactJsxRuntime_production_min() : jsxRuntime.exports = requireReactJsxRuntime_development();
var jsxRuntimeExports = jsxRuntime.exports, ECalculatorDirect = /* @__PURE__ */ ((t) => (t.FIRST = "first", t.LAST = "last", t))(ECalculatorDirect || {}), ECalculatorNumber = /* @__PURE__ */ ((t) => (t[t.ZERO = 0] = "ZERO", t[t.ONE = 1] = "ONE", t[t.TWO = 2] = "TWO", t[t.THREE = 3] = "THREE", t[t.FOUR = 4] = "FOUR", t[t.FIVE = 5] = "FIVE", t[t.SIX = 6] = "SIX", t[t.SEVEN = 7] = "SEVEN", t[t.EIGHT = 8] = "EIGHT", t[t.NINE = 9] = "NINE", t))(ECalculatorNumber || {}), ECalculatorSymbol = /* @__PURE__ */ ((t) => (t.ADD = "+", t.DIVIDE = "/", t.DOT = ".", t.MINUS = "-", t.MULTIPLY = "*", t.RESULT = "=", t))(ECalculatorSymbol || {});
class CalculatorService {
  isValueEqual(t, n, c) {
    switch (c) {
      case ECalculatorDirect.FIRST:
        return t.slice(0, n.length) === n;
      case ECalculatorDirect.LAST:
        return t.slice(-1) === n;
      default:
        return !1;
    }
  }
  isDotExist(t) {
    return t ? !!t.split("").find((y) => y === ".") : !1;
  }
  isMathematicalSignLast(t) {
    if (!t)
      return !1;
    switch (t.slice(-1)) {
      case ECalculatorSymbol.ADD:
      case ECalculatorSymbol.DIVIDE:
      case ECalculatorSymbol.MINUS:
      case ECalculatorSymbol.MULTIPLY:
        return !0;
      default:
        return !1;
    }
  }
  summResult(value) {
    return !value || !this.isMathematicalOperation(value) ? "ERROR" : String(eval(value));
  }
  isMathematicalOperation(t) {
    return t ? !!/(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/.test(t) : !1;
  }
}
var __defProp$2 = Object.defineProperty, __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor, __decorateClass$2 = (t, n, c, y) => {
  for (var S = y > 1 ? void 0 : y ? __getOwnPropDesc$2(n, c) : n, $ = t.length - 1, D; $ >= 0; $--)
    (D = t[$]) && (S = (y ? D(n, c, S) : D(S)) || S);
  return y && S && __defProp$2(n, c, S), S;
};
class CalculatorDomain {
  constructor() {
    H(this, "value", "0");
    H(this, "calculatorService", new CalculatorService());
    H(this, "addNumber", (n) => {
      console.log(this.value), this.calculatorService.isValueEqual(this.value, "0", ECalculatorDirect.FIRST) && !this.calculatorService.isValueEqual(this.value, "0.", ECalculatorDirect.FIRST) && this.value.length === 1 ? this.value = String(n) : this.value += String(n);
    });
    H(this, "addDot", () => {
      this.calculatorService.isDotExist(this.value) || this.calculatorService.isMathematicalSignLast(this.value) || this.calculatorService.isValueEqual(this.value, ".", ECalculatorDirect.LAST) || (this.value += ".");
    });
    H(this, "addSymbol", (n) => {
      this.value === "0." || this.calculatorService.isMathematicalSignLast(this.value) || (this.value += n);
    });
    H(this, "summResult", () => {
      this.value = this.calculatorService.summResult(this.value);
    });
    makeAutoObservable(this);
  }
}
__decorateClass$2([
  observable
], CalculatorDomain.prototype, "value", 2);
__decorateClass$2([
  action
], CalculatorDomain.prototype, "addNumber", 2);
__decorateClass$2([
  action
], CalculatorDomain.prototype, "addDot", 2);
__decorateClass$2([
  action
], CalculatorDomain.prototype, "addSymbol", 2);
__decorateClass$2([
  action
], CalculatorDomain.prototype, "summResult", 2);
const calculatorDomain = new CalculatorDomain(), CalculatorDomainContext = createContext(calculatorDomain), wrapper$1 = "_wrapper_wc6ff_96", styles$7 = {
  "theme-light": "_theme-light_wc6ff_16",
  "theme-dark": "_theme-dark_wc6ff_36",
  wrapper: wrapper$1
};
function useCalculator() {
  return {
    calculatorDomain: useContext(CalculatorDomainContext)
  };
}
function useScreen() {
  const { calculatorDomain: t } = useCalculator();
  return {
    value: t.value
  };
}
const screen = "_screen_1hx69_96", styles$6 = {
  "theme-light": "_theme-light_1hx69_16",
  "theme-dark": "_theme-dark_1hx69_36",
  screen
}, Screen = observer(() => {
  const { value: t } = useScreen();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: styles$6.screen,
      id: "ma-calculator-screen",
      children: t ?? "ERROR"
    }
  );
}), keypad = "_keypad_uzbrq_96", styles$5 = {
  "theme-light": "_theme-light_uzbrq_16",
  "theme-dark": "_theme-dark_uzbrq_36",
  keypad
}, button = "_button_9arum_96", primary = "_primary_9arum_122", secondary = "_secondary_9arum_126", styles$4 = {
  "theme-light": "_theme-light_9arum_16",
  "theme-dark": "_theme-dark_9arum_36",
  button,
  primary,
  secondary
}, OperationButton = ({
  id: t,
  onClick: n,
  variant: c = "blue"
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "button",
  {
    className: `${styles$4.button} ${styles$4[c]}`,
    "data-testid": `ma-calculator-operation-button-${t}`,
    onClick: n,
    type: "button",
    children: t
  }
);
function useKeypad() {
  const { calculatorDomain: t } = useCalculator();
  return {
    addDot: t.addDot,
    addNumber: t.addNumber,
    addSymbol: t.addSymbol,
    summResult: t.summResult
  };
}
const Keypad = observer(() => {
  const {
    addDot: t,
    addNumber: n,
    addSymbol: c,
    summResult: y
  } = useKeypad();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: styles$5.keypad,
      "data-testid": "ma-calculator-keypad",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.SEVEN,
            onClick: () => n(ECalculatorNumber.SEVEN),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.EIGHT,
            onClick: () => n(ECalculatorNumber.EIGHT),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.NINE,
            onClick: () => n(ECalculatorNumber.NINE),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.DIVIDE,
            onClick: () => c(ECalculatorSymbol.DIVIDE),
            variant: "secondary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.FOUR,
            onClick: () => n(ECalculatorNumber.FOUR),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.FIVE,
            onClick: () => n(ECalculatorNumber.FIVE),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.SIX,
            onClick: () => n(ECalculatorNumber.SIX),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.MULTIPLY,
            onClick: () => c(ECalculatorSymbol.MULTIPLY),
            variant: "secondary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.ONE,
            onClick: () => n(ECalculatorNumber.ONE),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.TWO,
            onClick: () => n(ECalculatorNumber.TWO),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.THREE,
            onClick: () => n(ECalculatorNumber.THREE),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.MINUS,
            onClick: () => c(ECalculatorSymbol.MINUS),
            variant: "secondary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.ZERO,
            onClick: () => n(ECalculatorNumber.ZERO),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.DOT,
            onClick: t,
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.RESULT,
            onClick: y,
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.ADD,
            onClick: () => c(ECalculatorSymbol.ADD),
            variant: "secondary"
          }
        )
      ]
    }
  );
}), Wrapper$2 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: styles$7.wrapper,
    "data-testid": "ma-calculator-wrapper",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Screen, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Keypad, {})
    ]
  }
), CalculatorView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(CalculatorDomainContext.Provider, { value: calculatorDomain, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$2, {}) });
class CalendarRepository {
  constructor() {
    H(this, "date");
    H(this, "firstDayMonth");
    H(this, "lastDateMonth");
    H(this, "year");
    H(this, "month");
    H(this, "days");
    this.date = null, this.year = null, this.month = null, this.days = null, this.firstDayMonth = null, this.lastDateMonth = null;
  }
  initCalendar(n) {
    this.getDate(n), this.getFullYear(), this.getMonth(), this.getFirstDayMonth(), this.getLastDateMonth(), this.generateDays();
  }
  generateDays() {
    const n = [];
    if (this.date === null || this.firstDayMonth === null || this.lastDateMonth === null)
      throw new Error("Date not found");
    for (let c = this.firstDayMonth; c > 0; c--)
      n.push({
        status: "inactive",
        value: ""
      });
    for (let c = 1; c <= this.lastDateMonth; c++) {
      const y = c === this.date.getDate() && this.month === (/* @__PURE__ */ new Date()).getMonth() && this.year === (/* @__PURE__ */ new Date()).getFullYear();
      n.push({
        status: y ? "active" : "normal",
        value: String(c)
      });
    }
    this.days = n;
  }
  getDate(n) {
    this.date = n || /* @__PURE__ */ new Date();
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
var __defProp$1 = Object.defineProperty, __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor, __decorateClass$1 = (t, n, c, y) => {
  for (var S = y > 1 ? void 0 : y ? __getOwnPropDesc$1(n, c) : n, $ = t.length - 1, D; $ >= 0; $--)
    (D = t[$]) && (S = (y ? D(n, c, S) : D(S)) || S);
  return y && S && __defProp$1(n, c, S), S;
};
class CalendarService {
  constructor() {
    H(this, "calendar", null);
    H(this, "year", null);
    H(this, "month", null);
    H(this, "calendarRepository", new CalendarRepository());
    makeAutoObservable(this);
  }
  generateCalendar(n) {
    this.calendarRepository.initCalendar(n || null), this.calendar = this.calendarRepository.days, this.year = this.calendarRepository.year, this.month = this.calendarRepository.month;
  }
  changeCalendarByYear() {
    if (!this.month && this.month !== 0 || !this.year)
      return;
    const n = new Date(this.year, this.month);
    this.generateCalendar(n);
  }
  changeCalendarByMonth(n) {
    if (!this.year)
      return;
    const c = new Date(this.year, n);
    this.generateCalendar(c);
  }
  increaseYear() {
    this.year && (this.year += 1, this.changeCalendarByYear());
  }
  decreaseYear() {
    this.year && (this.year -= 1, this.changeCalendarByYear());
  }
}
__decorateClass$1([
  observable
], CalendarService.prototype, "calendar", 2);
__decorateClass$1([
  action
], CalendarService.prototype, "generateCalendar", 1);
__decorateClass$1([
  action
], CalendarService.prototype, "changeCalendarByYear", 1);
__decorateClass$1([
  action
], CalendarService.prototype, "changeCalendarByMonth", 1);
__decorateClass$1([
  action
], CalendarService.prototype, "increaseYear", 1);
__decorateClass$1([
  action
], CalendarService.prototype, "decreaseYear", 1);
const calendarService = new CalendarService(), DomainContext$1 = createContext(calendarService);
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pg4yx_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pg4yx_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._DSText_pg4yx_96{font:400 11px/13px MSSansSerifMedium,sans-serif;color:var(--text-color)}')), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
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
    var t = o, n = Symbol.for("react.element"), c = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), W = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), re = Symbol.iterator, ae = "@@iterator";
    function ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ae];
      return typeof r == "function" ? r : null;
    }
    var X = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(e) {
      {
        for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          l[u - 1] = arguments[u];
        Ze("error", e, l);
      }
    }
    function Ze(e, r, l) {
      {
        var u = X.ReactDebugCurrentFrame, g = u.getStackAddendum();
        g !== "" && (r += "%s", l = l.concat([g]));
        var E = l.map(function(_) {
          return String(_);
        });
        E.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var Xe = !1, Qe = !1, et = !1, tt = !1, rt = !1, we;
    we = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === $ || rt || e === S || e === B || e === I || tt || e === q || Xe || Qe || et || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === R || e.$$typeof === D || e.$$typeof === W || e.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === we || e.getModuleId !== void 0));
    }
    function nt(e, r, l) {
      var u = e.displayName;
      if (u)
        return u;
      var g = r.displayName || r.name || "";
      return g !== "" ? l + "(" + g + ")" : l;
    }
    function Se(e) {
      return e.displayName || "Context";
    }
    function U(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case c:
          return "Portal";
        case $:
          return "Profiler";
        case S:
          return "StrictMode";
        case B:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            var r = e;
            return Se(r) + ".Consumer";
          case D:
            var l = e;
            return Se(l._context) + ".Provider";
          case M:
            return nt(e, e.render, "ForwardRef");
          case R:
            var u = e.displayName || null;
            return u !== null ? u : U(e.type) || "Memo";
          case F: {
            var g = e, E = g._payload, _ = g._init;
            try {
              return U(_(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, se = 0, Ee, Re, je, ke, Me, De, Ne;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function ot() {
      {
        if (se === 0) {
          Ee = console.log, Re = console.info, je = console.warn, ke = console.error, Me = console.group, De = console.groupCollapsed, Ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ze,
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
        se++;
      }
    }
    function it() {
      {
        if (se--, se === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, e, {
              value: Ee
            }),
            info: te({}, e, {
              value: Re
            }),
            warn: te({}, e, {
              value: je
            }),
            error: te({}, e, {
              value: ke
            }),
            group: te({}, e, {
              value: Me
            }),
            groupCollapsed: te({}, e, {
              value: De
            }),
            groupEnd: te({}, e, {
              value: Ne
            })
          });
        }
        se < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = X.ReactCurrentDispatcher, be;
    function ce(e, r, l) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (g) {
            var u = g.stack.trim().match(/\n( *(at )?)/);
            be = u && u[1] || "";
          }
        return `
` + be + e;
      }
    }
    var he = !1, ue;
    {
      var st = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new st();
    }
    function Ae(e, r) {
      if (!e || he)
        return "";
      {
        var l = ue.get(e);
        if (l !== void 0)
          return l;
      }
      var u;
      he = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = me.current, me.current = null, ot();
      try {
        if (r) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (K) {
              u = K;
            }
            Reflect.construct(e, [], _);
          } else {
            try {
              _.call();
            } catch (K) {
              u = K;
            }
            e.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            u = K;
          }
          e();
        }
      } catch (K) {
        if (K && u && typeof K.stack == "string") {
          for (var v = K.stack.split(`
`), G = u.stack.split(`
`), k = v.length - 1, O = G.length - 1; k >= 1 && O >= 0 && v[k] !== G[O]; )
            O--;
          for (; k >= 1 && O >= 0; k--, O--)
            if (v[k] !== G[O]) {
              if (k !== 1 || O !== 1)
                do
                  if (k--, O--, O < 0 || v[k] !== G[O]) {
                    var Y = `
` + v[k].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && ue.set(e, Y), Y;
                  }
                while (k >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        he = !1, me.current = E, it(), Error.prepareStackTrace = g;
      }
      var oe = e ? e.displayName || e.name : "", He = oe ? ce(oe) : "";
      return typeof e == "function" && ue.set(e, He), He;
    }
    function lt(e, r, l) {
      return Ae(e, !1);
    }
    function ct(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function fe(e, r, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, ct(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case B:
          return ce("Suspense");
        case I:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return lt(e.render);
          case R:
            return fe(e.type, r, l);
          case F: {
            var u = e, g = u._payload, E = u._init;
            try {
              return fe(E(g), r, l);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Ie = {}, Fe = X.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, l = fe(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(l);
      } else
        Fe.setExtraStackFrame(null);
    }
    function ut(e, r, l, u, g) {
      {
        var E = Function.call.bind(de);
        for (var _ in e)
          if (E(e, _)) {
            var v = void 0;
            try {
              if (typeof e[_] != "function") {
                var G = Error((u || "React class") + ": " + l + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              v = e[_](r, _, u, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              v = k;
            }
            v && !(v instanceof Error) && (pe(g), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", l, _, typeof v), pe(null)), v instanceof Error && !(v.message in Ie) && (Ie[v.message] = !0, pe(g), L("Failed %s type: %s", l, v.message), pe(null));
          }
      }
    }
    var ft = Array.isArray;
    function xe(e) {
      return ft(e);
    }
    function dt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, l = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function pt(e) {
      try {
        return Ve(e), !1;
      } catch {
        return !0;
      }
    }
    function Ve(e) {
      return "" + e;
    }
    function Le(e) {
      if (pt(e))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(e)), Ve(e);
    }
    var le = X.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, We, ye;
    ye = {};
    function bt(e) {
      if (de.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ht(e) {
      if (de.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xt(e, r) {
      if (typeof e.ref == "string" && le.current && r && le.current.stateNode !== r) {
        var l = U(le.current.type);
        ye[l] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(le.current.type), e.ref), ye[l] = !0);
      }
    }
    function yt(e, r) {
      {
        var l = function() {
          Ge || (Ge = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function vt(e, r) {
      {
        var l = function() {
          We || (We = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var _t = function(e, r, l, u, g, E, _) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: l,
        props: _,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function gt(e, r, l, u, g) {
      {
        var E, _ = {}, v = null, G = null;
        l !== void 0 && (Le(l), v = "" + l), ht(r) && (Le(r.key), v = "" + r.key), bt(r) && (G = r.ref, xt(r, g));
        for (E in r)
          de.call(r, E) && !mt.hasOwnProperty(E) && (_[E] = r[E]);
        if (e && e.defaultProps) {
          var k = e.defaultProps;
          for (E in k)
            _[E] === void 0 && (_[E] = k[E]);
        }
        if (v || G) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && yt(_, O), G && vt(_, O);
        }
        return _t(e, v, G, g, u, le.current, _);
      }
    }
    var ve = X.ReactCurrentOwner, Ye = X.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, l = fe(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(l);
      } else
        Ye.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Be() {
      {
        if (ve.current) {
          var e = U(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wt(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + r + ":" + l + ".";
        }
        return "";
      }
    }
    var qe = {};
    function St(e) {
      {
        var r = Be();
        if (!r) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (r = `

Check the top-level render call using <` + l + ">.");
        }
        return r;
      }
    }
    function Ue(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = St(r);
        if (qe[l])
          return;
        qe[l] = !0;
        var u = "";
        e && e._owner && e._owner !== ve.current && (u = " It was passed a child from " + U(e._owner.type) + "."), ne(e), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, u), ne(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var l = 0; l < e.length; l++) {
            var u = e[l];
            ge(u) && Ue(u, r);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = ie(e);
          if (typeof g == "function" && g !== e.entries)
            for (var E = g.call(e), _; !(_ = E.next()).done; )
              ge(_.value) && Ue(_.value, r);
        }
      }
    }
    function Et(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var l;
        if (typeof r == "function")
          l = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          l = r.propTypes;
        else
          return;
        if (l) {
          var u = U(r);
          ut(l, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !_e) {
          _e = !0;
          var g = U(r);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(e) {
      {
        for (var r = Object.keys(e.props), l = 0; l < r.length; l++) {
          var u = r[l];
          if (u !== "children" && u !== "key") {
            ne(e), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), L("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    function Ke(e, r, l, u, g, E) {
      {
        var _ = at(e);
        if (!_) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = wt(g);
          G ? v += G : v += Be();
          var k;
          e === null ? k = "null" : xe(e) ? k = "array" : e !== void 0 && e.$$typeof === n ? (k = "<" + (U(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : k = typeof e, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, v);
        }
        var O = gt(e, r, l, g, E);
        if (O == null)
          return O;
        if (_) {
          var Y = r.children;
          if (Y !== void 0)
            if (u)
              if (xe(Y)) {
                for (var oe = 0; oe < Y.length; oe++)
                  Je(Y[oe], e);
                Object.freeze && Object.freeze(Y);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(Y, e);
        }
        return e === y ? Tt(O) : Et(O), O;
      }
    }
    function Rt(e, r, l) {
      return Ke(e, r, l, !0);
    }
    function Ct(e, r, l) {
      return Ke(e, r, l, !1);
    }
    var jt = Ct, kt = Rt;
    A.Fragment = y, A.jsx = jt, A.jsxs = kt;
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
  var t = o, n = Symbol.for("react.element"), c = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(W, M, B) {
    var I, R = {}, F = null, q = null;
    B !== void 0 && (F = "" + B), M.key !== void 0 && (F = "" + M.key), M.ref !== void 0 && (q = M.ref);
    for (I in M)
      y.call(M, I) && !$.hasOwnProperty(I) && (R[I] = M[I]);
    if (W && W.defaultProps)
      for (I in M = W.defaultProps, M)
        R[I] === void 0 && (R[I] = M[I]);
    return { $$typeof: n, type: W, key: F, ref: q, props: R, _owner: S.current };
  }
  return N.Fragment = c, N.jsx = D, N.jsxs = D, N;
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
  ariaLabel: t,
  className: n = "",
  direction: c,
  disabled: y,
  id: S,
  onClick: $,
  size: D
}) {
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      "aria-label": t,
      className: `
				${Z["ds-button-arrow"]}
				${Z[`arrow-${c}`]}
				${Z[`size-${D}`]}
				${n}
			`,
      "data-testid": `ds-button-arrow-${S}-${c}`,
      disabled: y,
      type: "button",
      onClick: $
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
  children: t,
  className: n = "",
  id: c,
  title: y
}) {
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `${$e.frame} ${n}`,
      "data-testid": `ds-frame-${c}`,
      children: [
        y && /* @__PURE__ */ d.jsx(
          Fr,
          {
            className: $e.title,
            text: y,
            id: `frame-${c}`
          }
        ),
        t
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
  className: t = "",
  name: n
}) {
  return /* @__PURE__ */ d.jsx("span", { className: t, children: yr[n] });
}
const Er = "_input_e0ixd_111", xr = "_label_e0ixd_112", Q = {
  "theme-light": "_theme-light_e0ixd_16",
  "theme-dark": "_theme-dark_e0ixd_36",
  "wrapper-horizontal": "_wrapper-horizontal_e0ixd_96",
  "wrapper-vertical": "_wrapper-vertical_e0ixd_102",
  input: Er,
  label: xr
};
function wr({ initialValue: t, onChange: n }) {
  const [c, y] = useState(t);
  return useEffect(() => {
    y(t);
  }, [t, y]), { value: c, handleInputChange: (S) => {
    const $ = S.target.value;
    y($), n && n($);
  } };
}
function jr({
  className: t = "",
  type: n = "text",
  id: c,
  disabled: y = !1,
  readonly: S = !1,
  initialValue: $ = "",
  labelName: D,
  wrapperLayout: W = "vertical",
  min: M,
  max: B,
  onChange: I
}) {
  const { value: R, handleInputChange: F } = wr({ initialValue: $, onChange: I }), q = `ds-input-${c}`;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `${Q[`wrapper-${W}`]} ${t}`,
      "data-testid": q,
      children: [
        D && /* @__PURE__ */ d.jsx(
          "label",
          {
            className: Q.label,
            "data-testid": `ds-input-label-${c}`,
            htmlFor: q,
            children: D
          }
        ),
        /* @__PURE__ */ d.jsx(
          "input",
          {
            id: q,
            className: Q.input,
            "data-testid": `ds-input-input-${c}`,
            type: n,
            disabled: y,
            readOnly: S,
            value: R,
            min: M ?? void 0,
            max: B ?? void 0,
            name: q,
            onChange: F
          }
        )
      ]
    }
  );
}
function Sr(t) {
  const [n, c] = useState(t);
  return {
    value: n,
    handleChange: (y) => {
      c(y.target.value);
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
  className: t = "",
  id: n,
  required: c = !1,
  disabled: y = !1,
  modelValue: S,
  options: $,
  labelName: D,
  onSelect: W
}) {
  const { value: M, handleChange: B } = Sr(S), I = (R) => {
    B(R), W(R);
  };
  return /* @__PURE__ */ d.jsxs("div", { className: `${V.wrapper} ${t}`, children: [
    D && /* @__PURE__ */ d.jsx(
      "label",
      {
        className: V.label,
        "data-testid": `ds-select-label-${n}`,
        htmlFor: n,
        children: D
      }
    ),
    /* @__PURE__ */ d.jsx(
      "select",
      {
        className: V.select,
        "data-testid": `ds-select-select-${n}`,
        disabled: y,
        id: n,
        name: n,
        onChange: I,
        required: c,
        value: M,
        children: $.map((R, F) => /* @__PURE__ */ d.jsx(
          "option",
          {
            className: V.option,
            "data-testid": `ds-select-option-${n}-${F}`,
            value: R.value,
            children: R.name
          },
          `${n}-${R.value}`
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
  modelValue: t,
  onIncrease: n,
  onDecrease: c
}) {
  const [y, S] = useState(t);
  return useEffect(() => {
    S(t);
  }, [t]), { value: y, handleIncrease: () => {
    n && n();
  }, handleDecrease: () => {
    c && c();
  } };
}
function Vr({
  className: t = "",
  id: n,
  modelValue: c,
  disabled: y = !1,
  onIncrease: S,
  onDecrease: $
}) {
  const {
    value: D,
    handleIncrease: W,
    handleDecrease: M
  } = Pr({ modelValue: c, onIncrease: S, onDecrease: $ });
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `
        ${Pe["ds-stepper"]}
        ${y ? Pe["state-disabled"] : ""}
        ${t}
      `,
      children: [
        /* @__PURE__ */ d.jsx(
          jr,
          {
            id: `stepper-${n}`,
            initialValue: D,
            readonly: !0
          }
        ),
        /* @__PURE__ */ d.jsx(
          Oe,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: y,
            id: n,
            size: "small",
            onClick: W
          }
        ),
        /* @__PURE__ */ d.jsx(
          Oe,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: y,
            id: n,
            size: "small",
            onClick: M
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
  className: t = "",
  id: n,
  text: c
}) {
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      className: `${kr.DSText} ${t}`,
      "data-testid": `ds-text-${n}`,
      children: c
    }
  );
}
function useCalendar() {
  return {
    calendarService: useContext(DomainContext$1)
  };
}
function useWrapper$1() {
  const { t } = useTranslation(), { calendarService: n } = useCalendar();
  return useEffect(() => {
    n.generateCalendar();
  }, []), {
    title: useMemo(
      () => ({
        title: t("ma-calendar.wrapper.title")
      }),
      [t]
    ).title
  };
}
function useDays() {
  const { calendarService: t } = useCalendar(), { t: n } = useTranslation(), c = useMemo(
    () => ({
      weekDays: [
        n("ma-calendar.days.sunday"),
        n("ma-calendar.days.monday"),
        n("ma-calendar.days.tuesday"),
        n("ma-calendar.days.wednesday"),
        n("ma-calendar.days.thursday"),
        n("ma-calendar.days.friday"),
        n("ma-calendar.days.saturday")
      ]
    }),
    [n]
  );
  return {
    monthDays: t.calendar,
    weekDays: c.weekDays
  };
}
const day$1 = "_day_1v33v_104", styles$3 = {
  "theme-light": "_theme-light_1v33v_16",
  "theme-dark": "_theme-dark_1v33v_36",
  "week-days": "_week-days_1v33v_96",
  day: day$1
}, WeekDays = observer(() => {
  const { weekDays: t } = useDays();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["week-days"], children: t.map((n, c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: styles$3.day,
      "data-testid": `calendar-week-days-day-${c}`,
      children: n
    },
    c
  )) });
}), day = "_day_12et3_102", styles$2 = {
  "theme-light": "_theme-light_12et3_16",
  "theme-dark": "_theme-dark_12et3_36",
  "month-days": "_month-days_12et3_96",
  day,
  "day-active": "_day-active_12et3_107"
}, MonthDays = observer(() => {
  const { monthDays: t } = useDays();
  return t && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["month-days"], "data-testid": "calendar-view-days", children: t.map((n, c) => n.value === "" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: styles$2.day,
      "data-testid": `calendar-month-days-empty-${c}`
    },
    c
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: `
                        ${styles$2.day}
                        ${n.status === "active" ? styles$2["day-active"] : ""}
                    `,
      "data-testid": `calendar-month-days-day-${n.value}`,
      type: "button",
      children: n.value
    },
    c
  )) });
}), days = "_days_1xeii_96", styles$1 = {
  "theme-light": "_theme-light_1xeii_16",
  "theme-dark": "_theme-dark_1xeii_36",
  days
}, Days = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.days, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(WeekDays, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(MonthDays, {})
] });
function useMonthSwitcher() {
  const { t } = useTranslation(), { calendarService: n } = useCalendar(), c = (S) => {
    n.changeCalendarByMonth(Number(S.currentTarget.value));
  }, y = useMemo(
    () => ({
      months: [
        {
          value: 0,
          name: t("ma-calendar.month-switcher.january")
        },
        {
          value: 1,
          name: t("ma-calendar.month-switcher.february")
        },
        {
          value: 2,
          name: t("ma-calendar.month-switcher.march")
        },
        {
          value: 3,
          name: t("ma-calendar.month-switcher.april")
        },
        {
          value: 4,
          name: t("ma-calendar.month-switcher.may")
        },
        {
          value: 5,
          name: t("ma-calendar.month-switcher.june")
        },
        {
          value: 6,
          name: t("ma-calendar.month-switcher.july")
        },
        {
          value: 7,
          name: t("ma-calendar.month-switcher.august")
        },
        {
          value: 8,
          name: t("ma-calendar.month-switcher.september")
        },
        {
          value: 9,
          name: t("ma-calendar.month-switcher.october")
        },
        {
          value: 10,
          name: t("ma-calendar.month-switcher.november")
        },
        {
          value: 11,
          name: t("ma-calendar.month-switcher.december")
        }
      ]
    }),
    [t]
  );
  return {
    handleSelectChange: c,
    month: n.month,
    months: y.months
  };
}
const MonthSwitcher = observer(() => {
  const { handleSelectChange: t, month: n, months: c } = useMonthSwitcher();
  return n !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Nr,
    {
      id: "month-switcher",
      modelValue: n,
      options: c,
      onSelect: t
    }
  );
});
function useYearSwitcher() {
  const { calendarService: t } = useCalendar();
  return {
    decreaseYear: () => {
      t.decreaseYear();
    },
    increaseYear: () => {
      t.increaseYear();
    },
    year: t.year
  };
}
const YearSwitcher = observer(() => {
  const { decreaseYear: t, increaseYear: n, year: c } = useYearSwitcher();
  return c && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Vr,
    {
      id: "calendar-year",
      modelValue: c,
      onIncrease: n,
      onDecrease: t
    }
  );
}), wrapper = "_wrapper_s3u64_96", styles = {
  "theme-light": "_theme-light_s3u64_16",
  "theme-dark": "_theme-dark_s3u64_36",
  wrapper
};
function useSyncLang() {
  const { i18n: t } = useTranslation();
  useEffect(() => {
    const n = document.documentElement.lang;
    n && t.changeLanguage(n);
  }, []), useEffect(() => {
    const n = new MutationObserver((c) => {
      c.forEach((y) => {
        y.type === "attributes" && y.attributeName === "lang" && t.changeLanguage(y.target.lang);
      });
    });
    return n.observe(document.documentElement, { attributes: !0 }), () => {
      n.disconnect();
    };
  }, [t]);
}
const Wrapper$1 = observer(() => {
  const { title: t } = useWrapper$1();
  return useSyncLang(), /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Ar,
    {
      className: styles.wrapper,
      id: "calculator",
      title: t,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MonthSwitcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YearSwitcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Days, {})
      ]
    }
  );
}), CalendarView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext$1.Provider, { value: calendarService, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$1, {}) });
class TimezoneRepository {
  getTimezones() {
    return [-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
}
var __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __decorateClass = (t, n, c, y) => {
  for (var S = y > 1 ? void 0 : y ? __getOwnPropDesc(n, c) : n, $ = t.length - 1, D; $ >= 0; $--)
    (D = t[$]) && (S = (y ? D(n, c, S) : D(S)) || S);
  return y && S && __defProp(n, c, S), S;
};
class TimezoneService {
  constructor() {
    H(this, "timezoneRepository", new TimezoneRepository());
    H(this, "timezonesValuePairs", null);
    makeAutoObservable(this);
  }
  generateTimezones() {
    const n = this.timezoneRepository.getTimezones();
    this.timezonesValuePairs = this.mapTimezonesToValuePairs(n);
  }
  createI18nKey(n) {
    return `ma-timezone.stepper.${n}`;
  }
  mapTimezonesToValuePairs(n) {
    return n.map((c) => ({
      value: c,
      label: this.createI18nKey(c)
    }));
  }
}
__decorateClass([
  observable
], TimezoneService.prototype, "timezoneRepository", 2);
__decorateClass([
  action
], TimezoneService.prototype, "generateTimezones", 1);
const timezoneService = new TimezoneService(), DomainContext = createContext(timezoneService);
function useTimezone() {
  return {
    timezoneService: useContext(DomainContext)
  };
}
function useWrapper() {
  const { t } = useTranslation(), { timezoneService: n } = useTimezone();
  return useEffect(() => {
    n.generateTimezones();
  }, []), {
    title: useMemo(
      () => ({
        title: t("ma-timezone.wrapper.title")
      }),
      [t]
    ).title
  };
}
function useTimezoneSwitcher() {
  const { t } = useTranslation(), { timezoneService: n } = useTimezone();
  return {
    dictionary: useMemo(
      () => {
        var y;
        return {
          timezones: (y = n == null ? void 0 : n.timezonesValuePairs) == null ? void 0 : y.map((S) => ({
            value: S.value,
            name: t(S.label)
          }))
        };
      },
      [t, n == null ? void 0 : n.timezonesValuePairs]
    )
  };
}
const TimezoneSwitcher = observer(() => {
  const { dictionary: t } = useTimezoneSwitcher();
  return (t == null ? void 0 : t.timezones) && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Nr,
    {
      id: "timezone-switcher",
      modelValue: t.timezones[0].value,
      options: t.timezones,
      onSelect: () => {
      }
    }
  );
}), Wrapper = observer(() => {
  const { title: t } = useWrapper();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ar,
    {
      id: "timezone",
      title: t,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimezoneSwitcher, {})
    }
  );
}), TimezoneView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext.Provider, { value: timezoneService, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, {}) }), MACalculator = s(CalculatorView);
customElements.define("ma-calculator", MACalculator);
const MACalendar = s(CalendarView);
customElements.define("ma-calendar", MACalendar);
const MATimezone = s(TimezoneView);
customElements.define("ma-timezone", MATimezone);
i18nInit();
//# sourceMappingURL=index.js.map
