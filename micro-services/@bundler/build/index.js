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
let l = a;
class v {
  constructor() {
    c(this, "UNKNOWN_ERROR_MESSAGE", "Unknown error message");
  }
  CatchError(e, r) {
    const o = this;
    return (s, n, i) => {
      const d = i.value;
      i.value = function(...u) {
        try {
          return d.apply(this, u);
        } catch (S) {
          throw o.createError(
            e,
            r,
            S
          );
        }
      };
    };
  }
  createError(e, r, o) {
    const s = this.generateErrorMessage(o), n = new Error(s);
    return n.name = `[${e}]<${r}>`, n;
  }
  generateErrorMessage(e) {
    return e instanceof Error && e.message.length ? e.message : this.UNKNOWN_ERROR_MESSAGE;
  }
}
const m = new v(), g = {
  CatchError: m.CatchError.bind(m)
};
var x = Object.defineProperty, W = Object.getOwnPropertyDescriptor, E = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? W(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (s = (o ? i(e, r, s) : i(s)) || s);
  return o && s && x(e, r, s), s;
};
class O {
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
], O.prototype, "validateConfig", 1);
class N {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class U {
  constructor() {
    c(this, "appControllerRepository");
    this.appControllerRepository = new N();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class T {
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
class M {
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
class C {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class K {
  constructor(e = new T(), r = new M(), o = new R(), s = new C()) {
    this.browserNameRepository = e, this.deviceTypeRepository = r, this.operatingSystemRepository = o, this.screenRepository = s;
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
class A {
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
class b {
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
class p {
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
class q extends p {
  constructor() {
    super(new A());
  }
}
class G extends p {
  constructor() {
    super(new b());
  }
}
var w = /* @__PURE__ */ ((t) => (t.THEME = "theme", t))(w || {}), I = Object.defineProperty, P = Object.getOwnPropertyDescriptor, _ = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? P(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (s = (o ? i(e, r, s) : i(s)) || s);
  return o && s && I(e, r, s), s;
};
class h {
  applyTheme(e) {
    const r = window.document.querySelector("html");
    if (r)
      r.setAttribute(w.THEME, e);
    else
      throw new Error("Element HTML not found");
  }
}
_([
  g.CatchError("AttributeThemeStrategy", "applyTheme")
], h.prototype, "applyTheme", 1);
var D = Object.defineProperty, B = Object.getOwnPropertyDescriptor, X = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? B(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (s = (o ? i(e, r, s) : i(s)) || s);
  return o && s && D(e, r, s), s;
};
class $ {
  applyTheme(e) {
    const r = window.document.querySelector("html"), o = `theme-${e}`;
    if (r)
      r.className = o;
    else
      throw new Error("Element HTML not found");
  }
}
X([
  g.CatchError("ClassThemeStrategy", "applyTheme")
], $.prototype, "applyTheme", 1);
class j {
  constructor(e) {
    c(this, "themeStrategy");
    this.themeStrategy = e;
  }
  updateTheme(e) {
    this.themeStrategy.applyTheme(e);
  }
}
class Q extends j {
  constructor() {
    super(new h());
  }
}
export {
  l as MSAppConfig,
  O as MSAppConfigBuilder,
  U as MSAppController,
  K as MSBrowserEnv,
  g as MSErrorHandler,
  q as MSLocalStorage,
  G as MSSessionStorage,
  Q as MSTheme
};
//# sourceMappingURL=index.js.map
