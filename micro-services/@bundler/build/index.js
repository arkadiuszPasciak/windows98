var v = Object.defineProperty;
var E = (r, e, t) => e in r ? v(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
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
let p = i;
class O {
  constructor() {
    c(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, t) {
    const o = this;
    return (n, s, a) => {
      const S = a.value;
      a.value = function(...f) {
        try {
          return S.apply(this, f);
        } catch (D) {
          throw o.createError(
            e,
            t,
            D
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
const u = new O(), g = {
  CatchError: u.CatchError.bind(u)
};
var x = Object.defineProperty, W = Object.getOwnPropertyDescriptor, M = (r, e, t, o) => {
  for (var n = W(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && x(e, t, n), n;
};
class R {
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
], R.prototype, "validateConfig");
class T {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class ce {
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
    if (!e) return null;
    for (const t in this.browserNames) {
      const o = this.browserNames[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class C {
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
class ge {
  constructor(e = new N(), t = new C(), o = new _(), n = new L()) {
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
var P = Object.defineProperty, A = Object.getOwnPropertyDescriptor, b = (r, e, t, o) => {
  for (var n = A(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && P(e, t, n), n;
};
class l {
  createDate(e) {
    if (e && !this.isValidDate(e))
      throw new Error(`Invalid date string: ${e}`);
    return e ? new Date(e) : /* @__PURE__ */ new Date();
  }
  isValidDate(e) {
    return !Number.isNaN(Date.parse(e));
  }
}
b([
  g.CatchError("DateStrategy", "createDate")
], l.prototype, "createDate");
class I {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e, t) {
    const o = this.getActiveDay(e, t), n = this.getDaysInMonth(e, t), s = this.getFirstDayOfWeek(e, t);
    return {
      activeDay: o,
      daysInMonth: n,
      firstDayOfWeek: s
    };
  }
  getActiveDay(e, t) {
    const o = this.dateStrategy.createDate(), n = o.getFullYear(), s = o.getMonth();
    return n === t && s === e ? o.getDate() : null;
  }
  getDaysInMonth(e, t) {
    const o = this.dateStrategy.createDate();
    return o.setFullYear(t, e + 1, 0), o.getDate();
  }
  getFirstDayOfWeek(e, t) {
    const o = this.dateStrategy.createDate();
    return o.setFullYear(t, e, 1), o.getDay();
  }
}
class $ {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  getDate(e) {
    return this.dateStrategy.createDate(e).getDate();
  }
  getDay(e) {
    return this.dateStrategy.createDate(e).getDay();
  }
  toLocaleString(e, t, o) {
    return this.dateStrategy.createDate(e).toLocaleString(t, o);
  }
  toLocaleDateString(e, t, o) {
    return this.dateStrategy.createDate(e).toLocaleDateString(t, o);
  }
}
class j {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  getHours(e) {
    return this.dateStrategy.createDate(e).getHours();
  }
  getMilliseconds(e) {
    return this.dateStrategy.createDate(e).getMilliseconds();
  }
  getMinutes(e) {
    return this.dateStrategy.createDate(e).getMinutes();
  }
  getSeconds(e) {
    return this.dateStrategy.createDate(e).getSeconds();
  }
  toLocaleTimeString(e, t, o) {
    return this.dateStrategy.createDate(e).toLocaleTimeString(t, o);
  }
}
class B {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e) {
    return this.dateStrategy.createDate(e).getMonth();
  }
}
class H {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e) {
    return this.dateStrategy.createDate(e).getFullYear();
  }
}
class X {
  constructor(e = new I(), t = new $(), o = new B(), n = new j(), s = new H()) {
    this.calendarRepository = e, this.dateRepository = t, this.monthRepository = o, this.timeRepository = n, this.yearRepository = s;
  }
  getCalendar(e, t) {
    return this.calendarRepository.get(e, t);
  }
  getDate(e, t, o) {
    return this.dateRepository.toLocaleDateString(e, t, o);
  }
  getDateWithTime(e, t, o) {
    return this.dateRepository.toLocaleString(e, t, o);
  }
  getMonth(e) {
    return this.monthRepository.get(e);
  }
  getTime(e, t, o) {
    return this.timeRepository.toLocaleTimeString(e, t, o);
  }
  getYear(e) {
    return this.yearRepository.get(e);
  }
}
const le = new X();
var d = /* @__PURE__ */ ((r) => (r.LANGUAGE = "lang", r))(d || {}), F = Object.defineProperty, U = Object.getOwnPropertyDescriptor, Y = (r, e, t, o) => {
  for (var n = U(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && F(e, t, n), n;
};
class h {
  applyLanguage(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(d.LANGUAGE, e);
    else
      throw new Error("Element HTML not found");
  }
}
Y([
  g.CatchError("AttributeLanguageStrategy", "applyLanguage")
], h.prototype, "applyLanguage");
var G = Object.defineProperty, k = Object.getOwnPropertyDescriptor, q = (r, e, t, o) => {
  for (var n = k(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && G(e, t, n), n;
};
class K {
  applyLanguage(e) {
    const t = window.document.querySelector("html"), o = `language-${e}`;
    if (t)
      t.className = o;
    else
      throw new Error("Element HTML not found");
  }
}
q([
  g.CatchError("ClassLanguageStrategy", "applyLanguage")
], K.prototype, "applyLanguage");
class V {
  constructor(e) {
    c(this, "languageStrategy");
    this.languageStrategy = e;
  }
  updateLanguage(e) {
    this.languageStrategy.applyLanguage(e);
  }
}
class pe extends V {
  constructor() {
    super(new h());
  }
}
class Q {
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
class z {
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
class m {
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
class ue extends m {
  constructor() {
    super(new Q());
  }
}
class de extends m {
  constructor() {
    super(new z());
  }
}
var w = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(w || {}), J = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, ee = (r, e, t, o) => {
  for (var n = Z(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && J(e, t, n), n;
};
class y {
  applyTheme(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(w.THEME, e);
    else
      throw new Error("Element HTML not found");
  }
}
ee([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], y.prototype, "applyTheme");
var te = Object.defineProperty, re = Object.getOwnPropertyDescriptor, ne = (r, e, t, o) => {
  for (var n = re(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (n = a(e, t, n) || n);
  return n && te(e, t, n), n;
};
class oe {
  applyTheme(e) {
    const t = window.document.querySelector("html"), o = `theme-${e}`;
    if (t)
      t.className = o;
    else
      throw new Error("Element HTML not found");
  }
}
ne([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], oe.prototype, "applyTheme");
class se {
  constructor(e) {
    c(this, "themeStrategy");
    this.themeStrategy = e;
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
}
class he extends se {
  constructor() {
    super(new y());
  }
}
export {
  p as MSAppConfig,
  R as MSAppConfigBuilder,
  ce as MSAppController,
  ge as MSBrowserEnv,
  le as MSDate,
  g as MSErrorHandler,
  pe as MSLanguage,
  ue as MSLocalStorage,
  de as MSSessionStorage,
  he as MSTheme
};
//# sourceMappingURL=index.js.map
