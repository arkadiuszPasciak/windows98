(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_9arum_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_9arum_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._button_9arum_96{display:flex;justify-content:center;align-items:center;font:400 11px/11px MSSansSerifMedium,sans-serif;border:none;border-radius:0;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);width:35px;height:30px}@media (hover: hover){._button_9arum_96{cursor:pointer}}._button_9arum_96:disabled{pointer-events:none;opacity:.5}._button_9arum_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._primary_9arum_122{color:#00f}._secondary_9arum_126{color:#fe0000}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_uzbrq_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_uzbrq_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._keypad_uzbrq_96{display:grid;justify-content:center;grid-template-rows:repeat(3,30px);grid-template-columns:repeat(4,35px);gap:1px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1hx69_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1hx69_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._screen_1hx69_96{background-color:var(--background-color-white);color:var(--text-color);width:100%;height:20px;padding:5px;text-align:right;box-shadow:var(--border-field);font:400 11px/13px MSSansSerifMedium,sans-serif}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_wc6ff_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_wc6ff_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_wc6ff_96{display:grid;row-gap:15px;padding:13px 22px 10px;background-color:var(--background-color)}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1xeii_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1xeii_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._days_1xeii_96{width:160px;height:145px;box-shadow:var(--border-field);padding:2px;text-align:center;background-color:var(--background-color-white)}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_12et3_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_12et3_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._month-days_12et3_96{display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(6,1fr)}._day_12et3_102{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}._day-active_12et3_107{color:#fff;background-color:navy}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1v33v_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1v33v_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._week-days_1v33v_96{display:grid;height:20px;grid-template-columns:repeat(7,1fr);background-color:gray;color:var(--text-color-3)}._day_1v33v_104{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_s3u64_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_s3u64_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_s3u64_96{display:grid;grid-template-columns:90px 70px;background-color:var(--background-color);gap:10px 0;max-width:180px;width:100%}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1dsur_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1dsur_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._controller_1dsur_96{display:flex;column-gap:5px;justify-content:center;padding-top:35px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_5pr9f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_5pr9f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._description_5pr9f_96{display:flex;column-gap:10px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_uwzih_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_uwzih_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._presets_uwzih_96{display:flex;flex-direction:column;row-gap:5px;margin-left:42px;margin-top:-10px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_wbu18_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_wbu18_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_wbu18_96{max-width:290px;background-color:var(--background-color);padding:20px;box-sizing:content-box}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_15w9q_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_15w9q_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._controller_15w9q_96{display:flex;justify-content:center;align-items:center;column-gap:15px;margin-bottom:15px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_covgd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_covgd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._player_covgd_96{display:flex;column-gap:20px;justify-content:center}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_2r2rz_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_2r2rz_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._presets_2r2rz_96{display:flex;justify-content:center;align-items:center;gap:8px;grid-area:1/1/2/7;margin-right:0;margin-left:0}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_ddbl8_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_ddbl8_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._screen_ddbl8_96{display:flex;grid-area:3/1/4/7;justify-self:center;background-color:var(--background-color-white);max-width:203px;width:100%;height:48px;padding:5px;box-shadow:var(--border-field);font:400 39px/44px MSSansSerifBold,sans-serif;letter-spacing:3px;color:var(--text-color);-webkit-user-select:none;user-select:none;margin:0 auto 15px}._time_ddbl8_113{width:55px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1h4hz_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1h4hz_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._wrapper_1h4hz_96{background-color:var(--background-color);padding:0 10px 10px;max-width:385px;width:100%}')),document.head.appendChild(o)}}catch(f){console.error("vite-plugin-css-injected-by-js",f)}})();
var Pt = Object.defineProperty;
var zt = (t, r, y) => r in t ? Pt(t, r, { enumerable: !0, configurable: !0, writable: !0, value: y }) : t[r] = y;
var D = (t, r, y) => (zt(t, typeof r != "symbol" ? r + "" : r, y), y);
import o, { createContext, useContext, useState, useEffect, useMemo } from "react";
import require$$0 from "react-dom";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
var createRoot, m = require$$0;
if (process.env.NODE_ENV === "production")
  createRoot = m.createRoot, m.hydrateRoot;
else {
  var i$3 = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function(t, r) {
    i$3.usingClientEntryPoint = !0;
    try {
      return m.createRoot(t, r);
    } finally {
      i$3.usingClientEntryPoint = !1;
    }
  };
}
var j = Object.defineProperty, x = (t, r, y) => r in t ? j(t, r, { enumerable: !0, configurable: !0, writable: !0, value: y }) : t[r] = y, b = (t, r, y) => (x(t, typeof r != "symbol" ? r + "" : r, y), y);
const C = {
  stringify: (t) => t,
  parse: (t) => t
}, T = {
  stringify: (t) => `${t}`,
  parse: (t) => parseFloat(t)
}, V = {
  stringify: (t) => t ? "true" : "false",
  parse: (t) => /^[ty1-9]/i.test(t)
}, N$1 = {
  stringify: (t) => t.name,
  parse: (t, r) => {
    const y = (() => {
      if (typeof window < "u" && t in window)
        return window[t];
      if (typeof global < "u" && t in global)
        return global[t];
    })();
    return typeof y == "function" ? y.bind(r) : void 0;
  }
}, P = {
  stringify: (t) => JSON.stringify(t),
  parse: (t) => JSON.parse(t)
}, w = {
  string: C,
  number: T,
  boolean: V,
  function: N$1,
  json: P
}, A$1 = Symbol.for("r2wc.render"), h = Symbol.for("r2wc.connected"), p = Symbol.for("r2wc.context"), i$2 = Symbol.for("r2wc.props");
function z$1(t, r, y) {
  var _, k, M;
  r.props || (r.props = t.propTypes ? Object.keys(t.propTypes) : []);
  const U = (Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props)).filter((O) => O !== "container"), W = {}, $ = {}, q = {};
  for (const O of U) {
    W[O] = Array.isArray(r.props) ? "string" : r.props[O];
    const B = J(O);
    $[O] = B, q[B] = O;
  }
  class H extends HTMLElement {
    constructor() {
      super(), b(this, _, !0), b(this, k), b(this, M, {}), b(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[i$2].container = this.container;
      for (const B of U) {
        const Z = $[B], oe = this.getAttribute(Z), se = W[B], ce = w[se];
        oe && ce != null && ce.parse && (this[i$2][B] = ce.parse(oe, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(q);
    }
    connectedCallback() {
      this[h] = !0, this[A$1]();
    }
    disconnectedCallback() {
      this[h] = !1, this[p] && y.unmount(this[p]), delete this[p];
    }
    attributeChangedCallback(B, Z, oe) {
      const se = q[B], ce = W[se], ne = w[ce];
      se in W && ne != null && ne.parse && (this[i$2][se] = ne.parse(oe, this), this[A$1]());
    }
    [(_ = h, k = p, M = i$2, A$1)]() {
      this[h] && (this[p] ? y.update(this[p], this[i$2]) : this[p] = y.mount(
        this.container,
        t,
        this[i$2]
      ));
    }
  }
  for (const O of U) {
    const B = $[O], Z = W[O];
    Object.defineProperty(H.prototype, O, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[i$2][O];
      },
      set(oe) {
        this[i$2][O] = oe;
        const se = w[Z];
        if (se != null && se.stringify) {
          const ce = se.stringify(oe);
          this.getAttribute(B) !== ce && this.setAttribute(B, ce);
        }
      }
    });
  }
  return H;
}
function J(t = "") {
  return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function f(t, r, y) {
  const _ = createRoot(t), k = o.createElement(r, y);
  return _.render(k), {
    root: _,
    ReactComponent: r
  };
}
function i$1({ root: t, ReactComponent: r }, y) {
  const _ = o.createElement(r, y);
  t.render(_);
}
function a$2({ root: t }) {
  t.unmount();
}
function s(t, r = {}) {
  return z$1(t, r, { mount: f, update: i$1, unmount: a$2 });
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
}, shutdownEN = {
  "ma-shutdown": {
    cancel: "Cancel",
    description: "What do you want the computer to do?",
    ok: "OK",
    restart: "Restart",
    shutdown: "Shutdown",
    title: "Shutdown Windows"
  }
}, timerEN = {
  "ma-timer": {
    title: "Timer",
    reset: "Reset",
    start: "Start",
    stop: "Stop",
    presets: {
      title: "Presets",
      "three-minutes": "3 min",
      "five-minutes": "5 min",
      "ten-minutes": "10 min",
      "fifteen-minutes": "15 min",
      custom: "Custom"
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
  ...shutdownEN,
  ...timerEN,
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
}, shutdownPL = {
  "ma-shutdown": {
    cancel: "Anuluj",
    description: "Co chcesz zrobić z komputerem?",
    ok: "OK",
    restart: "Zrestartuj",
    shutdown: "Wyłącz",
    title: "Wyłącz Windows"
  }
}, timerPL = {
  "ma-timer": {
    title: "Minutnik",
    reset: "Reset",
    start: "Start",
    stop: "Stop",
    presets: {
      title: "Ustawienia",
      "three-minutes": "3 min",
      "five-minutes": "5 min",
      "ten-minutes": "10 min",
      "fifteen-minutes": "15 min",
      custom: "Niestandardowy"
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
  ...shutdownPL,
  ...timerPL,
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
  var t = o, r = Symbol.for("react.element"), y = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, k = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(W, $, q) {
    var H, O = {}, B = null, Z = null;
    q !== void 0 && (B = "" + q), $.key !== void 0 && (B = "" + $.key), $.ref !== void 0 && (Z = $.ref);
    for (H in $)
      _.call($, H) && !M.hasOwnProperty(H) && (O[H] = $[H]);
    if (W && W.defaultProps)
      for (H in $ = W.defaultProps, $)
        O[H] === void 0 && (O[H] = $[H]);
    return { $$typeof: r, type: W, key: B, ref: Z, props: O, _owner: k.current };
  }
  return reactJsxRuntime_production_min.Fragment = y, reactJsxRuntime_production_min.jsx = U, reactJsxRuntime_production_min.jsxs = U, reactJsxRuntime_production_min;
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
    var t = o, r = Symbol.for("react.element"), y = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), W = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), oe = Symbol.iterator, se = "@@iterator";
    function ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var l = oe && e[oe] || e[se];
      return typeof l == "function" ? l : null;
    }
    var ne = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function G(e) {
      {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), v = 1; v < l; v++)
          c[v - 1] = arguments[v];
        rt("error", e, c);
      }
    }
    function rt(e, l, c) {
      {
        var v = ne.ReactDebugCurrentFrame, E = v.getStackAddendum();
        E !== "" && (l += "%s", c = c.concat([E]));
        var R = c.map(function(S) {
          return String(S);
        });
        R.unshift("Warning: " + l), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var nt = !1, at = !1, ot = !1, st = !1, it = !1, Te;
    Te = Symbol.for("react.module.reference");
    function lt(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === M || it || e === k || e === q || e === H || st || e === Z || nt || at || ot || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === O || e.$$typeof === U || e.$$typeof === W || e.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Te || e.getModuleId !== void 0));
    }
    function ct(e, l, c) {
      var v = e.displayName;
      if (v)
        return v;
      var E = l.displayName || l.name || "";
      return E !== "" ? c + "(" + E + ")" : c;
    }
    function Re(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && G("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case y:
          return "Portal";
        case M:
          return "Profiler";
        case k:
          return "StrictMode";
        case q:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            var l = e;
            return Re(l) + ".Consumer";
          case U:
            var c = e;
            return Re(c._context) + ".Provider";
          case $:
            return ct(e, e.render, "ForwardRef");
          case O:
            var v = e.displayName || null;
            return v !== null ? v : X(e.type) || "Memo";
          case B: {
            var E = e, R = E._payload, S = E._init;
            try {
              return X(S(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, ue = 0, je, Me, $e, Ne, Ae, Ie, Fe;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function ut() {
      {
        if (ue === 0) {
          je = console.log, Me = console.info, $e = console.warn, Ne = console.error, Ae = console.group, Ie = console.groupCollapsed, Fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Le,
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
        ue++;
      }
    }
    function dt() {
      {
        if (ue--, ue === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, e, {
              value: je
            }),
            info: ae({}, e, {
              value: Me
            }),
            warn: ae({}, e, {
              value: $e
            }),
            error: ae({}, e, {
              value: Ne
            }),
            group: ae({}, e, {
              value: Ae
            }),
            groupCollapsed: ae({}, e, {
              value: Ie
            }),
            groupEnd: ae({}, e, {
              value: Fe
            })
          });
        }
        ue < 0 && G("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = ne.ReactCurrentDispatcher, ye;
    function fe(e, l, c) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (E) {
            var v = E.stack.trim().match(/\n( *(at )?)/);
            ye = v && v[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var ve = !1, pe;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new ft();
    }
    function Ue(e, l) {
      if (!e || ve)
        return "";
      {
        var c = pe.get(e);
        if (c !== void 0)
          return c;
      }
      var v;
      ve = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = be.current, be.current = null, ut();
      try {
        if (l) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (Q) {
              v = Q;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (Q) {
              v = Q;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            v = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && v && typeof Q.stack == "string") {
          for (var g = Q.stack.split(`
`), Y = v.stack.split(`
`), F = g.length - 1, L = Y.length - 1; F >= 1 && L >= 0 && g[F] !== Y[L]; )
            L--;
          for (; F >= 1 && L >= 0; F--, L--)
            if (g[F] !== Y[L]) {
              if (F !== 1 || L !== 1)
                do
                  if (F--, L--, L < 0 || g[F] !== Y[L]) {
                    var K = `
` + g[F].replace(" at new ", " at ");
                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && pe.set(e, K), K;
                  }
                while (F >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        ve = !1, be.current = R, dt(), Error.prepareStackTrace = E;
      }
      var le = e ? e.displayName || e.name : "", tt = le ? fe(le) : "";
      return typeof e == "function" && pe.set(e, tt), tt;
    }
    function pt(e, l, c) {
      return Ue(e, !1);
    }
    function mt(e) {
      var l = e.prototype;
      return !!(l && l.isReactComponent);
    }
    function me(e, l, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ue(e, mt(e));
      if (typeof e == "string")
        return fe(e);
      switch (e) {
        case q:
          return fe("Suspense");
        case H:
          return fe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return pt(e.render);
          case O:
            return me(e.type, l, c);
          case B: {
            var v = e, E = v._payload, R = v._init;
            try {
              return me(R(E), l, c);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, We = {}, He = ne.ReactDebugCurrentFrame;
    function xe(e) {
      if (e) {
        var l = e._owner, c = me(e.type, e._source, l ? l.type : null);
        He.setExtraStackFrame(c);
      } else
        He.setExtraStackFrame(null);
    }
    function ht(e, l, c, v, E) {
      {
        var R = Function.call.bind(he);
        for (var S in e)
          if (R(e, S)) {
            var g = void 0;
            try {
              if (typeof e[S] != "function") {
                var Y = Error((v || "React class") + ": " + c + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              g = e[S](l, S, v, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              g = F;
            }
            g && !(g instanceof Error) && (xe(E), G("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", c, S, typeof g), xe(null)), g instanceof Error && !(g.message in We) && (We[g.message] = !0, xe(E), G("Failed %s type: %s", c, g.message), xe(null));
          }
      }
    }
    var xt = Array.isArray;
    function _e(e) {
      return xt(e);
    }
    function bt(e) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, c = l && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function yt(e) {
      try {
        return Be(e), !1;
      } catch {
        return !0;
      }
    }
    function Be(e) {
      return "" + e;
    }
    function Ge(e) {
      if (yt(e))
        return G("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(e)), Be(e);
    }
    var de = ne.ReactCurrentOwner, vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, qe, ge;
    ge = {};
    function _t(e) {
      if (he.call(e, "ref")) {
        var l = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function gt(e) {
      if (he.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, l) {
      if (typeof e.ref == "string" && de.current && l && de.current.stateNode !== l) {
        var c = X(de.current.type);
        ge[c] || (G('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(de.current.type), e.ref), ge[c] = !0);
      }
    }
    function St(e, l) {
      {
        var c = function() {
          Ye || (Ye = !0, G("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Et(e, l) {
      {
        var c = function() {
          qe || (qe = !0, G("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Tt = function(e, l, c, v, E, R, S) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: l,
        ref: c,
        props: S,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Rt(e, l, c, v, E) {
      {
        var R, S = {}, g = null, Y = null;
        c !== void 0 && (Ge(c), g = "" + c), gt(l) && (Ge(l.key), g = "" + l.key), _t(l) && (Y = l.ref, wt(l, E));
        for (R in l)
          he.call(l, R) && !vt.hasOwnProperty(R) && (S[R] = l[R]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (R in F)
            S[R] === void 0 && (S[R] = F[R]);
        }
        if (g || Y) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && St(S, L), Y && Et(S, L);
        }
        return Tt(e, g, Y, E, v, de.current, S);
      }
    }
    var we = ne.ReactCurrentOwner, Je = ne.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var l = e._owner, c = me(e.type, e._source, l ? l.type : null);
        Je.setExtraStackFrame(c);
      } else
        Je.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ke() {
      {
        if (we.current) {
          var e = X(we.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kt(e) {
      {
        if (e !== void 0) {
          var l = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + l + ":" + c + ".";
        }
        return "";
      }
    }
    var Ze = {};
    function jt(e) {
      {
        var l = Ke();
        if (!l) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (l = `

Check the top-level render call using <` + c + ">.");
        }
        return l;
      }
    }
    function Xe(e, l) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = jt(l);
        if (Ze[c])
          return;
        Ze[c] = !0;
        var v = "";
        e && e._owner && e._owner !== we.current && (v = " It was passed a child from " + X(e._owner.type) + "."), ie(e), G('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, v), ie(null);
      }
    }
    function Qe(e, l) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var c = 0; c < e.length; c++) {
            var v = e[c];
            Ee(v) && Xe(v, l);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = ce(e);
          if (typeof E == "function" && E !== e.entries)
            for (var R = E.call(e), S; !(S = R.next()).done; )
              Ee(S.value) && Xe(S.value, l);
        }
      }
    }
    function Ct(e) {
      {
        var l = e.type;
        if (l == null || typeof l == "string")
          return;
        var c;
        if (typeof l == "function")
          c = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === O))
          c = l.propTypes;
        else
          return;
        if (c) {
          var v = X(l);
          ht(c, e.props, "prop", v, e);
        } else if (l.PropTypes !== void 0 && !Se) {
          Se = !0;
          var E = X(l);
          G("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && G("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dt(e) {
      {
        for (var l = Object.keys(e.props), c = 0; c < l.length; c++) {
          var v = l[c];
          if (v !== "children" && v !== "key") {
            ie(e), G("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ie(null);
            break;
          }
        }
        e.ref !== null && (ie(e), G("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    function et(e, l, c, v, E, R) {
      {
        var S = lt(e);
        if (!S) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = kt(E);
          Y ? g += Y : g += Ke();
          var F;
          e === null ? F = "null" : _e(e) ? F = "array" : e !== void 0 && e.$$typeof === r ? (F = "<" + (X(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, G("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, g);
        }
        var L = Rt(e, l, c, E, R);
        if (L == null)
          return L;
        if (S) {
          var K = l.children;
          if (K !== void 0)
            if (v)
              if (_e(K)) {
                for (var le = 0; le < K.length; le++)
                  Qe(K[le], e);
                Object.freeze && Object.freeze(K);
              } else
                G("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(K, e);
        }
        return e === _ ? Dt(L) : Ct(L), L;
      }
    }
    function Mt(e, l, c) {
      return et(e, l, c, !0);
    }
    function $t(e, l, c) {
      return et(e, l, c, !1);
    }
    var Ot = $t, Nt = Mt;
    reactJsxRuntime_development.Fragment = _, reactJsxRuntime_development.jsx = Ot, reactJsxRuntime_development.jsxs = Nt;
  }()), reactJsxRuntime_development;
}
process.env.NODE_ENV === "production" ? jsxRuntime.exports = requireReactJsxRuntime_production_min() : jsxRuntime.exports = requireReactJsxRuntime_development();
var jsxRuntimeExports = jsxRuntime.exports, ECalculatorDirect = /* @__PURE__ */ ((t) => (t.FIRST = "first", t.LAST = "last", t))(ECalculatorDirect || {}), ECalculatorNumber = /* @__PURE__ */ ((t) => (t[t.ZERO = 0] = "ZERO", t[t.ONE = 1] = "ONE", t[t.TWO = 2] = "TWO", t[t.THREE = 3] = "THREE", t[t.FOUR = 4] = "FOUR", t[t.FIVE = 5] = "FIVE", t[t.SIX = 6] = "SIX", t[t.SEVEN = 7] = "SEVEN", t[t.EIGHT = 8] = "EIGHT", t[t.NINE = 9] = "NINE", t))(ECalculatorNumber || {}), ECalculatorSymbol = /* @__PURE__ */ ((t) => (t.ADD = "+", t.DIVIDE = "/", t.DOT = ".", t.MINUS = "-", t.MULTIPLY = "*", t.RESULT = "=", t))(ECalculatorSymbol || {});
class CalculatorService {
  isValueEqual(t, r, y) {
    switch (y) {
      case ECalculatorDirect.FIRST:
        return t.slice(0, r.length) === r;
      case ECalculatorDirect.LAST:
        return t.slice(-1) === r;
      default:
        return !1;
    }
  }
  isDotExist(t) {
    return t ? !!t.split("").find((_) => _ === ".") : !1;
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
class CalculatorDomain {
  constructor() {
    D(this, "value", "0");
    D(this, "calculatorService", new CalculatorService());
    D(this, "addNumber", (r) => {
      this.calculatorService.isValueEqual(
        this.value,
        "0",
        ECalculatorDirect.FIRST
      ) && !this.calculatorService.isValueEqual(
        this.value,
        "0.",
        ECalculatorDirect.FIRST
      ) && this.value.length === 1 ? this.value = String(r) : this.value += String(r);
    });
    D(this, "addDot", () => {
      this.calculatorService.isDotExist(this.value) || this.calculatorService.isMathematicalSignLast(this.value) || this.calculatorService.isValueEqual(
        this.value,
        ".",
        ECalculatorDirect.LAST
      ) || (this.value += ".");
    });
    D(this, "addSymbol", (r) => {
      this.value === "0." || this.calculatorService.isMathematicalSignLast(this.value) || (this.value += r);
    });
    D(this, "summResult", () => {
      this.value = this.calculatorService.summResult(this.value);
    });
    makeAutoObservable(this);
  }
}
const calculatorDomain = new CalculatorDomain(), DomainContext$4 = createContext(calculatorDomain), button = "_button_9arum_96", primary = "_primary_9arum_122", secondary = "_secondary_9arum_126", styles$g = {
  "theme-light": "_theme-light_9arum_16",
  "theme-dark": "_theme-dark_9arum_36",
  button,
  primary,
  secondary
}, OperationButton = ({
  id: t,
  onClick: r,
  variant: y = "blue"
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "button",
  {
    className: `${styles$g.button} ${styles$g[y]}`,
    "data-testid": `ma-calculator-operation-button-${t}`,
    onClick: r,
    type: "button",
    children: t
  }
), keypad = "_keypad_uzbrq_96", styles$f = {
  "theme-light": "_theme-light_uzbrq_16",
  "theme-dark": "_theme-dark_uzbrq_36",
  keypad
};
function useCalculator() {
  return {
    calculatorDomain: useContext(DomainContext$4)
  };
}
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
  const { addDot: t, addNumber: r, addSymbol: y, summResult: _ } = useKeypad();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: styles$f.keypad,
      "data-testid": "ma-calculator-keypad",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.SEVEN,
            onClick: () => r(ECalculatorNumber.SEVEN),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.EIGHT,
            onClick: () => r(ECalculatorNumber.EIGHT),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.NINE,
            onClick: () => r(ECalculatorNumber.NINE),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.DIVIDE,
            onClick: () => y(ECalculatorSymbol.DIVIDE),
            variant: "secondary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.FOUR,
            onClick: () => r(ECalculatorNumber.FOUR),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.FIVE,
            onClick: () => r(ECalculatorNumber.FIVE),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.SIX,
            onClick: () => r(ECalculatorNumber.SIX),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.MULTIPLY,
            onClick: () => y(ECalculatorSymbol.MULTIPLY),
            variant: "secondary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.ONE,
            onClick: () => r(ECalculatorNumber.ONE),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.TWO,
            onClick: () => r(ECalculatorNumber.TWO),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.THREE,
            onClick: () => r(ECalculatorNumber.THREE),
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.MINUS,
            onClick: () => y(ECalculatorSymbol.MINUS),
            variant: "secondary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorNumber.ZERO,
            onClick: () => r(ECalculatorNumber.ZERO),
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
            onClick: _,
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.ADD,
            onClick: () => y(ECalculatorSymbol.ADD),
            variant: "secondary"
          }
        )
      ]
    }
  );
}), screen$1 = "_screen_1hx69_96", styles$e = {
  "theme-light": "_theme-light_1hx69_16",
  "theme-dark": "_theme-dark_1hx69_36",
  screen: screen$1
};
function useScreen$1() {
  const { calculatorDomain: t } = useCalculator();
  return {
    value: t.value
  };
}
const Screen$1 = observer(() => {
  const { value: t } = useScreen$1();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: styles$e.screen,
      "data-testid": "ma-calculator-screen",
      children: t ?? "ERROR"
    }
  );
}), wrapper$3 = "_wrapper_wc6ff_96", styles$d = {
  "theme-light": "_theme-light_wc6ff_16",
  "theme-dark": "_theme-dark_wc6ff_36",
  wrapper: wrapper$3
}, Wrapper$4 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: styles$d.wrapper,
    "data-testid": "ma-calculator-wrapper",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Screen$1, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Keypad, {})
    ]
  }
), CalculatorView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext$4.Provider, { value: calculatorDomain, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$4, {}) });
class CalendarRepository {
  constructor() {
    D(this, "date");
    D(this, "firstDayMonth");
    D(this, "lastDateMonth");
    D(this, "year");
    D(this, "month");
    D(this, "days");
    this.date = null, this.year = null, this.month = null, this.days = null, this.firstDayMonth = null, this.lastDateMonth = null;
  }
  initCalendar(r) {
    this.getDate(r), this.getFullYear(), this.getMonth(), this.getFirstDayMonth(), this.getLastDateMonth(), this.generateDays();
  }
  generateDays() {
    const r = [];
    if (this.date === null || this.firstDayMonth === null || this.lastDateMonth === null)
      throw new Error("Date not found");
    for (let y = this.firstDayMonth; y > 0; y--)
      r.push({
        status: "inactive",
        value: ""
      });
    for (let y = 1; y <= this.lastDateMonth; y++) {
      const _ = y === this.date.getDate() && this.month === (/* @__PURE__ */ new Date()).getMonth() && this.year === (/* @__PURE__ */ new Date()).getFullYear();
      r.push({
        status: _ ? "active" : "normal",
        value: String(y)
      });
    }
    this.days = r;
  }
  getDate(r) {
    this.date = r || /* @__PURE__ */ new Date();
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
class CalendarDomain {
  constructor() {
    D(this, "calendar", null);
    D(this, "year", null);
    D(this, "month", null);
    D(this, "calendarRepository", new CalendarRepository());
    makeAutoObservable(this);
  }
  generateCalendar(r) {
    this.calendarRepository.initCalendar(r || null), this.calendar = this.calendarRepository.days, this.year = this.calendarRepository.year, this.month = this.calendarRepository.month;
  }
  changeCalendarByYear() {
    if (!this.month && this.month !== 0 || !this.year)
      return;
    const r = new Date(this.year, this.month);
    this.generateCalendar(r);
  }
  changeCalendarByMonth(r) {
    if (!this.year)
      return;
    const y = new Date(this.year, r);
    this.generateCalendar(y);
  }
  increaseYear() {
    this.year && (this.year += 1, this.changeCalendarByYear());
  }
  decreaseYear() {
    this.year && (this.year -= 1, this.changeCalendarByYear());
  }
}
const calendarDomain = new CalendarDomain(), DomainContext$3 = createContext(calendarDomain);
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_158st_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_158st_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button_158st_96{display:flex;justify-content:center;align-items:center;font:400 11px/11px MSSansSerifMedium,sans-serif;border:none;border-radius:0;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised)}@media (hover: hover){._ds-button_158st_96{cursor:pointer}}._ds-button_158st_96:disabled{pointer-events:none;opacity:.5}._ds-button_158st_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._size-small_158st_120{width:16px;height:14px;padding:1px}._size-medium_158st_126{height:23px;min-width:75px;padding:0 12px}._size-medium_158st_126:focus{outline:1px dotted #000000;outline-offset:-4px}._size-medium_158st_126:not(:disabled):active{padding:2px 11px 0 13px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_12q8r_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_12q8r_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_12q8r_96{position:relative;display:flex;align-items:center;column-gap:6px}@media (hover: hover){._wrapper_12q8r_96:hover{cursor:pointer}}._disabled_12q8r_108{pointer-events:none;opacity:.5}._input_12q8r_113{position:absolute;width:1px;height:1px;background-color:transparent}._input_12q8r_113[disabled]{pointer-events:none}._icon_12q8r_123{width:12px;height:12px;display:flex;align-items:center}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pg4yx_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pg4yx_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._DSText_pg4yx_96{font:400 11px/13px MSSansSerifMedium,sans-serif;color:var(--text-color)}')), document.head.appendChild(t);
    }
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
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
var Ce;
function gr() {
  if (Ce)
    return z;
  Ce = 1;
  var t = o, r = Symbol.for("react.element"), y = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, k = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(W, $, q) {
    var H, O = {}, B = null, Z = null;
    q !== void 0 && (B = "" + q), $.key !== void 0 && (B = "" + $.key), $.ref !== void 0 && (Z = $.ref);
    for (H in $)
      _.call($, H) && !M.hasOwnProperty(H) && (O[H] = $[H]);
    if (W && W.defaultProps)
      for (H in $ = W.defaultProps, $)
        O[H] === void 0 && (O[H] = $[H]);
    return { $$typeof: r, type: W, key: B, ref: Z, props: O, _owner: k.current };
  }
  return z.Fragment = y, z.jsx = U, z.jsxs = U, z;
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
var ke;
function br() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var t = o, r = Symbol.for("react.element"), y = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), W = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), oe = Symbol.iterator, se = "@@iterator";
    function ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var l = oe && e[oe] || e[se];
      return typeof l == "function" ? l : null;
    }
    var ne = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function G(e) {
      {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), v = 1; v < l; v++)
          c[v - 1] = arguments[v];
        rt("error", e, c);
      }
    }
    function rt(e, l, c) {
      {
        var v = ne.ReactDebugCurrentFrame, E = v.getStackAddendum();
        E !== "" && (l += "%s", c = c.concat([E]));
        var R = c.map(function(S) {
          return String(S);
        });
        R.unshift("Warning: " + l), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var nt = !1, at = !1, ot = !1, st = !1, it = !1, Te;
    Te = Symbol.for("react.module.reference");
    function lt(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === M || it || e === k || e === q || e === H || st || e === Z || nt || at || ot || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === O || e.$$typeof === U || e.$$typeof === W || e.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Te || e.getModuleId !== void 0));
    }
    function ct(e, l, c) {
      var v = e.displayName;
      if (v)
        return v;
      var E = l.displayName || l.name || "";
      return E !== "" ? c + "(" + E + ")" : c;
    }
    function Re(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && G("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case y:
          return "Portal";
        case M:
          return "Profiler";
        case k:
          return "StrictMode";
        case q:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            var l = e;
            return Re(l) + ".Consumer";
          case U:
            var c = e;
            return Re(c._context) + ".Provider";
          case $:
            return ct(e, e.render, "ForwardRef");
          case O:
            var v = e.displayName || null;
            return v !== null ? v : X(e.type) || "Memo";
          case B: {
            var E = e, R = E._payload, S = E._init;
            try {
              return X(S(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, ue = 0, je, Me, $e, Ne, Ae, Ie, Fe;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function ut() {
      {
        if (ue === 0) {
          je = console.log, Me = console.info, $e = console.warn, Ne = console.error, Ae = console.group, Ie = console.groupCollapsed, Fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Le,
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
        ue++;
      }
    }
    function dt() {
      {
        if (ue--, ue === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, e, {
              value: je
            }),
            info: ae({}, e, {
              value: Me
            }),
            warn: ae({}, e, {
              value: $e
            }),
            error: ae({}, e, {
              value: Ne
            }),
            group: ae({}, e, {
              value: Ae
            }),
            groupCollapsed: ae({}, e, {
              value: Ie
            }),
            groupEnd: ae({}, e, {
              value: Fe
            })
          });
        }
        ue < 0 && G("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = ne.ReactCurrentDispatcher, ye;
    function fe(e, l, c) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (E) {
            var v = E.stack.trim().match(/\n( *(at )?)/);
            ye = v && v[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var ve = !1, pe;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new ft();
    }
    function Ue(e, l) {
      if (!e || ve)
        return "";
      {
        var c = pe.get(e);
        if (c !== void 0)
          return c;
      }
      var v;
      ve = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = be.current, be.current = null, ut();
      try {
        if (l) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (Q) {
              v = Q;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (Q) {
              v = Q;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            v = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && v && typeof Q.stack == "string") {
          for (var g = Q.stack.split(`
`), Y = v.stack.split(`
`), F = g.length - 1, L = Y.length - 1; F >= 1 && L >= 0 && g[F] !== Y[L]; )
            L--;
          for (; F >= 1 && L >= 0; F--, L--)
            if (g[F] !== Y[L]) {
              if (F !== 1 || L !== 1)
                do
                  if (F--, L--, L < 0 || g[F] !== Y[L]) {
                    var K = `
` + g[F].replace(" at new ", " at ");
                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && pe.set(e, K), K;
                  }
                while (F >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        ve = !1, be.current = R, dt(), Error.prepareStackTrace = E;
      }
      var le = e ? e.displayName || e.name : "", tt = le ? fe(le) : "";
      return typeof e == "function" && pe.set(e, tt), tt;
    }
    function pt(e, l, c) {
      return Ue(e, !1);
    }
    function mt(e) {
      var l = e.prototype;
      return !!(l && l.isReactComponent);
    }
    function me(e, l, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ue(e, mt(e));
      if (typeof e == "string")
        return fe(e);
      switch (e) {
        case q:
          return fe("Suspense");
        case H:
          return fe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return pt(e.render);
          case O:
            return me(e.type, l, c);
          case B: {
            var v = e, E = v._payload, R = v._init;
            try {
              return me(R(E), l, c);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, We = {}, He = ne.ReactDebugCurrentFrame;
    function xe(e) {
      if (e) {
        var l = e._owner, c = me(e.type, e._source, l ? l.type : null);
        He.setExtraStackFrame(c);
      } else
        He.setExtraStackFrame(null);
    }
    function ht(e, l, c, v, E) {
      {
        var R = Function.call.bind(he);
        for (var S in e)
          if (R(e, S)) {
            var g = void 0;
            try {
              if (typeof e[S] != "function") {
                var Y = Error((v || "React class") + ": " + c + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              g = e[S](l, S, v, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              g = F;
            }
            g && !(g instanceof Error) && (xe(E), G("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", c, S, typeof g), xe(null)), g instanceof Error && !(g.message in We) && (We[g.message] = !0, xe(E), G("Failed %s type: %s", c, g.message), xe(null));
          }
      }
    }
    var xt = Array.isArray;
    function _e(e) {
      return xt(e);
    }
    function bt(e) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, c = l && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function yt(e) {
      try {
        return Be(e), !1;
      } catch {
        return !0;
      }
    }
    function Be(e) {
      return "" + e;
    }
    function Ge(e) {
      if (yt(e))
        return G("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(e)), Be(e);
    }
    var de = ne.ReactCurrentOwner, vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, qe, ge;
    ge = {};
    function _t(e) {
      if (he.call(e, "ref")) {
        var l = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function gt(e) {
      if (he.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, l) {
      if (typeof e.ref == "string" && de.current && l && de.current.stateNode !== l) {
        var c = X(de.current.type);
        ge[c] || (G('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(de.current.type), e.ref), ge[c] = !0);
      }
    }
    function St(e, l) {
      {
        var c = function() {
          Ye || (Ye = !0, G("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Et(e, l) {
      {
        var c = function() {
          qe || (qe = !0, G("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Tt = function(e, l, c, v, E, R, S) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: l,
        ref: c,
        props: S,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Rt(e, l, c, v, E) {
      {
        var R, S = {}, g = null, Y = null;
        c !== void 0 && (Ge(c), g = "" + c), gt(l) && (Ge(l.key), g = "" + l.key), _t(l) && (Y = l.ref, wt(l, E));
        for (R in l)
          he.call(l, R) && !vt.hasOwnProperty(R) && (S[R] = l[R]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (R in F)
            S[R] === void 0 && (S[R] = F[R]);
        }
        if (g || Y) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && St(S, L), Y && Et(S, L);
        }
        return Tt(e, g, Y, E, v, de.current, S);
      }
    }
    var we = ne.ReactCurrentOwner, Je = ne.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var l = e._owner, c = me(e.type, e._source, l ? l.type : null);
        Je.setExtraStackFrame(c);
      } else
        Je.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ke() {
      {
        if (we.current) {
          var e = X(we.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kt(e) {
      {
        if (e !== void 0) {
          var l = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + l + ":" + c + ".";
        }
        return "";
      }
    }
    var Ze = {};
    function jt(e) {
      {
        var l = Ke();
        if (!l) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (l = `

Check the top-level render call using <` + c + ">.");
        }
        return l;
      }
    }
    function Xe(e, l) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = jt(l);
        if (Ze[c])
          return;
        Ze[c] = !0;
        var v = "";
        e && e._owner && e._owner !== we.current && (v = " It was passed a child from " + X(e._owner.type) + "."), ie(e), G('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, v), ie(null);
      }
    }
    function Qe(e, l) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var c = 0; c < e.length; c++) {
            var v = e[c];
            Ee(v) && Xe(v, l);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = ce(e);
          if (typeof E == "function" && E !== e.entries)
            for (var R = E.call(e), S; !(S = R.next()).done; )
              Ee(S.value) && Xe(S.value, l);
        }
      }
    }
    function Ct(e) {
      {
        var l = e.type;
        if (l == null || typeof l == "string")
          return;
        var c;
        if (typeof l == "function")
          c = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === O))
          c = l.propTypes;
        else
          return;
        if (c) {
          var v = X(l);
          ht(c, e.props, "prop", v, e);
        } else if (l.PropTypes !== void 0 && !Se) {
          Se = !0;
          var E = X(l);
          G("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && G("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dt(e) {
      {
        for (var l = Object.keys(e.props), c = 0; c < l.length; c++) {
          var v = l[c];
          if (v !== "children" && v !== "key") {
            ie(e), G("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ie(null);
            break;
          }
        }
        e.ref !== null && (ie(e), G("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    function et(e, l, c, v, E, R) {
      {
        var S = lt(e);
        if (!S) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = kt(E);
          Y ? g += Y : g += Ke();
          var F;
          e === null ? F = "null" : _e(e) ? F = "array" : e !== void 0 && e.$$typeof === r ? (F = "<" + (X(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, G("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, g);
        }
        var L = Rt(e, l, c, E, R);
        if (L == null)
          return L;
        if (S) {
          var K = l.children;
          if (K !== void 0)
            if (v)
              if (_e(K)) {
                for (var le = 0; le < K.length; le++)
                  Qe(K[le], e);
                Object.freeze && Object.freeze(K);
              } else
                G("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(K, e);
        }
        return e === _ ? Dt(L) : Ct(L), L;
      }
    }
    function Mt(e, l, c) {
      return et(e, l, c, !0);
    }
    function $t(e, l, c) {
      return et(e, l, c, !1);
    }
    var Ot = $t, Nt = Mt;
    I.Fragment = _, I.jsx = Ot, I.jsxs = Nt;
  }()), I;
}
process.env.NODE_ENV === "production" ? te.exports = gr() : te.exports = br();
var a$1 = te.exports;
const De = {
  "theme-light": "_theme-light_158st_16",
  "theme-dark": "_theme-dark_158st_36",
  "ds-button": "_ds-button_158st_96",
  "size-small": "_size-small_158st_120",
  "size-medium": "_size-medium_158st_126"
}, Wr = ({
  size: t = "medium",
  disabled: r = !1,
  onClick: y,
  text: _,
  id: k,
  isTextVisible: M = !0,
  iconLeft: U,
  iconRight: W
}) => /* @__PURE__ */ a$1.jsxs(
  "button",
  {
    "aria-label": M ? void 0 : _,
    className: `${De["ds-button"]} ${De[`size-${t}`]}`,
    "data-testid": `${k}-button`,
    type: "button",
    disabled: r,
    onClick: y,
    children: [
      U,
      M && _,
      W
    ]
  }
), ee = {
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
  className: r = "",
  direction: y,
  disabled: _,
  id: k,
  onClick: M,
  size: U
}) {
  return /* @__PURE__ */ a$1.jsx(
    "button",
    {
      "aria-label": t,
      className: `
				${ee["ds-button-arrow"]}
				${ee[`arrow-${y}`]}
				${ee[`size-${U}`]}
				${r}
			`,
      "data-testid": `ds-button-arrow-${k}-${y}`,
      disabled: _,
      type: "button",
      onClick: M
    }
  );
}
const Rr = "_frame_hpida_96", yr = "_title_hpida_104", Pe = {
  "theme-light": "_theme-light_hpida_16",
  "theme-dark": "_theme-dark_hpida_36",
  frame: Rr,
  title: yr
};
function Yr({ children: t, className: r = "", id: y, title: _ }) {
  return /* @__PURE__ */ a$1.jsxs(
    "div",
    {
      className: `${Pe.frame} ${r}`,
      "data-testid": `ds-frame-${y}`,
      children: [
        _ && /* @__PURE__ */ a$1.jsx(
          ze,
          {
            className: Pe.title,
            text: _,
            id: `frame-${y}`
          }
        ),
        t
      ]
    }
  );
}
const xr = ({ isChecked: t = !1 }) => t ? /* @__PURE__ */ a$1.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    role: "img",
    "aria-label": "Checked radio button",
    children: [
      /* @__PURE__ */ a$1.jsx("title", { children: "Checked radio button" }),
      /* @__PURE__ */ a$1.jsxs("g", { className: "layer", children: [
        /* @__PURE__ */ a$1.jsx("title", { children: "Layer 1" }),
        /* @__PURE__ */ a$1.jsx(
          "path",
          {
            clipRule: "evenodd",
            d: "m8,0l-4,0l0,1l-2,0l0,1l-1,0l0,2l-1,0l0,4l1,0l0,2l1,0l0,-2l-1,0l0,-4l1,0l0,-2l2,0l0,-1l4,0l0,1l2,0l0,-1l-2,0l0,-1z",
            fill: "gray",
            fillRule: "evenodd",
            id: "svg_1"
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          "path",
          {
            clipRule: "evenodd",
            d: "m8,1l-4,0l0,1l-2,0l0,2l-1,0l0,4l1,0l0,1l1,0l0,-1l-1,0l0,-4l1,0l0,-1l1,0l0,-1l4,0l0,1l2,0l0,-1l-2,0l0,-1z",
            fill: "#000",
            fillRule: "evenodd",
            id: "svg_2"
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          "path",
          {
            clipRule: "evenodd",
            d: "m9,3l1,0l0,1l-1,0l0,-1zm1,5l0,-4l1,0l0,4l-1,0zm-2,2l0,-1l1,0l0,-1l1,0l0,2l-2,0zm-4,0l0,1l4,0l0,-1l-4,0zm0,0l0,-1l-2,0l0,1l2,0z",
            fill: "#DFDFDF",
            fillRule: "evenodd",
            id: "svg_3"
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          "path",
          {
            clipRule: "evenodd",
            d: "m11,2l-1,0l0,2l1,0l0,4l-1,0l0,2l-2,0l0,1l-4,0l0,-1l-2,0l0,1l2,0l0,1l4,0l0,-1l2,0l0,-1l1,0l0,-2l1,0l0,-4l-1,0l0,-2z",
            fill: "#fff",
            fillRule: "evenodd",
            id: "svg_4"
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          "path",
          {
            clipRule: "evenodd",
            d: "m4,2l4,0l0,1l1,0l0,1l1,0l0,4l-1,0l0,1l-1,0l0,1l-4,0l0,-1l-1,0l0,-1l-1,0l0,-4l1,0l0,-1l1,0l0,-1z",
            fill: "#fff",
            fillRule: "evenodd",
            id: "svg_5"
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          "use",
          {
            id: "svg_7",
            x: "3.88",
            xlinkHref: "#svg_6",
            y: "3.88"
          }
        )
      ] }),
      /* @__PURE__ */ a$1.jsx("defs", { children: /* @__PURE__ */ a$1.jsx(
        "symbol",
        {
          xmlns: "http://www.w3.org/2000/svg",
          height: "4",
          id: "svg_6",
          width: "4",
          children: /* @__PURE__ */ a$1.jsx(
            "path",
            {
              clipRule: "evenodd",
              d: "m3,0l-2,0l0,1l-1,0l0,2l1,0l0,1l2,0l0,-1l1,0l0,-2l-1,0l0,-1z",
              fill: "black",
              fillRule: "evenodd"
            }
          )
        }
      ) })
    ]
  }
) : t ? null : /* @__PURE__ */ a$1.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    role: "img",
    "aria-label": "Unchecked radio button",
    children: [
      /* @__PURE__ */ a$1.jsx("title", { children: "Unchecked radio button" }),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z",
          fill: "gray"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z",
          fill: "#000"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z",
          fill: "#DFDFDF"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z",
          fill: "#fff"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z",
          fill: "#fff"
        }
      )
    ]
  }
), wr = () => /* @__PURE__ */ a$1.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "17",
    fill: "none",
    role: "img",
    "aria-label": "Icon select button",
    children: [
      /* @__PURE__ */ a$1.jsx("title", { children: "Icon select button" }),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fill: "#DFDFDF",
          fillRule: "evenodd",
          d: "M15 0H0v16h1V1h14V0z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M2 1H1v14h1V2h12V1H2z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fill: "#000",
          fillRule: "evenodd",
          d: "M16 17H0v-1h15V0h1v17z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fill: "gray",
          fillRule: "evenodd",
          d: "M15 1h-1v14H1v1h14V1z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fill: "silver",
          d: "M2 2h12v13H2z"
        }
      ),
      /* @__PURE__ */ a$1.jsx(
        "path",
        {
          fill: "#000",
          fillRule: "evenodd",
          d: "M11 6H4v1h1v1h1v1h1v1h1V9h1V8h1V7h1V6z",
          clipRule: "evenodd"
        }
      )
    ]
  }
), jr = "_input_e0ixd_111", Er = "_label_e0ixd_112", re = {
  "theme-light": "_theme-light_e0ixd_16",
  "theme-dark": "_theme-dark_e0ixd_36",
  "wrapper-horizontal": "_wrapper-horizontal_e0ixd_96",
  "wrapper-vertical": "_wrapper-vertical_e0ixd_102",
  input: jr,
  label: Er
};
function Sr({ initialValue: t, onChange: r }) {
  const [y, _] = useState(t);
  return useEffect(() => {
    _(t);
  }, [t]), { value: y, handleInputChange: (k) => {
    const M = k.target.value;
    _(M), r && r(M);
  } };
}
function $r({
  className: t = "",
  type: r = "text",
  id: y,
  disabled: _ = !1,
  readonly: k = !1,
  initialValue: M = "",
  labelName: U,
  wrapperLayout: W = "vertical",
  min: $,
  max: q,
  onChange: H
}) {
  const { value: O, handleInputChange: B } = Sr({ initialValue: M, onChange: H }), Z = `ds-input-${y}`;
  return /* @__PURE__ */ a$1.jsxs(
    "div",
    {
      className: `${re[`wrapper-${W}`]} ${t}`,
      "data-testid": Z,
      children: [
        U && /* @__PURE__ */ a$1.jsx(
          "label",
          {
            className: re.label,
            "data-testid": `ds-input-label-${y}`,
            htmlFor: Z,
            children: U
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          "input",
          {
            id: Z,
            className: re.input,
            "data-testid": `ds-input-input-${y}`,
            type: r,
            disabled: _,
            readOnly: k,
            value: O,
            min: $ ?? void 0,
            max: q ?? void 0,
            name: Z,
            onChange: B
          }
        )
      ]
    }
  );
}
const Tr = "_wrapper_12q8r_96", Cr = "_disabled_12q8r_108", kr = "_input_12q8r_113", Dr = "_icon_12q8r_123", N = {
  "theme-light": "_theme-light_12q8r_16",
  "theme-dark": "_theme-dark_12q8r_36",
  wrapper: Tr,
  disabled: Cr,
  input: kr,
  icon: Dr
};
function Or({ initialChecked: t, onChange: r }) {
  const [y, _] = useState(t);
  return useEffect(() => {
    _(t);
  }, [t]), {
    checked: y,
    handleChange: (k) => {
      r && r(), _(k.target.checked);
    }
  };
}
const qr = ({
  initialChecked: t = !1,
  disabled: r = !1,
  id: y,
  onChange: _,
  name: k,
  text: M
}) => {
  const { checked: U, handleChange: W } = Or({
    initialChecked: t,
    onChange: _
  });
  return /* @__PURE__ */ a$1.jsxs(
    "label",
    {
      "aria-label": M.visible ? void 0 : M.content,
      className: `${N.wrapper} ${r ? N.disabled : ""}`,
      "data-testid": `${y}-radio`,
      children: [
        /* @__PURE__ */ a$1.jsx(
          "input",
          {
            className: N.input,
            checked: U,
            "data-testid": `${y}-radio-input`,
            disabled: r,
            name: k,
            type: "radio",
            value: y,
            onChange: W
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          "span",
          {
            className: N.icon,
            "data-testid": `${y}-radio-icon`,
            children: /* @__PURE__ */ a$1.jsx(xr, { isChecked: U })
          }
        ),
        M.visible && /* @__PURE__ */ a$1.jsx(
          ze,
          {
            className: N.text,
            id: y,
            text: M.content
          }
        )
      ]
    }
  );
}, Pr = "_wrapper_1id5f_96", Vr = "_label_1id5f_100", Fr = "_select_1id5f_105", zr = "_arrow_1id5f_115", A = {
  "theme-light": "_theme-light_1id5f_16",
  "theme-dark": "_theme-dark_1id5f_36",
  wrapper: Pr,
  label: Vr,
  select: Fr,
  arrow: zr
};
function Ir(t) {
  const [r, y] = useState(t);
  return {
    value: r,
    handleChange: (_) => {
      y(_.target.value);
    }
  };
}
function Lr({
  className: t = "",
  id: r,
  required: y = !1,
  disabled: _ = !1,
  modelValue: k,
  options: M,
  labelName: U,
  onSelect: W
}) {
  const { value: $, handleChange: q } = Ir(k), H = (O) => {
    q(O), W(O);
  };
  return /* @__PURE__ */ a$1.jsxs("div", { className: `${A.wrapper} ${t}`, children: [
    U && /* @__PURE__ */ a$1.jsx(
      "label",
      {
        className: A.label,
        "data-testid": `ds-select-label-${r}`,
        htmlFor: r,
        children: U
      }
    ),
    /* @__PURE__ */ a$1.jsx(
      "select",
      {
        className: A.select,
        "data-testid": `ds-select-select-${r}`,
        disabled: _,
        id: r,
        name: r,
        onChange: H,
        required: y,
        value: $,
        children: M.map((O, B) => /* @__PURE__ */ a$1.jsx(
          "option",
          {
            className: A.option,
            "data-testid": `ds-select-option-${r}-${B}`,
            value: O.value,
            children: O.name
          },
          `${r}-${O.value}`
        ))
      }
    ),
    /* @__PURE__ */ a$1.jsx("span", { className: A.arrow, children: /* @__PURE__ */ a$1.jsx(wr, {}) })
  ] });
}
const Ve = {
  "theme-light": "_theme-light_p8wyg_16",
  "theme-dark": "_theme-dark_p8wyg_36",
  "ds-stepper": "_ds-stepper_p8wyg_96",
  "state-disabled": "_state-disabled_p8wyg_111"
};
function Nr({
  modelValue: t,
  onIncrease: r,
  onDecrease: y
}) {
  const [_, k] = useState(t);
  return useEffect(() => {
    k(t);
  }, [t]), { value: _, handleIncrease: () => {
    r && r();
  }, handleDecrease: () => {
    y && y();
  } };
}
function Ur({
  className: t = "",
  id: r,
  modelValue: y,
  disabled: _ = !1,
  onIncrease: k,
  onDecrease: M
}) {
  const { value: U, handleIncrease: W, handleDecrease: $ } = Nr({
    modelValue: y,
    onIncrease: k,
    onDecrease: M
  });
  return /* @__PURE__ */ a$1.jsxs(
    "div",
    {
      className: `
        ${Ve["ds-stepper"]}
        ${_ ? Ve["state-disabled"] : ""}
        ${t}
      `,
      children: [
        /* @__PURE__ */ a$1.jsx(
          $r,
          {
            id: `stepper-${r}`,
            initialValue: U,
            readonly: !0
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          Oe,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: _,
            id: r,
            size: "small",
            onClick: W
          }
        ),
        /* @__PURE__ */ a$1.jsx(
          Oe,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: _,
            id: r,
            size: "small",
            onClick: $
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
function ze({ className: t = "", id: r, text: y }) {
  return /* @__PURE__ */ a$1.jsx(
    "p",
    {
      className: `${Hr.DSText} ${t}`,
      "data-testid": `ds-text-${r}`,
      children: y
    }
  );
}
function useSyncLang() {
  const { i18n: t } = useTranslation();
  useEffect(() => {
    const r = document.documentElement.lang;
    r && t.changeLanguage(r);
  }), useEffect(() => {
    const r = new MutationObserver((y) => {
      for (const _ of y)
        _.type === "attributes" && _.attributeName === "lang" && t.changeLanguage(_.target.lang);
    });
    return r.observe(document.documentElement, { attributes: !0 }), () => {
      r.disconnect();
    };
  }, [t]);
}
const days = "_days_1xeii_96", styles$c = {
  "theme-light": "_theme-light_1xeii_16",
  "theme-dark": "_theme-dark_1xeii_36",
  days
};
function useCalendar() {
  return {
    calendarDomain: useContext(DomainContext$3)
  };
}
function useDays() {
  const { calendarDomain: t } = useCalendar(), { t: r } = useTranslation(), y = useMemo(
    () => {
      var k;
      return (k = t.calendar) == null ? void 0 : k.map((M, U) => ({
        id: U,
        value: M.value,
        status: M.status
      }));
    },
    [t.calendar]
  ), _ = useMemo(
    () => [
      { id: 0, name: r("ma-calendar.days.sunday") },
      { id: 1, name: r("ma-calendar.days.monday") },
      { id: 2, name: r("ma-calendar.days.tuesday") },
      { id: 3, name: r("ma-calendar.days.wednesday") },
      { id: 4, name: r("ma-calendar.days.thursday") },
      { id: 5, name: r("ma-calendar.days.friday") },
      { id: 6, name: r("ma-calendar.days.saturday") }
    ],
    [r]
  );
  return {
    monthDays: y,
    weekDays: _
  };
}
const day$1 = "_day_12et3_102", styles$b = {
  "theme-light": "_theme-light_12et3_16",
  "theme-dark": "_theme-dark_12et3_36",
  "month-days": "_month-days_12et3_96",
  day: day$1,
  "day-active": "_day-active_12et3_107"
}, MonthDays = observer(() => {
  const { monthDays: t } = useDays();
  return t && /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: styles$b["month-days"],
      "data-testid": "calendar-view-days",
      children: t.map(
        (r, y) => r.value === "" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: styles$b.day,
            "data-testid": `calendar-month-days-empty-${y}`
          },
          `calendar-month-days-day-${r.id}`
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `
                        ${styles$b.day}
                        ${r.status === "active" ? styles$b["day-active"] : ""}
                    `,
            "data-testid": `calendar-month-days-day-${r.value}`,
            type: "button",
            children: r.value
          },
          `calendar-month-days-day-${r.id}`
        )
      )
    }
  );
}), day = "_day_1v33v_104", styles$a = {
  "theme-light": "_theme-light_1v33v_16",
  "theme-dark": "_theme-dark_1v33v_36",
  "week-days": "_week-days_1v33v_96",
  day
}, WeekDays = observer(() => {
  const { weekDays: t } = useDays();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$a["week-days"], children: t.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: styles$a.day,
      "data-testid": `calendar-week-days-day-${r.id}`,
      children: r.name
    },
    `calendar-week-days-day-${r.id}`
  )) });
}), Days = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$c.days, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(WeekDays, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(MonthDays, {})
] });
function useMonthSwitcher() {
  const { t } = useTranslation(), { calendarDomain: r } = useCalendar(), y = (k) => {
    r.changeCalendarByMonth(Number(k.currentTarget.value));
  }, _ = useMemo(
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
    handleSelectChange: y,
    month: r.month,
    months: _.months
  };
}
const MonthSwitcher = observer(() => {
  const { handleSelectChange: t, month: r, months: y } = useMonthSwitcher();
  return r !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Lr,
    {
      id: "month-switcher",
      modelValue: r,
      options: y,
      onSelect: t
    }
  );
});
function useYearSwitcher() {
  const { calendarDomain: t } = useCalendar();
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
  const { decreaseYear: t, increaseYear: r, year: y } = useYearSwitcher();
  return y && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ur,
    {
      id: "calendar-year",
      modelValue: y,
      onIncrease: r,
      onDecrease: t
    }
  );
});
function useWrapper$1() {
  const { t } = useTranslation(), { calendarDomain: r } = useCalendar();
  return useEffect(() => {
    r.generateCalendar();
  }), {
    title: useMemo(
      () => ({
        title: t("ma-calendar.wrapper.title")
      }),
      [t]
    ).title
  };
}
const wrapper$2 = "_wrapper_s3u64_96", styles$9 = {
  "theme-light": "_theme-light_s3u64_16",
  "theme-dark": "_theme-dark_s3u64_36",
  wrapper: wrapper$2
}, Wrapper$3 = observer(() => {
  const { title: t } = useWrapper$1();
  return useSyncLang(), /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Yr,
    {
      className: styles$9.wrapper,
      id: "calculator",
      title: t,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MonthSwitcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YearSwitcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Days, {})
      ]
    }
  );
}), CalendarView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext$3.Provider, { value: calendarDomain, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$3, {}) });
var i = Object.defineProperty, a = (t, r, y) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: y }) : t[r] = y, n = (t, r, y) => (a(t, typeof r != "symbol" ? r + "" : r, y), y);
class d {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class u {
  constructor() {
    n(this, "appControllerRepository"), this.appControllerRepository = new d();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class ShutdownRepository {
  constructor() {
    D(this, "appController");
    this.appController = new u();
  }
  restartApplication() {
    this.appController.restartApplication();
  }
  shutdownApplication() {
    this.appController.shutdownApplication();
  }
}
var EShutdownPresets = /* @__PURE__ */ ((t) => (t.RESTART = "restart", t.SHUTDOWN = "shutdown", t))(EShutdownPresets || {});
class ShutdownDomain {
  constructor() {
    D(this, "shutdownRepository");
    D(this, "preset", EShutdownPresets.SHUTDOWN);
    makeAutoObservable(this), this.shutdownRepository = new ShutdownRepository();
  }
  changePreset(r) {
    this.preset !== r && (this.preset = r);
  }
  restartApplication() {
    this.shutdownRepository.restartApplication();
  }
  shutdownApplication() {
    this.shutdownRepository.shutdownApplication();
  }
}
const shutdownDomain = new ShutdownDomain(), DomainContext$2 = createContext(shutdownDomain), useCancel = () => {
  const { t } = useTranslation();
  return {
    translations: useMemo(() => ({
      text: t("ma-shutdown.cancel")
    }), [t])
  };
}, Cancel = () => {
  const { translations: t } = useCancel();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Wr,
    {
      id: "ma-shutdown-controller-cancel",
      text: t.text
    }
  );
}, controller$1 = "_controller_1dsur_96", styles$8 = {
  "theme-light": "_theme-light_1dsur_16",
  "theme-dark": "_theme-dark_1dsur_36",
  controller: controller$1
};
function useShutdown() {
  return {
    shutdownDomain: useContext(DomainContext$2)
  };
}
const useOk = () => {
  const { t } = useTranslation(), { shutdownDomain: r } = useShutdown(), y = useMemo(() => ({
    text: t("ma-shutdown.ok")
  }), [t]);
  return {
    onClick: () => {
      r.preset === EShutdownPresets.SHUTDOWN && r.shutdownApplication(), r.preset === EShutdownPresets.RESTART && r.restartApplication();
    },
    translations: y
  };
}, Ok = observer(() => {
  const { onClick: t, translations: r } = useOk();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Wr,
    {
      id: "ma-shutdown-controller-ok",
      onClick: t,
      text: r.text
    }
  );
}), Controller$1 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: styles$8.controller,
    "data-testid": "ma-shutdown-controller",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ok, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cancel, {})
    ]
  }
), description = "_description_5pr9f_96", styles$7 = {
  "theme-light": "_theme-light_5pr9f_16",
  "theme-dark": "_theme-dark_5pr9f_36",
  description
};
function useDescription() {
  const { t } = useTranslation();
  return {
    translations: useMemo(() => ({
      description: t("ma-shutdown.description")
    }), [t])
  };
}
const Description = () => {
  const { translations: t } = useDescription();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$7.description, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        width: "32",
        height: "32",
        src: "/icons/applications/mycomputer.png",
        alt: "",
        "data-test-id": "ma-shutdown-description-icon"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ze,
      {
        id: "ma-shutdown-description-text",
        text: t.description
      }
    )
  ] });
}, presets$1 = "_presets_uwzih_96", styles$6 = {
  "theme-light": "_theme-light_uwzih_16",
  "theme-dark": "_theme-dark_uwzih_36",
  presets: presets$1
}, usePresets$1 = () => {
  const { t } = useTranslation(), { shutdownDomain: r } = useShutdown(), [y, _] = useState(
    r.preset
  );
  return {
    presets: useMemo(() => [
      {
        preset: EShutdownPresets.SHUTDOWN,
        content: t("ma-shutdown.shutdown"),
        id: "ma-shutdown-preset-shutdown"
      },
      {
        preset: EShutdownPresets.RESTART,
        content: t("ma-shutdown.restart"),
        id: "ma-shutdown-preset-restart"
      }
    ], [t]),
    setPreset: (U) => {
      r.changePreset(U), _(U);
    },
    selectedPreset: y
  };
}, Presets$1 = observer(() => {
  const { presets: t, selectedPreset: r, setPreset: y } = usePresets$1();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6.presets, children: t.map((_) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    qr,
    {
      initialChecked: _.preset === r,
      id: _.id,
      name: "ma-timer-presets",
      onChange: () => y(_.preset),
      text: {
        content: _.content,
        visible: !0
      }
    },
    _.id
  )) });
}), wrapper$1 = "_wrapper_wbu18_96", styles$5 = {
  "theme-light": "_theme-light_wbu18_16",
  "theme-dark": "_theme-dark_wbu18_36",
  wrapper: wrapper$1
}, Wrapper$2 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5.wrapper, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Description, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Presets$1, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Controller$1, {})
] }), ShutdownView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext$2.Provider, { value: shutdownDomain, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$2, {}) });
var ETimerPresets = /* @__PURE__ */ ((t) => (t.THREE_MINUTES = "3-min", t.FIVE_MINUTES = "5-min", t.TEN_MINUTES = "10-min", t.FIFTEEN_MINUTES = "15-min", t.CUSTOM_MINUTES = "custom", t))(ETimerPresets || {}), ETimerTime = /* @__PURE__ */ ((t) => (t.HOURS = "hours", t.MINUTES = "minutes", t.SECONDS = "seconds", t))(ETimerTime || {}), ETimerStatus = /* @__PURE__ */ ((t) => (t.PLAY = "play", t.STOP = "stop", t.RESET = "reset", t))(ETimerStatus || {});
class TimerControllerDomain {
  constructor(r) {
    D(this, "timerDomain");
    D(this, "increaseSeconds", () => {
      this.timerDomain.time.seconds !== 59 && this.timerDomain.addTime(ETimerTime.SECONDS, 1);
    });
    D(this, "decreaseSeconds", () => {
      this.timerDomain.time.seconds !== 0 && this.timerDomain.subtractTime(ETimerTime.SECONDS, 1);
    });
    D(this, "increaseMinutes", () => {
      this.timerDomain.time.minutes !== 59 && this.timerDomain.addTime(ETimerTime.MINUTES, 1);
    });
    D(this, "decreaseMinutes", () => {
      this.timerDomain.time.minutes !== 0 && this.timerDomain.subtractTime(ETimerTime.MINUTES, 1);
    });
    D(this, "increaseHours", () => {
      this.timerDomain.time.hours !== 59 && this.timerDomain.addTime(ETimerTime.HOURS, 1);
    });
    D(this, "decreaseHours", () => {
      this.timerDomain.time.hours !== 0 && this.timerDomain.subtractTime(ETimerTime.HOURS, 1);
    });
    this.timerDomain = r, makeAutoObservable(this);
  }
}
class TimerPlayerDomain {
  constructor(r) {
    D(this, "timerDomain");
    D(this, "interval", null);
    D(this, "start", () => {
      this.timerDomain.setStatus(ETimerStatus.PLAY), this.interval = setInterval(() => {
        this.timerDomain.time.hours === 0 && this.timerDomain.time.minutes === 0 && this.timerDomain.time.seconds === 0 && this.reset(), this.timerDomain.time.hours >= 1 && this.timerDomain.time.minutes === 0 && this.timerDomain.time.seconds === 0 ? (this.timerDomain.time.hours--, this.timerDomain.time.minutes = 59, this.timerDomain.time.seconds = 59) : this.timerDomain.time.seconds === 0 && this.timerDomain.time.minutes >= 1 ? (this.timerDomain.time.seconds = 59, this.timerDomain.time.minutes--) : this.timerDomain.time.seconds--;
      }, 1e3);
    });
    D(this, "stop", () => {
      this.timerDomain.setStatus(ETimerStatus.STOP), this.clearTimerInterval();
    });
    D(this, "reset", () => {
      this.timerDomain.setStatus(ETimerStatus.RESET), this.clearTimerInterval(), this.restartTime();
    });
    D(this, "clearTimerInterval", () => {
      this.interval && clearInterval(this.interval);
    });
    D(this, "restartTime", () => {
      this.timerDomain.time.hours = 0, this.timerDomain.time.minutes = 0, this.timerDomain.time.seconds = 0;
    });
    this.timerDomain = r, makeAutoObservable(this);
  }
}
class TimerPresetsDomain {
  constructor(r) {
    D(this, "preset", ETimerPresets.CUSTOM_MINUTES);
    D(this, "timerDomain");
    D(this, "presetTimes", {
      [ETimerPresets.CUSTOM_MINUTES]: 0,
      [ETimerPresets.THREE_MINUTES]: 3,
      [ETimerPresets.FIVE_MINUTES]: 5,
      [ETimerPresets.TEN_MINUTES]: 10,
      [ETimerPresets.FIFTEEN_MINUTES]: 15
    });
    D(this, "setPreset", (r) => {
      this.setPresetStatus(r), this.resetSecondsAndHours(), this.setMinutes(r);
    });
    D(this, "setMinutes", (r) => {
      this.timerDomain.setTime(ETimerTime.MINUTES, this.presetTimes[r]);
    });
    D(this, "setPresetStatus", (r) => {
      this.preset !== r && (this.preset = r);
    });
    D(this, "resetSecondsAndHours", () => {
      this.timerDomain.time.seconds !== 0 && this.timerDomain.setTime(ETimerTime.SECONDS, 0), this.timerDomain.time.hours !== 0 && this.timerDomain.setTime(ETimerTime.HOURS, 0);
    });
    this.timerDomain = r, makeAutoObservable(this);
  }
}
class TimerDomain {
  constructor() {
    D(this, "controllerDomain");
    D(this, "playerDomain");
    D(this, "presetsDomain");
    D(this, "time", {
      seconds: 0,
      minutes: 0,
      hours: 0
    });
    D(this, "status", ETimerStatus.RESET);
    D(this, "addTime", (r, y) => {
      this.time[r] += y;
    });
    D(this, "subtractTime", (r, y) => {
      this.time[r] -= y;
    });
    D(this, "setTime", (r, y) => {
      this.time[r] = y;
    });
    D(this, "setStatus", (r) => {
      this.status = r;
    });
    makeAutoObservable(this), this.controllerDomain = new TimerControllerDomain(this), this.playerDomain = new TimerPlayerDomain(this), this.presetsDomain = new TimerPresetsDomain(this);
  }
}
const timerDomain = new TimerDomain(), DomainContext$1 = createContext(timerDomain), controller = "_controller_15w9q_96", styles$4 = {
  "theme-light": "_theme-light_15w9q_16",
  "theme-dark": "_theme-dark_15w9q_36",
  controller
};
var State = /* @__PURE__ */ ((t) => (t.ACTIVE = "active", t.DISABLED = "disabled", t.IDLE = "idle", t.LOADING = "loading", t))(State || {});
function addZeroBeforeNumber(t, r) {
  return t < r ? `0${t}` : String(t);
}
function useTimer() {
  return {
    timerDomain: useContext(DomainContext$1)
  };
}
function useController() {
  const { timerDomain: t } = useTimer(), y = (t.presetsDomain.preset !== ETimerPresets.CUSTOM_MINUTES ? State.DISABLED : State.ACTIVE) === State.DISABLED;
  return {
    hours: t.time.hours,
    minutes: t.time.minutes,
    seconds: t.time.seconds,
    increaseSeconds: t.controllerDomain.increaseSeconds,
    decreaseSeconds: t.controllerDomain.decreaseSeconds,
    increaseMinutes: t.controllerDomain.increaseMinutes,
    decreaseMinutes: t.controllerDomain.decreaseMinutes,
    increaseHours: t.controllerDomain.increaseHours,
    decreaseHours: t.controllerDomain.decreaseHours,
    isDisabled: y
  };
}
const Controller = observer(() => {
  const {
    hours: t,
    minutes: r,
    seconds: y,
    increaseSeconds: _,
    decreaseSeconds: k,
    increaseMinutes: M,
    decreaseMinutes: U,
    increaseHours: W,
    decreaseHours: $,
    isDisabled: q
  } = useController();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-testid": "ma-timer-controller",
      className: styles$4.controller,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ur,
          {
            id: "hours",
            modelValue: t,
            onIncrease: W,
            onDecrease: $,
            disabled: q
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ur,
          {
            id: "minutes",
            modelValue: r,
            onIncrease: M,
            onDecrease: U,
            disabled: q
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ur,
          {
            id: "seconds",
            modelValue: y,
            onIncrease: _,
            onDecrease: k,
            disabled: q
          }
        )
      ]
    }
  );
}), player = "_player_covgd_96", styles$3 = {
  "theme-light": "_theme-light_covgd_16",
  "theme-dark": "_theme-dark_covgd_36",
  player
}, useReset = () => {
  const { t } = useTranslation(), { timerDomain: r } = useTimer(), y = useMemo(() => ({
    reset: t("ma-timer.reset")
  }), [t]), _ = () => {
    k || r.playerDomain.reset();
  }, k = r.status === ETimerStatus.PLAY || r.time.seconds === 0 && r.time.minutes === 0 && r.time.hours === 0;
  return {
    disabled: k,
    onClick: _,
    text: y.reset
  };
}, Reset = observer(() => {
  const { disabled: t, onClick: r, text: y } = useReset();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Wr,
    {
      id: "ma-timer-player-reset",
      disabled: t,
      onClick: r,
      text: y
    }
  );
}), useStartAndStop = () => {
  const { t } = useTranslation(), { timerDomain: r } = useTimer(), y = useMemo(() => ({
    start: t("ma-timer.start"),
    stop: t("ma-timer.stop")
  }), [t]), _ = () => {
    r.status === ETimerStatus.PLAY ? r.playerDomain.stop() : r.playerDomain.start();
  }, k = r.status === ETimerStatus.PLAY ? y.stop : y.start;
  return {
    disabled: r.time.seconds === 0 && r.time.minutes === 0 && r.time.hours === 0,
    onClick: _,
    text: k
  };
}, StartAndStop = observer(() => {
  const { disabled: t, onClick: r, text: y } = useStartAndStop();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Wr,
    {
      id: "ma-timer-player-start-and-stop",
      disabled: t,
      onClick: r,
      text: y
    }
  );
}), Player = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: styles$3.player,
    "data-testid": "ma-timer-player",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StartAndStop, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reset, {})
    ]
  }
), presets = "_presets_2r2rz_96", styles$2 = {
  "theme-light": "_theme-light_2r2rz_16",
  "theme-dark": "_theme-dark_2r2rz_36",
  presets
}, usePresets = () => {
  const { t } = useTranslation(), { timerDomain: r } = useTimer(), [y, _] = useState(
    r.presetsDomain.preset
  ), k = useMemo(() => [
    {
      preset: ETimerPresets.THREE_MINUTES,
      content: t("ma-timer.presets.three-minutes"),
      id: "ma-timer-preset-3-minutes"
    },
    {
      preset: ETimerPresets.FIVE_MINUTES,
      content: t("ma-timer.presets.five-minutes"),
      id: "ma-timer-preset-5-minutes"
    },
    {
      preset: ETimerPresets.TEN_MINUTES,
      content: t("ma-timer.presets.ten-minutes"),
      id: "ma-timer-preset-10-minutes"
    },
    {
      preset: ETimerPresets.FIFTEEN_MINUTES,
      content: t("ma-timer.presets.fifteen-minutes"),
      id: "ma-timer-preset-15-minutes"
    },
    {
      preset: ETimerPresets.CUSTOM_MINUTES,
      content: t("ma-timer.presets.custom"),
      id: "ma-timer-preset-custom"
    }
  ], [t]), M = ($) => {
    U || (r.presetsDomain.setPreset($), _($));
  }, U = r.status === ETimerStatus.PLAY, W = t("ma-timer.presets.title");
  return {
    disabled: U,
    presets: k,
    setPreset: M,
    selectedPreset: y,
    title: W
  };
}, Presets = observer(() => {
  const { disabled: t, presets: r, selectedPreset: y, setPreset: _, title: k } = usePresets();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Yr,
    {
      className: styles$2.presets,
      "data-testid": "ma-timer-presets",
      id: "ma-timer-presets",
      title: k,
      children: r.map((M) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qr,
        {
          initialChecked: M.preset === y,
          disabled: t,
          id: M.id,
          name: "ma-timer-presets",
          onChange: () => _(M.preset),
          text: {
            content: M.content,
            visible: !0
          }
        },
        M.id
      ))
    }
  );
}), screen = "_screen_ddbl8_96", time = "_time_ddbl8_113", styles$1 = {
  "theme-light": "_theme-light_ddbl8_16",
  "theme-dark": "_theme-dark_ddbl8_36",
  screen,
  time
};
function useScreen() {
  const { timerDomain: t } = useTimer(), r = addZeroBeforeNumber(t.time.hours, 10), y = addZeroBeforeNumber(t.time.minutes, 10), _ = addZeroBeforeNumber(t.time.seconds, 10);
  return {
    hours: r,
    minutes: y,
    seconds: _
  };
}
const Screen = observer(() => {
  const { hours: t, minutes: r, seconds: y } = useScreen();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: styles$1.screen,
      "data-testid": "ma-timer-screen",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: styles$1.time,
            "data-testid": "ma-timer-screen-hours",
            children: t
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ":" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: styles$1.time,
            "data-testid": "ma-timer-screen-minutes",
            children: r
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ":" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: styles$1.time,
            "data-testid": "ma-timer-screen-seconds",
            children: y
          }
        )
      ]
    }
  );
}), wrapper = "_wrapper_1h4hz_96", styles = {
  "theme-light": "_theme-light_1h4hz_16",
  "theme-dark": "_theme-dark_1h4hz_36",
  wrapper
}, Wrapper$1 = () => (useSyncLang(), /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: styles.wrapper,
    "data-testid": "ma-timer-wrapper",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Presets, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Controller, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Screen, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Player, {})
    ]
  }
)), TimerView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext$1.Provider, { value: timerDomain, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$1, {}) });
class TimezoneRepository {
  getTimezones() {
    return [
      -12,
      -11,
      -10,
      -9,
      -8,
      -7,
      -6,
      -5,
      -4,
      -3,
      -2,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ];
  }
}
class TimezoneDomain {
  constructor() {
    D(this, "timezoneRepository", new TimezoneRepository());
    D(this, "timezonesValuePairs", null);
    makeAutoObservable(this);
  }
  generateTimezones() {
    const r = this.timezoneRepository.getTimezones();
    this.timezonesValuePairs = this.mapTimezonesToValuePairs(r);
  }
  createI18nKey(r) {
    return `ma-timezone.stepper.${r}`;
  }
  mapTimezonesToValuePairs(r) {
    return r.map((y) => ({
      value: y,
      label: this.createI18nKey(y)
    }));
  }
}
const timezoneDomain = new TimezoneDomain(), DomainContext = createContext(timezoneDomain);
function useTimezone() {
  return {
    timezoneService: useContext(DomainContext)
  };
}
function useTimezoneSwitcher() {
  const { t } = useTranslation(), { timezoneService: r } = useTimezone();
  return {
    dictionary: useMemo(
      () => {
        var _;
        return {
          timezones: (_ = r == null ? void 0 : r.timezonesValuePairs) == null ? void 0 : _.map((k) => ({
            value: k.value,
            name: t(k.label)
          }))
        };
      },
      [t, r == null ? void 0 : r.timezonesValuePairs]
    )
  };
}
const TimezoneSwitcher = observer(() => {
  const { dictionary: t } = useTimezoneSwitcher();
  return (t == null ? void 0 : t.timezones) && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Lr,
    {
      id: "timezone-switcher",
      modelValue: t.timezones[0].value,
      options: t.timezones,
      onSelect: () => {
      }
    }
  );
});
function useWrapper() {
  const { t } = useTranslation(), { timezoneService: r } = useTimezone();
  return useEffect(() => {
    r.generateTimezones();
  }), {
    title: useMemo(
      () => ({
        title: t("ma-timezone.wrapper.title")
      }),
      [t]
    ).title
  };
}
const Wrapper = observer(() => {
  const { title: t } = useWrapper();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Yr,
    {
      id: "timezone",
      title: t,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimezoneSwitcher, {})
    }
  );
}), TimezoneView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext.Provider, { value: timezoneDomain, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, {}) }), MACalculator = s(CalculatorView);
customElements.define("ma-calculator", MACalculator);
const MACalendar = s(CalendarView);
customElements.define("ma-calendar", MACalendar);
const MAShutdown = s(ShutdownView);
customElements.define("ma-shutdown", MAShutdown);
const MATimer = s(TimerView);
customElements.define("ma-timer", MATimer);
const MATimezone = s(TimezoneView);
customElements.define("ma-timezone", MATimezone);
i18nInit();
//# sourceMappingURL=index.js.map
