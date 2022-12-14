! function() {
    var a = {
        platformId: 905,
        urls: ["https://a.config.skype.com", "https://b.config.skype.com"],
        businessUrls: ["https://config.edge.skype.com", "https://config.edge.skype.com"],
        team: "SkypeLyncWebExperience",
        maximumAttempts: 3,
        waitDuration: 500
    };
    window.Skype = window.Skype || {};
    var b = "1.2.35";
    ! function(a) {
        "use strict";

        function e(a, b) {
            var c = a;
            return b = void 0 === b ? 1 : b, "object" != typeof c && (c = {
                message: a || "unknown error"
            }), void 0 === c.code && (c.code = b), c
        }

        function g(a) {
            return e(a, 0)
        }

        function h(a) {
            if (void 0 === a || null === a) throw "No settings provided"
        }

        function j(a) {
            if ("function" != typeof a) throw "Success callback was not provided"
        }
        a.getVersion = function() {
            return b
        }, a.initialize = function(b, k, l) {
            function m(a) {
                l && l(e(a))
            }

            function n(a) {
                return d.isSupported(window) ? a.packageUrl? "/a/assets/external-js/skype-web-sdk.js" : null : a.packageUrlUnsupportedBrowser ? a.packageUrlUnsupportedBrowser : void m(g("This browser is unsupported"))
            }

            function o(a) {
                p(a)
            }

            function p(c) {
                if (!c.packageUrl) return void m(g("No package definition found for this config"));
                var d = (new Date).getTime(),
                    e = {};
                a.onExperienceLoaded = function(e) {
                    var f = (new Date).getTime();
                    e.init({
                        initParams: b,
                        config: c,
                        configLoadDuration: d - q,
                        packageLoadDuration: f - d
                    }, k, m), delete a.onExperienceLoaded
                }, c.corsScript && (e.crossOrigin = "anonymous"), i.loadScript(n(c), null, m, e)
            }
            var q = (new Date).getTime();
            h(b), j(k), b.fingerprint = b.userId || (b.correlationIds ? b.correlationIds.userId : null), b.fingerprint = b.fingerprint || f.get(window), c.loadConfig(b, o, m)
        }
    }(window.Skype);
    var c = function() {
            "use strict";

            function c(b) {
                var c = [];
                return a && a.urls && (c = b.business === !0 ? j(a.businessUrls, b) : j(a.urls, b)), c
            }

            function d() {
                for (var c = b.split(".", 4); c.length < 4;) c.push(0);
                return a.platformId + "_" + c.join(".")
            }

            function f(a) {
                var b, c, d = [];
                for (b in a) a.hasOwnProperty(b) && void 0 !== (c = a[b]) && d.push([b, c].join("="));
                return d.join("&")
            }

            function i(b, c) {
                var e = a.team,
                    g = d(),
                    h = b + "/config/v1/" + e + "/" + g,
                    i = f(c),
                    j = h;
                return i && (j += "?" + i), j
            }

            function j(a, b) {
                var c = [],
                    d = {
                        apikey: b.apiKey,
                        fingerprint: b.fingerprint,
                        ecsoverride: e.get(window)
                    };
                b.dogfood === !0 && b.correlationIds.upn && (d.id = b.correlationIds.upn);
                for (var f = 0; f < a.length; f++) c.push(i(a[f], d));
                return c
            }

            function k(b, d, e) {
                function f(a) {
                    q++, b.jsonp === !1 ? g.request(a, k, m) : h.request(a, "onConfigurationLoaded", k, m, "ecsConfig")
                }

                function i() {
                    return q / o.length >= (a.maximumAttempts || l)
                }

                function j(b) {
                    var c = b.ConfigIDs && b.ConfigIDs[a.team];
                    return c ? c.split(/\s*,\s*/) : []
                }

                function k(c) {
                    var f, g;
                    if (!n) {
                        if (n = !0, "string" == typeof c) try {
                            f = JSON.parse(c)
                        } catch (h) {} else f = c;
                        g = f && f[a.team], g ? (g.configIds = j(f), g.eTag = f.Headers && f.Headers.ETag || "", g.countryCode = f.Headers && f.Headers.CountryCode, d && d(g)) : e && e("Configuration service did not find any configuration that matches parameters or configuration service response is invalid", b)
                    }
                }

                function m() {
                    var b = 0;
                    i() ? e && e("Configuration service is unreachable") : q <= o.length ? f(o[++p % o.length]) : (b = a.waitDuration * (q - o.length), window.setTimeout(function() {
                        f(o[++p % o.length])
                    }, b))
                }
                var n, o, p, q = 0;
                return b && b.apiKey ? (o = c(b), o && o.length ? (p = Math.floor(Math.random() * o.length), void f(o[p])) : void(e && e("No configuration service endpoints have been defined"))) : void(e && e("API key was not provided"))
            }
            var l = 2;
            return {
                loadConfig: k
            }
        }(),
        d = function() {
            "use strict";

            function a(a) {
                return !!b(a) || !g(a) && (!i(a) && (!c(a) && !e(a)))
            }

            function b(a) {
                return a.navigator.userAgent.indexOf("SkypeShell") > -1
            }

            function c(a) {
                var b = d(a);
                return b > -1 && 10 > b
            }

            function d(a) {
                var b, c = -1,
                    d = a.navigator.userAgent || "",
                    e = a.navigator.appName || "";
                return "Microsoft Internet Explorer" === e && (b = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), b.exec(d) && (c = parseFloat(RegExp.$1))), c
            }

            function e(a) {
                var b = f(a);
                return b > -1 && 8 > b
            }

            function f(a) {
                var b, c = -1,
                    d = a.navigator.userAgent || "";
                return d.indexOf("Safari/") > -1 && d.indexOf("Chrome") === -1 && (b = new RegExp("Version/([0-9]{1,}[.0-9]{0,})"), b.exec(d) && (c = parseFloat(RegExp.$1))), c
            }

            function g(a) {
                var b = h(a);
                return b > -1 && 43 > b
            }

            function h(a) {
                var b, c = -1,
                    d = a.navigator.userAgent || "";
                return d.indexOf("Chrome/") > -1 && d.indexOf("Safari/") > -1 && d.indexOf("Edge/") === -1 && (b = new RegExp("Chrome/([0-9]{1,}[.0-9]{0,})"), b.exec(d) && (c = parseFloat(RegExp.$1))), c
            }

            function i(a) {
                var b = j(a);
                return b > -1 && 40 > b
            }

            function j(a) {
                var b, c = -1,
                    d = a.navigator.userAgent || "";
                return d.indexOf("Firefox/") > -1 && d.indexOf("Gecko/") > -1 && d.indexOf("Opera") === -1 && d.indexOf("Trident") === -1 && (b = new RegExp("Firefox/([0-9]{1,}[.0-9]{0,})"), b.exec(d) && (c = parseFloat(RegExp.$1))), c
            }
            return {
                isSupported: a
            }
        }(),
        e = function() {
            "use strict";

            function a(a) {
                a = a || window;
                var b = a.location.search.match(new RegExp(c, "i"));
                return b && b[1] ? b[1] : (b = a.document.cookie.match(new RegExp(d, "i")), b && b[1] ? b[1] : void 0)
            }
            var b = "ecsoverride",
                c = "\\b" + b + "=([^&]+)",
                d = "\\b" + b + "=([^;]+)";
            return {
                get: a
            }
        }(),
        f = function() {
            "use strict";

            function a() {
                return ("0000000" + Date.now().toString(16)).slice(-8) + "-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                    var b = Math.floor(16 * Math.random());
                    return ("x" === a ? b : 8 + b % 4).toString(16)
                })
            }

            function b(b) {
                b = b || window;
                var d;
                try {
                    d = b.localStorage.getItem(c)
                } catch (e) {}
                if (!d) {
                    d = a();
                    try {
                        b.localStorage.setItem(c, d)
                    } catch (e) {}
                }
                return d
            }
            var c = "skype.fingerprint";
            return {
                get: b
            }
        }(),
        g = function(b) {
            "use strict";

            function c(c, d, e) {
                function f() {
                    4 === i.readyState && (200 === i.status ? (b.clearTimeout(g), d && d(i.responseText)) : h())
                }
                if (!c) throw "URL parameter was not provided";
                var g, h = function() {
                        b.clearTimeout(g), e && (e(), e = null, d = null)
                    },
                    i = new XMLHttpRequest;
                i.onreadystatechange = f, i.open("GET", c, !0), i.send(), g = b.setTimeout(h, a.timeout || 2e4)
            }
            return {
                request: c
            }
        }(window),
        h = function(b) {
            "use strict";

            function c(c, e, f, g, h) {
                if (!c || !e) throw "URL or callback name was not provided";
                var j, k, l = function() {
                    b.clearTimeout(k), g && (g(), g = null, f = null)
                };
                j = c + (/\?/.test(c) ? "&" : "?") + "callback=Skype." + e, b.Skype[e] = function() {
                    b.clearTimeout(k), f && f.apply(null, arguments)
                }, i.loadScript(j, d, l, {
                    id: h
                }), k = b.setTimeout(l, a.timeout || 2e4)
            }
            var d = function() {};
            return {
                request: c
            }
        }(window),
        i = function() {
            "use strict";

            function a(a, b, c, d) {
                var e = document.createElement("script");
                d = d || {}, e.type = "text/javascript", e.defer = !0, b && (e.onload = b), c && (e.onerror = c);
                for (var f in d) void 0 !== d[f] && (e[f] = d[f]);
                e.src = a, document.getElementsByTagName("head")[0].appendChild(e)
            }
            return {
                loadScript: a
            }
        }()
}();