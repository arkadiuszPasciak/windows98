var R = Object.defineProperty;
var x = (s, e, t) => e in s ? R(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => x(s, typeof e != "symbol" ? e + "" : e, t);
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
let f = c;
class C {
  constructor() {
    i(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, t) {
    const r = this;
    return (n, o, a) => {
      const p = a.value;
      a.value = function(...M) {
        try {
          return p.apply(this, M);
        } catch (O) {
          throw r.createError(
            e,
            t,
            O
          );
        }
      };
    };
  }
  createError(e, t, r) {
    const n = this.generateErrorMessage(r), o = new Error(n);
    return o.name = `[${e}]<${t}>`, o;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const v = new C(), g = {
  CatchError: v.CatchError.bind(v)
};
var W = Object.defineProperty, N = Object.getOwnPropertyDescriptor, P = (s, e, t, r) => {
  for (var n = N(e, t), o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (n = a(e, t, n) || n);
  return n && W(e, t, n), n;
};
class _ {
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
P([
  g.CatchError("AppConfigBuilderDomain", "validateConfig")
], _.prototype, "validateConfig");
class L {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class Se {
  constructor() {
    i(this, "appControllerRepository");
    this.appControllerRepository = new L();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class A {
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
class H {
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
    if (!e) return null;
    for (const t in this.operatingSystems) {
      const r = this.operatingSystems[t];
      if (r.regex.test(e))
        return r.name;
    }
    return null;
  }
}
class $ {
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
  constructor(e = new A(), t = new H(), r = new I(), n = new $()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = r, this.screenRepository = n;
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
var j = Object.defineProperty, B = Object.getOwnPropertyDescriptor, F = (s, e, t, r) => {
  for (var n = B(e, t), o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (n = a(e, t, n) || n);
  return n && j(e, t, n), n;
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
F([
  g.CatchError("DateStrategy", "createDate")
], l.prototype, "createDate");
class U {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e, t) {
    const r = this.getActiveDay(e, t), n = this.getDaysInMonth(e, t), o = this.getFirstDayOfWeek(e, t);
    return {
      activeDay: r,
      daysInMonth: n,
      firstDayOfWeek: o
    };
  }
  getActiveDay(e, t) {
    const r = this.dateStrategy.createDate(), n = r.getFullYear(), o = r.getMonth();
    return n === t && o === e ? r.getDate() : null;
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
class X {
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
class Y {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e) {
    return this.dateStrategy.createDate(e).getMonth();
  }
}
class k {
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
class G {
  get() {
    return [
      -12,
      -11,
      -10,
      -9,
      -8,
      -7,
      -6,
      -5,
      -4,
      -3,
      -2,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ];
  }
}
class q {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e) {
    return this.dateStrategy.createDate(e).getFullYear();
  }
}
class z {
  constructor(e = new U(), t = new X(), r = new Y(), n = new k(), o = new G(), a = new q()) {
    this.calendarRepository = e, this.dateRepository = t, this.monthRepository = r, this.timeRepository = n, this.timezoneRepository = o, this.yearRepository = a;
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
  getTimezones() {
    return this.timezoneRepository.get();
  }
  getYear(e) {
    return this.yearRepository.get(e);
  }
}
const ve = new z();
class K {
  constructor() {
    i(this, "subscribers", []);
  }
  subscribe(e) {
    this.subscribers.push(e);
  }
  unsubscribe(e) {
    this.subscribers = this.subscribers.filter(
      (t) => t !== e
    );
  }
  notify(e, t) {
    for (const r of this.subscribers)
      r(e, t);
  }
}
const h = class h {
  static getInstance(e, ...t) {
    let r = h.instances.get(e);
    return r || (r = new e(...t), h.instances.set(e, r)), r;
  }
};
// biome-ignore lint/suspicious/noExplicitAny: accept any arguments
i(h, "instances", /* @__PURE__ */ new Map());
let u = h;
class V {
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
    const r = (n) => {
      t(n), this.off(e, r);
    };
    this.on(e, r);
  }
}
const Ee = u.getInstance(V);
var Q = Object.defineProperty, J = Object.getOwnPropertyDescriptor, Z = (s, e, t, r) => {
  for (var n = J(e, t), o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (n = a(e, t, n) || n);
  return n && Q(e, t, n), n;
};
class E {
  async save(e, t, r) {
    try {
      const n = new Blob([e], { type: r }), o = document.createElement("a");
      o.href = URL.createObjectURL(n), o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o);
    } catch {
      throw new Error(`Error to save file ${t}`);
    }
  }
}
Z([
  g.CatchError("SaveFileStrategy", "saveFile")
], E.prototype, "save");
class ee {
  constructor() {
    i(this, "saveFileStrategy");
    this.saveFileStrategy = new E();
  }
  async openFile() {
    return new Promise((e, t) => {
      const r = document.createElement("input");
      r.type = "file", r.onchange = async (n) => {
        const o = n.target;
        if (!o.files || o.files.length === 0) {
          t(new Error("No file selected"));
          return;
        }
        const p = await o.files[0].text();
        e(p);
      }, r.click();
    });
  }
  async saveFile(e, t, r) {
    this.saveFileStrategy.save(e, t, r);
  }
}
const De = new ee();
var D = /* @__PURE__ */ ((s) => (s.LANGUAGE = "lang", s))(D || {}), te = Object.defineProperty, re = Object.getOwnPropertyDescriptor, se = (s, e, t, r) => {
  for (var n = re(e, t), o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (n = a(e, t, n) || n);
  return n && te(e, t, n), n;
};
class b {
  applyLanguage(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(D.LANGUAGE, e);
    else
      throw new Error("Element HTML not found");
  }
}
se([
  g.CatchError("AttributeLanguageStrategy", "applyLanguage")
], b.prototype, "applyLanguage");
var ne = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, ae = (s, e, t, r) => {
  for (var n = oe(e, t), o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (n = a(e, t, n) || n);
  return n && ne(e, t, n), n;
};
class ie {
  applyLanguage(e) {
    const t = window.document.querySelector("html"), r = `language-${e}`;
    if (t)
      t.className = r;
    else
      throw new Error("Element HTML not found");
  }
}
ae([
  g.CatchError("ClassLanguageStrategy", "applyLanguage")
], ie.prototype, "applyLanguage");
class ce {
  constructor(e) {
    i(this, "languageStrategy");
    this.languageStrategy = e;
  }
  updateLanguage(e) {
    this.languageStrategy.applyLanguage(e);
  }
}
class be extends ce {
  constructor() {
    super(new b());
  }
}
class Te {
  constructor(e) {
    i(this, "observerHelper", new K());
    i(this, "programsState");
    this.programsState = e;
  }
  get programs() {
    return this.programsState;
  }
  set programs(e) {
    const t = this.programsState;
    this.programsState = e, this.observerHelper.notify(e, t);
  }
  runProgram(e, t) {
    if (this.programsState[e] === t) return;
    const r = this.programsState;
    this.programsState = {
      ...this.programsState,
      [e]: t
    }, this.observerHelper.notify(this.programsState, r);
  }
}
class ge {
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
class le {
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
class T {
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
class Me extends T {
  constructor() {
    super(new ge());
  }
}
class Oe extends T {
  constructor() {
    super(new le());
  }
}
var d = /* @__PURE__ */ ((s) => (s.THEME = "theme", s))(d || {}), he = Object.defineProperty, me = Object.getOwnPropertyDescriptor, w = (s, e, t, r) => {
  for (var n = me(e, t), o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (n = a(e, t, n) || n);
  return n && he(e, t, n), n;
};
class m {
  applyTheme(e) {
    const t = this.getHtmlElement();
    if (!t)
      throw new Error("Unable to apply the theme");
    t.setAttribute(d.THEME, e);
  }
  getTheme() {
    const e = this.getHtmlElement();
    if (!e)
      throw new Error("Unable to get the current theme");
    const t = e.getAttribute(d.THEME);
    if (!t)
      throw new Error("Theme attribute not found on the HTML element");
    return t;
  }
  getHtmlElement() {
    const e = window.document.querySelector("html");
    if (!e)
      throw new Error("Element HTML not found");
    return e;
  }
}
w([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], m.prototype, "applyTheme");
w([
  g.CatchError("AttributeThemeStrategy", "getTheme")
], m.prototype, "getTheme");
w([
  g.CatchError("ClassThemeStrategy", "getHtmlElement")
], m.prototype, "getHtmlElement");
var pe = Object.defineProperty, ue = Object.getOwnPropertyDescriptor, y = (s, e, t, r) => {
  for (var n = ue(e, t), o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (n = a(e, t, n) || n);
  return n && pe(e, t, n), n;
};
class S {
  applyTheme(e) {
    const t = this.getHtmlElement(), r = `theme-${e}`;
    if (!t)
      throw new Error("Unable to apply the theme");
    t.className = r;
  }
  getTheme() {
    const e = this.getHtmlElement();
    if (!(e != null && e.className.startsWith("theme-")))
      throw new Error("Unable to get the current theme");
    return e.className.replace("theme-", "");
  }
  getHtmlElement() {
    const e = window.document.querySelector("html");
    if (!e)
      throw new Error("Element HTML not found");
    return e;
  }
}
y([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], S.prototype, "applyTheme");
y([
  g.CatchError("ClassThemeStrategy", "getTheme")
], S.prototype, "getTheme");
y([
  g.CatchError("ClassThemeStrategy", "getHtmlElement")
], S.prototype, "getHtmlElement");
class de {
  constructor(e) {
    i(this, "themeStrategy");
    this.themeStrategy = e;
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
  getTheme() {
    return this.themeStrategy.getTheme();
  }
}
class Re extends de {
  constructor() {
    super(new m());
  }
}
export {
  f as MSAppConfig,
  _ as MSAppConfigBuilder,
  Se as MSAppController,
  fe as MSBrowserEnv,
  ve as MSDate,
  g as MSErrorHandler,
  Ee as MSEventBus,
  De as MSFileManager,
  be as MSLanguage,
  Me as MSLocalStorage,
  Te as MSProgramManager,
  Oe as MSSessionStorage,
  Re as MSTheme
};
//# sourceMappingURL=index.js.map
