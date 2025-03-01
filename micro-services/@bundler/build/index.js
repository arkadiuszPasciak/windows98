var M = Object.defineProperty;
var x = (r, e, t) => e in r ? M(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var i = (r, e, t) => x(r, typeof e != "symbol" ? e + "" : e, t);
const c = class c {
  constructor(e) {
    i(this, "config");
    this.config = e;
  }
  static getInstance(e) {
    for (; c.lock; )
      ;
    return c.lock = !0, c.instance || (c.instance = new c(e)), c.lock = !1, c.instance;
  }
  set(e, t) {
    this.config[e] !== t && (this.config[e] = t);
  }
  get(e) {
    return this.config[e];
  }
};
// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
i(c, "instance"), i(c, "lock", !1);
let d = c;
class R {
  constructor() {
    i(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, t) {
    const n = this;
    return (s, o, a) => {
      const u = a.value;
      a.value = function(...O) {
        try {
          return u.apply(this, O);
        } catch (E) {
          throw n.createError(
            e,
            t,
            E
          );
        }
      };
    };
  }
  createError(e, t, n) {
    const s = this.generateErrorMessage(n), o = new Error(s);
    return o.name = `[${e}]<${t}>`, o;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const w = new R(), g = {
  CatchError: w.CatchError.bind(w)
};
var W = Object.defineProperty, C = Object.getOwnPropertyDescriptor, N = (r, e, t, n) => {
  for (var s = C(e, t), o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (s = a(e, t, s) || s);
  return s && W(e, t, s), s;
};
class T {
  constructor(e) {
    i(this, "config");
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
N([
  g.CatchError("AppConfigBuilderDomain", "validateConfig")
], T.prototype, "validateConfig");
class b {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class ye {
  constructor() {
    i(this, "appControllerRepository");
    this.appControllerRepository = new b();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class P {
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
class _ {
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
class L {
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
class A {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class fe {
  constructor(e = new P(), t = new _(), n = new L(), s = new A()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = n, this.screenRepository = s;
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
var I = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, j = (r, e, t, n) => {
  for (var s = $(e, t), o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (s = a(e, t, s) || s);
  return s && I(e, t, s), s;
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
j([
  g.CatchError("DateStrategy", "createDate")
], l.prototype, "createDate");
class B {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e, t) {
    const n = this.getActiveDay(e, t), s = this.getDaysInMonth(e, t), o = this.getFirstDayOfWeek(e, t);
    return {
      activeDay: n,
      daysInMonth: s,
      firstDayOfWeek: o
    };
  }
  getActiveDay(e, t) {
    const n = this.dateStrategy.createDate(), s = n.getFullYear(), o = n.getMonth();
    return s === t && o === e ? n.getDate() : null;
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
class F {
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
class X {
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
class H {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e) {
    return this.dateStrategy.createDate(e).getMonth();
  }
}
class U {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e) {
    return this.dateStrategy.createDate(e).getFullYear();
  }
}
class Y {
  constructor(e = new B(), t = new F(), n = new H(), s = new X(), o = new U()) {
    this.calendarRepository = e, this.dateRepository = t, this.monthRepository = n, this.timeRepository = s, this.yearRepository = o;
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
const Se = new Y(), p = class p {
  static getInstance(e, ...t) {
    let n = p.instances.get(e);
    return n || (n = new e(...t), p.instances.set(e, n)), n;
  }
};
// biome-ignore lint/suspicious/noExplicitAny: accept any arguments
i(p, "instances", /* @__PURE__ */ new Map());
let h = p;
class k {
  constructor() {
    i(this, "events", {});
  }
  emit(e, t) {
    if (this.events[e])
      for (const n of this.events[e])
        n(t);
  }
  off(e, t) {
    this.events[e] && (this.events[e] = this.events[e].filter(
      (n) => n !== t
    ));
  }
  on(e, t) {
    this.events[e] || (this.events[e] = []), this.events[e].push(t);
  }
  once(e, t) {
    const n = (s) => {
      t(s), this.off(e, n);
    };
    this.on(e, n);
  }
}
const ve = h.getInstance(k);
var G = Object.defineProperty, q = Object.getOwnPropertyDescriptor, V = (r, e, t, n) => {
  for (var s = q(e, t), o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (s = a(e, t, s) || s);
  return s && G(e, t, s), s;
};
class m {
  async saveFile(e, t, n) {
    try {
      const s = new Blob([e], { type: n }), o = document.createElement("a");
      o.href = URL.createObjectURL(s), o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o);
    } catch {
      throw new Error(`Error to save file ${t}`);
    }
  }
}
V([
  g.CatchError("FileOperationStrategy", "saveFile")
], m.prototype, "saveFile");
class K {
  constructor() {
    i(this, "fileOperationStrategy");
    this.fileOperationStrategy = new m();
  }
  async openFile() {
    return new Promise((e, t) => {
      const n = document.createElement("input");
      n.type = "file", n.onchange = async (s) => {
        const o = s.target;
        if (!o.files || o.files.length === 0) {
          t(new Error("No file selected"));
          return;
        }
        const u = await o.files[0].text();
        e(u);
      }, n.click();
    });
  }
  async saveTextFile(e, t, n) {
    this.fileOperationStrategy.saveFile(e, t, n);
  }
}
var Q = /* @__PURE__ */ ((r) => (r.CSV = "text/csv;charset=utf-8;", r.DOC = "text/doc;charset=utf-8;", r.PLAIN = "text/plain;charset=utf-8;", r.RTF = "text/rtf;charset=utf-8;", r.TXT = "text/txt;charset=utf-8;", r))(Q || {});
const De = new K();
var y = /* @__PURE__ */ ((r) => (r.LANGUAGE = "lang", r))(y || {}), z = Object.defineProperty, J = Object.getOwnPropertyDescriptor, Z = (r, e, t, n) => {
  for (var s = J(e, t), o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (s = a(e, t, s) || s);
  return s && z(e, t, s), s;
};
class f {
  applyLanguage(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(y.LANGUAGE, e);
    else
      throw new Error("Element HTML not found");
  }
}
Z([
  g.CatchError("AttributeLanguageStrategy", "applyLanguage")
], f.prototype, "applyLanguage");
var ee = Object.defineProperty, te = Object.getOwnPropertyDescriptor, re = (r, e, t, n) => {
  for (var s = te(e, t), o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (s = a(e, t, s) || s);
  return s && ee(e, t, s), s;
};
class ne {
  applyLanguage(e) {
    const t = window.document.querySelector("html"), n = `language-${e}`;
    if (t)
      t.className = n;
    else
      throw new Error("Element HTML not found");
  }
}
re([
  g.CatchError("ClassLanguageStrategy", "applyLanguage")
], ne.prototype, "applyLanguage");
class se {
  constructor(e) {
    i(this, "languageStrategy");
    this.languageStrategy = e;
  }
  updateLanguage(e) {
    this.languageStrategy.applyLanguage(e);
  }
}
class Oe extends se {
  constructor() {
    super(new f());
  }
}
class oe {
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
class ae {
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
class S {
  constructor(e) {
    i(this, "storageRepository");
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
class Ee extends S {
  constructor() {
    super(new oe());
  }
}
class Me extends S {
  constructor() {
    super(new ae());
  }
}
var v = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(v || {}), ie = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, ge = (r, e, t, n) => {
  for (var s = ce(e, t), o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (s = a(e, t, s) || s);
  return s && ie(e, t, s), s;
};
class D {
  applyTheme(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(v.THEME, e);
    else
      throw new Error("Element HTML not found");
  }
}
ge([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], D.prototype, "applyTheme");
var le = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, ue = (r, e, t, n) => {
  for (var s = pe(e, t), o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (s = a(e, t, s) || s);
  return s && le(e, t, s), s;
};
class he {
  applyTheme(e) {
    const t = window.document.querySelector("html"), n = `theme-${e}`;
    if (t)
      t.className = n;
    else
      throw new Error("Element HTML not found");
  }
}
ue([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], he.prototype, "applyTheme");
class de {
  constructor(e) {
    i(this, "themeStrategy");
    this.themeStrategy = e;
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
}
class xe extends de {
  constructor() {
    super(new D());
  }
}
export {
  d as MSAppConfig,
  T as MSAppConfigBuilder,
  ye as MSAppController,
  fe as MSBrowserEnv,
  Se as MSDate,
  g as MSErrorHandler,
  ve as MSEventBus,
  De as MSFileManager,
  Q as MSFileManagerTextTypes,
  Oe as MSLanguage,
  Ee as MSLocalStorage,
  Me as MSSessionStorage,
  xe as MSTheme
};
//# sourceMappingURL=index.js.map
