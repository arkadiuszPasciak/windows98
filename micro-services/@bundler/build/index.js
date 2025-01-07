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
let u = i;
class O {
  constructor() {
    c(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, t) {
    const n = this;
    return (o, s, a) => {
      const p = a.value;
      a.value = function(...f) {
        try {
          return p.apply(this, f);
        } catch (D) {
          throw n.createError(
            e,
            t,
            D
          );
        }
      };
    };
  }
  createError(e, t, n) {
    const o = this.generateErrorMessage(n), s = new Error(o);
    return s.name = `[${e}]<${t}>`, s;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const d = new O(), g = {
  CatchError: d.CatchError.bind(d)
};
var M = Object.defineProperty, x = Object.getOwnPropertyDescriptor, R = (r, e, t, n) => {
  for (var o = x(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (o = a(e, t, o) || o);
  return o && M(e, t, o), o;
};
class W {
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
R([
  g.CatchError("AppConfigBuilderDomain", "validateConfig")
], W.prototype, "validateConfig");
class C {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class ge {
  constructor() {
    c(this, "appControllerRepository");
    this.appControllerRepository = new C();
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
      const n = this.browserNames[t];
      if (n.regex.test(e))
        return n.name;
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
    if (!e) return null;
    for (const t in this.devicesNames) {
      const n = this.devicesNames[t];
      if (n.regex.test(e))
        return n.name;
    }
    return null;
  }
}
class b {
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
      const n = this.operatingSystems[t];
      if (n.regex.test(e))
        return n.name;
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
class le {
  constructor(e = new N(), t = new T(), n = new b(), o = new L()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = n, this.screenRepository = o;
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
var _ = Object.defineProperty, P = Object.getOwnPropertyDescriptor, A = (r, e, t, n) => {
  for (var o = P(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (o = a(e, t, o) || o);
  return o && _(e, t, o), o;
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
A([
  g.CatchError("DateStrategy", "createDate")
], l.prototype, "createDate");
class I {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e, t) {
    const n = this.getActiveDay(e, t), o = this.getDaysInMonth(e, t), s = this.getFirstDayOfWeek(e, t);
    return {
      activeDay: n,
      daysInMonth: o,
      firstDayOfWeek: s
    };
  }
  getActiveDay(e, t) {
    const n = this.dateStrategy.createDate(), o = n.getFullYear(), s = n.getMonth();
    return o === t && s === e ? n.getDate() : null;
  }
  getDaysInMonth(e, t) {
    const n = this.dateStrategy.createDate();
    return n.setFullYear(t, e + 1, 0), n.getDate();
  }
  getFirstDayOfWeek(e, t) {
    const n = this.dateStrategy.createDate();
    return n.setFullYear(t, e, 1), n.getDay();
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
  toLocaleString(e, t, n) {
    return this.dateStrategy.createDate(e).toLocaleString(t, n);
  }
  toLocaleDateString(e, t, n) {
    return this.dateStrategy.createDate(e).toLocaleDateString(t, n);
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
  toLocaleTimeString(e, t, n) {
    return this.dateStrategy.createDate(e).toLocaleTimeString(t, n);
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
class F {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e) {
    return this.dateStrategy.createDate(e).getFullYear();
  }
}
class H {
  constructor(e = new I(), t = new $(), n = new B(), o = new j(), s = new F()) {
    this.calendarRepository = e, this.dateRepository = t, this.monthRepository = n, this.timeRepository = o, this.yearRepository = s;
  }
  getCalendar(e, t) {
    return this.calendarRepository.get(e, t);
  }
  getDate(e, t, n) {
    return this.dateRepository.toLocaleDateString(e, t, n);
  }
  getDateWithTime(e, t, n) {
    return this.dateRepository.toLocaleString(e, t, n);
  }
  getMonth(e) {
    return this.monthRepository.get(e);
  }
  getTime(e, t, n) {
    return this.timeRepository.toLocaleTimeString(e, t, n);
  }
  getYear(e) {
    return this.yearRepository.get(e);
  }
}
const pe = new H();
class X {
  async openFile() {
    return new Promise((e, t) => {
      const n = document.createElement("input");
      n.type = "file", n.onchange = async (o) => {
        const s = o.target;
        if (!s.files || s.files.length === 0) {
          t(new Error("No file selected"));
          return;
        }
        const p = await s.files[0].text();
        e(p);
      }, n.click();
    });
  }
  async saveFile(e, t, n) {
    const o = new Blob([e], { type: n }), s = document.createElement("a");
    s.href = URL.createObjectURL(o), s.download = t, document.body.appendChild(s), s.click(), document.body.removeChild(s);
  }
}
const ue = new X();
var h = /* @__PURE__ */ ((r) => (r.LANGUAGE = "lang", r))(h || {}), U = Object.defineProperty, k = Object.getOwnPropertyDescriptor, Y = (r, e, t, n) => {
  for (var o = k(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (o = a(e, t, o) || o);
  return o && U(e, t, o), o;
};
class m {
  applyLanguage(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(h.LANGUAGE, e);
    else
      throw new Error("Element HTML not found");
  }
}
Y([
  g.CatchError("AttributeLanguageStrategy", "applyLanguage")
], m.prototype, "applyLanguage");
var G = Object.defineProperty, q = Object.getOwnPropertyDescriptor, K = (r, e, t, n) => {
  for (var o = q(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (o = a(e, t, o) || o);
  return o && G(e, t, o), o;
};
class V {
  applyLanguage(e) {
    const t = window.document.querySelector("html"), n = `language-${e}`;
    if (t)
      t.className = n;
    else
      throw new Error("Element HTML not found");
  }
}
K([
  g.CatchError("ClassLanguageStrategy", "applyLanguage")
], V.prototype, "applyLanguage");
class Q {
  constructor(e) {
    c(this, "languageStrategy");
    this.languageStrategy = e;
  }
  updateLanguage(e) {
    this.languageStrategy.applyLanguage(e);
  }
}
class de extends Q {
  constructor() {
    super(new m());
  }
}
class z {
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
class J {
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
class w {
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
class he extends w {
  constructor() {
    super(new z());
  }
}
class me extends w {
  constructor() {
    super(new J());
  }
}
var y = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(y || {}), Z = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, te = (r, e, t, n) => {
  for (var o = ee(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (o = a(e, t, o) || o);
  return o && Z(e, t, o), o;
};
class S {
  applyTheme(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(y.THEME, e);
    else
      throw new Error("Element HTML not found");
  }
}
te([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], S.prototype, "applyTheme");
var re = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, oe = (r, e, t, n) => {
  for (var o = ne(e, t), s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (o = a(e, t, o) || o);
  return o && re(e, t, o), o;
};
class se {
  applyTheme(e) {
    const t = window.document.querySelector("html"), n = `theme-${e}`;
    if (t)
      t.className = n;
    else
      throw new Error("Element HTML not found");
  }
}
oe([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], se.prototype, "applyTheme");
class ae {
  constructor(e) {
    c(this, "themeStrategy");
    this.themeStrategy = e;
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
}
class we extends ae {
  constructor() {
    super(new S());
  }
}
export {
  u as MSAppConfig,
  W as MSAppConfigBuilder,
  ge as MSAppController,
  le as MSBrowserEnv,
  pe as MSDate,
  g as MSErrorHandler,
  ue as MSFileManager,
  de as MSLanguage,
  he as MSLocalStorage,
  me as MSSessionStorage,
  we as MSTheme
};
//# sourceMappingURL=index.js.map
