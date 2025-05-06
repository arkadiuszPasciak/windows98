var R = Object.defineProperty;
var x = (n, e, t) => e in n ? R(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var i = (n, e, t) => x(n, typeof e != "symbol" ? e + "" : e, t);
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
class W {
  constructor() {
    i(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, t) {
    const r = this;
    return (s, o, a) => {
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
    const s = this.generateErrorMessage(r), o = new Error(s);
    return o.name = `[${e}]<${t}>`, o;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const E = new W(), g = {
  CatchError: E.CatchError.bind(E)
};
var C = Object.defineProperty, N = Object.getOwnPropertyDescriptor, b = (n, e, t, r) => {
  for (var s = N(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && C(e, t, s), s;
};
class L {
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
b([
  g.CatchError("AppConfigBuilderDomain", "validateConfig")
], L.prototype, "validateConfig");
class A {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class pe {
  constructor() {
    i(this, "appControllerRepository");
    this.appControllerRepository = new A();
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
      const r = this.browserNames[t];
      if (r.regex.test(e))
        return r.name;
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
class H {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class ue {
  constructor(e = new P(), t = new _(), r = new I(), s = new H()) {
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
var $ = Object.defineProperty, B = Object.getOwnPropertyDescriptor, j = (n, e, t, r) => {
  for (var s = B(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && $(e, t, s), s;
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
class U {
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
class F {
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
class Y {
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
class G {
  constructor(e = new l()) {
    this.dateStrategy = e;
  }
  get(e) {
    return this.dateStrategy.createDate(e).getFullYear();
  }
}
class q {
  constructor(e = new U(), t = new X(), r = new F(), s = new k(), o = new Y(), a = new G()) {
    this.calendarRepository = e, this.dateRepository = t, this.monthRepository = r, this.timeRepository = s, this.timezoneRepository = o, this.yearRepository = a;
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
const de = new q(), h = class h {
  static getInstance(e, ...t) {
    let r = h.instances.get(e);
    return r || (r = new e(...t), h.instances.set(e, r)), r;
  }
};
// biome-ignore lint/suspicious/noExplicitAny: accept any arguments
i(h, "instances", /* @__PURE__ */ new Map());
let u = h;
class z {
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
const we = u.getInstance(z);
class K {
  async openFile() {
    return new Promise((e, t) => {
      const r = document.createElement("input");
      r.type = "file", r.onchange = async (s) => {
        const o = s.target;
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
    const s = new Blob([e], { type: r }), o = document.createElement("a");
    o.href = URL.createObjectURL(s), o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o);
  }
}
const ye = new K();
var D = /* @__PURE__ */ ((n) => (n.LANGUAGE = "lang", n))(D || {}), V = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, J = (n, e, t, r) => {
  for (var s = Q(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && V(e, t, s), s;
};
class v {
  applyLanguage(e) {
    const t = window.document.querySelector("html");
    if (t)
      t.setAttribute(D.LANGUAGE, e);
    else
      throw new Error("Element HTML not found");
  }
}
J([
  g.CatchError("AttributeLanguageStrategy", "applyLanguage")
], v.prototype, "applyLanguage");
var Z = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, te = (n, e, t, r) => {
  for (var s = ee(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && Z(e, t, s), s;
};
class re {
  applyLanguage(e) {
    const t = window.document.querySelector("html"), r = `language-${e}`;
    if (t)
      t.className = r;
    else
      throw new Error("Element HTML not found");
  }
}
te([
  g.CatchError("ClassLanguageStrategy", "applyLanguage")
], re.prototype, "applyLanguage");
class ne {
  constructor(e) {
    i(this, "languageStrategy");
    this.languageStrategy = e;
  }
  updateLanguage(e) {
    this.languageStrategy.applyLanguage(e);
  }
}
class Se extends ne {
  constructor() {
    super(new v());
  }
}
class se {
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
class oe {
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
class fe extends T {
  constructor() {
    super(new se());
  }
}
class Ee extends T {
  constructor() {
    super(new oe());
  }
}
var d = /* @__PURE__ */ ((n) => (n.THEME = "theme", n))(d || {}), ae = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, w = (n, e, t, r) => {
  for (var s = ie(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && ae(e, t, s), s;
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
var ce = Object.defineProperty, ge = Object.getOwnPropertyDescriptor, y = (n, e, t, r) => {
  for (var s = ge(e, t), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(e, t, s) || s);
  return s && ce(e, t, s), s;
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
class le {
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
class De extends le {
  constructor() {
    super(new m());
  }
}
export {
  f as MSAppConfig,
  L as MSAppConfigBuilder,
  pe as MSAppController,
  ue as MSBrowserEnv,
  de as MSDate,
  g as MSErrorHandler,
  we as MSEventBus,
  ye as MSFileManager,
  Se as MSLanguage,
  fe as MSLocalStorage,
  Ee as MSSessionStorage,
  De as MSTheme
};
//# sourceMappingURL=index.js.map
