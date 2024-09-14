var i = Object.defineProperty;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o;
var n = (r, e, o) => (a(r, typeof e != "symbol" ? e + "" : e, o), o);
class g {
  restartApplication() {
    window.location.reload();
  }
  shutdownApplication() {
    window.location.href = "https://google.com";
  }
}
class u {
  constructor() {
    n(this, "appControllerRepository");
    this.appControllerRepository = new g();
  }
  restartApplication() {
    this.appControllerRepository.restartApplication();
  }
  shutdownApplication() {
    this.appControllerRepository.shutdownApplication();
  }
}
class m {
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
    for (const o in this.browserNames) {
      const t = this.browserNames[o];
      if (t.regex.test(e))
        return t.name;
    }
    return null;
  }
}
class d {
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
    for (const o in this.devicesNames) {
      const t = this.devicesNames[o];
      if (t.regex.test(e))
        return t.name;
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
    for (const o in this.operatingSystems) {
      const t = this.operatingSystems[o];
      if (t.regex.test(e))
        return t.name;
    }
    return null;
  }
}
class p {
  get() {
    const e = window.screen;
    return e ? {
      colorDepth: e.colorDepth,
      height: e.height,
      width: e.width
    } : null;
  }
}
class h {
  constructor(e = new m(), o = new d(), t = new w(), s = new p()) {
    this.browserNameRepository = e, this.deviceTypeRepository = o, this.operatingSystemRepository = t, this.screenRepository = s;
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
class c {
  addItem(e, o) {
    window.localStorage.setItem(e, o);
  }
  getItem(e) {
    return window.localStorage.getItem(e);
  }
  isItemExist(e) {
    const o = this.getItem(e);
    return !!(o != null && o.length);
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
    n(this, "storageRepository");
    this.storageRepository = new c();
  }
  addItem(e, o) {
    this.storageRepository.addItem(e, o);
  }
  getItem(e) {
    return this.storageRepository.getItem(e);
  }
  isItemExist(e) {
    return this.storageRepository.isItemExist(e);
  }
  updateItem(e, o) {
    this.storageRepository.addItem(e, o);
  }
  removeItem(e) {
    this.storageRepository.removeItem(e);
  }
}
export {
  u as MSAppController,
  h as MSBrowserEnv,
  x as MSStorage
};
//# sourceMappingURL=index.js.map
