var i = Object.defineProperty;
var o = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var a = (r, e, t) => (o(r, typeof e != "symbol" ? e + "" : e, t), t);
class d {
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
      const s = this.browserNames[t];
      if (s.regex.test(e))
        return s.name;
    }
    return null;
  }
}
class c {
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
      const s = this.devicesNames[t];
      if (s.regex.test(e))
        return s.name;
    }
    return null;
  }
}
class g {
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
      const s = this.operatingSystems[t];
      if (s.regex.test(e))
        return s.name;
    }
    return null;
  }
}
class m {
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
  constructor(e = new d(), t = new c(), s = new g(), n = new m()) {
    this.browserNameRepository = e, this.deviceTypeRepository = t, this.operatingSystemRepository = s, this.screenRepository = n;
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
class w {
  constructor(e, t) {
    a(this, "database", null);
    this.databaseName = e, this.storeName = t;
  }
  async open() {
    return new Promise((e, t) => {
      const s = window.indexedDB.open(this.databaseName);
      s.onerror = () => t(s.error), s.onsuccess = () => {
        this.database = s.result, e();
      }, s.onupgradeneeded = (n) => {
        this.database = n.target.result, this.database.createObjectStore(this.storeName);
      };
    });
  }
  getStore(e) {
    if (!this.database)
      throw new Error("Database not open");
    return this.database.transaction(this.storeName, e).objectStore(this.storeName);
  }
  async add(e) {
    this.getStore("readwrite").add(e);
  }
  async get(e) {
    return this.getStore("readonly").get(e);
  }
  async update(e, t) {
    this.getStore("readwrite").put(t, e);
  }
  async delete(e) {
    this.getStore("readwrite").delete(e);
  }
}
class p {
  constructor(e, t) {
    a(this, "databaseRepository");
    this.databaseName = e, this.storeName = t, this.databaseRepository = new w(this.databaseName, this.storeName);
  }
  async open() {
    return this.databaseRepository.open();
  }
  async add(e) {
    return this.databaseRepository.add(e);
  }
  async get(e) {
    return this.databaseRepository.get(e);
  }
  async update(e, t) {
    return this.databaseRepository.update(e, t);
  }
  async delete(e) {
    return this.databaseRepository.delete(e);
  }
}
export {
  h as MSBrowserEnv,
  p as MSDatabase
};
//# sourceMappingURL=index.js.map
