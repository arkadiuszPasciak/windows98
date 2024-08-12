(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_158st_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_158st_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button_158st_96{display:flex;justify-content:center;align-items:center;font:400 11px/11px MSSansSerifMedium,sans-serif;border:none;border-radius:0;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised)}@media (hover: hover){._ds-button_158st_96{cursor:pointer}}._ds-button_158st_96:disabled{pointer-events:none;opacity:.5}._ds-button_158st_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._size-small_158st_120{width:16px;height:14px;padding:1px}._size-medium_158st_126{height:23px;min-width:75px;padding:0 12px}._size-medium_158st_126:focus{outline:1px dotted #000000;outline-offset:-4px}._size-medium_158st_126:not(:disabled):active{padding:2px 11px 0 13px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_qp7ji_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_qp7ji_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-button-arrow_qp7ji_96{display:flex;justify-content:center;align-items:center;background-color:var(--background-color);color:var(--text-color);box-shadow:var(--box-shadow-raised);padding:1px}@media (hover: hover){._ds-button-arrow_qp7ji_96:hover{cursor:pointer}}._ds-button-arrow_qp7ji_96:after{content:"";display:block;border-left:3px solid transparent;border-right:3px solid transparent}._ds-button-arrow_qp7ji_96:disabled{pointer-events:none;opacity:.5}._ds-button-arrow_qp7ji_96:not(:disabled):active{box-shadow:var(--box-shadow-sunken)}._arrow-bottom_qp7ji_124:after{border-top:3px solid var(--text-color)}._arrow-top_qp7ji_128:after{border-bottom:3px solid var(--text-color)}._size-small_qp7ji_132{width:20px;height:10px}._size-medium_qp7ji_137{width:16px;height:17px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_hpida_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_hpida_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._frame_hpida_96{position:relative;border:1px solid var(--border-color-frame-1);outline:1px solid var(--border-color-frame-2);padding:16px 10px;margin:12px 9px}._title_hpida_104{position:absolute;top:-7px;left:7px;background-color:var(--background-color);padding:0 3px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_e0ixd_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_e0ixd_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper-horizontal_e0ixd_96{display:grid;align-items:center;column-gap:6px}._wrapper-vertical_e0ixd_102{display:flex;flex-direction:column;align-items:flex-start;flex-basis:200px;row-gap:5px;max-width:200px}._input_e0ixd_111,._label_e0ixd_112{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._input_e0ixd_111{padding:3px 4px;height:21px;width:100%;box-shadow:var(--border-field);background-color:var(--background-color-white)}._input_e0ixd_111:focus{outline:none}._input_e0ixd_111:disabled,._input_e0ixd_111:disabled+._label_e0ixd_112{opacity:.8}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_12q8r_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_12q8r_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_12q8r_96{position:relative;display:flex;align-items:center;column-gap:6px}@media (hover: hover){._wrapper_12q8r_96:hover{cursor:pointer}}._disabled_12q8r_108{pointer-events:none;opacity:.5}._input_12q8r_113{position:absolute;width:1px;height:1px;background-color:transparent}._input_12q8r_113[disabled]{pointer-events:none}._icon_12q8r_123{width:12px;height:12px;display:flex;align-items:center}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_1id5f_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_1id5f_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._wrapper_1id5f_96{position:relative}._label_1id5f_100{font:400 11px/14px MSSansSerifMedium,sans-serif;color:var(--text-color)}._select_1id5f_105{height:21px;width:100%;background:var(--background-color-white) url(/icons/select-button.svg) no-repeat top 2px right 2px;box-shadow:var(--border-field);padding:5px 25px 5px 5px;color:var(--text-color);font:400 11px/13px MSSansSerifMedium,sans-serif}._arrow_1id5f_115{position:absolute;right:1px;top:2px}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_p8wyg_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_p8wyg_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}._ds-stepper_p8wyg_96{display:grid;grid-template-columns:50px 20px;grid-template-rows:repeat(2,10px)}._ds-stepper_p8wyg_96>:nth-child(1){grid-area:1/1/3/2}._ds-stepper_p8wyg_96>:nth-child(2){grid-area:1/2/2/3}._ds-stepper_p8wyg_96>:nth-child(3){grid-area:2/2/3/3}._state-disabled_p8wyg_111{opacity:.5;pointer-events:none}@font-face{font-family:MSSansSerifMedium;src:url(/fonts/MSSansSerifMedium.woff) format("woff"),url(/fonts/MSSansSerifMedium.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:MSSansSerifBold;src:url(/fonts/MSSansSerifBold.woff) format("woff"),url(/fonts/MSSansSerifBold.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}:root._theme-light_pg4yx_16{--background-color: #c0c0c0;--background-color-white: #ffffff;--background-color-modal-header: linear-gradient( 90deg, #000080, #1084d0 );--background-color-pulpit: #007b7b;--border-field: inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;--box-shadow-sunken: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;--text-color: #222222;--text-color-2: #ffffff;--text-color-3: #b5b5b5;--border-color-navigation: #ffffff;--border-color-frame-1: rgba(255, 255, 255, .7);--border-color-frame-2: #969696}:root._theme-dark_pg4yx_36{--background-color: #3b3b3b;--background-color-white: #3b3b3b;--background-color-modal-header: linear-gradient( 90deg, #330099, #0f0f81 );--background-color-pulpit: #000000;--border-field: inset -1px -1px #8b8b8b, inset 1px 1px #000000, inset -2px -2px #8b8b8b, inset 2px 2px #000000;--box-shadow-raised: inset -1px -1px #0a0a0a, inset 1px 1px #9b9b9b, inset -2px -2px #000000, inset 2px 2px #808080;--box-shadow-sunken: inset -1px -1px #9b9b9b, inset 1px 1px #000000, inset -2px -2px #9b9b9b, inset 2px 2px #000000;--text-color: #9b9b9b;--text-color-2: #9b9b9b;--text-color-3: #000000;--border-color-navigation: #8b8b8b;--border-color-frame-1: transparent;--border-color-frame-2: #969696}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;appearance:none;-webkit-appearance:none;-moz-appearance:none}*:focus{outline-style:none}ul,ol{list-style:none}a{text-decoration:none}img{max-width:100%;display:block}input,button,textarea,select{font:inherit;background:none;border:0}._DSText_pg4yx_96{font:400 11px/13px MSSansSerifMedium,sans-serif;color:var(--text-color)}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import Fe, { useState as L, useEffect as ae } from "react";
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
  var i = Fe, l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, p = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(R, _, S) {
    var y, b = {}, j = null, $ = null;
    S !== void 0 && (j = "" + S), _.key !== void 0 && (j = "" + _.key), _.ref !== void 0 && ($ = _.ref);
    for (y in _)
      u.call(_, y) && !v.hasOwnProperty(y) && (b[y] = _[y]);
    if (R && R.defaultProps)
      for (y in _ = R.defaultProps, _)
        b[y] === void 0 && (b[y] = _[y]);
    return { $$typeof: l, type: R, key: j, ref: $, props: b, _owner: p.current };
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
function br() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Fe, l = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), R = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ie = "@@iterator";
    function Ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ie];
      return typeof r == "function" ? r : null;
    }
    var O = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var He = !1, Me = !1, We = !1, Ye = !1, qe = !1, le;
    le = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === v || qe || e === p || e === S || e === y || Ye || e === $ || He || Me || We || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === b || e.$$typeof === h || e.$$typeof === R || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case s:
          return "Portal";
        case v:
          return "Profiler";
        case p:
          return "StrictMode";
        case S:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ie(r) + ".Consumer";
          case h:
            var t = e;
            return ie(t._context) + ".Provider";
          case _:
            return Ue(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case j: {
            var f = e, d = f._payload, c = f._init;
            try {
              return T(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, V = 0, se, oe, ue, ce, fe, de, ve;
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
            log: D({}, e, {
              value: se
            }),
            info: D({}, e, {
              value: oe
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
    function H(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
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
      var n;
      G = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = U.current, U.current = null, Be();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (C) {
              n = C;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var o = C.stack.split(`
`), w = n.stack.split(`
`), m = o.length - 1, g = w.length - 1; m >= 1 && g >= 0 && o[m] !== w[g]; )
            g--;
          for (; m >= 1 && g >= 0; m--, g--)
            if (o[m] !== w[g]) {
              if (m !== 1 || g !== 1)
                do
                  if (m--, g--, g < 0 || o[m] !== w[g]) {
                    var E = `
` + o[m].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, E), E;
                  }
                while (m >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        G = !1, U.current = d, Ge(), Error.prepareStackTrace = f;
      }
      var P = e ? e.displayName || e.name : "", Te = P ? H(P) : "";
      return typeof e == "function" && M.set(e, Te), Te;
    }
    function Ke(e, r, t) {
      return pe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
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
          case _:
            return Ke(e.render);
          case b:
            return W(e.type, r, t);
          case j: {
            var n = e, f = n._payload, d = n._init;
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
    function Ze(e, r, t, n, f) {
      {
        var d = Function.call.bind(Y);
        for (var c in e)
          if (d(e, c)) {
            var o = void 0;
            try {
              if (typeof e[c] != "function") {
                var w = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              o = e[c](r, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              o = m;
            }
            o && !(o instanceof Error) && (q(f), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof o), q(null)), o instanceof Error && !(o.message in _e) && (_e[o.message] = !0, q(f), x("Failed %s type: %s", t, o.message), q(null));
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
    function ar(e) {
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
    function lr(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = T(F.current.type);
        K[t] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(F.current.type), e.ref), K[t] = !0);
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
    var or = function(e, r, t, n, f, d, c) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ur(e, r, t, n, f) {
      {
        var d, c = {}, o = null, w = null;
        t !== void 0 && (be(t), o = "" + t), nr(r) && (be(r.key), o = "" + r.key), ar(r) && (w = r.ref, lr(r, f));
        for (d in r)
          Y.call(r, d) && !tr.hasOwnProperty(d) && (c[d] = r[d]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (d in m)
            c[d] === void 0 && (c[d] = m[d]);
        }
        if (o || w) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ir(c, g), w && sr(c, g);
        }
        return or(e, o, w, f, n, F.current, c);
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
          var e = T(X.current.type);
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
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + T(e._owner.type) + "."), k(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && je(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Ne(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), c; !(c = d.next()).done; )
              Q(c.value) && je(c.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = T(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function $e(e, r, t, n, f, d) {
      {
        var c = Le(e);
        if (!c) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = cr(f);
          w ? o += w : o += we();
          var m;
          e === null ? m = "null" : J(e) ? m = "array" : e !== void 0 && e.$$typeof === l ? (m = "<" + (T(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, o);
        }
        var g = ur(e, r, t, f, d);
        if (g == null)
          return g;
        if (c) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (J(E)) {
                for (var P = 0; P < E.length; P++)
                  Se(E[P], e);
                Object.freeze && Object.freeze(E);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(E, e);
        }
        return e === u ? vr(g) : dr(g), g;
      }
    }
    function hr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function pr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var _r = pr, mr = hr;
    I.Fragment = u, I.jsx = _r, I.jsxs = mr;
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
  size: i = "medium",
  disabled: l = !1,
  onClick: s,
  text: u,
  id: p,
  isTextVisible: v = !0,
  iconLeft: h,
  iconRight: R
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    "aria-label": v ? void 0 : u,
    className: `${Oe["ds-button"]} ${Oe[`size-${i}`]}`,
    "data-testid": `${p}-button`,
    type: "button",
    disabled: l,
    onClick: s,
    children: [
      h,
      v && u,
      R
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
  ariaLabel: i,
  className: l = "",
  direction: s,
  disabled: u,
  id: p,
  onClick: v,
  size: h
}) {
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      "aria-label": i,
      className: `
				${ee["ds-button-arrow"]}
				${ee[`arrow-${s}`]}
				${ee[`size-${h}`]}
				${l}
			`,
      "data-testid": `ds-button-arrow-${p}-${s}`,
      disabled: u,
      type: "button",
      onClick: v
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
  children: i,
  className: l = "",
  id: s,
  title: u
}) {
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `${Pe.frame} ${l}`,
      "data-testid": `ds-frame-${s}`,
      children: [
        u && /* @__PURE__ */ a.jsx(
          ze,
          {
            className: Pe.title,
            text: u,
            id: `frame-${s}`
          }
        ),
        i
      ]
    }
  );
}
const xr = ({
  isChecked: i = !1
}) => i ? /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", children: [
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
] }) : i ? null : /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", children: [
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
function Sr({ initialValue: i, onChange: l }) {
  const [s, u] = L(i);
  return ae(() => {
    u(i);
  }, [i, u]), { value: s, handleInputChange: (v) => {
    const h = v.target.value;
    u(h), l && l(h);
  } };
}
function $r({
  className: i = "",
  type: l = "text",
  id: s,
  disabled: u = !1,
  readonly: p = !1,
  initialValue: v = "",
  labelName: h,
  wrapperLayout: R = "vertical",
  min: _,
  max: S,
  onChange: y
}) {
  const { value: b, handleInputChange: j } = Sr({ initialValue: v, onChange: y }), $ = `ds-input-${s}`;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `${re[`wrapper-${R}`]} ${i}`,
      "data-testid": $,
      children: [
        h && /* @__PURE__ */ a.jsx(
          "label",
          {
            className: re.label,
            "data-testid": `ds-input-label-${s}`,
            htmlFor: $,
            children: h
          }
        ),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            id: $,
            className: re.input,
            "data-testid": `ds-input-input-${s}`,
            type: l,
            disabled: u,
            readOnly: p,
            value: b,
            min: _ ?? void 0,
            max: S ?? void 0,
            name: $,
            onChange: j
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
function kr({ initialChecked: i, onChange: l }) {
  const [s, u] = L(i);
  return ae(() => {
    u(i);
  }, [i]), {
    checked: s,
    handleChange: (v) => {
      l && l(), u(v.target.checked);
    }
  };
}
const qr = ({
  initialChecked: i = !1,
  disabled: l = !1,
  id: s,
  onChange: u,
  name: p,
  text: v
}) => {
  const {
    checked: h,
    handleChange: R
  } = kr({
    initialChecked: i,
    onChange: u
  });
  return /* @__PURE__ */ a.jsxs(
    "label",
    {
      "aria-label": v.visible ? void 0 : v.content,
      className: `${N.wrapper} ${l ? N.disabled : ""}`,
      "data-testid": `${s}-radio`,
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            className: N.input,
            checked: h,
            "data-testid": `${s}-radio-input`,
            disabled: l,
            name: p,
            type: "radio",
            value: s,
            onChange: R
          }
        ),
        /* @__PURE__ */ a.jsx(
          "span",
          {
            className: N.icon,
            "data-testid": `${s}-radio-icon`,
            children: /* @__PURE__ */ a.jsx(xr, { isChecked: h })
          }
        ),
        v.visible && /* @__PURE__ */ a.jsx(
          ze,
          {
            className: N.text,
            id: s,
            text: v.content
          }
        )
      ]
    }
  );
};
function Pr(i) {
  const [l, s] = L(i);
  return {
    value: l,
    handleChange: (p) => {
      s(p.target.value);
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
  className: i = "",
  id: l,
  required: s = !1,
  disabled: u = !1,
  modelValue: p,
  options: v,
  labelName: h,
  onSelect: R
}) {
  const { value: _, handleChange: S } = Pr(p), y = (b) => {
    S(b), R(b);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: `${A.wrapper} ${i}`, children: [
    h && /* @__PURE__ */ a.jsx(
      "label",
      {
        className: A.label,
        "data-testid": `ds-select-label-${l}`,
        htmlFor: l,
        children: h
      }
    ),
    /* @__PURE__ */ a.jsx(
      "select",
      {
        className: A.select,
        "data-testid": `ds-select-select-${l}`,
        disabled: u,
        id: l,
        name: l,
        onChange: y,
        required: s,
        value: _,
        children: v.map((b, j) => /* @__PURE__ */ a.jsx(
          "option",
          {
            className: A.option,
            "data-testid": `ds-select-option-${l}-${j}`,
            value: b.value,
            children: b.name
          },
          `${l}-${b.value}`
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
  modelValue: i,
  onIncrease: l,
  onDecrease: s
}) {
  const [u, p] = L(i);
  return ae(() => {
    p(i);
  }, [i]), { value: u, handleIncrease: () => {
    l && l();
  }, handleDecrease: () => {
    s && s();
  } };
}
function Ur({
  className: i = "",
  id: l,
  modelValue: s,
  disabled: u = !1,
  onIncrease: p,
  onDecrease: v
}) {
  const {
    value: h,
    handleIncrease: R,
    handleDecrease: _
  } = Nr({ modelValue: s, onIncrease: p, onDecrease: v });
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `
        ${Ve["ds-stepper"]}
        ${u ? Ve["state-disabled"] : ""}
        ${i}
      `,
      children: [
        /* @__PURE__ */ a.jsx(
          $r,
          {
            id: `stepper-${l}`,
            initialValue: h,
            readonly: !0
          }
        ),
        /* @__PURE__ */ a.jsx(
          ke,
          {
            ariaLabel: "Increase",
            direction: "top",
            disabled: u,
            id: l,
            size: "small",
            onClick: R
          }
        ),
        /* @__PURE__ */ a.jsx(
          ke,
          {
            ariaLabel: "Decrease",
            direction: "bottom",
            disabled: u,
            id: l,
            size: "small",
            onClick: _
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
  className: i = "",
  id: l,
  text: s
}) {
  return /* @__PURE__ */ a.jsx(
    "p",
    {
      className: `${Hr.DSText} ${i}`,
      "data-testid": `ds-text-${l}`,
      children: s
    }
  );
}
export {
  Wr as DSButton,
  ke as DSButtonArrow,
  Yr as DSFrame,
  xr as DSIconRadioSVG,
  wr as DSIconSelectButton,
  $r as DSInput,
  qr as DSRadio,
  Lr as DSSelect,
  Ur as DSStepper,
  ze as DSText
};
//# sourceMappingURL=index.js.map
