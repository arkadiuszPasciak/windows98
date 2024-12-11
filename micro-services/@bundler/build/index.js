var v = Object.defineProperty;
var E = (t, e, r) => e in t ? v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var c = (t, e, r) => (E(t, typeof e != "symbol" ? e + "" : e, r), r);
const i = class i {
  constructor(e) {
    c(this, "config");
    this.config = e;
  }
  static getInstance(e) {
    for (; i.lock; )
      ;
    return i.lock = !0, i.instance || (i.instance = new i(e)), i.lock = !1, i.instance;
  }
  set(e, r) {
    this.config[e] !== r && (this.config[e] = r);
  }
  get(e) {
    return this.config[e];
  }
};
// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
c(i, "instance"), c(i, "lock", !1);
let l = i;
class x {
  constructor() {
    c(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, r) {
    const n = this;
    return (o, s, a) => {
      const y = a.value;
      a.value = function(...f) {
        try {
          return y.apply(this, f);
        } catch (S) {
          throw n.createError(
            e,
            r,
            S
          );
        }
      };
    };
  }
  createError(e, r, n) {
    const o = this.generateErrorMessage(n), s = new Error(o);
    return s.name = `[${e}]<${r}>`, s;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const p = new x(), g = {
  CatchError: p.CatchError.bind(p)
};
var W = Object.defineProperty, O = Object.getOwnPropertyDescriptor, N = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? O(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && W(e, r, o), o;
};
class C {
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
N([
  g.CatchError("AppConfigBuilderDomain", "validateConfig")
], C.prototype, "validateConfig", 1);
class T {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class Z {
  constructor() {
    c(this, "appControllerRepository");
    this.appControllerRepository = new T();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class M {
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
      const n = this.browserNames[r];
      if (n.regex.test(e))
        return n.name;
    }
    return null;
  }
}
class A {
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
      const n = this.devicesNames[r];
      if (n.regex.test(e))
        return n.name;
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
      const n = this.operatingSystems[r];
      if (n.regex.test(e))
        return n.name;
    }
    return null;
  }
}
class P {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class k {
  constructor(e = new M(), r = new A(), n = new R(), o = new P()) {
    this.browserNameRepository = e, this.deviceTypeRepository = r, this.operatingSystemRepository = n, this.screenRepository = o;
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
var m = /* @__PURE__ */ ((t) => (t.LANGUAGE = "lang", t))(m || {}), _ = Object.defineProperty, b = Object.getOwnPropertyDescriptor, L = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? b(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && _(e, r, o), o;
};
class u {
  applyLanguage(e) {
    const r = window.document.querySelector("html");
    if (r)
      r.setAttribute(m.LANGUAGE, e);
    else
      throw new Error("Element HTML not found");
  }
}
L([
  g.CatchError("AttributeLanguageStrategy", "applyLanguage")
], u.prototype, "applyLanguage", 1);
var D = Object.defineProperty, I = Object.getOwnPropertyDescriptor, $ = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? I(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && D(e, r, o), o;
};
class B {
  applyLanguage(e) {
    const r = window.document.querySelector("html"), n = `language-${e}`;
    if (r)
      r.className = n;
    else
      throw new Error("Element HTML not found");
  }
}
$([
  g.CatchError("ClassLanguageStrategy", "applyLanguage")
], B.prototype, "applyLanguage", 1);
class j {
  constructor(e) {
    c(this, "languageStrategy");
    this.languageStrategy = e;
  }
  updateLanguage(e) {
    this.languageStrategy.applyLanguage(e);
  }
}
class ee extends j {
  constructor() {
    super(new u());
  }
}
class X {
  getItem(e) {
    return window.localStorage.getItem(e);
  }
  setItem(e, r) {
    window.localStorage.setItem(e, r);
  }
  removeItem(e) {
    window.localStorage.removeItem(e);
  }
  clear() {
    window.localStorage.clear();
  }
}
class H {
  getItem(e) {
    return window.sessionStorage.getItem(e);
  }
  setItem(e, r) {
    window.sessionStorage.setItem(e, r);
  }
  removeItem(e) {
    window.sessionStorage.removeItem(e);
  }
  clear() {
    window.sessionStorage.clear();
  }
}
class w {
  constructor(e) {
    c(this, "storageRepository");
    this.storageRepository = e;
  }
  set(e, r) {
    this.storageRepository.setItem(e, r);
  }
  get(e) {
    return this.storageRepository.getItem(e);
  }
  exists(e) {
    const r = this.get(e);
    return !!(r != null && r.toString().length);
  }
  remove(e) {
    this.storageRepository.removeItem(e);
  }
}
class re extends w {
  constructor() {
    super(new X());
  }
}
class te extends w {
  constructor() {
    super(new H());
  }
}
var h = /* @__PURE__ */ ((t) => (t.THEME = "theme", t))(h || {}), U = Object.defineProperty, G = Object.getOwnPropertyDescriptor, q = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? G(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && U(e, r, o), o;
};
class d {
  applyTheme(e) {
    const r = window.document.querySelector("html");
    if (r)
      r.setAttribute(h.THEME, e);
    else
      throw new Error("Element HTML not found");
  }
}
q([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], d.prototype, "applyTheme", 1);
var K = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, F = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Q(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && K(e, r, o), o;
};
class V {
  applyTheme(e) {
    const r = window.document.querySelector("html"), n = `theme-${e}`;
    if (r)
      r.className = n;
    else
      throw new Error("Element HTML not found");
  }
}
F([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], V.prototype, "applyTheme", 1);
class z {
  constructor(e) {
    c(this, "themeStrategy");
    this.themeStrategy = e;
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
}
class oe extends z {
  constructor() {
    super(new d());
  }
}
export {
  l as MSAppConfig,
  C as MSAppConfigBuilder,
  Z as MSAppController,
  k as MSBrowserEnv,
  g as MSErrorHandler,
  ee as MSLanguage,
  re as MSLocalStorage,
  te as MSSessionStorage,
  oe as MSTheme
};
//# sourceMappingURL=index.js.map
