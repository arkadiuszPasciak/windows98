var f = Object.defineProperty;
var y = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var c = (t, e, r) => (y(t, typeof e != "symbol" ? e + "" : e, r), r);
const a = class a {
  constructor(e) {
    c(this, "config");
    this.config = e;
  }
  static getInstance(e) {
    for (; a.lock; )
      ;
    return a.lock = !0, a.instance || (a.instance = new a(e)), a.lock = !1, a.instance;
  }
  set(e, r) {
    this.config[e] !== r && (this.config[e] = r);
  }
  get(e) {
    return this.config[e];
  }
};
// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
c(a, "instance"), c(a, "lock", !1);
let m = a;
class S {
  constructor() {
    c(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, r) {
    const o = this;
    return (n, s, i) => {
      const w = i.value;
      i.value = function(...d) {
        try {
          return w.apply(this, d);
        } catch (u) {
          throw o.createError(
            e,
            r,
            u
          );
        }
      };
    };
  }
  createError(e, r, o) {
    const n = this.generateErrorMessage(o), s = new Error(n);
    return s.name = `[${e}]<${r}>`, s;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const l = new S(), g = {
  CatchError: l.CatchError.bind(l)
};
var v = Object.defineProperty, x = Object.getOwnPropertyDescriptor, E = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? x(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (n = (o ? i(e, r, n) : i(n)) || n);
  return o && n && v(e, r, n), n;
};
class W {
  constructor(e) {
    c(this, "config");
    this.config = e;
  }
  add(e, r) {
    return this.config[e] = r, this;
  }
  build() {
    return this.validateConfig(), this.config;
  }
  validateConfig() {
    if (this.config === void 0)
      throw new Error("missing config");
    for (const [e, r] of Object.entries(
      this.config
    ))
      if (r === void 0)
        throw new Error(`missing ${e}`);
  }
}
E([
  g.CatchError("AppConfigBuilderDomain", "validateConfig")
], W.prototype, "validateConfig", 1);
class O {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class j {
  constructor() {
    c(this, "appControllerRepository");
    this.appControllerRepository = new O();
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
    for (const r in this.browserNames) {
      const o = this.browserNames[r];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class T {
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
    for (const r in this.devicesNames) {
      const o = this.devicesNames[r];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class R {
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
    for (const r in this.operatingSystems) {
      const o = this.operatingSystems[r];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class M {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class H {
  constructor(e = new N(), r = new T(), o = new R(), n = new M()) {
    this.browserNameRepository = e, this.deviceTypeRepository = r, this.operatingSystemRepository = o, this.screenRepository = n;
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
  addItem(e, r) {
    window.localStorage.setItem(e, r);
  }
  getItem(e) {
    return window.localStorage.getItem(e);
  }
  isItemExist(e) {
    const r = this.getItem(e);
    return !!(r != null && r.length);
  }
  removeItem(e) {
    window.localStorage.removeItem(e);
  }
  clearAll() {
    window.localStorage.clear();
  }
}
class L {
  constructor() {
    c(this, "storageRepository");
    this.storageRepository = new C();
  }
  addItem(e, r) {
    this.storageRepository.addItem(e, r);
  }
  getItem(e) {
    return this.storageRepository.getItem(e);
  }
  isItemExist(e) {
    return this.storageRepository.isItemExist(e);
  }
  updateItem(e, r) {
    this.storageRepository.addItem(e, r);
  }
  removeItem(e) {
    this.storageRepository.removeItem(e);
  }
}
var p = /* @__PURE__ */ ((t) => (t.THEME = "theme", t))(p || {}), A = Object.defineProperty, I = Object.getOwnPropertyDescriptor, b = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? I(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (n = (o ? i(e, r, n) : i(n)) || n);
  return o && n && A(e, r, n), n;
};
class h {
  applyTheme(e) {
    const r = window.document.querySelector("html");
    if (r)
      r.setAttribute(p.THEME, e);
    else
      throw new Error("Element HTML not found");
  }
}
b([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], h.prototype, "applyTheme", 1);
var P = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, D = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? _(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (n = (o ? i(e, r, n) : i(n)) || n);
  return o && n && P(e, r, n), n;
};
class B {
  applyTheme(e) {
    const r = window.document.querySelector("html"), o = `theme-${e}`;
    if (r)
      r.className = o;
    else
      throw new Error("Element HTML not found");
  }
}
D([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], B.prototype, "applyTheme", 1);
class U {
  constructor() {
    c(this, "themeStrategy");
    this.themeStrategy = new h();
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
}
export {
  m as MSAppConfig,
  W as MSAppConfigBuilder,
  j as MSAppController,
  H as MSBrowserEnv,
  g as MSErrorHandler,
  L as MSStorage,
  U as MSTheme
};
//# sourceMappingURL=index.js.map
