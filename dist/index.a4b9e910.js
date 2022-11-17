// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4pgAn":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8b4a2d00a4b9e910";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9pmgW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _player = require("./player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _spriteRunLeftPng = require("../img/spriteRunLeft.png");
var _spriteRunLeftPngDefault = parcelHelpers.interopDefault(_spriteRunLeftPng);
var _spriteRunRightPng = require("../img/spriteRunRight.png");
var _spriteRunRightPngDefault = parcelHelpers.interopDefault(_spriteRunRightPng);
var _spriteStandLeftPng = require("../img/spriteStandLeft.png");
var _spriteStandLeftPngDefault = parcelHelpers.interopDefault(_spriteStandLeftPng);
var _spriteStandRightPng = require("../img/spriteStandRight.png");
var _spriteStandRightPngDefault = parcelHelpers.interopDefault(_spriteStandRightPng);
var _flag = require("./flag");
var _flagDefault = parcelHelpers.interopDefault(_flag);
var _level = require("./level");
var _levelDefault = parcelHelpers.interopDefault(_level);
var _config = require("./config");
var _controller = require("./controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
var _pause = require("./pause");
var _pauseDefault = parcelHelpers.interopDefault(_pause);
function createImage(src) {
    const image = new Image();
    image.src = src;
    // image.addEventListener('load', () => console.log(src, image.width));
    return image;
}
const canvas = document.querySelector("canvas");
if (!canvas) throw Error();
canvas.width = window.innerWidth;
canvas.height = window.innerWidth / 16 * 9;
const canvasWidth = canvas.width || 1080;
const canvasHeight = canvas.height || 580;
// console.log('canvasHeight', canvasHeight, window.innerHeight, window.outerHeight)
const context = canvas.getContext("2d");
if (context === null) throw Error();
let scrollOffSet = 0;
let currentLevel = 1;
let player;
const platforms = [];
const obstacles = [];
let time;
let runGame;
let pause;
const level = new (0, _levelDefault.default)({
    screenHeight: canvasHeight,
    context
});
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    },
    down: {
        pressed: false
    }
};
const updateKey = (direction)=>{
    console.log("Called");
    Object.entries(direction).forEach(([key, val])=>{
        // @ts-ignore
        keys[key].pressed = val;
    });
};
const updateAnalogKey = (direction)=>{
    Object.entries(direction).forEach(([key, val])=>{
        // @ts-ignore
        if (key !== "up") keys[key].pressed = val;
    });
};
const controller = new (0, _controllerDefault.default)({
    x: 0,
    y: canvasHeight * .8,
    width: canvasWidth,
    height: canvasHeight * .2,
    context,
    keys
}, {
    digital: updateKey,
    analog: updateAnalogKey
});
const sprites = {
    stand: {
        right: createImage((0, _spriteStandRightPngDefault.default)),
        left: createImage((0, _spriteStandLeftPngDefault.default)),
        cropWidth: 177,
        width: 66,
        frame: 59
    },
    run: {
        right: createImage((0, _spriteRunRightPngDefault.default)),
        left: createImage((0, _spriteRunLeftPngDefault.default)),
        cropWidth: 341,
        width: 127.875,
        frame: 29
    }
};
function init(context1) {
    time = Date.now();
    runGame = false;
    pause = new (0, _pauseDefault.default)(time);
    platforms.length = 0;
    obstacles.length = 0;
    scrollOffSet = 0;
    const { platform: platform1 , obstacle: obstacle1 , startingPostion  } = level[`level${currentLevel}`]();
    player = new (0, _playerDefault.default)(context1, {
        canvasHeight,
        sprites,
        movement: keys,
        startingPostion
    });
    platform1.forEach((platform)=>platforms.push(platform));
    obstacle1.forEach((obstacle)=>obstacles.push(obstacle));
    keys.right.pressed = false;
    keys.left.pressed = false;
}
init(context);
function animate() {
    requestAnimationFrame(animate);
    if (level.autoScroll && runGame) {
        platforms.forEach((platform)=>platform.position.x -= (0, _config.PLAYERSPEED));
        obstacles.forEach((obstacle)=>obstacle.position.x -= (0, _config.PLAYERSPEED) * .6);
    }
    if (context) context.fillStyle = "black";
    context?.fillRect(0, 0, canvas?.width || 0, canvasHeight || 0);
    obstacles.forEach((obstacle)=>obstacle.draw());
    platforms.forEach((platform)=>platform.draw());
    runGame ? player.update() : player.draw();
    player.movement = keys;
    if (keys.right.pressed && player.position.x < 0.5 * canvasWidth) player.velocity.x = (0, _config.PLAYERSPEED);
    else if (keys.left.pressed && player.position.x > 0.1 * canvasWidth || keys.left.pressed && scrollOffSet === 0 && player.position.x > 0) player.velocity.x = -(0, _config.PLAYERSPEED);
    else {
        player.velocity.x = 0;
        if (keys.right.pressed && runGame) {
            platforms.forEach((platform)=>platform.position.x -= (0, _config.PLAYERSPEED));
            obstacles.forEach((obstacle)=>obstacle.position.x -= (0, _config.PLAYERSPEED) * .6);
            scrollOffSet += (0, _config.PLAYERSPEED);
        } else if (keys.left.pressed && scrollOffSet > 0) {
            platforms.forEach((platform)=>platform.position.x += (0, _config.PLAYERSPEED));
            obstacles.forEach((obstacle)=>obstacle.position.x += (0, _config.PLAYERSPEED) * .6);
            scrollOffSet -= (0, _config.PLAYERSPEED);
        }
    }
    if (platforms.filter((platform)=>platform.collision(player)).length) player.collision();
    if (scrollOffSet >= level.levelComplete) {
        alert("WINNER");
        currentLevel = level.nextLevel(currentLevel);
        init(context);
    }
    if (player.position.y > canvasHeight) // alert("YOU LOSE");
    init(context);
    if (keys.up.pressed) player.jump();
    (0, _flagDefault.default)(context, {
        x: level.levelComplete - scrollOffSet + canvasWidth * 0.5,
        y: 250
    });
    const displayTime = (time1)=>{
        const currentTime = Date.now() - time1 - pause.getPauseTime(runGame);
        const minutesMeasurement = 60000;
        const secondsMeasurement = 1000;
        let remainingTime;
        const display = (unit)=>unit <= 9 ? "0" + unit : unit;
        const minutes = Math.floor(currentTime / minutesMeasurement);
        remainingTime = currentTime % minutesMeasurement;
        const seconds = Math.floor(remainingTime / secondsMeasurement);
        remainingTime = remainingTime % secondsMeasurement;
        const miliseconds = Math.round(remainingTime / 10);
        return `${display(minutes)}:${display(seconds)}:${display(miliseconds)}`;
    };
    controller.draw();
    context.fillStyle = "#ffffff";
    context.font = "25px Arial";
    context.fillText(displayTime(time), 100, 50);
    !runGame && context?.fillText("Pause", canvasWidth / 2 - 50, canvasHeight / 2);
}
animate();
addEventListener("keydown", ({ key  })=>{
    if (key !== " " && !runGame) runGame = pause.resumeGame();
    switch(key){
        case " ":
            if (!runGame) runGame = pause.resumeGame();
            else runGame = pause.pauseGame();
        default:
            break;
    }
});

},{"./player":"gerFF","../img/spriteRunLeft.png":"3Kb2n","../img/spriteRunRight.png":"3dVWk","../img/spriteStandLeft.png":"jgdRy","../img/spriteStandRight.png":"e53GT","./flag":"4GtST","./level":"fiIK0","./config":"4RByw","./controller":"5Zc9v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pause":"kPPRy"}],"gerFF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("./config");
var _obstacle = require("./obstacle");
var _obstacleDefault = parcelHelpers.interopDefault(_obstacle);
class Player extends (0, _obstacleDefault.default) {
    constructor(context, { canvasHeight , x , y , sprites , movement  }){
        super(context, {
            x,
            y,
            image: sprites.stand.right
        });
        this.cropWidth = 177;
        this.direction = "right";
        this.canJump = true;
        this.canvasHeight = canvasHeight;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.width = 66;
        this.height = 150;
        this.frame = 0;
        this.movement = movement;
        this.sprites = sprites;
    }
    draw() {
        this.context.drawImage(this.image, this.cropWidth * this.frame, 0, this.cropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.width = this.sprites.run.width;
        this.cropWidth = this.sprites.run.cropWidth;
        if (this.movement.right.pressed) {
            this.image = this.sprites.run.right;
            this.frame = this.frame < this.sprites.run.frame ? this.frame + 1 : 0;
            this.direction = "right";
        } else if (this.movement.left.pressed) {
            this.image = this.sprites.run.left;
            this.frame = this.frame < this.sprites.run.frame ? this.frame + 1 : 0;
            this.direction = "left";
        } else {
            this.image = this.sprites.stand[this.direction];
            this.width = this.sprites.stand.width;
            this.cropWidth = this.sprites.stand.cropWidth;
            this.frame = this.frame < this.sprites.stand.frame ? this.frame + 1 : 0;
        }
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (this.position.y + this.height + this.velocity.y <= this.canvasHeight) this.velocity.y += (0, _config.GRAVITY);
    }
    jump() {
        if (this.canJump && !this.velocity.y) {
            this.velocity.y -= (0, _config.jumpHeight);
            this.canJump = false;
        }
    }
    collision() {
        this.velocity.y = 0;
        this.canJump = true;
    }
}
exports.default = Player;

},{"./config":"4RByw","./obstacle":"ipc5S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4RByw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GRAVITY", ()=>GRAVITY);
parcelHelpers.export(exports, "PLAYERSPEED", ()=>PLAYERSPEED);
parcelHelpers.export(exports, "jumpHeight", ()=>jumpHeight);
const GRAVITY = .5;
const PLAYERSPEED = 8;
const jumpHeight = 15;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ipc5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Obstacle {
    constructor(context, { x =100 , y =100 , image  }){
        this.context = context;
        this.position = {
            x,
            y
        };
        this.width = 1;
        this.height = 1;
        this.image = image;
        image?.addEventListener("load", ()=>{
            this.width = this.width === 1 ? image.width : this.width;
            this.height = this.height === 1 ? image.height : this.height;
        });
    }
    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y);
    }
    get bottom() {
        return this.position.y + this.height;
    }
    get end() {
        return this.position.x + this.width;
    }
}
exports.default = Obstacle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Kb2n":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bXr2e") + "spriteRunLeft.a08cf229.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3dVWk":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bXr2e") + "spriteRunRight.9e5bae7c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jgdRy":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bXr2e") + "spriteStandLeft.32d25c32.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"e53GT":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bXr2e") + "spriteStandRight.3058ac1a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4GtST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const flag = (context, { x , y  })=>{
    context.fillStyle = "black";
    context.fillRect(x, y, 20, 20);
    context.fillRect(x + 40, y, 20, 20);
    context.fillRect(x + 80, y, 20, 20);
    context.fillRect(x + 20, y + 20, 20, 20);
    context.fillRect(x + 60, y + 20, 20, 20);
    context.fillRect(x, y + 40, 20, 20);
    context.fillRect(x + 40, y + 40, 20, 20);
    context.fillRect(x + 80, y + 40, 20, 20);
    context.fillRect(x + 20, y + 60, 20, 20);
    context.fillRect(x + 60, y + 60, 20, 20);
    context.fillRect(x, y + 80, 20, 20);
    context.fillRect(x + 40, y + 80, 20, 20);
    context.fillRect(x + 80, y + 80, 20, 20);
    context.fillStyle = "white";
    context.fillRect(x + 20, y, 20, 20);
    context.fillRect(x + 60, y, 20, 20);
    context.fillRect(x, y + 20, 20, 20);
    context.fillRect(x + 40, y + 20, 20, 20);
    context.fillRect(x + 80, y + 20, 20, 20);
    context.fillRect(x + 20, y + 40, 20, 20);
    context.fillRect(x + 60, y + 40, 20, 20);
    context.fillRect(x, y + 60, 20, 20);
    context.fillRect(x + 40, y + 60, 20, 20);
    context.fillRect(x + 80, y + 60, 20, 20);
    context.fillRect(x + 20, y + 80, 20, 20);
    context.fillRect(x + 60, y + 80, 20, 20);
};
exports.default = flag;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fiIK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _obstacle = require("./obstacle");
var _obstacleDefault = parcelHelpers.interopDefault(_obstacle);
var _platform = require("./platform");
var _platformDefault = parcelHelpers.interopDefault(_platform);
var _platformPng = require("../img/platform.png");
var _platformPngDefault = parcelHelpers.interopDefault(_platformPng);
var _platformSmallTallPng = require("../img/platformSmallTall.png");
var _platformSmallTallPngDefault = parcelHelpers.interopDefault(_platformSmallTallPng);
var _hillsPng = require("../img/hills.png");
var _hillsPngDefault = parcelHelpers.interopDefault(_hillsPng);
var _backgroundPng = require("../img/background.png");
var _backgroundPngDefault = parcelHelpers.interopDefault(_backgroundPng);
class Level {
    constructor({ context , screenHeight  }){
        this.context = context;
        this.screenHeight = screenHeight;
    }
    createImage(src) {
        const image = new Image();
        image.src = src;
        // image.addEventListener('load', () => console.log(src, image.width));
        return image;
    }
    get zone1Platform() {
        return this.createImage((0, _platformPngDefault.default));
    }
    get zone1SmallPlatform() {
        return this.createImage((0, _platformSmallTallPngDefault.default));
    }
    get zone1Background() {
        return this.createImage((0, _backgroundPngDefault.default));
    }
    get zone1BackgroundObject() {
        return this.createImage((0, _hillsPngDefault.default));
    }
    level1() {
        const platform = [], obstacle = [];
        this.levelComplete = 6000;
        this.autoScroll = true;
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 4180,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 7800,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 8580,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 9080,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 10080,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: -1,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 577,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 2077,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 3308,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 3888,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 5600,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 6000,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 6500,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 8000,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 11500,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 12078,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 12656,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 13234,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 13812,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        obstacle.push(new (0, _obstacleDefault.default)(this.context, {
            image: this.zone1Background,
            x: -1,
            y: -1
        }));
        obstacle.push(new (0, _obstacleDefault.default)(this.context, {
            image: this.zone1BackgroundObject,
            x: -1,
            y: -1
        }));
        return {
            platform,
            obstacle
        };
    }
    level2() {
        const platform = [], obstacle = [];
        this.levelComplete = 6700;
        this.autoScroll = true;
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: -1,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 577,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 1877,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 2800,
            y: this.screenHeight - 525,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 4300,
            y: this.screenHeight - 125,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 5000,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 5579,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 6380,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 6980,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 7580,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 8000,
            y: this.screenHeight - 525,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 8579,
            y: this.screenHeight - 525,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 9200,
            y: this.screenHeight - 425,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 9740,
            y: this.screenHeight - 325,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 10320,
            y: this.screenHeight - 225,
            image: this.zone1SmallPlatform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 10900,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 11479,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 12058,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 12637,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 13216,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 14516,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 15095,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        platform.push(new (0, _platformDefault.default)(this.context, {
            x: 15674,
            y: this.screenHeight - 125,
            image: this.zone1Platform
        }));
        obstacle.push(new (0, _obstacleDefault.default)(this.context, {
            image: this.zone1Background,
            x: -1,
            y: -1
        }));
        obstacle.push(new (0, _obstacleDefault.default)(this.context, {
            image: this.zone1BackgroundObject,
            x: -1,
            y: -1
        }));
        return {
            platform,
            obstacle
        };
    }
    nextLevel(currentLevel) {
        if (currentLevel > 1) return 2;
        // @ts-ignore
        return currentLevel + 1;
    }
}
exports.default = Level;

},{"./obstacle":"ipc5S","./platform":"8Y06U","../img/platform.png":"fakqx","../img/platformSmallTall.png":"bMOeq","../img/hills.png":"873e7","../img/background.png":"iOe8H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Y06U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _obstacle = require("./obstacle");
var _obstacleDefault = parcelHelpers.interopDefault(_obstacle);
class Platform extends (0, _obstacleDefault.default) {
    // width = 0;
    // height = 0;
    constructor(context, { x , y , image  }){
        super(context, {
            x,
            y,
            image
        });
    }
    collision(player) {
        return player.bottom <= this.position.y && player.bottom + player.velocity.y >= this.position.y && player.position.x <= this.end && player.end >= this.position.x;
    }
}
exports.default = Platform;

},{"./obstacle":"ipc5S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fakqx":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bXr2e") + "platform.c129cae9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bMOeq":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bXr2e") + "platformSmallTall.ca125e6a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"873e7":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bXr2e") + "hills.285573c5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iOe8H":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bXr2e") + "background.9ac34854.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5Zc9v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const ACTIVE = "#ffffff99", INACTIVE = "#ffffff50";
class Controller {
    constructor({ x , y , width: width1 , height: height1 , context , keys , type ="analog"  }, { digital , analog  }){
        this.pointer = {
            x: 0,
            y: 0
        };
        this.sensitivity = 40;
        this.x = x;
        this.y = y;
        this.width = width1;
        this.height = height1;
        this.context = context;
        this.keys = keys;
        this.updateDigitalKey = digital;
        this.updateAnalogKey = analog;
        this.type = type;
        const assignCircleValue = ({ xm , ym , radius  })=>{
            return {
                x1: xm - radius,
                x2: xm + radius,
                y1: ym - radius,
                y2: ym + radius,
                active: false,
                xm,
                ym,
                radius
            };
        };
        this.movementRange = assignCircleValue({
            xm: this.x + this.width * .2,
            ym: this.y + this.height * .2,
            radius: this.width * .06
        });
        this.jumpRange = assignCircleValue({
            xm: this.x + this.width * .775,
            ym: this.y + this.height * .2,
            radius: this.width * .06
        });
        const assignValue = ({ x1 , y1 , width , height  })=>{
            return {
                width,
                height,
                x1,
                y1,
                x2: x1 + width,
                y2: y1 + height,
                active: false
            };
        };
        this.left = assignValue({
            x1: this.x + this.width * .08,
            y1: this.y + this.height * .2,
            width: 100,
            height: 50
        });
        this.right = assignValue({
            x1: this.x + this.width * .22,
            y1: this.y + this.height * .2,
            width: 100,
            height: 50
        });
        this.jump = assignValue({
            x1: this.x + this.width * .88,
            y1: this.left.y1 + 25,
            width: 25,
            height: 25
        });
        addEventListener("touchmove", (e)=>this.touchMove(e), {
            passive: false
        });
        addEventListener("touchstart", (e)=>this.touchStart(e), {
            passive: false
        });
        addEventListener("touchend", ()=>this.touchEnd());
        addEventListener("keydown", (e)=>this.keyDown(e));
        addEventListener("keyup", (e)=>this.keyUp(e));
    }
    draw() {
        if (!this.isTouchDevice()) return;
        this.context.fillStyle = "#00000040";
        this.context.strokeStyle = "#ffffff50";
        this.context.lineWidth = 4;
        this.context.arc(100, 100, 100, 0, 2 * Math.PI);
        // this.context.fillStyle = '#00000040';
        // this.context.strokeStyle = '#ffffff50';
        // this.context.lineWidth = 8;
        // this.context.beginPath();
        // this.context.arc(this.x + this.width * .775, this.y + this.height * .2, this.width * .075, 0, 2 * Math.PI)
        // this.context.fill();
        // this.context.stroke();
        // this.context.fillStyle = '#ffffff';
        if (this.type === "analog") {
            this.context.beginPath();
            this.analogBtn(this.movementRange, true);
            this.analogBtn(this.jumpRange, false);
        } else if (this.type === "digital") {
            this.directionBtn(this.left, "left");
            this.directionBtn(this.right, "right");
            this.context.arc(this.jump.x1, this.jump.y1, this.jump.width, 0, 2 * Math.PI);
            this.context.fill();
            this.context.stroke();
        }
    // this.context.fillRect(this.movementRange.x1, this.movementRange.y1, this.movementRange.radius * 2, this.movementRange.radius * 2)
    }
    inRange(object, x, y) {
        return x > object.x1 && x < object.x2 && y > object.y1 && y < object.y2;
    }
    isTouchDevice() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
    touchMove(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const { clientX , clientY  } = e.targetTouches[0];
        // const y = clientY - ((innerHeight - this.height * 5) / 2);
        const x = clientX - (innerWidth - this.width) / 2;
        const y = clientY;
        if (this.inRange(this.movementRange, x, y)) {
            this.movementRange.active = true;
            this.pointer = {
                x,
                y
            };
            this.updateAnalogKey({
                up: false,
                left: false,
                right: false
            });
            if (this.x + this.width * .2 + this.sensitivity < this.pointer.x) this.updateAnalogKey({
                right: true
            });
            if (this.x + this.width * .2 - this.sensitivity > this.pointer.x) this.updateAnalogKey({
                left: true
            });
            if (this.y + this.height * .2 - this.sensitivity > this.pointer.y) this.updateAnalogKey({
                up: true
            });
        }
    // else if (this.inRange(this.jumpRange, x, y)) {
    //   this.pointer = { x, y };
    //   this.keys.up.pressed = false;
    //   // this.keys.right.pressed = false;
    //   // this.keys.left.pressed = false;
    //   // if (this.x + this.width * .2 + this.sensitivity < this.pointer.x) this.keys.right.pressed = true;
    //   // if (this.x + this.width * .2 - this.sensitivity > this.pointer.x) this.keys.left.pressed = true;
    //   if (this.y + this.height * .2 - this.sensitivity > this.pointer.y) this.keys.up.pressed = true;
    // }
    }
    canvas_arrow(fromX, fromY, toX, toY) {
        this.context.beginPath();
        var headlen = 30; // length of head in pixels
        var dx = toX - fromX;
        var dy = toY - fromY;
        var angle = Math.atan2(dy, dx);
        this.context.moveTo(fromX, fromY);
        this.context.lineTo(toX, toY);
        this.context.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
        this.context.moveTo(toX, toY);
        this.context.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
        this.context.stroke();
        this.context.beginPath();
    }
    directionBtn(object, direction = "left") {
        this.context.strokeStyle = object.active ? ACTIVE : INACTIVE;
        this.context.fillRect(object.x1, object.y1, object.width, object.height);
        this.context.strokeRect(object.x1, object.y1, object.width, object.height);
        if (direction.toLowerCase() === "left") this.canvas_arrow(object.x2 * 0.92, object.y1 + object.height / 2, object.x1 * 1.2, object.y1 + object.height / 2);
        else if (direction.toLowerCase() === "right") this.canvas_arrow(this.right.x1 * 1.05, this.right.y1 + this.right.height / 2, this.right.x2 * 0.95, this.right.y1 + this.right.height / 2);
        this.context.strokeStyle = INACTIVE;
    }
    analogBtn(object, pointer) {
        this.context.strokeStyle = object.active ? ACTIVE : INACTIVE;
        this.context.fillStyle = "#00000040";
        this.context.beginPath();
        this.context.arc(object.xm, object.ym, object.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(pointer && this.pointer.x || object.x1 + object.radius, pointer && this.pointer.y || object.y1 + object.radius, object.radius * 5 / 12, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();
        this.context.beginPath();
        this.context.strokeStyle = INACTIVE;
    }
    touchStart(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const { clientX , clientY  } = e.targetTouches[0];
        // const y = clientY ;
        // const y = clientY - (innerHeight - this.height) / 2;
        const y = clientY - 8;
        const x = clientX - 8;
        // if (this.inRange(this.jumpRange, x, y)) {
        // this.pointer = { x, y };
        //   this.keys.up.pressed = true;
        //   // this.keys.right.pressed = false;
        //   // this.keys.left.pressed = false;
        //   // if (this.x + this.width * .2 + this.sensitivity < this.pointer.x) this.keys.right.pressed = true;
        //   // if (this.x + this.width * .2 - this.sensitivity > this.pointer.x) this.keys.left.pressed = true;
        //   // if (this.y + this.height * .2 - this.sensitivity > this.pointer.y) this.keys.up.pressed = true;
        // }
        if (this.inRange(this.left, x, y)) {
            this.left.active = true;
            this.updateDigitalKey({
                left: true
            });
        } else if (this.inRange(this.right, x, y)) {
            this.right.active = true;
            this.updateDigitalKey({
                right: true
            });
        } else if (this.inRange(this.jumpRange, x, y)) {
            this.jumpRange.active = true;
            this.updateDigitalKey({
                up: true
            });
        }
    }
    touchEnd() {
        this.pointer = {
            x: 0,
            y: 0
        };
        this.updateDigitalKey({
            left: false,
            right: false,
            up: false
        });
        this.left.active = false;
        this.right.active = false;
        this.jump.active = false;
        this.movementRange.active = false;
        this.jumpRange.active = false;
    }
    keyDown({ key  }) {
        switch(key){
            case "ArrowUp":
                this.updateDigitalKey({
                    up: true
                });
                break;
            case "ArrowLeft":
                this.updateDigitalKey({
                    left: true
                });
                break;
            case "ArrowRight":
                this.updateDigitalKey({
                    right: true
                });
                break;
            default:
                break;
        }
    }
    keyUp({ key  }) {
        switch(key){
            case "ArrowUp":
                this.updateDigitalKey({
                    up: false
                });
                break;
            case "ArrowLeft":
                this.updateDigitalKey({
                    left: false
                });
                break;
            case "ArrowRight":
                this.updateDigitalKey({
                    right: false
                });
                break;
            default:
                break;
        }
    }
}
exports.default = Controller;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPPRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Pause {
    constructor(start = Date.now()){
        this.start = start;
        this.pauseTime = 0;
        this.state = "pause";
    }
    pauseGame() {
        if (this.state === "pause") return false;
        this.state = "pause";
        this.start = Date.now();
        return false;
    }
    resumeGame() {
        if (this.state === "play") return true;
        this.state = "play";
        this.pauseTime = Date.now() - this.start;
        return true;
    }
    getPauseTime(runGame) {
        if (!runGame) this.pauseTime = Date.now() - this.start;
        return this.pauseTime;
    }
}
exports.default = Pause;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4pgAn","9pmgW"], "9pmgW", "parcelRequire94c2")

//# sourceMappingURL=index.a4b9e910.js.map
