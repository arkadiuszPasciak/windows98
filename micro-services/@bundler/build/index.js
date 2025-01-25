var M = Object.defineProperty;
var O = (n, e, t) => e in n ? M(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var i = (n, e, t) => O(n, typeof e != "symbol" ? e + "" : e, t);
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
class x {
  constructor() {
    i(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, t) {
    const r = this;
    return (s, o, a) => {
      const u = a.value;
      a.value = function(...v) {
        try {
          return u.apply(this, v);
        } catch (E) {
          throw r.createError(
            e,
            t,
            E
          );
        }
      };
    };
  }
  createError(e, t, r) {
    const s = this.generateErrorMessage(r), o = new Error(s);
    return o.name = `[${e}]<${t}>`, o;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const m = new x(), g = {
  CatchError: m.CatchError.bind(m)
};
var R = Object.defineProperty, W = Object.getOwnPropertyDescriptor, N = (n, e, t, r) => {
  for (var s = W(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && R(e, t, s), s;
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
class C {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class ue {
  constructor() {
    i(this, "appControllerRepository");
    this.appControllerRepository = new C();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class b {
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
      const r = this.browserNames[t];
      if (r.regex.test(e))
        return r.name;
    }
    return null;
  }
}
class L {
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
      const r = this.devicesNames[t];
      if (r.regex.test(e))
        return r.name;
    }
    return null;
  }
}
class P {
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
      const r = this.operatingSystems[t];
      if (r.regex.test(e))
        return r.name;
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
class he {
  constructor(e = new b(), t = new L(), r = new P(), s = new A()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = r, this.screenRepository = s;
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
var _ = Object.defineProperty, I = Object.getOwnPropertyDescriptor, $ = (n, e, t, r) => {
  for (var s = I(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && _(e, t, s), s;
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
$([
  g.CatchError("DateStrategy", "createDate")
], l.prototype, "createDate");
class B {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e, t) {
    const r = this.getActiveDay(e, t), s = this.getDaysInMonth(e, t), o = this.getFirstDayOfWeek(e, t);
    return {
      activeDay: r,
      daysInMonth: s,
      firstDayOfWeek: o
    };
  }
  getActiveDay(e, t) {
    const r = this.dateStrategy.createDate(), s = r.getFullYear(), o = r.getMonth();
    return s === t && o === e ? r.getDate() : null;
  }
  getDaysInMonth(e, t) {
    const r = this.dateStrategy.createDate();
    return r.setFullYear(t, e + 1, 0), r.getDate();
  }
  getFirstDayOfWeek(e, t) {
    const r = this.dateStrategy.createDate();
    return r.setFullYear(t, e, 1), r.getDay();
  }
}
class j {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  getDate(e) {
    return this.dateStrategy.createDate(e).getDate();
  }
  getDay(e) {
    return this.dateStrategy.createDate(e).getDay();
  }
  toLocaleString(e, t, r) {
    return this.dateStrategy.createDate(e).toLocaleString(t, r);
  }
  toLocaleDateString(e, t, r) {
    return this.dateStrategy.createDate(e).toLocaleDateString(t, r);
  }
}
class H {
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
  toLocaleTimeString(e, t, r) {
    return this.dateStrategy.createDate(e).toLocaleTimeString(t, r);
  }
}
class X {
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
class U {
  constructor(e = new B(), t = new j(), r = new X(), s = new H(), o = new F()) {
    this.calendarRepository = e, this.dateRepository = t, this.monthRepository = r, this.timeRepository = s, this.yearRepository = o;
  }
  getCalendar(e, t) {
    return this.calendarRepository.get(e, t);
  }
  getDate(e, t, r) {
    return this.dateRepository.toLocaleDateString(e, t, r);
  }
  getDateWithTime(e, t, r) {
    return this.dateRepository.toLocaleString(e, t, r);
  }
  getMonth(e) {
    return this.monthRepository.get(e);
  }
  getTime(e, t, r) {
    return this.timeRepository.toLocaleTimeString(e, t, r);
  }
  getYear(e) {
    return this.yearRepository.get(e);
  }
}
const de = new U(), p = class p {
  static getInstance(e, ...t) {
    let r = p.instances.get(e);
    return r || (r = new e(...t), p.instances.set(e, r)), r;
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
      for (const r of this.events[e])
        r(t);
  }
  off(e, t) {
    this.events[e] && (this.events[e] = this.events[e].filter(
      (r) => r !== t
    ));
  }
  on(e, t) {
    this.events[e] || (this.events[e] = []), this.events[e].push(t);
  }
  once(e, t) {
    const r = (s) => {
      t(s), this.off(e, r);
    };
    this.on(e, r);
  }
}
const me = h.getInstance(k);
class Y {
  async openFile() {
    return new Promise((e, t) => {
      const r = document.createElement("input");
      r.type = "file", r.onchange = async (s) => {
        const o = s.target;
        if (!o.files || o.files.length === 0) {
          t(new Error("No file selected"));
          return;
        }
        const u = await o.files[0].text();
        e(u);
      }, r.click();
    });
  }
  async saveFile(e, t, r) {
    const s = new Blob([e], { type: r }), o = document.createElement("a");
    o.href = URL.createObjectURL(s), o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o);
  }
}
const we = new Y();
var w = /* @__PURE__ */ ((n) => (n.LANGUAGE = "lang", n))(w || {}), G = Object.defineProperty, q = Object.getOwnPropertyDescriptor, K = (n, e, t, r) => {
  for (var s = q(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && G(e, t, s), s;
};
class y {
  applyLanguage(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(w.LANGUAGE, e);
    else
      throw new Error("Element HTML not found");
  }
}
K([
  g.CatchError("AttributeLanguageStrategy", "applyLanguage")
], y.prototype, "applyLanguage");
var V = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, z = (n, e, t, r) => {
  for (var s = Q(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && V(e, t, s), s;
};
class J {
  applyLanguage(e) {
    const t = window.document.querySelector("html"), r = `language-${e}`;
    if (t)
      t.className = r;
    else
      throw new Error("Element HTML not found");
  }
}
z([
  g.CatchError("ClassLanguageStrategy", "applyLanguage")
], J.prototype, "applyLanguage");
class Z {
  constructor(e) {
    i(this, "languageStrategy");
    this.languageStrategy = e;
  }
  updateLanguage(e) {
    this.languageStrategy.applyLanguage(e);
  }
}
class ye extends Z {
  constructor() {
    super(new y());
  }
}
class ee {
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
class te {
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
class Se extends S {
  constructor() {
    super(new ee());
  }
}
class fe extends S {
  constructor() {
    super(new te());
  }
}
var f = /* @__PURE__ */ ((n) => (n.THEME = "theme", n))(f || {}), re = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, se = (n, e, t, r) => {
  for (var s = ne(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && re(e, t, s), s;
};
class D {
  applyTheme(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(f.THEME, e);
    else
      throw new Error("Element HTML not found");
  }
}
se([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], D.prototype, "applyTheme");
var oe = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, ie = (n, e, t, r) => {
  for (var s = ae(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && oe(e, t, s), s;
};
class ce {
  applyTheme(e) {
    const t = window.document.querySelector("html"), r = `theme-${e}`;
    if (t)
      t.className = r;
    else
      throw new Error("Element HTML not found");
  }
}
ie([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], ce.prototype, "applyTheme");
class ge {
  constructor(e) {
    i(this, "themeStrategy");
    this.themeStrategy = e;
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
}
class De extends ge {
  constructor() {
    super(new D());
  }
}
export {
  d as MSAppConfig,
  T as MSAppConfigBuilder,
  ue as MSAppController,
  he as MSBrowserEnv,
  de as MSDate,
  g as MSErrorHandler,
  me as MSEventBus,
  we as MSFileManager,
  ye as MSLanguage,
  Se as MSLocalStorage,
  fe as MSSessionStorage,
  De as MSTheme
};
//# sourceMappingURL=index.js.map
