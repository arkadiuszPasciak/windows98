(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_wc6ff_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_wc6ff_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_wc6ff_96{display:grid;row-gap:15px;padding:13px 22px 10px;background-color:var(--background-color)}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1hx69_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1hx69_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._screen_1hx69_96{background-color:var(--background-color-white);color:var(--text-color);width:100%;height:20px;padding:5px;text-align:right;box-shadow:var(--border-field);font:400 11px/13px MSSansSerifMedium,sans-serif}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_uzbrq_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_uzbrq_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._keypad_uzbrq_96{display:grid;justify-content:center;grid-template-rows:repeat(3,30px);grid-template-columns:repeat(4,35px);gap:1px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_9arum_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_9arum_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._button_9arum_96{display:flex;justify-content:center;align-items:center;font:400 11px/11px MSSansSerifMedium,sans-serif;border:none;border-radius:0;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);width:35px;height:30px}@media (hover: hover){._button_9arum_96{cursor:pointer}}._button_9arum_96:disabled{pointer-events:none;opacity:.5}._button_9arum_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._primary_9arum_122{color:#00f}._secondary_9arum_126{color:#fe0000}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1v33v_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1v33v_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._week-days_1v33v_96{display:grid;height:20px;grid-template-columns:repeat(7,1fr);background-color:gray;color:var(--text-color-3)}._day_1v33v_104{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_12et3_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_12et3_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._month-days_12et3_96{display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(6,1fr)}._day_12et3_102{height:20px;font:400 12px/20px MSSansSerifMedium,sans-serif}._day-active_12et3_107{color:#fff;background-color:navy}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1xeii_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1xeii_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._days_1xeii_96{width:160px;height:145px;box-shadow:var(--border-field);padding:2px;text-align:center;background-color:var(--background-color-white)}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_s3u64_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_s3u64_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_s3u64_96{display:grid;grid-template-columns:90px 70px;background-color:var(--background-color);gap:10px 0;max-width:180px;width:100%}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_15w9q_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_15w9q_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._controller_15w9q_96{display:flex;justify-content:center;align-items:center;column-gap:15px;margin-bottom:15px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_covgd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_covgd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._player_covgd_96{display:flex;column-gap:20px;justify-content:center}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_2r2rz_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_2r2rz_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._presets_2r2rz_96{display:flex;justify-content:center;align-items:center;gap:8px;grid-area:1/1/2/7;margin-right:0;margin-left:0}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_ddbl8_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_ddbl8_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._screen_ddbl8_96{display:flex;grid-area:3/1/4/7;justify-self:center;background-color:var(--background-color-white);max-width:203px;width:100%;height:48px;padding:5px;box-shadow:var(--border-field);font:400 39px/44px MSSansSerifBold,sans-serif;letter-spacing:3px;color:var(--text-color);-webkit-user-select:none;user-select:none;margin:0 auto 15px}._time_ddbl8_113{width:55px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1h4hz_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1h4hz_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._wrapper_1h4hz_96{background-color:var(--background-color);padding:0 10px 10px;max-width:385px;width:100%}')),document.head.appendChild(o)}}catch(f){console.error("vite-plugin-css-injected-by-js",f)}})();
var Ot = Object.defineProperty;
var $t = (t, r, l) => r in t ? Ot(t, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[r] = l;
var R = (t, r, l) => ($t(t, typeof r != "symbol" ? r + "" : r, l), l);
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
  createRoot = function(t, r) {
    i$2.usingClientEntryPoint = !0;
    try {
      return m.createRoot(t, r);
    } finally {
      i$2.usingClientEntryPoint = !1;
    }
  };
}
var j = Object.defineProperty, x = (t, r, l) => r in t ? j(t, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[r] = l, b = (t, r, l) => (x(t, typeof r != "symbol" ? r + "" : r, l), l);
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
    const l = (() => {
      if (typeof window < "u" && t in window)
        return window[t];
      if (typeof global < "u" && t in global)
        return global[t];
    })();
    return typeof l == "function" ? l.bind(r) : void 0;
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
}, A$1 = Symbol.for("r2wc.render"), h = Symbol.for("r2wc.connected"), p = Symbol.for("r2wc.context"), i$1 = Symbol.for("r2wc.props");
function z$1(t, r, l) {
  var d, y, E;
  r.props || (r.props = t.propTypes ? Object.keys(t.propTypes) : []);
  const k = (Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props)).filter((M) => M !== "container"), F = {}, D = {}, Y = {};
  for (const M of k) {
    F[M] = Array.isArray(r.props) ? "string" : r.props[M];
    const U = J(M);
    D[M] = U, Y[U] = M;
  }
  class L extends HTMLElement {
    constructor() {
      super(), b(this, d, !0), b(this, y), b(this, E, {}), b(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[i$1].container = this.container;
      for (const U of k) {
        const G = D[U], Q = this.getAttribute(G), ae = F[U], ie = w[ae];
        Q && ie != null && ie.parse && (this[i$1][U] = ie.parse(Q, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(Y);
    }
    connectedCallback() {
      this[h] = !0, this[A$1]();
    }
    disconnectedCallback() {
      this[h] = !1, this[p] && l.unmount(this[p]), delete this[p];
    }
    attributeChangedCallback(U, G, Q) {
      const ae = Y[U], ie = F[ae], Z = w[ie];
      ae in F && Z != null && Z.parse && (this[i$1][ae] = Z.parse(Q, this), this[A$1]());
    }
    [(d = h, y = p, E = i$1, A$1)]() {
      this[h] && (this[p] ? l.update(this[p], this[i$1]) : this[p] = l.mount(
        this.container,
        t,
        this[i$1]
      ));
    }
  }
  for (const M of k) {
    const U = D[M], G = F[M];
    Object.defineProperty(L.prototype, M, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[i$1][M];
      },
      set(Q) {
        this[i$1][M] = Q;
        const ae = w[G];
        if (ae != null && ae.stringify) {
          const ie = ae.stringify(Q);
          this.getAttribute(U) !== ie && this.setAttribute(U, ie);
        }
      }
    });
  }
  return L;
}
function J(t = "") {
  return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function f(t, r, l) {
  const d = createRoot(t), y = o.createElement(r, l);
  return d.render(y), {
    root: d,
    ReactComponent: r
  };
}
function i({ root: t, ReactComponent: r }, l) {
  const d = o.createElement(r, l);
  t.render(d);
}
function a$1({ root: t }) {
  t.unmount();
}
function s(t, r = {}) {
  return z$1(t, r, { mount: f, update: i, unmount: a$1 });
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
  var t = o, r = Symbol.for("react.element"), l = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(F, D, Y) {
    var L, M = {}, U = null, G = null;
    Y !== void 0 && (U = "" + Y), D.key !== void 0 && (U = "" + D.key), D.ref !== void 0 && (G = D.ref);
    for (L in D)
      d.call(D, L) && !E.hasOwnProperty(L) && (M[L] = D[L]);
    if (F && F.defaultProps)
      for (L in D = F.defaultProps, D)
        M[L] === void 0 && (M[L] = D[L]);
    return { $$typeof: r, type: F, key: U, ref: G, props: M, _owner: y.current };
  }
  return reactJsxRuntime_production_min.Fragment = l, reactJsxRuntime_production_min.jsx = k, reactJsxRuntime_production_min.jsxs = k, reactJsxRuntime_production_min;
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
    var t = o, r = Symbol.for("react.element"), l = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), F = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), Q = Symbol.iterator, ae = "@@iterator";
    function ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = Q && e[Q] || e[ae];
      return typeof n == "function" ? n : null;
    }
    var Z = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function B(e) {
      {
        for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          c[u - 1] = arguments[u];
        Qe("error", e, c);
      }
    }
    function Qe(e, n, c) {
      {
        var u = Z.ReactDebugCurrentFrame, g = u.getStackAddendum();
        g !== "" && (n += "%s", c = c.concat([g]));
        var S = c.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var et = !1, tt = !1, rt = !1, at = !1, nt = !1, Se;
    Se = Symbol.for("react.module.reference");
    function ot(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === E || nt || e === y || e === Y || e === L || at || e === G || et || tt || rt || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === M || e.$$typeof === k || e.$$typeof === F || e.$$typeof === D || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Se || e.getModuleId !== void 0));
    }
    function it(e, n, c) {
      var u = e.displayName;
      if (u)
        return u;
      var g = n.displayName || n.name || "";
      return g !== "" ? c + "(" + g + ")" : c;
    }
    function we(e) {
      return e.displayName || "Context";
    }
    function q(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case l:
          return "Portal";
        case E:
          return "Profiler";
        case y:
          return "StrictMode";
        case Y:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case F:
            var n = e;
            return we(n) + ".Consumer";
          case k:
            var c = e;
            return we(c._context) + ".Provider";
          case D:
            return it(e, e.render, "ForwardRef");
          case M:
            var u = e.displayName || null;
            return u !== null ? u : q(e.type) || "Memo";
          case U: {
            var g = e, S = g._payload, _ = g._init;
            try {
              return q(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, se = 0, Te, Ee, Re, je, Me, $e, Ne;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function st() {
      {
        if (se === 0) {
          Te = console.log, Ee = console.info, Re = console.warn, je = console.error, Me = console.group, $e = console.groupCollapsed, Ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
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
    function lt() {
      {
        if (se--, se === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: Te
            }),
            info: X({}, e, {
              value: Ee
            }),
            warn: X({}, e, {
              value: Re
            }),
            error: X({}, e, {
              value: je
            }),
            group: X({}, e, {
              value: Me
            }),
            groupCollapsed: X({}, e, {
              value: $e
            }),
            groupEnd: X({}, e, {
              value: Ne
            })
          });
        }
        se < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = Z.ReactCurrentDispatcher, he;
    function ce(e, n, c) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (g) {
            var u = g.stack.trim().match(/\n( *(at )?)/);
            he = u && u[1] || "";
          }
        return `
` + he + e;
      }
    }
    var xe = !1, ue;
    {
      var ct = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new ct();
    }
    function Ae(e, n) {
      if (!e || xe)
        return "";
      {
        var c = ue.get(e);
        if (c !== void 0)
          return c;
      }
      var u;
      xe = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = me.current, me.current = null, st();
      try {
        if (n) {
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
`), W = u.stack.split(`
`), O = v.length - 1, $ = W.length - 1; O >= 1 && $ >= 0 && v[O] !== W[$]; )
            $--;
          for (; O >= 1 && $ >= 0; O--, $--)
            if (v[O] !== W[$]) {
              if (O !== 1 || $ !== 1)
                do
                  if (O--, $--, $ < 0 || v[O] !== W[$]) {
                    var H = `
` + v[O].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && ue.set(e, H), H;
                  }
                while (O >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        xe = !1, me.current = S, lt(), Error.prepareStackTrace = g;
      }
      var oe = e ? e.displayName || e.name : "", Xe = oe ? ce(oe) : "";
      return typeof e == "function" && ue.set(e, Xe), Xe;
    }
    function ut(e, n, c) {
      return Ae(e, !1);
    }
    function dt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function de(e, n, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, dt(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case Y:
          return ce("Suspense");
        case L:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            return ut(e.render);
          case M:
            return de(e.type, n, c);
          case U: {
            var u = e, g = u._payload, S = u._init;
            try {
              return de(S(g), n, c);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Fe = {}, Le = Z.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var n = e._owner, c = de(e.type, e._source, n ? n.type : null);
        Le.setExtraStackFrame(c);
      } else
        Le.setExtraStackFrame(null);
    }
    function ft(e, n, c, u, g) {
      {
        var S = Function.call.bind(fe);
        for (var _ in e)
          if (S(e, _)) {
            var v = void 0;
            try {
              if (typeof e[_] != "function") {
                var W = Error((u || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              v = e[_](n, _, u, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              v = O;
            }
            v && !(v instanceof Error) && (pe(g), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", c, _, typeof v), pe(null)), v instanceof Error && !(v.message in Fe) && (Fe[v.message] = !0, pe(g), B("Failed %s type: %s", c, v.message), pe(null));
          }
      }
    }
    var pt = Array.isArray;
    function be(e) {
      return pt(e);
    }
    function mt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, c = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function ht(e) {
      try {
        return Ue(e), !1;
      } catch {
        return !0;
      }
    }
    function Ue(e) {
      return "" + e;
    }
    function Be(e) {
      if (ht(e))
        return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(e)), Ue(e);
    }
    var le = Z.ReactCurrentOwner, xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Ye, ye;
    ye = {};
    function bt(e) {
      if (fe.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yt(e) {
      if (fe.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vt(e, n) {
      if (typeof e.ref == "string" && le.current && n && le.current.stateNode !== n) {
        var c = q(le.current.type);
        ye[c] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(le.current.type), e.ref), ye[c] = !0);
      }
    }
    function _t(e, n) {
      {
        var c = function() {
          We || (We = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function gt(e, n) {
      {
        var c = function() {
          Ye || (Ye = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var St = function(e, n, c, u, g, S, _) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: c,
        props: _,
        // Record the component responsible for creating this element.
        _owner: S
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
    function wt(e, n, c, u, g) {
      {
        var S, _ = {}, v = null, W = null;
        c !== void 0 && (Be(c), v = "" + c), yt(n) && (Be(n.key), v = "" + n.key), bt(n) && (W = n.ref, vt(n, g));
        for (S in n)
          fe.call(n, S) && !xt.hasOwnProperty(S) && (_[S] = n[S]);
        if (e && e.defaultProps) {
          var O = e.defaultProps;
          for (S in O)
            _[S] === void 0 && (_[S] = O[S]);
        }
        if (v || W) {
          var $ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && _t(_, $), W && gt(_, $);
        }
        return St(e, v, W, g, u, le.current, _);
      }
    }
    var ve = Z.ReactCurrentOwner, He = Z.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var n = e._owner, c = de(e.type, e._source, n ? n.type : null);
        He.setExtraStackFrame(c);
      } else
        He.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ge() {
      {
        if (ve.current) {
          var e = q(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Tt(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + n + ":" + c + ".";
        }
        return "";
      }
    }
    var qe = {};
    function Et(e) {
      {
        var n = Ge();
        if (!n) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (n = `

Check the top-level render call using <` + c + ">.");
        }
        return n;
      }
    }
    function Je(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Et(n);
        if (qe[c])
          return;
        qe[c] = !0;
        var u = "";
        e && e._owner && e._owner !== ve.current && (u = " It was passed a child from " + q(e._owner.type) + "."), ne(e), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, u), ne(null);
      }
    }
    function Ke(e, n) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var c = 0; c < e.length; c++) {
            var u = e[c];
            ge(u) && Je(u, n);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = ie(e);
          if (typeof g == "function" && g !== e.entries)
            for (var S = g.call(e), _; !(_ = S.next()).done; )
              ge(_.value) && Je(_.value, n);
        }
      }
    }
    function Rt(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var c;
        if (typeof n == "function")
          c = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === D || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === M))
          c = n.propTypes;
        else
          return;
        if (c) {
          var u = q(n);
          ft(c, e.props, "prop", u, e);
        } else if (n.PropTypes !== void 0 && !_e) {
          _e = !0;
          var g = q(n);
          B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(e) {
      {
        for (var n = Object.keys(e.props), c = 0; c < n.length; c++) {
          var u = n[c];
          if (u !== "children" && u !== "key") {
            ne(e), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), B("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    function Ze(e, n, c, u, g, S) {
      {
        var _ = ot(e);
        if (!_) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Tt(g);
          W ? v += W : v += Ge();
          var O;
          e === null ? O = "null" : be(e) ? O = "array" : e !== void 0 && e.$$typeof === r ? (O = "<" + (q(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : O = typeof e, B("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, v);
        }
        var $ = wt(e, n, c, g, S);
        if ($ == null)
          return $;
        if (_) {
          var H = n.children;
          if (H !== void 0)
            if (u)
              if (be(H)) {
                for (var oe = 0; oe < H.length; oe++)
                  Ke(H[oe], e);
                Object.freeze && Object.freeze(H);
              } else
                B("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(H, e);
        }
        return e === d ? jt($) : Rt($), $;
      }
    }
    function kt(e, n, c) {
      return Ze(e, n, c, !0);
    }
    function Ct(e, n, c) {
      return Ze(e, n, c, !1);
    }
    var Dt = Ct, Mt = kt;
    reactJsxRuntime_development.Fragment = d, reactJsxRuntime_development.jsx = Dt, reactJsxRuntime_development.jsxs = Mt;
  }()), reactJsxRuntime_development;
}
process.env.NODE_ENV === "production" ? jsxRuntime.exports = requireReactJsxRuntime_production_min() : jsxRuntime.exports = requireReactJsxRuntime_development();
var jsxRuntimeExports = jsxRuntime.exports, ECalculatorDirect = /* @__PURE__ */ ((t) => (t.FIRST = "first", t.LAST = "last", t))(ECalculatorDirect || {}), ECalculatorNumber = /* @__PURE__ */ ((t) => (t[t.ZERO = 0] = "ZERO", t[t.ONE = 1] = "ONE", t[t.TWO = 2] = "TWO", t[t.THREE = 3] = "THREE", t[t.FOUR = 4] = "FOUR", t[t.FIVE = 5] = "FIVE", t[t.SIX = 6] = "SIX", t[t.SEVEN = 7] = "SEVEN", t[t.EIGHT = 8] = "EIGHT", t[t.NINE = 9] = "NINE", t))(ECalculatorNumber || {}), ECalculatorSymbol = /* @__PURE__ */ ((t) => (t.ADD = "+", t.DIVIDE = "/", t.DOT = ".", t.MINUS = "-", t.MULTIPLY = "*", t.RESULT = "=", t))(ECalculatorSymbol || {});
class CalculatorService {
  isValueEqual(t, r, l) {
    switch (l) {
      case ECalculatorDirect.FIRST:
        return t.slice(0, r.length) === r;
      case ECalculatorDirect.LAST:
        return t.slice(-1) === r;
      default:
        return !1;
    }
  }
  isDotExist(t) {
    return t ? !!t.split("").find((d) => d === ".") : !1;
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
var __defProp$2 = Object.defineProperty, __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor, __decorateClass$2 = (t, r, l, d) => {
  for (var y = d > 1 ? void 0 : d ? __getOwnPropDesc$2(r, l) : r, E = t.length - 1, k; E >= 0; E--)
    (k = t[E]) && (y = (d ? k(r, l, y) : k(y)) || y);
  return d && y && __defProp$2(r, l, y), y;
};
class CalculatorDomain {
  constructor() {
    R(this, "value", "0");
    R(this, "calculatorService", new CalculatorService());
    R(this, "addNumber", (r) => {
      this.calculatorService.isValueEqual(this.value, "0", ECalculatorDirect.FIRST) && !this.calculatorService.isValueEqual(this.value, "0.", ECalculatorDirect.FIRST) && this.value.length === 1 ? this.value = String(r) : this.value += String(r);
    });
    R(this, "addDot", () => {
      this.calculatorService.isDotExist(this.value) || this.calculatorService.isMathematicalSignLast(this.value) || this.calculatorService.isValueEqual(this.value, ".", ECalculatorDirect.LAST) || (this.value += ".");
    });
    R(this, "addSymbol", (r) => {
      this.value === "0." || this.calculatorService.isMathematicalSignLast(this.value) || (this.value += r);
    });
    R(this, "summResult", () => {
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
const calculatorDomain = new CalculatorDomain(), CalculatorDomainContext = createContext(calculatorDomain), wrapper$2 = "_wrapper_wc6ff_96", styles$c = {
  "theme-light": "_theme-light_wc6ff_16",
  "theme-dark": "_theme-dark_wc6ff_36",
  wrapper: wrapper$2
};
function useCalculator() {
  return {
    calculatorDomain: useContext(CalculatorDomainContext)
  };
}
function useScreen$1() {
  const { calculatorDomain: t } = useCalculator();
  return {
    value: t.value
  };
}
const screen$1 = "_screen_1hx69_96", styles$b = {
  "theme-light": "_theme-light_1hx69_16",
  "theme-dark": "_theme-dark_1hx69_36",
  screen: screen$1
}, Screen$1 = observer(() => {
  const { value: t } = useScreen$1();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: styles$b.screen,
      "data-testid": "ma-calculator-screen",
      children: t ?? "ERROR"
    }
  );
}), keypad = "_keypad_uzbrq_96", styles$a = {
  "theme-light": "_theme-light_uzbrq_16",
  "theme-dark": "_theme-dark_uzbrq_36",
  keypad
}, button = "_button_9arum_96", primary = "_primary_9arum_122", secondary = "_secondary_9arum_126", styles$9 = {
  "theme-light": "_theme-light_9arum_16",
  "theme-dark": "_theme-dark_9arum_36",
  button,
  primary,
  secondary
}, OperationButton = ({
  id: t,
  onClick: r,
  variant: l = "blue"
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "button",
  {
    className: `${styles$9.button} ${styles$9[l]}`,
    "data-testid": `ma-calculator-operation-button-${t}`,
    onClick: r,
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
    addNumber: r,
    addSymbol: l,
    summResult: d
  } = useKeypad();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: styles$a.keypad,
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
            onClick: () => l(ECalculatorSymbol.DIVIDE),
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
            onClick: () => l(ECalculatorSymbol.MULTIPLY),
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
            onClick: () => l(ECalculatorSymbol.MINUS),
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
            onClick: d,
            variant: "primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperationButton,
          {
            id: ECalculatorSymbol.ADD,
            onClick: () => l(ECalculatorSymbol.ADD),
            variant: "secondary"
          }
        )
      ]
    }
  );
}), Wrapper$3 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: styles$c.wrapper,
    "data-testid": "ma-calculator-wrapper",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Screen$1, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Keypad, {})
    ]
  }
), CalculatorView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(CalculatorDomainContext.Provider, { value: calculatorDomain, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$3, {}) });
class CalendarRepository {
  constructor() {
    R(this, "date");
    R(this, "firstDayMonth");
    R(this, "lastDateMonth");
    R(this, "year");
    R(this, "month");
    R(this, "days");
    this.date = null, this.year = null, this.month = null, this.days = null, this.firstDayMonth = null, this.lastDateMonth = null;
  }
  initCalendar(r) {
    this.getDate(r), this.getFullYear(), this.getMonth(), this.getFirstDayMonth(), this.getLastDateMonth(), this.generateDays();
  }
  generateDays() {
    const r = [];
    if (this.date === null || this.firstDayMonth === null || this.lastDateMonth === null)
      throw new Error("Date not found");
    for (let l = this.firstDayMonth; l > 0; l--)
      r.push({
        status: "inactive",
        value: ""
      });
    for (let l = 1; l <= this.lastDateMonth; l++) {
      const d = l === this.date.getDate() && this.month === (/* @__PURE__ */ new Date()).getMonth() && this.year === (/* @__PURE__ */ new Date()).getFullYear();
      r.push({
        status: d ? "active" : "normal",
        value: String(l)
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
var __defProp$1 = Object.defineProperty, __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor, __decorateClass$1 = (t, r, l, d) => {
  for (var y = d > 1 ? void 0 : d ? __getOwnPropDesc$1(r, l) : r, E = t.length - 1, k; E >= 0; E--)
    (k = t[E]) && (y = (d ? k(r, l, y) : k(y)) || y);
  return d && y && __defProp$1(r, l, y), y;
};
class CalendarService {
  constructor() {
    R(this, "calendar", null);
    R(this, "year", null);
    R(this, "month", null);
    R(this, "calendarRepository", new CalendarRepository());
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
    const l = new Date(this.year, r);
    this.generateCalendar(l);
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
  var t = o, r = Symbol.for("react.element"), l = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(F, D, Y) {
    var L, M = {}, U = null, G = null;
    Y !== void 0 && (U = "" + Y), D.key !== void 0 && (U = "" + D.key), D.ref !== void 0 && (G = D.ref);
    for (L in D)
      d.call(D, L) && !E.hasOwnProperty(L) && (M[L] = D[L]);
    if (F && F.defaultProps)
      for (L in D = F.defaultProps, D)
        M[L] === void 0 && (M[L] = D[L]);
    return { $$typeof: r, type: F, key: U, ref: G, props: M, _owner: y.current };
  }
  return z.Fragment = l, z.jsx = k, z.jsxs = k, z;
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
function br() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var t = o, r = Symbol.for("react.element"), l = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), F = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), Q = Symbol.iterator, ae = "@@iterator";
    function ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = Q && e[Q] || e[ae];
      return typeof n == "function" ? n : null;
    }
    var Z = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function B(e) {
      {
        for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          c[u - 1] = arguments[u];
        Qe("error", e, c);
      }
    }
    function Qe(e, n, c) {
      {
        var u = Z.ReactDebugCurrentFrame, g = u.getStackAddendum();
        g !== "" && (n += "%s", c = c.concat([g]));
        var S = c.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var et = !1, tt = !1, rt = !1, at = !1, nt = !1, Se;
    Se = Symbol.for("react.module.reference");
    function ot(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === E || nt || e === y || e === Y || e === L || at || e === G || et || tt || rt || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === M || e.$$typeof === k || e.$$typeof === F || e.$$typeof === D || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Se || e.getModuleId !== void 0));
    }
    function it(e, n, c) {
      var u = e.displayName;
      if (u)
        return u;
      var g = n.displayName || n.name || "";
      return g !== "" ? c + "(" + g + ")" : c;
    }
    function we(e) {
      return e.displayName || "Context";
    }
    function q(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case l:
          return "Portal";
        case E:
          return "Profiler";
        case y:
          return "StrictMode";
        case Y:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case F:
            var n = e;
            return we(n) + ".Consumer";
          case k:
            var c = e;
            return we(c._context) + ".Provider";
          case D:
            return it(e, e.render, "ForwardRef");
          case M:
            var u = e.displayName || null;
            return u !== null ? u : q(e.type) || "Memo";
          case U: {
            var g = e, S = g._payload, _ = g._init;
            try {
              return q(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, se = 0, Te, Ee, Re, je, Me, $e, Ne;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function st() {
      {
        if (se === 0) {
          Te = console.log, Ee = console.info, Re = console.warn, je = console.error, Me = console.group, $e = console.groupCollapsed, Ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
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
    function lt() {
      {
        if (se--, se === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: Te
            }),
            info: X({}, e, {
              value: Ee
            }),
            warn: X({}, e, {
              value: Re
            }),
            error: X({}, e, {
              value: je
            }),
            group: X({}, e, {
              value: Me
            }),
            groupCollapsed: X({}, e, {
              value: $e
            }),
            groupEnd: X({}, e, {
              value: Ne
            })
          });
        }
        se < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = Z.ReactCurrentDispatcher, he;
    function ce(e, n, c) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (g) {
            var u = g.stack.trim().match(/\n( *(at )?)/);
            he = u && u[1] || "";
          }
        return `
` + he + e;
      }
    }
    var xe = !1, ue;
    {
      var ct = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new ct();
    }
    function Ae(e, n) {
      if (!e || xe)
        return "";
      {
        var c = ue.get(e);
        if (c !== void 0)
          return c;
      }
      var u;
      xe = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = me.current, me.current = null, st();
      try {
        if (n) {
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
`), W = u.stack.split(`
`), O = v.length - 1, $ = W.length - 1; O >= 1 && $ >= 0 && v[O] !== W[$]; )
            $--;
          for (; O >= 1 && $ >= 0; O--, $--)
            if (v[O] !== W[$]) {
              if (O !== 1 || $ !== 1)
                do
                  if (O--, $--, $ < 0 || v[O] !== W[$]) {
                    var H = `
` + v[O].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && ue.set(e, H), H;
                  }
                while (O >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        xe = !1, me.current = S, lt(), Error.prepareStackTrace = g;
      }
      var oe = e ? e.displayName || e.name : "", Xe = oe ? ce(oe) : "";
      return typeof e == "function" && ue.set(e, Xe), Xe;
    }
    function ut(e, n, c) {
      return Ae(e, !1);
    }
    function dt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function de(e, n, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, dt(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case Y:
          return ce("Suspense");
        case L:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            return ut(e.render);
          case M:
            return de(e.type, n, c);
          case U: {
            var u = e, g = u._payload, S = u._init;
            try {
              return de(S(g), n, c);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Fe = {}, Le = Z.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var n = e._owner, c = de(e.type, e._source, n ? n.type : null);
        Le.setExtraStackFrame(c);
      } else
        Le.setExtraStackFrame(null);
    }
    function ft(e, n, c, u, g) {
      {
        var S = Function.call.bind(fe);
        for (var _ in e)
          if (S(e, _)) {
            var v = void 0;
            try {
              if (typeof e[_] != "function") {
                var W = Error((u || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              v = e[_](n, _, u, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              v = O;
            }
            v && !(v instanceof Error) && (pe(g), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", c, _, typeof v), pe(null)), v instanceof Error && !(v.message in Fe) && (Fe[v.message] = !0, pe(g), B("Failed %s type: %s", c, v.message), pe(null));
          }
      }
    }
    var pt = Array.isArray;
    function be(e) {
      return pt(e);
    }
    function mt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, c = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function ht(e) {
      try {
        return Ue(e), !1;
      } catch {
        return !0;
      }
    }
    function Ue(e) {
      return "" + e;
    }
    function Be(e) {
      if (ht(e))
        return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(e)), Ue(e);
    }
    var le = Z.ReactCurrentOwner, xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Ye, ye;
    ye = {};
    function bt(e) {
      if (fe.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yt(e) {
      if (fe.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vt(e, n) {
      if (typeof e.ref == "string" && le.current && n && le.current.stateNode !== n) {
        var c = q(le.current.type);
        ye[c] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(le.current.type), e.ref), ye[c] = !0);
      }
    }
    function _t(e, n) {
      {
        var c = function() {
          We || (We = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function gt(e, n) {
      {
        var c = function() {
          Ye || (Ye = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var St = function(e, n, c, u, g, S, _) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: c,
        props: _,
        // Record the component responsible for creating this element.
        _owner: S
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
    function wt(e, n, c, u, g) {
      {
        var S, _ = {}, v = null, W = null;
        c !== void 0 && (Be(c), v = "" + c), yt(n) && (Be(n.key), v = "" + n.key), bt(n) && (W = n.ref, vt(n, g));
        for (S in n)
          fe.call(n, S) && !xt.hasOwnProperty(S) && (_[S] = n[S]);
        if (e && e.defaultProps) {
          var O = e.defaultProps;
          for (S in O)
            _[S] === void 0 && (_[S] = O[S]);
        }
        if (v || W) {
          var $ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && _t(_, $), W && gt(_, $);
        }
        return St(e, v, W, g, u, le.current, _);
      }
    }
    var ve = Z.ReactCurrentOwner, He = Z.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var n = e._owner, c = de(e.type, e._source, n ? n.type : null);
        He.setExtraStackFrame(c);
      } else
        He.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ge() {
      {
        if (ve.current) {
          var e = q(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Tt(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + n + ":" + c + ".";
        }
        return "";
      }
    }
    var qe = {};
    function Et(e) {
      {
        var n = Ge();
        if (!n) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (n = `

Check the top-level render call using <` + c + ">.");
        }
        return n;
      }
    }
    function Je(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Et(n);
        if (qe[c])
          return;
        qe[c] = !0;
        var u = "";
        e && e._owner && e._owner !== ve.current && (u = " It was passed a child from " + q(e._owner.type) + "."), ne(e), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, u), ne(null);
      }
    }
    function Ke(e, n) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var c = 0; c < e.length; c++) {
            var u = e[c];
            ge(u) && Je(u, n);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = ie(e);
          if (typeof g == "function" && g !== e.entries)
            for (var S = g.call(e), _; !(_ = S.next()).done; )
              ge(_.value) && Je(_.value, n);
        }
      }
    }
    function Rt(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var c;
        if (typeof n == "function")
          c = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === D || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === M))
          c = n.propTypes;
        else
          return;
        if (c) {
          var u = q(n);
          ft(c, e.props, "prop", u, e);
        } else if (n.PropTypes !== void 0 && !_e) {
          _e = !0;
          var g = q(n);
          B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(e) {
      {
        for (var n = Object.keys(e.props), c = 0; c < n.length; c++) {
          var u = n[c];
          if (u !== "children" && u !== "key") {
            ne(e), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), B("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    function Ze(e, n, c, u, g, S) {
      {
        var _ = ot(e);
        if (!_) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Tt(g);
          W ? v += W : v += Ge();
          var O;
          e === null ? O = "null" : be(e) ? O = "array" : e !== void 0 && e.$$typeof === r ? (O = "<" + (q(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : O = typeof e, B("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, v);
        }
        var $ = wt(e, n, c, g, S);
        if ($ == null)
          return $;
        if (_) {
          var H = n.children;
          if (H !== void 0)
            if (u)
              if (be(H)) {
                for (var oe = 0; oe < H.length; oe++)
                  Ke(H[oe], e);
                Object.freeze && Object.freeze(H);
              } else
                B("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(H, e);
        }
        return e === d ? jt($) : Rt($), $;
      }
    }
    function kt(e, n, c) {
      return Ze(e, n, c, !0);
    }
    function Ct(e, n, c) {
      return Ze(e, n, c, !1);
    }
    var Dt = Ct, Mt = kt;
    I.Fragment = d, I.jsx = Dt, I.jsxs = Mt;
  }()), I;
}
process.env.NODE_ENV === "production" ? te.exports = gr() : te.exports = br();
var a = te.exports;
const Oe = {
  "theme-light": "_theme-light_158st_16",
  "theme-dark": "_theme-dark_158st_36",
  "ds-button": "_ds-button_158st_96",
  "size-small": "_size-small_158st_120",
  "size-medium": "_size-medium_158st_126"
}, Wr = ({
  size: t = "medium",
  disabled: r = !1,
  onClick: l,
  text: d,
  id: y,
  isTextVisible: E = !0,
  iconLeft: k,
  iconRight: F
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    "aria-label": E ? void 0 : d,
    className: `${Oe["ds-button"]} ${Oe[`size-${t}`]}`,
    "data-testid": `${y}-button`,
    type: "button",
    disabled: r,
    onClick: l,
    children: [
      k,
      E && d,
      F
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
function ke({
  ariaLabel: t,
  className: r = "",
  direction: l,
  disabled: d,
  id: y,
  onClick: E,
  size: k
}) {
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      "aria-label": t,
      className: `
				${ee["ds-button-arrow"]}
				${ee[`arrow-${l}`]}
				${ee[`size-${k}`]}
				${r}
			`,
      "data-testid": `ds-button-arrow-${y}-${l}`,
      disabled: d,
      type: "button",
      onClick: E
    }
  );
}
const Rr = "_frame_hpida_96", yr = "_title_hpida_104", Pe = {
  "theme-light": "_theme-light_hpida_16",
  "theme-dark": "_theme-dark_hpida_36",
  frame: Rr,
  title: yr
};
function Yr({
  children: t,
  className: r = "",
  id: l,
  title: d
}) {
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `${Pe.frame} ${r}`,
      "data-testid": `ds-frame-${l}`,
      children: [
        d && /* @__PURE__ */ a.jsx(
          ze,
          {
            className: Pe.title,
            text: d,
            id: `frame-${l}`
          }
        ),
        t
      ]
    }
  );
}
const xr = ({
  isChecked: t = !1
}) => t ? /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", children: [
  /* @__PURE__ */ a.jsxs("g", { className: "layer", children: [
    /* @__PURE__ */ a.jsx("title", { children: "Layer 1" }),
    /* @__PURE__ */ a.jsx("path", { clipRule: "evenodd", d: "m8,0l-4,0l0,1l-2,0l0,1l-1,0l0,2l-1,0l0,4l1,0l0,2l1,0l0,-2l-1,0l0,-4l1,0l0,-2l2,0l0,-1l4,0l0,1l2,0l0,-1l-2,0l0,-1z", fill: "gray", fillRule: "evenodd", id: "svg_1" }),
    /* @__PURE__ */ a.jsx("path", { clipRule: "evenodd", d: "m8,1l-4,0l0,1l-2,0l0,2l-1,0l0,4l1,0l0,1l1,0l0,-1l-1,0l0,-4l1,0l0,-1l1,0l0,-1l4,0l0,1l2,0l0,-1l-2,0l0,-1z", fill: "#000", fillRule: "evenodd", id: "svg_2" }),
    /* @__PURE__ */ a.jsx("path", { clipRule: "evenodd", d: "m9,3l1,0l0,1l-1,0l0,-1zm1,5l0,-4l1,0l0,4l-1,0zm-2,2l0,-1l1,0l0,-1l1,0l0,2l-2,0zm-4,0l0,1l4,0l0,-1l-4,0zm0,0l0,-1l-2,0l0,1l2,0z", fill: "#DFDFDF", fillRule: "evenodd", id: "svg_3" }),
    /* @__PURE__ */ a.jsx("path", { clipRule: "evenodd", d: "m11,2l-1,0l0,2l1,0l0,4l-1,0l0,2l-2,0l0,1l-4,0l0,-1l-2,0l0,1l2,0l0,1l4,0l0,-1l2,0l0,-1l1,0l0,-2l1,0l0,-4l-1,0l0,-2z", fill: "#fff", fillRule: "evenodd", id: "svg_4" }),
    /* @__PURE__ */ a.jsx("path", { clipRule: "evenodd", d: "m4,2l4,0l0,1l1,0l0,1l1,0l0,4l-1,0l0,1l-1,0l0,1l-4,0l0,-1l-1,0l0,-1l-1,0l0,-4l1,0l0,-1l1,0l0,-1z", fill: "#fff", fillRule: "evenodd", id: "svg_5" }),
    /* @__PURE__ */ a.jsx("use", { id: "svg_7", x: "3.88", xlinkHref: "#svg_6", y: "3.88" })
  ] }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("symbol", { xmlns: "http://www.w3.org/2000/svg", height: "4", id: "svg_6", width: "4", children: /* @__PURE__ */ a.jsx("path", { clipRule: "evenodd", d: "m3,0l-2,0l0,1l-1,0l0,2l1,0l0,1l2,0l0,-1l1,0l0,-2l-1,0l0,-1z", fill: "black", fillRule: "evenodd" }) }) })
] }) : t ? null : /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", children: [
  /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z", fill: "gray" }),
  /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z", fill: "#000" }),
  /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z", fill: "#DFDFDF" }),
  /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z", fill: "#fff" }),
  /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z", fill: "#fff" })
] }), wr = () => /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", fill: "none", children: [
  /* @__PURE__ */ a.jsx(
    "path",
    {
      fill: "#DFDFDF",
      fillRule: "evenodd",
      d: "M15 0H0v16h1V1h14V0z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ a.jsx(
    "path",
    {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M2 1H1v14h1V2h12V1H2z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ a.jsx(
    "path",
    {
      fill: "#000",
      fillRule: "evenodd",
      d: "M16 17H0v-1h15V0h1v17z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ a.jsx(
    "path",
    {
      fill: "gray",
      fillRule: "evenodd",
      d: "M15 1h-1v14H1v1h14V1z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ a.jsx("path", { fill: "silver", d: "M2 2h12v13H2z" }),
  /* @__PURE__ */ a.jsx(
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
function Sr({ initialValue: t, onChange: r }) {
  const [l, d] = useState(t);
  return useEffect(() => {
    d(t);
  }, [t, d]), { value: l, handleInputChange: (y) => {
    const E = y.target.value;
    d(E), r && r(E);
  } };
}
function $r({
  className: t = "",
  type: r = "text",
  id: l,
  disabled: d = !1,
  readonly: y = !1,
  initialValue: E = "",
  labelName: k,
  wrapperLayout: F = "vertical",
  min: D,
  max: Y,
  onChange: L
}) {
  const { value: M, handleInputChange: U } = Sr({ initialValue: E, onChange: L }), G = `ds-input-${l}`;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `${re[`wrapper-${F}`]} ${t}`,
      "data-testid": G,
      children: [
        k && /* @__PURE__ */ a.jsx(
          "label",
          {
            className: re.label,
            "data-testid": `ds-input-label-${l}`,
            htmlFor: G,
            children: k
          }
        ),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            id: G,
            className: re.input,
            "data-testid": `ds-input-input-${l}`,
            type: r,
            disabled: d,
            readOnly: y,
            value: M,
            min: D ?? void 0,
            max: Y ?? void 0,
            name: G,
            onChange: U
          }
        )
      ]
    }
  );
}
const Tr = "_wrapper_12q8r_96", Cr = "_disabled_12q8r_108", Dr = "_input_12q8r_113", Or = "_icon_12q8r_123", N = {
  "theme-light": "_theme-light_12q8r_16",
  "theme-dark": "_theme-dark_12q8r_36",
  wrapper: Tr,
  disabled: Cr,
  input: Dr,
  icon: Or
};
function kr({ initialChecked: t, onChange: r }) {
  const [l, d] = useState(t);
  return useEffect(() => {
    d(t);
  }, [t]), {
    checked: l,
    handleChange: (y) => {
      r && r(), d(y.target.checked);
    }
  };
}
const qr = ({
  initialChecked: t = !1,
  disabled: r = !1,
  id: l,
  onChange: d,
  name: y,
  text: E
}) => {
  const {
    checked: k,
    handleChange: F
  } = kr({
    initialChecked: t,
    onChange: d
  });
  return /* @__PURE__ */ a.jsxs(
    "label",
    {
      "aria-label": E.visible ? void 0 : E.content,
      className: `${N.wrapper} ${r ? N.disabled : ""}`,
      "data-testid": `${l}-radio`,
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            className: N.input,
            checked: k,
            "data-testid": `${l}-radio-input`,
            disabled: r,
            name: y,
            type: "radio",
            value: l,
            onChange: F
          }
        ),
        /* @__PURE__ */ a.jsx(
          "span",
          {
            className: N.icon,
            "data-testid": `${l}-radio-icon`,
            children: /* @__PURE__ */ a.jsx(xr, { isChecked: k })
          }
        ),
        E.visible && /* @__PURE__ */ a.jsx(
          ze,
          {
            className: N.text,
            id: l,
            text: E.content
          }
        )
      ]
    }
  );
};
function Pr(t) {
  const [r, l] = useState(t);
  return {
    value: r,
    handleChange: (d) => {
      l(d.target.value);
    }
  };
}
const Vr = "_wrapper_1id5f_96", Fr = "_label_1id5f_100", zr = "_select_1id5f_105", Ir = "_arrow_1id5f_115", A = {
  "theme-light": "_theme-light_1id5f_16",
  "theme-dark": "_theme-dark_1id5f_36",
  wrapper: Vr,
  label: Fr,
  select: zr,
  arrow: Ir
};
function Lr({
  className: t = "",
  id: r,
  required: l = !1,
  disabled: d = !1,
  modelValue: y,
  options: E,
  labelName: k,
  onSelect: F
}) {
  const { value: D, handleChange: Y } = Pr(y), L = (M) => {
    Y(M), F(M);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: `${A.wrapper} ${t}`, children: [
    k && /* @__PURE__ */ a.jsx(
      "label",
      {
        className: A.label,
        "data-testid": `ds-select-label-${r}`,
        htmlFor: r,
        children: k
      }
    ),
    /* @__PURE__ */ a.jsx(
      "select",
      {
        className: A.select,
        "data-testid": `ds-select-select-${r}`,
        disabled: d,
        id: r,
        name: r,
        onChange: L,
        required: l,
        value: D,
        children: E.map((M, U) => /* @__PURE__ */ a.jsx(
          "option",
          {
            className: A.option,
            "data-testid": `ds-select-option-${r}-${U}`,
            value: M.value,
            children: M.name
          },
          `${r}-${M.value}`
        ))
      }
    ),
    /* @__PURE__ */ a.jsx(
      "span",
      {
        className: A.arrow,
        children: /* @__PURE__ */ a.jsx(wr, {})
      }
    )
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
  onDecrease: l
}) {
  const [d, y] = useState(t);
  return useEffect(() => {
    y(t);
  }, [t]), { value: d, handleIncrease: () => {
    r && r();
  }, handleDecrease: () => {
    l && l();
  } };
}
function Ur({
  className: t = "",
  id: r,
  modelValue: l,
  disabled: d = !1,
  onIncrease: y,
  onDecrease: E
}) {
  const {
    value: k,
    handleIncrease: F,
    handleDecrease: D
  } = Nr({ modelValue: l, onIncrease: y, onDecrease: E });
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `
        ${Ve["ds-stepper"]}
        ${d ? Ve["state-disabled"] : ""}
        ${t}
      `,
      children: [
        /* @__PURE__ */ a.jsx(
          $r,
          {
            id: `stepper-${r}`,
            initialValue: k,
            readonly: !0
          }
        ),
        /* @__PURE__ */ a.jsx(
          ke,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: d,
            id: r,
            size: "small",
            onClick: F
          }
        ),
        /* @__PURE__ */ a.jsx(
          ke,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: d,
            id: r,
            size: "small",
            onClick: D
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
function ze({
  className: t = "",
  id: r,
  text: l
}) {
  return /* @__PURE__ */ a.jsx(
    "p",
    {
      className: `${Hr.DSText} ${t}`,
      "data-testid": `ds-text-${r}`,
      children: l
    }
  );
}
function useCalendar() {
  return {
    calendarService: useContext(DomainContext$1)
  };
}
function useWrapper$1() {
  const { t } = useTranslation(), { calendarService: r } = useCalendar();
  return useEffect(() => {
    r.generateCalendar();
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
  const { calendarService: t } = useCalendar(), { t: r } = useTranslation(), l = useMemo(
    () => ({
      weekDays: [
        r("ma-calendar.days.sunday"),
        r("ma-calendar.days.monday"),
        r("ma-calendar.days.tuesday"),
        r("ma-calendar.days.wednesday"),
        r("ma-calendar.days.thursday"),
        r("ma-calendar.days.friday"),
        r("ma-calendar.days.saturday")
      ]
    }),
    [r]
  );
  return {
    monthDays: t.calendar,
    weekDays: l.weekDays
  };
}
const day$1 = "_day_1v33v_104", styles$8 = {
  "theme-light": "_theme-light_1v33v_16",
  "theme-dark": "_theme-dark_1v33v_36",
  "week-days": "_week-days_1v33v_96",
  day: day$1
}, WeekDays = observer(() => {
  const { weekDays: t } = useDays();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$8["week-days"], children: t.map((r, l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: styles$8.day,
      "data-testid": `calendar-week-days-day-${l}`,
      children: r
    },
    l
  )) });
}), day = "_day_12et3_102", styles$7 = {
  "theme-light": "_theme-light_12et3_16",
  "theme-dark": "_theme-dark_12et3_36",
  "month-days": "_month-days_12et3_96",
  day,
  "day-active": "_day-active_12et3_107"
}, MonthDays = observer(() => {
  const { monthDays: t } = useDays();
  return t && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$7["month-days"], "data-testid": "calendar-view-days", children: t.map((r, l) => r.value === "" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: styles$7.day,
      "data-testid": `calendar-month-days-empty-${l}`
    },
    l
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: `
                        ${styles$7.day}
                        ${r.status === "active" ? styles$7["day-active"] : ""}
                    `,
      "data-testid": `calendar-month-days-day-${r.value}`,
      type: "button",
      children: r.value
    },
    l
  )) });
}), days = "_days_1xeii_96", styles$6 = {
  "theme-light": "_theme-light_1xeii_16",
  "theme-dark": "_theme-dark_1xeii_36",
  days
}, Days = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6.days, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(WeekDays, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(MonthDays, {})
] });
function useMonthSwitcher() {
  const { t } = useTranslation(), { calendarService: r } = useCalendar(), l = (y) => {
    r.changeCalendarByMonth(Number(y.currentTarget.value));
  }, d = useMemo(
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
    handleSelectChange: l,
    month: r.month,
    months: d.months
  };
}
const MonthSwitcher = observer(() => {
  const { handleSelectChange: t, month: r, months: l } = useMonthSwitcher();
  return r !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Lr,
    {
      id: "month-switcher",
      modelValue: r,
      options: l,
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
  const { decreaseYear: t, increaseYear: r, year: l } = useYearSwitcher();
  return l && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ur,
    {
      id: "calendar-year",
      modelValue: l,
      onIncrease: r,
      onDecrease: t
    }
  );
}), wrapper$1 = "_wrapper_s3u64_96", styles$5 = {
  "theme-light": "_theme-light_s3u64_16",
  "theme-dark": "_theme-dark_s3u64_36",
  wrapper: wrapper$1
};
function useSyncLang() {
  const { i18n: t } = useTranslation();
  useEffect(() => {
    const r = document.documentElement.lang;
    r && t.changeLanguage(r);
  }, []), useEffect(() => {
    const r = new MutationObserver((l) => {
      l.forEach((d) => {
        d.type === "attributes" && d.attributeName === "lang" && t.changeLanguage(d.target.lang);
      });
    });
    return r.observe(document.documentElement, { attributes: !0 }), () => {
      r.disconnect();
    };
  }, [t]);
}
const Wrapper$2 = observer(() => {
  const { title: t } = useWrapper$1();
  return useSyncLang(), /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Yr,
    {
      className: styles$5.wrapper,
      id: "calculator",
      title: t,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MonthSwitcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YearSwitcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Days, {})
      ]
    }
  );
}), CalendarView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext$1.Provider, { value: calendarService, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$2, {}) });
class TimezoneRepository {
  getTimezones() {
    return [-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
}
var __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __decorateClass = (t, r, l, d) => {
  for (var y = d > 1 ? void 0 : d ? __getOwnPropDesc(r, l) : r, E = t.length - 1, k; E >= 0; E--)
    (k = t[E]) && (y = (d ? k(r, l, y) : k(y)) || y);
  return d && y && __defProp(r, l, y), y;
};
class TimezoneService {
  constructor() {
    R(this, "timezoneRepository", new TimezoneRepository());
    R(this, "timezonesValuePairs", null);
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
    return r.map((l) => ({
      value: l,
      label: this.createI18nKey(l)
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
  const { t } = useTranslation(), { timezoneService: r } = useTimezone();
  return useEffect(() => {
    r.generateTimezones();
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
  const { t } = useTranslation(), { timezoneService: r } = useTimezone();
  return {
    dictionary: useMemo(
      () => {
        var d;
        return {
          timezones: (d = r == null ? void 0 : r.timezonesValuePairs) == null ? void 0 : d.map((y) => ({
            value: y.value,
            name: t(y.label)
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
}), Wrapper$1 = observer(() => {
  const { title: t } = useWrapper();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Yr,
    {
      id: "timezone",
      title: t,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimezoneSwitcher, {})
    }
  );
}), TimezoneView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DomainContext.Provider, { value: timezoneService, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper$1, {}) });
var ETimerPresets = /* @__PURE__ */ ((t) => (t.THREE_MINUTES = "3-min", t.FIVE_MINUTES = "5-min", t.TEN_MINUTES = "10-min", t.FIFTEEN_MINUTES = "15-min", t.CUSTOM_MINUTES = "custom", t))(ETimerPresets || {}), ETimerTime = /* @__PURE__ */ ((t) => (t.HOURS = "hours", t.MINUTES = "minutes", t.SECONDS = "seconds", t))(ETimerTime || {}), ETimerStatus = /* @__PURE__ */ ((t) => (t.PLAY = "play", t.STOP = "stop", t.RESET = "reset", t))(ETimerStatus || {});
class TimerControllerDomain {
  constructor(r) {
    R(this, "timerDomain");
    R(this, "increaseSeconds", () => {
      this.timerDomain.time.seconds !== 59 && (console.log(this), this.timerDomain.addTime(ETimerTime.SECONDS, 1));
    });
    R(this, "decreaseSeconds", () => {
      this.timerDomain.time.seconds !== 0 && this.timerDomain.subtractTime(ETimerTime.SECONDS, 1);
    });
    R(this, "increaseMinutes", () => {
      this.timerDomain.time.minutes !== 59 && this.timerDomain.addTime(ETimerTime.MINUTES, 1);
    });
    R(this, "decreaseMinutes", () => {
      this.timerDomain.time.minutes !== 0 && this.timerDomain.subtractTime(ETimerTime.MINUTES, 1);
    });
    R(this, "increaseHours", () => {
      this.timerDomain.time.hours !== 59 && this.timerDomain.addTime(ETimerTime.HOURS, 1);
    });
    R(this, "decreaseHours", () => {
      this.timerDomain.time.hours !== 0 && this.timerDomain.subtractTime(ETimerTime.HOURS, 1);
    });
    this.timerDomain = r, makeAutoObservable(this);
  }
}
class TimerPlayerDomain {
  constructor(r) {
    R(this, "timerDomain");
    R(this, "interval", null);
    R(this, "start", () => {
      this.timerDomain.setStatus(ETimerStatus.PLAY), this.interval = setInterval(() => {
        this.timerDomain.time.hours === 0 && this.timerDomain.time.minutes === 0 && this.timerDomain.time.seconds === 0 && this.reset(), this.timerDomain.time.hours >= 1 && this.timerDomain.time.minutes === 0 && this.timerDomain.time.seconds === 0 ? (this.timerDomain.time.hours--, this.timerDomain.time.minutes = 59, this.timerDomain.time.seconds = 59) : this.timerDomain.time.seconds === 0 && this.timerDomain.time.minutes >= 1 ? (this.timerDomain.time.seconds = 59, this.timerDomain.time.minutes--) : this.timerDomain.time.seconds--;
      }, 1e3);
    });
    R(this, "stop", () => {
      this.timerDomain.setStatus(ETimerStatus.STOP), this.clearTimerInterval();
    });
    R(this, "reset", () => {
      this.timerDomain.setStatus(ETimerStatus.RESET), this.clearTimerInterval(), this.restartTime();
    });
    R(this, "clearTimerInterval", () => {
      this.interval && clearInterval(this.interval);
    });
    R(this, "restartTime", () => {
      this.timerDomain.time.hours = 0, this.timerDomain.time.minutes = 0, this.timerDomain.time.seconds = 0;
    });
    this.timerDomain = r, makeAutoObservable(this);
  }
}
class TimerPresetsDomain {
  constructor(r) {
    R(this, "preset", ETimerPresets.CUSTOM_MINUTES);
    R(this, "timerDomain");
    R(this, "presetTimes", {
      [ETimerPresets.CUSTOM_MINUTES]: 0,
      [ETimerPresets.THREE_MINUTES]: 3,
      [ETimerPresets.FIVE_MINUTES]: 5,
      [ETimerPresets.TEN_MINUTES]: 10,
      [ETimerPresets.FIFTEEN_MINUTES]: 15
    });
    R(this, "setPreset", (r) => {
      this.setPresetStatus(r), this.resetSecondsAndHours(), this.setMinutes(r);
    });
    R(this, "setMinutes", (r) => {
      this.timerDomain.setTime(ETimerTime.MINUTES, this.presetTimes[r]);
    });
    R(this, "setPresetStatus", (r) => {
      this.preset !== r && (this.preset = r);
    });
    R(this, "resetSecondsAndHours", () => {
      this.timerDomain.time.seconds !== 0 && this.timerDomain.setTime(ETimerTime.SECONDS, 0), this.timerDomain.time.hours !== 0 && this.timerDomain.setTime(ETimerTime.HOURS, 0);
    });
    this.timerDomain = r, makeAutoObservable(this);
  }
}
class TimerDomain {
  constructor() {
    R(this, "controllerDomain");
    R(this, "playerDomain");
    R(this, "presetsDomain");
    R(this, "time", {
      seconds: 0,
      minutes: 0,
      hours: 0
    });
    R(this, "status", ETimerStatus.RESET);
    R(this, "addTime", (r, l) => {
      this.time[r] += l;
    });
    R(this, "subtractTime", (r, l) => {
      this.time[r] -= l;
    });
    R(this, "setTime", (r, l) => {
      this.time[r] = l;
    });
    R(this, "setStatus", (r) => {
      this.status = r;
    });
    makeAutoObservable(this), this.controllerDomain = new TimerControllerDomain(this), this.playerDomain = new TimerPlayerDomain(this), this.presetsDomain = new TimerPresetsDomain(this);
  }
}
const timerDomain = new TimerDomain(), TimerDomainContext = createContext(timerDomain);
var State = /* @__PURE__ */ ((t) => (t.ACTIVE = "active", t.DISABLED = "disabled", t.IDLE = "idle", t.LOADING = "loading", t))(State || {});
function addZeroBeforeNumber(t, r) {
  return t < r ? `0${t}` : String(t);
}
function useTimer() {
  return {
    timerDomain: useContext(TimerDomainContext)
  };
}
function useController() {
  const { timerDomain: t } = useTimer(), l = (t.presetsDomain.preset !== ETimerPresets.CUSTOM_MINUTES ? State.DISABLED : State.ACTIVE) === State.DISABLED;
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
    isDisabled: l
  };
}
const controller = "_controller_15w9q_96", styles$4 = {
  "theme-light": "_theme-light_15w9q_16",
  "theme-dark": "_theme-dark_15w9q_36",
  controller
}, Controller = observer(() => {
  const {
    hours: t,
    minutes: r,
    seconds: l,
    increaseSeconds: d,
    decreaseSeconds: y,
    increaseMinutes: E,
    decreaseMinutes: k,
    increaseHours: F,
    decreaseHours: D,
    isDisabled: Y
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
            onIncrease: F,
            onDecrease: D,
            disabled: Y
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ur,
          {
            id: "minutes",
            modelValue: r,
            onIncrease: E,
            onDecrease: k,
            disabled: Y
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ur,
          {
            id: "seconds",
            modelValue: l,
            onIncrease: d,
            onDecrease: y,
            disabled: Y
          }
        )
      ]
    }
  );
}), player = "_player_covgd_96", styles$3 = {
  "theme-light": "_theme-light_covgd_16",
  "theme-dark": "_theme-dark_covgd_36",
  player
}, useStartAndStop = () => {
  const { t } = useTranslation(), { timerDomain: r } = useTimer(), l = useMemo(() => ({
    start: t("ma-timer.start"),
    stop: t("ma-timer.stop")
  }), [t]), d = () => {
    r.status === ETimerStatus.PLAY ? r.playerDomain.stop() : r.playerDomain.start();
  }, y = r.status === ETimerStatus.PLAY ? l.stop : l.start;
  return {
    disabled: r.time.seconds === 0 && r.time.minutes === 0 && r.time.hours === 0,
    onClick: d,
    text: y
  };
}, StartAndStop = observer(() => {
  const {
    disabled: t,
    onClick: r,
    text: l
  } = useStartAndStop();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Wr,
    {
      id: "ma-timer-player-start-and-stop",
      disabled: t,
      onClick: r,
      text: l
    }
  );
}), useReset = () => {
  const { t } = useTranslation(), { timerDomain: r } = useTimer(), l = useMemo(() => ({
    reset: t("ma-timer.reset")
  }), [t]), d = () => {
    y || r.playerDomain.reset();
  }, y = r.status === ETimerStatus.PLAY || r.time.seconds === 0 && r.time.minutes === 0 && r.time.hours === 0;
  return {
    disabled: y,
    onClick: d,
    text: l.reset
  };
}, Reset = observer(() => {
  const {
    disabled: t,
    onClick: r,
    text: l
  } = useReset();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Wr,
    {
      id: "ma-timer-player-reset",
      disabled: t,
      onClick: r,
      text: l
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
), usePresets = () => {
  const { t } = useTranslation(), { timerDomain: r } = useTimer(), [
    l,
    d
  ] = useState(r.presetsDomain.preset), y = useMemo(() => [
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
  ], [t]), E = (D) => {
    k || (r.presetsDomain.setPreset(D), d(D));
  }, k = r.status === ETimerStatus.PLAY, F = t("ma-timer.presets.title");
  return {
    disabled: k,
    presets: y,
    setPreset: E,
    selectedPreset: l,
    title: F
  };
}, presets = "_presets_2r2rz_96", styles$2 = {
  "theme-light": "_theme-light_2r2rz_16",
  "theme-dark": "_theme-dark_2r2rz_36",
  presets
}, Presets = observer(() => {
  const {
    disabled: t,
    presets: r,
    selectedPreset: l,
    setPreset: d,
    title: y
  } = usePresets();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Yr,
    {
      className: styles$2.presets,
      "data-testid": "ma-timer-presets",
      id: "ma-timer-presets",
      title: y,
      children: r.map((E) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        qr,
        {
          initialChecked: E.preset === l,
          disabled: t,
          id: E.id,
          name: "ma-timer-presets",
          onChange: () => d(E.preset),
          text: {
            content: E.content,
            visible: !0
          }
        },
        E.id
      ))
    }
  );
});
function useScreen() {
  const { timerDomain: t } = useTimer(), r = addZeroBeforeNumber(t.time.hours, 10), l = addZeroBeforeNumber(t.time.minutes, 10), d = addZeroBeforeNumber(t.time.seconds, 10);
  return {
    hours: r,
    minutes: l,
    seconds: d
  };
}
const screen = "_screen_ddbl8_96", time = "_time_ddbl8_113", styles$1 = {
  "theme-light": "_theme-light_ddbl8_16",
  "theme-dark": "_theme-dark_ddbl8_36",
  screen,
  time
}, Screen = observer(() => {
  const {
    hours: t,
    minutes: r,
    seconds: l
  } = useScreen();
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
            children: l
          }
        )
      ]
    }
  );
}), wrapper = "_wrapper_1h4hz_96", styles = {
  "theme-light": "_theme-light_1h4hz_16",
  "theme-dark": "_theme-dark_1h4hz_36",
  wrapper
}, Wrapper = () => (useSyncLang(), /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
)), TimerView = () => /* @__PURE__ */ jsxRuntimeExports.jsx(TimerDomainContext.Provider, { value: timerDomain, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, {}) }), MACalculator = s(CalculatorView);
customElements.define("ma-calculator", MACalculator);
const MACalendar = s(CalendarView);
customElements.define("ma-calendar", MACalendar);
const MATimer = s(TimerView);
customElements.define("ma-timer", MATimer);
const MATimezone = s(TimezoneView);
customElements.define("ma-timezone", MATimezone);
i18nInit();
//# sourceMappingURL=index.js.map
