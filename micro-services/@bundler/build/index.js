var D = Object.defineProperty;
var E = (r, e, t) => e in r ? D(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var c = (r, e, t) => E(r, typeof e != "symbol" ? e + "" : e, t);
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
  set(e, t) {
    this.config[e] !== t && (this.config[e] = t);
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
  CatchError(e, t) {
    const o = this;
    return (n, s, a) => {
      const y = a.value;
      a.value = function(...f) {
        try {
          return y.apply(this, f);
        } catch (v) {
          throw o.createError(
            e,
            t,
            v
          );
        }
      };
    };
  }
  createError(e, t, o) {
    const n = this.generateErrorMessage(o), s = new Error(n);
    return s.name = `[${e}]<${t}>`, s;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const p = new x(), g = {
  CatchError: p.CatchError.bind(p)
};
var O = Object.defineProperty, W = Object.getOwnPropertyDescriptor, M = (r, e, t, o) => {
  for (var n = W(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && O(e, t, n), n;
};
class N {
  constructor(e) {
    c(this, "config");
    this.config = e;
  }
  add(e, t) {
    return this.config[e] = t, this;
  }
  build() {
    return this.validateConfig(), this.config;
  }
  validateConfig() {
    if (this.config === void 0) throw new Error("missing config");
    for (const [e, t] of Object.entries(
      this.config
    ))
      if (t === void 0) throw new Error(`missing ${e}`);
  }
}
M([
  g.CatchError("AppConfigBuilderDomain", "validateConfig")
], N.prototype, "validateConfig");
class T {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class ne {
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
class C {
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
    if (!e) return null;
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
    if (!e) return null;
    for (const t in this.devicesNames) {
      const o = this.devicesNames[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class _ {
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
    if (!e) return null;
    for (const t in this.operatingSystems) {
      const o = this.operatingSystems[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class L {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class oe {
  constructor(e = new C(), t = new R(), o = new _(), n = new L()) {
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
var P = Object.defineProperty, b = Object.getOwnPropertyDescriptor, A = (r, e, t, o) => {
  for (var n = b(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && P(e, t, n), n;
};
class u {
  getDate(e) {
    return this.createDate(e).getDate();
  }
  getDay(e) {
    return this.createDate(e).getDay();
  }
  getFullYear(e) {
    return this.createDate(e).getFullYear();
  }
  getHours(e) {
    return this.createDate(e).getHours();
  }
  getMilliseconds(e) {
    return this.createDate(e).getMilliseconds();
  }
  getMinutes(e) {
    return this.createDate(e).getMinutes();
  }
  getMonth(e) {
    return this.createDate(e).getMonth();
  }
  getSeconds(e) {
    return this.createDate(e).getSeconds();
  }
  toLocaleString(e, t, o) {
    return this.createDate(e).toLocaleString(t, o);
  }
  toLocaleDateString(e, t, o) {
    return this.createDate(e).toLocaleDateString(t, o);
  }
  toLocaleTimeString(e, t, o) {
    return this.createDate(e).toLocaleTimeString(t, o);
  }
  createDate(e) {
    if (e && !this.isValidDate(e))
      throw new Error(`Invalid date string: ${e}`);
    return e ? new Date(e) : /* @__PURE__ */ new Date();
  }
  isValidDate(e) {
    return !Number.isNaN(Date.parse(e));
  }
}
A([
  g.CatchError("DateRepository", "CatchError")
], u.prototype, "createDate");
class I {
  constructor(e = new u()) {
    this.dateRepository = e;
  }
  getDate(e, t, o) {
    return this.dateRepository.toLocaleDateString(e, t, o);
  }
  getDateWithTime(e, t, o) {
    return this.dateRepository.toLocaleString(e, t, o);
  }
  getTime(e, t, o) {
    return this.dateRepository.toLocaleTimeString(e, t, o);
  }
}
const se = new I();
var m = /* @__PURE__ */ ((r) => (r.LANGUAGE = "lang", r))(m || {}), $ = Object.defineProperty, j = Object.getOwnPropertyDescriptor, B = (r, e, t, o) => {
  for (var n = j(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && $(e, t, n), n;
};
class d {
  applyLanguage(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(m.LANGUAGE, e);
    else
      throw new Error("Element HTML not found");
  }
}
B([
  g.CatchError("AttributeLanguageStrategy", "applyLanguage")
], d.prototype, "applyLanguage");
var H = Object.defineProperty, X = Object.getOwnPropertyDescriptor, U = (r, e, t, o) => {
  for (var n = X(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && H(e, t, n), n;
};
class G {
  applyLanguage(e) {
    const t = window.document.querySelector("html"), o = `language-${e}`;
    if (t)
      t.className = o;
    else
      throw new Error("Element HTML not found");
  }
}
U([
  g.CatchError("ClassLanguageStrategy", "applyLanguage")
], G.prototype, "applyLanguage");
class q {
  constructor(e) {
    c(this, "languageStrategy");
    this.languageStrategy = e;
  }
  updateLanguage(e) {
    this.languageStrategy.applyLanguage(e);
  }
}
class ae extends q {
  constructor() {
    super(new d());
  }
}
class F {
  getItem(e) {
    return window.localStorage.getItem(e);
  }
  setItem(e, t) {
    window.localStorage.setItem(e, t);
  }
  removeItem(e) {
    window.localStorage.removeItem(e);
  }
  clear() {
    window.localStorage.clear();
  }
}
class K {
  getItem(e) {
    return window.sessionStorage.getItem(e);
  }
  setItem(e, t) {
    window.sessionStorage.setItem(e, t);
  }
  removeItem(e) {
    window.sessionStorage.removeItem(e);
  }
  clear() {
    window.sessionStorage.clear();
  }
}
class h {
  constructor(e) {
    c(this, "storageRepository");
    this.storageRepository = e;
  }
  set(e, t) {
    this.storageRepository.setItem(e, t);
  }
  get(e) {
    return this.storageRepository.getItem(e);
  }
  exists(e) {
    const t = this.get(e);
    return !!(t != null && t.toString().length);
  }
  remove(e) {
    this.storageRepository.removeItem(e);
  }
}
class ie extends h {
  constructor() {
    super(new F());
  }
}
class ce extends h {
  constructor() {
    super(new K());
  }
}
var w = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(w || {}), V = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, Y = (r, e, t, o) => {
  for (var n = Q(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && V(e, t, n), n;
};
class S {
  applyTheme(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(w.THEME, e);
    else
      throw new Error("Element HTML not found");
  }
}
Y([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], S.prototype, "applyTheme");
var k = Object.defineProperty, z = Object.getOwnPropertyDescriptor, J = (r, e, t, o) => {
  for (var n = z(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && k(e, t, n), n;
};
class Z {
  applyTheme(e) {
    const t = window.document.querySelector("html"), o = `theme-${e}`;
    if (t)
      t.className = o;
    else
      throw new Error("Element HTML not found");
  }
}
J([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], Z.prototype, "applyTheme");
class ee {
  constructor(e) {
    c(this, "themeStrategy");
    this.themeStrategy = e;
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
}
class ge extends ee {
  constructor() {
    super(new S());
  }
}
export {
  l as MSAppConfig,
  N as MSAppConfigBuilder,
  ne as MSAppController,
  oe as MSBrowserEnv,
  se as MSDate,
  g as MSErrorHandler,
  ae as MSLanguage,
  ie as MSLocalStorage,
  ce as MSSessionStorage,
  ge as MSTheme
};
//# sourceMappingURL=index.js.map
