var g = Object.defineProperty;
var d = (r, e, t) => e in r ? g(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var s = (r, e, t) => (d(r, typeof e != "symbol" ? e + "" : e, t), t);
class c {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class T {
  constructor() {
    s(this, "appControllerRepository");
    this.appControllerRepository = new c();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class l {
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
    for (const t in this.browserNames) {
      const o = this.browserNames[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class p {
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
    for (const t in this.devicesNames) {
      const o = this.devicesNames[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class w {
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
    for (const t in this.operatingSystems) {
      const o = this.operatingSystems[t];
      if (o.regex.test(e))
        return o.name;
    }
    return null;
  }
}
class h {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class W {
  constructor(e = new l(), t = new p(), o = new w(), m = new h()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = o, this.screenRepository = m;
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
class u {
  addItem(e, t) {
    window.localStorage.setItem(e, t);
  }
  getItem(e) {
    return window.localStorage.getItem(e);
  }
  isItemExist(e) {
    const t = this.getItem(e);
    return !!(t != null && t.length);
  }
  removeItem(e) {
    window.localStorage.removeItem(e);
  }
  clearAll() {
    window.localStorage.clear();
  }
}
class x {
  constructor() {
    s(this, "storageRepository");
    this.storageRepository = new u();
  }
  addItem(e, t) {
    this.storageRepository.addItem(e, t);
  }
  getItem(e) {
    return this.storageRepository.getItem(e);
  }
  isItemExist(e) {
    return this.storageRepository.isItemExist(e);
  }
  updateItem(e, t) {
    this.storageRepository.addItem(e, t);
  }
  removeItem(e) {
    this.storageRepository.removeItem(e);
  }
}
var i = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(i || {}), n = /* @__PURE__ */ ((r) => (r.THEME = "theme", r))(n || {}), a = /* @__PURE__ */ ((r) => (r.DARK = "dark", r.LIGHT = "light", r))(a || {});
class y {
  constructor() {
    s(this, "storage", new x());
    s(this, "defaultTheme", a.LIGHT);
  }
  getThemeColor() {
    return this.storage.getItem(n.THEME) ?? this.defaultTheme;
  }
  setThemeColor(e) {
    this.storage.updateItem(n.THEME, e);
  }
  updateTheme(e) {
    const t = window.document.querySelector("html");
    !t || t.getAttribute(i.THEME) === e || t.setAttribute(i.THEME, e);
  }
  mountThemeColor() {
    if (!this.storage.isItemExist(n.THEME)) {
      this.initDefaultTheme();
      return;
    }
    const t = this.storage.getItem(n.THEME);
    t && this.updateTheme(t);
  }
  initDefaultTheme() {
    this.updateTheme(this.defaultTheme), this.setThemeColor(this.defaultTheme);
  }
}
export {
  T as MSAppController,
  W as MSBrowserEnv,
  x as MSStorage,
  y as MSTheme
};
//# sourceMappingURL=index.js.map
