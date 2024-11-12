var d = Object.defineProperty;
var h = (r, e, t) => e in r ? d(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var n = (r, e, t) => (h(r, typeof e != "symbol" ? e + "" : e, t), t);
const o = class o {
  constructor(e) {
    n(this, "config");
    this.config = e;
  }
  static getInstance(e) {
    for (; o.lock; )
      ;
    return o.lock = !0, o.instance || (o.instance = new o(e)), o.lock = !1, o.instance;
  }
  setLanguage(e) {
    this.config.language !== e && (this.config.language = e);
  }
  setTheme(e) {
    this.config.theme !== e && (this.config.theme = e);
  }
};
// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
n(o, "instance"), n(o, "lock", !1);
let g = o;
class y {
  constructor() {
    n(this, "config");
    this.config = {
      theme: void 0,
      language: void 0
    };
  }
  addTheme(e) {
    return this.config.theme = e, this;
  }
  addLanguage(e) {
    return this.config.language = e, this;
  }
  build() {
    return this.validateConfig(), this.config;
  }
  validateConfig() {
    for (const [e, t] of Object.entries(this.config))
      if (t === void 0)
        throw new Error(`[MSAppConfig]: Missing ${e}`);
  }
}
class l {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class W {
  constructor() {
    n(this, "appControllerRepository");
    this.appControllerRepository = new l();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class u {
  constructor(e = [
    { name: "Chrome", regex: /chrome|chromium|crios/i },
    { name: "Firefox", regex: /firefox|fxios/i },
    { name: "Safari", regex: /safari/i },
    { name: "Opera", regex: /opr\//i },
    { name: "Edge", regex: /edg/i }
  ]) {
    this.browserNames = e;
  }
  get() {
    const e = window.navigator.userAgent;
    if (!e)
      return null;
    for (const t in this.browserNames) {
      const i = this.browserNames[t];
      if (i.regex.test(e))
        return i.name;
    }
    return null;
  }
}
class w {
  constructor(e = [
    {
      name: "mobile",
      regex: /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i
    },
    {
      name: "desktop",
      regex: /Win|Windows|OpenBSD|SunOS|Linux|X11|Mac|Mac OS X/i
    }
  ]) {
    this.devicesNames = e;
  }
  get() {
    const e = window.navigator.userAgent;
    if (!e)
      return null;
    for (const t in this.devicesNames) {
      const i = this.devicesNames[t];
      if (i.regex.test(e))
        return i.name;
    }
    return null;
  }
}
class p {
  constructor(e = [
    { name: "Windows 3.11", regex: /Win16/ },
    { name: "Windows 95", regex: /(Windows 95|Win95|Windows_95)/ },
    { name: "Windows ME", regex: /(Win 9x 4.90|Windows ME)/ },
    { name: "Windows 98", regex: /(Windows 98|Win98)/ },
    { name: "Windows CE", regex: /Windows CE/ },
    { name: "Windows 2000", regex: /(Windows NT 5.0|Windows 2000)/ },
    { name: "Windows XP", regex: /(Windows NT 5.1|Windows XP)/ },
    { name: "Windows Server 2003", regex: /Windows NT 5.2/ },
    { name: "Windows Vista", regex: /Windows NT 6.0/ },
    { name: "Windows 7", regex: /(Windows 7|Windows NT 6.1)/ },
    { name: "Windows 8.1", regex: /(Windows 8.1|Windows NT 6.3)/ },
    { name: "Windows 8", regex: /(Windows 8|Windows NT 6.2)/ },
    {
      name: "Windows NT 4.0",
      regex: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
    },
    { name: "Windows ME", regex: /Windows ME/ },
    { name: "Android", regex: /Android/ },
    { name: "Open BSD", regex: /OpenBSD/ },
    { name: "Sun OS", regex: /SunOS/ },
    { name: "Linux", regex: /(Linux|X11)/ },
    { name: "iOS", regex: /(iPhone|iPad|iPod)/ },
    { name: "Mac OS X", regex: /Mac OS X/ },
    { name: "Mac OS", regex: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
    { name: "QNX", regex: /QNX/ },
    { name: "UNIX", regex: /UNIX/ },
    { name: "BeOS", regex: /BeOS/ },
    { name: "OS/2", regex: /OS\/2/ }
  ]) {
    this.operatingSystems = e;
  }
  get() {
    const e = window.navigator.userAgent;
    if (!e)
      return null;
    for (const t in this.operatingSystems) {
      const i = this.operatingSystems[t];
      if (i.regex.test(e))
        return i.name;
    }
    return null;
  }
}
class f {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class E {
  constructor(e = new u(), t = new w(), i = new p(), c = new f()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = i, this.screenRepository = c;
  }
  getBrowserName() {
    return this.browserNameRepository.get();
  }
  getDeviceType() {
    return this.deviceTypeRepository.get();
  }
  getOperatingSystem() {
    return this.operatingSystemRepository.get();
  }
  getScreenInformation() {
    return this.screenRepository.get();
  }
}
class x {
  addItem(e, t) {
    window.localStorage.setItem(e, t);
  }
  getItem(e) {
    return window.localStorage.getItem(e);
  }
  isItemExist(e) {
    const t = this.getItem(e);
    return !!(t != null && t.length);
  }
  removeItem(e) {
    window.localStorage.removeItem(e);
  }
  clearAll() {
    window.localStorage.clear();
  }
}
class S {
  constructor() {
    n(this, "storageRepository");
    this.storageRepository = new x();
  }
  addItem(e, t) {
    this.storageRepository.addItem(e, t);
  }
  getItem(e) {
    return this.storageRepository.getItem(e);
  }
  isItemExist(e) {
    return this.storageRepository.isItemExist(e);
  }
  updateItem(e, t) {
    this.storageRepository.addItem(e, t);
  }
  removeItem(e) {
    this.storageRepository.removeItem(e);
  }
}
var a = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(a || {}), s = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(s || {}), m = /* @__PURE__ */ ((r) => (r.DARK = "dark", r.LIGHT = "light", r))(m || {});
class I {
  constructor() {
    n(this, "storage", new S());
    n(this, "defaultTheme", m.LIGHT);
  }
  getThemeColor() {
    return this.storage.getItem(s.THEME) ?? this.defaultTheme;
  }
  setThemeColor(e) {
    this.storage.updateItem(s.THEME, e);
  }
  updateTheme(e) {
    const t = window.document.querySelector("html");
    !t || t.getAttribute(a.THEME) === e || t.setAttribute(a.THEME, e);
  }
  mountThemeColor() {
    if (!this.storage.isItemExist(s.THEME)) {
      this.initDefaultTheme();
      return;
    }
    const t = this.storage.getItem(s.THEME);
    t && this.updateTheme(t);
  }
  initDefaultTheme() {
    this.updateTheme(this.defaultTheme), this.setThemeColor(this.defaultTheme);
  }
}
export {
  g as MSAppConfig,
  y as MSAppConfigBuilder,
  W as MSAppController,
  E as MSBrowserEnv,
  S as MSStorage,
  I as MSTheme
};
//# sourceMappingURL=index.js.map
