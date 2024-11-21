(function(n,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(n=typeof globalThis<"u"?globalThis:n||self,i(n["micro-services"]={}))})(this,function(n){"use strict";var H=Object.defineProperty;var P=(n,i,g)=>i in n?H(n,i,{enumerable:!0,configurable:!0,writable:!0,value:g}):n[i]=g;var c=(n,i,g)=>(P(n,typeof i!="symbol"?i+"":i,g),g);const a=class a{constructor(e){c(this,"config");this.config=e}static getInstance(e){for(;a.lock;);return a.lock=!0,a.instance||(a.instance=new a(e)),a.lock=!1,a.instance}set(e,t){this.config[e]!==t&&(this.config[e]=t)}get(e){return this.config[e]}};c(a,"instance"),c(a,"lock",!1);let i=a;class g{constructor(){c(this,"UNKNOWN_ERROR_MESSAGE","Unknown error message")}CatchError(e,t){const o=this;return(s,m,d)=>{const A=d.value;d.value=function(...b){try{return A.apply(this,b)}catch(D){throw o.createError(e,t,D)}}}}createError(e,t,o){const s=this.generateErrorMessage(o),m=new Error(s);return m.name=`[${e}]<${t}>`,m}generateErrorMessage(e){return e instanceof Error&&e.message.length?e.message:this.UNKNOWN_ERROR_MESSAGE}}const u=new g,w={CatchError:u.CatchError.bind(u)};var S=Object.defineProperty,y=Object.getOwnPropertyDescriptor,T=(r,e,t,o)=>{for(var s=o>1?void 0:o?y(e,t):e,m=r.length-1,d;m>=0;m--)(d=r[m])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&S(e,t,s),s};class p{constructor(e){c(this,"config");this.config=e}add(e,t){return this.config[e]=t,this}build(){return this.validateConfig(),this.config}validateConfig(){if(this.config===void 0)throw new Error("missing config");for(const[e,t]of Object.entries(this.config))if(t===void 0)throw new Error(`missing ${e}`)}}T([w.CatchError("AppConfigBuilderDomain","validateConfig")],p.prototype,"validateConfig",1);class x{restartApplication(){window.location.reload()}shutdownApplication(){window.location.href="https://google.com"}}class W{constructor(){c(this,"appControllerRepository");this.appControllerRepository=new x}restartApplication(){this.appControllerRepository.restartApplication()}shutdownApplication(){this.appControllerRepository.shutdownApplication()}}class v{constructor(e=[{name:"Chrome",regex:/chrome|chromium|crios/i},{name:"Firefox",regex:/firefox|fxios/i},{name:"Safari",regex:/safari/i},{name:"Opera",regex:/opr\//i},{name:"Edge",regex:/edg/i}]){this.browserNames=e}get(){const e=window.navigator.userAgent;if(!e)return null;for(const t in this.browserNames){const o=this.browserNames[t];if(o.regex.test(e))return o.name}return null}}class M{constructor(e=[{name:"mobile",regex:/iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i},{name:"desktop",regex:/Win|Windows|OpenBSD|SunOS|Linux|X11|Mac|Mac OS X/i}]){this.devicesNames=e}get(){const e=window.navigator.userAgent;if(!e)return null;for(const t in this.devicesNames){const o=this.devicesNames[t];if(o.regex.test(e))return o.name}return null}}class N{constructor(e=[{name:"Windows 3.11",regex:/Win16/},{name:"Windows 95",regex:/(Windows 95|Win95|Windows_95)/},{name:"Windows ME",regex:/(Win 9x 4.90|Windows ME)/},{name:"Windows 98",regex:/(Windows 98|Win98)/},{name:"Windows CE",regex:/Windows CE/},{name:"Windows 2000",regex:/(Windows NT 5.0|Windows 2000)/},{name:"Windows XP",regex:/(Windows NT 5.1|Windows XP)/},{name:"Windows Server 2003",regex:/Windows NT 5.2/},{name:"Windows Vista",regex:/Windows NT 6.0/},{name:"Windows 7",regex:/(Windows 7|Windows NT 6.1)/},{name:"Windows 8.1",regex:/(Windows 8.1|Windows NT 6.3)/},{name:"Windows 8",regex:/(Windows 8|Windows NT 6.2)/},{name:"Windows NT 4.0",regex:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{name:"Windows ME",regex:/Windows ME/},{name:"Android",regex:/Android/},{name:"Open BSD",regex:/OpenBSD/},{name:"Sun OS",regex:/SunOS/},{name:"Linux",regex:/(Linux|X11)/},{name:"iOS",regex:/(iPhone|iPad|iPod)/},{name:"Mac OS X",regex:/Mac OS X/},{name:"Mac OS",regex:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{name:"QNX",regex:/QNX/},{name:"UNIX",regex:/UNIX/},{name:"BeOS",regex:/BeOS/},{name:"OS/2",regex:/OS\/2/}]){this.operatingSystems=e}get(){const e=window.navigator.userAgent;if(!e)return null;for(const t in this.operatingSystems){const o=this.operatingSystems[t];if(o.regex.test(e))return o.name}return null}}class R{get(){const e=window.screen;return e?{colorDepth:e.colorDepth,height:e.height,width:e.width}:null}}class I{constructor(e=new v,t=new M,o=new N,s=new R){this.browserNameRepository=e,this.deviceTypeRepository=t,this.operatingSystemRepository=o,this.screenRepository=s}getBrowserName(){return this.browserNameRepository.get()}getDeviceType(){return this.deviceTypeRepository.get()}getOperatingSystem(){return this.operatingSystemRepository.get()}getScreenInformation(){return this.screenRepository.get()}}class O{addItem(e,t){window.localStorage.setItem(e,t)}getItem(e){return window.localStorage.getItem(e)}isItemExist(e){const t=this.getItem(e);return!!(t!=null&&t.length)}removeItem(e){window.localStorage.removeItem(e)}clearAll(){window.localStorage.clear()}}class f{constructor(){c(this,"storageRepository");this.storageRepository=new O}addItem(e,t){this.storageRepository.addItem(e,t)}getItem(e){return this.storageRepository.getItem(e)}isItemExist(e){return this.storageRepository.isItemExist(e)}updateItem(e,t){this.storageRepository.addItem(e,t)}removeItem(e){this.storageRepository.removeItem(e)}}var h=(r=>(r.THEME="theme",r))(h||{}),l=(r=>(r.THEME="theme",r))(l||{}),E=(r=>(r.DARK="dark",r.LIGHT="light",r))(E||{});class C{constructor(){c(this,"storage",new f);c(this,"defaultTheme",E.LIGHT)}getThemeColor(){return this.storage.getItem(l.THEME)??this.defaultTheme}setThemeColor(e){this.storage.updateItem(l.THEME,e)}updateTheme(e){const t=window.document.querySelector("html");!t||t.getAttribute(h.THEME)===e||t.setAttribute(h.THEME,e)}mountThemeColor(){if(!this.storage.isItemExist(l.THEME)){this.initDefaultTheme();return}const t=this.storage.getItem(l.THEME);t&&this.updateTheme(t)}initDefaultTheme(){this.updateTheme(this.defaultTheme),this.setThemeColor(this.defaultTheme)}}n.MSAppConfig=i,n.MSAppConfigBuilder=p,n.MSAppController=W,n.MSBrowserEnv=I,n.MSErrorHandler=w,n.MSStorage=f,n.MSTheme=C,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.cjs.map
