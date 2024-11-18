var f = Object.defineProperty;
var E = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var i = (r, e, t) => (E(r, typeof e != "symbol" ? e + "" : e, t), t);
const s = class s {
  constructor(e) {
    i(this, "config");
    this.config = e;
  }
  static getInstance(e) {
    for (; s.lock; )
      ;
    return s.lock = !0, s.instance || (s.instance = new s(e)), s.lock = !1, s.instance;
  }
  setLanguage(e) {
    this.config.language !== e && (this.config.language = e);
  }
  setTheme(e) {
    this.config.theme !== e && (this.config.theme = e);
  }
};
// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
i(s, "instance"), i(s, "lock", !1);
let l = s;
class S {
  constructor() {
    i(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, t) {
    const o = this;
    return (n, a, c) => {
      const u = c.value;
      c.value = function(...p) {
        try {
          return u.apply(this, p);
        } catch (w) {
          throw o.createError(
            e,
            t,
            w
          );
        }
      };
    };
  }
  createError(e, t, o) {
    const n = this.generateErrorMessage(o), a = new Error(n);
    return a.name = `[${e}]<${t}>`, a;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const h = new S(), x = {
  CatchError: h.CatchError.bind(h)
};
var y = Object.defineProperty, T = Object.getOwnPropertyDescriptor, W = (r, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? T(e, t) : e, a = r.length - 1, c; a >= 0; a--)
    (c = r[a]) && (n = (o ? c(e, t, n) : c(n)) || n);
  return o && n && y(e, t, n), n;
};
class v {
  constructor() {
    i(this, "config");
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
        throw new Error(`missing ${e}`);
  }
}
W([
  x.CatchError("AppConfigBuilderDomain", "validateConfig")
], v.prototype, "validateConfig", 1);
class M {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class H {
  constructor() {
    i(this, "appControllerRepository");
    this.appControllerRepository = new M();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class N {
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
class R {
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
class I {
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
class O {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class P {
  constructor(e = new N(), t = new R(), o = new I(), n = new O()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = o, this.screenRepository = n;
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
class C {
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
class A {
  constructor() {
    i(this, "storageRepository");
    this.storageRepository = new C();
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
var m = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(m || {}), g = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(g || {}), d = /* @__PURE__ */ ((r) => (r.DARK = "dark", r.LIGHT = "light", r))(d || {});
class B {
  constructor() {
    i(this, "storage", new A());
    i(this, "defaultTheme", d.LIGHT);
  }
  getThemeColor() {
    return this.storage.getItem(g.THEME) ?? this.defaultTheme;
  }
  setThemeColor(e) {
    this.storage.updateItem(g.THEME, e);
  }
  updateTheme(e) {
    const t = window.document.querySelector("html");
    !t || t.getAttribute(m.THEME) === e || t.setAttribute(m.THEME, e);
  }
  mountThemeColor() {
    if (!this.storage.isItemExist(g.THEME)) {
      this.initDefaultTheme();
      return;
    }
    const t = this.storage.getItem(g.THEME);
    t && this.updateTheme(t);
  }
  initDefaultTheme() {
    this.updateTheme(this.defaultTheme), this.setThemeColor(this.defaultTheme);
  }
}
export {
  l as MSAppConfig,
  v as MSAppConfigBuilder,
  H as MSAppController,
  P as MSBrowserEnv,
  x as MSErrorHandler,
  A as MSStorage,
  B as MSTheme
};
//# sourceMappingURL=index.js.map
