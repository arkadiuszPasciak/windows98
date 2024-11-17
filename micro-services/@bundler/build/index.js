var f = Object.defineProperty;
var E = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var s = (r, e, t) => (E(r, typeof e != "symbol" ? e + "" : e, t), t);
const n = class n {
  constructor(e) {
    s(this, "config");
    this.config = e;
  }
  static getInstance(e) {
    for (; n.lock; )
      ;
    return n.lock = !0, n.instance || (n.instance = new n(e)), n.lock = !1, n.instance;
  }
  setLanguage(e) {
    this.config.language !== e && (this.config.language = e);
  }
  setTheme(e) {
    this.config.theme !== e && (this.config.theme = e);
  }
};
// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
s(n, "instance"), s(n, "lock", !1);
let d = n;
class A {
  constructor() {
    s(this, "config");
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
class S {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class O {
  constructor() {
    s(this, "appControllerRepository");
    this.appControllerRepository = new S();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class x {
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
      const o = this.browserNames[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class y {
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
      const o = this.devicesNames[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class T {
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
      const o = this.operatingSystems[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class W {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class C {
  constructor(e = new x(), t = new y(), o = new T(), a = new W()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = o, this.screenRepository = a;
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
class M {
  constructor() {
    s(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, t) {
    const o = this;
    return (a, c, m) => {
      const u = m.value;
      m.value = function(...w) {
        try {
          return u.apply(this, w);
        } catch (p) {
          throw o.createError(
            e,
            t,
            p
          );
        }
      };
    };
  }
  createError(e, t, o) {
    const a = this.generateErrorMessage(o), c = new Error(a);
    return c.name = `[MSErrorHandler:${e}] ${t}`, c;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const h = new M(), b = {
  CatchError: h.CatchError.bind(h)
};
class N {
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
class R {
  constructor() {
    s(this, "storageRepository");
    this.storageRepository = new N();
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
var g = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(g || {}), i = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(i || {}), l = /* @__PURE__ */ ((r) => (r.DARK = "dark", r.LIGHT = "light", r))(l || {});
class H {
  constructor() {
    s(this, "storage", new R());
    s(this, "defaultTheme", l.LIGHT);
  }
  getThemeColor() {
    return this.storage.getItem(i.THEME) ?? this.defaultTheme;
  }
  setThemeColor(e) {
    this.storage.updateItem(i.THEME, e);
  }
  updateTheme(e) {
    const t = window.document.querySelector("html");
    !t || t.getAttribute(g.THEME) === e || t.setAttribute(g.THEME, e);
  }
  mountThemeColor() {
    if (!this.storage.isItemExist(i.THEME)) {
      this.initDefaultTheme();
      return;
    }
    const t = this.storage.getItem(i.THEME);
    t && this.updateTheme(t);
  }
  initDefaultTheme() {
    this.updateTheme(this.defaultTheme), this.setThemeColor(this.defaultTheme);
  }
}
export {
  d as MSAppConfig,
  A as MSAppConfigBuilder,
  O as MSAppController,
  C as MSBrowserEnv,
  b as MSErrorHandler,
  R as MSStorage,
  H as MSTheme
};
//# sourceMappingURL=index.js.map
