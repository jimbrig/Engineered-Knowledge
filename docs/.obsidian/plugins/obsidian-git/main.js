'use strict';

var child_process_1 = require('child_process');
var obsidian = require('obsidian');
var fs_1 = require('fs');
var tty = require('tty');
var util$1 = require('util');
var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var child_process_1__default = /*#__PURE__*/_interopDefaultLegacy(child_process_1);
var fs_1__default = /*#__PURE__*/_interopDefaultLegacy(fs_1);
var tty__default = /*#__PURE__*/_interopDefaultLegacy(tty);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util$1);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var gitError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitError = void 0;
/**
 * The `GitError` is thrown when the underlying `git` process throws a
 * fatal exception (eg an `ENOENT` exception when attempting to use a
 * non-writable directory as the root for your repo), and acts as the
 * base class for more specific errors thrown by the parsing of the
 * git response or errors in the configuration of the task about to
 * be run.
 *
 * When an exception is thrown, pending tasks in the same instance will
 * not be executed. The recommended way to run a series of tasks that
 * can independently fail without needing to prevent future tasks from
 * running is to catch them individually:
 *
 * ```typescript
 import { gitP, SimpleGit, GitError, PullResult } from 'simple-git';

 function catchTask (e: GitError) {
   return e.
 }

 const git = gitP(repoWorkingDir);
 const pulled: PullResult | GitError = await git.pull().catch(catchTask);
 const pushed: string | GitError = await git.pushTags().catch(catchTask);
 ```
 */
class GitError extends Error {
    constructor(task, message) {
        super(message);
        this.task = task;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitError = GitError;

});

var gitResponseError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitResponseError = void 0;

/**
 * The `GitResponseError` is the wrapper for a parsed response that is treated as
 * a fatal error, for example attempting a `merge` can leave the repo in a corrupted
 * state when there are conflicts so the task will reject rather than resolve.
 *
 * For example, catching the merge conflict exception:
 *
 * ```typescript
 import { gitP, SimpleGit, GitResponseError, MergeSummary } from 'simple-git';

 const git = gitP(repoRoot);
 const mergeOptions: string[] = ['--no-ff', 'other-branch'];
 const mergeSummary: MergeSummary = await git.merge(mergeOptions)
      .catch((e: GitResponseError<MergeSummary>) => e.git);

 if (mergeSummary.failed) {
   // deal with the error
 }
 ```
 */
class GitResponseError extends gitError.GitError {
    constructor(
    /**
     * `.git` access the parsed response that is treated as being an error
     */
    git, message) {
        super(undefined, message || String(git));
        this.git = git;
    }
}
exports.GitResponseError = GitResponseError;

});

var gitConstructError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitConstructError = void 0;

/**
 * The `GitConstructError` is thrown when an error occurs in the constructor
 * of the `simple-git` instance itself. Most commonly as a result of using
 * a `baseDir` option that points to a folder that either does not exist,
 * or cannot be read by the user the node script is running as.
 *
 * Check the `.message` property for more detail including the properties
 * passed to the constructor.
 */
class GitConstructError extends gitError.GitError {
    constructor(config, message) {
        super(undefined, message);
        this.config = config;
    }
}
exports.GitConstructError = GitConstructError;

});

var gitPluginError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPluginError = void 0;

class GitPluginError extends gitError.GitError {
    constructor(task, plugin, message) {
        super(task, message);
        this.task = task;
        this.plugin = plugin;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitPluginError = GitPluginError;

});

var taskConfigurationError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskConfigurationError = void 0;

/**
 * The `TaskConfigurationError` is thrown when a command was incorrectly
 * configured. An error of this kind means that no attempt was made to
 * run your command through the underlying `git` binary.
 *
 * Check the `.message` property for more detail on why your configuration
 * resulted in an error.
 */
class TaskConfigurationError extends gitError.GitError {
    constructor(message) {
        super(undefined, message);
    }
}
exports.TaskConfigurationError = TaskConfigurationError;

});

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

var browser = createCommonjsModule(function (module, exports) {
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
});

var hasFlag = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os__default['default'].release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty__default['default'].isatty(1))),
	stderr: translateLevel(supportsColor(true, tty__default['default'].isatty(2)))
};

var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util__default['default'].deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = supportsColor_1;

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty__default['default'].isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util__default['default'].format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default['default'].inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default['default'].inspect(v, this.inspectOpts);
};
});

var src$2 = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = browser;
} else {
	module.exports = node;
}
});

var src$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const debug_1 = __importDefault(src$2);
const log = debug_1.default('@kwsites/file-exists');
function check(path, isFile, isDirectory) {
    log(`checking %s`, path);
    try {
        const stat = fs_1__default['default'].statSync(path);
        if (stat.isFile() && isFile) {
            log(`[OK] path represents a file`);
            return true;
        }
        if (stat.isDirectory() && isDirectory) {
            log(`[OK] path represents a directory`);
            return true;
        }
        log(`[FAIL] path represents something other than a file or directory`);
        return false;
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            log(`[FAIL] path is not accessible: %o`, e);
            return false;
        }
        log(`[FATAL] %o`, e);
        throw e;
    }
}
/**
 * Synchronous validation of a path existing either as a file or as a directory.
 *
 * @param {string} path The path to check
 * @param {number} type One or both of the exported numeric constants
 */
function exists(path, type = exports.READABLE) {
    return check(path, (type & exports.FILE) > 0, (type & exports.FOLDER) > 0);
}
exports.exists = exists;
/**
 * Constant representing a file
 */
exports.FILE = 1;
/**
 * Constant representing a folder
 */
exports.FOLDER = 2;
/**
 * Constant representing either a file or a folder
 */
exports.READABLE = exports.FILE + exports.FOLDER;

});

var dist$1 = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(src$1);

});

var util = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.bufferToString = exports.prefixedArray = exports.asNumber = exports.asStringArray = exports.asArray = exports.objectToString = exports.remove = exports.including = exports.append = exports.folderExists = exports.forEachLineWithContent = exports.toLinesWithContent = exports.last = exports.first = exports.splitOn = exports.isUserFunction = exports.asFunction = exports.NOOP = void 0;

const NOOP = () => {
};
exports.NOOP = NOOP;
/**
 * Returns either the source argument when it is a `Function`, or the default
 * `NOOP` function constant
 */
function asFunction(source) {
    return typeof source === 'function' ? source : exports.NOOP;
}
exports.asFunction = asFunction;
/**
 * Determines whether the supplied argument is both a function, and is not
 * the `NOOP` function.
 */
function isUserFunction(source) {
    return (typeof source === 'function' && source !== exports.NOOP);
}
exports.isUserFunction = isUserFunction;
function splitOn(input, char) {
    const index = input.indexOf(char);
    if (index <= 0) {
        return [input, ''];
    }
    return [
        input.substr(0, index),
        input.substr(index + 1),
    ];
}
exports.splitOn = splitOn;
function first(input, offset = 0) {
    return isArrayLike(input) && input.length > offset ? input[offset] : undefined;
}
exports.first = first;
function last(input, offset = 0) {
    if (isArrayLike(input) && input.length > offset) {
        return input[input.length - 1 - offset];
    }
}
exports.last = last;
function isArrayLike(input) {
    return !!(input && typeof input.length === 'number');
}
function toLinesWithContent(input, trimmed = true, separator = '\n') {
    return input.split(separator)
        .reduce((output, line) => {
        const lineContent = trimmed ? line.trim() : line;
        if (lineContent) {
            output.push(lineContent);
        }
        return output;
    }, []);
}
exports.toLinesWithContent = toLinesWithContent;
function forEachLineWithContent(input, callback) {
    return toLinesWithContent(input, true).map(line => callback(line));
}
exports.forEachLineWithContent = forEachLineWithContent;
function folderExists(path) {
    return dist$1.exists(path, dist$1.FOLDER);
}
exports.folderExists = folderExists;
/**
 * Adds `item` into the `target` `Array` or `Set` when it is not already present and returns the `item`.
 */
function append(target, item) {
    if (Array.isArray(target)) {
        if (!target.includes(item)) {
            target.push(item);
        }
    }
    else {
        target.add(item);
    }
    return item;
}
exports.append = append;
/**
 * Adds `item` into the `target` `Array` when it is not already present and returns the `target`.
 */
function including(target, item) {
    if (Array.isArray(target) && !target.includes(item)) {
        target.push(item);
    }
    return target;
}
exports.including = including;
function remove(target, item) {
    if (Array.isArray(target)) {
        const index = target.indexOf(item);
        if (index >= 0) {
            target.splice(index, 1);
        }
    }
    else {
        target.delete(item);
    }
    return item;
}
exports.remove = remove;
exports.objectToString = Object.prototype.toString.call.bind(Object.prototype.toString);
function asArray(source) {
    return Array.isArray(source) ? source : [source];
}
exports.asArray = asArray;
function asStringArray(source) {
    return asArray(source).map(String);
}
exports.asStringArray = asStringArray;
function asNumber(source, onNaN = 0) {
    if (source == null) {
        return onNaN;
    }
    const num = parseInt(source, 10);
    return isNaN(num) ? onNaN : num;
}
exports.asNumber = asNumber;
function prefixedArray(input, prefix) {
    const output = [];
    for (let i = 0, max = input.length; i < max; i++) {
        output.push(prefix, input[i]);
    }
    return output;
}
exports.prefixedArray = prefixedArray;
function bufferToString(input) {
    return (Array.isArray(input) ? Buffer.concat(input) : input).toString('utf-8');
}
exports.bufferToString = bufferToString;
/**
 * Get a new object from a source object with only the listed properties.
 */
function pick(source, properties) {
    return Object.assign({}, ...properties.map((property) => property in source ? { [property]: source[property] } : {}));
}
exports.pick = pick;

});

var argumentFilters = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterHasLength = exports.filterFunction = exports.filterPlainObject = exports.filterStringOrStringArray = exports.filterStringArray = exports.filterString = exports.filterPrimitives = exports.filterArray = exports.filterType = void 0;

function filterType(input, filter, def) {
    if (filter(input)) {
        return input;
    }
    return (arguments.length > 2) ? def : undefined;
}
exports.filterType = filterType;
const filterArray = (input) => {
    return Array.isArray(input);
};
exports.filterArray = filterArray;
function filterPrimitives(input, omit) {
    return /number|string|boolean/.test(typeof input) && (!omit || !omit.includes((typeof input)));
}
exports.filterPrimitives = filterPrimitives;
const filterString = (input) => {
    return typeof input === 'string';
};
exports.filterString = filterString;
const filterStringArray = (input) => {
    return Array.isArray(input) && input.every(exports.filterString);
};
exports.filterStringArray = filterStringArray;
const filterStringOrStringArray = (input) => {
    return exports.filterString(input) || (Array.isArray(input) && input.every(exports.filterString));
};
exports.filterStringOrStringArray = filterStringOrStringArray;
function filterPlainObject(input) {
    return !!input && util.objectToString(input) === '[object Object]';
}
exports.filterPlainObject = filterPlainObject;
function filterFunction(input) {
    return typeof input === 'function';
}
exports.filterFunction = filterFunction;
const filterHasLength = (input) => {
    if (input == null || 'number|boolean|function'.includes(typeof input)) {
        return false;
    }
    return Array.isArray(input) || typeof input === 'string' || typeof input.length === 'number';
};
exports.filterHasLength = filterHasLength;

});

var exitCodes = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitCodes = void 0;
(function (ExitCodes) {
    ExitCodes[ExitCodes["SUCCESS"] = 0] = "SUCCESS";
    ExitCodes[ExitCodes["ERROR"] = 1] = "ERROR";
    ExitCodes[ExitCodes["UNCLEAN"] = 128] = "UNCLEAN";
})(exports.ExitCodes || (exports.ExitCodes = {}));

});

var gitOutputStreams = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitOutputStreams = void 0;
class GitOutputStreams {
    constructor(stdOut, stdErr) {
        this.stdOut = stdOut;
        this.stdErr = stdErr;
    }
    asStrings() {
        return new GitOutputStreams(this.stdOut.toString('utf8'), this.stdErr.toString('utf8'));
    }
}
exports.GitOutputStreams = GitOutputStreams;

});

var lineParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteLineParser = exports.LineParser = void 0;
class LineParser {
    constructor(regExp, useMatches) {
        this.matches = [];
        this.parse = (line, target) => {
            this.resetMatches();
            if (!this._regExp.every((reg, index) => this.addMatch(reg, index, line(index)))) {
                return false;
            }
            return this.useMatches(target, this.prepareMatches()) !== false;
        };
        this._regExp = Array.isArray(regExp) ? regExp : [regExp];
        if (useMatches) {
            this.useMatches = useMatches;
        }
    }
    // @ts-ignore
    useMatches(target, match) {
        throw new Error(`LineParser:useMatches not implemented`);
    }
    resetMatches() {
        this.matches.length = 0;
    }
    prepareMatches() {
        return this.matches;
    }
    addMatch(reg, index, line) {
        const matched = line && reg.exec(line);
        if (matched) {
            this.pushMatch(index, matched);
        }
        return !!matched;
    }
    pushMatch(_index, matched) {
        this.matches.push(...matched.slice(1));
    }
}
exports.LineParser = LineParser;
class RemoteLineParser extends LineParser {
    addMatch(reg, index, line) {
        return /^remote:\s/.test(String(line)) && super.addMatch(reg, index, line);
    }
    pushMatch(index, matched) {
        if (index > 0 || matched.length > 1) {
            super.pushMatch(index, matched);
        }
    }
}
exports.RemoteLineParser = RemoteLineParser;

});

var simpleGitOptions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstanceConfig = void 0;
const defaultOptions = {
    binary: 'git',
    maxConcurrentProcesses: 5,
    config: [],
};
function createInstanceConfig(...options) {
    const baseDir = process.cwd();
    const config = Object.assign(Object.assign({ baseDir }, defaultOptions), ...(options.filter(o => typeof o === 'object' && o)));
    config.baseDir = config.baseDir || baseDir;
    return config;
}
exports.createInstanceConfig = createInstanceConfig;

});

var taskOptions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.trailingFunctionArgument = exports.trailingOptionsArgument = exports.getTrailingOptions = exports.appendTaskOptions = void 0;


function appendTaskOptions(options, commands = []) {
    if (!argumentFilters.filterPlainObject(options)) {
        return commands;
    }
    return Object.keys(options).reduce((commands, key) => {
        const value = options[key];
        if (argumentFilters.filterPrimitives(value, ['boolean'])) {
            commands.push(key + '=' + value);
        }
        else {
            commands.push(key);
        }
        return commands;
    }, commands);
}
exports.appendTaskOptions = appendTaskOptions;
function getTrailingOptions(args, initialPrimitive = 0, objectOnly = false) {
    const command = [];
    for (let i = 0, max = initialPrimitive < 0 ? args.length : initialPrimitive; i < max; i++) {
        if ('string|number'.includes(typeof args[i])) {
            command.push(String(args[i]));
        }
    }
    appendTaskOptions(trailingOptionsArgument(args), command);
    if (!objectOnly) {
        command.push(...trailingArrayArgument(args));
    }
    return command;
}
exports.getTrailingOptions = getTrailingOptions;
function trailingArrayArgument(args) {
    const hasTrailingCallback = typeof util.last(args) === 'function';
    return argumentFilters.filterType(util.last(args, hasTrailingCallback ? 1 : 0), argumentFilters.filterArray, []);
}
/**
 * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
 * if there is one. When not found, the return value is null.
 */
function trailingOptionsArgument(args) {
    const hasTrailingCallback = argumentFilters.filterFunction(util.last(args));
    return argumentFilters.filterType(util.last(args, hasTrailingCallback ? 1 : 0), argumentFilters.filterPlainObject);
}
exports.trailingOptionsArgument = trailingOptionsArgument;
/**
 * Returns either the source argument when it is a `Function`, or the default
 * `NOOP` function constant
 */
function trailingFunctionArgument(args, includeNoop = true) {
    const callback = util.asFunction(util.last(args));
    return includeNoop || util.isUserFunction(callback) ? callback : undefined;
}
exports.trailingFunctionArgument = trailingFunctionArgument;

});

var taskParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringResponse = exports.callTaskParser = void 0;

function callTaskParser(parser, streams) {
    return parser(streams.stdOut, streams.stdErr);
}
exports.callTaskParser = callTaskParser;
function parseStringResponse(result, parsers, ...texts) {
    texts.forEach(text => {
        for (let lines = util.toLinesWithContent(text), i = 0, max = lines.length; i < max; i++) {
            const line = (offset = 0) => {
                if ((i + offset) >= max) {
                    return;
                }
                return lines[i + offset];
            };
            parsers.some(({ parse }) => parse(line, result));
        }
    });
    return result;
}
exports.parseStringResponse = parseStringResponse;

});

var utils = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(argumentFilters, exports);
__exportStar(exitCodes, exports);
__exportStar(gitOutputStreams, exports);
__exportStar(lineParser, exports);
__exportStar(simpleGitOptions, exports);
__exportStar(taskOptions, exports);
__exportStar(taskParser, exports);
__exportStar(util, exports);

});

var checkIsRepo = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsBareRepoTask = exports.checkIsRepoRootTask = exports.checkIsRepoTask = exports.CheckRepoActions = void 0;

var CheckRepoActions;
(function (CheckRepoActions) {
    CheckRepoActions["BARE"] = "bare";
    CheckRepoActions["IN_TREE"] = "tree";
    CheckRepoActions["IS_REPO_ROOT"] = "root";
})(CheckRepoActions = exports.CheckRepoActions || (exports.CheckRepoActions = {}));
const onError = ({ exitCode }, error, done, fail) => {
    if (exitCode === utils.ExitCodes.UNCLEAN && isNotRepoMessage(error)) {
        return done(Buffer.from('false'));
    }
    fail(error);
};
const parser = (text) => {
    return text.trim() === 'true';
};
function checkIsRepoTask(action) {
    switch (action) {
        case CheckRepoActions.BARE:
            return checkIsBareRepoTask();
        case CheckRepoActions.IS_REPO_ROOT:
            return checkIsRepoRootTask();
    }
    const commands = ['rev-parse', '--is-inside-work-tree'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser,
    };
}
exports.checkIsRepoTask = checkIsRepoTask;
function checkIsRepoRootTask() {
    const commands = ['rev-parse', '--git-dir'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser(path) {
            return /^\.(git)?$/.test(path.trim());
        },
    };
}
exports.checkIsRepoRootTask = checkIsRepoRootTask;
function checkIsBareRepoTask() {
    const commands = ['rev-parse', '--is-bare-repository'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser,
    };
}
exports.checkIsBareRepoTask = checkIsBareRepoTask;
function isNotRepoMessage(error) {
    return /(Not a git repository|Kein Git-Repository)/i.test(String(error));
}

});

var CleanSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanSummaryParser = exports.CleanResponse = void 0;

class CleanResponse {
    constructor(dryRun) {
        this.dryRun = dryRun;
        this.paths = [];
        this.files = [];
        this.folders = [];
    }
}
exports.CleanResponse = CleanResponse;
const removalRegexp = /^[a-z]+\s*/i;
const dryRunRemovalRegexp = /^[a-z]+\s+[a-z]+\s*/i;
const isFolderRegexp = /\/$/;
function cleanSummaryParser(dryRun, text) {
    const summary = new CleanResponse(dryRun);
    const regexp = dryRun ? dryRunRemovalRegexp : removalRegexp;
    utils.toLinesWithContent(text).forEach(line => {
        const removed = line.replace(regexp, '');
        summary.paths.push(removed);
        (isFolderRegexp.test(removed) ? summary.folders : summary.files).push(removed);
    });
    return summary;
}
exports.cleanSummaryParser = cleanSummaryParser;

});

var task = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyTask = exports.isBufferTask = exports.straightThroughBufferTask = exports.straightThroughStringTask = exports.configurationErrorTask = exports.adhocExecTask = exports.EMPTY_COMMANDS = void 0;

exports.EMPTY_COMMANDS = [];
function adhocExecTask(parser) {
    return {
        commands: exports.EMPTY_COMMANDS,
        format: 'empty',
        parser,
    };
}
exports.adhocExecTask = adhocExecTask;
function configurationErrorTask(error) {
    return {
        commands: exports.EMPTY_COMMANDS,
        format: 'empty',
        parser() {
            throw typeof error === 'string' ? new taskConfigurationError.TaskConfigurationError(error) : error;
        }
    };
}
exports.configurationErrorTask = configurationErrorTask;
function straightThroughStringTask(commands, trimmed = false) {
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return trimmed ? String(text).trim() : text;
        },
    };
}
exports.straightThroughStringTask = straightThroughStringTask;
function straightThroughBufferTask(commands) {
    return {
        commands,
        format: 'buffer',
        parser(buffer) {
            return buffer;
        },
    };
}
exports.straightThroughBufferTask = straightThroughBufferTask;
function isBufferTask(task) {
    return task.format === 'buffer';
}
exports.isBufferTask = isBufferTask;
function isEmptyTask(task) {
    return task.format === 'empty' || !task.commands.length;
}
exports.isEmptyTask = isEmptyTask;

});

var clean = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCleanOptionsArray = exports.cleanTask = exports.cleanWithOptionsTask = exports.CleanOptions = exports.CONFIG_ERROR_UNKNOWN_OPTION = exports.CONFIG_ERROR_MODE_REQUIRED = exports.CONFIG_ERROR_INTERACTIVE_MODE = void 0;



exports.CONFIG_ERROR_INTERACTIVE_MODE = 'Git clean interactive mode is not supported';
exports.CONFIG_ERROR_MODE_REQUIRED = 'Git clean mode parameter ("n" or "f") is required';
exports.CONFIG_ERROR_UNKNOWN_OPTION = 'Git clean unknown option found in: ';
/**
 * All supported option switches available for use in a `git.clean` operation
 */
var CleanOptions;
(function (CleanOptions) {
    CleanOptions["DRY_RUN"] = "n";
    CleanOptions["FORCE"] = "f";
    CleanOptions["IGNORED_INCLUDED"] = "x";
    CleanOptions["IGNORED_ONLY"] = "X";
    CleanOptions["EXCLUDING"] = "e";
    CleanOptions["QUIET"] = "q";
    CleanOptions["RECURSIVE"] = "d";
})(CleanOptions = exports.CleanOptions || (exports.CleanOptions = {}));
const CleanOptionValues = new Set(['i', ...utils.asStringArray(Object.values(CleanOptions))]);
function cleanWithOptionsTask(mode, customArgs) {
    const { cleanMode, options, valid } = getCleanOptions(mode);
    if (!cleanMode) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_MODE_REQUIRED);
    }
    if (!valid.options) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_UNKNOWN_OPTION + JSON.stringify(mode));
    }
    options.push(...customArgs);
    if (options.some(isInteractiveMode)) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_INTERACTIVE_MODE);
    }
    return cleanTask(cleanMode, options);
}
exports.cleanWithOptionsTask = cleanWithOptionsTask;
function cleanTask(mode, customArgs) {
    const commands = ['clean', `-${mode}`, ...customArgs];
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return CleanSummary.cleanSummaryParser(mode === CleanOptions.DRY_RUN, text);
        }
    };
}
exports.cleanTask = cleanTask;
function isCleanOptionsArray(input) {
    return Array.isArray(input) && input.every(test => CleanOptionValues.has(test));
}
exports.isCleanOptionsArray = isCleanOptionsArray;
function getCleanOptions(input) {
    let cleanMode;
    let options = [];
    let valid = { cleanMode: false, options: true };
    input.replace(/[^a-z]i/g, '').split('').forEach(char => {
        if (isCleanMode(char)) {
            cleanMode = char;
            valid.cleanMode = true;
        }
        else {
            valid.options = valid.options && isKnownOption(options[options.length] = (`-${char}`));
        }
    });
    return {
        cleanMode,
        options,
        valid,
    };
}
function isCleanMode(cleanMode) {
    return cleanMode === CleanOptions.FORCE || cleanMode === CleanOptions.DRY_RUN;
}
function isKnownOption(option) {
    return /^-[a-z]$/i.test(option) && CleanOptionValues.has(option.charAt(1));
}
function isInteractiveMode(option) {
    if (/^-[^\-]/.test(option)) {
        return option.indexOf('i') > 0;
    }
    return option === '--interactive';
}

});

var ConfigList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.configListParser = exports.ConfigList = void 0;

class ConfigList {
    constructor() {
        this.files = [];
        this.values = Object.create(null);
    }
    get all() {
        if (!this._all) {
            this._all = this.files.reduce((all, file) => {
                return Object.assign(all, this.values[file]);
            }, {});
        }
        return this._all;
    }
    addFile(file) {
        if (!(file in this.values)) {
            const latest = utils.last(this.files);
            this.values[file] = latest ? Object.create(this.values[latest]) : {};
            this.files.push(file);
        }
        return this.values[file];
    }
    addValue(file, key, value) {
        const values = this.addFile(file);
        if (!values.hasOwnProperty(key)) {
            values[key] = value;
        }
        else if (Array.isArray(values[key])) {
            values[key].push(value);
        }
        else {
            values[key] = [values[key], value];
        }
        this._all = undefined;
    }
}
exports.ConfigList = ConfigList;
function configListParser(text) {
    const config = new ConfigList();
    const lines = text.split('\0');
    for (let i = 0, max = lines.length - 1; i < max;) {
        const file = configFilePath(lines[i++]);
        const [key, value] = utils.splitOn(lines[i++], '\n');
        config.addValue(file, key, value);
    }
    return config;
}
exports.configListParser = configListParser;
function configFilePath(filePath) {
    return filePath.replace(/^(file):/, '');
}

});

var config = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitConfigScope = void 0;


var GitConfigScope;
(function (GitConfigScope) {
    GitConfigScope["system"] = "system";
    GitConfigScope["global"] = "global";
    GitConfigScope["local"] = "local";
    GitConfigScope["worktree"] = "worktree";
})(GitConfigScope = exports.GitConfigScope || (exports.GitConfigScope = {}));
function asConfigScope(scope) {
    if (typeof scope === 'string' && GitConfigScope.hasOwnProperty(scope)) {
        return scope;
    }
    return GitConfigScope.local;
}
function addConfigTask(key, value, append, scope) {
    const commands = ['config', `--${scope}`];
    if (append) {
        commands.push('--add');
    }
    commands.push(key, value);
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return text;
        }
    };
}
function listConfigTask() {
    return {
        commands: ['config', '--list', '--show-origin', '--null'],
        format: 'utf-8',
        parser(text) {
            return ConfigList_1.configListParser(text);
        },
    };
}
function default_1() {
    return {
        addConfig(key, value, ...rest) {
            return this._runTask(addConfigTask(key, value, rest[0] === true, asConfigScope(rest[1])), utils.trailingFunctionArgument(arguments));
        },
        listConfig() {
            return this._runTask(listConfigTask(), utils.trailingFunctionArgument(arguments));
        },
    };
}
exports.default = default_1;

});

var reset = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResetMode = exports.resetTask = exports.ResetMode = void 0;

var ResetMode;
(function (ResetMode) {
    ResetMode["MIXED"] = "mixed";
    ResetMode["SOFT"] = "soft";
    ResetMode["HARD"] = "hard";
    ResetMode["MERGE"] = "merge";
    ResetMode["KEEP"] = "keep";
})(ResetMode = exports.ResetMode || (exports.ResetMode = {}));
const ResetModes = Array.from(Object.values(ResetMode));
function resetTask(mode, customArgs) {
    const commands = ['reset'];
    if (isValidResetMode(mode)) {
        commands.push(`--${mode}`);
    }
    commands.push(...customArgs);
    return task.straightThroughStringTask(commands);
}
exports.resetTask = resetTask;
function getResetMode(mode) {
    if (isValidResetMode(mode)) {
        return mode;
    }
    switch (typeof mode) {
        case 'string':
        case 'undefined':
            return ResetMode.SOFT;
    }
    return;
}
exports.getResetMode = getResetMode;
function isValidResetMode(mode) {
    return ResetModes.includes(mode);
}

});

var api_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });









const api = {
    CheckRepoActions: checkIsRepo.CheckRepoActions,
    CleanOptions: clean.CleanOptions,
    GitConfigScope: config.GitConfigScope,
    GitConstructError: gitConstructError.GitConstructError,
    GitError: gitError.GitError,
    GitPluginError: gitPluginError.GitPluginError,
    GitResponseError: gitResponseError.GitResponseError,
    ResetMode: reset.ResetMode,
    TaskConfigurationError: taskConfigurationError.TaskConfigurationError,
};
exports.default = api;

});

var commandConfigPrefixingPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandConfigPrefixingPlugin = void 0;

function commandConfigPrefixingPlugin(configuration) {
    const prefix = utils.prefixedArray(configuration, '-c');
    return {
        type: 'spawn.args',
        action(data) {
            return [...prefix, ...data];
        },
    };
}
exports.commandConfigPrefixingPlugin = commandConfigPrefixingPlugin;

});

var errorDetection_plugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorDetectionPlugin = exports.errorDetectionHandler = void 0;

function isTaskError(result) {
    return !!(result.exitCode && result.stdErr.length);
}
function getErrorMessage(result) {
    return Buffer.concat([...result.stdOut, ...result.stdErr]);
}
function errorDetectionHandler(overwrite = false, isError = isTaskError, errorMessage = getErrorMessage) {
    return (error, result) => {
        if ((!overwrite && error) || !isError(result)) {
            return error;
        }
        return errorMessage(result);
    };
}
exports.errorDetectionHandler = errorDetectionHandler;
function errorDetectionPlugin(config) {
    return {
        type: 'task.error',
        action(data, context) {
            const error = config(data.error, {
                stdErr: context.stdErr,
                stdOut: context.stdOut,
                exitCode: context.exitCode
            });
            if (Buffer.isBuffer(error)) {
                return { error: new gitError.GitError(undefined, error.toString('utf-8')) };
            }
            return {
                error
            };
        },
    };
}
exports.errorDetectionPlugin = errorDetectionPlugin;

});

var pluginStore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginStore = void 0;

class PluginStore {
    constructor() {
        this.plugins = new Set();
    }
    add(plugin) {
        const plugins = [];
        utils.asArray(plugin).forEach(plugin => plugin && this.plugins.add(utils.append(plugins, plugin)));
        return () => {
            plugins.forEach(plugin => this.plugins.delete(plugin));
        };
    }
    exec(type, data, context) {
        let output = data;
        const contextual = Object.freeze(Object.create(context));
        for (const plugin of this.plugins) {
            if (plugin.type === type) {
                output = plugin.action(output, contextual);
            }
        }
        return output;
    }
}
exports.PluginStore = PluginStore;

});

var progressMonitorPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressMonitorPlugin = void 0;

function progressMonitorPlugin(progress) {
    const progressCommand = '--progress';
    const progressMethods = ['checkout', 'clone', 'fetch', 'pull', 'push'];
    const onProgress = {
        type: 'spawn.after',
        action(_data, context) {
            var _a;
            if (!context.commands.includes(progressCommand)) {
                return;
            }
            (_a = context.spawned.stderr) === null || _a === void 0 ? void 0 : _a.on('data', (chunk) => {
                const message = /^([a-zA-Z ]+):\s*(\d+)% \((\d+)\/(\d+)\)/.exec(chunk.toString('utf8'));
                if (!message) {
                    return;
                }
                progress({
                    method: context.method,
                    stage: progressEventStage(message[1]),
                    progress: utils.asNumber(message[2]),
                    processed: utils.asNumber(message[3]),
                    total: utils.asNumber(message[4]),
                });
            });
        }
    };
    const onArgs = {
        type: 'spawn.args',
        action(args, context) {
            if (!progressMethods.includes(context.method)) {
                return args;
            }
            return utils.including(args, progressCommand);
        }
    };
    return [onArgs, onProgress];
}
exports.progressMonitorPlugin = progressMonitorPlugin;
function progressEventStage(input) {
    return String(input.toLowerCase().split(' ', 1)) || 'unknown';
}

});

var simpleGitPlugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

});

var spawnOptionsPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnOptionsPlugin = void 0;

function spawnOptionsPlugin(spawnOptions) {
    const options = utils.pick(spawnOptions, ['uid', 'gid']);
    return {
        type: 'spawn.options',
        action(data) {
            return Object.assign(Object.assign({}, options), data);
        },
    };
}
exports.spawnOptionsPlugin = spawnOptionsPlugin;

});

var timoutPlugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutPlugin = void 0;

function timeoutPlugin({ block }) {
    if (block > 0) {
        return {
            type: 'spawn.after',
            action(_data, context) {
                var _a, _b;
                let timeout;
                function wait() {
                    timeout && clearTimeout(timeout);
                    timeout = setTimeout(kill, block);
                }
                function stop() {
                    var _a, _b;
                    (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.off('data', wait);
                    (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.off('data', wait);
                    context.spawned.off('exit', stop);
                    context.spawned.off('close', stop);
                }
                function kill() {
                    stop();
                    context.kill(new gitPluginError.GitPluginError(undefined, 'timeout', `block timeout reached`));
                }
                (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.on('data', wait);
                (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.on('data', wait);
                context.spawned.on('exit', stop);
                context.spawned.on('close', stop);
                wait();
            }
        };
    }
}
exports.timeoutPlugin = timeoutPlugin;

});

var plugins = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(commandConfigPrefixingPlugin_1, exports);
__exportStar(errorDetection_plugin, exports);
__exportStar(pluginStore, exports);
__exportStar(progressMonitorPlugin_1, exports);
__exportStar(simpleGitPlugin, exports);
__exportStar(spawnOptionsPlugin_1, exports);
__exportStar(timoutPlugin, exports);

});

var gitLogger = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitLogger = exports.createLogger = void 0;


src$2.default.formatters.L = (value) => String(utils.filterHasLength(value) ? value.length : '-');
src$2.default.formatters.B = (value) => {
    if (Buffer.isBuffer(value)) {
        return value.toString('utf8');
    }
    return utils.objectToString(value);
};
function createLog() {
    return src$2.default('simple-git');
}
function prefixedLogger(to, prefix, forward) {
    if (!prefix || !String(prefix).replace(/\s*/, '')) {
        return !forward ? to : (message, ...args) => {
            to(message, ...args);
            forward(message, ...args);
        };
    }
    return (message, ...args) => {
        to(`%s ${message}`, prefix, ...args);
        if (forward) {
            forward(message, ...args);
        }
    };
}
function childLoggerName(name, childDebugger, { namespace: parentNamespace }) {
    if (typeof name === 'string') {
        return name;
    }
    const childNamespace = childDebugger && childDebugger.namespace || '';
    if (childNamespace.startsWith(parentNamespace)) {
        return childNamespace.substr(parentNamespace.length + 1);
    }
    return childNamespace || parentNamespace;
}
function createLogger(label, verbose, initialStep, infoDebugger = createLog()) {
    const labelPrefix = label && `[${label}]` || '';
    const spawned = [];
    const debugDebugger = (typeof verbose === 'string') ? infoDebugger.extend(verbose) : verbose;
    const key = childLoggerName(utils.filterType(verbose, utils.filterString), debugDebugger, infoDebugger);
    return step(initialStep);
    function sibling(name, initial) {
        return utils.append(spawned, createLogger(label, key.replace(/^[^:]+/, name), initial, infoDebugger));
    }
    function step(phase) {
        const stepPrefix = phase && `[${phase}]` || '';
        const debug = debugDebugger && prefixedLogger(debugDebugger, stepPrefix) || utils.NOOP;
        const info = prefixedLogger(infoDebugger, `${labelPrefix} ${stepPrefix}`, debug);
        return Object.assign(debugDebugger ? debug : info, {
            label,
            sibling,
            info,
            step,
        });
    }
}
exports.createLogger = createLogger;
/**
 * The `GitLogger` is used by the main `SimpleGit` runner to handle logging
 * any warnings or errors.
 */
class GitLogger {
    constructor(_out = createLog()) {
        this._out = _out;
        this.error = prefixedLogger(_out, '[ERROR]');
        this.warn = prefixedLogger(_out, '[WARN]');
    }
    silent(silence = false) {
        if (silence !== this._out.enabled) {
            return;
        }
        const { namespace } = this._out;
        const env = (process.env.DEBUG || '').split(',').filter(s => !!s);
        const hasOn = env.includes(namespace);
        const hasOff = env.includes(`-${namespace}`);
        // enabling the log
        if (!silence) {
            if (hasOff) {
                utils.remove(env, `-${namespace}`);
            }
            else {
                env.push(namespace);
            }
        }
        else {
            if (hasOn) {
                utils.remove(env, namespace);
            }
            else {
                env.push(`-${namespace}`);
            }
        }
        src$2.default.enable(env.join(','));
    }
}
exports.GitLogger = GitLogger;

});

var tasksPendingQueue = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksPendingQueue = void 0;


class TasksPendingQueue {
    constructor(logLabel = 'GitExecutor') {
        this.logLabel = logLabel;
        this._queue = new Map();
    }
    withProgress(task) {
        return this._queue.get(task);
    }
    createProgress(task) {
        const name = TasksPendingQueue.getName(task.commands[0]);
        const logger = gitLogger.createLogger(this.logLabel, name);
        return {
            task,
            logger,
            name,
        };
    }
    push(task) {
        const progress = this.createProgress(task);
        progress.logger('Adding task to the queue, commands = %o', task.commands);
        this._queue.set(task, progress);
        return progress;
    }
    fatal(err) {
        for (const [task, { logger }] of Array.from(this._queue.entries())) {
            if (task === err.task) {
                logger.info(`Failed %o`, err);
                logger(`Fatal exception, any as-yet un-started tasks run through this executor will not be attempted`);
            }
            else {
                logger.info(`A fatal exception occurred in a previous task, the queue has been purged: %o`, err.message);
            }
            this.complete(task);
        }
        if (this._queue.size !== 0) {
            throw new Error(`Queue size should be zero after fatal: ${this._queue.size}`);
        }
    }
    complete(task) {
        const progress = this.withProgress(task);
        if (progress) {
            this._queue.delete(task);
        }
    }
    attempt(task) {
        const progress = this.withProgress(task);
        if (!progress) {
            throw new gitError.GitError(undefined, 'TasksPendingQueue: attempt called for an unknown task');
        }
        progress.logger('Starting task');
        return progress;
    }
    static getName(name = 'empty') {
        return `task:${name}:${++TasksPendingQueue.counter}`;
    }
}
exports.TasksPendingQueue = TasksPendingQueue;
TasksPendingQueue.counter = 0;

});

var gitExecutorChain = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutorChain = void 0;





class GitExecutorChain {
    constructor(_executor, _scheduler, _plugins) {
        this._executor = _executor;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = Promise.resolve();
        this._queue = new tasksPendingQueue.TasksPendingQueue();
    }
    get binary() {
        return this._executor.binary;
    }
    get cwd() {
        return this._cwd || this._executor.cwd;
    }
    set cwd(cwd) {
        this._cwd = cwd;
    }
    get env() {
        return this._executor.env;
    }
    get outputHandler() {
        return this._executor.outputHandler;
    }
    chain() {
        return this;
    }
    push(task) {
        this._queue.push(task);
        return this._chain = this._chain.then(() => this.attemptTask(task));
    }
    attemptTask(task$1) {
        return __awaiter(this, void 0, void 0, function* () {
            const onScheduleComplete = yield this._scheduler.next();
            const onQueueComplete = () => this._queue.complete(task$1);
            try {
                const { logger } = this._queue.attempt(task$1);
                return yield (task.isEmptyTask(task$1)
                    ? this.attemptEmptyTask(task$1, logger)
                    : this.attemptRemoteTask(task$1, logger));
            }
            catch (e) {
                throw this.onFatalException(task$1, e);
            }
            finally {
                onQueueComplete();
                onScheduleComplete();
            }
        });
    }
    onFatalException(task, e) {
        const gitError$1 = (e instanceof gitError.GitError) ? Object.assign(e, { task }) : new gitError.GitError(task, e && String(e));
        this._chain = Promise.resolve();
        this._queue.fatal(gitError$1);
        return gitError$1;
    }
    attemptRemoteTask(task$1, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = this._plugins.exec('spawn.args', [...task$1.commands], pluginContext(task$1, task$1.commands));
            const raw = yield this.gitResponse(task$1, this.binary, args, this.outputHandler, logger.step('SPAWN'));
            const outputStreams = yield this.handleTaskData(task$1, args, raw, logger.step('HANDLE'));
            logger(`passing response to task's parser as a %s`, task$1.format);
            if (task.isBufferTask(task$1)) {
                return utils.callTaskParser(task$1.parser, outputStreams);
            }
            return utils.callTaskParser(task$1.parser, outputStreams.asStrings());
        });
    }
    attemptEmptyTask(task, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            logger(`empty task bypassing child process to call to task's parser`);
            return task.parser(this);
        });
    }
    handleTaskData(task, args, result, logger) {
        const { exitCode, rejection, stdOut, stdErr } = result;
        return new Promise((done, fail) => {
            logger(`Preparing to handle process response exitCode=%d stdOut=`, exitCode);
            const { error } = this._plugins.exec('task.error', { error: rejection }, Object.assign(Object.assign({}, pluginContext(task, args)), result));
            if (error && task.onError) {
                logger.info(`exitCode=%s handling with custom error handler`);
                return task.onError(result, error, (newStdOut) => {
                    logger.info(`custom error handler treated as success`);
                    logger(`custom error returned a %s`, utils.objectToString(newStdOut));
                    done(new utils.GitOutputStreams(Array.isArray(newStdOut) ? Buffer.concat(newStdOut) : newStdOut, Buffer.concat(stdErr)));
                }, fail);
            }
            if (error) {
                logger.info(`handling as error: exitCode=%s stdErr=%s rejection=%o`, exitCode, stdErr.length, rejection);
                return fail(error);
            }
            logger.info(`retrieving task output complete`);
            done(new utils.GitOutputStreams(Buffer.concat(stdOut), Buffer.concat(stdErr)));
        });
    }
    gitResponse(task, command, args, outputHandler, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const outputLogger = logger.sibling('output');
            const spawnOptions = this._plugins.exec('spawn.options', {
                cwd: this.cwd,
                env: this.env,
                windowsHide: true,
            }, pluginContext(task, task.commands));
            return new Promise((done) => {
                const stdOut = [];
                const stdErr = [];
                let attempted = false;
                let rejection;
                function attemptClose(exitCode, event = 'retry') {
                    // closing when there is content, terminate immediately
                    if (attempted || stdErr.length || stdOut.length) {
                        logger.info(`exitCode=%s event=%s rejection=%o`, exitCode, event, rejection);
                        done({
                            stdOut,
                            stdErr,
                            exitCode,
                            rejection,
                        });
                        attempted = true;
                    }
                    // first attempt at closing but no content yet, wait briefly for the close/exit that may follow
                    if (!attempted) {
                        attempted = true;
                        setTimeout(() => attemptClose(exitCode, 'deferred'), 50);
                        logger('received %s event before content on stdOut/stdErr', event);
                    }
                }
                logger.info(`%s %o`, command, args);
                logger('%O', spawnOptions);
                const spawned = child_process_1__default['default'].spawn(command, args, spawnOptions);
                spawned.stdout.on('data', onDataReceived(stdOut, 'stdOut', logger, outputLogger.step('stdOut')));
                spawned.stderr.on('data', onDataReceived(stdErr, 'stdErr', logger, outputLogger.step('stdErr')));
                spawned.on('error', onErrorReceived(stdErr, logger));
                spawned.on('close', (code) => attemptClose(code, 'close'));
                spawned.on('exit', (code) => attemptClose(code, 'exit'));
                if (outputHandler) {
                    logger(`Passing child process stdOut/stdErr to custom outputHandler`);
                    outputHandler(command, spawned.stdout, spawned.stderr, [...args]);
                }
                this._plugins.exec('spawn.after', undefined, Object.assign(Object.assign({}, pluginContext(task, args)), { spawned, kill(reason) {
                        if (spawned.killed) {
                            return;
                        }
                        rejection = reason;
                        spawned.kill('SIGINT');
                    } }));
            });
        });
    }
}
exports.GitExecutorChain = GitExecutorChain;
function pluginContext(task, commands) {
    return {
        method: utils.first(task.commands) || '',
        commands,
    };
}
function onErrorReceived(target, logger) {
    return (err) => {
        logger(`[ERROR] child process exception %o`, err);
        target.push(Buffer.from(String(err.stack), 'ascii'));
    };
}
function onDataReceived(target, name, logger, output) {
    return (buffer) => {
        logger(`%s received %L bytes`, name, buffer);
        output(`%B`, buffer);
        target.push(buffer);
    };
}

});

var gitExecutor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutor = void 0;

class GitExecutor {
    constructor(binary = 'git', cwd, _scheduler, _plugins) {
        this.binary = binary;
        this.cwd = cwd;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = new gitExecutorChain.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    chain() {
        return new gitExecutorChain.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    push(task) {
        return this._chain.push(task);
    }
}
exports.GitExecutor = GitExecutor;

});

var taskCallback_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskCallback = void 0;


function taskCallback(task, response, callback = utils.NOOP) {
    const onSuccess = (data) => {
        callback(null, data);
    };
    const onError = (err) => {
        if ((err === null || err === void 0 ? void 0 : err.task) === task) {
            if (err instanceof gitResponseError.GitResponseError) {
                return callback(addDeprecationNoticeToError(err));
            }
            callback(err);
        }
    };
    response.then(onSuccess, onError);
}
exports.taskCallback = taskCallback;
function addDeprecationNoticeToError(err) {
    let log = (name) => {
        console.warn(`simple-git deprecation notice: accessing GitResponseError.${name} should be GitResponseError.git.${name}, this will no longer be available in version 3`);
        log = utils.NOOP;
    };
    return Object.create(err, Object.getOwnPropertyNames(err.git).reduce(descriptorReducer, {}));
    function descriptorReducer(all, name) {
        if (name in err) {
            return all;
        }
        all[name] = {
            enumerable: false,
            configurable: false,
            get() {
                log(name);
                return err.git[name];
            },
        };
        return all;
    }
}

});

var changeWorkingDirectory = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeWorkingDirectoryTask = void 0;


function changeWorkingDirectoryTask(directory, root) {
    return task.adhocExecTask((instance) => {
        if (!utils.folderExists(directory)) {
            throw new Error(`Git.cwd: cannot change to non-directory "${directory}"`);
        }
        return ((root || instance).cwd = directory);
    });
}
exports.changeWorkingDirectoryTask = changeWorkingDirectoryTask;

});

var hashObject = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashObjectTask = void 0;

/**
 * Task used by `git.hashObject`
 */
function hashObjectTask(filePath, write) {
    const commands = ['hash-object', filePath];
    if (write) {
        commands.push('-w');
    }
    return task.straightThroughStringTask(commands, true);
}
exports.hashObjectTask = hashObjectTask;

});

var InitSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInit = exports.InitSummary = void 0;
class InitSummary {
    constructor(bare, path, existing, gitDir) {
        this.bare = bare;
        this.path = path;
        this.existing = existing;
        this.gitDir = gitDir;
    }
}
exports.InitSummary = InitSummary;
const initResponseRegex = /^Init.+ repository in (.+)$/;
const reInitResponseRegex = /^Rein.+ in (.+)$/;
function parseInit(bare, path, text) {
    const response = String(text).trim();
    let result;
    if ((result = initResponseRegex.exec(response))) {
        return new InitSummary(bare, path, false, result[1]);
    }
    if ((result = reInitResponseRegex.exec(response))) {
        return new InitSummary(bare, path, true, result[1]);
    }
    let gitDir = '';
    const tokens = response.split(' ');
    while (tokens.length) {
        const token = tokens.shift();
        if (token === 'in') {
            gitDir = tokens.join(' ');
            break;
        }
    }
    return new InitSummary(bare, path, /^re/i.test(response), gitDir);
}
exports.parseInit = parseInit;

});

var init = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTask = void 0;

const bareCommand = '--bare';
function hasBareCommand(command) {
    return command.includes(bareCommand);
}
function initTask(bare = false, path, customArgs) {
    const commands = ['init', ...customArgs];
    if (bare && !hasBareCommand(commands)) {
        commands.splice(1, 0, bareCommand);
    }
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return InitSummary_1.parseInit(commands.includes('--bare'), path, text);
        }
    };
}
exports.initTask = initTask;

});

var MergeSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSummaryDetail = exports.MergeSummaryConflict = void 0;
class MergeSummaryConflict {
    constructor(reason, file = null, meta) {
        this.reason = reason;
        this.file = file;
        this.meta = meta;
    }
    toString() {
        return `${this.file}:${this.reason}`;
    }
}
exports.MergeSummaryConflict = MergeSummaryConflict;
class MergeSummaryDetail {
    constructor() {
        this.conflicts = [];
        this.merges = [];
        this.result = 'success';
    }
    get failed() {
        return this.conflicts.length > 0;
    }
    get reason() {
        return this.result;
    }
    toString() {
        if (this.conflicts.length) {
            return `CONFLICTS: ${this.conflicts.join(', ')}`;
        }
        return 'OK';
    }
}
exports.MergeSummaryDetail = MergeSummaryDetail;

});

var PullSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullSummary = void 0;
class PullSummary {
    constructor() {
        this.remoteMessages = {
            all: [],
        };
        this.created = [];
        this.deleted = [];
        this.files = [];
        this.deletions = {};
        this.insertions = {};
        this.summary = {
            changes: 0,
            deletions: 0,
            insertions: 0,
        };
    }
}
exports.PullSummary = PullSummary;

});

var parseRemoteObjects = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteMessagesObjectParsers = void 0;

function objectEnumerationResult(remoteMessages) {
    return (remoteMessages.objects = remoteMessages.objects || {
        compressing: 0,
        counting: 0,
        enumerating: 0,
        packReused: 0,
        reused: { count: 0, delta: 0 },
        total: { count: 0, delta: 0 }
    });
}
function asObjectCount(source) {
    const count = /^\s*(\d+)/.exec(source);
    const delta = /delta (\d+)/i.exec(source);
    return {
        count: utils.asNumber(count && count[1] || '0'),
        delta: utils.asNumber(delta && delta[1] || '0'),
    };
}
exports.remoteMessagesObjectParsers = [
    new utils.RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: (\d+),/i, (result, [action, count]) => {
        const key = action.toLowerCase();
        const enumeration = objectEnumerationResult(result.remoteMessages);
        Object.assign(enumeration, { [key]: utils.asNumber(count) });
    }),
    new utils.RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: \d+% \(\d+\/(\d+)\),/i, (result, [action, count]) => {
        const key = action.toLowerCase();
        const enumeration = objectEnumerationResult(result.remoteMessages);
        Object.assign(enumeration, { [key]: utils.asNumber(count) });
    }),
    new utils.RemoteLineParser(/total ([^,]+), reused ([^,]+), pack-reused (\d+)/i, (result, [total, reused, packReused]) => {
        const objects = objectEnumerationResult(result.remoteMessages);
        objects.total = asObjectCount(total);
        objects.reused = asObjectCount(reused);
        objects.packReused = utils.asNumber(packReused);
    }),
];

});

var parseRemoteMessages_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteMessageSummary = exports.parseRemoteMessages = void 0;


const parsers = [
    new utils.RemoteLineParser(/^remote:\s*(.+)$/, (result, [text]) => {
        result.remoteMessages.all.push(text.trim());
        return false;
    }),
    ...parseRemoteObjects.remoteMessagesObjectParsers,
    new utils.RemoteLineParser([/create a (?:pull|merge) request/i, /\s(https?:\/\/\S+)$/], (result, [pullRequestUrl]) => {
        result.remoteMessages.pullRequestUrl = pullRequestUrl;
    }),
    new utils.RemoteLineParser([/found (\d+) vulnerabilities.+\(([^)]+)\)/i, /\s(https?:\/\/\S+)$/], (result, [count, summary, url]) => {
        result.remoteMessages.vulnerabilities = {
            count: utils.asNumber(count),
            summary,
            url,
        };
    }),
];
function parseRemoteMessages(_stdOut, stdErr) {
    return utils.parseStringResponse({ remoteMessages: new RemoteMessageSummary() }, parsers, stdErr);
}
exports.parseRemoteMessages = parseRemoteMessages;
class RemoteMessageSummary {
    constructor() {
        this.all = [];
    }
}
exports.RemoteMessageSummary = RemoteMessageSummary;

});

var parsePull = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePullResult = exports.parsePullDetail = void 0;



const FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
const SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
const ACTION_REGEX = /^(create|delete) mode \d+ (.+)/;
const parsers = [
    new utils.LineParser(FILE_UPDATE_REGEX, (result, [file, insertions, deletions]) => {
        result.files.push(file);
        if (insertions) {
            result.insertions[file] = insertions.length;
        }
        if (deletions) {
            result.deletions[file] = deletions.length;
        }
    }),
    new utils.LineParser(SUMMARY_REGEX, (result, [changes, , insertions, , deletions]) => {
        if (insertions !== undefined || deletions !== undefined) {
            result.summary.changes = +changes || 0;
            result.summary.insertions = +insertions || 0;
            result.summary.deletions = +deletions || 0;
            return true;
        }
        return false;
    }),
    new utils.LineParser(ACTION_REGEX, (result, [action, file]) => {
        utils.append(result.files, file);
        utils.append((action === 'create') ? result.created : result.deleted, file);
    }),
];
const parsePullDetail = (stdOut, stdErr) => {
    return utils.parseStringResponse(new PullSummary_1.PullSummary(), parsers, stdOut, stdErr);
};
exports.parsePullDetail = parsePullDetail;
const parsePullResult = (stdOut, stdErr) => {
    return Object.assign(new PullSummary_1.PullSummary(), exports.parsePullDetail(stdOut, stdErr), parseRemoteMessages_1.parseRemoteMessages(stdOut, stdErr));
};
exports.parsePullResult = parsePullResult;

});

var parseMerge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMergeDetail = exports.parseMergeResult = void 0;



const parsers = [
    new utils.LineParser(/^Auto-merging\s+(.+)$/, (summary, [autoMerge]) => {
        summary.merges.push(autoMerge);
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/, (summary, [reason, file]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, file));
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/, (summary, [reason, file, deleteRef]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, file, { deleteRef }));
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+)\):/, (summary, [reason]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, null));
    }),
    new utils.LineParser(/^Automatic merge failed;\s+(.+)$/, (summary, [result]) => {
        summary.result = result;
    }),
];
/**
 * Parse the complete response from `git.merge`
 */
const parseMergeResult = (stdOut, stdErr) => {
    return Object.assign(exports.parseMergeDetail(stdOut, stdErr), parsePull.parsePullResult(stdOut, stdErr));
};
exports.parseMergeResult = parseMergeResult;
/**
 * Parse the merge specific detail (ie: not the content also available in the pull detail) from `git.mnerge`
 * @param stdOut
 */
const parseMergeDetail = (stdOut) => {
    return utils.parseStringResponse(new MergeSummary.MergeSummaryDetail(), parsers, stdOut);
};
exports.parseMergeDetail = parseMergeDetail;

});

var merge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTask = void 0;



function mergeTask(customArgs) {
    if (!customArgs.length) {
        return task.configurationErrorTask('Git.merge requires at least one option');
    }
    return {
        commands: ['merge', ...customArgs],
        format: 'utf-8',
        parser(stdOut, stdErr) {
            const merge = parseMerge.parseMergeResult(stdOut, stdErr);
            if (merge.failed) {
                throw new gitResponseError.GitResponseError(merge);
            }
            return merge;
        }
    };
}
exports.mergeTask = mergeTask;

});

var parsePush = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePushDetail = exports.parsePushResult = void 0;


function pushResultPushedItem(local, remote, status) {
    const deleted = status.includes('deleted');
    const tag = status.includes('tag') || /^refs\/tags/.test(local);
    const alreadyUpdated = !status.includes('new');
    return {
        deleted,
        tag,
        branch: !tag,
        new: !alreadyUpdated,
        alreadyUpdated,
        local,
        remote,
    };
}
const parsers = [
    new utils.LineParser(/^Pushing to (.+)$/, (result, [repo]) => {
        result.repo = repo;
    }),
    new utils.LineParser(/^updating local tracking ref '(.+)'/, (result, [local]) => {
        result.ref = Object.assign(Object.assign({}, (result.ref || {})), { local });
    }),
    new utils.LineParser(/^[*-=]\s+([^:]+):(\S+)\s+\[(.+)]$/, (result, [local, remote, type]) => {
        result.pushed.push(pushResultPushedItem(local, remote, type));
    }),
    new utils.LineParser(/^Branch '([^']+)' set up to track remote branch '([^']+)' from '([^']+)'/, (result, [local, remote, remoteName]) => {
        result.branch = Object.assign(Object.assign({}, (result.branch || {})), { local,
            remote,
            remoteName });
    }),
    new utils.LineParser(/^([^:]+):(\S+)\s+([a-z0-9]+)\.\.([a-z0-9]+)$/, (result, [local, remote, from, to]) => {
        result.update = {
            head: {
                local,
                remote,
            },
            hash: {
                from,
                to,
            },
        };
    }),
];
const parsePushResult = (stdOut, stdErr) => {
    const pushDetail = exports.parsePushDetail(stdOut, stdErr);
    const responseDetail = parseRemoteMessages_1.parseRemoteMessages(stdOut, stdErr);
    return Object.assign(Object.assign({}, pushDetail), responseDetail);
};
exports.parsePushResult = parsePushResult;
const parsePushDetail = (stdOut, stdErr) => {
    return utils.parseStringResponse({ pushed: [] }, parsers, stdOut, stdErr);
};
exports.parsePushDetail = parsePushDetail;

});

var push = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushTask = exports.pushTagsTask = void 0;


function pushTagsTask(ref = {}, customArgs) {
    utils.append(customArgs, '--tags');
    return pushTask(ref, customArgs);
}
exports.pushTagsTask = pushTagsTask;
function pushTask(ref = {}, customArgs) {
    const commands = ['push', ...customArgs];
    if (ref.branch) {
        commands.splice(1, 0, ref.branch);
    }
    if (ref.remote) {
        commands.splice(1, 0, ref.remote);
    }
    utils.remove(commands, '-v');
    utils.append(commands, '--verbose');
    utils.append(commands, '--porcelain');
    return {
        commands,
        format: 'utf-8',
        parser: parsePush.parsePushResult,
    };
}
exports.pushTask = pushTask;

});

var FileStatusSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStatusSummary = exports.fromPathRegex = void 0;
exports.fromPathRegex = /^(.+) -> (.+)$/;
class FileStatusSummary {
    constructor(path, index, working_dir) {
        this.path = path;
        this.index = index;
        this.working_dir = working_dir;
        if ('R' === (index + working_dir)) {
            const detail = exports.fromPathRegex.exec(path) || [null, path, path];
            this.from = detail[1] || '';
            this.path = detail[2] || '';
        }
    }
}
exports.FileStatusSummary = FileStatusSummary;

});

var StatusSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStatusSummary = exports.StatusSummary = void 0;


/**
 * The StatusSummary is returned as a response to getting `git().status()`
 */
class StatusSummary {
    constructor() {
        this.not_added = [];
        this.conflicted = [];
        this.created = [];
        this.deleted = [];
        this.modified = [];
        this.renamed = [];
        /**
         * All files represented as an array of objects containing the `path` and status in `index` and
         * in the `working_dir`.
         */
        this.files = [];
        this.staged = [];
        /**
         * Number of commits ahead of the tracked branch
         */
        this.ahead = 0;
        /**
         *Number of commits behind the tracked branch
         */
        this.behind = 0;
        /**
         * Name of the current branch
         */
        this.current = null;
        /**
         * Name of the branch being tracked
         */
        this.tracking = null;
    }
    /**
     * Gets whether this StatusSummary represents a clean working branch.
     */
    isClean() {
        return !this.files.length;
    }
}
exports.StatusSummary = StatusSummary;
var PorcelainFileStatus;
(function (PorcelainFileStatus) {
    PorcelainFileStatus["ADDED"] = "A";
    PorcelainFileStatus["DELETED"] = "D";
    PorcelainFileStatus["MODIFIED"] = "M";
    PorcelainFileStatus["RENAMED"] = "R";
    PorcelainFileStatus["COPIED"] = "C";
    PorcelainFileStatus["UNMERGED"] = "U";
    PorcelainFileStatus["UNTRACKED"] = "?";
    PorcelainFileStatus["IGNORED"] = "!";
    PorcelainFileStatus["NONE"] = " ";
})(PorcelainFileStatus || (PorcelainFileStatus = {}));
function renamedFile(line) {
    const detail = /^(.+) -> (.+)$/.exec(line);
    if (!detail) {
        return {
            from: line, to: line
        };
    }
    return {
        from: String(detail[1]),
        to: String(detail[2]),
    };
}
function parser(indexX, indexY, handler) {
    return [`${indexX}${indexY}`, handler];
}
function conflicts(indexX, ...indexY) {
    return indexY.map(y => parser(indexX, y, (result, file) => utils.append(result.conflicted, file)));
}
const parsers = new Map([
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.ADDED, (result, file) => utils.append(result.created, file)),
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.DELETED, (result, file) => utils.append(result.deleted, file)),
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.modified, file)),
    parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.created, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.created, file) && utils.append(result.staged, file) && utils.append(result.modified, file)),
    parser(PorcelainFileStatus.DELETED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.deleted, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.modified, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.modified, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.NONE, (result, file) => {
        utils.append(result.renamed, renamedFile(file));
    }),
    parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.MODIFIED, (result, file) => {
        const renamed = renamedFile(file);
        utils.append(result.renamed, renamed);
        utils.append(result.modified, renamed.to);
    }),
    parser(PorcelainFileStatus.UNTRACKED, PorcelainFileStatus.UNTRACKED, (result, file) => utils.append(result.not_added, file)),
    ...conflicts(PorcelainFileStatus.ADDED, PorcelainFileStatus.ADDED, PorcelainFileStatus.UNMERGED),
    ...conflicts(PorcelainFileStatus.DELETED, PorcelainFileStatus.DELETED, PorcelainFileStatus.UNMERGED),
    ...conflicts(PorcelainFileStatus.UNMERGED, PorcelainFileStatus.ADDED, PorcelainFileStatus.DELETED, PorcelainFileStatus.UNMERGED),
    ['##', (result, line) => {
            const aheadReg = /ahead (\d+)/;
            const behindReg = /behind (\d+)/;
            const currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
            const trackingReg = /\.{3}(\S*)/;
            const onEmptyBranchReg = /\son\s([\S]+)$/;
            let regexResult;
            regexResult = aheadReg.exec(line);
            result.ahead = regexResult && +regexResult[1] || 0;
            regexResult = behindReg.exec(line);
            result.behind = regexResult && +regexResult[1] || 0;
            regexResult = currentReg.exec(line);
            result.current = regexResult && regexResult[1];
            regexResult = trackingReg.exec(line);
            result.tracking = regexResult && regexResult[1];
            regexResult = onEmptyBranchReg.exec(line);
            result.current = regexResult && regexResult[1] || result.current;
        }]
]);
const parseStatusSummary = function (text) {
    const lines = text.trim().split('\n');
    const status = new StatusSummary();
    for (let i = 0, l = lines.length; i < l; i++) {
        splitLine(status, lines[i]);
    }
    return status;
};
exports.parseStatusSummary = parseStatusSummary;
function splitLine(result, lineStr) {
    const trimmed = lineStr.trim();
    switch (' ') {
        case trimmed.charAt(2):
            return data(trimmed.charAt(0), trimmed.charAt(1), trimmed.substr(3));
        case trimmed.charAt(1):
            return data(PorcelainFileStatus.NONE, trimmed.charAt(0), trimmed.substr(2));
        default:
            return;
    }
    function data(index, workingDir, path) {
        const raw = `${index}${workingDir}`;
        const handler = parsers.get(raw);
        if (handler) {
            handler(result, path);
        }
        if (raw !== '##') {
            result.files.push(new FileStatusSummary_1.FileStatusSummary(path, index, workingDir));
        }
    }
}

});

var status = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusTask = void 0;

function statusTask(customArgs) {
    return {
        format: 'utf-8',
        commands: ['status', '--porcelain', '-b', '-u', ...customArgs],
        parser(text) {
            return StatusSummary_1.parseStatusSummary(text);
        }
    };
}
exports.statusTask = statusTask;

});

var simpleGitApi = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleGitApi = void 0;










class SimpleGitApi {
    constructor(_executor) {
        this._executor = _executor;
    }
    _runTask(task, then) {
        const chain = this._executor.chain();
        const promise = chain.push(task);
        if (then) {
            taskCallback_1.taskCallback(task, promise, then);
        }
        return Object.create(this, {
            then: { value: promise.then.bind(promise) },
            catch: { value: promise.catch.bind(promise) },
            _executor: { value: chain },
        });
    }
    add(files) {
        return this._runTask(task.straightThroughStringTask(['add', ...utils.asArray(files)]), utils.trailingFunctionArgument(arguments));
    }
    cwd(directory) {
        const next = utils.trailingFunctionArgument(arguments);
        if (typeof directory === 'string') {
            return this._runTask(changeWorkingDirectory.changeWorkingDirectoryTask(directory, this._executor), next);
        }
        if (typeof (directory === null || directory === void 0 ? void 0 : directory.path) === 'string') {
            return this._runTask(changeWorkingDirectory.changeWorkingDirectoryTask(directory.path, directory.root && this._executor || undefined), next);
        }
        return this._runTask(task.configurationErrorTask('Git.cwd: workingDirectory must be supplied as a string'), next);
    }
    hashObject(path, write) {
        return this._runTask(hashObject.hashObjectTask(path, write === true), utils.trailingFunctionArgument(arguments));
    }
    init(bare) {
        return this._runTask(init.initTask(bare === true, this._executor.cwd, utils.getTrailingOptions(arguments)), utils.trailingFunctionArgument(arguments));
    }
    merge() {
        return this._runTask(merge.mergeTask(utils.getTrailingOptions(arguments)), utils.trailingFunctionArgument(arguments));
    }
    mergeFromTo(remote, branch) {
        if (!(utils.filterString(remote) && utils.filterString(branch))) {
            return this._runTask(task.configurationErrorTask(`Git.mergeFromTo requires that the 'remote' and 'branch' arguments are supplied as strings`));
        }
        return this._runTask(merge.mergeTask([remote, branch, ...utils.getTrailingOptions(arguments)]), utils.trailingFunctionArgument(arguments, false));
    }
    outputHandler(handler) {
        this._executor.outputHandler = handler;
        return this;
    }
    push() {
        const task = push.pushTask({
            remote: utils.filterType(arguments[0], utils.filterString),
            branch: utils.filterType(arguments[1], utils.filterString),
        }, utils.getTrailingOptions(arguments));
        return this._runTask(task, utils.trailingFunctionArgument(arguments));
    }
    stash() {
        return this._runTask(task.straightThroughStringTask(['stash', ...utils.getTrailingOptions(arguments)]), utils.trailingFunctionArgument(arguments));
    }
    status() {
        return this._runTask(status.statusTask(utils.getTrailingOptions(arguments)), utils.trailingFunctionArgument(arguments));
    }
}
exports.SimpleGitApi = SimpleGitApi;
Object.assign(SimpleGitApi.prototype, config.default());

});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeferred = exports.deferred = void 0;
/**
 * Creates a new `DeferredPromise`
 *
 * ```typescript
 import {deferred} from '@kwsites/promise-deferred`;
 ```
 */
function deferred() {
    let done;
    let fail;
    let status = 'pending';
    const promise = new Promise((_done, _fail) => {
        done = _done;
        fail = _fail;
    });
    return {
        promise,
        done(result) {
            if (status === 'pending') {
                status = 'resolved';
                done(result);
            }
        },
        fail(error) {
            if (status === 'pending') {
                status = 'rejected';
                fail(error);
            }
        },
        get fulfilled() {
            return status !== 'pending';
        },
        get status() {
            return status;
        },
    };
}
exports.deferred = deferred;
/**
 * Alias of the exported `deferred` function, to help consumers wanting to use `deferred` as the
 * local variable name rather than the factory import name, without needing to rename on import.
 *
 * ```typescript
 import {createDeferred} from '@kwsites/promise-deferred`;
 ```
 */
exports.createDeferred = deferred;
/**
 * Default export allows use as:
 *
 * ```typescript
 import deferred from '@kwsites/promise-deferred`;
 ```
 */
exports.default = deferred;

});

var scheduler = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;



const createScheduledTask = (() => {
    let id = 0;
    return () => {
        id++;
        const { promise, done } = dist.createDeferred();
        return {
            promise,
            done,
            id,
        };
    };
})();
class Scheduler {
    constructor(concurrency = 2) {
        this.concurrency = concurrency;
        this.logger = gitLogger.createLogger('', 'scheduler');
        this.pending = [];
        this.running = [];
        this.logger(`Constructed, concurrency=%s`, concurrency);
    }
    schedule() {
        if (!this.pending.length || this.running.length >= this.concurrency) {
            this.logger(`Schedule attempt ignored, pending=%s running=%s concurrency=%s`, this.pending.length, this.running.length, this.concurrency);
            return;
        }
        const task = utils.append(this.running, this.pending.shift());
        this.logger(`Attempting id=%s`, task.id);
        task.done(() => {
            this.logger(`Completing id=`, task.id);
            utils.remove(this.running, task);
            this.schedule();
        });
    }
    next() {
        const { promise, id } = utils.append(this.pending, createScheduledTask());
        this.logger(`Scheduling id=%s`, id);
        this.schedule();
        return promise;
    }
}
exports.Scheduler = Scheduler;

});

var applyPatch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPatchTask = void 0;

function applyPatchTask(patches, customArgs) {
    return task.straightThroughStringTask(['apply', ...customArgs, ...patches]);
}
exports.applyPatchTask = applyPatchTask;

});

var BranchDeleteSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSingleBranchDeleteFailure = exports.branchDeletionFailure = exports.branchDeletionSuccess = exports.BranchDeletionBatch = void 0;
class BranchDeletionBatch {
    constructor() {
        this.all = [];
        this.branches = {};
        this.errors = [];
    }
    get success() {
        return !this.errors.length;
    }
}
exports.BranchDeletionBatch = BranchDeletionBatch;
function branchDeletionSuccess(branch, hash) {
    return {
        branch, hash, success: true,
    };
}
exports.branchDeletionSuccess = branchDeletionSuccess;
function branchDeletionFailure(branch) {
    return {
        branch, hash: null, success: false,
    };
}
exports.branchDeletionFailure = branchDeletionFailure;
function isSingleBranchDeleteFailure(test) {
    return test.success;
}
exports.isSingleBranchDeleteFailure = isSingleBranchDeleteFailure;

});

var parseBranchDelete = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBranchDeletionError = exports.parseBranchDeletions = void 0;


const deleteSuccessRegex = /(\S+)\s+\(\S+\s([^)]+)\)/;
const deleteErrorRegex = /^error[^']+'([^']+)'/m;
const parsers = [
    new utils.LineParser(deleteSuccessRegex, (result, [branch, hash]) => {
        const deletion = BranchDeleteSummary.branchDeletionSuccess(branch, hash);
        result.all.push(deletion);
        result.branches[branch] = deletion;
    }),
    new utils.LineParser(deleteErrorRegex, (result, [branch]) => {
        const deletion = BranchDeleteSummary.branchDeletionFailure(branch);
        result.errors.push(deletion);
        result.all.push(deletion);
        result.branches[branch] = deletion;
    }),
];
const parseBranchDeletions = (stdOut, stdErr) => {
    return utils.parseStringResponse(new BranchDeleteSummary.BranchDeletionBatch(), parsers, stdOut, stdErr);
};
exports.parseBranchDeletions = parseBranchDeletions;
function hasBranchDeletionError(data, processExitCode) {
    return processExitCode === utils.ExitCodes.ERROR && deleteErrorRegex.test(data);
}
exports.hasBranchDeletionError = hasBranchDeletionError;

});

var BranchSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchSummaryResult = void 0;
class BranchSummaryResult {
    constructor() {
        this.all = [];
        this.branches = {};
        this.current = '';
        this.detached = false;
    }
    push(current, detached, name, commit, label) {
        if (current) {
            this.detached = detached;
            this.current = name;
        }
        this.all.push(name);
        this.branches[name] = {
            current: current,
            name: name,
            commit: commit,
            label: label
        };
    }
}
exports.BranchSummaryResult = BranchSummaryResult;

});

var parseBranch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBranchSummary = void 0;


const parsers = [
    new utils.LineParser(/^(\*\s)?\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/, (result, [current, name, commit, label]) => {
        result.push(!!current, true, name, commit, label);
    }),
    new utils.LineParser(/^(\*\s)?(\S+)\s+([a-z0-9]+)\s(.*)$/s, (result, [current, name, commit, label]) => {
        result.push(!!current, false, name, commit, label);
    })
];
function parseBranchSummary(stdOut) {
    return utils.parseStringResponse(new BranchSummary.BranchSummaryResult(), parsers, stdOut);
}
exports.parseBranchSummary = parseBranchSummary;

});

var branch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranchTask = exports.deleteBranchesTask = exports.branchLocalTask = exports.branchTask = exports.containsDeleteBranchCommand = void 0;




function containsDeleteBranchCommand(commands) {
    const deleteCommands = ['-d', '-D', '--delete'];
    return commands.some(command => deleteCommands.includes(command));
}
exports.containsDeleteBranchCommand = containsDeleteBranchCommand;
function branchTask(customArgs) {
    const isDelete = containsDeleteBranchCommand(customArgs);
    const commands = ['branch', ...customArgs];
    if (commands.length === 1) {
        commands.push('-a');
    }
    if (!commands.includes('-v')) {
        commands.splice(1, 0, '-v');
    }
    return {
        format: 'utf-8',
        commands,
        parser(stdOut, stdErr) {
            if (isDelete) {
                return parseBranchDelete.parseBranchDeletions(stdOut, stdErr).all[0];
            }
            return parseBranch.parseBranchSummary(stdOut);
        },
    };
}
exports.branchTask = branchTask;
function branchLocalTask() {
    const parser = parseBranch.parseBranchSummary;
    return {
        format: 'utf-8',
        commands: ['branch', '-v'],
        parser,
    };
}
exports.branchLocalTask = branchLocalTask;
function deleteBranchesTask(branches, forceDelete = false) {
    return {
        format: 'utf-8',
        commands: ['branch', '-v', forceDelete ? '-D' : '-d', ...branches],
        parser(stdOut, stdErr) {
            return parseBranchDelete.parseBranchDeletions(stdOut, stdErr);
        },
        onError({ exitCode, stdOut }, error, done, fail) {
            if (!parseBranchDelete.hasBranchDeletionError(String(error), exitCode)) {
                return fail(error);
            }
            done(stdOut);
        },
    };
}
exports.deleteBranchesTask = deleteBranchesTask;
function deleteBranchTask(branch, forceDelete = false) {
    const task = {
        format: 'utf-8',
        commands: ['branch', '-v', forceDelete ? '-D' : '-d', branch],
        parser(stdOut, stdErr) {
            return parseBranchDelete.parseBranchDeletions(stdOut, stdErr).branches[branch];
        },
        onError({ exitCode, stdErr, stdOut }, error, _, fail) {
            if (!parseBranchDelete.hasBranchDeletionError(String(error), exitCode)) {
                return fail(error);
            }
            throw new gitResponseError.GitResponseError(task.parser(utils.bufferToString(stdOut), utils.bufferToString(stdErr)), String(error));
        },
    };
    return task;
}
exports.deleteBranchTask = deleteBranchTask;

});

var CheckIgnore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCheckIgnore = void 0;
/**
 * Parser for the `check-ignore` command - returns each file as a string array
 */
const parseCheckIgnore = (text) => {
    return text.split(/\n/g)
        .map(line => line.trim())
        .filter(file => !!file);
};
exports.parseCheckIgnore = parseCheckIgnore;

});

var checkIgnore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIgnoreTask = void 0;

function checkIgnoreTask(paths) {
    return {
        commands: ['check-ignore', ...paths],
        format: 'utf-8',
        parser: CheckIgnore.parseCheckIgnore,
    };
}
exports.checkIgnoreTask = checkIgnoreTask;

});

var clone = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneMirrorTask = exports.cloneTask = void 0;


function cloneTask(repo, directory, customArgs) {
    const commands = ['clone', ...customArgs];
    if (typeof repo === 'string') {
        commands.push(repo);
    }
    if (typeof directory === 'string') {
        commands.push(directory);
    }
    return task.straightThroughStringTask(commands);
}
exports.cloneTask = cloneTask;
function cloneMirrorTask(repo, directory, customArgs) {
    utils.append(customArgs, '--mirror');
    return cloneTask(repo, directory, customArgs);
}
exports.cloneMirrorTask = cloneMirrorTask;

});

var parseCommit = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommitResult = void 0;

const parsers = [
    new utils.LineParser(/^\[([^\s]+)( \([^)]+\))? ([^\]]+)/, (result, [branch, root, commit]) => {
        result.branch = branch;
        result.commit = commit;
        result.root = !!root;
    }),
    new utils.LineParser(/\s*Author:\s(.+)/i, (result, [author]) => {
        const parts = author.split('<');
        const email = parts.pop();
        if (!email || !email.includes('@')) {
            return;
        }
        result.author = {
            email: email.substr(0, email.length - 1),
            name: parts.join('<').trim()
        };
    }),
    new utils.LineParser(/(\d+)[^,]*(?:,\s*(\d+)[^,]*)(?:,\s*(\d+))/g, (result, [changes, insertions, deletions]) => {
        result.summary.changes = parseInt(changes, 10) || 0;
        result.summary.insertions = parseInt(insertions, 10) || 0;
        result.summary.deletions = parseInt(deletions, 10) || 0;
    }),
    new utils.LineParser(/^(\d+)[^,]*(?:,\s*(\d+)[^(]+\(([+-]))?/, (result, [changes, lines, direction]) => {
        result.summary.changes = parseInt(changes, 10) || 0;
        const count = parseInt(lines, 10) || 0;
        if (direction === '-') {
            result.summary.deletions = count;
        }
        else if (direction === '+') {
            result.summary.insertions = count;
        }
    }),
];
function parseCommitResult(stdOut) {
    const result = {
        author: null,
        branch: '',
        commit: '',
        root: false,
        summary: {
            changes: 0,
            insertions: 0,
            deletions: 0,
        },
    };
    return utils.parseStringResponse(result, parsers, stdOut);
}
exports.parseCommitResult = parseCommitResult;

});

var commit = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitTask = void 0;

function commitTask(message, files, customArgs) {
    const commands = ['commit'];
    message.forEach((m) => commands.push('-m', m));
    commands.push(...files, ...customArgs);
    return {
        commands,
        format: 'utf-8',
        parser: parseCommit.parseCommitResult,
    };
}
exports.commitTask = commitTask;

});

var DiffSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffSummary = void 0;
/***
 * The DiffSummary is returned as a response to getting `git().status()`
 */
class DiffSummary {
    constructor() {
        this.changed = 0;
        this.deletions = 0;
        this.insertions = 0;
        this.files = [];
    }
}
exports.DiffSummary = DiffSummary;

});

var parseDiffSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDiffResult = void 0;

function parseDiffResult(stdOut) {
    const lines = stdOut.trim().split('\n');
    const status = new DiffSummary_1.DiffSummary();
    readSummaryLine(status, lines.pop());
    for (let i = 0, max = lines.length; i < max; i++) {
        const line = lines[i];
        textFileChange(line, status) || binaryFileChange(line, status);
    }
    return status;
}
exports.parseDiffResult = parseDiffResult;
function readSummaryLine(status, summary) {
    (summary || '')
        .trim()
        .split(', ')
        .forEach(function (text) {
        const summary = /(\d+)\s([a-z]+)/.exec(text);
        if (!summary) {
            return;
        }
        summaryType(status, summary[2], parseInt(summary[1], 10));
    });
}
function summaryType(status, key, value) {
    const match = (/([a-z]+?)s?\b/.exec(key));
    if (!match || !statusUpdate[match[1]]) {
        return;
    }
    statusUpdate[match[1]](status, value);
}
const statusUpdate = {
    file(status, value) {
        status.changed = value;
    },
    deletion(status, value) {
        status.deletions = value;
    },
    insertion(status, value) {
        status.insertions = value;
    }
};
function textFileChange(input, { files }) {
    const line = input.trim().match(/^(.+)\s+\|\s+(\d+)(\s+[+\-]+)?$/);
    if (line) {
        var alterations = (line[3] || '').trim();
        files.push({
            file: line[1].trim(),
            changes: parseInt(line[2], 10),
            insertions: alterations.replace(/-/g, '').length,
            deletions: alterations.replace(/\+/g, '').length,
            binary: false
        });
        return true;
    }
    return false;
}
function binaryFileChange(input, { files }) {
    const line = input.match(/^(.+) \|\s+Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)$/);
    if (line) {
        files.push({
            file: line[1].trim(),
            before: +line[2],
            after: +line[3],
            binary: true
        });
        return true;
    }
    return false;
}

});

var diff = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffSummaryTask = void 0;

function diffSummaryTask(customArgs) {
    return {
        commands: ['diff', '--stat=4096', ...customArgs],
        format: 'utf-8',
        parser(stdOut) {
            return parseDiffSummary.parseDiffResult(stdOut);
        }
    };
}
exports.diffSummaryTask = diffSummaryTask;

});

var parseFetch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFetchResult = void 0;

const parsers = [
    new utils.LineParser(/From (.+)$/, (result, [remote]) => {
        result.remote = remote;
    }),
    new utils.LineParser(/\* \[new branch]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
        result.branches.push({
            name,
            tracking,
        });
    }),
    new utils.LineParser(/\* \[new tag]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
        result.tags.push({
            name,
            tracking,
        });
    })
];
function parseFetchResult(stdOut, stdErr) {
    const result = {
        raw: stdOut,
        remote: null,
        branches: [],
        tags: [],
    };
    return utils.parseStringResponse(result, parsers, stdOut, stdErr);
}
exports.parseFetchResult = parseFetchResult;

});

var fetch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTask = void 0;

function fetchTask(remote, branch, customArgs) {
    const commands = ['fetch', ...customArgs];
    if (remote && branch) {
        commands.push(remote, branch);
    }
    return {
        commands,
        format: 'utf-8',
        parser: parseFetch.parseFetchResult,
    };
}
exports.fetchTask = fetchTask;

});

var parseListLogSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListLogSummaryParser = exports.SPLITTER = exports.COMMIT_BOUNDARY = exports.START_BOUNDARY = void 0;


exports.START_BOUNDARY = 'òòòòòò ';
exports.COMMIT_BOUNDARY = ' òò';
exports.SPLITTER = ' ò ';
const defaultFieldNames = ['hash', 'date', 'message', 'refs', 'author_name', 'author_email'];
function lineBuilder(tokens, fields) {
    return fields.reduce((line, field, index) => {
        line[field] = tokens[index] || '';
        return line;
    }, Object.create({ diff: null }));
}
function createListLogSummaryParser(splitter = exports.SPLITTER, fields = defaultFieldNames) {
    return function (stdOut) {
        const all = utils.toLinesWithContent(stdOut, true, exports.START_BOUNDARY)
            .map(function (item) {
            const lineDetail = item.trim().split(exports.COMMIT_BOUNDARY);
            const listLogLine = lineBuilder(lineDetail[0].trim().split(splitter), fields);
            if (lineDetail.length > 1 && !!lineDetail[1].trim()) {
                listLogLine.diff = parseDiffSummary.parseDiffResult(lineDetail[1]);
            }
            return listLogLine;
        });
        return {
            all,
            latest: all.length && all[0] || null,
            total: all.length,
        };
    };
}
exports.createListLogSummaryParser = createListLogSummaryParser;

});

var log = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTask = exports.parseLogOptions = void 0;


var excludeOptions;
(function (excludeOptions) {
    excludeOptions[excludeOptions["--pretty"] = 0] = "--pretty";
    excludeOptions[excludeOptions["max-count"] = 1] = "max-count";
    excludeOptions[excludeOptions["maxCount"] = 2] = "maxCount";
    excludeOptions[excludeOptions["n"] = 3] = "n";
    excludeOptions[excludeOptions["file"] = 4] = "file";
    excludeOptions[excludeOptions["format"] = 5] = "format";
    excludeOptions[excludeOptions["from"] = 6] = "from";
    excludeOptions[excludeOptions["to"] = 7] = "to";
    excludeOptions[excludeOptions["splitter"] = 8] = "splitter";
    excludeOptions[excludeOptions["symmetric"] = 9] = "symmetric";
    excludeOptions[excludeOptions["multiLine"] = 10] = "multiLine";
    excludeOptions[excludeOptions["strictDate"] = 11] = "strictDate";
})(excludeOptions || (excludeOptions = {}));
function prettyFormat(format, splitter) {
    const fields = [];
    const formatStr = [];
    Object.keys(format).forEach((field) => {
        fields.push(field);
        formatStr.push(String(format[field]));
    });
    return [
        fields, formatStr.join(splitter)
    ];
}
function userOptions(input) {
    const output = Object.assign({}, input);
    Object.keys(input).forEach(key => {
        if (key in excludeOptions) {
            delete output[key];
        }
    });
    return output;
}
function parseLogOptions(opt = {}, customArgs = []) {
    const splitter = opt.splitter || parseListLogSummary.SPLITTER;
    const format = opt.format || {
        hash: '%H',
        date: opt.strictDate === false ? '%ai' : '%aI',
        message: '%s',
        refs: '%D',
        body: opt.multiLine ? '%B' : '%b',
        author_name: '%aN',
        author_email: '%ae'
    };
    const [fields, formatStr] = prettyFormat(format, splitter);
    const suffix = [];
    const command = [
        `--pretty=format:${parseListLogSummary.START_BOUNDARY}${formatStr}${parseListLogSummary.COMMIT_BOUNDARY}`,
        ...customArgs,
    ];
    const maxCount = opt.n || opt['max-count'] || opt.maxCount;
    if (maxCount) {
        command.push(`--max-count=${maxCount}`);
    }
    if (opt.from && opt.to) {
        const rangeOperator = (opt.symmetric !== false) ? '...' : '..';
        suffix.push(`${opt.from}${rangeOperator}${opt.to}`);
    }
    if (opt.file) {
        suffix.push('--follow', opt.file);
    }
    utils.appendTaskOptions(userOptions(opt), command);
    return {
        fields,
        splitter,
        commands: [
            ...command,
            ...suffix,
        ],
    };
}
exports.parseLogOptions = parseLogOptions;
function logTask(splitter, fields, customArgs) {
    return {
        commands: ['log', ...customArgs],
        format: 'utf-8',
        parser: parseListLogSummary.createListLogSummaryParser(splitter, fields),
    };
}
exports.logTask = logTask;

});

var parseMove = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMoveResult = void 0;

const parsers = [
    new utils.LineParser(/^Renaming (.+) to (.+)$/, (result, [from, to]) => {
        result.moves.push({ from, to });
    }),
];
function parseMoveResult(stdOut) {
    return utils.parseStringResponse({ moves: [] }, parsers, stdOut);
}
exports.parseMoveResult = parseMoveResult;

});

var move = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveTask = void 0;


function moveTask(from, to) {
    return {
        commands: ['mv', '-v', ...utils.asArray(from), to],
        format: 'utf-8',
        parser: parseMove.parseMoveResult,
    };
}
exports.moveTask = moveTask;

});

var pull = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullTask = void 0;

function pullTask(remote, branch, customArgs) {
    const commands = ['pull', ...customArgs];
    if (remote && branch) {
        commands.splice(1, 0, remote, branch);
    }
    return {
        commands,
        format: 'utf-8',
        parser(stdOut, stdErr) {
            return parsePull.parsePullResult(stdOut, stdErr);
        }
    };
}
exports.pullTask = pullTask;

});

var GetRemoteSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGetRemotesVerbose = exports.parseGetRemotes = void 0;

function parseGetRemotes(text) {
    const remotes = {};
    forEach(text, ([name]) => remotes[name] = { name });
    return Object.values(remotes);
}
exports.parseGetRemotes = parseGetRemotes;
function parseGetRemotesVerbose(text) {
    const remotes = {};
    forEach(text, ([name, url, purpose]) => {
        if (!remotes.hasOwnProperty(name)) {
            remotes[name] = {
                name: name,
                refs: { fetch: '', push: '' },
            };
        }
        if (purpose && url) {
            remotes[name].refs[purpose.replace(/[^a-z]/g, '')] = url;
        }
    });
    return Object.values(remotes);
}
exports.parseGetRemotesVerbose = parseGetRemotesVerbose;
function forEach(text, handler) {
    utils.forEachLineWithContent(text, (line) => handler(line.split(/\s+/)));
}

});

var remote = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRemoteTask = exports.remoteTask = exports.listRemotesTask = exports.getRemotesTask = exports.addRemoteTask = void 0;


function addRemoteTask(remoteName, remoteRepo, customArgs = []) {
    return task.straightThroughStringTask(['remote', 'add', ...customArgs, remoteName, remoteRepo]);
}
exports.addRemoteTask = addRemoteTask;
function getRemotesTask(verbose) {
    const commands = ['remote'];
    if (verbose) {
        commands.push('-v');
    }
    return {
        commands,
        format: 'utf-8',
        parser: verbose ? GetRemoteSummary.parseGetRemotesVerbose : GetRemoteSummary.parseGetRemotes,
    };
}
exports.getRemotesTask = getRemotesTask;
function listRemotesTask(customArgs = []) {
    const commands = [...customArgs];
    if (commands[0] !== 'ls-remote') {
        commands.unshift('ls-remote');
    }
    return task.straightThroughStringTask(commands);
}
exports.listRemotesTask = listRemotesTask;
function remoteTask(customArgs = []) {
    const commands = [...customArgs];
    if (commands[0] !== 'remote') {
        commands.unshift('remote');
    }
    return task.straightThroughStringTask(commands);
}
exports.remoteTask = remoteTask;
function removeRemoteTask(remoteName) {
    return task.straightThroughStringTask(['remote', 'remove', remoteName]);
}
exports.removeRemoteTask = removeRemoteTask;

});

var stashList = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.stashListTask = void 0;


function stashListTask(opt = {}, customArgs) {
    const options = log.parseLogOptions(opt);
    const parser = parseListLogSummary.createListLogSummaryParser(options.splitter, options.fields);
    return {
        commands: ['stash', 'list', ...options.commands, ...customArgs],
        format: 'utf-8',
        parser,
    };
}
exports.stashListTask = stashListTask;

});

var subModule = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubModuleTask = exports.subModuleTask = exports.initSubModuleTask = exports.addSubModuleTask = void 0;

function addSubModuleTask(repo, path) {
    return subModuleTask(['add', repo, path]);
}
exports.addSubModuleTask = addSubModuleTask;
function initSubModuleTask(customArgs) {
    return subModuleTask(['init', ...customArgs]);
}
exports.initSubModuleTask = initSubModuleTask;
function subModuleTask(customArgs) {
    const commands = [...customArgs];
    if (commands[0] !== 'submodule') {
        commands.unshift('submodule');
    }
    return task.straightThroughStringTask(commands);
}
exports.subModuleTask = subModuleTask;
function updateSubModuleTask(customArgs) {
    return subModuleTask(['update', ...customArgs]);
}
exports.updateSubModuleTask = updateSubModuleTask;

});

var TagList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTagList = exports.TagList = void 0;
class TagList {
    constructor(all, latest) {
        this.all = all;
        this.latest = latest;
    }
}
exports.TagList = TagList;
const parseTagList = function (data, customSort = false) {
    const tags = data
        .split('\n')
        .map(trimmed)
        .filter(Boolean);
    if (!customSort) {
        tags.sort(function (tagA, tagB) {
            const partsA = tagA.split('.');
            const partsB = tagB.split('.');
            if (partsA.length === 1 || partsB.length === 1) {
                return singleSorted(toNumber(partsA[0]), toNumber(partsB[0]));
            }
            for (let i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
                const diff = sorted(toNumber(partsA[i]), toNumber(partsB[i]));
                if (diff) {
                    return diff;
                }
            }
            return 0;
        });
    }
    const latest = customSort ? tags[0] : [...tags].reverse().find((tag) => tag.indexOf('.') >= 0);
    return new TagList(tags, latest);
};
exports.parseTagList = parseTagList;
function singleSorted(a, b) {
    const aIsNum = isNaN(a);
    const bIsNum = isNaN(b);
    if (aIsNum !== bIsNum) {
        return aIsNum ? 1 : -1;
    }
    return aIsNum ? sorted(a, b) : 0;
}
function sorted(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function trimmed(input) {
    return input.trim();
}
function toNumber(input) {
    if (typeof input === 'string') {
        return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
    }
    return 0;
}

});

var tag = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAnnotatedTagTask = exports.addTagTask = exports.tagListTask = void 0;

/**
 * Task used by `git.tags`
 */
function tagListTask(customArgs = []) {
    const hasCustomSort = customArgs.some((option) => /^--sort=/.test(option));
    return {
        format: 'utf-8',
        commands: ['tag', '-l', ...customArgs],
        parser(text) {
            return TagList_1.parseTagList(text, hasCustomSort);
        },
    };
}
exports.tagListTask = tagListTask;
/**
 * Task used by `git.addTag`
 */
function addTagTask(name) {
    return {
        format: 'utf-8',
        commands: ['tag', name],
        parser() {
            return { name };
        }
    };
}
exports.addTagTask = addTagTask;
/**
 * Task used by `git.addTag`
 */
function addAnnotatedTagTask(name, tagMessage) {
    return {
        format: 'utf-8',
        commands: ['tag', '-a', '-m', tagMessage, name],
        parser() {
            return { name };
        }
    };
}
exports.addAnnotatedTagTask = addAnnotatedTagTask;

});

const {GitExecutor} = gitExecutor;
const {SimpleGitApi} = simpleGitApi;

const {Scheduler} = scheduler;
const {GitLogger} = gitLogger;
const {configurationErrorTask} = task;
const {
   asArray,
   filterArray,
   filterPrimitives,
   filterString,
   filterStringOrStringArray,
   filterType,
   getTrailingOptions,
   trailingFunctionArgument,
   trailingOptionsArgument
} = utils;
const {applyPatchTask} = applyPatch;
const {branchTask, branchLocalTask, deleteBranchesTask, deleteBranchTask} = branch;
const {checkIgnoreTask} = checkIgnore;
const {checkIsRepoTask} = checkIsRepo;
const {cloneTask, cloneMirrorTask} = clone;
const {cleanWithOptionsTask, isCleanOptionsArray} = clean;
const {commitTask} = commit;
const {diffSummaryTask} = diff;
const {fetchTask} = fetch;
const {logTask, parseLogOptions} = log;
const {moveTask} = move;
const {pullTask} = pull;
const {pushTagsTask} = push;
const {addRemoteTask, getRemotesTask, listRemotesTask, remoteTask, removeRemoteTask} = remote;
const {getResetMode, resetTask} = reset;
const {stashListTask} = stashList;
const {addSubModuleTask, initSubModuleTask, subModuleTask, updateSubModuleTask} = subModule;
const {addAnnotatedTagTask, addTagTask, tagListTask} = tag;
const {straightThroughBufferTask, straightThroughStringTask} = task;

function Git (options, plugins) {
   this._executor = new GitExecutor(
      options.binary, options.baseDir,
      new Scheduler(options.maxConcurrentProcesses), plugins,
   );
   this._logger = new GitLogger();
}

(Git.prototype = Object.create(SimpleGitApi.prototype)).constructor = Git;

/**
 * Logging utility for printing out info or error messages to the user
 * @type {GitLogger}
 * @private
 */
Git.prototype._logger = null;

/**
 * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
 * the system path, or a fully qualified path to the executable.
 *
 * @param {string} command
 * @returns {Git}
 */
Git.prototype.customBinary = function (command) {
   this._executor.binary = command;
   return this;
};

/**
 * Sets an environment variable for the spawned child process, either supply both a name and value as strings or
 * a single object to entirely replace the current environment variables.
 *
 * @param {string|Object} name
 * @param {string} [value]
 * @returns {Git}
 */
Git.prototype.env = function (name, value) {
   if (arguments.length === 1 && typeof name === 'object') {
      this._executor.env = name;
   } else {
      (this._executor.env = this._executor.env || {})[name] = value;
   }

   return this;
};

/**
 * List the stash(s) of the local repo
 */
Git.prototype.stashList = function (options) {
   return this._runTask(
      stashListTask(
         trailingOptionsArgument(arguments) || {},
         filterArray(options) && options || []
      ),
      trailingFunctionArgument(arguments),
   );
};

function createCloneTask (api, task, repoPath, localPath) {
   if (typeof repoPath !== 'string') {
      return configurationErrorTask(`git.${ api }() requires a string 'repoPath'`);
   }

   return task(repoPath, filterType(localPath, filterString), getTrailingOptions(arguments));
}


/**
 * Clone a git repo
 */
Git.prototype.clone = function () {
   return this._runTask(
      createCloneTask('clone', cloneTask, ...arguments),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Mirror a git repo
 */
Git.prototype.mirror = function () {
   return this._runTask(
      createCloneTask('mirror', cloneMirrorTask, ...arguments),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Moves one or more files to a new destination.
 *
 * @see https://git-scm.com/docs/git-mv
 *
 * @param {string|string[]} from
 * @param {string} to
 */
Git.prototype.mv = function (from, to) {
   return this._runTask(moveTask(from, to), trailingFunctionArgument(arguments));
};

/**
 * Internally uses pull and tags to get the list of tags then checks out the latest tag.
 *
 * @param {Function} [then]
 */
Git.prototype.checkoutLatestTag = function (then) {
   var git = this;
   return this.pull(function () {
      git.tags(function (err, tags) {
         git.checkout(tags.latest, then);
      });
   });
};

/**
 * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
 * files will be committed.
 *
 * @param {string|string[]} message
 * @param {string|string[]} [files]
 * @param {Object} [options]
 * @param {Function} [then]
 */
Git.prototype.commit = function (message, files, options, then) {
   const next = trailingFunctionArgument(arguments);
   const messages = [];

   if (filterStringOrStringArray(message)) {
      messages.push(...asArray(message));
   } else {
      console.warn('simple-git deprecation notice: git.commit: requires the commit message to be supplied as a string/string[], this will be an error in version 3');
   }

   return this._runTask(
      commitTask(
         messages,
         asArray(filterType(files, filterStringOrStringArray, [])),
         [...filterType(options, filterArray, []), ...getTrailingOptions(arguments, 0, true)]
      ),
      next
   );
};

/**
 * Pull the updated contents of the current repo
 */
Git.prototype.pull = function (remote, branch, options, then) {
   return this._runTask(
      pullTask(filterType(remote, filterString), filterType(branch, filterString), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Fetch the updated contents of the current repo.
 *
 * @example
 *   .fetch('upstream', 'master') // fetches from master on remote named upstream
 *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
 *
 * @param {string} [remote]
 * @param {string} [branch]
 */
Git.prototype.fetch = function (remote, branch) {
   return this._runTask(
      fetchTask(filterType(remote, filterString), filterType(branch, filterString), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
 * a production environment.
 *
 * @param {boolean} silence
 * @returns {Git}
 */
Git.prototype.silent = function (silence) {
   console.warn('simple-git deprecation notice: git.silent: logging should be configured using the `debug` library / `DEBUG` environment variable, this will be an error in version 3');
   this._logger.silent(!!silence);
   return this;
};

/**
 * List all tags. When using git 2.7.0 or above, include an options object with `"--sort": "property-name"` to
 * sort the tags by that property instead of using the default semantic versioning sort.
 *
 * Note, supplying this option when it is not supported by your Git version will cause the operation to fail.
 *
 * @param {Object} [options]
 * @param {Function} [then]
 */
Git.prototype.tags = function (options, then) {
   return this._runTask(
      tagListTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Rebases the current working copy. Options can be supplied either as an array of string parameters
 * to be sent to the `git rebase` command, or a standard options object.
 */
Git.prototype.rebase = function () {
   return this._runTask(
      straightThroughStringTask(['rebase', ...getTrailingOptions(arguments)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Reset a repo
 */
Git.prototype.reset = function (mode) {
   return this._runTask(
      resetTask(getResetMode(mode), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Revert one or more commits in the local working copy
 */
Git.prototype.revert = function (commit) {
   const next = trailingFunctionArgument(arguments);

   if (typeof commit !== 'string') {
      return this._runTask(
         configurationErrorTask('Commit must be a string'),
         next,
      );
   }

   return this._runTask(
      straightThroughStringTask(['revert', ...getTrailingOptions(arguments, 0, true), commit]),
      next
   );
};

/**
 * Add a lightweight tag to the head of the current branch
 */
Git.prototype.addTag = function (name) {
   const task = (typeof name === 'string')
      ? addTagTask(name)
      : configurationErrorTask('Git.addTag requires a tag name');

   return this._runTask(task, trailingFunctionArgument(arguments));
};

/**
 * Add an annotated tag to the head of the current branch
 */
Git.prototype.addAnnotatedTag = function (tagName, tagMessage) {
   return this._runTask(
      addAnnotatedTagTask(tagName, tagMessage),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
 * by supplying either a string or array of strings as the first argument.
 */
Git.prototype.checkout = function () {
   const commands = ['checkout', ...getTrailingOptions(arguments, true)];
   return this._runTask(
      straightThroughStringTask(commands),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check out a remote branch
 *
 * @param {string} branchName name of branch
 * @param {string} startPoint (e.g origin/development)
 * @param {Function} [then]
 */
Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
   return this.checkout(['-b', branchName, startPoint], trailingFunctionArgument(arguments));
};

/**
 * Check out a local branch
 */
Git.prototype.checkoutLocalBranch = function (branchName, then) {
   return this.checkout(['-b', branchName], trailingFunctionArgument(arguments));
};

/**
 * Delete a local branch
 */
Git.prototype.deleteLocalBranch = function (branchName, forceDelete, then) {
   return this._runTask(
      deleteBranchTask(branchName, typeof forceDelete === "boolean" ? forceDelete : false),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Delete one or more local branches
 */
Git.prototype.deleteLocalBranches = function (branchNames, forceDelete, then) {
   return this._runTask(
      deleteBranchesTask(branchNames, typeof forceDelete === "boolean" ? forceDelete : false),
      trailingFunctionArgument(arguments),
   );
};

/**
 * List all branches
 *
 * @param {Object | string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.branch = function (options, then) {
   return this._runTask(
      branchTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Return list of local branches
 *
 * @param {Function} [then]
 */
Git.prototype.branchLocal = function (then) {
   return this._runTask(
      branchLocalTask(),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Executes any command against the git binary.
 */
Git.prototype.raw = function (commands) {
   const createRestCommands = !Array.isArray(commands);
   const command = [].slice.call(createRestCommands ? arguments : commands, 0);

   for (let i = 0; i < command.length && createRestCommands; i++) {
      if (!filterPrimitives(command[i])) {
         command.splice(i, command.length - i);
         break;
      }
   }

   command.push(
      ...getTrailingOptions(arguments, 0, true),
   );

   var next = trailingFunctionArgument(arguments);

   if (!command.length) {
      return this._runTask(
         configurationErrorTask('Raw: must supply one or more command to execute'),
         next,
      );
   }

   return this._runTask(straightThroughStringTask(command), next);
};

Git.prototype.submoduleAdd = function (repo, path, then) {
   return this._runTask(
      addSubModuleTask(repo, path),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.submoduleUpdate = function (args, then) {
   return this._runTask(
      updateSubModuleTask(getTrailingOptions(arguments, true)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.submoduleInit = function (args, then) {
   return this._runTask(
      initSubModuleTask(getTrailingOptions(arguments, true)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.subModule = function (options, then) {
   return this._runTask(
      subModuleTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.listRemote = function () {
   return this._runTask(
      listRemotesTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Adds a remote to the list of remotes.
 */
Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
   return this._runTask(
      addRemoteTask(remoteName, remoteRepo, getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Removes an entry by name from the list of remotes.
 */
Git.prototype.removeRemote = function (remoteName, then) {
   return this._runTask(
      removeRemoteTask(remoteName),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Gets the currently available remotes, setting the optional verbose argument to true includes additional
 * detail on the remotes themselves.
 */
Git.prototype.getRemotes = function (verbose, then) {
   return this._runTask(
      getRemotesTask(verbose === true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call any `git remote` function with arguments passed as an array of strings.
 *
 * @param {string[]} options
 * @param {Function} [then]
 */
Git.prototype.remote = function (options, then) {
   return this._runTask(
      remoteTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call any `git tag` function with arguments passed as an array of strings.
 *
 * @param {string[]} options
 * @param {Function} [then]
 */
Git.prototype.tag = function (options, then) {
   const command = getTrailingOptions(arguments);

   if (command[0] !== 'tag') {
      command.unshift('tag');
   }

   return this._runTask(
      straightThroughStringTask(command),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Updates repository server info
 *
 * @param {Function} [then]
 */
Git.prototype.updateServerInfo = function (then) {
   return this._runTask(
      straightThroughStringTask(['update-server-info']),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
 * default configured remote spec.
 *
 * @param {string} [remote]
 * @param {Function} [then]
 */
Git.prototype.pushTags = function (remote, then) {
   const task = pushTagsTask({remote: filterType(remote, filterString)}, getTrailingOptions(arguments));

   return this._runTask(task, trailingFunctionArgument(arguments));
};

/**
 * Removes the named files from source control.
 */
Git.prototype.rm = function (files) {
   return this._runTask(
      straightThroughStringTask(['rm', '-f', ...asArray(files)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
 * completely remove the files, use `rm`.
 *
 * @param {string|string[]} files
 */
Git.prototype.rmKeepLocal = function (files) {
   return this._runTask(
      straightThroughStringTask(['rm', '--cached', ...asArray(files)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
 * size, and type.
 *
 * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
 *
 * @param {string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.catFile = function (options, then) {
   return this._catFile('utf-8', arguments);
};

Git.prototype.binaryCatFile = function () {
   return this._catFile('buffer', arguments);
};

Git.prototype._catFile = function (format, args) {
   var handler = trailingFunctionArgument(args);
   var command = ['cat-file'];
   var options = args[0];

   if (typeof options === 'string') {
      return this._runTask(
         configurationErrorTask('Git.catFile: options must be supplied as an array of strings'),
         handler,
      );
   }

   if (Array.isArray(options)) {
      command.push.apply(command, options);
   }

   const task = format === 'buffer'
      ? straightThroughBufferTask(command)
      : straightThroughStringTask(command);

   return this._runTask(task, handler);
};

Git.prototype.diff = function (options, then) {
   const command = ['diff', ...getTrailingOptions(arguments)];

   if (typeof options === 'string') {
      command.splice(1, 0, options);
      this._logger.warn('Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
   }

   return this._runTask(
      straightThroughStringTask(command),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.diffSummary = function () {
   return this._runTask(
      diffSummaryTask(getTrailingOptions(arguments, 1)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.applyPatch = function (patches) {
   const task = !filterStringOrStringArray(patches)
      ? configurationErrorTask(`git.applyPatch requires one or more string patches as the first argument`)
      : applyPatchTask(asArray(patches), getTrailingOptions([].slice.call(arguments, 1)));

   return this._runTask(
      task,
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.revparse = function () {
   const commands = ['rev-parse', ...getTrailingOptions(arguments, true)];
   return this._runTask(
      straightThroughStringTask(commands, true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Show various types of objects, for example the file at a certain commit
 *
 * @param {string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.show = function (options, then) {
   return this._runTask(
      straightThroughStringTask(['show', ...getTrailingOptions(arguments, 1)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 */
Git.prototype.clean = function (mode, options, then) {
   const usingCleanOptionsArray = isCleanOptionsArray(mode);
   const cleanMode = usingCleanOptionsArray && mode.join('') || filterType(mode, filterString) || '';
   const customArgs = getTrailingOptions([].slice.call(arguments, usingCleanOptionsArray ? 1 : 0));

   return this._runTask(
      cleanWithOptionsTask(cleanMode, customArgs),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.exec = function (then) {
   const task = {
      commands: [],
      format: 'utf-8',
      parser () {
         if (typeof then === 'function') {
            then();
         }
      }
   };

   return this._runTask(task);
};

/**
 * Show commit logs from `HEAD` to the first commit.
 * If provided between `options.from` and `options.to` tags or branch.
 *
 * Additionally you can provide options.file, which is the path to a file in your repository. Then only this file will be considered.
 *
 * To use a custom splitter in the log format, set `options.splitter` to be the string the log should be split on.
 *
 * Options can also be supplied as a standard options object for adding custom properties supported by the git log command.
 * For any other set of options, supply options as an array of strings to be appended to the git log command.
 */
Git.prototype.log = function (options) {
   const next = trailingFunctionArgument(arguments);

   if (filterString(arguments[0]) && filterString(arguments[1])) {
      return this._runTask(
         configurationErrorTask(`git.log(string, string) should be replaced with git.log({ from: string, to: string })`),
         next
      );
   }

   const parsedOptions = parseLogOptions(
      trailingOptionsArgument(arguments) || {},
      filterArray(options) && options || []
   );

   return this._runTask(
      logTask(parsedOptions.splitter, parsedOptions.fields, parsedOptions.commands),
      next,
   )
};

/**
 * Clears the queue of pending commands and returns the wrapper instance for chaining.
 *
 * @returns {Git}
 */
Git.prototype.clearQueue = function () {
   // TODO:
   // this._executor.clear();
   return this;
};

/**
 * Check if a pathname or pathnames are excluded by .gitignore
 *
 * @param {string|string[]} pathnames
 * @param {Function} [then]
 */
Git.prototype.checkIgnore = function (pathnames, then) {
   return this._runTask(
      checkIgnoreTask(asArray((filterType(pathnames, filterStringOrStringArray, [])))),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.checkIsRepo = function (checkType, then) {
   return this._runTask(
      checkIsRepoTask(filterType(checkType, filterString)),
      trailingFunctionArgument(arguments),
   );
};

var git = Git;

var gitFactory = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitInstanceFactory = exports.gitExportFactory = exports.esModuleFactory = void 0;




/**
 * Adds the necessary properties to the supplied object to enable it for use as
 * the default export of a module.
 *
 * Eg: `module.exports = esModuleFactory({ something () {} })`
 */
function esModuleFactory(defaultExport) {
    return Object.defineProperties(defaultExport, {
        __esModule: { value: true },
        default: { value: defaultExport },
    });
}
exports.esModuleFactory = esModuleFactory;
function gitExportFactory(factory, extra) {
    return Object.assign(function (...args) {
        return factory.apply(null, args);
    }, api_1.default, extra || {});
}
exports.gitExportFactory = gitExportFactory;
function gitInstanceFactory(baseDir, options) {
    const plugins$1 = new plugins.PluginStore();
    const config = utils.createInstanceConfig(baseDir && (typeof baseDir === 'string' ? { baseDir } : baseDir) || {}, options);
    if (!utils.folderExists(config.baseDir)) {
        throw new api_1.default.GitConstructError(config, `Cannot use simple-git on a directory that does not exist`);
    }
    if (Array.isArray(config.config)) {
        plugins$1.add(plugins.commandConfigPrefixingPlugin(config.config));
    }
    config.progress && plugins$1.add(plugins.progressMonitorPlugin(config.progress));
    config.timeout && plugins$1.add(plugins.timeoutPlugin(config.timeout));
    config.spawnOptions && plugins$1.add(plugins.spawnOptionsPlugin(config.spawnOptions));
    plugins$1.add(plugins.errorDetectionPlugin(plugins.errorDetectionHandler(true)));
    config.errors && plugins$1.add(plugins.errorDetectionPlugin(config.errors));
    return new git(config, plugins$1);
}
exports.gitInstanceFactory = gitInstanceFactory;

});

var promiseWrapped = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitP = void 0;


const functionNamesBuilderApi = [
    'customBinary', 'env', 'outputHandler', 'silent',
];
const functionNamesPromiseApi = [
    'add',
    'addAnnotatedTag',
    'addConfig',
    'addRemote',
    'addTag',
    'applyPatch',
    'binaryCatFile',
    'branch',
    'branchLocal',
    'catFile',
    'checkIgnore',
    'checkIsRepo',
    'checkout',
    'checkoutBranch',
    'checkoutLatestTag',
    'checkoutLocalBranch',
    'clean',
    'clone',
    'commit',
    'cwd',
    'deleteLocalBranch',
    'deleteLocalBranches',
    'diff',
    'diffSummary',
    'exec',
    'fetch',
    'getRemotes',
    'init',
    'listConfig',
    'listRemote',
    'log',
    'merge',
    'mergeFromTo',
    'mirror',
    'mv',
    'pull',
    'push',
    'pushTags',
    'raw',
    'rebase',
    'remote',
    'removeRemote',
    'reset',
    'revert',
    'revparse',
    'rm',
    'rmKeepLocal',
    'show',
    'stash',
    'stashList',
    'status',
    'subModule',
    'submoduleAdd',
    'submoduleInit',
    'submoduleUpdate',
    'tag',
    'tags',
    'updateServerInfo'
];
function gitP(...args) {
    let git;
    let chain = Promise.resolve();
    try {
        git = gitFactory.gitInstanceFactory(...args);
    }
    catch (e) {
        chain = Promise.reject(e);
    }
    function builderReturn() {
        return promiseApi;
    }
    function chainReturn() {
        return chain;
    }
    const promiseApi = [...functionNamesBuilderApi, ...functionNamesPromiseApi].reduce((api, name) => {
        const isAsync = functionNamesPromiseApi.includes(name);
        const valid = isAsync ? asyncWrapper(name, git) : syncWrapper(name, git, api);
        const alternative = isAsync ? chainReturn : builderReturn;
        Object.defineProperty(api, name, {
            enumerable: false,
            configurable: false,
            value: git ? valid : alternative,
        });
        return api;
    }, {});
    return promiseApi;
    function asyncWrapper(fn, git) {
        return function (...args) {
            if (typeof args[args.length] === 'function') {
                throw new TypeError('Promise interface requires that handlers are not supplied inline, ' +
                    'trailing function not allowed in call to ' + fn);
            }
            return chain.then(function () {
                return new Promise(function (resolve, reject) {
                    const callback = (err, result) => {
                        if (err) {
                            return reject(toError(err));
                        }
                        resolve(result);
                    };
                    args.push(callback);
                    git[fn].apply(git, args);
                });
            });
        };
    }
    function syncWrapper(fn, git, api) {
        return (...args) => {
            git[fn](...args);
            return api;
        };
    }
}
exports.gitP = gitP;
function toError(error) {
    if (error instanceof Error) {
        return error;
    }
    if (typeof error === 'string') {
        return new Error(error);
    }
    return new gitResponseError.GitResponseError(error);
}

});

const {gitP} = promiseWrapped;
const {esModuleFactory, gitInstanceFactory, gitExportFactory} = gitFactory;

var src = esModuleFactory(
   gitExportFactory(gitInstanceFactory, {gitP})
);

var PluginState;
(function (PluginState) {
    PluginState[PluginState["idle"] = 0] = "idle";
    PluginState[PluginState["status"] = 1] = "status";
    PluginState[PluginState["pull"] = 2] = "pull";
    PluginState[PluginState["add"] = 3] = "add";
    PluginState[PluginState["commit"] = 4] = "commit";
    PluginState[PluginState["push"] = 5] = "push";
    PluginState[PluginState["conflicted"] = 6] = "conflicted";
})(PluginState || (PluginState = {}));
var DEFAULT_SETTINGS = {
    commitMessage: "vault backup: {{date}}",
    commitDateFormat: "YYYY-MM-DD HH:mm:ss",
    autoSaveInterval: 0,
    autoPullInterval: 0,
    autoPullOnBoot: false,
    disablePush: false,
    pullBeforePush: true,
    disablePopups: false,
    listChangedFilesInMessageBody: false,
    showStatusBar: true,
};
var ObsidianGit = /** @class */ (function (_super) {
    __extends(ObsidianGit, _super);
    function ObsidianGit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gitReady = false;
        _this.promiseQueue = new PromiseQueue();
        _this.conflictOutputFile = "conflict-files-obsidian-git.md";
        return _this;
        // endregion: displaying / formatting stuff
    }
    ObsidianGit.prototype.setState = function (state) {
        var _a;
        this.state = state;
        (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.display();
    };
    ObsidianGit.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading ' + this.manifest.name + " plugin");
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new ObsidianGitSettingsTab(this.app, this));
                        this.addCommand({
                            id: "pull",
                            name: "Pull from remote repository",
                            callback: function () { return _this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); }); },
                        });
                        this.addCommand({
                            id: "push",
                            name: "Commit *all* changes and push to remote repository",
                            callback: function () { return _this.promiseQueue.addTask(function () { return _this.createBackup(false); }); }
                        });
                        this.addCommand({
                            id: "commit-push-specified-message",
                            name: "Commit and push all changes with specified message",
                            callback: function () { return new CustomMessageModal(_this).open(); }
                        });
                        this.addCommand({
                            id: "list-changed-files",
                            name: "List changed files",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () {
                                var status;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.git.status()];
                                        case 1:
                                            status = _a.sent();
                                            new ChangedFilesModal(this, status.files).open();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        if (this.settings.showStatusBar) {
                            statusBarEl = this.addStatusBarItem();
                            this.statusBar = new StatusBar(statusBarEl, this);
                            this.registerInterval(window.setInterval(function () { return _this.statusBar.display(); }, 1000));
                        }
                        this.app.workspace.onLayoutReady(function () { return _this.init(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.clearTimeout(this.timeoutIDBackup);
                window.clearTimeout(this.timeoutIDPull);
                console.log('unloading ' + this.manifest.name + " plugin");
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.saveLastAuto = function (date, mode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (mode === "backup") {
                    window.localStorage.setItem(this.manifest.id + ":lastAutoBackup", date.toString());
                }
                else if (mode === "pull") {
                    window.localStorage.setItem(this.manifest.id + ":lastAutoPull", date.toString());
                }
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.loadLastAuto = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                return [2 /*return*/, {
                        "backup": new Date((_a = window.localStorage.getItem(this.manifest.id + ":lastAutoBackup")) !== null && _a !== void 0 ? _a : ""),
                        "pull": new Date((_b = window.localStorage.getItem(this.manifest.id + ":lastAutoPull")) !== null && _b !== void 0 ? _b : "")
                    }];
            });
        });
    };
    ObsidianGit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var adapter, path, isValidRepo, lastAutos, now, diff, now, diff, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isGitInstalled()) {
                            this.displayError("Cannot run git command");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        adapter = this.app.vault.adapter;
                        path = adapter.getBasePath();
                        this.git = src(path);
                        return [4 /*yield*/, this.git.checkIsRepo()];
                    case 2:
                        isValidRepo = _a.sent();
                        if (!!isValidRepo) return [3 /*break*/, 3];
                        this.displayError("Valid git repository not found.");
                        return [3 /*break*/, 5];
                    case 3:
                        this.gitReady = true;
                        this.setState(PluginState.idle);
                        if (this.settings.autoPullOnBoot) {
                            this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); });
                        }
                        return [4 /*yield*/, this.loadLastAuto()];
                    case 4:
                        lastAutos = _a.sent();
                        if (this.settings.autoSaveInterval > 0) {
                            now = new Date();
                            diff = this.settings.autoSaveInterval - (Math.round(((now.getTime() - lastAutos.backup.getTime()) / 1000) / 60));
                            this.startAutoBackup(diff <= 0 ? 0 : diff);
                        }
                        if (this.settings.autoPullInterval > 0) {
                            now = new Date();
                            diff = this.settings.autoPullInterval - (Math.round(((now.getTime() - lastAutos.pull.getTime()) / 1000) / 60));
                            this.startAutoPull(diff <= 0 ? 0 : diff);
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.displayError(error_1);
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.pullChangesFromRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filesUpdated, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gitReady) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.gitReady)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.pull()];
                    case 3:
                        filesUpdated = _a.sent();
                        if (filesUpdated > 0) {
                            this.displayMessage("Pulled new changes. " + filesUpdated + " files updated");
                        }
                        else {
                            this.displayMessage("Everything is up-to-date");
                        }
                        return [4 /*yield*/, this.git.status()];
                    case 4:
                        status = _a.sent();
                        if (status.conflicted.length > 0) {
                            this.displayError("You have " + status.conflicted.length + " conflict files");
                        }
                        this.lastUpdate = Date.now();
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.createBackup = function (fromAutoBackup, commitMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var status, file, changedFiles, trackingBranch, currentBranch, remoteChangedFiles, pulledFilesLength, remoteChangedFiles_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gitReady) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.gitReady)
                            return [2 /*return*/];
                        this.setState(PluginState.status);
                        return [4 /*yield*/, this.git.status()];
                    case 3:
                        status = _a.sent();
                        if (!!fromAutoBackup) return [3 /*break*/, 5];
                        file = this.app.vault.getAbstractFileByPath(this.conflictOutputFile);
                        return [4 /*yield*/, this.app.vault.delete(file)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        // check for conflict files on auto backup
                        if (fromAutoBackup && status.conflicted.length > 0) {
                            this.setState(PluginState.idle);
                            this.displayError("Did not commit, because you have " + status.conflicted.length + " conflict files. Please resolve them and commit per command.");
                            this.handleConflict(status.conflicted);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.git.status()];
                    case 6:
                        changedFiles = (_a.sent()).files;
                        if (!(changedFiles.length !== 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.add()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.git.status()];
                    case 8:
                        status = _a.sent();
                        return [4 /*yield*/, this.commit(commitMessage)];
                    case 9:
                        _a.sent();
                        this.lastUpdate = Date.now();
                        this.displayMessage("Committed " + status.staged.length + " files");
                        return [3 /*break*/, 11];
                    case 10:
                        this.displayMessage("No changes to commit");
                        _a.label = 11;
                    case 11:
                        if (!!this.settings.disablePush) return [3 /*break*/, 21];
                        trackingBranch = status.tracking;
                        currentBranch = status.current;
                        if (!trackingBranch) {
                            this.displayError("Did not push. No upstream branch is set! See README for instructions", 10000);
                            this.setState(PluginState.idle);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 12:
                        remoteChangedFiles = (_a.sent()).changed;
                        if (!(remoteChangedFiles > 0)) return [3 /*break*/, 20];
                        if (!this.settings.pullBeforePush) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.pull()];
                    case 13:
                        pulledFilesLength = _a.sent();
                        if (pulledFilesLength > 0) {
                            this.displayMessage("Pulled " + pulledFilesLength + " files from remote");
                        }
                        _a.label = 14;
                    case 14: return [4 /*yield*/, this.git.status()];
                    case 15:
                        // Refresh because of pull
                        status = _a.sent();
                        if (!(status.conflicted.length > 0)) return [3 /*break*/, 16];
                        this.displayError("Cannot push. You have " + status.conflicted.length + " conflict files");
                        this.handleConflict(status.conflicted);
                        return [2 /*return*/];
                    case 16: return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 17:
                        remoteChangedFiles_1 = (_a.sent()).changed;
                        return [4 /*yield*/, this.push()];
                    case 18:
                        _a.sent();
                        this.displayMessage("Pushed " + remoteChangedFiles_1 + " files to remote");
                        _a.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        this.displayMessage("No changes to push");
                        _a.label = 21;
                    case 21:
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    // region: main methods
    ObsidianGit.prototype.isGitInstalled = function () {
        // https://github.com/steveukx/git-js/issues/402
        var command = child_process_1.spawnSync('git', ['--version'], {
            stdio: 'ignore'
        });
        if (command.error) {
            console.error(command.error);
            return false;
        }
        return true;
    };
    ObsidianGit.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.add);
                        return [4 /*yield*/, this.git.add("./*", function (err) {
                                return err && _this.displayError("Cannot add files: " + err.message);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.commit = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var commitMessage, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.setState(PluginState.commit);
                        if (!(message !== null && message !== void 0)) return [3 /*break*/, 1];
                        _a = message;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.formatCommitMessage(this.settings.commitMessage)];
                    case 2:
                        _a = _c.sent();
                        _c.label = 3;
                    case 3:
                        commitMessage = _a;
                        if (!this.settings.listChangedFilesInMessageBody) return [3 /*break*/, 5];
                        _b = [commitMessage, "Affected files:"];
                        return [4 /*yield*/, this.git.status()];
                    case 4:
                        commitMessage = _b.concat([(_c.sent()).staged.join("\n")]);
                        _c.label = 5;
                    case 5: return [4 /*yield*/, this.git.commit(commitMessage)];
                    case 6:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.push = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.push);
                        return [4 /*yield*/, this.git.env(__assign(__assign({}, process.env), { "OBSIDIAN_GIT": 1 })).push(function (err) {
                                err && _this.displayError("Push failed " + err.message);
                            })];
                    case 1:
                        _a.sent();
                        this.lastUpdate = Date.now();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.pull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pullResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.pull);
                        return [4 /*yield*/, this.git.pull(["--no-rebase"], function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var status_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!err) return [3 /*break*/, 2];
                                            this.displayError("Pull failed " + err.message);
                                            return [4 /*yield*/, this.git.status()];
                                        case 1:
                                            status_1 = _a.sent();
                                            if (status_1.conflicted.length > 0) {
                                                this.handleConflict(status_1.conflicted);
                                            }
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        pullResult = _a.sent();
                        this.lastUpdate = Date.now();
                        return [2 /*return*/, pullResult.files.length];
                }
            });
        });
    };
    // endregion: main methods
    ObsidianGit.prototype.startAutoBackup = function (minutes) {
        var _this = this;
        this.timeoutIDBackup = window.setTimeout(function () {
            _this.promiseQueue.addTask(function () { return _this.createBackup(true); });
            _this.saveLastAuto(new Date(), "backup");
            _this.saveSettings();
            _this.startAutoBackup();
        }, (minutes !== null && minutes !== void 0 ? minutes : this.settings.autoSaveInterval) * 60000);
    };
    ObsidianGit.prototype.startAutoPull = function (minutes) {
        var _this = this;
        this.timeoutIDPull = window.setTimeout(function () {
            _this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); });
            _this.saveLastAuto(new Date(), "pull");
            _this.saveSettings();
            _this.startAutoPull();
        }, (minutes !== null && minutes !== void 0 ? minutes : this.settings.autoPullInterval) * 60000);
    };
    ObsidianGit.prototype.clearAutoBackup = function () {
        if (this.timeoutIDBackup) {
            window.clearTimeout(this.timeoutIDBackup);
            return true;
        }
        return false;
    };
    ObsidianGit.prototype.clearAutoPull = function () {
        if (this.timeoutIDPull) {
            window.clearTimeout(this.timeoutIDPull);
            return true;
        }
        return false;
    };
    ObsidianGit.prototype.handleConflict = function (conflicted) {
        return __awaiter(this, void 0, void 0, function () {
            var lines;
            var _this = this;
            return __generator(this, function (_a) {
                this.setState(PluginState.conflicted);
                lines = __spreadArray([
                    "# Conflict files",
                    "Please resolve them and commit per command (This file will be deleted before the commit)."
                ], conflicted.map(function (e) {
                    var file = _this.app.vault.getAbstractFileByPath(e);
                    if (file instanceof obsidian.TFile) {
                        var link = _this.app.metadataCache.fileToLinktext(file, "/");
                        return "- [[" + link + "]]";
                    }
                    else {
                        return "- Not a file: " + e;
                    }
                }));
                this.writeAndOpenFile(lines.join("\n"));
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.writeAndOpenFile = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var fileIsAlreadyOpened;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.vault.adapter.write(this.conflictOutputFile, text)];
                    case 1:
                        _a.sent();
                        fileIsAlreadyOpened = false;
                        this.app.workspace.iterateAllLeaves(function (leaf) {
                            if (leaf.getDisplayText() != "" && _this.conflictOutputFile.startsWith(leaf.getDisplayText())) {
                                fileIsAlreadyOpened = true;
                            }
                        });
                        if (!fileIsAlreadyOpened) {
                            this.app.workspace.openLinkText(this.conflictOutputFile, "/", true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // region: displaying / formatting messages
    ObsidianGit.prototype.displayMessage = function (message, timeout) {
        var _a;
        if (timeout === void 0) { timeout = 4 * 1000; }
        (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.displayMessage(message.toLowerCase(), timeout);
        if (!this.settings.disablePopups) {
            new obsidian.Notice(message);
        }
        console.log("git obsidian message: " + message);
    };
    ObsidianGit.prototype.displayError = function (message, timeout) {
        var _a;
        if (timeout === void 0) { timeout = 0; }
        new obsidian.Notice(message);
        console.log("git obsidian error: " + message);
        (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.displayMessage(message.toLowerCase(), timeout);
    };
    ObsidianGit.prototype.formatCommitMessage = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var status_2, numFiles, status_3, changeset_1, chunks, _i, _a, _b, action, files_1, files, moment;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!template.includes("{{numFiles}}")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.git.status()];
                    case 1:
                        status_2 = _c.sent();
                        numFiles = status_2.files.length;
                        template = template.replace("{{numFiles}}", String(numFiles));
                        _c.label = 2;
                    case 2:
                        if (!template.includes("{{files}}")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.git.status()];
                    case 3:
                        status_3 = _c.sent();
                        changeset_1 = {};
                        status_3.files.forEach(function (value) {
                            if (value.index in changeset_1) {
                                changeset_1[value.index].push(value.path);
                            }
                            else {
                                changeset_1[value.index] = [value.path];
                            }
                        });
                        chunks = [];
                        for (_i = 0, _a = Object.entries(changeset_1); _i < _a.length; _i++) {
                            _b = _a[_i], action = _b[0], files_1 = _b[1];
                            chunks.push(action + " " + files_1.join(" "));
                        }
                        files = chunks.join(", ");
                        template = template.replace("{{files}}", files);
                        _c.label = 4;
                    case 4:
                        moment = window.moment;
                        return [2 /*return*/, template.replace("{{date}}", moment().format(this.settings.commitDateFormat))];
                }
            });
        });
    };
    return ObsidianGit;
}(obsidian.Plugin));
var ObsidianGitSettingsTab = /** @class */ (function (_super) {
    __extends(ObsidianGitSettingsTab, _super);
    function ObsidianGitSettingsTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObsidianGitSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Git Backup settings" });
        new obsidian.Setting(containerEl)
            .setName("Vault backup interval (minutes)")
            .setDesc("Commit and push changes every X minutes. To disable automatic backup, specify negative value or zero (default)")
            .addText(function (text) {
            return text
                .setValue(String(plugin.settings.autoSaveInterval))
                .onChange(function (value) {
                if (!isNaN(Number(value))) {
                    plugin.settings.autoSaveInterval = Number(value);
                    plugin.saveSettings();
                    if (plugin.settings.autoSaveInterval > 0) {
                        plugin.clearAutoBackup();
                        plugin.startAutoBackup(plugin.settings.autoSaveInterval);
                        new obsidian.Notice("Automatic backup enabled! Every " + plugin.settings.autoSaveInterval + " minutes.");
                    }
                    else if (plugin.settings.autoSaveInterval <= 0 &&
                        plugin.timeoutIDBackup) {
                        plugin.clearAutoBackup() &&
                            new obsidian.Notice("Automatic backup disabled!");
                    }
                }
                else {
                    new obsidian.Notice("Please specify a valid number.");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Auto pull interval (minutes)")
            .setDesc("Pull changes every X minutes. To disable automatic pull, specify negative value or zero (default)")
            .addText(function (text) {
            return text
                .setValue(String(plugin.settings.autoPullInterval))
                .onChange(function (value) {
                if (!isNaN(Number(value))) {
                    plugin.settings.autoPullInterval = Number(value);
                    plugin.saveSettings();
                    if (plugin.settings.autoPullInterval > 0) {
                        plugin.clearAutoPull();
                        plugin.startAutoPull(plugin.settings.autoPullInterval);
                        new obsidian.Notice("Automatic pull enabled! Every " + plugin.settings.autoPullInterval + " minutes.");
                    }
                    else if (plugin.settings.autoPullInterval <= 0 &&
                        plugin.timeoutIDPull) {
                        plugin.clearAutoPull() &&
                            new obsidian.Notice("Automatic pull disabled!");
                    }
                }
                else {
                    new obsidian.Notice("Please specify a valid number.");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Commit message")
            .setDesc("Specify custom commit message. Available placeholders: {{date}}" +
            " (see below) and {{numFiles}} (number of changed files in the commit)")
            .addText(function (text) {
            return text
                .setPlaceholder("vault backup")
                .setValue(plugin.settings.commitMessage
                ? plugin.settings.commitMessage
                : "")
                .onChange(function (value) {
                plugin.settings.commitMessage = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("{{date}} placeholder format")
            .setDesc('Specify custom date format. E.g. "YYYY-MM-DD HH:mm:ss"')
            .addText(function (text) {
            return text
                .setPlaceholder(plugin.settings.commitDateFormat)
                .setValue(plugin.settings.commitDateFormat)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            plugin.settings.commitDateFormat = value;
                            return [4 /*yield*/, plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Preview commit message")
            .addButton(function (button) {
            return button.setButtonText("Preview").onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                var commitMessagePreview;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, plugin.formatCommitMessage(plugin.settings.commitMessage)];
                        case 1:
                            commitMessagePreview = _a.sent();
                            new obsidian.Notice("" + commitMessagePreview);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("List filenames affected by commit in the commit body")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.listChangedFilesInMessageBody)
                .onChange(function (value) {
                plugin.settings.listChangedFilesInMessageBody = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Current branch")
            .setDesc("Switch to a different branch")
            .addDropdown(function (dropdown) { return __awaiter(_this, void 0, void 0, function () {
            var branchInfo, _i, _a, branch;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, plugin.git.branchLocal()];
                    case 1:
                        branchInfo = _b.sent();
                        for (_i = 0, _a = branchInfo.all; _i < _a.length; _i++) {
                            branch = _a[_i];
                            dropdown.addOption(branch, branch);
                        }
                        dropdown.setValue(branchInfo.current);
                        dropdown.onChange(function (option) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, plugin.git.checkout(option, [], function (err) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                if (err) {
                                                    new obsidian.Notice(err.message);
                                                    dropdown.setValue(branchInfo.current);
                                                }
                                                else {
                                                    new obsidian.Notice("Checked out to " + option);
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); });
        new obsidian.Setting(containerEl)
            .setName("Pull updates on startup")
            .setDesc("Automatically pull updates when Obsidian starts")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.autoPullOnBoot)
                .onChange(function (value) {
                plugin.settings.autoPullOnBoot = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Disable push")
            .setDesc("Do not push changes to the remote repository")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.disablePush)
                .onChange(function (value) {
                plugin.settings.disablePush = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Pull changes before push")
            .setDesc("Commit -> pull -> push (Only if pushing is enabled)")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.pullBeforePush)
                .onChange(function (value) {
                plugin.settings.pullBeforePush = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Disable notifications")
            .setDesc("Disable notifications for git operations to minimize distraction (refer to status bar for updates)")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.disablePopups)
                .onChange(function (value) {
                plugin.settings.disablePopups = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show status bar")
            .setDesc("Obsidian must be restarted for the changes to take affect")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.showStatusBar)
                .onChange(function (value) {
                plugin.settings.showStatusBar = value;
                plugin.saveSettings();
            });
        });
    };
    return ObsidianGitSettingsTab;
}(obsidian.PluginSettingTab));
var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl, plugin) {
        this.messages = [];
        this.statusBarEl = statusBarEl;
        this.plugin = plugin;
    }
    StatusBar.prototype.displayMessage = function (message, timeout) {
        this.messages.push({
            message: "git: " + message.slice(0, 100),
            timeout: timeout,
        });
        this.display();
    };
    StatusBar.prototype.display = function () {
        if (this.messages.length > 0 && !this.currentMessage) {
            this.currentMessage = this.messages.shift();
            this.statusBarEl.setText(this.currentMessage.message);
            this.lastMessageTimestamp = Date.now();
        }
        else if (this.currentMessage) {
            var messageAge = Date.now() - this.lastMessageTimestamp;
            if (messageAge >= this.currentMessage.timeout) {
                this.currentMessage = null;
                this.lastMessageTimestamp = null;
            }
        }
        else {
            this.displayState();
        }
    };
    StatusBar.prototype.displayState = function () {
        switch (this.plugin.state) {
            case PluginState.idle:
                this.displayFromNow(this.plugin.lastUpdate);
                break;
            case PluginState.status:
                this.statusBarEl.setText("git: checking repo status..");
                break;
            case PluginState.add:
                this.statusBarEl.setText("git: adding files to repo..");
                break;
            case PluginState.commit:
                this.statusBarEl.setText("git: committing changes..");
                break;
            case PluginState.push:
                this.statusBarEl.setText("git: pushing changes..");
                break;
            case PluginState.pull:
                this.statusBarEl.setText("git: pulling changes..");
                break;
            case PluginState.conflicted:
                this.statusBarEl.setText("git: you have conflict files..");
                break;
            default:
                this.statusBarEl.setText("git: failed on initialization!");
                break;
        }
    };
    StatusBar.prototype.displayFromNow = function (timestamp) {
        if (timestamp) {
            var moment_1 = window.moment;
            var fromNow = moment_1(timestamp).fromNow();
            this.statusBarEl.setText("git: last update " + fromNow + "..");
        }
        else {
            this.statusBarEl.setText("git: ready");
        }
    };
    return StatusBar;
}());
var CustomMessageModal = /** @class */ (function (_super) {
    __extends(CustomMessageModal, _super);
    function CustomMessageModal(plugin) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.setPlaceholder("Type your message and select optional the version with the added date.");
        return _this;
    }
    CustomMessageModal.prototype.getSuggestions = function (query) {
        var date = window.moment().format(this.plugin.settings.commitDateFormat);
        if (query == "")
            query = "...";
        return [query, date + ": " + query, query + ": " + date];
    };
    CustomMessageModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value;
    };
    CustomMessageModal.prototype.onChooseSuggestion = function (item, _) {
        var _this = this;
        this.plugin.promiseQueue.addTask(function () { return _this.plugin.createBackup(false, item); });
    };
    return CustomMessageModal;
}(obsidian.SuggestModal));
var ChangedFilesModal = /** @class */ (function (_super) {
    __extends(ChangedFilesModal, _super);
    function ChangedFilesModal(plugin, changedFiles) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.changedFiles = changedFiles;
        _this.setPlaceholder("Not supported files will be opened by default app!");
        return _this;
    }
    ChangedFilesModal.prototype.getItems = function () {
        return this.changedFiles;
    };
    ChangedFilesModal.prototype.getItemText = function (item) {
        if (item.index == "?" && item.working_dir == "?") {
            return "Untracked | " + item.path;
        }
        var working_dir = "";
        var index = "";
        if (item.working_dir != " ")
            working_dir = "Working dir: " + item.working_dir + " ";
        if (item.index != " ")
            index = "Index: " + item.index;
        return "" + working_dir + index + " | " + item.path;
    };
    ChangedFilesModal.prototype.onChooseItem = function (item, _) {
        if (this.plugin.app.metadataCache.getFirstLinkpathDest(item.path, "") == null) {
            this.app.openWithDefaultApp(item.path);
        }
        else {
            this.plugin.app.workspace.openLinkText(item.path, "/");
        }
    };
    return ChangedFilesModal;
}(obsidian.FuzzySuggestModal));
var PromiseQueue = /** @class */ (function () {
    function PromiseQueue() {
        this.tasks = [];
    }
    PromiseQueue.prototype.addTask = function (task) {
        this.tasks.push(task);
        if (this.tasks.length === 1) {
            this.handleTask();
        }
    };
    PromiseQueue.prototype.handleTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.tasks.length > 0) {
                    this.tasks[0]().finally(function () {
                        _this.tasks.shift();
                        _this.handleTask();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    return PromiseQueue;
}());

module.exports = ObsidianGit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1jb25zdHJ1Y3QtZXJyb3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtcGx1Z2luLWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9lcnJvcnMvdGFzay1jb25maWd1cmF0aW9uLWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL25vZGUuanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL2ZpbGUtZXhpc3RzL2Rpc3Qvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL2ZpbGUtZXhpc3RzL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL3V0aWwuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2FyZ3VtZW50LWZpbHRlcnMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2V4aXQtY29kZXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2dpdC1vdXRwdXQtc3RyZWFtcy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvbGluZS1wYXJzZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL3NpbXBsZS1naXQtb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvdGFzay1vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy90YXNrLXBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NoZWNrLWlzLXJlcG8uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9DbGVhblN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3Rhc2suanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NsZWFuLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQ29uZmlnTGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9yZXNldC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvYXBpLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wbHVnaW5zL2NvbW1hbmQtY29uZmlnLXByZWZpeGluZy1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvZXJyb3ItZGV0ZWN0aW9uLnBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9wbHVnaW4tc3RvcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvcHJvZ3Jlc3MtbW9uaXRvci1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvc2ltcGxlLWdpdC1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvc3Bhd24tb3B0aW9ucy1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvdGltb3V0LXBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZ2l0LWxvZ2dlci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy90YXNrcy1wZW5kaW5nLXF1ZXVlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9ydW5uZXJzL2dpdC1leGVjdXRvci1jaGFpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9naXQtZXhlY3V0b3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2stY2FsbGJhY2suanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NoYW5nZS13b3JraW5nLWRpcmVjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvaGFzaC1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9Jbml0U3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvaW5pdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL01lcmdlU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL1B1bGxTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLXJlbW90ZS1vYmplY3RzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLXJlbW90ZS1tZXNzYWdlcy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1wdWxsLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLW1lcmdlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9tZXJnZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1wdXNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9wdXNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvRmlsZVN0YXR1c1N1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9TdGF0dXNTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3NpbXBsZS1naXQtYXBpLmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL3Byb21pc2UtZGVmZXJyZWQvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9zY2hlZHVsZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2FwcGx5LXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQnJhbmNoRGVsZXRlU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1icmFuY2gtZGVsZXRlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQnJhbmNoU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1icmFuY2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2JyYW5jaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0NoZWNrSWdub3JlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jaGVjay1pZ25vcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWNvbW1pdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvY29tbWl0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvRGlmZlN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtZGlmZi1zdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWZldGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9mZXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9sb2cuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtbW92ZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvbW92ZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvcHVsbC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0dldFJlbW90ZVN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3JlbW90ZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3Mvc3Rhc2gtbGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3Mvc3ViLW1vZHVsZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL1RhZ0xpc3QuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3RhZy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9naXQuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2dpdC1mYWN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9ydW5uZXJzL3Byb21pc2Utd3JhcHBlZC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9pbmRleC5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBmcm9tKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRFcnJvciA9IHZvaWQgMDtcbi8qKlxuICogVGhlIGBHaXRFcnJvcmAgaXMgdGhyb3duIHdoZW4gdGhlIHVuZGVybHlpbmcgYGdpdGAgcHJvY2VzcyB0aHJvd3MgYVxuICogZmF0YWwgZXhjZXB0aW9uIChlZyBhbiBgRU5PRU5UYCBleGNlcHRpb24gd2hlbiBhdHRlbXB0aW5nIHRvIHVzZSBhXG4gKiBub24td3JpdGFibGUgZGlyZWN0b3J5IGFzIHRoZSByb290IGZvciB5b3VyIHJlcG8pLCBhbmQgYWN0cyBhcyB0aGVcbiAqIGJhc2UgY2xhc3MgZm9yIG1vcmUgc3BlY2lmaWMgZXJyb3JzIHRocm93biBieSB0aGUgcGFyc2luZyBvZiB0aGVcbiAqIGdpdCByZXNwb25zZSBvciBlcnJvcnMgaW4gdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHRhc2sgYWJvdXQgdG9cbiAqIGJlIHJ1bi5cbiAqXG4gKiBXaGVuIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24sIHBlbmRpbmcgdGFza3MgaW4gdGhlIHNhbWUgaW5zdGFuY2Ugd2lsbFxuICogbm90IGJlIGV4ZWN1dGVkLiBUaGUgcmVjb21tZW5kZWQgd2F5IHRvIHJ1biBhIHNlcmllcyBvZiB0YXNrcyB0aGF0XG4gKiBjYW4gaW5kZXBlbmRlbnRseSBmYWlsIHdpdGhvdXQgbmVlZGluZyB0byBwcmV2ZW50IGZ1dHVyZSB0YXNrcyBmcm9tXG4gKiBydW5uaW5nIGlzIHRvIGNhdGNoIHRoZW0gaW5kaXZpZHVhbGx5OlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQgeyBnaXRQLCBTaW1wbGVHaXQsIEdpdEVycm9yLCBQdWxsUmVzdWx0IH0gZnJvbSAnc2ltcGxlLWdpdCc7XG5cbiBmdW5jdGlvbiBjYXRjaFRhc2sgKGU6IEdpdEVycm9yKSB7XG4gICByZXR1cm4gZS5cbiB9XG5cbiBjb25zdCBnaXQgPSBnaXRQKHJlcG9Xb3JraW5nRGlyKTtcbiBjb25zdCBwdWxsZWQ6IFB1bGxSZXN1bHQgfCBHaXRFcnJvciA9IGF3YWl0IGdpdC5wdWxsKCkuY2F0Y2goY2F0Y2hUYXNrKTtcbiBjb25zdCBwdXNoZWQ6IHN0cmluZyB8IEdpdEVycm9yID0gYXdhaXQgZ2l0LnB1c2hUYWdzKCkuY2F0Y2goY2F0Y2hUYXNrKTtcbiBgYGBcbiAqL1xuY2xhc3MgR2l0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFzaywgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkdpdEVycm9yID0gR2l0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdFJlc3BvbnNlRXJyb3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2dpdC1lcnJvclwiKTtcbi8qKlxuICogVGhlIGBHaXRSZXNwb25zZUVycm9yYCBpcyB0aGUgd3JhcHBlciBmb3IgYSBwYXJzZWQgcmVzcG9uc2UgdGhhdCBpcyB0cmVhdGVkIGFzXG4gKiBhIGZhdGFsIGVycm9yLCBmb3IgZXhhbXBsZSBhdHRlbXB0aW5nIGEgYG1lcmdlYCBjYW4gbGVhdmUgdGhlIHJlcG8gaW4gYSBjb3JydXB0ZWRcbiAqIHN0YXRlIHdoZW4gdGhlcmUgYXJlIGNvbmZsaWN0cyBzbyB0aGUgdGFzayB3aWxsIHJlamVjdCByYXRoZXIgdGhhbiByZXNvbHZlLlxuICpcbiAqIEZvciBleGFtcGxlLCBjYXRjaGluZyB0aGUgbWVyZ2UgY29uZmxpY3QgZXhjZXB0aW9uOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQgeyBnaXRQLCBTaW1wbGVHaXQsIEdpdFJlc3BvbnNlRXJyb3IsIE1lcmdlU3VtbWFyeSB9IGZyb20gJ3NpbXBsZS1naXQnO1xuXG4gY29uc3QgZ2l0ID0gZ2l0UChyZXBvUm9vdCk7XG4gY29uc3QgbWVyZ2VPcHRpb25zOiBzdHJpbmdbXSA9IFsnLS1uby1mZicsICdvdGhlci1icmFuY2gnXTtcbiBjb25zdCBtZXJnZVN1bW1hcnk6IE1lcmdlU3VtbWFyeSA9IGF3YWl0IGdpdC5tZXJnZShtZXJnZU9wdGlvbnMpXG4gICAgICAuY2F0Y2goKGU6IEdpdFJlc3BvbnNlRXJyb3I8TWVyZ2VTdW1tYXJ5PikgPT4gZS5naXQpO1xuXG4gaWYgKG1lcmdlU3VtbWFyeS5mYWlsZWQpIHtcbiAgIC8vIGRlYWwgd2l0aCB0aGUgZXJyb3JcbiB9XG4gYGBgXG4gKi9cbmNsYXNzIEdpdFJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLyoqXG4gICAgICogYC5naXRgIGFjY2VzcyB0aGUgcGFyc2VkIHJlc3BvbnNlIHRoYXQgaXMgdHJlYXRlZCBhcyBiZWluZyBhbiBlcnJvclxuICAgICAqL1xuICAgIGdpdCwgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcih1bmRlZmluZWQsIG1lc3NhZ2UgfHwgU3RyaW5nKGdpdCkpO1xuICAgICAgICB0aGlzLmdpdCA9IGdpdDtcbiAgICB9XG59XG5leHBvcnRzLkdpdFJlc3BvbnNlRXJyb3IgPSBHaXRSZXNwb25zZUVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LXJlc3BvbnNlLWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRDb25zdHJ1Y3RFcnJvciA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZ2l0LWVycm9yXCIpO1xuLyoqXG4gKiBUaGUgYEdpdENvbnN0cnVjdEVycm9yYCBpcyB0aHJvd24gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIGNvbnN0cnVjdG9yXG4gKiBvZiB0aGUgYHNpbXBsZS1naXRgIGluc3RhbmNlIGl0c2VsZi4gTW9zdCBjb21tb25seSBhcyBhIHJlc3VsdCBvZiB1c2luZ1xuICogYSBgYmFzZURpcmAgb3B0aW9uIHRoYXQgcG9pbnRzIHRvIGEgZm9sZGVyIHRoYXQgZWl0aGVyIGRvZXMgbm90IGV4aXN0LFxuICogb3IgY2Fubm90IGJlIHJlYWQgYnkgdGhlIHVzZXIgdGhlIG5vZGUgc2NyaXB0IGlzIHJ1bm5pbmcgYXMuXG4gKlxuICogQ2hlY2sgdGhlIGAubWVzc2FnZWAgcHJvcGVydHkgZm9yIG1vcmUgZGV0YWlsIGluY2x1ZGluZyB0aGUgcHJvcGVydGllc1xuICogcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgR2l0Q29uc3RydWN0RXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0Q29uc3RydWN0RXJyb3IgPSBHaXRDb25zdHJ1Y3RFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1jb25zdHJ1Y3QtZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdFBsdWdpbkVycm9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9naXQtZXJyb3JcIik7XG5jbGFzcyBHaXRQbHVnaW5FcnJvciBleHRlbmRzIGdpdF9lcnJvcl8xLkdpdEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBwbHVnaW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIodGFzaywgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0UGx1Z2luRXJyb3IgPSBHaXRQbHVnaW5FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1wbHVnaW4tZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRhc2tDb25maWd1cmF0aW9uRXJyb3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2dpdC1lcnJvclwiKTtcbi8qKlxuICogVGhlIGBUYXNrQ29uZmlndXJhdGlvbkVycm9yYCBpcyB0aHJvd24gd2hlbiBhIGNvbW1hbmQgd2FzIGluY29ycmVjdGx5XG4gKiBjb25maWd1cmVkLiBBbiBlcnJvciBvZiB0aGlzIGtpbmQgbWVhbnMgdGhhdCBubyBhdHRlbXB0IHdhcyBtYWRlIHRvXG4gKiBydW4geW91ciBjb21tYW5kIHRocm91Z2ggdGhlIHVuZGVybHlpbmcgYGdpdGAgYmluYXJ5LlxuICpcbiAqIENoZWNrIHRoZSBgLm1lc3NhZ2VgIHByb3BlcnR5IGZvciBtb3JlIGRldGFpbCBvbiB3aHkgeW91ciBjb25maWd1cmF0aW9uXG4gKiByZXN1bHRlZCBpbiBhbiBlcnJvci5cbiAqL1xuY2xhc3MgVGFza0NvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIGdpdF9lcnJvcl8xLkdpdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgfVxufVxuZXhwb3J0cy5UYXNrQ29uZmlndXJhdGlvbkVycm9yID0gVGFza0NvbmZpZ3VyYXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stY29uZmlndXJhdGlvbi1lcnJvci5qcy5tYXAiLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXHRcdGxldCBlbmFibGVPdmVycmlkZSA9IG51bGw7XG5cdFx0bGV0IG5hbWVzcGFjZXNDYWNoZTtcblx0XHRsZXQgZW5hYmxlZENhY2hlO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZU92ZXJyaWRlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVuYWJsZU92ZXJyaWRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChuYW1lc3BhY2VzQ2FjaGUgIT09IGNyZWF0ZURlYnVnLm5hbWVzcGFjZXMpIHtcblx0XHRcdFx0XHRuYW1lc3BhY2VzQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzO1xuXHRcdFx0XHRcdGVuYWJsZWRDYWNoZSA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbmFibGVkQ2FjaGU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXHRcdGNyZWF0ZURlYnVnLm5hbWVzcGFjZXMgPSBuYW1lc3BhY2VzO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2ID0gcHJvY2Vzcy5hcmd2KSA9PiB7XG5cdGNvbnN0IHByZWZpeCA9IGZsYWcuc3RhcnRzV2l0aCgnLScpID8gJycgOiAoZmxhZy5sZW5ndGggPT09IDEgPyAnLScgOiAnLS0nKTtcblx0Y29uc3QgcG9zaXRpb24gPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3NpdGlvbiA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0cmV0dXJuIHBvc2l0aW9uICE9PSAtMSAmJiAodGVybWluYXRvclBvc2l0aW9uID09PSAtMSB8fCBwb3NpdGlvbiA8IHRlcm1pbmF0b3JQb3NpdGlvbik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5jb25zdCBoYXNGbGFnID0gcmVxdWlyZSgnaGFzLWZsYWcnKTtcblxuY29uc3Qge2Vudn0gPSBwcm9jZXNzO1xuXG5sZXQgZm9yY2VDb2xvcjtcbmlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJykgfHxcblx0aGFzRmxhZygnY29sb3I9bmV2ZXInKSkge1xuXHRmb3JjZUNvbG9yID0gMDtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IDE7XG59XG5cbmlmICgnRk9SQ0VfQ09MT1InIGluIGVudikge1xuXHRpZiAoZW52LkZPUkNFX0NPTE9SID09PSAndHJ1ZScpIHtcblx0XHRmb3JjZUNvbG9yID0gMTtcblx0fSBlbHNlIGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICdmYWxzZScpIHtcblx0XHRmb3JjZUNvbG9yID0gMDtcblx0fSBlbHNlIHtcblx0XHRmb3JjZUNvbG9yID0gZW52LkZPUkNFX0NPTE9SLmxlbmd0aCA9PT0gMCA/IDEgOiBNYXRoLm1pbihwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSwgMyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcblx0aWYgKGxldmVsID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsZXZlbCxcblx0XHRoYXNCYXNpYzogdHJ1ZSxcblx0XHRoYXMyNTY6IGxldmVsID49IDIsXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzXG5cdH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3IoaGF2ZVN0cmVhbSwgc3RyZWFtSXNUVFkpIHtcblx0aWYgKGZvcmNlQ29sb3IgPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChoYXZlU3RyZWFtICYmICFzdHJlYW1Jc1RUWSAmJiBmb3JjZUNvbG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IG1pbiA9IGZvcmNlQ29sb3IgfHwgMDtcblxuXHRpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuXG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGUgZmlyc3QgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG5cdFx0Y29uc3Qgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG5cdFx0aWYgKFxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knLCAnR0lUSFVCX0FDVElPTlMnLCAnQlVJTERLSVRFJ10uc29tZShzaWduID0+IHNpZ24gaW4gZW52KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG5cdFx0cmV0dXJuIC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwO1xuXHR9XG5cblx0aWYgKGVudi5DT0xPUlRFUk0gPT09ICd0cnVlY29sb3InKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuXHRcdHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuXHRcdFx0Y2FzZSAnaVRlcm0uYXBwJzpcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuXHRcdFx0Y2FzZSAnQXBwbGVfVGVybWluYWwnOlxuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHR9XG5cdH1cblxuXHRpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnZ0MjIwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSwgc3RyZWFtICYmIHN0cmVhbS5pc1RUWSk7XG5cdHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG5cdHN0ZG91dDogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDEpKSksXG5cdHN0ZGVycjogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDIpKSlcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5kZXN0cm95ID0gdXRpbC5kZXByZWNhdGUoXG5cdCgpID0+IHt9LFxuXHQnSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLidcbik7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWzYsIDIsIDMsIDQsIDUsIDFdO1xuXG50cnkge1xuXHQvLyBPcHRpb25hbCBkZXBlbmRlbmN5IChhcyBpbiwgZG9lc24ndCBuZWVkIHRvIGJlIGluc3RhbGxlZCwgTk9UIGxpa2Ugb3B0aW9uYWxEZXBlbmRlbmNpZXMgaW4gcGFja2FnZS5qc29uKVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5cdGNvbnN0IHN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCdzdXBwb3J0cy1jb2xvcicpO1xuXG5cdGlmIChzdXBwb3J0c0NvbG9yICYmIChzdXBwb3J0c0NvbG9yLnN0ZGVyciB8fCBzdXBwb3J0c0NvbG9yKS5sZXZlbCA+PSAyKSB7XG5cdFx0ZXhwb3J0cy5jb2xvcnMgPSBbXG5cdFx0XHQyMCxcblx0XHRcdDIxLFxuXHRcdFx0MjYsXG5cdFx0XHQyNyxcblx0XHRcdDMyLFxuXHRcdFx0MzMsXG5cdFx0XHQzOCxcblx0XHRcdDM5LFxuXHRcdFx0NDAsXG5cdFx0XHQ0MSxcblx0XHRcdDQyLFxuXHRcdFx0NDMsXG5cdFx0XHQ0NCxcblx0XHRcdDQ1LFxuXHRcdFx0NTYsXG5cdFx0XHQ1Nyxcblx0XHRcdDYyLFxuXHRcdFx0NjMsXG5cdFx0XHQ2OCxcblx0XHRcdDY5LFxuXHRcdFx0NzQsXG5cdFx0XHQ3NSxcblx0XHRcdDc2LFxuXHRcdFx0NzcsXG5cdFx0XHQ3OCxcblx0XHRcdDc5LFxuXHRcdFx0ODAsXG5cdFx0XHQ4MSxcblx0XHRcdDkyLFxuXHRcdFx0OTMsXG5cdFx0XHQ5OCxcblx0XHRcdDk5LFxuXHRcdFx0MTEyLFxuXHRcdFx0MTEzLFxuXHRcdFx0MTI4LFxuXHRcdFx0MTI5LFxuXHRcdFx0MTM0LFxuXHRcdFx0MTM1LFxuXHRcdFx0MTQ4LFxuXHRcdFx0MTQ5LFxuXHRcdFx0MTYwLFxuXHRcdFx0MTYxLFxuXHRcdFx0MTYyLFxuXHRcdFx0MTYzLFxuXHRcdFx0MTY0LFxuXHRcdFx0MTY1LFxuXHRcdFx0MTY2LFxuXHRcdFx0MTY3LFxuXHRcdFx0MTY4LFxuXHRcdFx0MTY5LFxuXHRcdFx0MTcwLFxuXHRcdFx0MTcxLFxuXHRcdFx0MTcyLFxuXHRcdFx0MTczLFxuXHRcdFx0MTc4LFxuXHRcdFx0MTc5LFxuXHRcdFx0MTg0LFxuXHRcdFx0MTg1LFxuXHRcdFx0MTk2LFxuXHRcdFx0MTk3LFxuXHRcdFx0MTk4LFxuXHRcdFx0MTk5LFxuXHRcdFx0MjAwLFxuXHRcdFx0MjAxLFxuXHRcdFx0MjAyLFxuXHRcdFx0MjAzLFxuXHRcdFx0MjA0LFxuXHRcdFx0MjA1LFxuXHRcdFx0MjA2LFxuXHRcdFx0MjA3LFxuXHRcdFx0MjA4LFxuXHRcdFx0MjA5LFxuXHRcdFx0MjE0LFxuXHRcdFx0MjE1LFxuXHRcdFx0MjIwLFxuXHRcdFx0MjIxXG5cdFx0XTtcblx0fVxufSBjYXRjaCAoZXJyb3IpIHtcblx0Ly8gU3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihrZXkgPT4ge1xuXHRyZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG5cdC8vIENhbWVsLWNhc2Vcblx0Y29uc3QgcHJvcCA9IGtleVxuXHRcdC5zdWJzdHJpbmcoNilcblx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdC5yZXBsYWNlKC9fKFthLXpdKS9nLCAoXywgaykgPT4ge1xuXHRcdFx0cmV0dXJuIGsudG9VcHBlckNhc2UoKTtcblx0XHR9KTtcblxuXHQvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcblx0bGV0IHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG5cdGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHtcblx0XHR2YWwgPSB0cnVlO1xuXHR9IGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHtcblx0XHR2YWwgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHR9XG5cblx0b2JqW3Byb3BdID0gdmFsO1xuXHRyZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZW5hYmxlZCB3aGVuIGB0cnVlYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdHJldHVybiAnY29sb3JzJyBpbiBleHBvcnRzLmluc3BlY3RPcHRzID9cblx0XHRCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKSA6XG5cdFx0dHR5LmlzYXR0eShwcm9jZXNzLnN0ZGVyci5mZCk7XG59XG5cbi8qKlxuICogQWRkcyBBTlNJIGNvbG9yIGVzY2FwZSBjb2RlcyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGNvbnN0IHtuYW1lc3BhY2U6IG5hbWUsIHVzZUNvbG9yc30gPSB0aGlzO1xuXG5cdGlmICh1c2VDb2xvcnMpIHtcblx0XHRjb25zdCBjID0gdGhpcy5jb2xvcjtcblx0XHRjb25zdCBjb2xvckNvZGUgPSAnXFx1MDAxQlszJyArIChjIDwgOCA/IGMgOiAnODs1OycgKyBjKTtcblx0XHRjb25zdCBwcmVmaXggPSBgICAke2NvbG9yQ29kZX07MW0ke25hbWV9IFxcdTAwMUJbMG1gO1xuXG5cdFx0YXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuXHRcdGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKSArICdcXHUwMDFCWzBtJyk7XG5cdH0gZWxzZSB7XG5cdFx0YXJnc1swXSA9IGdldERhdGUoKSArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG5cdGlmIChleHBvcnRzLmluc3BlY3RPcHRzLmhpZGVEYXRlKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyAnICc7XG59XG5cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIHN0ZGVyci5cbiAqL1xuXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHRyZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQoLi4uYXJncykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG5cdFx0Ly8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cblx0XHRkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRyZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdChkZWJ1Zykge1xuXHRkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmluc3BlY3RPcHRzKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZGVidWcuaW5zcGVjdE9wdHNba2V5c1tpXV0gPSBleHBvcnRzLmluc3BlY3RPcHRzW2tleXNbaV1dO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0Lm1hcChzdHIgPT4gc3RyLnRyaW0oKSlcblx0XHQuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJU8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmZvcm1hdHRlcnMuTyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cyk7XG59O1xuIiwiLyoqXG4gKiBEZXRlY3QgRWxlY3Ryb24gcmVuZGVyZXIgLyBud2pzIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCBwcm9jZXNzLmJyb3dzZXIgPT09IHRydWUgfHwgcHJvY2Vzcy5fX253anMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZzXzEgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBkZWJ1Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkZWJ1Z1wiKSk7XG5jb25zdCBsb2cgPSBkZWJ1Z18xLmRlZmF1bHQoJ0Brd3NpdGVzL2ZpbGUtZXhpc3RzJyk7XG5mdW5jdGlvbiBjaGVjayhwYXRoLCBpc0ZpbGUsIGlzRGlyZWN0b3J5KSB7XG4gICAgbG9nKGBjaGVja2luZyAlc2AsIHBhdGgpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0YXQgPSBmc18xLnN0YXRTeW5jKHBhdGgpO1xuICAgICAgICBpZiAoc3RhdC5pc0ZpbGUoKSAmJiBpc0ZpbGUpIHtcbiAgICAgICAgICAgIGxvZyhgW09LXSBwYXRoIHJlcHJlc2VudHMgYSBmaWxlYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpICYmIGlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICBsb2coYFtPS10gcGF0aCByZXByZXNlbnRzIGEgZGlyZWN0b3J5YCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsb2coYFtGQUlMXSBwYXRoIHJlcHJlc2VudHMgc29tZXRoaW5nIG90aGVyIHRoYW4gYSBmaWxlIG9yIGRpcmVjdG9yeWApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAgICAgICBsb2coYFtGQUlMXSBwYXRoIGlzIG5vdCBhY2Nlc3NpYmxlOiAlb2AsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxvZyhgW0ZBVEFMXSAlb2AsIGUpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cbi8qKlxuICogU3luY2hyb25vdXMgdmFsaWRhdGlvbiBvZiBhIHBhdGggZXhpc3RpbmcgZWl0aGVyIGFzIGEgZmlsZSBvciBhcyBhIGRpcmVjdG9yeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVja1xuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgT25lIG9yIGJvdGggb2YgdGhlIGV4cG9ydGVkIG51bWVyaWMgY29uc3RhbnRzXG4gKi9cbmZ1bmN0aW9uIGV4aXN0cyhwYXRoLCB0eXBlID0gZXhwb3J0cy5SRUFEQUJMRSkge1xuICAgIHJldHVybiBjaGVjayhwYXRoLCAodHlwZSAmIGV4cG9ydHMuRklMRSkgPiAwLCAodHlwZSAmIGV4cG9ydHMuRk9MREVSKSA+IDApO1xufVxuZXhwb3J0cy5leGlzdHMgPSBleGlzdHM7XG4vKipcbiAqIENvbnN0YW50IHJlcHJlc2VudGluZyBhIGZpbGVcbiAqL1xuZXhwb3J0cy5GSUxFID0gMTtcbi8qKlxuICogQ29uc3RhbnQgcmVwcmVzZW50aW5nIGEgZm9sZGVyXG4gKi9cbmV4cG9ydHMuRk9MREVSID0gMjtcbi8qKlxuICogQ29uc3RhbnQgcmVwcmVzZW50aW5nIGVpdGhlciBhIGZpbGUgb3IgYSBmb2xkZXJcbiAqL1xuZXhwb3J0cy5SRUFEQUJMRSA9IGV4cG9ydHMuRklMRSArIGV4cG9ydHMuRk9MREVSO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5waWNrID0gZXhwb3J0cy5idWZmZXJUb1N0cmluZyA9IGV4cG9ydHMucHJlZml4ZWRBcnJheSA9IGV4cG9ydHMuYXNOdW1iZXIgPSBleHBvcnRzLmFzU3RyaW5nQXJyYXkgPSBleHBvcnRzLmFzQXJyYXkgPSBleHBvcnRzLm9iamVjdFRvU3RyaW5nID0gZXhwb3J0cy5yZW1vdmUgPSBleHBvcnRzLmluY2x1ZGluZyA9IGV4cG9ydHMuYXBwZW5kID0gZXhwb3J0cy5mb2xkZXJFeGlzdHMgPSBleHBvcnRzLmZvckVhY2hMaW5lV2l0aENvbnRlbnQgPSBleHBvcnRzLnRvTGluZXNXaXRoQ29udGVudCA9IGV4cG9ydHMubGFzdCA9IGV4cG9ydHMuZmlyc3QgPSBleHBvcnRzLnNwbGl0T24gPSBleHBvcnRzLmlzVXNlckZ1bmN0aW9uID0gZXhwb3J0cy5hc0Z1bmN0aW9uID0gZXhwb3J0cy5OT09QID0gdm9pZCAwO1xuY29uc3QgZmlsZV9leGlzdHNfMSA9IHJlcXVpcmUoXCJAa3dzaXRlcy9maWxlLWV4aXN0c1wiKTtcbmNvbnN0IE5PT1AgPSAoKSA9PiB7XG59O1xuZXhwb3J0cy5OT09QID0gTk9PUDtcbi8qKlxuICogUmV0dXJucyBlaXRoZXIgdGhlIHNvdXJjZSBhcmd1bWVudCB3aGVuIGl0IGlzIGEgYEZ1bmN0aW9uYCwgb3IgdGhlIGRlZmF1bHRcbiAqIGBOT09QYCBmdW5jdGlvbiBjb25zdGFudFxuICovXG5mdW5jdGlvbiBhc0Z1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2Ygc291cmNlID09PSAnZnVuY3Rpb24nID8gc291cmNlIDogZXhwb3J0cy5OT09QO1xufVxuZXhwb3J0cy5hc0Z1bmN0aW9uID0gYXNGdW5jdGlvbjtcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzdXBwbGllZCBhcmd1bWVudCBpcyBib3RoIGEgZnVuY3Rpb24sIGFuZCBpcyBub3RcbiAqIHRoZSBgTk9PUGAgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGlzVXNlckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiAodHlwZW9mIHNvdXJjZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzb3VyY2UgIT09IGV4cG9ydHMuTk9PUCk7XG59XG5leHBvcnRzLmlzVXNlckZ1bmN0aW9uID0gaXNVc2VyRnVuY3Rpb247XG5mdW5jdGlvbiBzcGxpdE9uKGlucHV0LCBjaGFyKSB7XG4gICAgY29uc3QgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNoYXIpO1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIHJldHVybiBbaW5wdXQsICcnXTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgICAgaW5wdXQuc3Vic3RyKDAsIGluZGV4KSxcbiAgICAgICAgaW5wdXQuc3Vic3RyKGluZGV4ICsgMSksXG4gICAgXTtcbn1cbmV4cG9ydHMuc3BsaXRPbiA9IHNwbGl0T247XG5mdW5jdGlvbiBmaXJzdChpbnB1dCwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiBpc0FycmF5TGlrZShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID4gb2Zmc2V0ID8gaW5wdXRbb2Zmc2V0XSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmZ1bmN0aW9uIGxhc3QoaW5wdXQsIG9mZnNldCA9IDApIHtcbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA+IG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMSAtIG9mZnNldF07XG4gICAgfVxufVxuZXhwb3J0cy5sYXN0ID0gbGFzdDtcbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKGlucHV0KSB7XG4gICAgcmV0dXJuICEhKGlucHV0ICYmIHR5cGVvZiBpbnB1dC5sZW5ndGggPT09ICdudW1iZXInKTtcbn1cbmZ1bmN0aW9uIHRvTGluZXNXaXRoQ29udGVudChpbnB1dCwgdHJpbW1lZCA9IHRydWUsIHNlcGFyYXRvciA9ICdcXG4nKSB7XG4gICAgcmV0dXJuIGlucHV0LnNwbGl0KHNlcGFyYXRvcilcbiAgICAgICAgLnJlZHVjZSgob3V0cHV0LCBsaW5lKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmVDb250ZW50ID0gdHJpbW1lZCA/IGxpbmUudHJpbSgpIDogbGluZTtcbiAgICAgICAgaWYgKGxpbmVDb250ZW50KSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChsaW5lQ29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCBbXSk7XG59XG5leHBvcnRzLnRvTGluZXNXaXRoQ29udGVudCA9IHRvTGluZXNXaXRoQ29udGVudDtcbmZ1bmN0aW9uIGZvckVhY2hMaW5lV2l0aENvbnRlbnQoaW5wdXQsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRvTGluZXNXaXRoQ29udGVudChpbnB1dCwgdHJ1ZSkubWFwKGxpbmUgPT4gY2FsbGJhY2sobGluZSkpO1xufVxuZXhwb3J0cy5mb3JFYWNoTGluZVdpdGhDb250ZW50ID0gZm9yRWFjaExpbmVXaXRoQ29udGVudDtcbmZ1bmN0aW9uIGZvbGRlckV4aXN0cyhwYXRoKSB7XG4gICAgcmV0dXJuIGZpbGVfZXhpc3RzXzEuZXhpc3RzKHBhdGgsIGZpbGVfZXhpc3RzXzEuRk9MREVSKTtcbn1cbmV4cG9ydHMuZm9sZGVyRXhpc3RzID0gZm9sZGVyRXhpc3RzO1xuLyoqXG4gKiBBZGRzIGBpdGVtYCBpbnRvIHRoZSBgdGFyZ2V0YCBgQXJyYXlgIG9yIGBTZXRgIHdoZW4gaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudCBhbmQgcmV0dXJucyB0aGUgYGl0ZW1gLlxuICovXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBpdGVtKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICBpZiAoIXRhcmdldC5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRhcmdldC5hZGQoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xufVxuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG4vKipcbiAqIEFkZHMgYGl0ZW1gIGludG8gdGhlIGB0YXJnZXRgIGBBcnJheWAgd2hlbiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50IGFuZCByZXR1cm5zIHRoZSBgdGFyZ2V0YC5cbiAqL1xuZnVuY3Rpb24gaW5jbHVkaW5nKHRhcmdldCwgaXRlbSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgIXRhcmdldC5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydHMuaW5jbHVkaW5nID0gaW5jbHVkaW5nO1xuZnVuY3Rpb24gcmVtb3ZlKHRhcmdldCwgaXRlbSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YXJnZXQuZGVsZXRlKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbn1cbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5vYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuZnVuY3Rpb24gYXNBcnJheShzb3VyY2UpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShzb3VyY2UpID8gc291cmNlIDogW3NvdXJjZV07XG59XG5leHBvcnRzLmFzQXJyYXkgPSBhc0FycmF5O1xuZnVuY3Rpb24gYXNTdHJpbmdBcnJheShzb3VyY2UpIHtcbiAgICByZXR1cm4gYXNBcnJheShzb3VyY2UpLm1hcChTdHJpbmcpO1xufVxuZXhwb3J0cy5hc1N0cmluZ0FycmF5ID0gYXNTdHJpbmdBcnJheTtcbmZ1bmN0aW9uIGFzTnVtYmVyKHNvdXJjZSwgb25OYU4gPSAwKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvbk5hTjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XG4gICAgcmV0dXJuIGlzTmFOKG51bSkgPyBvbk5hTiA6IG51bTtcbn1cbmV4cG9ydHMuYXNOdW1iZXIgPSBhc051bWJlcjtcbmZ1bmN0aW9uIHByZWZpeGVkQXJyYXkoaW5wdXQsIHByZWZpeCkge1xuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBpbnB1dC5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBvdXRwdXQucHVzaChwcmVmaXgsIGlucHV0W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydHMucHJlZml4ZWRBcnJheSA9IHByZWZpeGVkQXJyYXk7XG5mdW5jdGlvbiBidWZmZXJUb1N0cmluZyhpbnB1dCkge1xuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheShpbnB1dCkgPyBCdWZmZXIuY29uY2F0KGlucHV0KSA6IGlucHV0KS50b1N0cmluZygndXRmLTgnKTtcbn1cbmV4cG9ydHMuYnVmZmVyVG9TdHJpbmcgPSBidWZmZXJUb1N0cmluZztcbi8qKlxuICogR2V0IGEgbmV3IG9iamVjdCBmcm9tIGEgc291cmNlIG9iamVjdCB3aXRoIG9ubHkgdGhlIGxpc3RlZCBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBwaWNrKHNvdXJjZSwgcHJvcGVydGllcykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCAuLi5wcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IHByb3BlcnR5IGluIHNvdXJjZSA/IHsgW3Byb3BlcnR5XTogc291cmNlW3Byb3BlcnR5XSB9IDoge30pKTtcbn1cbmV4cG9ydHMucGljayA9IHBpY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5maWx0ZXJIYXNMZW5ndGggPSBleHBvcnRzLmZpbHRlckZ1bmN0aW9uID0gZXhwb3J0cy5maWx0ZXJQbGFpbk9iamVjdCA9IGV4cG9ydHMuZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSA9IGV4cG9ydHMuZmlsdGVyU3RyaW5nQXJyYXkgPSBleHBvcnRzLmZpbHRlclN0cmluZyA9IGV4cG9ydHMuZmlsdGVyUHJpbWl0aXZlcyA9IGV4cG9ydHMuZmlsdGVyQXJyYXkgPSBleHBvcnRzLmZpbHRlclR5cGUgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZnVuY3Rpb24gZmlsdGVyVHlwZShpbnB1dCwgZmlsdGVyLCBkZWYpIHtcbiAgICBpZiAoZmlsdGVyKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIHJldHVybiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpID8gZGVmIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5maWx0ZXJUeXBlID0gZmlsdGVyVHlwZTtcbmNvbnN0IGZpbHRlckFycmF5ID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpO1xufTtcbmV4cG9ydHMuZmlsdGVyQXJyYXkgPSBmaWx0ZXJBcnJheTtcbmZ1bmN0aW9uIGZpbHRlclByaW1pdGl2ZXMoaW5wdXQsIG9taXQpIHtcbiAgICByZXR1cm4gL251bWJlcnxzdHJpbmd8Ym9vbGVhbi8udGVzdCh0eXBlb2YgaW5wdXQpICYmICghb21pdCB8fCAhb21pdC5pbmNsdWRlcygodHlwZW9mIGlucHV0KSkpO1xufVxuZXhwb3J0cy5maWx0ZXJQcmltaXRpdmVzID0gZmlsdGVyUHJpbWl0aXZlcztcbmNvbnN0IGZpbHRlclN0cmluZyA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nID0gZmlsdGVyU3RyaW5nO1xuY29uc3QgZmlsdGVyU3RyaW5nQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgJiYgaW5wdXQuZXZlcnkoZXhwb3J0cy5maWx0ZXJTdHJpbmcpO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nQXJyYXkgPSBmaWx0ZXJTdHJpbmdBcnJheTtcbmNvbnN0IGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gZXhwb3J0cy5maWx0ZXJTdHJpbmcoaW5wdXQpIHx8IChBcnJheS5pc0FycmF5KGlucHV0KSAmJiBpbnB1dC5ldmVyeShleHBvcnRzLmZpbHRlclN0cmluZykpO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSA9IGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXk7XG5mdW5jdGlvbiBmaWx0ZXJQbGFpbk9iamVjdChpbnB1dCkge1xuICAgIHJldHVybiAhIWlucHV0ICYmIHV0aWxfMS5vYmplY3RUb1N0cmluZyhpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuZXhwb3J0cy5maWx0ZXJQbGFpbk9iamVjdCA9IGZpbHRlclBsYWluT2JqZWN0O1xuZnVuY3Rpb24gZmlsdGVyRnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5maWx0ZXJGdW5jdGlvbiA9IGZpbHRlckZ1bmN0aW9uO1xuY29uc3QgZmlsdGVySGFzTGVuZ3RoID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKGlucHV0ID09IG51bGwgfHwgJ251bWJlcnxib29sZWFufGZ1bmN0aW9uJy5pbmNsdWRlcyh0eXBlb2YgaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGlucHV0Lmxlbmd0aCA9PT0gJ251bWJlcic7XG59O1xuZXhwb3J0cy5maWx0ZXJIYXNMZW5ndGggPSBmaWx0ZXJIYXNMZW5ndGg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcmd1bWVudC1maWx0ZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeGl0Q29kZXMgPSB2b2lkIDA7XG4vKipcbiAqIEtub3duIHByb2Nlc3MgZXhpdCBjb2RlcyB1c2VkIGJ5IHRoZSB0YXNrIHBhcnNlcnMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gZXJyb3JcbiAqIHdhcyBvbmUgdGhleSBjYW4gYXV0b21hdGljYWxseSBoYW5kbGVcbiAqL1xudmFyIEV4aXRDb2RlcztcbihmdW5jdGlvbiAoRXhpdENvZGVzKSB7XG4gICAgRXhpdENvZGVzW0V4aXRDb2Rlc1tcIlNVQ0NFU1NcIl0gPSAwXSA9IFwiU1VDQ0VTU1wiO1xuICAgIEV4aXRDb2Rlc1tFeGl0Q29kZXNbXCJFUlJPUlwiXSA9IDFdID0gXCJFUlJPUlwiO1xuICAgIEV4aXRDb2Rlc1tFeGl0Q29kZXNbXCJVTkNMRUFOXCJdID0gMTI4XSA9IFwiVU5DTEVBTlwiO1xufSkoRXhpdENvZGVzID0gZXhwb3J0cy5FeGl0Q29kZXMgfHwgKGV4cG9ydHMuRXhpdENvZGVzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4aXQtY29kZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdE91dHB1dFN0cmVhbXMgPSB2b2lkIDA7XG5jbGFzcyBHaXRPdXRwdXRTdHJlYW1zIHtcbiAgICBjb25zdHJ1Y3RvcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICB0aGlzLnN0ZE91dCA9IHN0ZE91dDtcbiAgICAgICAgdGhpcy5zdGRFcnIgPSBzdGRFcnI7XG4gICAgfVxuICAgIGFzU3RyaW5ncygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHaXRPdXRwdXRTdHJlYW1zKHRoaXMuc3RkT3V0LnRvU3RyaW5nKCd1dGY4JyksIHRoaXMuc3RkRXJyLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0T3V0cHV0U3RyZWFtcyA9IEdpdE91dHB1dFN0cmVhbXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtb3V0cHV0LXN0cmVhbXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbW90ZUxpbmVQYXJzZXIgPSBleHBvcnRzLkxpbmVQYXJzZXIgPSB2b2lkIDA7XG5jbGFzcyBMaW5lUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihyZWdFeHAsIHVzZU1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICAgIHRoaXMucGFyc2UgPSAobGluZSwgdGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TWF0Y2hlcygpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZWdFeHAuZXZlcnkoKHJlZywgaW5kZXgpID0+IHRoaXMuYWRkTWF0Y2gocmVnLCBpbmRleCwgbGluZShpbmRleCkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZU1hdGNoZXModGFyZ2V0LCB0aGlzLnByZXBhcmVNYXRjaGVzKCkpICE9PSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcmVnRXhwID0gQXJyYXkuaXNBcnJheShyZWdFeHApID8gcmVnRXhwIDogW3JlZ0V4cF07XG4gICAgICAgIGlmICh1c2VNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnVzZU1hdGNoZXMgPSB1c2VNYXRjaGVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB1c2VNYXRjaGVzKHRhcmdldCwgbWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMaW5lUGFyc2VyOnVzZU1hdGNoZXMgbm90IGltcGxlbWVudGVkYCk7XG4gICAgfVxuICAgIHJlc2V0TWF0Y2hlcygpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIHByZXBhcmVNYXRjaGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaGVzO1xuICAgIH1cbiAgICBhZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWQgPSBsaW5lICYmIHJlZy5leGVjKGxpbmUpO1xuICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoTWF0Y2goaW5kZXgsIG1hdGNoZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIW1hdGNoZWQ7XG4gICAgfVxuICAgIHB1c2hNYXRjaChfaW5kZXgsIG1hdGNoZWQpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzLnB1c2goLi4ubWF0Y2hlZC5zbGljZSgxKSk7XG4gICAgfVxufVxuZXhwb3J0cy5MaW5lUGFyc2VyID0gTGluZVBhcnNlcjtcbmNsYXNzIFJlbW90ZUxpbmVQYXJzZXIgZXh0ZW5kcyBMaW5lUGFyc2VyIHtcbiAgICBhZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKSB7XG4gICAgICAgIHJldHVybiAvXnJlbW90ZTpcXHMvLnRlc3QoU3RyaW5nKGxpbmUpKSAmJiBzdXBlci5hZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKTtcbiAgICB9XG4gICAgcHVzaE1hdGNoKGluZGV4LCBtYXRjaGVkKSB7XG4gICAgICAgIGlmIChpbmRleCA+IDAgfHwgbWF0Y2hlZC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzdXBlci5wdXNoTWF0Y2goaW5kZXgsIG1hdGNoZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZW1vdGVMaW5lUGFyc2VyID0gUmVtb3RlTGluZVBhcnNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmUtcGFyc2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVJbnN0YW5jZUNvbmZpZyA9IHZvaWQgMDtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGJpbmFyeTogJ2dpdCcsXG4gICAgbWF4Q29uY3VycmVudFByb2Nlc3NlczogNSxcbiAgICBjb25maWc6IFtdLFxufTtcbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlQ29uZmlnKC4uLm9wdGlvbnMpIHtcbiAgICBjb25zdCBiYXNlRGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBiYXNlRGlyIH0sIGRlZmF1bHRPcHRpb25zKSwgLi4uKG9wdGlvbnMuZmlsdGVyKG8gPT4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8pKSk7XG4gICAgY29uZmlnLmJhc2VEaXIgPSBjb25maWcuYmFzZURpciB8fCBiYXNlRGlyO1xuICAgIHJldHVybiBjb25maWc7XG59XG5leHBvcnRzLmNyZWF0ZUluc3RhbmNlQ29uZmlnID0gY3JlYXRlSW5zdGFuY2VDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGUtZ2l0LW9wdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudCA9IGV4cG9ydHMudHJhaWxpbmdPcHRpb25zQXJndW1lbnQgPSBleHBvcnRzLmdldFRyYWlsaW5nT3B0aW9ucyA9IGV4cG9ydHMuYXBwZW5kVGFza09wdGlvbnMgPSB2b2lkIDA7XG5jb25zdCBhcmd1bWVudF9maWx0ZXJzXzEgPSByZXF1aXJlKFwiLi9hcmd1bWVudC1maWx0ZXJzXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmZ1bmN0aW9uIGFwcGVuZFRhc2tPcHRpb25zKG9wdGlvbnMsIGNvbW1hbmRzID0gW10pIHtcbiAgICBpZiAoIWFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGNvbW1hbmRzLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgIGlmIChhcmd1bWVudF9maWx0ZXJzXzEuZmlsdGVyUHJpbWl0aXZlcyh2YWx1ZSwgWydib29sZWFuJ10pKSB7XG4gICAgICAgICAgICBjb21tYW5kcy5wdXNoKGtleSArICc9JyArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbW1hbmRzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgfSwgY29tbWFuZHMpO1xufVxuZXhwb3J0cy5hcHBlbmRUYXNrT3B0aW9ucyA9IGFwcGVuZFRhc2tPcHRpb25zO1xuZnVuY3Rpb24gZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3MsIGluaXRpYWxQcmltaXRpdmUgPSAwLCBvYmplY3RPbmx5ID0gZmFsc2UpIHtcbiAgICBjb25zdCBjb21tYW5kID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGluaXRpYWxQcmltaXRpdmUgPCAwID8gYXJncy5sZW5ndGggOiBpbml0aWFsUHJpbWl0aXZlOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgaWYgKCdzdHJpbmd8bnVtYmVyJy5pbmNsdWRlcyh0eXBlb2YgYXJnc1tpXSkpIHtcbiAgICAgICAgICAgIGNvbW1hbmQucHVzaChTdHJpbmcoYXJnc1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZFRhc2tPcHRpb25zKHRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3MpLCBjb21tYW5kKTtcbiAgICBpZiAoIW9iamVjdE9ubHkpIHtcbiAgICAgICAgY29tbWFuZC5wdXNoKC4uLnRyYWlsaW5nQXJyYXlBcmd1bWVudChhcmdzKSk7XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kO1xufVxuZXhwb3J0cy5nZXRUcmFpbGluZ09wdGlvbnMgPSBnZXRUcmFpbGluZ09wdGlvbnM7XG5mdW5jdGlvbiB0cmFpbGluZ0FycmF5QXJndW1lbnQoYXJncykge1xuICAgIGNvbnN0IGhhc1RyYWlsaW5nQ2FsbGJhY2sgPSB0eXBlb2YgdXRpbF8xLmxhc3QoYXJncykgPT09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJUeXBlKHV0aWxfMS5sYXN0KGFyZ3MsIGhhc1RyYWlsaW5nQ2FsbGJhY2sgPyAxIDogMCksIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJBcnJheSwgW10pO1xufVxuLyoqXG4gKiBHaXZlbiBhbnkgbnVtYmVyIG9mIGFyZ3VtZW50cywgcmV0dXJucyB0aGUgdHJhaWxpbmcgb3B0aW9ucyBhcmd1bWVudCwgaWdub3JpbmcgYSB0cmFpbGluZyBmdW5jdGlvbiBhcmd1bWVudFxuICogaWYgdGhlcmUgaXMgb25lLiBXaGVuIG5vdCBmb3VuZCwgdGhlIHJldHVybiB2YWx1ZSBpcyBudWxsLlxuICovXG5mdW5jdGlvbiB0cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmdzKSB7XG4gICAgY29uc3QgaGFzVHJhaWxpbmdDYWxsYmFjayA9IGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJGdW5jdGlvbih1dGlsXzEubGFzdChhcmdzKSk7XG4gICAgcmV0dXJuIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJUeXBlKHV0aWxfMS5sYXN0KGFyZ3MsIGhhc1RyYWlsaW5nQ2FsbGJhY2sgPyAxIDogMCksIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJQbGFpbk9iamVjdCk7XG59XG5leHBvcnRzLnRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50ID0gdHJhaWxpbmdPcHRpb25zQXJndW1lbnQ7XG4vKipcbiAqIFJldHVybnMgZWl0aGVyIHRoZSBzb3VyY2UgYXJndW1lbnQgd2hlbiBpdCBpcyBhIGBGdW5jdGlvbmAsIG9yIHRoZSBkZWZhdWx0XG4gKiBgTk9PUGAgZnVuY3Rpb24gY29uc3RhbnRcbiAqL1xuZnVuY3Rpb24gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3MsIGluY2x1ZGVOb29wID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdXRpbF8xLmFzRnVuY3Rpb24odXRpbF8xLmxhc3QoYXJncykpO1xuICAgIHJldHVybiBpbmNsdWRlTm9vcCB8fCB1dGlsXzEuaXNVc2VyRnVuY3Rpb24oY2FsbGJhY2spID8gY2FsbGJhY2sgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudCA9IHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stb3B0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VTdHJpbmdSZXNwb25zZSA9IGV4cG9ydHMuY2FsbFRhc2tQYXJzZXIgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZnVuY3Rpb24gY2FsbFRhc2tQYXJzZXIocGFyc2VyLCBzdHJlYW1zKSB7XG4gICAgcmV0dXJuIHBhcnNlcihzdHJlYW1zLnN0ZE91dCwgc3RyZWFtcy5zdGRFcnIpO1xufVxuZXhwb3J0cy5jYWxsVGFza1BhcnNlciA9IGNhbGxUYXNrUGFyc2VyO1xuZnVuY3Rpb24gcGFyc2VTdHJpbmdSZXNwb25zZShyZXN1bHQsIHBhcnNlcnMsIC4uLnRleHRzKSB7XG4gICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGluZXMgPSB1dGlsXzEudG9MaW5lc1dpdGhDb250ZW50KHRleHQpLCBpID0gMCwgbWF4ID0gbGluZXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSAob2Zmc2V0ID0gMCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgoaSArIG9mZnNldCkgPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVzW2kgKyBvZmZzZXRdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhcnNlcnMuc29tZSgoeyBwYXJzZSB9KSA9PiBwYXJzZShsaW5lLCByZXN1bHQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlU3RyaW5nUmVzcG9uc2UgPSBwYXJzZVN0cmluZ1Jlc3BvbnNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFzay1wYXJzZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hcmd1bWVudC1maWx0ZXJzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9leGl0LWNvZGVzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9naXQtb3V0cHV0LXN0cmVhbXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2xpbmUtcGFyc2VyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zaW1wbGUtZ2l0LW9wdGlvbnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3Rhc2stb3B0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGFzay1wYXJzZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNoZWNrSXNCYXJlUmVwb1Rhc2sgPSBleHBvcnRzLmNoZWNrSXNSZXBvUm9vdFRhc2sgPSBleHBvcnRzLmNoZWNrSXNSZXBvVGFzayA9IGV4cG9ydHMuQ2hlY2tSZXBvQWN0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgQ2hlY2tSZXBvQWN0aW9ucztcbihmdW5jdGlvbiAoQ2hlY2tSZXBvQWN0aW9ucykge1xuICAgIENoZWNrUmVwb0FjdGlvbnNbXCJCQVJFXCJdID0gXCJiYXJlXCI7XG4gICAgQ2hlY2tSZXBvQWN0aW9uc1tcIklOX1RSRUVcIl0gPSBcInRyZWVcIjtcbiAgICBDaGVja1JlcG9BY3Rpb25zW1wiSVNfUkVQT19ST09UXCJdID0gXCJyb290XCI7XG59KShDaGVja1JlcG9BY3Rpb25zID0gZXhwb3J0cy5DaGVja1JlcG9BY3Rpb25zIHx8IChleHBvcnRzLkNoZWNrUmVwb0FjdGlvbnMgPSB7fSkpO1xuY29uc3Qgb25FcnJvciA9ICh7IGV4aXRDb2RlIH0sIGVycm9yLCBkb25lLCBmYWlsKSA9PiB7XG4gICAgaWYgKGV4aXRDb2RlID09PSB1dGlsc18xLkV4aXRDb2Rlcy5VTkNMRUFOICYmIGlzTm90UmVwb01lc3NhZ2UoZXJyb3IpKSB7XG4gICAgICAgIHJldHVybiBkb25lKEJ1ZmZlci5mcm9tKCdmYWxzZScpKTtcbiAgICB9XG4gICAgZmFpbChlcnJvcik7XG59O1xuY29uc3QgcGFyc2VyID0gKHRleHQpID0+IHtcbiAgICByZXR1cm4gdGV4dC50cmltKCkgPT09ICd0cnVlJztcbn07XG5mdW5jdGlvbiBjaGVja0lzUmVwb1Rhc2soYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSBDaGVja1JlcG9BY3Rpb25zLkJBUkU6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tJc0JhcmVSZXBvVGFzaygpO1xuICAgICAgICBjYXNlIENoZWNrUmVwb0FjdGlvbnMuSVNfUkVQT19ST09UOlxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrSXNSZXBvUm9vdFRhc2soKTtcbiAgICB9XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jldi1wYXJzZScsICctLWlzLWluc2lkZS13b3JrLXRyZWUnXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBvbkVycm9yLFxuICAgICAgICBwYXJzZXIsXG4gICAgfTtcbn1cbmV4cG9ydHMuY2hlY2tJc1JlcG9UYXNrID0gY2hlY2tJc1JlcG9UYXNrO1xuZnVuY3Rpb24gY2hlY2tJc1JlcG9Sb290VGFzaygpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmV2LXBhcnNlJywgJy0tZ2l0LWRpciddO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIG9uRXJyb3IsXG4gICAgICAgIHBhcnNlcihwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gL15cXC4oZ2l0KT8kLy50ZXN0KHBhdGgudHJpbSgpKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lzUmVwb1Jvb3RUYXNrID0gY2hlY2tJc1JlcG9Sb290VGFzaztcbmZ1bmN0aW9uIGNoZWNrSXNCYXJlUmVwb1Rhc2soKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jldi1wYXJzZScsICctLWlzLWJhcmUtcmVwb3NpdG9yeSddO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIG9uRXJyb3IsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lzQmFyZVJlcG9UYXNrID0gY2hlY2tJc0JhcmVSZXBvVGFzaztcbmZ1bmN0aW9uIGlzTm90UmVwb01lc3NhZ2UoZXJyb3IpIHtcbiAgICByZXR1cm4gLyhOb3QgYSBnaXQgcmVwb3NpdG9yeXxLZWluIEdpdC1SZXBvc2l0b3J5KS9pLnRlc3QoU3RyaW5nKGVycm9yKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGVjay1pcy1yZXBvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbGVhblN1bW1hcnlQYXJzZXIgPSBleHBvcnRzLkNsZWFuUmVzcG9uc2UgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ2xlYW5SZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IoZHJ5UnVuKSB7XG4gICAgICAgIHRoaXMuZHJ5UnVuID0gZHJ5UnVuO1xuICAgICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb2xkZXJzID0gW107XG4gICAgfVxufVxuZXhwb3J0cy5DbGVhblJlc3BvbnNlID0gQ2xlYW5SZXNwb25zZTtcbmNvbnN0IHJlbW92YWxSZWdleHAgPSAvXlthLXpdK1xccyovaTtcbmNvbnN0IGRyeVJ1blJlbW92YWxSZWdleHAgPSAvXlthLXpdK1xccytbYS16XStcXHMqL2k7XG5jb25zdCBpc0ZvbGRlclJlZ2V4cCA9IC9cXC8kLztcbmZ1bmN0aW9uIGNsZWFuU3VtbWFyeVBhcnNlcihkcnlSdW4sIHRleHQpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gbmV3IENsZWFuUmVzcG9uc2UoZHJ5UnVuKTtcbiAgICBjb25zdCByZWdleHAgPSBkcnlSdW4gPyBkcnlSdW5SZW1vdmFsUmVnZXhwIDogcmVtb3ZhbFJlZ2V4cDtcbiAgICB1dGlsc18xLnRvTGluZXNXaXRoQ29udGVudCh0ZXh0KS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVkID0gbGluZS5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuICAgICAgICBzdW1tYXJ5LnBhdGhzLnB1c2gocmVtb3ZlZCk7XG4gICAgICAgIChpc0ZvbGRlclJlZ2V4cC50ZXN0KHJlbW92ZWQpID8gc3VtbWFyeS5mb2xkZXJzIDogc3VtbWFyeS5maWxlcykucHVzaChyZW1vdmVkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VtbWFyeTtcbn1cbmV4cG9ydHMuY2xlYW5TdW1tYXJ5UGFyc2VyID0gY2xlYW5TdW1tYXJ5UGFyc2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xlYW5TdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0VtcHR5VGFzayA9IGV4cG9ydHMuaXNCdWZmZXJUYXNrID0gZXhwb3J0cy5zdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrID0gZXhwb3J0cy5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrID0gZXhwb3J0cy5jb25maWd1cmF0aW9uRXJyb3JUYXNrID0gZXhwb3J0cy5hZGhvY0V4ZWNUYXNrID0gZXhwb3J0cy5FTVBUWV9DT01NQU5EUyA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy90YXNrLWNvbmZpZ3VyYXRpb24tZXJyb3JcIik7XG5leHBvcnRzLkVNUFRZX0NPTU1BTkRTID0gW107XG5mdW5jdGlvbiBhZGhvY0V4ZWNUYXNrKHBhcnNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBleHBvcnRzLkVNUFRZX0NPTU1BTkRTLFxuICAgICAgICBmb3JtYXQ6ICdlbXB0eScsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5hZGhvY0V4ZWNUYXNrID0gYWRob2NFeGVjVGFzaztcbmZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogZXhwb3J0cy5FTVBUWV9DT01NQU5EUyxcbiAgICAgICAgZm9ybWF0OiAnZW1wdHknLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gbmV3IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xLlRhc2tDb25maWd1cmF0aW9uRXJyb3IoZXJyb3IpIDogZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5jb25maWd1cmF0aW9uRXJyb3JUYXNrID0gY29uZmlndXJhdGlvbkVycm9yVGFzaztcbmZ1bmN0aW9uIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRyaW1tZWQgPSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJpbW1lZCA/IFN0cmluZyh0ZXh0KS50cmltKCkgOiB0ZXh0O1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2sgPSBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrO1xuZnVuY3Rpb24gc3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzayhjb21tYW5kcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICdidWZmZXInLFxuICAgICAgICBwYXJzZXIoYnVmZmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnN0cmFpZ2h0VGhyb3VnaEJ1ZmZlclRhc2sgPSBzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrO1xuZnVuY3Rpb24gaXNCdWZmZXJUYXNrKHRhc2spIHtcbiAgICByZXR1cm4gdGFzay5mb3JtYXQgPT09ICdidWZmZXInO1xufVxuZXhwb3J0cy5pc0J1ZmZlclRhc2sgPSBpc0J1ZmZlclRhc2s7XG5mdW5jdGlvbiBpc0VtcHR5VGFzayh0YXNrKSB7XG4gICAgcmV0dXJuIHRhc2suZm9ybWF0ID09PSAnZW1wdHknIHx8ICF0YXNrLmNvbW1hbmRzLmxlbmd0aDtcbn1cbmV4cG9ydHMuaXNFbXB0eVRhc2sgPSBpc0VtcHR5VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQ2xlYW5PcHRpb25zQXJyYXkgPSBleHBvcnRzLmNsZWFuVGFzayA9IGV4cG9ydHMuY2xlYW5XaXRoT3B0aW9uc1Rhc2sgPSBleHBvcnRzLkNsZWFuT3B0aW9ucyA9IGV4cG9ydHMuQ09ORklHX0VSUk9SX1VOS05PV05fT1BUSU9OID0gZXhwb3J0cy5DT05GSUdfRVJST1JfTU9ERV9SRVFVSVJFRCA9IGV4cG9ydHMuQ09ORklHX0VSUk9SX0lOVEVSQUNUSVZFX01PREUgPSB2b2lkIDA7XG5jb25zdCBDbGVhblN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQ2xlYW5TdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5leHBvcnRzLkNPTkZJR19FUlJPUl9JTlRFUkFDVElWRV9NT0RFID0gJ0dpdCBjbGVhbiBpbnRlcmFjdGl2ZSBtb2RlIGlzIG5vdCBzdXBwb3J0ZWQnO1xuZXhwb3J0cy5DT05GSUdfRVJST1JfTU9ERV9SRVFVSVJFRCA9ICdHaXQgY2xlYW4gbW9kZSBwYXJhbWV0ZXIgKFwiblwiIG9yIFwiZlwiKSBpcyByZXF1aXJlZCc7XG5leHBvcnRzLkNPTkZJR19FUlJPUl9VTktOT1dOX09QVElPTiA9ICdHaXQgY2xlYW4gdW5rbm93biBvcHRpb24gZm91bmQgaW46ICc7XG4vKipcbiAqIEFsbCBzdXBwb3J0ZWQgb3B0aW9uIHN3aXRjaGVzIGF2YWlsYWJsZSBmb3IgdXNlIGluIGEgYGdpdC5jbGVhbmAgb3BlcmF0aW9uXG4gKi9cbnZhciBDbGVhbk9wdGlvbnM7XG4oZnVuY3Rpb24gKENsZWFuT3B0aW9ucykge1xuICAgIENsZWFuT3B0aW9uc1tcIkRSWV9SVU5cIl0gPSBcIm5cIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJGT1JDRVwiXSA9IFwiZlwiO1xuICAgIENsZWFuT3B0aW9uc1tcIklHTk9SRURfSU5DTFVERURcIl0gPSBcInhcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJJR05PUkVEX09OTFlcIl0gPSBcIlhcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJFWENMVURJTkdcIl0gPSBcImVcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJRVUlFVFwiXSA9IFwicVwiO1xuICAgIENsZWFuT3B0aW9uc1tcIlJFQ1VSU0lWRVwiXSA9IFwiZFwiO1xufSkoQ2xlYW5PcHRpb25zID0gZXhwb3J0cy5DbGVhbk9wdGlvbnMgfHwgKGV4cG9ydHMuQ2xlYW5PcHRpb25zID0ge30pKTtcbmNvbnN0IENsZWFuT3B0aW9uVmFsdWVzID0gbmV3IFNldChbJ2knLCAuLi51dGlsc18xLmFzU3RyaW5nQXJyYXkoT2JqZWN0LnZhbHVlcyhDbGVhbk9wdGlvbnMpKV0pO1xuZnVuY3Rpb24gY2xlYW5XaXRoT3B0aW9uc1Rhc2sobW9kZSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IHsgY2xlYW5Nb2RlLCBvcHRpb25zLCB2YWxpZCB9ID0gZ2V0Q2xlYW5PcHRpb25zKG1vZGUpO1xuICAgIGlmICghY2xlYW5Nb2RlKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9NT0RFX1JFUVVJUkVEKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZC5vcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9VTktOT1dOX09QVElPTiArIEpTT04uc3RyaW5naWZ5KG1vZGUpKTtcbiAgICB9XG4gICAgb3B0aW9ucy5wdXNoKC4uLmN1c3RvbUFyZ3MpO1xuICAgIGlmIChvcHRpb25zLnNvbWUoaXNJbnRlcmFjdGl2ZU1vZGUpKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9JTlRFUkFDVElWRV9NT0RFKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZWFuVGFzayhjbGVhbk1vZGUsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jbGVhbldpdGhPcHRpb25zVGFzayA9IGNsZWFuV2l0aE9wdGlvbnNUYXNrO1xuZnVuY3Rpb24gY2xlYW5UYXNrKG1vZGUsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnY2xlYW4nLCBgLSR7bW9kZX1gLCAuLi5jdXN0b21BcmdzXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIENsZWFuU3VtbWFyeV8xLmNsZWFuU3VtbWFyeVBhcnNlcihtb2RlID09PSBDbGVhbk9wdGlvbnMuRFJZX1JVTiwgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5jbGVhblRhc2sgPSBjbGVhblRhc2s7XG5mdW5jdGlvbiBpc0NsZWFuT3B0aW9uc0FycmF5KGlucHV0KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpICYmIGlucHV0LmV2ZXJ5KHRlc3QgPT4gQ2xlYW5PcHRpb25WYWx1ZXMuaGFzKHRlc3QpKTtcbn1cbmV4cG9ydHMuaXNDbGVhbk9wdGlvbnNBcnJheSA9IGlzQ2xlYW5PcHRpb25zQXJyYXk7XG5mdW5jdGlvbiBnZXRDbGVhbk9wdGlvbnMoaW5wdXQpIHtcbiAgICBsZXQgY2xlYW5Nb2RlO1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHZhbGlkID0geyBjbGVhbk1vZGU6IGZhbHNlLCBvcHRpb25zOiB0cnVlIH07XG4gICAgaW5wdXQucmVwbGFjZSgvW15hLXpdaS9nLCAnJykuc3BsaXQoJycpLmZvckVhY2goY2hhciA9PiB7XG4gICAgICAgIGlmIChpc0NsZWFuTW9kZShjaGFyKSkge1xuICAgICAgICAgICAgY2xlYW5Nb2RlID0gY2hhcjtcbiAgICAgICAgICAgIHZhbGlkLmNsZWFuTW9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZC5vcHRpb25zID0gdmFsaWQub3B0aW9ucyAmJiBpc0tub3duT3B0aW9uKG9wdGlvbnNbb3B0aW9ucy5sZW5ndGhdID0gKGAtJHtjaGFyfWApKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFuTW9kZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgdmFsaWQsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzQ2xlYW5Nb2RlKGNsZWFuTW9kZSkge1xuICAgIHJldHVybiBjbGVhbk1vZGUgPT09IENsZWFuT3B0aW9ucy5GT1JDRSB8fCBjbGVhbk1vZGUgPT09IENsZWFuT3B0aW9ucy5EUllfUlVOO1xufVxuZnVuY3Rpb24gaXNLbm93bk9wdGlvbihvcHRpb24pIHtcbiAgICByZXR1cm4gL14tW2Etel0kL2kudGVzdChvcHRpb24pICYmIENsZWFuT3B0aW9uVmFsdWVzLmhhcyhvcHRpb24uY2hhckF0KDEpKTtcbn1cbmZ1bmN0aW9uIGlzSW50ZXJhY3RpdmVNb2RlKG9wdGlvbikge1xuICAgIGlmICgvXi1bXlxcLV0vLnRlc3Qob3B0aW9uKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmluZGV4T2YoJ2knKSA+IDA7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb24gPT09ICctLWludGVyYWN0aXZlJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb25maWdMaXN0UGFyc2VyID0gZXhwb3J0cy5Db25maWdMaXN0ID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENvbmZpZ0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgIHRoaXMudmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgZ2V0IGFsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hbGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2FsbCA9IHRoaXMuZmlsZXMucmVkdWNlKChhbGwsIGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbGwsIHRoaXMudmFsdWVzW2ZpbGVdKTtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWxsO1xuICAgIH1cbiAgICBhZGRGaWxlKGZpbGUpIHtcbiAgICAgICAgaWYgKCEoZmlsZSBpbiB0aGlzLnZhbHVlcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhdGVzdCA9IHV0aWxzXzEubGFzdCh0aGlzLmZpbGVzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ZpbGVdID0gbGF0ZXN0ID8gT2JqZWN0LmNyZWF0ZSh0aGlzLnZhbHVlc1tsYXRlc3RdKSA6IHt9O1xuICAgICAgICAgICAgdGhpcy5maWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tmaWxlXTtcbiAgICB9XG4gICAgYWRkVmFsdWUoZmlsZSwga2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmFkZEZpbGUoZmlsZSk7XG4gICAgICAgIGlmICghdmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhbHVlc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICAgIHZhbHVlc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSBbdmFsdWVzW2tleV0sIHZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hbGwgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuZXhwb3J0cy5Db25maWdMaXN0ID0gQ29uZmlnTGlzdDtcbmZ1bmN0aW9uIGNvbmZpZ0xpc3RQYXJzZXIodGV4dCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWdMaXN0KCk7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXDAnKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbGluZXMubGVuZ3RoIC0gMTsgaSA8IG1heDspIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGNvbmZpZ0ZpbGVQYXRoKGxpbmVzW2krK10pO1xuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSB1dGlsc18xLnNwbGl0T24obGluZXNbaSsrXSwgJ1xcbicpO1xuICAgICAgICBjb25maWcuYWRkVmFsdWUoZmlsZSwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG59XG5leHBvcnRzLmNvbmZpZ0xpc3RQYXJzZXIgPSBjb25maWdMaXN0UGFyc2VyO1xuZnVuY3Rpb24gY29uZmlnRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICByZXR1cm4gZmlsZVBhdGgucmVwbGFjZSgvXihmaWxlKTovLCAnJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db25maWdMaXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRDb25maWdTY29wZSA9IHZvaWQgMDtcbmNvbnN0IENvbmZpZ0xpc3RfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQ29uZmlnTGlzdFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgR2l0Q29uZmlnU2NvcGU7XG4oZnVuY3Rpb24gKEdpdENvbmZpZ1Njb3BlKSB7XG4gICAgR2l0Q29uZmlnU2NvcGVbXCJzeXN0ZW1cIl0gPSBcInN5c3RlbVwiO1xuICAgIEdpdENvbmZpZ1Njb3BlW1wiZ2xvYmFsXCJdID0gXCJnbG9iYWxcIjtcbiAgICBHaXRDb25maWdTY29wZVtcImxvY2FsXCJdID0gXCJsb2NhbFwiO1xuICAgIEdpdENvbmZpZ1Njb3BlW1wid29ya3RyZWVcIl0gPSBcIndvcmt0cmVlXCI7XG59KShHaXRDb25maWdTY29wZSA9IGV4cG9ydHMuR2l0Q29uZmlnU2NvcGUgfHwgKGV4cG9ydHMuR2l0Q29uZmlnU2NvcGUgPSB7fSkpO1xuZnVuY3Rpb24gYXNDb25maWdTY29wZShzY29wZSkge1xuICAgIGlmICh0eXBlb2Ygc2NvcGUgPT09ICdzdHJpbmcnICYmIEdpdENvbmZpZ1Njb3BlLmhhc093blByb3BlcnR5KHNjb3BlKSkge1xuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgfVxuICAgIHJldHVybiBHaXRDb25maWdTY29wZS5sb2NhbDtcbn1cbmZ1bmN0aW9uIGFkZENvbmZpZ1Rhc2soa2V5LCB2YWx1ZSwgYXBwZW5kLCBzY29wZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjb25maWcnLCBgLS0ke3Njb3BlfWBdO1xuICAgIGlmIChhcHBlbmQpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaCgnLS1hZGQnKTtcbiAgICB9XG4gICAgY29tbWFuZHMucHVzaChrZXksIHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gbGlzdENvbmZpZ1Rhc2soKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IFsnY29uZmlnJywgJy0tbGlzdCcsICctLXNob3ctb3JpZ2luJywgJy0tbnVsbCddLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ29uZmlnTGlzdF8xLmNvbmZpZ0xpc3RQYXJzZXIodGV4dCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRfMSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRDb25maWcoa2V5LCB2YWx1ZSwgLi4ucmVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soYWRkQ29uZmlnVGFzayhrZXksIHZhbHVlLCByZXN0WzBdID09PSB0cnVlLCBhc0NvbmZpZ1Njb3BlKHJlc3RbMV0pKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpc3RDb25maWcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhsaXN0Q29uZmlnVGFzaygpLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRSZXNldE1vZGUgPSBleHBvcnRzLnJlc2V0VGFzayA9IGV4cG9ydHMuUmVzZXRNb2RlID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbnZhciBSZXNldE1vZGU7XG4oZnVuY3Rpb24gKFJlc2V0TW9kZSkge1xuICAgIFJlc2V0TW9kZVtcIk1JWEVEXCJdID0gXCJtaXhlZFwiO1xuICAgIFJlc2V0TW9kZVtcIlNPRlRcIl0gPSBcInNvZnRcIjtcbiAgICBSZXNldE1vZGVbXCJIQVJEXCJdID0gXCJoYXJkXCI7XG4gICAgUmVzZXRNb2RlW1wiTUVSR0VcIl0gPSBcIm1lcmdlXCI7XG4gICAgUmVzZXRNb2RlW1wiS0VFUFwiXSA9IFwia2VlcFwiO1xufSkoUmVzZXRNb2RlID0gZXhwb3J0cy5SZXNldE1vZGUgfHwgKGV4cG9ydHMuUmVzZXRNb2RlID0ge30pKTtcbmNvbnN0IFJlc2V0TW9kZXMgPSBBcnJheS5mcm9tKE9iamVjdC52YWx1ZXMoUmVzZXRNb2RlKSk7XG5mdW5jdGlvbiByZXNldFRhc2sobW9kZSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydyZXNldCddO1xuICAgIGlmIChpc1ZhbGlkUmVzZXRNb2RlKG1vZGUpKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goYC0tJHttb2RlfWApO1xuICAgIH1cbiAgICBjb21tYW5kcy5wdXNoKC4uLmN1c3RvbUFyZ3MpO1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcyk7XG59XG5leHBvcnRzLnJlc2V0VGFzayA9IHJlc2V0VGFzaztcbmZ1bmN0aW9uIGdldFJlc2V0TW9kZShtb2RlKSB7XG4gICAgaWYgKGlzVmFsaWRSZXNldE1vZGUobW9kZSkpIHtcbiAgICAgICAgcmV0dXJuIG1vZGU7XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZW9mIG1vZGUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIHJldHVybiBSZXNldE1vZGUuU09GVDtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0cy5nZXRSZXNldE1vZGUgPSBnZXRSZXNldE1vZGU7XG5mdW5jdGlvbiBpc1ZhbGlkUmVzZXRNb2RlKG1vZGUpIHtcbiAgICByZXR1cm4gUmVzZXRNb2Rlcy5pbmNsdWRlcyhtb2RlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc2V0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZ2l0X2NvbnN0cnVjdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1jb25zdHJ1Y3QtZXJyb3JcIik7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtZXJyb3JcIik7XG5jb25zdCBnaXRfcGx1Z2luX2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvZ2l0LXBsdWdpbi1lcnJvclwiKTtcbmNvbnN0IGdpdF9yZXNwb25zZV9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL3Rhc2stY29uZmlndXJhdGlvbi1lcnJvclwiKTtcbmNvbnN0IGNoZWNrX2lzX3JlcG9fMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL2NoZWNrLWlzLXJlcG9cIik7XG5jb25zdCBjbGVhbl8xID0gcmVxdWlyZShcIi4vdGFza3MvY2xlYW5cIik7XG5jb25zdCBjb25maWdfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL2NvbmZpZ1wiKTtcbmNvbnN0IHJlc2V0XzEgPSByZXF1aXJlKFwiLi90YXNrcy9yZXNldFwiKTtcbmNvbnN0IGFwaSA9IHtcbiAgICBDaGVja1JlcG9BY3Rpb25zOiBjaGVja19pc19yZXBvXzEuQ2hlY2tSZXBvQWN0aW9ucyxcbiAgICBDbGVhbk9wdGlvbnM6IGNsZWFuXzEuQ2xlYW5PcHRpb25zLFxuICAgIEdpdENvbmZpZ1Njb3BlOiBjb25maWdfMS5HaXRDb25maWdTY29wZSxcbiAgICBHaXRDb25zdHJ1Y3RFcnJvcjogZ2l0X2NvbnN0cnVjdF9lcnJvcl8xLkdpdENvbnN0cnVjdEVycm9yLFxuICAgIEdpdEVycm9yOiBnaXRfZXJyb3JfMS5HaXRFcnJvcixcbiAgICBHaXRQbHVnaW5FcnJvcjogZ2l0X3BsdWdpbl9lcnJvcl8xLkdpdFBsdWdpbkVycm9yLFxuICAgIEdpdFJlc3BvbnNlRXJyb3I6IGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IsXG4gICAgUmVzZXRNb2RlOiByZXNldF8xLlJlc2V0TW9kZSxcbiAgICBUYXNrQ29uZmlndXJhdGlvbkVycm9yOiB0YXNrX2NvbmZpZ3VyYXRpb25fZXJyb3JfMS5UYXNrQ29uZmlndXJhdGlvbkVycm9yLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwaTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29tbWFuZENvbmZpZ1ByZWZpeGluZ1BsdWdpbiA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBjb21tYW5kQ29uZmlnUHJlZml4aW5nUGx1Z2luKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCBwcmVmaXggPSB1dGlsc18xLnByZWZpeGVkQXJyYXkoY29uZmlndXJhdGlvbiwgJy1jJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NwYXduLmFyZ3MnLFxuICAgICAgICBhY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmVmaXgsIC4uLmRhdGFdO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW4gPSBjb21tYW5kQ29uZmlnUHJlZml4aW5nUGx1Z2luO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWFuZC1jb25maWctcHJlZml4aW5nLXBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXJyb3JEZXRlY3Rpb25QbHVnaW4gPSBleHBvcnRzLmVycm9yRGV0ZWN0aW9uSGFuZGxlciA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtZXJyb3JcIik7XG5mdW5jdGlvbiBpc1Rhc2tFcnJvcihyZXN1bHQpIHtcbiAgICByZXR1cm4gISEocmVzdWx0LmV4aXRDb2RlICYmIHJlc3VsdC5zdGRFcnIubGVuZ3RoKTtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShyZXN1bHQpIHtcbiAgICByZXR1cm4gQnVmZmVyLmNvbmNhdChbLi4ucmVzdWx0LnN0ZE91dCwgLi4ucmVzdWx0LnN0ZEVycl0pO1xufVxuZnVuY3Rpb24gZXJyb3JEZXRlY3Rpb25IYW5kbGVyKG92ZXJ3cml0ZSA9IGZhbHNlLCBpc0Vycm9yID0gaXNUYXNrRXJyb3IsIGVycm9yTWVzc2FnZSA9IGdldEVycm9yTWVzc2FnZSkge1xuICAgIHJldHVybiAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoKCFvdmVyd3JpdGUgJiYgZXJyb3IpIHx8ICFpc0Vycm9yKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlKHJlc3VsdCk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZXJyb3JEZXRlY3Rpb25IYW5kbGVyID0gZXJyb3JEZXRlY3Rpb25IYW5kbGVyO1xuZnVuY3Rpb24gZXJyb3JEZXRlY3Rpb25QbHVnaW4oY29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3Rhc2suZXJyb3InLFxuICAgICAgICBhY3Rpb24oZGF0YSwgY29udGV4dCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBjb25maWcoZGF0YS5lcnJvciwge1xuICAgICAgICAgICAgICAgIHN0ZEVycjogY29udGV4dC5zdGRFcnIsXG4gICAgICAgICAgICAgICAgc3RkT3V0OiBjb250ZXh0LnN0ZE91dCxcbiAgICAgICAgICAgICAgICBleGl0Q29kZTogY29udGV4dC5leGl0Q29kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGVycm9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBuZXcgZ2l0X2Vycm9yXzEuR2l0RXJyb3IodW5kZWZpbmVkLCBlcnJvci50b1N0cmluZygndXRmLTgnKSkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZXJyb3JEZXRlY3Rpb25QbHVnaW4gPSBlcnJvckRldGVjdGlvblBsdWdpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yLWRldGVjdGlvbi5wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsdWdpblN0b3JlID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBsdWdpblN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBhZGQocGx1Z2luKSB7XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXTtcbiAgICAgICAgdXRpbHNfMS5hc0FycmF5KHBsdWdpbikuZm9yRWFjaChwbHVnaW4gPT4gcGx1Z2luICYmIHRoaXMucGx1Z2lucy5hZGQodXRpbHNfMS5hcHBlbmQocGx1Z2lucywgcGx1Z2luKSkpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PiB0aGlzLnBsdWdpbnMuZGVsZXRlKHBsdWdpbikpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBleGVjKHR5cGUsIGRhdGEsIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IG91dHB1dCA9IGRhdGE7XG4gICAgICAgIGNvbnN0IGNvbnRleHR1YWwgPSBPYmplY3QuZnJlZXplKE9iamVjdC5jcmVhdGUoY29udGV4dCkpO1xuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW4udHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IHBsdWdpbi5hY3Rpb24ob3V0cHV0LCBjb250ZXh0dWFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn1cbmV4cG9ydHMuUGx1Z2luU3RvcmUgPSBQbHVnaW5TdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsdWdpbi1zdG9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJvZ3Jlc3NNb25pdG9yUGx1Z2luID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHByb2dyZXNzTW9uaXRvclBsdWdpbihwcm9ncmVzcykge1xuICAgIGNvbnN0IHByb2dyZXNzQ29tbWFuZCA9ICctLXByb2dyZXNzJztcbiAgICBjb25zdCBwcm9ncmVzc01ldGhvZHMgPSBbJ2NoZWNrb3V0JywgJ2Nsb25lJywgJ2ZldGNoJywgJ3B1bGwnLCAncHVzaCddO1xuICAgIGNvbnN0IG9uUHJvZ3Jlc3MgPSB7XG4gICAgICAgIHR5cGU6ICdzcGF3bi5hZnRlcicsXG4gICAgICAgIGFjdGlvbihfZGF0YSwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCFjb250ZXh0LmNvbW1hbmRzLmluY2x1ZGVzKHByb2dyZXNzQ29tbWFuZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBjb250ZXh0LnNwYXduZWQuc3RkZXJyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gL14oW2EtekEtWiBdKyk6XFxzKihcXGQrKSUgXFwoKFxcZCspXFwvKFxcZCspXFwpLy5leGVjKGNodW5rLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2dyZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBjb250ZXh0Lm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2U6IHByb2dyZXNzRXZlbnRTdGFnZShtZXNzYWdlWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHV0aWxzXzEuYXNOdW1iZXIobWVzc2FnZVsyXSksXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZDogdXRpbHNfMS5hc051bWJlcihtZXNzYWdlWzNdKSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHV0aWxzXzEuYXNOdW1iZXIobWVzc2FnZVs0XSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25BcmdzID0ge1xuICAgICAgICB0eXBlOiAnc3Bhd24uYXJncycsXG4gICAgICAgIGFjdGlvbihhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoIXByb2dyZXNzTWV0aG9kcy5pbmNsdWRlcyhjb250ZXh0Lm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLmluY2x1ZGluZyhhcmdzLCBwcm9ncmVzc0NvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gW29uQXJncywgb25Qcm9ncmVzc107XG59XG5leHBvcnRzLnByb2dyZXNzTW9uaXRvclBsdWdpbiA9IHByb2dyZXNzTW9uaXRvclBsdWdpbjtcbmZ1bmN0aW9uIHByb2dyZXNzRXZlbnRTdGFnZShpbnB1dCkge1xuICAgIHJldHVybiBTdHJpbmcoaW5wdXQudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcsIDEpKSB8fCAndW5rbm93bic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9ncmVzcy1tb25pdG9yLXBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZS1naXQtcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zcGF3bk9wdGlvbnNQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gc3Bhd25PcHRpb25zUGx1Z2luKHNwYXduT3B0aW9ucykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB1dGlsc18xLnBpY2soc3Bhd25PcHRpb25zLCBbJ3VpZCcsICdnaWQnXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NwYXduLm9wdGlvbnMnLFxuICAgICAgICBhY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIGRhdGEpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnNwYXduT3B0aW9uc1BsdWdpbiA9IHNwYXduT3B0aW9uc1BsdWdpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYXduLW9wdGlvbnMtcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50aW1lb3V0UGx1Z2luID0gdm9pZCAwO1xuY29uc3QgZ2l0X3BsdWdpbl9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtcGx1Z2luLWVycm9yXCIpO1xuZnVuY3Rpb24gdGltZW91dFBsdWdpbih7IGJsb2NrIH0pIHtcbiAgICBpZiAoYmxvY2sgPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnc3Bhd24uYWZ0ZXInLFxuICAgICAgICAgICAgYWN0aW9uKF9kYXRhLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBsZXQgdGltZW91dDtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB3YWl0KCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoa2lsbCwgYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjb250ZXh0LnNwYXduZWQuc3Rkb3V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2ZmKCdkYXRhJywgd2FpdCk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IGNvbnRleHQuc3Bhd25lZC5zdGRlcnIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vZmYoJ2RhdGEnLCB3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zcGF3bmVkLm9mZignZXhpdCcsIHN0b3ApO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNwYXduZWQub2ZmKCdjbG9zZScsIHN0b3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBraWxsKCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQua2lsbChuZXcgZ2l0X3BsdWdpbl9lcnJvcl8xLkdpdFBsdWdpbkVycm9yKHVuZGVmaW5lZCwgJ3RpbWVvdXQnLCBgYmxvY2sgdGltZW91dCByZWFjaGVkYCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2EgPSBjb250ZXh0LnNwYXduZWQuc3Rkb3V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub24oJ2RhdGEnLCB3YWl0KTtcbiAgICAgICAgICAgICAgICAoX2IgPSBjb250ZXh0LnNwYXduZWQuc3RkZXJyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub24oJ2RhdGEnLCB3YWl0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNwYXduZWQub24oJ2V4aXQnLCBzdG9wKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNwYXduZWQub24oJ2Nsb3NlJywgc3RvcCk7XG4gICAgICAgICAgICAgICAgd2FpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMudGltZW91dFBsdWdpbiA9IHRpbWVvdXRQbHVnaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1vdXQtcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29tbWFuZC1jb25maWctcHJlZml4aW5nLXBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZXJyb3ItZGV0ZWN0aW9uLnBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcGx1Z2luLXN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9wcm9ncmVzcy1tb25pdG9yLXBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2ltcGxlLWdpdC1wbHVnaW5cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NwYXduLW9wdGlvbnMtcGx1Z2luXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aW1vdXQtcGx1Z2luXCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRMb2dnZXIgPSBleHBvcnRzLmNyZWF0ZUxvZ2dlciA9IHZvaWQgMDtcbmNvbnN0IGRlYnVnXzEgPSByZXF1aXJlKFwiZGVidWdcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5kZWJ1Z18xLmRlZmF1bHQuZm9ybWF0dGVycy5MID0gKHZhbHVlKSA9PiBTdHJpbmcodXRpbHNfMS5maWx0ZXJIYXNMZW5ndGgodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogJy0nKTtcbmRlYnVnXzEuZGVmYXVsdC5mb3JtYXR0ZXJzLkIgPSAodmFsdWUpID0+IHtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoJ3V0ZjgnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWxzXzEub2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUxvZygpIHtcbiAgICByZXR1cm4gZGVidWdfMS5kZWZhdWx0KCdzaW1wbGUtZ2l0Jyk7XG59XG5mdW5jdGlvbiBwcmVmaXhlZExvZ2dlcih0bywgcHJlZml4LCBmb3J3YXJkKSB7XG4gICAgaWYgKCFwcmVmaXggfHwgIVN0cmluZyhwcmVmaXgpLnJlcGxhY2UoL1xccyovLCAnJykpIHtcbiAgICAgICAgcmV0dXJuICFmb3J3YXJkID8gdG8gOiAobWVzc2FnZSwgLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgdG8obWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgICAgICBmb3J3YXJkKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gKG1lc3NhZ2UsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdG8oYCVzICR7bWVzc2FnZX1gLCBwcmVmaXgsIC4uLmFyZ3MpO1xuICAgICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICAgICAgZm9yd2FyZChtZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjaGlsZExvZ2dlck5hbWUobmFtZSwgY2hpbGREZWJ1Z2dlciwgeyBuYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSB9KSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGROYW1lc3BhY2UgPSBjaGlsZERlYnVnZ2VyICYmIGNoaWxkRGVidWdnZXIubmFtZXNwYWNlIHx8ICcnO1xuICAgIGlmIChjaGlsZE5hbWVzcGFjZS5zdGFydHNXaXRoKHBhcmVudE5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkTmFtZXNwYWNlLnN1YnN0cihwYXJlbnROYW1lc3BhY2UubGVuZ3RoICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZE5hbWVzcGFjZSB8fCBwYXJlbnROYW1lc3BhY2U7XG59XG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIobGFiZWwsIHZlcmJvc2UsIGluaXRpYWxTdGVwLCBpbmZvRGVidWdnZXIgPSBjcmVhdGVMb2coKSkge1xuICAgIGNvbnN0IGxhYmVsUHJlZml4ID0gbGFiZWwgJiYgYFske2xhYmVsfV1gIHx8ICcnO1xuICAgIGNvbnN0IHNwYXduZWQgPSBbXTtcbiAgICBjb25zdCBkZWJ1Z0RlYnVnZ2VyID0gKHR5cGVvZiB2ZXJib3NlID09PSAnc3RyaW5nJykgPyBpbmZvRGVidWdnZXIuZXh0ZW5kKHZlcmJvc2UpIDogdmVyYm9zZTtcbiAgICBjb25zdCBrZXkgPSBjaGlsZExvZ2dlck5hbWUodXRpbHNfMS5maWx0ZXJUeXBlKHZlcmJvc2UsIHV0aWxzXzEuZmlsdGVyU3RyaW5nKSwgZGVidWdEZWJ1Z2dlciwgaW5mb0RlYnVnZ2VyKTtcbiAgICByZXR1cm4gc3RlcChpbml0aWFsU3RlcCk7XG4gICAgZnVuY3Rpb24gc2libGluZyhuYW1lLCBpbml0aWFsKSB7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmFwcGVuZChzcGF3bmVkLCBjcmVhdGVMb2dnZXIobGFiZWwsIGtleS5yZXBsYWNlKC9eW146XSsvLCBuYW1lKSwgaW5pdGlhbCwgaW5mb0RlYnVnZ2VyKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0ZXAocGhhc2UpIHtcbiAgICAgICAgY29uc3Qgc3RlcFByZWZpeCA9IHBoYXNlICYmIGBbJHtwaGFzZX1dYCB8fCAnJztcbiAgICAgICAgY29uc3QgZGVidWcgPSBkZWJ1Z0RlYnVnZ2VyICYmIHByZWZpeGVkTG9nZ2VyKGRlYnVnRGVidWdnZXIsIHN0ZXBQcmVmaXgpIHx8IHV0aWxzXzEuTk9PUDtcbiAgICAgICAgY29uc3QgaW5mbyA9IHByZWZpeGVkTG9nZ2VyKGluZm9EZWJ1Z2dlciwgYCR7bGFiZWxQcmVmaXh9ICR7c3RlcFByZWZpeH1gLCBkZWJ1Zyk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlYnVnRGVidWdnZXIgPyBkZWJ1ZyA6IGluZm8sIHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgc2libGluZyxcbiAgICAgICAgICAgIGluZm8sXG4gICAgICAgICAgICBzdGVwLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmNyZWF0ZUxvZ2dlciA9IGNyZWF0ZUxvZ2dlcjtcbi8qKlxuICogVGhlIGBHaXRMb2dnZXJgIGlzIHVzZWQgYnkgdGhlIG1haW4gYFNpbXBsZUdpdGAgcnVubmVyIHRvIGhhbmRsZSBsb2dnaW5nXG4gKiBhbnkgd2FybmluZ3Mgb3IgZXJyb3JzLlxuICovXG5jbGFzcyBHaXRMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKF9vdXQgPSBjcmVhdGVMb2coKSkge1xuICAgICAgICB0aGlzLl9vdXQgPSBfb3V0O1xuICAgICAgICB0aGlzLmVycm9yID0gcHJlZml4ZWRMb2dnZXIoX291dCwgJ1tFUlJPUl0nKTtcbiAgICAgICAgdGhpcy53YXJuID0gcHJlZml4ZWRMb2dnZXIoX291dCwgJ1tXQVJOXScpO1xuICAgIH1cbiAgICBzaWxlbnQoc2lsZW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChzaWxlbmNlICE9PSB0aGlzLl9vdXQuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbmFtZXNwYWNlIH0gPSB0aGlzLl9vdXQ7XG4gICAgICAgIGNvbnN0IGVudiA9IChwcm9jZXNzLmVudi5ERUJVRyB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIocyA9PiAhIXMpO1xuICAgICAgICBjb25zdCBoYXNPbiA9IGVudi5pbmNsdWRlcyhuYW1lc3BhY2UpO1xuICAgICAgICBjb25zdCBoYXNPZmYgPSBlbnYuaW5jbHVkZXMoYC0ke25hbWVzcGFjZX1gKTtcbiAgICAgICAgLy8gZW5hYmxpbmcgdGhlIGxvZ1xuICAgICAgICBpZiAoIXNpbGVuY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPZmYpIHtcbiAgICAgICAgICAgICAgICB1dGlsc18xLnJlbW92ZShlbnYsIGAtJHtuYW1lc3BhY2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnYucHVzaChuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc09uKSB7XG4gICAgICAgICAgICAgICAgdXRpbHNfMS5yZW1vdmUoZW52LCBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW52LnB1c2goYC0ke25hbWVzcGFjZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z18xLmRlZmF1bHQuZW5hYmxlKGVudi5qb2luKCcsJykpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0TG9nZ2VyID0gR2l0TG9nZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWxvZ2dlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFza3NQZW5kaW5nUXVldWUgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LWVycm9yXCIpO1xuY29uc3QgZ2l0X2xvZ2dlcl8xID0gcmVxdWlyZShcIi4uL2dpdC1sb2dnZXJcIik7XG5jbGFzcyBUYXNrc1BlbmRpbmdRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IobG9nTGFiZWwgPSAnR2l0RXhlY3V0b3InKSB7XG4gICAgICAgIHRoaXMubG9nTGFiZWwgPSBsb2dMYWJlbDtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHdpdGhQcm9ncmVzcyh0YXNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZS5nZXQodGFzayk7XG4gICAgfVxuICAgIGNyZWF0ZVByb2dyZXNzKHRhc2spIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IFRhc2tzUGVuZGluZ1F1ZXVlLmdldE5hbWUodGFzay5jb21tYW5kc1swXSk7XG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IGdpdF9sb2dnZXJfMS5jcmVhdGVMb2dnZXIodGhpcy5sb2dMYWJlbCwgbmFtZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YXNrLFxuICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHVzaCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5jcmVhdGVQcm9ncmVzcyh0YXNrKTtcbiAgICAgICAgcHJvZ3Jlc3MubG9nZ2VyKCdBZGRpbmcgdGFzayB0byB0aGUgcXVldWUsIGNvbW1hbmRzID0gJW8nLCB0YXNrLmNvbW1hbmRzKTtcbiAgICAgICAgdGhpcy5fcXVldWUuc2V0KHRhc2ssIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH1cbiAgICBmYXRhbChlcnIpIHtcbiAgICAgICAgZm9yIChjb25zdCBbdGFzaywgeyBsb2dnZXIgfV0gb2YgQXJyYXkuZnJvbSh0aGlzLl9xdWV1ZS5lbnRyaWVzKCkpKSB7XG4gICAgICAgICAgICBpZiAodGFzayA9PT0gZXJyLnRhc2spIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgRmFpbGVkICVvYCwgZXJyKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIoYEZhdGFsIGV4Y2VwdGlvbiwgYW55IGFzLXlldCB1bi1zdGFydGVkIHRhc2tzIHJ1biB0aHJvdWdoIHRoaXMgZXhlY3V0b3Igd2lsbCBub3QgYmUgYXR0ZW1wdGVkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgQSBmYXRhbCBleGNlcHRpb24gb2NjdXJyZWQgaW4gYSBwcmV2aW91cyB0YXNrLCB0aGUgcXVldWUgaGFzIGJlZW4gcHVyZ2VkOiAlb2AsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3F1ZXVlLnNpemUgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUXVldWUgc2l6ZSBzaG91bGQgYmUgemVybyBhZnRlciBmYXRhbDogJHt0aGlzLl9xdWV1ZS5zaXplfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBsZXRlKHRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLndpdGhQcm9ncmVzcyh0YXNrKTtcbiAgICAgICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXR0ZW1wdCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy53aXRoUHJvZ3Jlc3ModGFzayk7XG4gICAgICAgIGlmICghcHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBnaXRfZXJyb3JfMS5HaXRFcnJvcih1bmRlZmluZWQsICdUYXNrc1BlbmRpbmdRdWV1ZTogYXR0ZW1wdCBjYWxsZWQgZm9yIGFuIHVua25vd24gdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIHByb2dyZXNzLmxvZ2dlcignU3RhcnRpbmcgdGFzaycpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROYW1lKG5hbWUgPSAnZW1wdHknKSB7XG4gICAgICAgIHJldHVybiBgdGFzazoke25hbWV9OiR7KytUYXNrc1BlbmRpbmdRdWV1ZS5jb3VudGVyfWA7XG4gICAgfVxufVxuZXhwb3J0cy5UYXNrc1BlbmRpbmdRdWV1ZSA9IFRhc2tzUGVuZGluZ1F1ZXVlO1xuVGFza3NQZW5kaW5nUXVldWUuY291bnRlciA9IDA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YXNrcy1wZW5kaW5nLXF1ZXVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdEV4ZWN1dG9yQ2hhaW4gPSB2b2lkIDA7XG5jb25zdCBjaGlsZF9wcm9jZXNzXzEgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtZXJyb3JcIik7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi4vdGFza3MvdGFza1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCB0YXNrc19wZW5kaW5nX3F1ZXVlXzEgPSByZXF1aXJlKFwiLi90YXNrcy1wZW5kaW5nLXF1ZXVlXCIpO1xuY2xhc3MgR2l0RXhlY3V0b3JDaGFpbiB7XG4gICAgY29uc3RydWN0b3IoX2V4ZWN1dG9yLCBfc2NoZWR1bGVyLCBfcGx1Z2lucykge1xuICAgICAgICB0aGlzLl9leGVjdXRvciA9IF9leGVjdXRvcjtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGVyID0gX3NjaGVkdWxlcjtcbiAgICAgICAgdGhpcy5fcGx1Z2lucyA9IF9wbHVnaW5zO1xuICAgICAgICB0aGlzLl9jaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IG5ldyB0YXNrc19wZW5kaW5nX3F1ZXVlXzEuVGFza3NQZW5kaW5nUXVldWUoKTtcbiAgICB9XG4gICAgZ2V0IGJpbmFyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dG9yLmJpbmFyeTtcbiAgICB9XG4gICAgZ2V0IGN3ZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N3ZCB8fCB0aGlzLl9leGVjdXRvci5jd2Q7XG4gICAgfVxuICAgIHNldCBjd2QoY3dkKSB7XG4gICAgICAgIHRoaXMuX2N3ZCA9IGN3ZDtcbiAgICB9XG4gICAgZ2V0IGVudigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dG9yLmVudjtcbiAgICB9XG4gICAgZ2V0IG91dHB1dEhhbmRsZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRvci5vdXRwdXRIYW5kbGVyO1xuICAgIH1cbiAgICBjaGFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1c2godGFzaykge1xuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHRhc2spO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW4gPSB0aGlzLl9jaGFpbi50aGVuKCgpID0+IHRoaXMuYXR0ZW1wdFRhc2sodGFzaykpO1xuICAgIH1cbiAgICBhdHRlbXB0VGFzayh0YXNrKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBvblNjaGVkdWxlQ29tcGxldGUgPSB5aWVsZCB0aGlzLl9zY2hlZHVsZXIubmV4dCgpO1xuICAgICAgICAgICAgY29uc3Qgb25RdWV1ZUNvbXBsZXRlID0gKCkgPT4gdGhpcy5fcXVldWUuY29tcGxldGUodGFzayk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbG9nZ2VyIH0gPSB0aGlzLl9xdWV1ZS5hdHRlbXB0KHRhc2spO1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCAodGFza18xLmlzRW1wdHlUYXNrKHRhc2spXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5hdHRlbXB0RW1wdHlUYXNrKHRhc2ssIGxvZ2dlcilcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmF0dGVtcHRSZW1vdGVUYXNrKHRhc2ssIGxvZ2dlcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLm9uRmF0YWxFeGNlcHRpb24odGFzaywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBvblF1ZXVlQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICBvblNjaGVkdWxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uRmF0YWxFeGNlcHRpb24odGFzaywgZSkge1xuICAgICAgICBjb25zdCBnaXRFcnJvciA9IChlIGluc3RhbmNlb2YgZ2l0X2Vycm9yXzEuR2l0RXJyb3IpID8gT2JqZWN0LmFzc2lnbihlLCB7IHRhc2sgfSkgOiBuZXcgZ2l0X2Vycm9yXzEuR2l0RXJyb3IodGFzaywgZSAmJiBTdHJpbmcoZSkpO1xuICAgICAgICB0aGlzLl9jaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl9xdWV1ZS5mYXRhbChnaXRFcnJvcik7XG4gICAgICAgIHJldHVybiBnaXRFcnJvcjtcbiAgICB9XG4gICAgYXR0ZW1wdFJlbW90ZVRhc2sodGFzaywgbG9nZ2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5fcGx1Z2lucy5leGVjKCdzcGF3bi5hcmdzJywgWy4uLnRhc2suY29tbWFuZHNdLCBwbHVnaW5Db250ZXh0KHRhc2ssIHRhc2suY29tbWFuZHMpKTtcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IHlpZWxkIHRoaXMuZ2l0UmVzcG9uc2UodGFzaywgdGhpcy5iaW5hcnksIGFyZ3MsIHRoaXMub3V0cHV0SGFuZGxlciwgbG9nZ2VyLnN0ZXAoJ1NQQVdOJykpO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0U3RyZWFtcyA9IHlpZWxkIHRoaXMuaGFuZGxlVGFza0RhdGEodGFzaywgYXJncywgcmF3LCBsb2dnZXIuc3RlcCgnSEFORExFJykpO1xuICAgICAgICAgICAgbG9nZ2VyKGBwYXNzaW5nIHJlc3BvbnNlIHRvIHRhc2sncyBwYXJzZXIgYXMgYSAlc2AsIHRhc2suZm9ybWF0KTtcbiAgICAgICAgICAgIGlmICh0YXNrXzEuaXNCdWZmZXJUYXNrKHRhc2spKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzXzEuY2FsbFRhc2tQYXJzZXIodGFzay5wYXJzZXIsIG91dHB1dFN0cmVhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzXzEuY2FsbFRhc2tQYXJzZXIodGFzay5wYXJzZXIsIG91dHB1dFN0cmVhbXMuYXNTdHJpbmdzKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXR0ZW1wdEVtcHR5VGFzayh0YXNrLCBsb2dnZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxvZ2dlcihgZW1wdHkgdGFzayBieXBhc3NpbmcgY2hpbGQgcHJvY2VzcyB0byBjYWxsIHRvIHRhc2sncyBwYXJzZXJgKTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrLnBhcnNlcih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVRhc2tEYXRhKHRhc2ssIGFyZ3MsIHJlc3VsdCwgbG9nZ2VyKSB7XG4gICAgICAgIGNvbnN0IHsgZXhpdENvZGUsIHJlamVjdGlvbiwgc3RkT3V0LCBzdGRFcnIgfSA9IHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChkb25lLCBmYWlsKSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIoYFByZXBhcmluZyB0byBoYW5kbGUgcHJvY2VzcyByZXNwb25zZSBleGl0Q29kZT0lZCBzdGRPdXQ9YCwgZXhpdENvZGUpO1xuICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5fcGx1Z2lucy5leGVjKCd0YXNrLmVycm9yJywgeyBlcnJvcjogcmVqZWN0aW9uIH0sIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGx1Z2luQ29udGV4dCh0YXNrLCBhcmdzKSksIHJlc3VsdCkpO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIHRhc2sub25FcnJvcikge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBleGl0Q29kZT0lcyBoYW5kbGluZyB3aXRoIGN1c3RvbSBlcnJvciBoYW5kbGVyYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sub25FcnJvcihyZXN1bHQsIGVycm9yLCAobmV3U3RkT3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBjdXN0b20gZXJyb3IgaGFuZGxlciB0cmVhdGVkIGFzIHN1Y2Nlc3NgKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKGBjdXN0b20gZXJyb3IgcmV0dXJuZWQgYSAlc2AsIHV0aWxzXzEub2JqZWN0VG9TdHJpbmcobmV3U3RkT3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUobmV3IHV0aWxzXzEuR2l0T3V0cHV0U3RyZWFtcyhBcnJheS5pc0FycmF5KG5ld1N0ZE91dCkgPyBCdWZmZXIuY29uY2F0KG5ld1N0ZE91dCkgOiBuZXdTdGRPdXQsIEJ1ZmZlci5jb25jYXQoc3RkRXJyKSkpO1xuICAgICAgICAgICAgICAgIH0sIGZhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYGhhbmRsaW5nIGFzIGVycm9yOiBleGl0Q29kZT0lcyBzdGRFcnI9JXMgcmVqZWN0aW9uPSVvYCwgZXhpdENvZGUsIHN0ZEVyci5sZW5ndGgsIHJlamVjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oYHJldHJpZXZpbmcgdGFzayBvdXRwdXQgY29tcGxldGVgKTtcbiAgICAgICAgICAgIGRvbmUobmV3IHV0aWxzXzEuR2l0T3V0cHV0U3RyZWFtcyhCdWZmZXIuY29uY2F0KHN0ZE91dCksIEJ1ZmZlci5jb25jYXQoc3RkRXJyKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2l0UmVzcG9uc2UodGFzaywgY29tbWFuZCwgYXJncywgb3V0cHV0SGFuZGxlciwgbG9nZ2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXRMb2dnZXIgPSBsb2dnZXIuc2libGluZygnb3V0cHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBzcGF3bk9wdGlvbnMgPSB0aGlzLl9wbHVnaW5zLmV4ZWMoJ3NwYXduLm9wdGlvbnMnLCB7XG4gICAgICAgICAgICAgICAgY3dkOiB0aGlzLmN3ZCxcbiAgICAgICAgICAgICAgICBlbnY6IHRoaXMuZW52LFxuICAgICAgICAgICAgICAgIHdpbmRvd3NIaWRlOiB0cnVlLFxuICAgICAgICAgICAgfSwgcGx1Z2luQ29udGV4dCh0YXNrLCB0YXNrLmNvbW1hbmRzKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKGRvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGRPdXQgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGRFcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0ZW1wdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHJlamVjdGlvbjtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhdHRlbXB0Q2xvc2UoZXhpdENvZGUsIGV2ZW50ID0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zaW5nIHdoZW4gdGhlcmUgaXMgY29udGVudCwgdGVybWluYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ZWQgfHwgc3RkRXJyLmxlbmd0aCB8fCBzdGRPdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgZXhpdENvZGU9JXMgZXZlbnQ9JXMgcmVqZWN0aW9uPSVvYCwgZXhpdENvZGUsIGV2ZW50LCByZWplY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RkT3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZEVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgYXR0ZW1wdCBhdCBjbG9zaW5nIGJ1dCBubyBjb250ZW50IHlldCwgd2FpdCBicmllZmx5IGZvciB0aGUgY2xvc2UvZXhpdCB0aGF0IG1heSBmb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRlbXB0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF0dGVtcHRDbG9zZShleGl0Q29kZSwgJ2RlZmVycmVkJyksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigncmVjZWl2ZWQgJXMgZXZlbnQgYmVmb3JlIGNvbnRlbnQgb24gc3RkT3V0L3N0ZEVycicsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgJXMgJW9gLCBjb21tYW5kLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIoJyVPJywgc3Bhd25PcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGF3bmVkID0gY2hpbGRfcHJvY2Vzc18xLnNwYXduKGNvbW1hbmQsIGFyZ3MsIHNwYXduT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5zdGRvdXQub24oJ2RhdGEnLCBvbkRhdGFSZWNlaXZlZChzdGRPdXQsICdzdGRPdXQnLCBsb2dnZXIsIG91dHB1dExvZ2dlci5zdGVwKCdzdGRPdXQnKSkpO1xuICAgICAgICAgICAgICAgIHNwYXduZWQuc3RkZXJyLm9uKCdkYXRhJywgb25EYXRhUmVjZWl2ZWQoc3RkRXJyLCAnc3RkRXJyJywgbG9nZ2VyLCBvdXRwdXRMb2dnZXIuc3RlcCgnc3RkRXJyJykpKTtcbiAgICAgICAgICAgICAgICBzcGF3bmVkLm9uKCdlcnJvcicsIG9uRXJyb3JSZWNlaXZlZChzdGRFcnIsIGxvZ2dlcikpO1xuICAgICAgICAgICAgICAgIHNwYXduZWQub24oJ2Nsb3NlJywgKGNvZGUpID0+IGF0dGVtcHRDbG9zZShjb2RlLCAnY2xvc2UnKSk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5vbignZXhpdCcsIChjb2RlKSA9PiBhdHRlbXB0Q2xvc2UoY29kZSwgJ2V4aXQnKSk7XG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKGBQYXNzaW5nIGNoaWxkIHByb2Nlc3Mgc3RkT3V0L3N0ZEVyciB0byBjdXN0b20gb3V0cHV0SGFuZGxlcmApO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRIYW5kbGVyKGNvbW1hbmQsIHNwYXduZWQuc3Rkb3V0LCBzcGF3bmVkLnN0ZGVyciwgWy4uLmFyZ3NdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcGx1Z2lucy5leGVjKCdzcGF3bi5hZnRlcicsIHVuZGVmaW5lZCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwbHVnaW5Db250ZXh0KHRhc2ssIGFyZ3MpKSwgeyBzcGF3bmVkLCBraWxsKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYXduZWQua2lsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0aW9uID0gcmVhc29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25lZC5raWxsKCdTSUdJTlQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRFeGVjdXRvckNoYWluID0gR2l0RXhlY3V0b3JDaGFpbjtcbmZ1bmN0aW9uIHBsdWdpbkNvbnRleHQodGFzaywgY29tbWFuZHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXRob2Q6IHV0aWxzXzEuZmlyc3QodGFzay5jb21tYW5kcykgfHwgJycsXG4gICAgICAgIGNvbW1hbmRzLFxuICAgIH07XG59XG5mdW5jdGlvbiBvbkVycm9yUmVjZWl2ZWQodGFyZ2V0LCBsb2dnZXIpIHtcbiAgICByZXR1cm4gKGVycikgPT4ge1xuICAgICAgICBsb2dnZXIoYFtFUlJPUl0gY2hpbGQgcHJvY2VzcyBleGNlcHRpb24gJW9gLCBlcnIpO1xuICAgICAgICB0YXJnZXQucHVzaChCdWZmZXIuZnJvbShTdHJpbmcoZXJyLnN0YWNrKSwgJ2FzY2lpJykpO1xuICAgIH07XG59XG5mdW5jdGlvbiBvbkRhdGFSZWNlaXZlZCh0YXJnZXQsIG5hbWUsIGxvZ2dlciwgb3V0cHV0KSB7XG4gICAgcmV0dXJuIChidWZmZXIpID0+IHtcbiAgICAgICAgbG9nZ2VyKGAlcyByZWNlaXZlZCAlTCBieXRlc2AsIG5hbWUsIGJ1ZmZlcik7XG4gICAgICAgIG91dHB1dChgJUJgLCBidWZmZXIpO1xuICAgICAgICB0YXJnZXQucHVzaChidWZmZXIpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZXhlY3V0b3ItY2hhaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdEV4ZWN1dG9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2V4ZWN1dG9yX2NoYWluXzEgPSByZXF1aXJlKFwiLi9naXQtZXhlY3V0b3ItY2hhaW5cIik7XG5jbGFzcyBHaXRFeGVjdXRvciB7XG4gICAgY29uc3RydWN0b3IoYmluYXJ5ID0gJ2dpdCcsIGN3ZCwgX3NjaGVkdWxlciwgX3BsdWdpbnMpIHtcbiAgICAgICAgdGhpcy5iaW5hcnkgPSBiaW5hcnk7XG4gICAgICAgIHRoaXMuY3dkID0gY3dkO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSBfc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLl9wbHVnaW5zID0gX3BsdWdpbnM7XG4gICAgICAgIHRoaXMuX2NoYWluID0gbmV3IGdpdF9leGVjdXRvcl9jaGFpbl8xLkdpdEV4ZWN1dG9yQ2hhaW4odGhpcywgdGhpcy5fc2NoZWR1bGVyLCB0aGlzLl9wbHVnaW5zKTtcbiAgICB9XG4gICAgY2hhaW4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgZ2l0X2V4ZWN1dG9yX2NoYWluXzEuR2l0RXhlY3V0b3JDaGFpbih0aGlzLCB0aGlzLl9zY2hlZHVsZXIsIHRoaXMuX3BsdWdpbnMpO1xuICAgIH1cbiAgICBwdXNoKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYWluLnB1c2godGFzayk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRFeGVjdXRvciA9IEdpdEV4ZWN1dG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWV4ZWN1dG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50YXNrQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCBnaXRfcmVzcG9uc2VfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3JcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5mdW5jdGlvbiB0YXNrQ2FsbGJhY2sodGFzaywgcmVzcG9uc2UsIGNhbGxiYWNrID0gdXRpbHNfMS5OT09QKSB7XG4gICAgY29uc3Qgb25TdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfTtcbiAgICBjb25zdCBvbkVycm9yID0gKGVycikgPT4ge1xuICAgICAgICBpZiAoKGVyciA9PT0gbnVsbCB8fCBlcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVyci50YXNrKSA9PT0gdGFzaykge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soYWRkRGVwcmVjYXRpb25Ob3RpY2VUb0Vycm9yKGVycikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVzcG9uc2UudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xufVxuZXhwb3J0cy50YXNrQ2FsbGJhY2sgPSB0YXNrQ2FsbGJhY2s7XG5mdW5jdGlvbiBhZGREZXByZWNhdGlvbk5vdGljZVRvRXJyb3IoZXJyKSB7XG4gICAgbGV0IGxvZyA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2Fybihgc2ltcGxlLWdpdCBkZXByZWNhdGlvbiBub3RpY2U6IGFjY2Vzc2luZyBHaXRSZXNwb25zZUVycm9yLiR7bmFtZX0gc2hvdWxkIGJlIEdpdFJlc3BvbnNlRXJyb3IuZ2l0LiR7bmFtZX0sIHRoaXMgd2lsbCBubyBsb25nZXIgYmUgYXZhaWxhYmxlIGluIHZlcnNpb24gM2ApO1xuICAgICAgICBsb2cgPSB1dGlsc18xLk5PT1A7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShlcnIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGVyci5naXQpLnJlZHVjZShkZXNjcmlwdG9yUmVkdWNlciwge30pKTtcbiAgICBmdW5jdGlvbiBkZXNjcmlwdG9yUmVkdWNlcihhbGwsIG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgaW4gZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxsO1xuICAgICAgICB9XG4gICAgICAgIGFsbFtuYW1lXSA9IHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsb2cobmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyci5naXRbbmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNoYW5nZVdvcmtpbmdEaXJlY3RvcnlUYXNrID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBjaGFuZ2VXb3JraW5nRGlyZWN0b3J5VGFzayhkaXJlY3RvcnksIHJvb3QpIHtcbiAgICByZXR1cm4gdGFza18xLmFkaG9jRXhlY1Rhc2soKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGlmICghdXRpbHNfMS5mb2xkZXJFeGlzdHMoZGlyZWN0b3J5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBHaXQuY3dkOiBjYW5ub3QgY2hhbmdlIHRvIG5vbi1kaXJlY3RvcnkgXCIke2RpcmVjdG9yeX1cImApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKHJvb3QgfHwgaW5zdGFuY2UpLmN3ZCA9IGRpcmVjdG9yeSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmNoYW5nZVdvcmtpbmdEaXJlY3RvcnlUYXNrID0gY2hhbmdlV29ya2luZ0RpcmVjdG9yeVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGFuZ2Utd29ya2luZy1kaXJlY3RvcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc2hPYmplY3RUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuaGFzaE9iamVjdGBcbiAqL1xuZnVuY3Rpb24gaGFzaE9iamVjdFRhc2soZmlsZVBhdGgsIHdyaXRlKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2hhc2gtb2JqZWN0JywgZmlsZVBhdGhdO1xuICAgIGlmICh3cml0ZSkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKCctdycpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRydWUpO1xufVxuZXhwb3J0cy5oYXNoT2JqZWN0VGFzayA9IGhhc2hPYmplY3RUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGFzaC1vYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlSW5pdCA9IGV4cG9ydHMuSW5pdFN1bW1hcnkgPSB2b2lkIDA7XG5jbGFzcyBJbml0U3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IoYmFyZSwgcGF0aCwgZXhpc3RpbmcsIGdpdERpcikge1xuICAgICAgICB0aGlzLmJhcmUgPSBiYXJlO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmV4aXN0aW5nID0gZXhpc3Rpbmc7XG4gICAgICAgIHRoaXMuZ2l0RGlyID0gZ2l0RGlyO1xuICAgIH1cbn1cbmV4cG9ydHMuSW5pdFN1bW1hcnkgPSBJbml0U3VtbWFyeTtcbmNvbnN0IGluaXRSZXNwb25zZVJlZ2V4ID0gL15Jbml0LisgcmVwb3NpdG9yeSBpbiAoLispJC87XG5jb25zdCByZUluaXRSZXNwb25zZVJlZ2V4ID0gL15SZWluLisgaW4gKC4rKSQvO1xuZnVuY3Rpb24gcGFyc2VJbml0KGJhcmUsIHBhdGgsIHRleHQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IFN0cmluZyh0ZXh0KS50cmltKCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAoKHJlc3VsdCA9IGluaXRSZXNwb25zZVJlZ2V4LmV4ZWMocmVzcG9uc2UpKSkge1xuICAgICAgICByZXR1cm4gbmV3IEluaXRTdW1tYXJ5KGJhcmUsIHBhdGgsIGZhbHNlLCByZXN1bHRbMV0pO1xuICAgIH1cbiAgICBpZiAoKHJlc3VsdCA9IHJlSW5pdFJlc3BvbnNlUmVnZXguZXhlYyhyZXNwb25zZSkpKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5pdFN1bW1hcnkoYmFyZSwgcGF0aCwgdHJ1ZSwgcmVzdWx0WzFdKTtcbiAgICB9XG4gICAgbGV0IGdpdERpciA9ICcnO1xuICAgIGNvbnN0IHRva2VucyA9IHJlc3BvbnNlLnNwbGl0KCcgJyk7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgaWYgKHRva2VuID09PSAnaW4nKSB7XG4gICAgICAgICAgICBnaXREaXIgPSB0b2tlbnMuam9pbignICcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBJbml0U3VtbWFyeShiYXJlLCBwYXRoLCAvXnJlL2kudGVzdChyZXNwb25zZSksIGdpdERpcik7XG59XG5leHBvcnRzLnBhcnNlSW5pdCA9IHBhcnNlSW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUluaXRTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0VGFzayA9IHZvaWQgMDtcbmNvbnN0IEluaXRTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0luaXRTdW1tYXJ5XCIpO1xuY29uc3QgYmFyZUNvbW1hbmQgPSAnLS1iYXJlJztcbmZ1bmN0aW9uIGhhc0JhcmVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICByZXR1cm4gY29tbWFuZC5pbmNsdWRlcyhiYXJlQ29tbWFuZCk7XG59XG5mdW5jdGlvbiBpbml0VGFzayhiYXJlID0gZmFsc2UsIHBhdGgsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnaW5pdCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChiYXJlICYmICFoYXNCYXJlQ29tbWFuZChjb21tYW5kcykpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIGJhcmVDb21tYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbml0U3VtbWFyeV8xLnBhcnNlSW5pdChjb21tYW5kcy5pbmNsdWRlcygnLS1iYXJlJyksIHBhdGgsIHRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuaW5pdFRhc2sgPSBpbml0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lcmdlU3VtbWFyeURldGFpbCA9IGV4cG9ydHMuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QgPSB2b2lkIDA7XG5jbGFzcyBNZXJnZVN1bW1hcnlDb25mbGljdCB7XG4gICAgY29uc3RydWN0b3IocmVhc29uLCBmaWxlID0gbnVsbCwgbWV0YSkge1xuICAgICAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgdGhpcy5tZXRhID0gbWV0YTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpbGV9OiR7dGhpcy5yZWFzb259YDtcbiAgICB9XG59XG5leHBvcnRzLk1lcmdlU3VtbWFyeUNvbmZsaWN0ID0gTWVyZ2VTdW1tYXJ5Q29uZmxpY3Q7XG5jbGFzcyBNZXJnZVN1bW1hcnlEZXRhaWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbmZsaWN0cyA9IFtdO1xuICAgICAgICB0aGlzLm1lcmdlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9ICdzdWNjZXNzJztcbiAgICB9XG4gICAgZ2V0IGZhaWxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmxpY3RzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGdldCByZWFzb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgQ09ORkxJQ1RTOiAke3RoaXMuY29uZmxpY3RzLmpvaW4oJywgJyl9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ09LJztcbiAgICB9XG59XG5leHBvcnRzLk1lcmdlU3VtbWFyeURldGFpbCA9IE1lcmdlU3VtbWFyeURldGFpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lcmdlU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHVsbFN1bW1hcnkgPSB2b2lkIDA7XG5jbGFzcyBQdWxsU3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVtb3RlTWVzc2FnZXMgPSB7XG4gICAgICAgICAgICBhbGw6IFtdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5kZWxldGVkID0gW107XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kZWxldGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5pbnNlcnRpb25zID0ge307XG4gICAgICAgIHRoaXMuc3VtbWFyeSA9IHtcbiAgICAgICAgICAgIGNoYW5nZXM6IDAsXG4gICAgICAgICAgICBkZWxldGlvbnM6IDAsXG4gICAgICAgICAgICBpbnNlcnRpb25zOiAwLFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuUHVsbFN1bW1hcnkgPSBQdWxsU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVB1bGxTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW1vdGVNZXNzYWdlc09iamVjdFBhcnNlcnMgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gb2JqZWN0RW51bWVyYXRpb25SZXN1bHQocmVtb3RlTWVzc2FnZXMpIHtcbiAgICByZXR1cm4gKHJlbW90ZU1lc3NhZ2VzLm9iamVjdHMgPSByZW1vdGVNZXNzYWdlcy5vYmplY3RzIHx8IHtcbiAgICAgICAgY29tcHJlc3Npbmc6IDAsXG4gICAgICAgIGNvdW50aW5nOiAwLFxuICAgICAgICBlbnVtZXJhdGluZzogMCxcbiAgICAgICAgcGFja1JldXNlZDogMCxcbiAgICAgICAgcmV1c2VkOiB7IGNvdW50OiAwLCBkZWx0YTogMCB9LFxuICAgICAgICB0b3RhbDogeyBjb3VudDogMCwgZGVsdGE6IDAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYXNPYmplY3RDb3VudChzb3VyY2UpIHtcbiAgICBjb25zdCBjb3VudCA9IC9eXFxzKihcXGQrKS8uZXhlYyhzb3VyY2UpO1xuICAgIGNvbnN0IGRlbHRhID0gL2RlbHRhIChcXGQrKS9pLmV4ZWMoc291cmNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb3VudDogdXRpbHNfMS5hc051bWJlcihjb3VudCAmJiBjb3VudFsxXSB8fCAnMCcpLFxuICAgICAgICBkZWx0YTogdXRpbHNfMS5hc051bWJlcihkZWx0YSAmJiBkZWx0YVsxXSB8fCAnMCcpLFxuICAgIH07XG59XG5leHBvcnRzLnJlbW90ZU1lc3NhZ2VzT2JqZWN0UGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKC9ecmVtb3RlOlxccyooZW51bWVyYXRpbmd8Y291bnRpbmd8Y29tcHJlc3NpbmcpIG9iamVjdHM6IChcXGQrKSwvaSwgKHJlc3VsdCwgW2FjdGlvbiwgY291bnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBlbnVtZXJhdGlvbiA9IG9iamVjdEVudW1lcmF0aW9uUmVzdWx0KHJlc3VsdC5yZW1vdGVNZXNzYWdlcyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW51bWVyYXRpb24sIHsgW2tleV06IHV0aWxzXzEuYXNOdW1iZXIoY291bnQpIH0pO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoL15yZW1vdGU6XFxzKihlbnVtZXJhdGluZ3xjb3VudGluZ3xjb21wcmVzc2luZykgb2JqZWN0czogXFxkKyUgXFwoXFxkK1xcLyhcXGQrKVxcKSwvaSwgKHJlc3VsdCwgW2FjdGlvbiwgY291bnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBlbnVtZXJhdGlvbiA9IG9iamVjdEVudW1lcmF0aW9uUmVzdWx0KHJlc3VsdC5yZW1vdGVNZXNzYWdlcyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW51bWVyYXRpb24sIHsgW2tleV06IHV0aWxzXzEuYXNOdW1iZXIoY291bnQpIH0pO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoL3RvdGFsIChbXixdKyksIHJldXNlZCAoW14sXSspLCBwYWNrLXJldXNlZCAoXFxkKykvaSwgKHJlc3VsdCwgW3RvdGFsLCByZXVzZWQsIHBhY2tSZXVzZWRdKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSBvYmplY3RFbnVtZXJhdGlvblJlc3VsdChyZXN1bHQucmVtb3RlTWVzc2FnZXMpO1xuICAgICAgICBvYmplY3RzLnRvdGFsID0gYXNPYmplY3RDb3VudCh0b3RhbCk7XG4gICAgICAgIG9iamVjdHMucmV1c2VkID0gYXNPYmplY3RDb3VudChyZXVzZWQpO1xuICAgICAgICBvYmplY3RzLnBhY2tSZXVzZWQgPSB1dGlsc18xLmFzTnVtYmVyKHBhY2tSZXVzZWQpO1xuICAgIH0pLFxuXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbW90ZS1vYmplY3RzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW1vdGVNZXNzYWdlU3VtbWFyeSA9IGV4cG9ydHMucGFyc2VSZW1vdGVNZXNzYWdlcyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9yZW1vdGVfb2JqZWN0c18xID0gcmVxdWlyZShcIi4vcGFyc2UtcmVtb3RlLW9iamVjdHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoL15yZW1vdGU6XFxzKiguKykkLywgKHJlc3VsdCwgW3RleHRdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZW1vdGVNZXNzYWdlcy5hbGwucHVzaCh0ZXh0LnRyaW0oKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSxcbiAgICAuLi5wYXJzZV9yZW1vdGVfb2JqZWN0c18xLnJlbW90ZU1lc3NhZ2VzT2JqZWN0UGFyc2VycyxcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKFsvY3JlYXRlIGEgKD86cHVsbHxtZXJnZSkgcmVxdWVzdC9pLCAvXFxzKGh0dHBzPzpcXC9cXC9cXFMrKSQvXSwgKHJlc3VsdCwgW3B1bGxSZXF1ZXN0VXJsXSkgPT4ge1xuICAgICAgICByZXN1bHQucmVtb3RlTWVzc2FnZXMucHVsbFJlcXVlc3RVcmwgPSBwdWxsUmVxdWVzdFVybDtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKFsvZm91bmQgKFxcZCspIHZ1bG5lcmFiaWxpdGllcy4rXFwoKFteKV0rKVxcKS9pLCAvXFxzKGh0dHBzPzpcXC9cXC9cXFMrKSQvXSwgKHJlc3VsdCwgW2NvdW50LCBzdW1tYXJ5LCB1cmxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZW1vdGVNZXNzYWdlcy52dWxuZXJhYmlsaXRpZXMgPSB7XG4gICAgICAgICAgICBjb3VudDogdXRpbHNfMS5hc051bWJlcihjb3VudCksXG4gICAgICAgICAgICBzdW1tYXJ5LFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICB9O1xuICAgIH0pLFxuXTtcbmZ1bmN0aW9uIHBhcnNlUmVtb3RlTWVzc2FnZXMoX3N0ZE91dCwgc3RkRXJyKSB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZSh7IHJlbW90ZU1lc3NhZ2VzOiBuZXcgUmVtb3RlTWVzc2FnZVN1bW1hcnkoKSB9LCBwYXJzZXJzLCBzdGRFcnIpO1xufVxuZXhwb3J0cy5wYXJzZVJlbW90ZU1lc3NhZ2VzID0gcGFyc2VSZW1vdGVNZXNzYWdlcztcbmNsYXNzIFJlbW90ZU1lc3NhZ2VTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbGwgPSBbXTtcbiAgICB9XG59XG5leHBvcnRzLlJlbW90ZU1lc3NhZ2VTdW1tYXJ5ID0gUmVtb3RlTWVzc2FnZVN1bW1hcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZW1vdGUtbWVzc2FnZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlUHVsbFJlc3VsdCA9IGV4cG9ydHMucGFyc2VQdWxsRGV0YWlsID0gdm9pZCAwO1xuY29uc3QgUHVsbFN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvUHVsbFN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VfcmVtb3RlX21lc3NhZ2VzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1yZW1vdGUtbWVzc2FnZXNcIik7XG5jb25zdCBGSUxFX1VQREFURV9SRUdFWCA9IC9eXFxzKiguKz8pXFxzK1xcfFxccytcXGQrXFxzKihcXCsqKSgtKikvO1xuY29uc3QgU1VNTUFSWV9SRUdFWCA9IC8oXFxkKylcXEQrKChcXGQrKVxcRCtcXChcXCtcXCkpPyhcXEQrKFxcZCspXFxEK1xcKC1cXCkpPy87XG5jb25zdCBBQ1RJT05fUkVHRVggPSAvXihjcmVhdGV8ZGVsZXRlKSBtb2RlIFxcZCsgKC4rKS87XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoRklMRV9VUERBVEVfUkVHRVgsIChyZXN1bHQsIFtmaWxlLCBpbnNlcnRpb25zLCBkZWxldGlvbnNdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICBpZiAoaW5zZXJ0aW9ucykge1xuICAgICAgICAgICAgcmVzdWx0Lmluc2VydGlvbnNbZmlsZV0gPSBpbnNlcnRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsZXRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQuZGVsZXRpb25zW2ZpbGVdID0gZGVsZXRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoU1VNTUFSWV9SRUdFWCwgKHJlc3VsdCwgW2NoYW5nZXMsICwgaW5zZXJ0aW9ucywgLCBkZWxldGlvbnNdKSA9PiB7XG4gICAgICAgIGlmIChpbnNlcnRpb25zICE9PSB1bmRlZmluZWQgfHwgZGVsZXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zdW1tYXJ5LmNoYW5nZXMgPSArY2hhbmdlcyB8fCAwO1xuICAgICAgICAgICAgcmVzdWx0LnN1bW1hcnkuaW5zZXJ0aW9ucyA9ICtpbnNlcnRpb25zIHx8IDA7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5kZWxldGlvbnMgPSArZGVsZXRpb25zIHx8IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihBQ1RJT05fUkVHRVgsIChyZXN1bHQsIFthY3Rpb24sIGZpbGVdKSA9PiB7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5maWxlcywgZmlsZSk7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKChhY3Rpb24gPT09ICdjcmVhdGUnKSA/IHJlc3VsdC5jcmVhdGVkIDogcmVzdWx0LmRlbGV0ZWQsIGZpbGUpO1xuICAgIH0pLFxuXTtcbmNvbnN0IHBhcnNlUHVsbERldGFpbCA9IChzdGRPdXQsIHN0ZEVycikgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IFB1bGxTdW1tYXJ5XzEuUHVsbFN1bW1hcnkoKSwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufTtcbmV4cG9ydHMucGFyc2VQdWxsRGV0YWlsID0gcGFyc2VQdWxsRGV0YWlsO1xuY29uc3QgcGFyc2VQdWxsUmVzdWx0ID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFB1bGxTdW1tYXJ5XzEuUHVsbFN1bW1hcnkoKSwgZXhwb3J0cy5wYXJzZVB1bGxEZXRhaWwoc3RkT3V0LCBzdGRFcnIpLCBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMS5wYXJzZVJlbW90ZU1lc3NhZ2VzKHN0ZE91dCwgc3RkRXJyKSk7XG59O1xuZXhwb3J0cy5wYXJzZVB1bGxSZXN1bHQgPSBwYXJzZVB1bGxSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1wdWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZU1lcmdlRGV0YWlsID0gZXhwb3J0cy5wYXJzZU1lcmdlUmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgTWVyZ2VTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL01lcmdlU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9wdWxsXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1wdWxsXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQXV0by1tZXJnaW5nXFxzKyguKykkLywgKHN1bW1hcnksIFthdXRvTWVyZ2VdKSA9PiB7XG4gICAgICAgIHN1bW1hcnkubWVyZ2VzLnB1c2goYXV0b01lcmdlKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQ09ORkxJQ1RcXHMrXFwoKC4rKVxcKTogTWVyZ2UgY29uZmxpY3QgaW4gKC4rKSQvLCAoc3VtbWFyeSwgW3JlYXNvbiwgZmlsZV0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5jb25mbGljdHMucHVzaChuZXcgTWVyZ2VTdW1tYXJ5XzEuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QocmVhc29uLCBmaWxlKSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXkNPTkZMSUNUXFxzK1xcKCguK1xcL2RlbGV0ZSlcXCk6ICguKykgZGVsZXRlZCBpbiAoLispIGFuZC8sIChzdW1tYXJ5LCBbcmVhc29uLCBmaWxlLCBkZWxldGVSZWZdKSA9PiB7XG4gICAgICAgIHN1bW1hcnkuY29uZmxpY3RzLnB1c2gobmV3IE1lcmdlU3VtbWFyeV8xLk1lcmdlU3VtbWFyeUNvbmZsaWN0KHJlYXNvbiwgZmlsZSwgeyBkZWxldGVSZWYgfSkpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15DT05GTElDVFxccytcXCgoLispXFwpOi8sIChzdW1tYXJ5LCBbcmVhc29uXSkgPT4ge1xuICAgICAgICBzdW1tYXJ5LmNvbmZsaWN0cy5wdXNoKG5ldyBNZXJnZVN1bW1hcnlfMS5NZXJnZVN1bW1hcnlDb25mbGljdChyZWFzb24sIG51bGwpKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQXV0b21hdGljIG1lcmdlIGZhaWxlZDtcXHMrKC4rKSQvLCAoc3VtbWFyeSwgW3Jlc3VsdF0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5yZXN1bHQgPSByZXN1bHQ7XG4gICAgfSksXG5dO1xuLyoqXG4gKiBQYXJzZSB0aGUgY29tcGxldGUgcmVzcG9uc2UgZnJvbSBgZ2l0Lm1lcmdlYFxuICovXG5jb25zdCBwYXJzZU1lcmdlUmVzdWx0ID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5wYXJzZU1lcmdlRGV0YWlsKHN0ZE91dCwgc3RkRXJyKSwgcGFyc2VfcHVsbF8xLnBhcnNlUHVsbFJlc3VsdChzdGRPdXQsIHN0ZEVycikpO1xufTtcbmV4cG9ydHMucGFyc2VNZXJnZVJlc3VsdCA9IHBhcnNlTWVyZ2VSZXN1bHQ7XG4vKipcbiAqIFBhcnNlIHRoZSBtZXJnZSBzcGVjaWZpYyBkZXRhaWwgKGllOiBub3QgdGhlIGNvbnRlbnQgYWxzbyBhdmFpbGFibGUgaW4gdGhlIHB1bGwgZGV0YWlsKSBmcm9tIGBnaXQubW5lcmdlYFxuICogQHBhcmFtIHN0ZE91dFxuICovXG5jb25zdCBwYXJzZU1lcmdlRGV0YWlsID0gKHN0ZE91dCkgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IE1lcmdlU3VtbWFyeV8xLk1lcmdlU3VtbWFyeURldGFpbCgpLCBwYXJzZXJzLCBzdGRPdXQpO1xufTtcbmV4cG9ydHMucGFyc2VNZXJnZURldGFpbCA9IHBhcnNlTWVyZ2VEZXRhaWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1tZXJnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVyZ2VUYXNrID0gdm9pZCAwO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHBhcnNlX21lcmdlXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1tZXJnZVwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBtZXJnZVRhc2soY3VzdG9tQXJncykge1xuICAgIGlmICghY3VzdG9tQXJncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKCdHaXQubWVyZ2UgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG9wdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydtZXJnZScsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2UgPSBwYXJzZV9tZXJnZV8xLnBhcnNlTWVyZ2VSZXN1bHQoc3RkT3V0LCBzdGRFcnIpO1xuICAgICAgICAgICAgaWYgKG1lcmdlLmZhaWxlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBnaXRfcmVzcG9uc2VfZXJyb3JfMS5HaXRSZXNwb25zZUVycm9yKG1lcmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLm1lcmdlVGFzayA9IG1lcmdlVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVB1c2hEZXRhaWwgPSBleHBvcnRzLnBhcnNlUHVzaFJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLXJlbW90ZS1tZXNzYWdlc1wiKTtcbmZ1bmN0aW9uIHB1c2hSZXN1bHRQdXNoZWRJdGVtKGxvY2FsLCByZW1vdGUsIHN0YXR1cykge1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBzdGF0dXMuaW5jbHVkZXMoJ2RlbGV0ZWQnKTtcbiAgICBjb25zdCB0YWcgPSBzdGF0dXMuaW5jbHVkZXMoJ3RhZycpIHx8IC9ecmVmc1xcL3RhZ3MvLnRlc3QobG9jYWwpO1xuICAgIGNvbnN0IGFscmVhZHlVcGRhdGVkID0gIXN0YXR1cy5pbmNsdWRlcygnbmV3Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsZXRlZCxcbiAgICAgICAgdGFnLFxuICAgICAgICBicmFuY2g6ICF0YWcsXG4gICAgICAgIG5ldzogIWFscmVhZHlVcGRhdGVkLFxuICAgICAgICBhbHJlYWR5VXBkYXRlZCxcbiAgICAgICAgbG9jYWwsXG4gICAgICAgIHJlbW90ZSxcbiAgICB9O1xufVxuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eUHVzaGluZyB0byAoLispJC8sIChyZXN1bHQsIFtyZXBvXSkgPT4ge1xuICAgICAgICByZXN1bHQucmVwbyA9IHJlcG87XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXnVwZGF0aW5nIGxvY2FsIHRyYWNraW5nIHJlZiAnKC4rKScvLCAocmVzdWx0LCBbbG9jYWxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZWYgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChyZXN1bHQucmVmIHx8IHt9KSksIHsgbG9jYWwgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXlsqLT1dXFxzKyhbXjpdKyk6KFxcUyspXFxzK1xcWyguKyldJC8sIChyZXN1bHQsIFtsb2NhbCwgcmVtb3RlLCB0eXBlXSkgPT4ge1xuICAgICAgICByZXN1bHQucHVzaGVkLnB1c2gocHVzaFJlc3VsdFB1c2hlZEl0ZW0obG9jYWwsIHJlbW90ZSwgdHlwZSkpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15CcmFuY2ggJyhbXiddKyknIHNldCB1cCB0byB0cmFjayByZW1vdGUgYnJhbmNoICcoW14nXSspJyBmcm9tICcoW14nXSspJy8sIChyZXN1bHQsIFtsb2NhbCwgcmVtb3RlLCByZW1vdGVOYW1lXSkgPT4ge1xuICAgICAgICByZXN1bHQuYnJhbmNoID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAocmVzdWx0LmJyYW5jaCB8fCB7fSkpLCB7IGxvY2FsLFxuICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgcmVtb3RlTmFtZSB9KTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eKFteOl0rKTooXFxTKylcXHMrKFthLXowLTldKylcXC5cXC4oW2EtejAtOV0rKSQvLCAocmVzdWx0LCBbbG9jYWwsIHJlbW90ZSwgZnJvbSwgdG9dKSA9PiB7XG4gICAgICAgIHJlc3VsdC51cGRhdGUgPSB7XG4gICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgbG9jYWwsXG4gICAgICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc2g6IHtcbiAgICAgICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KSxcbl07XG5jb25zdCBwYXJzZVB1c2hSZXN1bHQgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICBjb25zdCBwdXNoRGV0YWlsID0gZXhwb3J0cy5wYXJzZVB1c2hEZXRhaWwoc3RkT3V0LCBzdGRFcnIpO1xuICAgIGNvbnN0IHJlc3BvbnNlRGV0YWlsID0gcGFyc2VfcmVtb3RlX21lc3NhZ2VzXzEucGFyc2VSZW1vdGVNZXNzYWdlcyhzdGRPdXQsIHN0ZEVycik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHVzaERldGFpbCksIHJlc3BvbnNlRGV0YWlsKTtcbn07XG5leHBvcnRzLnBhcnNlUHVzaFJlc3VsdCA9IHBhcnNlUHVzaFJlc3VsdDtcbmNvbnN0IHBhcnNlUHVzaERldGFpbCA9IChzdGRPdXQsIHN0ZEVycikgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UoeyBwdXNoZWQ6IFtdIH0sIHBhcnNlcnMsIHN0ZE91dCwgc3RkRXJyKTtcbn07XG5leHBvcnRzLnBhcnNlUHVzaERldGFpbCA9IHBhcnNlUHVzaERldGFpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXB1c2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnB1c2hUYXNrID0gZXhwb3J0cy5wdXNoVGFnc1Rhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9wdXNoXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1wdXNoXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHB1c2hUYWdzVGFzayhyZWYgPSB7fSwgY3VzdG9tQXJncykge1xuICAgIHV0aWxzXzEuYXBwZW5kKGN1c3RvbUFyZ3MsICctLXRhZ3MnKTtcbiAgICByZXR1cm4gcHVzaFRhc2socmVmLCBjdXN0b21BcmdzKTtcbn1cbmV4cG9ydHMucHVzaFRhZ3NUYXNrID0gcHVzaFRhZ3NUYXNrO1xuZnVuY3Rpb24gcHVzaFRhc2socmVmID0ge30sIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncHVzaCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChyZWYuYnJhbmNoKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCByZWYuYnJhbmNoKTtcbiAgICB9XG4gICAgaWYgKHJlZi5yZW1vdGUpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIHJlZi5yZW1vdGUpO1xuICAgIH1cbiAgICB1dGlsc18xLnJlbW92ZShjb21tYW5kcywgJy12Jyk7XG4gICAgdXRpbHNfMS5hcHBlbmQoY29tbWFuZHMsICctLXZlcmJvc2UnKTtcbiAgICB1dGlsc18xLmFwcGVuZChjb21tYW5kcywgJy0tcG9yY2VsYWluJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9wdXNoXzEucGFyc2VQdXNoUmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLnB1c2hUYXNrID0gcHVzaFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5GaWxlU3RhdHVzU3VtbWFyeSA9IGV4cG9ydHMuZnJvbVBhdGhSZWdleCA9IHZvaWQgMDtcbmV4cG9ydHMuZnJvbVBhdGhSZWdleCA9IC9eKC4rKSAtPiAoLispJC87XG5jbGFzcyBGaWxlU3RhdHVzU3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IocGF0aCwgaW5kZXgsIHdvcmtpbmdfZGlyKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy53b3JraW5nX2RpciA9IHdvcmtpbmdfZGlyO1xuICAgICAgICBpZiAoJ1InID09PSAoaW5kZXggKyB3b3JraW5nX2RpcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGV4cG9ydHMuZnJvbVBhdGhSZWdleC5leGVjKHBhdGgpIHx8IFtudWxsLCBwYXRoLCBwYXRoXTtcbiAgICAgICAgICAgIHRoaXMuZnJvbSA9IGRldGFpbFsxXSB8fCAnJztcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGRldGFpbFsyXSB8fCAnJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRmlsZVN0YXR1c1N1bW1hcnkgPSBGaWxlU3RhdHVzU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTdGF0dXNTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVN0YXR1c1N1bW1hcnkgPSBleHBvcnRzLlN0YXR1c1N1bW1hcnkgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgRmlsZVN0YXR1c1N1bW1hcnlfMSA9IHJlcXVpcmUoXCIuL0ZpbGVTdGF0dXNTdW1tYXJ5XCIpO1xuLyoqXG4gKiBUaGUgU3RhdHVzU3VtbWFyeSBpcyByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIHRvIGdldHRpbmcgYGdpdCgpLnN0YXR1cygpYFxuICovXG5jbGFzcyBTdGF0dXNTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub3RfYWRkZWQgPSBbXTtcbiAgICAgICAgdGhpcy5jb25mbGljdGVkID0gW107XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RpZmllZCA9IFtdO1xuICAgICAgICB0aGlzLnJlbmFtZWQgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBmaWxlcyByZXByZXNlbnRlZCBhcyBhbiBhcnJheSBvZiBvYmplY3RzIGNvbnRhaW5pbmcgdGhlIGBwYXRoYCBhbmQgc3RhdHVzIGluIGBpbmRleGAgYW5kXG4gICAgICAgICAqIGluIHRoZSBgd29ya2luZ19kaXJgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YWdlZCA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIGNvbW1pdHMgYWhlYWQgb2YgdGhlIHRyYWNrZWQgYnJhbmNoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFoZWFkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqTnVtYmVyIG9mIGNvbW1pdHMgYmVoaW5kIHRoZSB0cmFja2VkIGJyYW5jaFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iZWhpbmQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgY3VycmVudCBicmFuY2hcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSBicmFuY2ggYmVpbmcgdHJhY2tlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFja2luZyA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGlzIFN0YXR1c1N1bW1hcnkgcmVwcmVzZW50cyBhIGNsZWFuIHdvcmtpbmcgYnJhbmNoLlxuICAgICAqL1xuICAgIGlzQ2xlYW4oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5maWxlcy5sZW5ndGg7XG4gICAgfVxufVxuZXhwb3J0cy5TdGF0dXNTdW1tYXJ5ID0gU3RhdHVzU3VtbWFyeTtcbnZhciBQb3JjZWxhaW5GaWxlU3RhdHVzO1xuKGZ1bmN0aW9uIChQb3JjZWxhaW5GaWxlU3RhdHVzKSB7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIkFEREVEXCJdID0gXCJBXCI7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIkRFTEVURURcIl0gPSBcIkRcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiTU9ESUZJRURcIl0gPSBcIk1cIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiUkVOQU1FRFwiXSA9IFwiUlwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJDT1BJRURcIl0gPSBcIkNcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiVU5NRVJHRURcIl0gPSBcIlVcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiVU5UUkFDS0VEXCJdID0gXCI/XCI7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIklHTk9SRURcIl0gPSBcIiFcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiTk9ORVwiXSA9IFwiIFwiO1xufSkoUG9yY2VsYWluRmlsZVN0YXR1cyB8fCAoUG9yY2VsYWluRmlsZVN0YXR1cyA9IHt9KSk7XG5mdW5jdGlvbiByZW5hbWVkRmlsZShsaW5lKSB7XG4gICAgY29uc3QgZGV0YWlsID0gL14oLispIC0+ICguKykkLy5leGVjKGxpbmUpO1xuICAgIGlmICghZGV0YWlsKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmcm9tOiBsaW5lLCB0bzogbGluZVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmcm9tOiBTdHJpbmcoZGV0YWlsWzFdKSxcbiAgICAgICAgdG86IFN0cmluZyhkZXRhaWxbMl0pLFxuICAgIH07XG59XG5mdW5jdGlvbiBwYXJzZXIoaW5kZXhYLCBpbmRleFksIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gW2Ake2luZGV4WH0ke2luZGV4WX1gLCBoYW5kbGVyXTtcbn1cbmZ1bmN0aW9uIGNvbmZsaWN0cyhpbmRleFgsIC4uLmluZGV4WSkge1xuICAgIHJldHVybiBpbmRleFkubWFwKHkgPT4gcGFyc2VyKGluZGV4WCwgeSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNvbmZsaWN0ZWQsIGZpbGUpKSk7XG59XG5jb25zdCBwYXJzZXJzID0gbmV3IE1hcChbXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCBQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIChyZXN1bHQsIGZpbGUpID0+IHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5kZWxldGVkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5tb2RpZmllZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmRlbGV0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCBmaWxlKSAmJiB1dGlsc18xLmFwcGVuZChyZXN1bHQuc3RhZ2VkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuUkVOQU1FRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5yZW5hbWVkLCByZW5hbWVkRmlsZShmaWxlKSk7XG4gICAgfSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuUkVOQU1FRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCByZW5hbWVkID0gcmVuYW1lZEZpbGUoZmlsZSk7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5yZW5hbWVkLCByZW5hbWVkKTtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCByZW5hbWVkLnRvKTtcbiAgICB9KSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5VTlRSQUNLRUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5UUkFDS0VELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubm90X2FkZGVkLCBmaWxlKSksXG4gICAgLi4uY29uZmxpY3RzKFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5NRVJHRUQpLFxuICAgIC4uLmNvbmZsaWN0cyhQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCksXG4gICAgLi4uY29uZmxpY3RzKFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5NRVJHRUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCksXG4gICAgWycjIycsIChyZXN1bHQsIGxpbmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFoZWFkUmVnID0gL2FoZWFkIChcXGQrKS87XG4gICAgICAgICAgICBjb25zdCBiZWhpbmRSZWcgPSAvYmVoaW5kIChcXGQrKS87XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UmVnID0gL14oLis/KD89KD86XFwuezN9fFxcc3wkKSkpLztcbiAgICAgICAgICAgIGNvbnN0IHRyYWNraW5nUmVnID0gL1xcLnszfShcXFMqKS87XG4gICAgICAgICAgICBjb25zdCBvbkVtcHR5QnJhbmNoUmVnID0gL1xcc29uXFxzKFtcXFNdKykkLztcbiAgICAgICAgICAgIGxldCByZWdleFJlc3VsdDtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gYWhlYWRSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC5haGVhZCA9IHJlZ2V4UmVzdWx0ICYmICtyZWdleFJlc3VsdFsxXSB8fCAwO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBiZWhpbmRSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC5iZWhpbmQgPSByZWdleFJlc3VsdCAmJiArcmVnZXhSZXN1bHRbMV0gfHwgMDtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gY3VycmVudFJlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LmN1cnJlbnQgPSByZWdleFJlc3VsdCAmJiByZWdleFJlc3VsdFsxXTtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gdHJhY2tpbmdSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC50cmFja2luZyA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBvbkVtcHR5QnJhbmNoUmVnLmV4ZWMobGluZSk7XG4gICAgICAgICAgICByZXN1bHQuY3VycmVudCA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdIHx8IHJlc3VsdC5jdXJyZW50O1xuICAgICAgICB9XVxuXSk7XG5jb25zdCBwYXJzZVN0YXR1c1N1bW1hcnkgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC50cmltKCkuc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBTdGF0dXNTdW1tYXJ5KCk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgc3BsaXRMaW5lKHN0YXR1cywgbGluZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xufTtcbmV4cG9ydHMucGFyc2VTdGF0dXNTdW1tYXJ5ID0gcGFyc2VTdGF0dXNTdW1tYXJ5O1xuZnVuY3Rpb24gc3BsaXRMaW5lKHJlc3VsdCwgbGluZVN0cikge1xuICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lU3RyLnRyaW0oKTtcbiAgICBzd2l0Y2ggKCcgJykge1xuICAgICAgICBjYXNlIHRyaW1tZWQuY2hhckF0KDIpOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGEodHJpbW1lZC5jaGFyQXQoMCksIHRyaW1tZWQuY2hhckF0KDEpLCB0cmltbWVkLnN1YnN0cigzKSk7XG4gICAgICAgIGNhc2UgdHJpbW1lZC5jaGFyQXQoMSk6XG4gICAgICAgICAgICByZXR1cm4gZGF0YShQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIHRyaW1tZWQuY2hhckF0KDApLCB0cmltbWVkLnN1YnN0cigyKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRhdGEoaW5kZXgsIHdvcmtpbmdEaXIsIHBhdGgpIHtcbiAgICAgICAgY29uc3QgcmF3ID0gYCR7aW5kZXh9JHt3b3JraW5nRGlyfWA7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwYXJzZXJzLmdldChyYXcpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihyZXN1bHQsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYXcgIT09ICcjIycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKG5ldyBGaWxlU3RhdHVzU3VtbWFyeV8xLkZpbGVTdGF0dXNTdW1tYXJ5KHBhdGgsIGluZGV4LCB3b3JraW5nRGlyKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGF0dXNTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdGF0dXNUYXNrID0gdm9pZCAwO1xuY29uc3QgU3RhdHVzU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9TdGF0dXNTdW1tYXJ5XCIpO1xuZnVuY3Rpb24gc3RhdHVzVGFzayhjdXN0b21BcmdzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWydzdGF0dXMnLCAnLS1wb3JjZWxhaW4nLCAnLWInLCAnLXUnLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBTdGF0dXNTdW1tYXJ5XzEucGFyc2VTdGF0dXNTdW1tYXJ5KHRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuc3RhdHVzVGFzayA9IHN0YXR1c1Rhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0dXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNpbXBsZUdpdEFwaSA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfY2FsbGJhY2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2stY2FsbGJhY2tcIik7XG5jb25zdCBjaGFuZ2Vfd29ya2luZ19kaXJlY3RvcnlfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL2NoYW5nZS13b3JraW5nLWRpcmVjdG9yeVwiKTtcbmNvbnN0IGNvbmZpZ18xID0gcmVxdWlyZShcIi4vdGFza3MvY29uZmlnXCIpO1xuY29uc3QgaGFzaF9vYmplY3RfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL2hhc2gtb2JqZWN0XCIpO1xuY29uc3QgaW5pdF8xID0gcmVxdWlyZShcIi4vdGFza3MvaW5pdFwiKTtcbmNvbnN0IG1lcmdlXzEgPSByZXF1aXJlKFwiLi90YXNrcy9tZXJnZVwiKTtcbmNvbnN0IHB1c2hfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL3B1c2hcIik7XG5jb25zdCBzdGF0dXNfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL3N0YXR1c1wiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL3Rhc2tcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jbGFzcyBTaW1wbGVHaXRBcGkge1xuICAgIGNvbnN0cnVjdG9yKF9leGVjdXRvcikge1xuICAgICAgICB0aGlzLl9leGVjdXRvciA9IF9leGVjdXRvcjtcbiAgICB9XG4gICAgX3J1blRhc2sodGFzaywgdGhlbikge1xuICAgICAgICBjb25zdCBjaGFpbiA9IHRoaXMuX2V4ZWN1dG9yLmNoYWluKCk7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjaGFpbi5wdXNoKHRhc2spO1xuICAgICAgICBpZiAodGhlbikge1xuICAgICAgICAgICAgdGFza19jYWxsYmFja18xLnRhc2tDYWxsYmFjayh0YXNrLCBwcm9taXNlLCB0aGVuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzLCB7XG4gICAgICAgICAgICB0aGVuOiB7IHZhbHVlOiBwcm9taXNlLnRoZW4uYmluZChwcm9taXNlKSB9LFxuICAgICAgICAgICAgY2F0Y2g6IHsgdmFsdWU6IHByb21pc2UuY2F0Y2guYmluZChwcm9taXNlKSB9LFxuICAgICAgICAgICAgX2V4ZWN1dG9yOiB7IHZhbHVlOiBjaGFpbiB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsnYWRkJywgLi4udXRpbHNfMS5hc0FycmF5KGZpbGVzKV0pLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICB9XG4gICAgY3dkKGRpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBuZXh0ID0gdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkaXJlY3RvcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhjaGFuZ2Vfd29ya2luZ19kaXJlY3RvcnlfMS5jaGFuZ2VXb3JraW5nRGlyZWN0b3J5VGFzayhkaXJlY3RvcnksIHRoaXMuX2V4ZWN1dG9yKSwgbmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoZGlyZWN0b3J5ID09PSBudWxsIHx8IGRpcmVjdG9yeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlyZWN0b3J5LnBhdGgpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soY2hhbmdlX3dvcmtpbmdfZGlyZWN0b3J5XzEuY2hhbmdlV29ya2luZ0RpcmVjdG9yeVRhc2soZGlyZWN0b3J5LnBhdGgsIGRpcmVjdG9yeS5yb290ICYmIHRoaXMuX2V4ZWN1dG9yIHx8IHVuZGVmaW5lZCksIG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKCdHaXQuY3dkOiB3b3JraW5nRGlyZWN0b3J5IG11c3QgYmUgc3VwcGxpZWQgYXMgYSBzdHJpbmcnKSwgbmV4dCk7XG4gICAgfVxuICAgIGhhc2hPYmplY3QocGF0aCwgd3JpdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soaGFzaF9vYmplY3RfMS5oYXNoT2JqZWN0VGFzayhwYXRoLCB3cml0ZSA9PT0gdHJ1ZSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBpbml0KGJhcmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soaW5pdF8xLmluaXRUYXNrKGJhcmUgPT09IHRydWUsIHRoaXMuX2V4ZWN1dG9yLmN3ZCwgdXRpbHNfMS5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBtZXJnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sobWVyZ2VfMS5tZXJnZVRhc2sodXRpbHNfMS5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBtZXJnZUZyb21UbyhyZW1vdGUsIGJyYW5jaCkge1xuICAgICAgICBpZiAoISh1dGlsc18xLmZpbHRlclN0cmluZyhyZW1vdGUpICYmIHV0aWxzXzEuZmlsdGVyU3RyaW5nKGJyYW5jaCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhgR2l0Lm1lcmdlRnJvbVRvIHJlcXVpcmVzIHRoYXQgdGhlICdyZW1vdGUnIGFuZCAnYnJhbmNoJyBhcmd1bWVudHMgYXJlIHN1cHBsaWVkIGFzIHN0cmluZ3NgKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sobWVyZ2VfMS5tZXJnZVRhc2soW3JlbW90ZSwgYnJhbmNoLCAuLi51dGlsc18xLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpXSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cywgZmFsc2UpKTtcbiAgICB9XG4gICAgb3V0cHV0SGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2V4ZWN1dG9yLm91dHB1dEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHVzaCgpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHB1c2hfMS5wdXNoVGFzayh7XG4gICAgICAgICAgICByZW1vdGU6IHV0aWxzXzEuZmlsdGVyVHlwZShhcmd1bWVudHNbMF0sIHV0aWxzXzEuZmlsdGVyU3RyaW5nKSxcbiAgICAgICAgICAgIGJyYW5jaDogdXRpbHNfMS5maWx0ZXJUeXBlKGFyZ3VtZW50c1sxXSwgdXRpbHNfMS5maWx0ZXJTdHJpbmcpLFxuICAgICAgICB9LCB1dGlsc18xLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzaywgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxuICAgIHN0YXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3N0YXNoJywgLi4udXRpbHNfMS5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKV0pLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICB9XG4gICAgc3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhzdGF0dXNfMS5zdGF0dXNUYXNrKHV0aWxzXzEuZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICB9XG59XG5leHBvcnRzLlNpbXBsZUdpdEFwaSA9IFNpbXBsZUdpdEFwaTtcbk9iamVjdC5hc3NpZ24oU2ltcGxlR2l0QXBpLnByb3RvdHlwZSwgY29uZmlnXzEuZGVmYXVsdCgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZS1naXQtYXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVEZWZlcnJlZCA9IGV4cG9ydHMuZGVmZXJyZWQgPSB2b2lkIDA7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYERlZmVycmVkUHJvbWlzZWBcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gaW1wb3J0IHtkZWZlcnJlZH0gZnJvbSAnQGt3c2l0ZXMvcHJvbWlzZS1kZWZlcnJlZGA7XG4gYGBgXG4gKi9cbmZ1bmN0aW9uIGRlZmVycmVkKCkge1xuICAgIGxldCBkb25lO1xuICAgIGxldCBmYWlsO1xuICAgIGxldCBzdGF0dXMgPSAncGVuZGluZyc7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChfZG9uZSwgX2ZhaWwpID0+IHtcbiAgICAgICAgZG9uZSA9IF9kb25lO1xuICAgICAgICBmYWlsID0gX2ZhaWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgZG9uZShyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdyZXNvbHZlZCc7XG4gICAgICAgICAgICAgICAgZG9uZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAncmVqZWN0ZWQnO1xuICAgICAgICAgICAgICAgIGZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXQgZnVsZmlsbGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cyAhPT0gJ3BlbmRpbmcnO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZlcnJlZCA9IGRlZmVycmVkO1xuLyoqXG4gKiBBbGlhcyBvZiB0aGUgZXhwb3J0ZWQgYGRlZmVycmVkYCBmdW5jdGlvbiwgdG8gaGVscCBjb25zdW1lcnMgd2FudGluZyB0byB1c2UgYGRlZmVycmVkYCBhcyB0aGVcbiAqIGxvY2FsIHZhcmlhYmxlIG5hbWUgcmF0aGVyIHRoYW4gdGhlIGZhY3RvcnkgaW1wb3J0IG5hbWUsIHdpdGhvdXQgbmVlZGluZyB0byByZW5hbWUgb24gaW1wb3J0LlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQge2NyZWF0ZURlZmVycmVkfSBmcm9tICdAa3dzaXRlcy9wcm9taXNlLWRlZmVycmVkYDtcbiBgYGBcbiAqL1xuZXhwb3J0cy5jcmVhdGVEZWZlcnJlZCA9IGRlZmVycmVkO1xuLyoqXG4gKiBEZWZhdWx0IGV4cG9ydCBhbGxvd3MgdXNlIGFzOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQgZGVmZXJyZWQgZnJvbSAnQGt3c2l0ZXMvcHJvbWlzZS1kZWZlcnJlZGA7XG4gYGBgXG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmVycmVkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNjaGVkdWxlciA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwcm9taXNlX2RlZmVycmVkXzEgPSByZXF1aXJlKFwiQGt3c2l0ZXMvcHJvbWlzZS1kZWZlcnJlZFwiKTtcbmNvbnN0IGdpdF9sb2dnZXJfMSA9IHJlcXVpcmUoXCIuLi9naXQtbG9nZ2VyXCIpO1xuY29uc3QgY3JlYXRlU2NoZWR1bGVkVGFzayA9ICgoKSA9PiB7XG4gICAgbGV0IGlkID0gMDtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZCsrO1xuICAgICAgICBjb25zdCB7IHByb21pc2UsIGRvbmUgfSA9IHByb21pc2VfZGVmZXJyZWRfMS5jcmVhdGVEZWZlcnJlZCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgICAgIGRvbmUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgfTtcbiAgICB9O1xufSkoKTtcbmNsYXNzIFNjaGVkdWxlciB7XG4gICAgY29uc3RydWN0b3IoY29uY3VycmVuY3kgPSAyKSB7XG4gICAgICAgIHRoaXMuY29uY3VycmVuY3kgPSBjb25jdXJyZW5jeTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBnaXRfbG9nZ2VyXzEuY3JlYXRlTG9nZ2VyKCcnLCAnc2NoZWR1bGVyJyk7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IFtdO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBbXTtcbiAgICAgICAgdGhpcy5sb2dnZXIoYENvbnN0cnVjdGVkLCBjb25jdXJyZW5jeT0lc2AsIGNvbmN1cnJlbmN5KTtcbiAgICB9XG4gICAgc2NoZWR1bGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wZW5kaW5nLmxlbmd0aCB8fCB0aGlzLnJ1bm5pbmcubGVuZ3RoID49IHRoaXMuY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyKGBTY2hlZHVsZSBhdHRlbXB0IGlnbm9yZWQsIHBlbmRpbmc9JXMgcnVubmluZz0lcyBjb25jdXJyZW5jeT0lc2AsIHRoaXMucGVuZGluZy5sZW5ndGgsIHRoaXMucnVubmluZy5sZW5ndGgsIHRoaXMuY29uY3VycmVuY3kpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2sgPSB1dGlsc18xLmFwcGVuZCh0aGlzLnJ1bm5pbmcsIHRoaXMucGVuZGluZy5zaGlmdCgpKTtcbiAgICAgICAgdGhpcy5sb2dnZXIoYEF0dGVtcHRpbmcgaWQ9JXNgLCB0YXNrLmlkKTtcbiAgICAgICAgdGFzay5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyKGBDb21wbGV0aW5nIGlkPWAsIHRhc2suaWQpO1xuICAgICAgICAgICAgdXRpbHNfMS5yZW1vdmUodGhpcy5ydW5uaW5nLCB0YXNrKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvbWlzZSwgaWQgfSA9IHV0aWxzXzEuYXBwZW5kKHRoaXMucGVuZGluZywgY3JlYXRlU2NoZWR1bGVkVGFzaygpKTtcbiAgICAgICAgdGhpcy5sb2dnZXIoYFNjaGVkdWxpbmcgaWQ9JXNgLCBpZCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufVxuZXhwb3J0cy5TY2hlZHVsZXIgPSBTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFwcGx5UGF0Y2hUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmZ1bmN0aW9uIGFwcGx5UGF0Y2hUYXNrKHBhdGNoZXMsIGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydhcHBseScsIC4uLmN1c3RvbUFyZ3MsIC4uLnBhdGNoZXNdKTtcbn1cbmV4cG9ydHMuYXBwbHlQYXRjaFRhc2sgPSBhcHBseVBhdGNoVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcGx5LXBhdGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1NpbmdsZUJyYW5jaERlbGV0ZUZhaWx1cmUgPSBleHBvcnRzLmJyYW5jaERlbGV0aW9uRmFpbHVyZSA9IGV4cG9ydHMuYnJhbmNoRGVsZXRpb25TdWNjZXNzID0gZXhwb3J0cy5CcmFuY2hEZWxldGlvbkJhdGNoID0gdm9pZCAwO1xuY2xhc3MgQnJhbmNoRGVsZXRpb25CYXRjaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWxsID0gW107XG4gICAgICAgIHRoaXMuYnJhbmNoZXMgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB9XG4gICAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5lcnJvcnMubGVuZ3RoO1xuICAgIH1cbn1cbmV4cG9ydHMuQnJhbmNoRGVsZXRpb25CYXRjaCA9IEJyYW5jaERlbGV0aW9uQmF0Y2g7XG5mdW5jdGlvbiBicmFuY2hEZWxldGlvblN1Y2Nlc3MoYnJhbmNoLCBoYXNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnJhbmNoLCBoYXNoLCBzdWNjZXNzOiB0cnVlLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaERlbGV0aW9uU3VjY2VzcyA9IGJyYW5jaERlbGV0aW9uU3VjY2VzcztcbmZ1bmN0aW9uIGJyYW5jaERlbGV0aW9uRmFpbHVyZShicmFuY2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBicmFuY2gsIGhhc2g6IG51bGwsIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaERlbGV0aW9uRmFpbHVyZSA9IGJyYW5jaERlbGV0aW9uRmFpbHVyZTtcbmZ1bmN0aW9uIGlzU2luZ2xlQnJhbmNoRGVsZXRlRmFpbHVyZSh0ZXN0KSB7XG4gICAgcmV0dXJuIHRlc3Quc3VjY2Vzcztcbn1cbmV4cG9ydHMuaXNTaW5nbGVCcmFuY2hEZWxldGVGYWlsdXJlID0gaXNTaW5nbGVCcmFuY2hEZWxldGVGYWlsdXJlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnJhbmNoRGVsZXRlU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzQnJhbmNoRGVsZXRpb25FcnJvciA9IGV4cG9ydHMucGFyc2VCcmFuY2hEZWxldGlvbnMgPSB2b2lkIDA7XG5jb25zdCBCcmFuY2hEZWxldGVTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0JyYW5jaERlbGV0ZVN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgZGVsZXRlU3VjY2Vzc1JlZ2V4ID0gLyhcXFMrKVxccytcXChcXFMrXFxzKFteKV0rKVxcKS87XG5jb25zdCBkZWxldGVFcnJvclJlZ2V4ID0gL15lcnJvclteJ10rJyhbXiddKyknL207XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoZGVsZXRlU3VjY2Vzc1JlZ2V4LCAocmVzdWx0LCBbYnJhbmNoLCBoYXNoXSkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGlvbiA9IEJyYW5jaERlbGV0ZVN1bW1hcnlfMS5icmFuY2hEZWxldGlvblN1Y2Nlc3MoYnJhbmNoLCBoYXNoKTtcbiAgICAgICAgcmVzdWx0LmFsbC5wdXNoKGRlbGV0aW9uKTtcbiAgICAgICAgcmVzdWx0LmJyYW5jaGVzW2JyYW5jaF0gPSBkZWxldGlvbjtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKGRlbGV0ZUVycm9yUmVnZXgsIChyZXN1bHQsIFticmFuY2hdKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uID0gQnJhbmNoRGVsZXRlU3VtbWFyeV8xLmJyYW5jaERlbGV0aW9uRmFpbHVyZShicmFuY2gpO1xuICAgICAgICByZXN1bHQuZXJyb3JzLnB1c2goZGVsZXRpb24pO1xuICAgICAgICByZXN1bHQuYWxsLnB1c2goZGVsZXRpb24pO1xuICAgICAgICByZXN1bHQuYnJhbmNoZXNbYnJhbmNoXSA9IGRlbGV0aW9uO1xuICAgIH0pLFxuXTtcbmNvbnN0IHBhcnNlQnJhbmNoRGVsZXRpb25zID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgQnJhbmNoRGVsZXRlU3VtbWFyeV8xLkJyYW5jaERlbGV0aW9uQmF0Y2goKSwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufTtcbmV4cG9ydHMucGFyc2VCcmFuY2hEZWxldGlvbnMgPSBwYXJzZUJyYW5jaERlbGV0aW9ucztcbmZ1bmN0aW9uIGhhc0JyYW5jaERlbGV0aW9uRXJyb3IoZGF0YSwgcHJvY2Vzc0V4aXRDb2RlKSB7XG4gICAgcmV0dXJuIHByb2Nlc3NFeGl0Q29kZSA9PT0gdXRpbHNfMS5FeGl0Q29kZXMuRVJST1IgJiYgZGVsZXRlRXJyb3JSZWdleC50ZXN0KGRhdGEpO1xufVxuZXhwb3J0cy5oYXNCcmFuY2hEZWxldGlvbkVycm9yID0gaGFzQnJhbmNoRGVsZXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWJyYW5jaC1kZWxldGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJyYW5jaFN1bW1hcnlSZXN1bHQgPSB2b2lkIDA7XG5jbGFzcyBCcmFuY2hTdW1tYXJ5UmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbGwgPSBbXTtcbiAgICAgICAgdGhpcy5icmFuY2hlcyA9IHt9O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAnJztcbiAgICAgICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBwdXNoKGN1cnJlbnQsIGRldGFjaGVkLCBuYW1lLCBjb21taXQsIGxhYmVsKSB7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRldGFjaGVkID0gZGV0YWNoZWQ7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxsLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuYnJhbmNoZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGNvbW1pdDogY29tbWl0LFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5CcmFuY2hTdW1tYXJ5UmVzdWx0ID0gQnJhbmNoU3VtbWFyeVJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJyYW5jaFN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQnJhbmNoU3VtbWFyeSA9IHZvaWQgMDtcbmNvbnN0IEJyYW5jaFN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQnJhbmNoU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL14oXFwqXFxzKT9cXCgoPzpIRUFEICk/ZGV0YWNoZWQgKD86ZnJvbXxhdCkgKFxcUyspXFwpXFxzKyhbYS16MC05XSspXFxzKC4qKSQvLCAocmVzdWx0LCBbY3VycmVudCwgbmFtZSwgY29tbWl0LCBsYWJlbF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2goISFjdXJyZW50LCB0cnVlLCBuYW1lLCBjb21taXQsIGxhYmVsKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eKFxcKlxccyk/KFxcUyspXFxzKyhbYS16MC05XSspXFxzKC4qKSQvcywgKHJlc3VsdCwgW2N1cnJlbnQsIG5hbWUsIGNvbW1pdCwgbGFiZWxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoKCEhY3VycmVudCwgZmFsc2UsIG5hbWUsIGNvbW1pdCwgbGFiZWwpO1xuICAgIH0pXG5dO1xuZnVuY3Rpb24gcGFyc2VCcmFuY2hTdW1tYXJ5KHN0ZE91dCkge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IEJyYW5jaFN1bW1hcnlfMS5CcmFuY2hTdW1tYXJ5UmVzdWx0KCksIHBhcnNlcnMsIHN0ZE91dCk7XG59XG5leHBvcnRzLnBhcnNlQnJhbmNoU3VtbWFyeSA9IHBhcnNlQnJhbmNoU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWJyYW5jaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVsZXRlQnJhbmNoVGFzayA9IGV4cG9ydHMuZGVsZXRlQnJhbmNoZXNUYXNrID0gZXhwb3J0cy5icmFuY2hMb2NhbFRhc2sgPSBleHBvcnRzLmJyYW5jaFRhc2sgPSBleHBvcnRzLmNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZCA9IHZvaWQgMDtcbmNvbnN0IGdpdF9yZXNwb25zZV9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3JcIik7XG5jb25zdCBwYXJzZV9icmFuY2hfZGVsZXRlXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1icmFuY2gtZGVsZXRlXCIpO1xuY29uc3QgcGFyc2VfYnJhbmNoXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1icmFuY2hcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kKGNvbW1hbmRzKSB7XG4gICAgY29uc3QgZGVsZXRlQ29tbWFuZHMgPSBbJy1kJywgJy1EJywgJy0tZGVsZXRlJ107XG4gICAgcmV0dXJuIGNvbW1hbmRzLnNvbWUoY29tbWFuZCA9PiBkZWxldGVDb21tYW5kcy5pbmNsdWRlcyhjb21tYW5kKSk7XG59XG5leHBvcnRzLmNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZCA9IGNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZDtcbmZ1bmN0aW9uIGJyYW5jaFRhc2soY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGlzRGVsZXRlID0gY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kKGN1c3RvbUFyZ3MpO1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydicmFuY2gnLCAuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goJy1hJyk7XG4gICAgfVxuICAgIGlmICghY29tbWFuZHMuaW5jbHVkZXMoJy12JykpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsICctdicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBwYXJzZXIoc3RkT3V0LCBzdGRFcnIpIHtcbiAgICAgICAgICAgIGlmIChpc0RlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfZGVsZXRlXzEucGFyc2VCcmFuY2hEZWxldGlvbnMoc3RkT3V0LCBzdGRFcnIpLmFsbFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfMS5wYXJzZUJyYW5jaFN1bW1hcnkoc3RkT3V0KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5icmFuY2hUYXNrID0gYnJhbmNoVGFzaztcbmZ1bmN0aW9uIGJyYW5jaExvY2FsVGFzaygpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZV9icmFuY2hfMS5wYXJzZUJyYW5jaFN1bW1hcnk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWydicmFuY2gnLCAnLXYnXSxcbiAgICAgICAgcGFyc2VyLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaExvY2FsVGFzayA9IGJyYW5jaExvY2FsVGFzaztcbmZ1bmN0aW9uIGRlbGV0ZUJyYW5jaGVzVGFzayhicmFuY2hlcywgZm9yY2VEZWxldGUgPSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHM6IFsnYnJhbmNoJywgJy12JywgZm9yY2VEZWxldGUgPyAnLUQnIDogJy1kJywgLi4uYnJhbmNoZXNdLFxuICAgICAgICBwYXJzZXIoc3RkT3V0LCBzdGRFcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfZGVsZXRlXzEucGFyc2VCcmFuY2hEZWxldGlvbnMoc3RkT3V0LCBzdGRFcnIpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yKHsgZXhpdENvZGUsIHN0ZE91dCB9LCBlcnJvciwgZG9uZSwgZmFpbCkge1xuICAgICAgICAgICAgaWYgKCFwYXJzZV9icmFuY2hfZGVsZXRlXzEuaGFzQnJhbmNoRGVsZXRpb25FcnJvcihTdHJpbmcoZXJyb3IpLCBleGl0Q29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lKHN0ZE91dCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVsZXRlQnJhbmNoZXNUYXNrID0gZGVsZXRlQnJhbmNoZXNUYXNrO1xuZnVuY3Rpb24gZGVsZXRlQnJhbmNoVGFzayhicmFuY2gsIGZvcmNlRGVsZXRlID0gZmFsc2UpIHtcbiAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ2JyYW5jaCcsICctdicsIGZvcmNlRGVsZXRlID8gJy1EJyA6ICctZCcsIGJyYW5jaF0sXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF9kZWxldGVfMS5wYXJzZUJyYW5jaERlbGV0aW9ucyhzdGRPdXQsIHN0ZEVycikuYnJhbmNoZXNbYnJhbmNoXTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcih7IGV4aXRDb2RlLCBzdGRFcnIsIHN0ZE91dCB9LCBlcnJvciwgXywgZmFpbCkge1xuICAgICAgICAgICAgaWYgKCFwYXJzZV9icmFuY2hfZGVsZXRlXzEuaGFzQnJhbmNoRGVsZXRpb25FcnJvcihTdHJpbmcoZXJyb3IpLCBleGl0Q29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEuR2l0UmVzcG9uc2VFcnJvcih0YXNrLnBhcnNlcih1dGlsc18xLmJ1ZmZlclRvU3RyaW5nKHN0ZE91dCksIHV0aWxzXzEuYnVmZmVyVG9TdHJpbmcoc3RkRXJyKSksIFN0cmluZyhlcnJvcikpO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHRhc2s7XG59XG5leHBvcnRzLmRlbGV0ZUJyYW5jaFRhc2sgPSBkZWxldGVCcmFuY2hUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJhbmNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZUNoZWNrSWdub3JlID0gdm9pZCAwO1xuLyoqXG4gKiBQYXJzZXIgZm9yIHRoZSBgY2hlY2staWdub3JlYCBjb21tYW5kIC0gcmV0dXJucyBlYWNoIGZpbGUgYXMgYSBzdHJpbmcgYXJyYXlcbiAqL1xuY29uc3QgcGFyc2VDaGVja0lnbm9yZSA9ICh0ZXh0KSA9PiB7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoL1xcbi9nKVxuICAgICAgICAubWFwKGxpbmUgPT4gbGluZS50cmltKCkpXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiAhIWZpbGUpO1xufTtcbmV4cG9ydHMucGFyc2VDaGVja0lnbm9yZSA9IHBhcnNlQ2hlY2tJZ25vcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGVja0lnbm9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2hlY2tJZ25vcmVUYXNrID0gdm9pZCAwO1xuY29uc3QgQ2hlY2tJZ25vcmVfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQ2hlY2tJZ25vcmVcIik7XG5mdW5jdGlvbiBjaGVja0lnbm9yZVRhc2socGF0aHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydjaGVjay1pZ25vcmUnLCAuLi5wYXRoc10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBDaGVja0lnbm9yZV8xLnBhcnNlQ2hlY2tJZ25vcmUsXG4gICAgfTtcbn1cbmV4cG9ydHMuY2hlY2tJZ25vcmVUYXNrID0gY2hlY2tJZ25vcmVUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hlY2staWdub3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbG9uZU1pcnJvclRhc2sgPSBleHBvcnRzLmNsb25lVGFzayA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gY2xvbmVUYXNrKHJlcG8sIGRpcmVjdG9yeSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjbG9uZScsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmICh0eXBlb2YgcmVwbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChyZXBvKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXJlY3RvcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goZGlyZWN0b3J5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKTtcbn1cbmV4cG9ydHMuY2xvbmVUYXNrID0gY2xvbmVUYXNrO1xuZnVuY3Rpb24gY2xvbmVNaXJyb3JUYXNrKHJlcG8sIGRpcmVjdG9yeSwgY3VzdG9tQXJncykge1xuICAgIHV0aWxzXzEuYXBwZW5kKGN1c3RvbUFyZ3MsICctLW1pcnJvcicpO1xuICAgIHJldHVybiBjbG9uZVRhc2socmVwbywgZGlyZWN0b3J5LCBjdXN0b21BcmdzKTtcbn1cbmV4cG9ydHMuY2xvbmVNaXJyb3JUYXNrID0gY2xvbmVNaXJyb3JUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xvbmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQ29tbWl0UmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXlxcWyhbXlxcc10rKSggXFwoW14pXStcXCkpPyAoW15cXF1dKykvLCAocmVzdWx0LCBbYnJhbmNoLCByb290LCBjb21taXRdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5icmFuY2ggPSBicmFuY2g7XG4gICAgICAgIHJlc3VsdC5jb21taXQgPSBjb21taXQ7XG4gICAgICAgIHJlc3VsdC5yb290ID0gISFyb290O1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL1xccypBdXRob3I6XFxzKC4rKS9pLCAocmVzdWx0LCBbYXV0aG9yXSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGF1dGhvci5zcGxpdCgnPCcpO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHBhcnRzLnBvcCgpO1xuICAgICAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF1dGhvciA9IHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbC5zdWJzdHIoMCwgZW1haWwubGVuZ3RoIC0gMSksXG4gICAgICAgICAgICBuYW1lOiBwYXJ0cy5qb2luKCc8JykudHJpbSgpXG4gICAgICAgIH07XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvKFxcZCspW14sXSooPzosXFxzKihcXGQrKVteLF0qKSg/OixcXHMqKFxcZCspKS9nLCAocmVzdWx0LCBbY2hhbmdlcywgaW5zZXJ0aW9ucywgZGVsZXRpb25zXSkgPT4ge1xuICAgICAgICByZXN1bHQuc3VtbWFyeS5jaGFuZ2VzID0gcGFyc2VJbnQoY2hhbmdlcywgMTApIHx8IDA7XG4gICAgICAgIHJlc3VsdC5zdW1tYXJ5Lmluc2VydGlvbnMgPSBwYXJzZUludChpbnNlcnRpb25zLCAxMCkgfHwgMDtcbiAgICAgICAgcmVzdWx0LnN1bW1hcnkuZGVsZXRpb25zID0gcGFyc2VJbnQoZGVsZXRpb25zLCAxMCkgfHwgMDtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eKFxcZCspW14sXSooPzosXFxzKihcXGQrKVteKF0rXFwoKFsrLV0pKT8vLCAocmVzdWx0LCBbY2hhbmdlcywgbGluZXMsIGRpcmVjdGlvbl0pID0+IHtcbiAgICAgICAgcmVzdWx0LnN1bW1hcnkuY2hhbmdlcyA9IHBhcnNlSW50KGNoYW5nZXMsIDEwKSB8fCAwO1xuICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KGxpbmVzLCAxMCkgfHwgMDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5kZWxldGlvbnMgPSBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICcrJykge1xuICAgICAgICAgICAgcmVzdWx0LnN1bW1hcnkuaW5zZXJ0aW9ucyA9IGNvdW50O1xuICAgICAgICB9XG4gICAgfSksXG5dO1xuZnVuY3Rpb24gcGFyc2VDb21taXRSZXN1bHQoc3RkT3V0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBhdXRob3I6IG51bGwsXG4gICAgICAgIGJyYW5jaDogJycsXG4gICAgICAgIGNvbW1pdDogJycsXG4gICAgICAgIHJvb3Q6IGZhbHNlLFxuICAgICAgICBzdW1tYXJ5OiB7XG4gICAgICAgICAgICBjaGFuZ2VzOiAwLFxuICAgICAgICAgICAgaW5zZXJ0aW9uczogMCxcbiAgICAgICAgICAgIGRlbGV0aW9uczogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UocmVzdWx0LCBwYXJzZXJzLCBzdGRPdXQpO1xufVxuZXhwb3J0cy5wYXJzZUNvbW1pdFJlc3VsdCA9IHBhcnNlQ29tbWl0UmVzdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtY29tbWl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb21taXRUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfY29tbWl0XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1jb21taXRcIik7XG5mdW5jdGlvbiBjb21taXRUYXNrKG1lc3NhZ2UsIGZpbGVzLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2NvbW1pdCddO1xuICAgIG1lc3NhZ2UuZm9yRWFjaCgobSkgPT4gY29tbWFuZHMucHVzaCgnLW0nLCBtKSk7XG4gICAgY29tbWFuZHMucHVzaCguLi5maWxlcywgLi4uY3VzdG9tQXJncyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9jb21taXRfMS5wYXJzZUNvbW1pdFJlc3VsdCxcbiAgICB9O1xufVxuZXhwb3J0cy5jb21taXRUYXNrID0gY29tbWl0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1pdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGlmZlN1bW1hcnkgPSB2b2lkIDA7XG4vKioqXG4gKiBUaGUgRGlmZlN1bW1hcnkgaXMgcmV0dXJuZWQgYXMgYSByZXNwb25zZSB0byBnZXR0aW5nIGBnaXQoKS5zdGF0dXMoKWBcbiAqL1xuY2xhc3MgRGlmZlN1bW1hcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSAwO1xuICAgICAgICB0aGlzLmRlbGV0aW9ucyA9IDA7XG4gICAgICAgIHRoaXMuaW5zZXJ0aW9ucyA9IDA7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICB9XG59XG5leHBvcnRzLkRpZmZTdW1tYXJ5ID0gRGlmZlN1bW1hcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EaWZmU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VEaWZmUmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgRGlmZlN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvRGlmZlN1bW1hcnlcIik7XG5mdW5jdGlvbiBwYXJzZURpZmZSZXN1bHQoc3RkT3V0KSB7XG4gICAgY29uc3QgbGluZXMgPSBzdGRPdXQudHJpbSgpLnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCBzdGF0dXMgPSBuZXcgRGlmZlN1bW1hcnlfMS5EaWZmU3VtbWFyeSgpO1xuICAgIHJlYWRTdW1tYXJ5TGluZShzdGF0dXMsIGxpbmVzLnBvcCgpKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbGluZXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICB0ZXh0RmlsZUNoYW5nZShsaW5lLCBzdGF0dXMpIHx8IGJpbmFyeUZpbGVDaGFuZ2UobGluZSwgc3RhdHVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbn1cbmV4cG9ydHMucGFyc2VEaWZmUmVzdWx0ID0gcGFyc2VEaWZmUmVzdWx0O1xuZnVuY3Rpb24gcmVhZFN1bW1hcnlMaW5lKHN0YXR1cywgc3VtbWFyeSkge1xuICAgIChzdW1tYXJ5IHx8ICcnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnLCAnKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gLyhcXGQrKVxccyhbYS16XSspLy5leGVjKHRleHQpO1xuICAgICAgICBpZiAoIXN1bW1hcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdW1tYXJ5VHlwZShzdGF0dXMsIHN1bW1hcnlbMl0sIHBhcnNlSW50KHN1bW1hcnlbMV0sIDEwKSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzdW1tYXJ5VHlwZShzdGF0dXMsIGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBtYXRjaCA9ICgvKFthLXpdKz8pcz9cXGIvLmV4ZWMoa2V5KSk7XG4gICAgaWYgKCFtYXRjaCB8fCAhc3RhdHVzVXBkYXRlW21hdGNoWzFdXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXR1c1VwZGF0ZVttYXRjaFsxXV0oc3RhdHVzLCB2YWx1ZSk7XG59XG5jb25zdCBzdGF0dXNVcGRhdGUgPSB7XG4gICAgZmlsZShzdGF0dXMsIHZhbHVlKSB7XG4gICAgICAgIHN0YXR1cy5jaGFuZ2VkID0gdmFsdWU7XG4gICAgfSxcbiAgICBkZWxldGlvbihzdGF0dXMsIHZhbHVlKSB7XG4gICAgICAgIHN0YXR1cy5kZWxldGlvbnMgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGluc2VydGlvbihzdGF0dXMsIHZhbHVlKSB7XG4gICAgICAgIHN0YXR1cy5pbnNlcnRpb25zID0gdmFsdWU7XG4gICAgfVxufTtcbmZ1bmN0aW9uIHRleHRGaWxlQ2hhbmdlKGlucHV0LCB7IGZpbGVzIH0pIHtcbiAgICBjb25zdCBsaW5lID0gaW5wdXQudHJpbSgpLm1hdGNoKC9eKC4rKVxccytcXHxcXHMrKFxcZCspKFxccytbK1xcLV0rKT8kLyk7XG4gICAgaWYgKGxpbmUpIHtcbiAgICAgICAgdmFyIGFsdGVyYXRpb25zID0gKGxpbmVbM10gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgICBmaWxlOiBsaW5lWzFdLnRyaW0oKSxcbiAgICAgICAgICAgIGNoYW5nZXM6IHBhcnNlSW50KGxpbmVbMl0sIDEwKSxcbiAgICAgICAgICAgIGluc2VydGlvbnM6IGFsdGVyYXRpb25zLnJlcGxhY2UoLy0vZywgJycpLmxlbmd0aCxcbiAgICAgICAgICAgIGRlbGV0aW9uczogYWx0ZXJhdGlvbnMucmVwbGFjZSgvXFwrL2csICcnKS5sZW5ndGgsXG4gICAgICAgICAgICBiaW5hcnk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYmluYXJ5RmlsZUNoYW5nZShpbnB1dCwgeyBmaWxlcyB9KSB7XG4gICAgY29uc3QgbGluZSA9IGlucHV0Lm1hdGNoKC9eKC4rKSBcXHxcXHMrQmluIChbMC05Ll0rKSAtPiAoWzAtOS5dKykgKFthLXpdKykkLyk7XG4gICAgaWYgKGxpbmUpIHtcbiAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgICBmaWxlOiBsaW5lWzFdLnRyaW0oKSxcbiAgICAgICAgICAgIGJlZm9yZTogK2xpbmVbMl0sXG4gICAgICAgICAgICBhZnRlcjogK2xpbmVbM10sXG4gICAgICAgICAgICBiaW5hcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1kaWZmLXN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpZmZTdW1tYXJ5VGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX2RpZmZfc3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtZGlmZi1zdW1tYXJ5XCIpO1xuZnVuY3Rpb24gZGlmZlN1bW1hcnlUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydkaWZmJywgJy0tc3RhdD00MDk2JywgLi4uY3VzdG9tQXJnc10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHN0ZE91dCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2RpZmZfc3VtbWFyeV8xLnBhcnNlRGlmZlJlc3VsdChzdGRPdXQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuZGlmZlN1bW1hcnlUYXNrID0gZGlmZlN1bW1hcnlUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlmZi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VGZXRjaFJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL0Zyb20gKC4rKSQvLCAocmVzdWx0LCBbcmVtb3RlXSkgPT4ge1xuICAgICAgICByZXN1bHQucmVtb3RlID0gcmVtb3RlO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL1xcKiBcXFtuZXcgYnJhbmNoXVxccysoXFxTKylcXHMqLT4gKC4rKSQvLCAocmVzdWx0LCBbbmFtZSwgdHJhY2tpbmddKSA9PiB7XG4gICAgICAgIHJlc3VsdC5icmFuY2hlcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0cmFja2luZyxcbiAgICAgICAgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXFwqIFxcW25ldyB0YWddXFxzKyhcXFMrKVxccyotPiAoLispJC8sIChyZXN1bHQsIFtuYW1lLCB0cmFja2luZ10pID0+IHtcbiAgICAgICAgcmVzdWx0LnRhZ3MucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdHJhY2tpbmcsXG4gICAgICAgIH0pO1xuICAgIH0pXG5dO1xuZnVuY3Rpb24gcGFyc2VGZXRjaFJlc3VsdChzdGRPdXQsIHN0ZEVycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgcmF3OiBzdGRPdXQsXG4gICAgICAgIHJlbW90ZTogbnVsbCxcbiAgICAgICAgYnJhbmNoZXM6IFtdLFxuICAgICAgICB0YWdzOiBbXSxcbiAgICB9O1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UocmVzdWx0LCBwYXJzZXJzLCBzdGRPdXQsIHN0ZEVycik7XG59XG5leHBvcnRzLnBhcnNlRmV0Y2hSZXN1bHQgPSBwYXJzZUZldGNoUmVzdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtZmV0Y2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZldGNoVGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX2ZldGNoXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1mZXRjaFwiKTtcbmZ1bmN0aW9uIGZldGNoVGFzayhyZW1vdGUsIGJyYW5jaCwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydmZXRjaCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChyZW1vdGUgJiYgYnJhbmNoKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2gocmVtb3RlLCBicmFuY2gpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHBhcnNlX2ZldGNoXzEucGFyc2VGZXRjaFJlc3VsdCxcbiAgICB9O1xufVxuZXhwb3J0cy5mZXRjaFRhc2sgPSBmZXRjaFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZXRjaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIgPSBleHBvcnRzLlNQTElUVEVSID0gZXhwb3J0cy5DT01NSVRfQk9VTkRBUlkgPSBleHBvcnRzLlNUQVJUX0JPVU5EQVJZID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlX2RpZmZfc3VtbWFyeV8xID0gcmVxdWlyZShcIi4vcGFyc2UtZGlmZi1zdW1tYXJ5XCIpO1xuZXhwb3J0cy5TVEFSVF9CT1VOREFSWSA9ICfDssOyw7LDssOyw7IgJztcbmV4cG9ydHMuQ09NTUlUX0JPVU5EQVJZID0gJyDDssOyJztcbmV4cG9ydHMuU1BMSVRURVIgPSAnIMOyICc7XG5jb25zdCBkZWZhdWx0RmllbGROYW1lcyA9IFsnaGFzaCcsICdkYXRlJywgJ21lc3NhZ2UnLCAncmVmcycsICdhdXRob3JfbmFtZScsICdhdXRob3JfZW1haWwnXTtcbmZ1bmN0aW9uIGxpbmVCdWlsZGVyKHRva2VucywgZmllbGRzKSB7XG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKGxpbmUsIGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBsaW5lW2ZpZWxkXSA9IHRva2Vuc1tpbmRleF0gfHwgJyc7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH0sIE9iamVjdC5jcmVhdGUoeyBkaWZmOiBudWxsIH0pKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RMb2dTdW1tYXJ5UGFyc2VyKHNwbGl0dGVyID0gZXhwb3J0cy5TUExJVFRFUiwgZmllbGRzID0gZGVmYXVsdEZpZWxkTmFtZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0ZE91dCkge1xuICAgICAgICBjb25zdCBhbGwgPSB1dGlsc18xLnRvTGluZXNXaXRoQ29udGVudChzdGRPdXQsIHRydWUsIGV4cG9ydHMuU1RBUlRfQk9VTkRBUlkpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lRGV0YWlsID0gaXRlbS50cmltKCkuc3BsaXQoZXhwb3J0cy5DT01NSVRfQk9VTkRBUlkpO1xuICAgICAgICAgICAgY29uc3QgbGlzdExvZ0xpbmUgPSBsaW5lQnVpbGRlcihsaW5lRGV0YWlsWzBdLnRyaW0oKS5zcGxpdChzcGxpdHRlciksIGZpZWxkcyk7XG4gICAgICAgICAgICBpZiAobGluZURldGFpbC5sZW5ndGggPiAxICYmICEhbGluZURldGFpbFsxXS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBsaXN0TG9nTGluZS5kaWZmID0gcGFyc2VfZGlmZl9zdW1tYXJ5XzEucGFyc2VEaWZmUmVzdWx0KGxpbmVEZXRhaWxbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RMb2dMaW5lO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFsbCxcbiAgICAgICAgICAgIGxhdGVzdDogYWxsLmxlbmd0aCAmJiBhbGxbMF0gfHwgbnVsbCxcbiAgICAgICAgICAgIHRvdGFsOiBhbGwubGVuZ3RoLFxuICAgICAgICB9O1xuICAgIH07XG59XG5leHBvcnRzLmNyZWF0ZUxpc3RMb2dTdW1tYXJ5UGFyc2VyID0gY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1saXN0LWxvZy1zdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2dUYXNrID0gZXhwb3J0cy5wYXJzZUxvZ09wdGlvbnMgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBleGNsdWRlT3B0aW9ucztcbihmdW5jdGlvbiAoZXhjbHVkZU9wdGlvbnMpIHtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcIi0tcHJldHR5XCJdID0gMF0gPSBcIi0tcHJldHR5XCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJtYXgtY291bnRcIl0gPSAxXSA9IFwibWF4LWNvdW50XCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJtYXhDb3VudFwiXSA9IDJdID0gXCJtYXhDb3VudFwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wiblwiXSA9IDNdID0gXCJuXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJmaWxlXCJdID0gNF0gPSBcImZpbGVcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcImZvcm1hdFwiXSA9IDVdID0gXCJmb3JtYXRcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcImZyb21cIl0gPSA2XSA9IFwiZnJvbVwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1widG9cIl0gPSA3XSA9IFwidG9cIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcInNwbGl0dGVyXCJdID0gOF0gPSBcInNwbGl0dGVyXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJzeW1tZXRyaWNcIl0gPSA5XSA9IFwic3ltbWV0cmljXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJtdWx0aUxpbmVcIl0gPSAxMF0gPSBcIm11bHRpTGluZVwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wic3RyaWN0RGF0ZVwiXSA9IDExXSA9IFwic3RyaWN0RGF0ZVwiO1xufSkoZXhjbHVkZU9wdGlvbnMgfHwgKGV4Y2x1ZGVPcHRpb25zID0ge30pKTtcbmZ1bmN0aW9uIHByZXR0eUZvcm1hdChmb3JtYXQsIHNwbGl0dGVyKSB7XG4gICAgY29uc3QgZmllbGRzID0gW107XG4gICAgY29uc3QgZm9ybWF0U3RyID0gW107XG4gICAgT2JqZWN0LmtleXMoZm9ybWF0KS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBmaWVsZHMucHVzaChmaWVsZCk7XG4gICAgICAgIGZvcm1hdFN0ci5wdXNoKFN0cmluZyhmb3JtYXRbZmllbGRdKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgZmllbGRzLCBmb3JtYXRTdHIuam9pbihzcGxpdHRlcilcbiAgICBdO1xufVxuZnVuY3Rpb24gdXNlck9wdGlvbnMoaW5wdXQpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XG4gICAgT2JqZWN0LmtleXMoaW5wdXQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGtleSBpbiBleGNsdWRlT3B0aW9ucykge1xuICAgICAgICAgICAgZGVsZXRlIG91dHB1dFtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIHBhcnNlTG9nT3B0aW9ucyhvcHQgPSB7fSwgY3VzdG9tQXJncyA9IFtdKSB7XG4gICAgY29uc3Qgc3BsaXR0ZXIgPSBvcHQuc3BsaXR0ZXIgfHwgcGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xLlNQTElUVEVSO1xuICAgIGNvbnN0IGZvcm1hdCA9IG9wdC5mb3JtYXQgfHwge1xuICAgICAgICBoYXNoOiAnJUgnLFxuICAgICAgICBkYXRlOiBvcHQuc3RyaWN0RGF0ZSA9PT0gZmFsc2UgPyAnJWFpJyA6ICclYUknLFxuICAgICAgICBtZXNzYWdlOiAnJXMnLFxuICAgICAgICByZWZzOiAnJUQnLFxuICAgICAgICBib2R5OiBvcHQubXVsdGlMaW5lID8gJyVCJyA6ICclYicsXG4gICAgICAgIGF1dGhvcl9uYW1lOiAnJWFOJyxcbiAgICAgICAgYXV0aG9yX2VtYWlsOiAnJWFlJ1xuICAgIH07XG4gICAgY29uc3QgW2ZpZWxkcywgZm9ybWF0U3RyXSA9IHByZXR0eUZvcm1hdChmb3JtYXQsIHNwbGl0dGVyKTtcbiAgICBjb25zdCBzdWZmaXggPSBbXTtcbiAgICBjb25zdCBjb21tYW5kID0gW1xuICAgICAgICBgLS1wcmV0dHk9Zm9ybWF0OiR7cGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xLlNUQVJUX0JPVU5EQVJZfSR7Zm9ybWF0U3RyfSR7cGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xLkNPTU1JVF9CT1VOREFSWX1gLFxuICAgICAgICAuLi5jdXN0b21BcmdzLFxuICAgIF07XG4gICAgY29uc3QgbWF4Q291bnQgPSBvcHQubiB8fCBvcHRbJ21heC1jb3VudCddIHx8IG9wdC5tYXhDb3VudDtcbiAgICBpZiAobWF4Q291bnQpIHtcbiAgICAgICAgY29tbWFuZC5wdXNoKGAtLW1heC1jb3VudD0ke21heENvdW50fWApO1xuICAgIH1cbiAgICBpZiAob3B0LmZyb20gJiYgb3B0LnRvKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlT3BlcmF0b3IgPSAob3B0LnN5bW1ldHJpYyAhPT0gZmFsc2UpID8gJy4uLicgOiAnLi4nO1xuICAgICAgICBzdWZmaXgucHVzaChgJHtvcHQuZnJvbX0ke3JhbmdlT3BlcmF0b3J9JHtvcHQudG99YCk7XG4gICAgfVxuICAgIGlmIChvcHQuZmlsZSkge1xuICAgICAgICBzdWZmaXgucHVzaCgnLS1mb2xsb3cnLCBvcHQuZmlsZSk7XG4gICAgfVxuICAgIHV0aWxzXzEuYXBwZW5kVGFza09wdGlvbnModXNlck9wdGlvbnMob3B0KSwgY29tbWFuZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBzcGxpdHRlcixcbiAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAgIC4uLmNvbW1hbmQsXG4gICAgICAgICAgICAuLi5zdWZmaXgsXG4gICAgICAgIF0sXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyc2VMb2dPcHRpb25zID0gcGFyc2VMb2dPcHRpb25zO1xuZnVuY3Rpb24gbG9nVGFzayhzcGxpdHRlciwgZmllbGRzLCBjdXN0b21BcmdzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IFsnbG9nJywgLi4uY3VzdG9tQXJnc10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEuY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIoc3BsaXR0ZXIsIGZpZWxkcyksXG4gICAgfTtcbn1cbmV4cG9ydHMubG9nVGFzayA9IGxvZ1Rhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2cuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlTW92ZVJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15SZW5hbWluZyAoLispIHRvICguKykkLywgKHJlc3VsdCwgW2Zyb20sIHRvXSkgPT4ge1xuICAgICAgICByZXN1bHQubW92ZXMucHVzaCh7IGZyb20sIHRvIH0pO1xuICAgIH0pLFxuXTtcbmZ1bmN0aW9uIHBhcnNlTW92ZVJlc3VsdChzdGRPdXQpIHtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHsgbW92ZXM6IFtdIH0sIHBhcnNlcnMsIHN0ZE91dCk7XG59XG5leHBvcnRzLnBhcnNlTW92ZVJlc3VsdCA9IHBhcnNlTW92ZVJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLW1vdmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm1vdmVUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfbW92ZV8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtbW92ZVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBtb3ZlVGFzayhmcm9tLCB0bykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ212JywgJy12JywgLi4udXRpbHNfMS5hc0FycmF5KGZyb20pLCB0b10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9tb3ZlXzEucGFyc2VNb3ZlUmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLm1vdmVUYXNrID0gbW92ZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wdWxsVGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX3B1bGxfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLXB1bGxcIik7XG5mdW5jdGlvbiBwdWxsVGFzayhyZW1vdGUsIGJyYW5jaCwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydwdWxsJywgLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKHJlbW90ZSAmJiBicmFuY2gpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIHJlbW90ZSwgYnJhbmNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VfcHVsbF8xLnBhcnNlUHVsbFJlc3VsdChzdGRPdXQsIHN0ZEVycik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5wdWxsVGFzayA9IHB1bGxUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VHZXRSZW1vdGVzVmVyYm9zZSA9IGV4cG9ydHMucGFyc2VHZXRSZW1vdGVzID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHBhcnNlR2V0UmVtb3Rlcyh0ZXh0KSB7XG4gICAgY29uc3QgcmVtb3RlcyA9IHt9O1xuICAgIGZvckVhY2godGV4dCwgKFtuYW1lXSkgPT4gcmVtb3Rlc1tuYW1lXSA9IHsgbmFtZSB9KTtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZW1vdGVzKTtcbn1cbmV4cG9ydHMucGFyc2VHZXRSZW1vdGVzID0gcGFyc2VHZXRSZW1vdGVzO1xuZnVuY3Rpb24gcGFyc2VHZXRSZW1vdGVzVmVyYm9zZSh0ZXh0KSB7XG4gICAgY29uc3QgcmVtb3RlcyA9IHt9O1xuICAgIGZvckVhY2godGV4dCwgKFtuYW1lLCB1cmwsIHB1cnBvc2VdKSA9PiB7XG4gICAgICAgIGlmICghcmVtb3Rlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmVtb3Rlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHJlZnM6IHsgZmV0Y2g6ICcnLCBwdXNoOiAnJyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHVycG9zZSAmJiB1cmwpIHtcbiAgICAgICAgICAgIHJlbW90ZXNbbmFtZV0ucmVmc1twdXJwb3NlLnJlcGxhY2UoL1teYS16XS9nLCAnJyldID0gdXJsO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVtb3Rlcyk7XG59XG5leHBvcnRzLnBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UgPSBwYXJzZUdldFJlbW90ZXNWZXJib3NlO1xuZnVuY3Rpb24gZm9yRWFjaCh0ZXh0LCBoYW5kbGVyKSB7XG4gICAgdXRpbHNfMS5mb3JFYWNoTGluZVdpdGhDb250ZW50KHRleHQsIChsaW5lKSA9PiBoYW5kbGVyKGxpbmUuc3BsaXQoL1xccysvKSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R2V0UmVtb3RlU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3ZlUmVtb3RlVGFzayA9IGV4cG9ydHMucmVtb3RlVGFzayA9IGV4cG9ydHMubGlzdFJlbW90ZXNUYXNrID0gZXhwb3J0cy5nZXRSZW1vdGVzVGFzayA9IGV4cG9ydHMuYWRkUmVtb3RlVGFzayA9IHZvaWQgMDtcbmNvbnN0IEdldFJlbW90ZVN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvR2V0UmVtb3RlU3VtbWFyeVwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBhZGRSZW1vdGVUYXNrKHJlbW90ZU5hbWUsIHJlbW90ZVJlcG8sIGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JlbW90ZScsICdhZGQnLCAuLi5jdXN0b21BcmdzLCByZW1vdGVOYW1lLCByZW1vdGVSZXBvXSk7XG59XG5leHBvcnRzLmFkZFJlbW90ZVRhc2sgPSBhZGRSZW1vdGVUYXNrO1xuZnVuY3Rpb24gZ2V0UmVtb3Rlc1Rhc2sodmVyYm9zZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydyZW1vdGUnXTtcbiAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKCctdicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHZlcmJvc2UgPyBHZXRSZW1vdGVTdW1tYXJ5XzEucGFyc2VHZXRSZW1vdGVzVmVyYm9zZSA6IEdldFJlbW90ZVN1bW1hcnlfMS5wYXJzZUdldFJlbW90ZXMsXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0UmVtb3Rlc1Rhc2sgPSBnZXRSZW1vdGVzVGFzaztcbmZ1bmN0aW9uIGxpc3RSZW1vdGVzVGFzayhjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHNbMF0gIT09ICdscy1yZW1vdGUnKSB7XG4gICAgICAgIGNvbW1hbmRzLnVuc2hpZnQoJ2xzLXJlbW90ZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5saXN0UmVtb3Rlc1Rhc2sgPSBsaXN0UmVtb3Rlc1Rhc2s7XG5mdW5jdGlvbiByZW1vdGVUYXNrKGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWy4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChjb21tYW5kc1swXSAhPT0gJ3JlbW90ZScpIHtcbiAgICAgICAgY29tbWFuZHMudW5zaGlmdCgncmVtb3RlJyk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcyk7XG59XG5leHBvcnRzLnJlbW90ZVRhc2sgPSByZW1vdGVUYXNrO1xuZnVuY3Rpb24gcmVtb3ZlUmVtb3RlVGFzayhyZW1vdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsncmVtb3RlJywgJ3JlbW92ZScsIHJlbW90ZU5hbWVdKTtcbn1cbmV4cG9ydHMucmVtb3ZlUmVtb3RlVGFzayA9IHJlbW92ZVJlbW90ZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW1vdGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXNoTGlzdFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5XCIpO1xuY29uc3QgbG9nXzEgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5mdW5jdGlvbiBzdGFzaExpc3RUYXNrKG9wdCA9IHt9LCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGxvZ18xLnBhcnNlTG9nT3B0aW9ucyhvcHQpO1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5jcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlcihvcHRpb25zLnNwbGl0dGVyLCBvcHRpb25zLmZpZWxkcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IFsnc3Rhc2gnLCAnbGlzdCcsIC4uLm9wdGlvbnMuY29tbWFuZHMsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5zdGFzaExpc3RUYXNrID0gc3Rhc2hMaXN0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXNoLWxpc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVN1Yk1vZHVsZVRhc2sgPSBleHBvcnRzLnN1Yk1vZHVsZVRhc2sgPSBleHBvcnRzLmluaXRTdWJNb2R1bGVUYXNrID0gZXhwb3J0cy5hZGRTdWJNb2R1bGVUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmZ1bmN0aW9uIGFkZFN1Yk1vZHVsZVRhc2socmVwbywgcGF0aCkge1xuICAgIHJldHVybiBzdWJNb2R1bGVUYXNrKFsnYWRkJywgcmVwbywgcGF0aF0pO1xufVxuZXhwb3J0cy5hZGRTdWJNb2R1bGVUYXNrID0gYWRkU3ViTW9kdWxlVGFzaztcbmZ1bmN0aW9uIGluaXRTdWJNb2R1bGVUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4gc3ViTW9kdWxlVGFzayhbJ2luaXQnLCAuLi5jdXN0b21BcmdzXSk7XG59XG5leHBvcnRzLmluaXRTdWJNb2R1bGVUYXNrID0gaW5pdFN1Yk1vZHVsZVRhc2s7XG5mdW5jdGlvbiBzdWJNb2R1bGVUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHNbMF0gIT09ICdzdWJtb2R1bGUnKSB7XG4gICAgICAgIGNvbW1hbmRzLnVuc2hpZnQoJ3N1Ym1vZHVsZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5zdWJNb2R1bGVUYXNrID0gc3ViTW9kdWxlVGFzaztcbmZ1bmN0aW9uIHVwZGF0ZVN1Yk1vZHVsZVRhc2soY3VzdG9tQXJncykge1xuICAgIHJldHVybiBzdWJNb2R1bGVUYXNrKFsndXBkYXRlJywgLi4uY3VzdG9tQXJnc10pO1xufVxuZXhwb3J0cy51cGRhdGVTdWJNb2R1bGVUYXNrID0gdXBkYXRlU3ViTW9kdWxlVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1Yi1tb2R1bGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlVGFnTGlzdCA9IGV4cG9ydHMuVGFnTGlzdCA9IHZvaWQgMDtcbmNsYXNzIFRhZ0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKGFsbCwgbGF0ZXN0KSB7XG4gICAgICAgIHRoaXMuYWxsID0gYWxsO1xuICAgICAgICB0aGlzLmxhdGVzdCA9IGxhdGVzdDtcbiAgICB9XG59XG5leHBvcnRzLlRhZ0xpc3QgPSBUYWdMaXN0O1xuY29uc3QgcGFyc2VUYWdMaXN0ID0gZnVuY3Rpb24gKGRhdGEsIGN1c3RvbVNvcnQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRhZ3MgPSBkYXRhXG4gICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgLm1hcCh0cmltbWVkKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGlmICghY3VzdG9tU29ydCkge1xuICAgICAgICB0YWdzLnNvcnQoZnVuY3Rpb24gKHRhZ0EsIHRhZ0IpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzQSA9IHRhZ0Euc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzQiA9IHRhZ0Iuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGlmIChwYXJ0c0EubGVuZ3RoID09PSAxIHx8IHBhcnRzQi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2luZ2xlU29ydGVkKHRvTnVtYmVyKHBhcnRzQVswXSksIHRvTnVtYmVyKHBhcnRzQlswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBNYXRoLm1heChwYXJ0c0EubGVuZ3RoLCBwYXJ0c0IubGVuZ3RoKTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBzb3J0ZWQodG9OdW1iZXIocGFydHNBW2ldKSwgdG9OdW1iZXIocGFydHNCW2ldKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3QgPSBjdXN0b21Tb3J0ID8gdGFnc1swXSA6IFsuLi50YWdzXS5yZXZlcnNlKCkuZmluZCgodGFnKSA9PiB0YWcuaW5kZXhPZignLicpID49IDApO1xuICAgIHJldHVybiBuZXcgVGFnTGlzdCh0YWdzLCBsYXRlc3QpO1xufTtcbmV4cG9ydHMucGFyc2VUYWdMaXN0ID0gcGFyc2VUYWdMaXN0O1xuZnVuY3Rpb24gc2luZ2xlU29ydGVkKGEsIGIpIHtcbiAgICBjb25zdCBhSXNOdW0gPSBpc05hTihhKTtcbiAgICBjb25zdCBiSXNOdW0gPSBpc05hTihiKTtcbiAgICBpZiAoYUlzTnVtICE9PSBiSXNOdW0pIHtcbiAgICAgICAgcmV0dXJuIGFJc051bSA/IDEgOiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGFJc051bSA/IHNvcnRlZChhLCBiKSA6IDA7XG59XG5mdW5jdGlvbiBzb3J0ZWQoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xufVxuZnVuY3Rpb24gdHJpbW1lZChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC50cmltKCk7XG59XG5mdW5jdGlvbiB0b051bWJlcihpbnB1dCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dC5yZXBsYWNlKC9eXFxEKy9nLCAnJyksIDEwKSB8fCAwO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRhZ0xpc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZEFubm90YXRlZFRhZ1Rhc2sgPSBleHBvcnRzLmFkZFRhZ1Rhc2sgPSBleHBvcnRzLnRhZ0xpc3RUYXNrID0gdm9pZCAwO1xuY29uc3QgVGFnTGlzdF8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9UYWdMaXN0XCIpO1xuLyoqXG4gKiBUYXNrIHVzZWQgYnkgYGdpdC50YWdzYFxuICovXG5mdW5jdGlvbiB0YWdMaXN0VGFzayhjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBoYXNDdXN0b21Tb3J0ID0gY3VzdG9tQXJncy5zb21lKChvcHRpb24pID0+IC9eLS1zb3J0PS8udGVzdChvcHRpb24pKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsICctbCcsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFRhZ0xpc3RfMS5wYXJzZVRhZ0xpc3QodGV4dCwgaGFzQ3VzdG9tU29ydCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMudGFnTGlzdFRhc2sgPSB0YWdMaXN0VGFzaztcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuYWRkVGFnYFxuICovXG5mdW5jdGlvbiBhZGRUYWdUYXNrKG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsIG5hbWVdLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5hZGRUYWdUYXNrID0gYWRkVGFnVGFzaztcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuYWRkVGFnYFxuICovXG5mdW5jdGlvbiBhZGRBbm5vdGF0ZWRUYWdUYXNrKG5hbWUsIHRhZ01lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsICctYScsICctbScsIHRhZ01lc3NhZ2UsIG5hbWVdLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5hZGRBbm5vdGF0ZWRUYWdUYXNrID0gYWRkQW5ub3RhdGVkVGFnVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhZy5qcy5tYXAiLCJjb25zdCB7R2l0RXhlY3V0b3J9ID0gcmVxdWlyZSgnLi9saWIvcnVubmVycy9naXQtZXhlY3V0b3InKTtcbmNvbnN0IHtTaW1wbGVHaXRBcGl9ID0gcmVxdWlyZSgnLi9saWIvc2ltcGxlLWdpdC1hcGknKTtcblxuY29uc3Qge1NjaGVkdWxlcn0gPSByZXF1aXJlKCcuL2xpYi9ydW5uZXJzL3NjaGVkdWxlcicpO1xuY29uc3Qge0dpdExvZ2dlcn0gPSByZXF1aXJlKCcuL2xpYi9naXQtbG9nZ2VyJyk7XG5jb25zdCB7Y29uZmlndXJhdGlvbkVycm9yVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy90YXNrJyk7XG5jb25zdCB7XG4gICBhc0FycmF5LFxuICAgZmlsdGVyQXJyYXksXG4gICBmaWx0ZXJQcmltaXRpdmVzLFxuICAgZmlsdGVyU3RyaW5nLFxuICAgZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSxcbiAgIGZpbHRlclR5cGUsXG4gICBnZXRUcmFpbGluZ09wdGlvbnMsXG4gICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQsXG4gICB0cmFpbGluZ09wdGlvbnNBcmd1bWVudFxufSA9IHJlcXVpcmUoJy4vbGliL3V0aWxzJyk7XG5jb25zdCB7YXBwbHlQYXRjaFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvYXBwbHktcGF0Y2gnKVxuY29uc3Qge2JyYW5jaFRhc2ssIGJyYW5jaExvY2FsVGFzaywgZGVsZXRlQnJhbmNoZXNUYXNrLCBkZWxldGVCcmFuY2hUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2JyYW5jaCcpO1xuY29uc3Qge2NoZWNrSWdub3JlVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9jaGVjay1pZ25vcmUnKTtcbmNvbnN0IHtjaGVja0lzUmVwb1Rhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY2hlY2staXMtcmVwbycpO1xuY29uc3Qge2Nsb25lVGFzaywgY2xvbmVNaXJyb3JUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2Nsb25lJyk7XG5jb25zdCB7Y2xlYW5XaXRoT3B0aW9uc1Rhc2ssIGlzQ2xlYW5PcHRpb25zQXJyYXl9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY2xlYW4nKTtcbmNvbnN0IHtjb21taXRUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2NvbW1pdCcpO1xuY29uc3Qge2RpZmZTdW1tYXJ5VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9kaWZmJyk7XG5jb25zdCB7ZmV0Y2hUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2ZldGNoJyk7XG5jb25zdCB7bG9nVGFzaywgcGFyc2VMb2dPcHRpb25zfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2xvZycpO1xuY29uc3Qge21vdmVUYXNrfSA9IHJlcXVpcmUoXCIuL2xpYi90YXNrcy9tb3ZlXCIpO1xuY29uc3Qge3B1bGxUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3B1bGwnKTtcbmNvbnN0IHtwdXNoVGFnc1Rhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcHVzaCcpO1xuY29uc3Qge2FkZFJlbW90ZVRhc2ssIGdldFJlbW90ZXNUYXNrLCBsaXN0UmVtb3Rlc1Rhc2ssIHJlbW90ZVRhc2ssIHJlbW92ZVJlbW90ZVRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcmVtb3RlJyk7XG5jb25zdCB7Z2V0UmVzZXRNb2RlLCByZXNldFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcmVzZXQnKTtcbmNvbnN0IHtzdGFzaExpc3RUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3N0YXNoLWxpc3QnKTtcbmNvbnN0IHthZGRTdWJNb2R1bGVUYXNrLCBpbml0U3ViTW9kdWxlVGFzaywgc3ViTW9kdWxlVGFzaywgdXBkYXRlU3ViTW9kdWxlVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9zdWItbW9kdWxlJyk7XG5jb25zdCB7YWRkQW5ub3RhdGVkVGFnVGFzaywgYWRkVGFnVGFzaywgdGFnTGlzdFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvdGFnJyk7XG5jb25zdCB7c3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzaywgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy90YXNrJyk7XG5cbmZ1bmN0aW9uIEdpdCAob3B0aW9ucywgcGx1Z2lucykge1xuICAgdGhpcy5fZXhlY3V0b3IgPSBuZXcgR2l0RXhlY3V0b3IoXG4gICAgICBvcHRpb25zLmJpbmFyeSwgb3B0aW9ucy5iYXNlRGlyLFxuICAgICAgbmV3IFNjaGVkdWxlcihvcHRpb25zLm1heENvbmN1cnJlbnRQcm9jZXNzZXMpLCBwbHVnaW5zLFxuICAgKTtcbiAgIHRoaXMuX2xvZ2dlciA9IG5ldyBHaXRMb2dnZXIoKTtcbn1cblxuKEdpdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZUdpdEFwaS5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IEdpdDtcblxuLyoqXG4gKiBMb2dnaW5nIHV0aWxpdHkgZm9yIHByaW50aW5nIG91dCBpbmZvIG9yIGVycm9yIG1lc3NhZ2VzIHRvIHRoZSB1c2VyXG4gKiBAdHlwZSB7R2l0TG9nZ2VyfVxuICogQHByaXZhdGVcbiAqL1xuR2l0LnByb3RvdHlwZS5fbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBTZXRzIHRoZSBwYXRoIHRvIGEgY3VzdG9tIGdpdCBiaW5hcnksIHNob3VsZCBlaXRoZXIgYmUgYGdpdGAgd2hlbiB0aGVyZSBpcyBhbiBpbnN0YWxsYXRpb24gb2YgZ2l0IGF2YWlsYWJsZSBvblxuICogdGhlIHN5c3RlbSBwYXRoLCBvciBhIGZ1bGx5IHF1YWxpZmllZCBwYXRoIHRvIHRoZSBleGVjdXRhYmxlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLmN1c3RvbUJpbmFyeSA9IGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICB0aGlzLl9leGVjdXRvci5iaW5hcnkgPSBjb21tYW5kO1xuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUgZm9yIHRoZSBzcGF3bmVkIGNoaWxkIHByb2Nlc3MsIGVpdGhlciBzdXBwbHkgYm90aCBhIG5hbWUgYW5kIHZhbHVlIGFzIHN0cmluZ3Mgb3JcbiAqIGEgc2luZ2xlIG9iamVjdCB0byBlbnRpcmVseSByZXBsYWNlIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLmVudiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLl9leGVjdXRvci5lbnYgPSBuYW1lO1xuICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLl9leGVjdXRvci5lbnYgPSB0aGlzLl9leGVjdXRvci5lbnYgfHwge30pW25hbWVdID0gdmFsdWU7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBMaXN0IHRoZSBzdGFzaChzKSBvZiB0aGUgbG9jYWwgcmVwb1xuICovXG5HaXQucHJvdG90eXBlLnN0YXNoTGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0YXNoTGlzdFRhc2soXG4gICAgICAgICB0cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpIHx8IHt9LFxuICAgICAgICAgZmlsdGVyQXJyYXkob3B0aW9ucykgJiYgb3B0aW9ucyB8fCBbXVxuICAgICAgKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsb25lVGFzayAoYXBpLCB0YXNrLCByZXBvUGF0aCwgbG9jYWxQYXRoKSB7XG4gICBpZiAodHlwZW9mIHJlcG9QYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soYGdpdC4keyBhcGkgfSgpIHJlcXVpcmVzIGEgc3RyaW5nICdyZXBvUGF0aCdgKTtcbiAgIH1cblxuICAgcmV0dXJuIHRhc2socmVwb1BhdGgsIGZpbHRlclR5cGUobG9jYWxQYXRoLCBmaWx0ZXJTdHJpbmcpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSk7XG59XG5cblxuLyoqXG4gKiBDbG9uZSBhIGdpdCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGNyZWF0ZUNsb25lVGFzaygnY2xvbmUnLCBjbG9uZVRhc2ssIC4uLmFyZ3VtZW50cyksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIE1pcnJvciBhIGdpdCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUubWlycm9yID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjcmVhdGVDbG9uZVRhc2soJ21pcnJvcicsIGNsb25lTWlycm9yVGFzaywgLi4uYXJndW1lbnRzKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogTW92ZXMgb25lIG9yIG1vcmUgZmlsZXMgdG8gYSBuZXcgZGVzdGluYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL2dpdC1zY20uY29tL2RvY3MvZ2l0LW12XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGZyb21cbiAqIEBwYXJhbSB7c3RyaW5nfSB0b1xuICovXG5HaXQucHJvdG90eXBlLm12ID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhtb3ZlVGFzayhmcm9tLCB0byksIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWxseSB1c2VzIHB1bGwgYW5kIHRhZ3MgdG8gZ2V0IHRoZSBsaXN0IG9mIHRhZ3MgdGhlbiBjaGVja3Mgb3V0IHRoZSBsYXRlc3QgdGFnLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrb3V0TGF0ZXN0VGFnID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHZhciBnaXQgPSB0aGlzO1xuICAgcmV0dXJuIHRoaXMucHVsbChmdW5jdGlvbiAoKSB7XG4gICAgICBnaXQudGFncyhmdW5jdGlvbiAoZXJyLCB0YWdzKSB7XG4gICAgICAgICBnaXQuY2hlY2tvdXQodGFncy5sYXRlc3QsIHRoZW4pO1xuICAgICAgfSk7XG4gICB9KTtcbn07XG5cbi8qKlxuICogQ29tbWl0cyBjaGFuZ2VzIGluIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5IC0gd2hlbiBzcGVjaWZpYyBmaWxlIHBhdGhzIGFyZSBzdXBwbGllZCwgb25seSBjaGFuZ2VzIG9uIHRob3NlXG4gKiBmaWxlcyB3aWxsIGJlIGNvbW1pdHRlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gbWVzc2FnZVxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtmaWxlc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIChtZXNzYWdlLCBmaWxlcywgb3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgbmV4dCA9IHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcblxuICAgaWYgKGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXkobWVzc2FnZSkpIHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goLi4uYXNBcnJheShtZXNzYWdlKSk7XG4gICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdzaW1wbGUtZ2l0IGRlcHJlY2F0aW9uIG5vdGljZTogZ2l0LmNvbW1pdDogcmVxdWlyZXMgdGhlIGNvbW1pdCBtZXNzYWdlIHRvIGJlIHN1cHBsaWVkIGFzIGEgc3RyaW5nL3N0cmluZ1tdLCB0aGlzIHdpbGwgYmUgYW4gZXJyb3IgaW4gdmVyc2lvbiAzJyk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY29tbWl0VGFzayhcbiAgICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICAgYXNBcnJheShmaWx0ZXJUeXBlKGZpbGVzLCBmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5LCBbXSkpLFxuICAgICAgICAgWy4uLmZpbHRlclR5cGUob3B0aW9ucywgZmlsdGVyQXJyYXksIFtdKSwgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMCwgdHJ1ZSldXG4gICAgICApLFxuICAgICAgbmV4dFxuICAgKTtcbn07XG5cbi8qKlxuICogUHVsbCB0aGUgdXBkYXRlZCBjb250ZW50cyBvZiB0aGUgY3VycmVudCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUucHVsbCA9IGZ1bmN0aW9uIChyZW1vdGUsIGJyYW5jaCwgb3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBwdWxsVGFzayhmaWx0ZXJUeXBlKHJlbW90ZSwgZmlsdGVyU3RyaW5nKSwgZmlsdGVyVHlwZShicmFuY2gsIGZpbHRlclN0cmluZyksIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogRmV0Y2ggdGhlIHVwZGF0ZWQgY29udGVudHMgb2YgdGhlIGN1cnJlbnQgcmVwby5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAuZmV0Y2goJ3Vwc3RyZWFtJywgJ21hc3RlcicpIC8vIGZldGNoZXMgZnJvbSBtYXN0ZXIgb24gcmVtb3RlIG5hbWVkIHVwc3RyZWFtXG4gKiAgIC5mZXRjaChmdW5jdGlvbiAoKSB7fSkgLy8gcnVucyBmZXRjaCBhZ2FpbnN0IGRlZmF1bHQgcmVtb3RlIGFuZCBicmFuY2ggYW5kIGNhbGxzIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtyZW1vdGVdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2JyYW5jaF1cbiAqL1xuR2l0LnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChyZW1vdGUsIGJyYW5jaCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBmZXRjaFRhc2soZmlsdGVyVHlwZShyZW1vdGUsIGZpbHRlclN0cmluZyksIGZpbHRlclR5cGUoYnJhbmNoLCBmaWx0ZXJTdHJpbmcpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIERpc2FibGVzL2VuYWJsZXMgdGhlIHVzZSBvZiB0aGUgY29uc29sZSBmb3IgcHJpbnRpbmcgd2FybmluZ3MgYW5kIGVycm9ycywgYnkgZGVmYXVsdCBtZXNzYWdlcyBhcmUgbm90IHNob3duIGluXG4gKiBhIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzaWxlbmNlXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLnNpbGVudCA9IGZ1bmN0aW9uIChzaWxlbmNlKSB7XG4gICBjb25zb2xlLndhcm4oJ3NpbXBsZS1naXQgZGVwcmVjYXRpb24gbm90aWNlOiBnaXQuc2lsZW50OiBsb2dnaW5nIHNob3VsZCBiZSBjb25maWd1cmVkIHVzaW5nIHRoZSBgZGVidWdgIGxpYnJhcnkgLyBgREVCVUdgIGVudmlyb25tZW50IHZhcmlhYmxlLCB0aGlzIHdpbGwgYmUgYW4gZXJyb3IgaW4gdmVyc2lvbiAzJyk7XG4gICB0aGlzLl9sb2dnZXIuc2lsZW50KCEhc2lsZW5jZSk7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTGlzdCBhbGwgdGFncy4gV2hlbiB1c2luZyBnaXQgMi43LjAgb3IgYWJvdmUsIGluY2x1ZGUgYW4gb3B0aW9ucyBvYmplY3Qgd2l0aCBgXCItLXNvcnRcIjogXCJwcm9wZXJ0eS1uYW1lXCJgIHRvXG4gKiBzb3J0IHRoZSB0YWdzIGJ5IHRoYXQgcHJvcGVydHkgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCBzZW1hbnRpYyB2ZXJzaW9uaW5nIHNvcnQuXG4gKlxuICogTm90ZSwgc3VwcGx5aW5nIHRoaXMgb3B0aW9uIHdoZW4gaXQgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIEdpdCB2ZXJzaW9uIHdpbGwgY2F1c2UgdGhlIG9wZXJhdGlvbiB0byBmYWlsLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnRhZ3MgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICB0YWdMaXN0VGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJlYmFzZXMgdGhlIGN1cnJlbnQgd29ya2luZyBjb3B5LiBPcHRpb25zIGNhbiBiZSBzdXBwbGllZCBlaXRoZXIgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nIHBhcmFtZXRlcnNcbiAqIHRvIGJlIHNlbnQgdG8gdGhlIGBnaXQgcmViYXNlYCBjb21tYW5kLCBvciBhIHN0YW5kYXJkIG9wdGlvbnMgb2JqZWN0LlxuICovXG5HaXQucHJvdG90eXBlLnJlYmFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JlYmFzZScsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmVzZXQgYSByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICByZXNldFRhc2soZ2V0UmVzZXRNb2RlKG1vZGUpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJldmVydCBvbmUgb3IgbW9yZSBjb21taXRzIGluIHRoZSBsb2NhbCB3b3JraW5nIGNvcHlcbiAqL1xuR2l0LnByb3RvdHlwZS5yZXZlcnQgPSBmdW5jdGlvbiAoY29tbWl0KSB7XG4gICBjb25zdCBuZXh0ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgIGlmICh0eXBlb2YgY29tbWl0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICAgICBjb25maWd1cmF0aW9uRXJyb3JUYXNrKCdDb21taXQgbXVzdCBiZSBhIHN0cmluZycpLFxuICAgICAgICAgbmV4dCxcbiAgICAgICk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JldmVydCcsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIDAsIHRydWUpLCBjb21taXRdKSxcbiAgICAgIG5leHRcbiAgICk7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpZ2h0d2VpZ2h0IHRhZyB0byB0aGUgaGVhZCBvZiB0aGUgY3VycmVudCBicmFuY2hcbiAqL1xuR2l0LnByb3RvdHlwZS5hZGRUYWcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgY29uc3QgdGFzayA9ICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpXG4gICAgICA/IGFkZFRhZ1Rhc2sobmFtZSlcbiAgICAgIDogY29uZmlndXJhdGlvbkVycm9yVGFzaygnR2l0LmFkZFRhZyByZXF1aXJlcyBhIHRhZyBuYW1lJyk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogQWRkIGFuIGFubm90YXRlZCB0YWcgdG8gdGhlIGhlYWQgb2YgdGhlIGN1cnJlbnQgYnJhbmNoXG4gKi9cbkdpdC5wcm90b3R5cGUuYWRkQW5ub3RhdGVkVGFnID0gZnVuY3Rpb24gKHRhZ05hbWUsIHRhZ01lc3NhZ2UpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYWRkQW5ub3RhdGVkVGFnVGFzayh0YWdOYW1lLCB0YWdNZXNzYWdlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgb3V0IGEgdGFnIG9yIHJldmlzaW9uLCBhbnkgbnVtYmVyIG9mIGFkZGl0aW9uYWwgYXJndW1lbnRzIGNhbiBiZSBwYXNzZWQgdG8gdGhlIGBnaXQgY2hlY2tvdXRgIGNvbW1hbmRcbiAqIGJ5IHN1cHBseWluZyBlaXRoZXIgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICBjb25zdCBjb21tYW5kcyA9IFsnY2hlY2tvdXQnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKV07XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBDaGVjayBvdXQgYSByZW1vdGUgYnJhbmNoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJyYW5jaE5hbWUgbmFtZSBvZiBicmFuY2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFBvaW50IChlLmcgb3JpZ2luL2RldmVsb3BtZW50KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tvdXRCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoTmFtZSwgc3RhcnRQb2ludCwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuY2hlY2tvdXQoWyctYicsIGJyYW5jaE5hbWUsIHN0YXJ0UG9pbnRdLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIG91dCBhIGxvY2FsIGJyYW5jaFxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrb3V0TG9jYWxCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoTmFtZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuY2hlY2tvdXQoWyctYicsIGJyYW5jaE5hbWVdLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIERlbGV0ZSBhIGxvY2FsIGJyYW5jaFxuICovXG5HaXQucHJvdG90eXBlLmRlbGV0ZUxvY2FsQnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaE5hbWUsIGZvcmNlRGVsZXRlLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGRlbGV0ZUJyYW5jaFRhc2soYnJhbmNoTmFtZSwgdHlwZW9mIGZvcmNlRGVsZXRlID09PSBcImJvb2xlYW5cIiA/IGZvcmNlRGVsZXRlIDogZmFsc2UpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBEZWxldGUgb25lIG9yIG1vcmUgbG9jYWwgYnJhbmNoZXNcbiAqL1xuR2l0LnByb3RvdHlwZS5kZWxldGVMb2NhbEJyYW5jaGVzID0gZnVuY3Rpb24gKGJyYW5jaE5hbWVzLCBmb3JjZURlbGV0ZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBkZWxldGVCcmFuY2hlc1Rhc2soYnJhbmNoTmFtZXMsIHR5cGVvZiBmb3JjZURlbGV0ZSA9PT0gXCJib29sZWFuXCIgPyBmb3JjZURlbGV0ZSA6IGZhbHNlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogTGlzdCBhbGwgYnJhbmNoZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdCB8IHN0cmluZ1tdfSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmJyYW5jaCA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGJyYW5jaFRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbGlzdCBvZiBsb2NhbCBicmFuY2hlc1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmJyYW5jaExvY2FsID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYnJhbmNoTG9jYWxUYXNrKCksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIEV4ZWN1dGVzIGFueSBjb21tYW5kIGFnYWluc3QgdGhlIGdpdCBiaW5hcnkuXG4gKi9cbkdpdC5wcm90b3R5cGUucmF3ID0gZnVuY3Rpb24gKGNvbW1hbmRzKSB7XG4gICBjb25zdCBjcmVhdGVSZXN0Q29tbWFuZHMgPSAhQXJyYXkuaXNBcnJheShjb21tYW5kcyk7XG4gICBjb25zdCBjb21tYW5kID0gW10uc2xpY2UuY2FsbChjcmVhdGVSZXN0Q29tbWFuZHMgPyBhcmd1bWVudHMgOiBjb21tYW5kcywgMCk7XG5cbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWFuZC5sZW5ndGggJiYgY3JlYXRlUmVzdENvbW1hbmRzOyBpKyspIHtcbiAgICAgIGlmICghZmlsdGVyUHJpbWl0aXZlcyhjb21tYW5kW2ldKSkge1xuICAgICAgICAgY29tbWFuZC5zcGxpY2UoaSwgY29tbWFuZC5sZW5ndGggLSBpKTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgfVxuXG4gICBjb21tYW5kLnB1c2goXG4gICAgICAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCAwLCB0cnVlKSxcbiAgICk7XG5cbiAgIHZhciBuZXh0ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgIGlmICghY29tbWFuZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgICAgY29uZmlndXJhdGlvbkVycm9yVGFzaygnUmF3OiBtdXN0IHN1cHBseSBvbmUgb3IgbW9yZSBjb21tYW5kIHRvIGV4ZWN1dGUnKSxcbiAgICAgICAgIG5leHQsXG4gICAgICApO1xuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmQpLCBuZXh0KTtcbn07XG5cbkdpdC5wcm90b3R5cGUuc3VibW9kdWxlQWRkID0gZnVuY3Rpb24gKHJlcG8sIHBhdGgsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYWRkU3ViTW9kdWxlVGFzayhyZXBvLCBwYXRoKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuc3VibW9kdWxlVXBkYXRlID0gZnVuY3Rpb24gKGFyZ3MsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgdXBkYXRlU3ViTW9kdWxlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLnN1Ym1vZHVsZUluaXQgPSBmdW5jdGlvbiAoYXJncywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBpbml0U3ViTW9kdWxlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLnN1Yk1vZHVsZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN1Yk1vZHVsZVRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5saXN0UmVtb3RlID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBsaXN0UmVtb3Rlc1Rhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgcmVtb3RlIHRvIHRoZSBsaXN0IG9mIHJlbW90ZXMuXG4gKi9cbkdpdC5wcm90b3R5cGUuYWRkUmVtb3RlID0gZnVuY3Rpb24gKHJlbW90ZU5hbWUsIHJlbW90ZVJlcG8sIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYWRkUmVtb3RlVGFzayhyZW1vdGVOYW1lLCByZW1vdGVSZXBvLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYW4gZW50cnkgYnkgbmFtZSBmcm9tIHRoZSBsaXN0IG9mIHJlbW90ZXMuXG4gKi9cbkdpdC5wcm90b3R5cGUucmVtb3ZlUmVtb3RlID0gZnVuY3Rpb24gKHJlbW90ZU5hbWUsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgcmVtb3ZlUmVtb3RlVGFzayhyZW1vdGVOYW1lKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgY3VycmVudGx5IGF2YWlsYWJsZSByZW1vdGVzLCBzZXR0aW5nIHRoZSBvcHRpb25hbCB2ZXJib3NlIGFyZ3VtZW50IHRvIHRydWUgaW5jbHVkZXMgYWRkaXRpb25hbFxuICogZGV0YWlsIG9uIHRoZSByZW1vdGVzIHRoZW1zZWx2ZXMuXG4gKi9cbkdpdC5wcm90b3R5cGUuZ2V0UmVtb3RlcyA9IGZ1bmN0aW9uICh2ZXJib3NlLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGdldFJlbW90ZXNUYXNrKHZlcmJvc2UgPT09IHRydWUpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBDYWxsIGFueSBgZ2l0IHJlbW90ZWAgZnVuY3Rpb24gd2l0aCBhcmd1bWVudHMgcGFzc2VkIGFzIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUucmVtb3RlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgcmVtb3RlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENhbGwgYW55IGBnaXQgdGFnYCBmdW5jdGlvbiB3aXRoIGFyZ3VtZW50cyBwYXNzZWQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS50YWcgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgY29tbWFuZCA9IGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpO1xuXG4gICBpZiAoY29tbWFuZFswXSAhPT0gJ3RhZycpIHtcbiAgICAgIGNvbW1hbmQudW5zaGlmdCgndGFnJyk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHJlcG9zaXRvcnkgc2VydmVyIGluZm9cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS51cGRhdGVTZXJ2ZXJJbmZvID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3VwZGF0ZS1zZXJ2ZXItaW5mbyddKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUHVzaGVzIHRoZSBjdXJyZW50IHRhZyBjaGFuZ2VzIHRvIGEgcmVtb3RlIHdoaWNoIGNhbiBiZSBlaXRoZXIgYSBVUkwgb3IgbmFtZWQgcmVtb3RlLiBXaGVuIG5vdCBzcGVjaWZpZWQgdXNlcyB0aGVcbiAqIGRlZmF1bHQgY29uZmlndXJlZCByZW1vdGUgc3BlYy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3JlbW90ZV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnB1c2hUYWdzID0gZnVuY3Rpb24gKHJlbW90ZSwgdGhlbikge1xuICAgY29uc3QgdGFzayA9IHB1c2hUYWdzVGFzayh7cmVtb3RlOiBmaWx0ZXJUeXBlKHJlbW90ZSwgZmlsdGVyU3RyaW5nKX0sIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzaywgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBuYW1lZCBmaWxlcyBmcm9tIHNvdXJjZSBjb250cm9sLlxuICovXG5HaXQucHJvdG90eXBlLnJtID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydybScsICctZicsIC4uLmFzQXJyYXkoZmlsZXMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmFtZWQgZmlsZXMgZnJvbSBzb3VyY2UgY29udHJvbCBidXQga2VlcHMgdGhlbSBvbiBkaXNrIHJhdGhlciB0aGFuIGRlbGV0aW5nIHRoZW0gZW50aXJlbHkuIFRvXG4gKiBjb21wbGV0ZWx5IHJlbW92ZSB0aGUgZmlsZXMsIHVzZSBgcm1gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlc1xuICovXG5HaXQucHJvdG90eXBlLnJtS2VlcExvY2FsID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydybScsICctLWNhY2hlZCcsIC4uLmFzQXJyYXkoZmlsZXMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2Ygb2JqZWN0cyBpbiBhIHRyZWUgYmFzZWQgb24gY29tbWl0IGhhc2guIFBhc3NpbmcgaW4gYW4gb2JqZWN0IGhhc2ggcmV0dXJucyB0aGUgb2JqZWN0J3MgY29udGVudCxcbiAqIHNpemUsIGFuZCB0eXBlLlxuICpcbiAqIFBhc3NpbmcgXCItcFwiIHdpbGwgaW5zdHJ1Y3QgY2F0LWZpbGUgdG8gZGV0ZXJtaW5lIHRoZSBvYmplY3QgdHlwZSwgYW5kIGRpc3BsYXkgaXRzIGZvcm1hdHRlZCBjb250ZW50cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNhdEZpbGUgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX2NhdEZpbGUoJ3V0Zi04JywgYXJndW1lbnRzKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuYmluYXJ5Q2F0RmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9jYXRGaWxlKCdidWZmZXInLCBhcmd1bWVudHMpO1xufTtcblxuR2l0LnByb3RvdHlwZS5fY2F0RmlsZSA9IGZ1bmN0aW9uIChmb3JtYXQsIGFyZ3MpIHtcbiAgIHZhciBoYW5kbGVyID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3MpO1xuICAgdmFyIGNvbW1hbmQgPSBbJ2NhdC1maWxlJ107XG4gICB2YXIgb3B0aW9ucyA9IGFyZ3NbMF07XG5cbiAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgICAgY29uZmlndXJhdGlvbkVycm9yVGFzaygnR2l0LmNhdEZpbGU6IG9wdGlvbnMgbXVzdCBiZSBzdXBwbGllZCBhcyBhbiBhcnJheSBvZiBzdHJpbmdzJyksXG4gICAgICAgICBoYW5kbGVyLFxuICAgICAgKTtcbiAgIH1cblxuICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgIGNvbW1hbmQucHVzaC5hcHBseShjb21tYW5kLCBvcHRpb25zKTtcbiAgIH1cblxuICAgY29uc3QgdGFzayA9IGZvcm1hdCA9PT0gJ2J1ZmZlcidcbiAgICAgID8gc3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzayhjb21tYW5kKVxuICAgICAgOiBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmQpO1xuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCBoYW5kbGVyKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICBjb25zdCBjb21tYW5kID0gWydkaWZmJywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyldO1xuXG4gICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb21tYW5kLnNwbGljZSgxLCAwLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuX2xvZ2dlci53YXJuKCdHaXQjZGlmZjogc3VwcGx5aW5nIG9wdGlvbnMgYXMgYSBzaW5nbGUgc3RyaW5nIGlzIG5vdyBkZXByZWNhdGVkLCBzd2l0Y2ggdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncycpO1xuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZCksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmRpZmZTdW1tYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBkaWZmU3VtbWFyeVRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMSkpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5hcHBseVBhdGNoID0gZnVuY3Rpb24gKHBhdGNoZXMpIHtcbiAgIGNvbnN0IHRhc2sgPSAhZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheShwYXRjaGVzKVxuICAgICAgPyBjb25maWd1cmF0aW9uRXJyb3JUYXNrKGBnaXQuYXBwbHlQYXRjaCByZXF1aXJlcyBvbmUgb3IgbW9yZSBzdHJpbmcgcGF0Y2hlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnRgKVxuICAgICAgOiBhcHBseVBhdGNoVGFzayhhc0FycmF5KHBhdGNoZXMpLCBnZXRUcmFpbGluZ09wdGlvbnMoW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgdGFzayxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn1cblxuR2l0LnByb3RvdHlwZS5yZXZwYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgIGNvbnN0IGNvbW1hbmRzID0gWydyZXYtcGFyc2UnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKV07XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRydWUpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBTaG93IHZhcmlvdXMgdHlwZXMgb2Ygb2JqZWN0cywgZm9yIGV4YW1wbGUgdGhlIGZpbGUgYXQgYSBjZXJ0YWluIGNvbW1pdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydzaG93JywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMSldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKi9cbkdpdC5wcm90b3R5cGUuY2xlYW4gPSBmdW5jdGlvbiAobW9kZSwgb3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgdXNpbmdDbGVhbk9wdGlvbnNBcnJheSA9IGlzQ2xlYW5PcHRpb25zQXJyYXkobW9kZSk7XG4gICBjb25zdCBjbGVhbk1vZGUgPSB1c2luZ0NsZWFuT3B0aW9uc0FycmF5ICYmIG1vZGUuam9pbignJykgfHwgZmlsdGVyVHlwZShtb2RlLCBmaWx0ZXJTdHJpbmcpIHx8ICcnO1xuICAgY29uc3QgY3VzdG9tQXJncyA9IGdldFRyYWlsaW5nT3B0aW9ucyhbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgdXNpbmdDbGVhbk9wdGlvbnNBcnJheSA/IDEgOiAwKSk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY2xlYW5XaXRoT3B0aW9uc1Rhc2soY2xlYW5Nb2RlLCBjdXN0b21BcmdzKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uICh0aGVuKSB7XG4gICBjb25zdCB0YXNrID0ge1xuICAgICAgY29tbWFuZHM6IFtdLFxuICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgcGFyc2VyICgpIHtcbiAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbigpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzayk7XG59O1xuXG4vKipcbiAqIFNob3cgY29tbWl0IGxvZ3MgZnJvbSBgSEVBRGAgdG8gdGhlIGZpcnN0IGNvbW1pdC5cbiAqIElmIHByb3ZpZGVkIGJldHdlZW4gYG9wdGlvbnMuZnJvbWAgYW5kIGBvcHRpb25zLnRvYCB0YWdzIG9yIGJyYW5jaC5cbiAqXG4gKiBBZGRpdGlvbmFsbHkgeW91IGNhbiBwcm92aWRlIG9wdGlvbnMuZmlsZSwgd2hpY2ggaXMgdGhlIHBhdGggdG8gYSBmaWxlIGluIHlvdXIgcmVwb3NpdG9yeS4gVGhlbiBvbmx5IHRoaXMgZmlsZSB3aWxsIGJlIGNvbnNpZGVyZWQuXG4gKlxuICogVG8gdXNlIGEgY3VzdG9tIHNwbGl0dGVyIGluIHRoZSBsb2cgZm9ybWF0LCBzZXQgYG9wdGlvbnMuc3BsaXR0ZXJgIHRvIGJlIHRoZSBzdHJpbmcgdGhlIGxvZyBzaG91bGQgYmUgc3BsaXQgb24uXG4gKlxuICogT3B0aW9ucyBjYW4gYWxzbyBiZSBzdXBwbGllZCBhcyBhIHN0YW5kYXJkIG9wdGlvbnMgb2JqZWN0IGZvciBhZGRpbmcgY3VzdG9tIHByb3BlcnRpZXMgc3VwcG9ydGVkIGJ5IHRoZSBnaXQgbG9nIGNvbW1hbmQuXG4gKiBGb3IgYW55IG90aGVyIHNldCBvZiBvcHRpb25zLCBzdXBwbHkgb3B0aW9ucyBhcyBhbiBhcnJheSBvZiBzdHJpbmdzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBnaXQgbG9nIGNvbW1hbmQuXG4gKi9cbkdpdC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgIGNvbnN0IG5leHQgPSB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcblxuICAgaWYgKGZpbHRlclN0cmluZyhhcmd1bWVudHNbMF0pICYmIGZpbHRlclN0cmluZyhhcmd1bWVudHNbMV0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgICAgIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soYGdpdC5sb2coc3RyaW5nLCBzdHJpbmcpIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIGdpdC5sb2coeyBmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcgfSlgKSxcbiAgICAgICAgIG5leHRcbiAgICAgICk7XG4gICB9XG5cbiAgIGNvbnN0IHBhcnNlZE9wdGlvbnMgPSBwYXJzZUxvZ09wdGlvbnMoXG4gICAgICB0cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpIHx8IHt9LFxuICAgICAgZmlsdGVyQXJyYXkob3B0aW9ucykgJiYgb3B0aW9ucyB8fCBbXVxuICAgKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBsb2dUYXNrKHBhcnNlZE9wdGlvbnMuc3BsaXR0ZXIsIHBhcnNlZE9wdGlvbnMuZmllbGRzLCBwYXJzZWRPcHRpb25zLmNvbW1hbmRzKSxcbiAgICAgIG5leHQsXG4gICApXG59O1xuXG4vKipcbiAqIENsZWFycyB0aGUgcXVldWUgb2YgcGVuZGluZyBjb21tYW5kcyBhbmQgcmV0dXJucyB0aGUgd3JhcHBlciBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gKlxuICogQHJldHVybnMge0dpdH1cbiAqL1xuR2l0LnByb3RvdHlwZS5jbGVhclF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgLy8gVE9ETzpcbiAgIC8vIHRoaXMuX2V4ZWN1dG9yLmNsZWFyKCk7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXRobmFtZSBvciBwYXRobmFtZXMgYXJlIGV4Y2x1ZGVkIGJ5IC5naXRpZ25vcmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcGF0aG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5jaGVja0lnbm9yZSA9IGZ1bmN0aW9uIChwYXRobmFtZXMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY2hlY2tJZ25vcmVUYXNrKGFzQXJyYXkoKGZpbHRlclR5cGUocGF0aG5hbWVzLCBmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5LCBbXSkpKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmNoZWNrSXNSZXBvID0gZnVuY3Rpb24gKGNoZWNrVHlwZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjaGVja0lzUmVwb1Rhc2soZmlsdGVyVHlwZShjaGVja1R5cGUsIGZpbHRlclN0cmluZykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2l0SW5zdGFuY2VGYWN0b3J5ID0gZXhwb3J0cy5naXRFeHBvcnRGYWN0b3J5ID0gZXhwb3J0cy5lc01vZHVsZUZhY3RvcnkgPSB2b2lkIDA7XG5jb25zdCBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmNvbnN0IHBsdWdpbnNfMSA9IHJlcXVpcmUoXCIuL3BsdWdpbnNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBHaXQgPSByZXF1aXJlKCcuLi9naXQnKTtcbi8qKlxuICogQWRkcyB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXMgdG8gdGhlIHN1cHBsaWVkIG9iamVjdCB0byBlbmFibGUgaXQgZm9yIHVzZSBhc1xuICogdGhlIGRlZmF1bHQgZXhwb3J0IG9mIGEgbW9kdWxlLlxuICpcbiAqIEVnOiBgbW9kdWxlLmV4cG9ydHMgPSBlc01vZHVsZUZhY3RvcnkoeyBzb21ldGhpbmcgKCkge30gfSlgXG4gKi9cbmZ1bmN0aW9uIGVzTW9kdWxlRmFjdG9yeShkZWZhdWx0RXhwb3J0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGRlZmF1bHRFeHBvcnQsIHtcbiAgICAgICAgX19lc01vZHVsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBkZWZhdWx0OiB7IHZhbHVlOiBkZWZhdWx0RXhwb3J0IH0sXG4gICAgfSk7XG59XG5leHBvcnRzLmVzTW9kdWxlRmFjdG9yeSA9IGVzTW9kdWxlRmFjdG9yeTtcbmZ1bmN0aW9uIGdpdEV4cG9ydEZhY3RvcnkoZmFjdG9yeSwgZXh0cmEpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCBhcGlfMS5kZWZhdWx0LCBleHRyYSB8fCB7fSk7XG59XG5leHBvcnRzLmdpdEV4cG9ydEZhY3RvcnkgPSBnaXRFeHBvcnRGYWN0b3J5O1xuZnVuY3Rpb24gZ2l0SW5zdGFuY2VGYWN0b3J5KGJhc2VEaXIsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBwbHVnaW5zID0gbmV3IHBsdWdpbnNfMS5QbHVnaW5TdG9yZSgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHV0aWxzXzEuY3JlYXRlSW5zdGFuY2VDb25maWcoYmFzZURpciAmJiAodHlwZW9mIGJhc2VEaXIgPT09ICdzdHJpbmcnID8geyBiYXNlRGlyIH0gOiBiYXNlRGlyKSB8fCB7fSwgb3B0aW9ucyk7XG4gICAgaWYgKCF1dGlsc18xLmZvbGRlckV4aXN0cyhjb25maWcuYmFzZURpcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IGFwaV8xLmRlZmF1bHQuR2l0Q29uc3RydWN0RXJyb3IoY29uZmlnLCBgQ2Fubm90IHVzZSBzaW1wbGUtZ2l0IG9uIGEgZGlyZWN0b3J5IHRoYXQgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLmNvbmZpZykpIHtcbiAgICAgICAgcGx1Z2lucy5hZGQocGx1Z2luc18xLmNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW4oY29uZmlnLmNvbmZpZykpO1xuICAgIH1cbiAgICBjb25maWcucHJvZ3Jlc3MgJiYgcGx1Z2lucy5hZGQocGx1Z2luc18xLnByb2dyZXNzTW9uaXRvclBsdWdpbihjb25maWcucHJvZ3Jlc3MpKTtcbiAgICBjb25maWcudGltZW91dCAmJiBwbHVnaW5zLmFkZChwbHVnaW5zXzEudGltZW91dFBsdWdpbihjb25maWcudGltZW91dCkpO1xuICAgIGNvbmZpZy5zcGF3bk9wdGlvbnMgJiYgcGx1Z2lucy5hZGQocGx1Z2luc18xLnNwYXduT3B0aW9uc1BsdWdpbihjb25maWcuc3Bhd25PcHRpb25zKSk7XG4gICAgcGx1Z2lucy5hZGQocGx1Z2luc18xLmVycm9yRGV0ZWN0aW9uUGx1Z2luKHBsdWdpbnNfMS5lcnJvckRldGVjdGlvbkhhbmRsZXIodHJ1ZSkpKTtcbiAgICBjb25maWcuZXJyb3JzICYmIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5lcnJvckRldGVjdGlvblBsdWdpbihjb25maWcuZXJyb3JzKSk7XG4gICAgcmV0dXJuIG5ldyBHaXQoY29uZmlnLCBwbHVnaW5zKTtcbn1cbmV4cG9ydHMuZ2l0SW5zdGFuY2VGYWN0b3J5ID0gZ2l0SW5zdGFuY2VGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWZhY3RvcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdpdFAgPSB2b2lkIDA7XG5jb25zdCBnaXRfcmVzcG9uc2VfZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LXJlc3BvbnNlLWVycm9yXCIpO1xuY29uc3QgZ2l0X2ZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi9naXQtZmFjdG9yeVwiKTtcbmNvbnN0IGZ1bmN0aW9uTmFtZXNCdWlsZGVyQXBpID0gW1xuICAgICdjdXN0b21CaW5hcnknLCAnZW52JywgJ291dHB1dEhhbmRsZXInLCAnc2lsZW50Jyxcbl07XG5jb25zdCBmdW5jdGlvbk5hbWVzUHJvbWlzZUFwaSA9IFtcbiAgICAnYWRkJyxcbiAgICAnYWRkQW5ub3RhdGVkVGFnJyxcbiAgICAnYWRkQ29uZmlnJyxcbiAgICAnYWRkUmVtb3RlJyxcbiAgICAnYWRkVGFnJyxcbiAgICAnYXBwbHlQYXRjaCcsXG4gICAgJ2JpbmFyeUNhdEZpbGUnLFxuICAgICdicmFuY2gnLFxuICAgICdicmFuY2hMb2NhbCcsXG4gICAgJ2NhdEZpbGUnLFxuICAgICdjaGVja0lnbm9yZScsXG4gICAgJ2NoZWNrSXNSZXBvJyxcbiAgICAnY2hlY2tvdXQnLFxuICAgICdjaGVja291dEJyYW5jaCcsXG4gICAgJ2NoZWNrb3V0TGF0ZXN0VGFnJyxcbiAgICAnY2hlY2tvdXRMb2NhbEJyYW5jaCcsXG4gICAgJ2NsZWFuJyxcbiAgICAnY2xvbmUnLFxuICAgICdjb21taXQnLFxuICAgICdjd2QnLFxuICAgICdkZWxldGVMb2NhbEJyYW5jaCcsXG4gICAgJ2RlbGV0ZUxvY2FsQnJhbmNoZXMnLFxuICAgICdkaWZmJyxcbiAgICAnZGlmZlN1bW1hcnknLFxuICAgICdleGVjJyxcbiAgICAnZmV0Y2gnLFxuICAgICdnZXRSZW1vdGVzJyxcbiAgICAnaW5pdCcsXG4gICAgJ2xpc3RDb25maWcnLFxuICAgICdsaXN0UmVtb3RlJyxcbiAgICAnbG9nJyxcbiAgICAnbWVyZ2UnLFxuICAgICdtZXJnZUZyb21UbycsXG4gICAgJ21pcnJvcicsXG4gICAgJ212JyxcbiAgICAncHVsbCcsXG4gICAgJ3B1c2gnLFxuICAgICdwdXNoVGFncycsXG4gICAgJ3JhdycsXG4gICAgJ3JlYmFzZScsXG4gICAgJ3JlbW90ZScsXG4gICAgJ3JlbW92ZVJlbW90ZScsXG4gICAgJ3Jlc2V0JyxcbiAgICAncmV2ZXJ0JyxcbiAgICAncmV2cGFyc2UnLFxuICAgICdybScsXG4gICAgJ3JtS2VlcExvY2FsJyxcbiAgICAnc2hvdycsXG4gICAgJ3N0YXNoJyxcbiAgICAnc3Rhc2hMaXN0JyxcbiAgICAnc3RhdHVzJyxcbiAgICAnc3ViTW9kdWxlJyxcbiAgICAnc3VibW9kdWxlQWRkJyxcbiAgICAnc3VibW9kdWxlSW5pdCcsXG4gICAgJ3N1Ym1vZHVsZVVwZGF0ZScsXG4gICAgJ3RhZycsXG4gICAgJ3RhZ3MnLFxuICAgICd1cGRhdGVTZXJ2ZXJJbmZvJ1xuXTtcbmZ1bmN0aW9uIGdpdFAoLi4uYXJncykge1xuICAgIGxldCBnaXQ7XG4gICAgbGV0IGNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2l0ID0gZ2l0X2ZhY3RvcnlfMS5naXRJbnN0YW5jZUZhY3RvcnkoLi4uYXJncyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNoYWluID0gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkZXJSZXR1cm4oKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlQXBpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFpblJldHVybigpIHtcbiAgICAgICAgcmV0dXJuIGNoYWluO1xuICAgIH1cbiAgICBjb25zdCBwcm9taXNlQXBpID0gWy4uLmZ1bmN0aW9uTmFtZXNCdWlsZGVyQXBpLCAuLi5mdW5jdGlvbk5hbWVzUHJvbWlzZUFwaV0ucmVkdWNlKChhcGksIG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaXNBc3luYyA9IGZ1bmN0aW9uTmFtZXNQcm9taXNlQXBpLmluY2x1ZGVzKG5hbWUpO1xuICAgICAgICBjb25zdCB2YWxpZCA9IGlzQXN5bmMgPyBhc3luY1dyYXBwZXIobmFtZSwgZ2l0KSA6IHN5bmNXcmFwcGVyKG5hbWUsIGdpdCwgYXBpKTtcbiAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmUgPSBpc0FzeW5jID8gY2hhaW5SZXR1cm4gOiBidWlsZGVyUmV0dXJuO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBpLCBuYW1lLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogZ2l0ID8gdmFsaWQgOiBhbHRlcm5hdGl2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBwcm9taXNlQXBpO1xuICAgIGZ1bmN0aW9uIGFzeW5jV3JhcHBlcihmbiwgZ2l0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgaW50ZXJmYWNlIHJlcXVpcmVzIHRoYXQgaGFuZGxlcnMgYXJlIG5vdCBzdXBwbGllZCBpbmxpbmUsICcgK1xuICAgICAgICAgICAgICAgICAgICAndHJhaWxpbmcgZnVuY3Rpb24gbm90IGFsbG93ZWQgaW4gY2FsbCB0byAnICsgZm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYWluLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh0b0Vycm9yKGVycikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBnaXRbZm5dLmFwcGx5KGdpdCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3luY1dyYXBwZXIoZm4sIGdpdCwgYXBpKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgZ2l0W2ZuXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJldHVybiBhcGk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5naXRQID0gZ2l0UDtcbmZ1bmN0aW9uIHRvRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IoZXJyb3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvbWlzZS13cmFwcGVkLmpzLm1hcCIsIlxuY29uc3Qge2dpdFB9ID0gcmVxdWlyZSgnLi9saWIvcnVubmVycy9wcm9taXNlLXdyYXBwZWQnKTtcbmNvbnN0IHtlc01vZHVsZUZhY3RvcnksIGdpdEluc3RhbmNlRmFjdG9yeSwgZ2l0RXhwb3J0RmFjdG9yeX0gPSByZXF1aXJlKCcuL2xpYi9naXQtZmFjdG9yeScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzTW9kdWxlRmFjdG9yeShcbiAgIGdpdEV4cG9ydEZhY3RvcnkoZ2l0SW5zdGFuY2VGYWN0b3J5LCB7Z2l0UH0pXG4pO1xuIiwiaW1wb3J0IHsgc3Bhd25TeW5jIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCB7IEZpbGVTeXN0ZW1BZGFwdGVyLCBGdXp6eVN1Z2dlc3RNb2RhbCwgTm90aWNlLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFN1Z2dlc3RNb2RhbCwgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBzaW1wbGVHaXQsIHsgRmlsZVN0YXR1c1Jlc3VsdCwgU2ltcGxlR2l0IH0gZnJvbSBcInNpbXBsZS1naXRcIjtcblxuZW51bSBQbHVnaW5TdGF0ZSB7XG4gICAgaWRsZSxcbiAgICBzdGF0dXMsXG4gICAgcHVsbCxcbiAgICBhZGQsXG4gICAgY29tbWl0LFxuICAgIHB1c2gsXG4gICAgY29uZmxpY3RlZCxcbn1cbmludGVyZmFjZSBPYnNpZGlhbkdpdFNldHRpbmdzIHtcbiAgICBjb21taXRNZXNzYWdlOiBzdHJpbmc7XG4gICAgY29tbWl0RGF0ZUZvcm1hdDogc3RyaW5nO1xuICAgIGF1dG9TYXZlSW50ZXJ2YWw6IG51bWJlcjtcbiAgICBhdXRvUHVsbEludGVydmFsOiBudW1iZXI7XG4gICAgYXV0b1B1bGxPbkJvb3Q6IGJvb2xlYW47XG4gICAgZGlzYWJsZVB1c2g6IGJvb2xlYW47XG4gICAgcHVsbEJlZm9yZVB1c2g6IGJvb2xlYW47XG4gICAgZGlzYWJsZVBvcHVwczogYm9vbGVhbjtcbiAgICBsaXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keTogYm9vbGVhbjtcbiAgICBzaG93U3RhdHVzQmFyOiBib29sZWFuO1xufVxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogT2JzaWRpYW5HaXRTZXR0aW5ncyA9IHtcbiAgICBjb21taXRNZXNzYWdlOiBcInZhdWx0IGJhY2t1cDoge3tkYXRlfX1cIixcbiAgICBjb21taXREYXRlRm9ybWF0OiBcIllZWVktTU0tREQgSEg6bW06c3NcIixcbiAgICBhdXRvU2F2ZUludGVydmFsOiAwLFxuICAgIGF1dG9QdWxsSW50ZXJ2YWw6IDAsXG4gICAgYXV0b1B1bGxPbkJvb3Q6IGZhbHNlLFxuICAgIGRpc2FibGVQdXNoOiBmYWxzZSxcbiAgICBwdWxsQmVmb3JlUHVzaDogdHJ1ZSxcbiAgICBkaXNhYmxlUG9wdXBzOiBmYWxzZSxcbiAgICBsaXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keTogZmFsc2UsXG4gICAgc2hvd1N0YXR1c0JhcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2lkaWFuR2l0IGV4dGVuZHMgUGx1Z2luIHtcbiAgICBnaXQ6IFNpbXBsZUdpdDtcbiAgICBzZXR0aW5nczogT2JzaWRpYW5HaXRTZXR0aW5ncztcbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICBzdGF0ZTogUGx1Z2luU3RhdGU7XG4gICAgdGltZW91dElEQmFja3VwOiBudW1iZXI7XG4gICAgdGltZW91dElEUHVsbDogbnVtYmVyO1xuICAgIGxhc3RVcGRhdGU6IG51bWJlcjtcbiAgICBnaXRSZWFkeSA9IGZhbHNlO1xuICAgIHByb21pc2VRdWV1ZTogUHJvbWlzZVF1ZXVlID0gbmV3IFByb21pc2VRdWV1ZSgpO1xuICAgIGNvbmZsaWN0T3V0cHV0RmlsZSA9IFwiY29uZmxpY3QtZmlsZXMtb2JzaWRpYW4tZ2l0Lm1kXCI7XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogUGx1Z2luU3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhcj8uZGlzcGxheSgpO1xuICAgIH1cblxuICAgIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgJyArIHRoaXMubWFuaWZlc3QubmFtZSArIFwiIHBsdWdpblwiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgICAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IE9ic2lkaWFuR2l0U2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwicHVsbFwiLFxuICAgICAgICAgICAgbmFtZTogXCJQdWxsIGZyb20gcmVtb3RlIHJlcG9zaXRvcnlcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnByb21pc2VRdWV1ZS5hZGRUYXNrKCgpID0+IHRoaXMucHVsbENoYW5nZXNGcm9tUmVtb3RlKCkpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwicHVzaFwiLFxuICAgICAgICAgICAgbmFtZTogXCJDb21taXQgKmFsbCogY2hhbmdlcyBhbmQgcHVzaCB0byByZW1vdGUgcmVwb3NpdG9yeVwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucHJvbWlzZVF1ZXVlLmFkZFRhc2soKCkgPT4gdGhpcy5jcmVhdGVCYWNrdXAoZmFsc2UpKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwiY29tbWl0LXB1c2gtc3BlY2lmaWVkLW1lc3NhZ2VcIixcbiAgICAgICAgICAgIG5hbWU6IFwiQ29tbWl0IGFuZCBwdXNoIGFsbCBjaGFuZ2VzIHdpdGggc3BlY2lmaWVkIG1lc3NhZ2VcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiBuZXcgQ3VzdG9tTWVzc2FnZU1vZGFsKHRoaXMpLm9wZW4oKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwibGlzdC1jaGFuZ2VkLWZpbGVzXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkxpc3QgY2hhbmdlZCBmaWxlc1wiLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcbiAgICAgICAgICAgICAgICBuZXcgQ2hhbmdlZEZpbGVzTW9kYWwodGhpcywgc3RhdHVzLmZpbGVzKS5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93U3RhdHVzQmFyKSB7XG4gICAgICAgICAgICAvLyBpbml0IHN0YXR1c0JhclxuICAgICAgICAgICAgbGV0IHN0YXR1c0JhckVsID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIoc3RhdHVzQmFyRWwsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckludGVydmFsKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5KCksIDEwMDApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KCgpID0+IHRoaXMuaW5pdCgpKTtcblxuICAgIH1cblxuICAgIGFzeW5jIG9udW5sb2FkKCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElEQmFja3VwKTtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJRFB1bGwpO1xuICAgICAgICBjb25zb2xlLmxvZygndW5sb2FkaW5nICcgKyB0aGlzLm1hbmlmZXN0Lm5hbWUgKyBcIiBwbHVnaW5cIik7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG4gICAgfVxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBhc3luYyBzYXZlTGFzdEF1dG8oZGF0ZTogRGF0ZSwgbW9kZTogXCJiYWNrdXBcIiB8IFwicHVsbFwiKSB7XG4gICAgICAgIGlmIChtb2RlID09PSBcImJhY2t1cFwiKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5tYW5pZmVzdC5pZCArIFwiOmxhc3RBdXRvQmFja3VwXCIsIGRhdGUudG9TdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJwdWxsXCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm1hbmlmZXN0LmlkICsgXCI6bGFzdEF1dG9QdWxsXCIsIGRhdGUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTGFzdEF1dG8oKTogUHJvbWlzZTx7IFwiYmFja3VwXCI6IERhdGUsIFwicHVsbFwiOiBEYXRlOyB9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcImJhY2t1cFwiOiBuZXcgRGF0ZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5tYW5pZmVzdC5pZCArIFwiOmxhc3RBdXRvQmFja3VwXCIpID8/IFwiXCIpLFxuICAgICAgICAgICAgXCJwdWxsXCI6IG5ldyBEYXRlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm1hbmlmZXN0LmlkICsgXCI6bGFzdEF1dG9QdWxsXCIpID8/IFwiXCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2l0SW5zdGFsbGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKFwiQ2Fubm90IHJ1biBnaXQgY29tbWFuZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWRhcHRlciA9IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIgYXMgRmlsZVN5c3RlbUFkYXB0ZXI7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gYWRhcHRlci5nZXRCYXNlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmdpdCA9IHNpbXBsZUdpdChwYXRoKTtcblxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFJlcG8gPSBhd2FpdCB0aGlzLmdpdC5jaGVja0lzUmVwbygpO1xuXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWRSZXBvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoXCJWYWxpZCBnaXQgcmVwb3NpdG9yeSBub3QgZm91bmQuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdpdFJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmlkbGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b1B1bGxPbkJvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlUXVldWUuYWRkVGFzaygoKSA9PiB0aGlzLnB1bGxDaGFuZ2VzRnJvbVJlbW90ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdEF1dG9zID0gYXdhaXQgdGhpcy5sb2FkTGFzdEF1dG8oKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCAtIChNYXRoLnJvdW5kKCgobm93LmdldFRpbWUoKSAtIGxhc3RBdXRvcy5iYWNrdXAuZ2V0VGltZSgpKSAvIDEwMDApIC8gNjApKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9CYWNrdXAoZGlmZiA8PSAwID8gMCA6IGRpZmYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgLSAoTWF0aC5yb3VuZCgoKG5vdy5nZXRUaW1lKCkgLSBsYXN0QXV0b3MucHVsbC5nZXRUaW1lKCkpIC8gMTAwMCkgLyA2MCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1B1bGwoZGlmZiA8PSAwID8gMCA6IGRpZmYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwdWxsQ2hhbmdlc0Zyb21SZW1vdGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmdpdFJlYWR5KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5naXRSZWFkeSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGZpbGVzVXBkYXRlZCA9IGF3YWl0IHRoaXMucHVsbCgpO1xuICAgICAgICBpZiAoZmlsZXNVcGRhdGVkID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShgUHVsbGVkIG5ldyBjaGFuZ2VzLiAke2ZpbGVzVXBkYXRlZH0gZmlsZXMgdXBkYXRlZGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShcIkV2ZXJ5dGhpbmcgaXMgdXAtdG8tZGF0ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuICAgICAgICBpZiAoc3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoYFlvdSBoYXZlICR7c3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RofSBjb25mbGljdCBmaWxlc2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVCYWNrdXAoZnJvbUF1dG9CYWNrdXA6IGJvb2xlYW4sIGNvbW1pdE1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLmdpdFJlYWR5KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZ2l0UmVhZHkpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLnN0YXR1cyk7XG4gICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcblxuXG4gICAgICAgIGlmICghZnJvbUF1dG9CYWNrdXApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGhpcy5jb25mbGljdE91dHB1dEZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuZGVsZXRlKGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGNvbmZsaWN0IGZpbGVzIG9uIGF1dG8gYmFja3VwXG4gICAgICAgIGlmIChmcm9tQXV0b0JhY2t1cCAmJiBzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmlkbGUpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoYERpZCBub3QgY29tbWl0LCBiZWNhdXNlIHlvdSBoYXZlICR7c3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RofSBjb25mbGljdCBmaWxlcy4gUGxlYXNlIHJlc29sdmUgdGhlbSBhbmQgY29tbWl0IHBlciBjb21tYW5kLmApO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDb25mbGljdChzdGF0dXMuY29uZmxpY3RlZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFuZ2VkRmlsZXMgPSAoYXdhaXQgdGhpcy5naXQuc3RhdHVzKCkpLmZpbGVzO1xuXG4gICAgICAgIGlmIChjaGFuZ2VkRmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZCgpO1xuICAgICAgICAgICAgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbW1pdChjb21taXRNZXNzYWdlKTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoYENvbW1pdHRlZCAke3N0YXR1cy5zdGFnZWQubGVuZ3RofSBmaWxlc2ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShcIk5vIGNoYW5nZXMgdG8gY29tbWl0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmRpc2FibGVQdXNoKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFja2luZ0JyYW5jaCA9IHN0YXR1cy50cmFja2luZztcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCcmFuY2ggPSBzdGF0dXMuY3VycmVudDtcblxuICAgICAgICAgICAgaWYgKCF0cmFja2luZ0JyYW5jaCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKFwiRGlkIG5vdCBwdXNoLiBObyB1cHN0cmVhbSBicmFuY2ggaXMgc2V0ISBTZWUgUkVBRE1FIGZvciBpbnN0cnVjdGlvbnNcIiwgMTAwMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZW1vdGVDaGFuZ2VkRmlsZXMgPSAoYXdhaXQgdGhpcy5naXQuZGlmZlN1bW1hcnkoW2N1cnJlbnRCcmFuY2gsIHRyYWNraW5nQnJhbmNoXSkpLmNoYW5nZWQ7XG5cbiAgICAgICAgICAgIC8vIFByZXZlbnQgcGx1Z2luIHRvIHB1bGwvcHVzaCBhdCBldmVyeSBjYWxsIG9mIGNyZWF0ZUJhY2t1cC4gT25seSBpZiB1bnB1c2hlZCBjb21taXRzIGFyZSBwcmVzZW50XG4gICAgICAgICAgICBpZiAocmVtb3RlQ2hhbmdlZEZpbGVzID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnB1bGxCZWZvcmVQdXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHB1bGxlZEZpbGVzTGVuZ3RoID0gYXdhaXQgdGhpcy5wdWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwdWxsZWRGaWxlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoYFB1bGxlZCAke3B1bGxlZEZpbGVzTGVuZ3RofSBmaWxlcyBmcm9tIHJlbW90ZWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBiZWNhdXNlIG9mIHB1bGxcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGBDYW5ub3QgcHVzaC4gWW91IGhhdmUgJHtzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGh9IGNvbmZsaWN0IGZpbGVzYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmxpY3Qoc3RhdHVzLmNvbmZsaWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlQ2hhbmdlZEZpbGVzID0gKGF3YWl0IHRoaXMuZ2l0LmRpZmZTdW1tYXJ5KFtjdXJyZW50QnJhbmNoLCB0cmFja2luZ0JyYW5jaF0pKS5jaGFuZ2VkO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKGBQdXNoZWQgJHtyZW1vdGVDaGFuZ2VkRmlsZXN9IGZpbGVzIHRvIHJlbW90ZWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShcIk5vIGNoYW5nZXMgdG8gcHVzaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmlkbGUpO1xuICAgIH1cblxuXG4gICAgLy8gcmVnaW9uOiBtYWluIG1ldGhvZHNcblxuICAgIGlzR2l0SW5zdGFsbGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3RldmV1a3gvZ2l0LWpzL2lzc3Vlcy80MDJcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHNwYXduU3luYygnZ2l0JywgWyctLXZlcnNpb24nXSwge1xuICAgICAgICAgICAgc3RkaW86ICdpZ25vcmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb21tYW5kLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbW1hbmQuZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGFzeW5jIGFkZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5hZGQpO1xuICAgICAgICBhd2FpdCB0aGlzLmdpdC5hZGQoXG4gICAgICAgICAgICBcIi4vKlwiLFxuICAgICAgICAgICAgKGVycjogRXJyb3IgfCBudWxsKSA9PlxuICAgICAgICAgICAgICAgIGVyciAmJiB0aGlzLmRpc3BsYXlFcnJvcihgQ2Fubm90IGFkZCBmaWxlczogJHtlcnIubWVzc2FnZX1gKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGNvbW1pdChtZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29tbWl0KTtcbiAgICAgICAgbGV0IGNvbW1pdE1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdID0gbWVzc2FnZSA/PyBhd2FpdCB0aGlzLmZvcm1hdENvbW1pdE1lc3NhZ2UodGhpcy5zZXR0aW5ncy5jb21taXRNZXNzYWdlKTtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MubGlzdENoYW5nZWRGaWxlc0luTWVzc2FnZUJvZHkpIHtcbiAgICAgICAgICAgIGNvbW1pdE1lc3NhZ2UgPSBbY29tbWl0TWVzc2FnZSwgXCJBZmZlY3RlZCBmaWxlczpcIiwgKGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpKS5zdGFnZWQuam9pbihcIlxcblwiKV07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5naXQuY29tbWl0KGNvbW1pdE1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2goKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUucHVzaCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2l0LmVudih7IC4uLnByb2Nlc3MuZW52LCBcIk9CU0lESUFOX0dJVFwiOiAxIH0pLnB1c2goXG4gICAgICAgICAgICAoZXJyOiBFcnJvciB8IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgICBlcnIgJiYgdGhpcy5kaXNwbGF5RXJyb3IoYFB1c2ggZmFpbGVkICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUucHVsbCk7XG4gICAgICAgIGNvbnN0IHB1bGxSZXN1bHQgPSBhd2FpdCB0aGlzLmdpdC5wdWxsKFtcIi0tbm8tcmViYXNlXCJdLFxuICAgICAgICAgICAgYXN5bmMgKGVycjogRXJyb3IgfCBudWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihgUHVsbCBmYWlsZWQgJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNvbmZsaWN0KHN0YXR1cy5jb25mbGljdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuIHB1bGxSZXN1bHQuZmlsZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIGVuZHJlZ2lvbjogbWFpbiBtZXRob2RzXG5cbiAgICBzdGFydEF1dG9CYWNrdXAobWludXRlcz86IG51bWJlcikge1xuICAgICAgICB0aGlzLnRpbWVvdXRJREJhY2t1cCA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZVF1ZXVlLmFkZFRhc2soKCkgPT4gdGhpcy5jcmVhdGVCYWNrdXAodHJ1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUxhc3RBdXRvKG5ldyBEYXRlKCksIFwiYmFja3VwXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9CYWNrdXAoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAobWludXRlcyA/PyB0aGlzLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwpICogNjAwMDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGFydEF1dG9QdWxsKG1pbnV0ZXM/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aW1lb3V0SURQdWxsID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlUXVldWUuYWRkVGFzaygoKSA9PiB0aGlzLnB1bGxDaGFuZ2VzRnJvbVJlbW90ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVMYXN0QXV0byhuZXcgRGF0ZSgpLCBcInB1bGxcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1B1bGwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAobWludXRlcyA/PyB0aGlzLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwpICogNjAwMDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjbGVhckF1dG9CYWNrdXAoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJREJhY2t1cCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJREJhY2t1cCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xlYXJBdXRvUHVsbCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElEUHVsbCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJRFB1bGwpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUNvbmZsaWN0KGNvbmZsaWN0ZWQ6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29uZmxpY3RlZCk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW1xuICAgICAgICAgICAgXCIjIENvbmZsaWN0IGZpbGVzXCIsXG4gICAgICAgICAgICBcIlBsZWFzZSByZXNvbHZlIHRoZW0gYW5kIGNvbW1pdCBwZXIgY29tbWFuZCAoVGhpcyBmaWxlIHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdGhlIGNvbW1pdCkuXCIsXG4gICAgICAgICAgICAuLi5jb25mbGljdGVkLm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGUpO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZmlsZVRvTGlua3RleHQoZmlsZSwgXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYC0gW1ske2xpbmt9XV1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgLSBOb3QgYSBmaWxlOiAke2V9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLndyaXRlQW5kT3BlbkZpbGUobGluZXMuam9pbihcIlxcblwiKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd3JpdGVBbmRPcGVuRmlsZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci53cml0ZSh0aGlzLmNvbmZsaWN0T3V0cHV0RmlsZSwgdGV4dCk7XG5cbiAgICAgICAgbGV0IGZpbGVJc0FscmVhZHlPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLml0ZXJhdGVBbGxMZWF2ZXMobGVhZiA9PiB7XG4gICAgICAgICAgICBpZiAobGVhZi5nZXREaXNwbGF5VGV4dCgpICE9IFwiXCIgJiYgdGhpcy5jb25mbGljdE91dHB1dEZpbGUuc3RhcnRzV2l0aChsZWFmLmdldERpc3BsYXlUZXh0KCkpKSB7XG4gICAgICAgICAgICAgICAgZmlsZUlzQWxyZWFkeU9wZW5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZpbGVJc0FscmVhZHlPcGVuZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQodGhpcy5jb25mbGljdE91dHB1dEZpbGUsIFwiL1wiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlZ2lvbjogZGlzcGxheWluZyAvIGZvcm1hdHRpbmcgbWVzc2FnZXNcbiAgICBkaXNwbGF5TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDQgKiAxMDAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyPy5kaXNwbGF5TWVzc2FnZShtZXNzYWdlLnRvTG93ZXJDYXNlKCksIHRpbWVvdXQpO1xuXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5kaXNhYmxlUG9wdXBzKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYGdpdCBvYnNpZGlhbiBtZXNzYWdlOiAke21lc3NhZ2V9YCk7XG4gICAgfVxuICAgIGRpc3BsYXlFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICAgICAgbmV3IE5vdGljZShtZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coYGdpdCBvYnNpZGlhbiBlcnJvcjogJHttZXNzYWdlfWApO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhcj8uZGlzcGxheU1lc3NhZ2UobWVzc2FnZS50b0xvd2VyQ2FzZSgpLCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBhc3luYyBmb3JtYXRDb21taXRNZXNzYWdlKHRlbXBsYXRlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBpZiAodGVtcGxhdGUuaW5jbHVkZXMoXCJ7e251bUZpbGVzfX1cIikpIHtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcbiAgICAgICAgICAgIGxldCBudW1GaWxlcyA9IHN0YXR1cy5maWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoXCJ7e251bUZpbGVzfX1cIiwgU3RyaW5nKG51bUZpbGVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUuaW5jbHVkZXMoXCJ7e2ZpbGVzfX1cIikpIHtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcblxuICAgICAgICAgICAgbGV0IGNoYW5nZXNldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXTsgfSA9IHt9O1xuICAgICAgICAgICAgc3RhdHVzLmZpbGVzLmZvckVhY2goKHZhbHVlOiBGaWxlU3RhdHVzUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4IGluIGNoYW5nZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzZXRbdmFsdWUuaW5kZXhdLnB1c2godmFsdWUucGF0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc2V0W3ZhbHVlLmluZGV4XSA9IFt2YWx1ZS5wYXRoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGNodW5rcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgW2FjdGlvbiwgZmlsZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNoYW5nZXNldCkpIHtcbiAgICAgICAgICAgICAgICBjaHVua3MucHVzaChhY3Rpb24gKyBcIiBcIiArIGZpbGVzLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZpbGVzID0gY2h1bmtzLmpvaW4oXCIsIFwiKTtcblxuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKFwie3tmaWxlc319XCIsIGZpbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb21lbnQgPSAod2luZG93IGFzIGFueSkubW9tZW50O1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShcbiAgICAgICAgICAgIFwie3tkYXRlfX1cIixcbiAgICAgICAgICAgIG1vbWVudCgpLmZvcm1hdCh0aGlzLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gZW5kcmVnaW9uOiBkaXNwbGF5aW5nIC8gZm9ybWF0dGluZyBzdHVmZlxufVxuXG5cbmNsYXNzIE9ic2lkaWFuR2l0U2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgICBkaXNwbGF5KCk6IHZvaWQge1xuICAgICAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgcGx1Z2luOiBPYnNpZGlhbkdpdCA9ICh0aGlzIGFzIGFueSkucGx1Z2luO1xuXG4gICAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDJcIiwgeyB0ZXh0OiBcIkdpdCBCYWNrdXAgc2V0dGluZ3NcIiB9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiVmF1bHQgYmFja3VwIGludGVydmFsIChtaW51dGVzKVwiKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgICAgXCJDb21taXQgYW5kIHB1c2ggY2hhbmdlcyBldmVyeSBYIG1pbnV0ZXMuIFRvIGRpc2FibGUgYXV0b21hdGljIGJhY2t1cCwgc3BlY2lmeSBuZWdhdGl2ZSB2YWx1ZSBvciB6ZXJvIChkZWZhdWx0KVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcocGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwpKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih2YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLmNsZWFyQXV0b0JhY2t1cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc3RhcnRBdXRvQmFja3VwKHBsdWdpbi5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBBdXRvbWF0aWMgYmFja3VwIGVuYWJsZWQhIEV2ZXJ5ICR7cGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWx9IG1pbnV0ZXMuYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsIDw9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnRpbWVvdXRJREJhY2t1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uY2xlYXJBdXRvQmFja3VwKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJBdXRvbWF0aWMgYmFja3VwIGRpc2FibGVkIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJQbGVhc2Ugc3BlY2lmeSBhIHZhbGlkIG51bWJlci5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiQXV0byBwdWxsIGludGVydmFsIChtaW51dGVzKVwiKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgICAgXCJQdWxsIGNoYW5nZXMgZXZlcnkgWCBtaW51dGVzLiBUbyBkaXNhYmxlIGF1dG9tYXRpYyBwdWxsLCBzcGVjaWZ5IG5lZ2F0aXZlIHZhbHVlIG9yIHplcm8gKGRlZmF1bHQpXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKFN0cmluZyhwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCkpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uY2xlYXJBdXRvUHVsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc3RhcnRBdXRvUHVsbChwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQXV0b21hdGljIHB1bGwgZW5hYmxlZCEgRXZlcnkgJHtwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbH0gbWludXRlcy5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgPD0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4udGltZW91dElEUHVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uY2xlYXJBdXRvUHVsbCgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiQXV0b21hdGljIHB1bGwgZGlzYWJsZWQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBzcGVjaWZ5IGEgdmFsaWQgbnVtYmVyLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkNvbW1pdCBtZXNzYWdlXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgICBcIlNwZWNpZnkgY3VzdG9tIGNvbW1pdCBtZXNzYWdlLiBBdmFpbGFibGUgcGxhY2Vob2xkZXJzOiB7e2RhdGV9fVwiICtcbiAgICAgICAgICAgICAgICBcIiAoc2VlIGJlbG93KSBhbmQge3tudW1GaWxlc319IChudW1iZXIgb2YgY2hhbmdlZCBmaWxlcyBpbiB0aGUgY29tbWl0KVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcInZhdWx0IGJhY2t1cFwiKVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGx1Z2luLnNldHRpbmdzLmNvbW1pdE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwie3tkYXRlfX0gcGxhY2Vob2xkZXIgZm9ybWF0XCIpXG4gICAgICAgICAgICAuc2V0RGVzYygnU3BlY2lmeSBjdXN0b20gZGF0ZSBmb3JtYXQuIEUuZy4gXCJZWVlZLU1NLUREIEhIOm1tOnNzXCInKVxuICAgICAgICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIocGx1Z2luLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlByZXZpZXcgY29tbWl0IG1lc3NhZ2VcIilcbiAgICAgICAgICAgIC5hZGRCdXR0b24oKGJ1dHRvbikgPT5cbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QnV0dG9uVGV4dChcIlByZXZpZXdcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21taXRNZXNzYWdlUHJldmlldyA9IGF3YWl0IHBsdWdpbi5mb3JtYXRDb21taXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmNvbW1pdE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShgJHtjb21taXRNZXNzYWdlUHJldmlld31gKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiTGlzdCBmaWxlbmFtZXMgYWZmZWN0ZWQgYnkgY29tbWl0IGluIHRoZSBjb21taXQgYm9keVwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLmxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5KVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MubGlzdENoYW5nZWRGaWxlc0luTWVzc2FnZUJvZHkgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkN1cnJlbnQgYnJhbmNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIlN3aXRjaCB0byBhIGRpZmZlcmVudCBicmFuY2hcIilcbiAgICAgICAgICAgIC5hZGREcm9wZG93bihhc3luYyAoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuY2hJbmZvID0gYXdhaXQgcGx1Z2luLmdpdC5icmFuY2hMb2NhbCgpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYnJhbmNoIG9mIGJyYW5jaEluZm8uYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihicmFuY2gsIGJyYW5jaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRyb3Bkb3duLnNldFZhbHVlKGJyYW5jaEluZm8uY3VycmVudCk7XG4gICAgICAgICAgICAgICAgZHJvcGRvd24ub25DaGFuZ2UoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwbHVnaW4uZ2l0LmNoZWNrb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYyAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLnNldFZhbHVlKGJyYW5jaEluZm8uY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShgQ2hlY2tlZCBvdXQgdG8gJHtvcHRpb259YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlB1bGwgdXBkYXRlcyBvbiBzdGFydHVwXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkF1dG9tYXRpY2FsbHkgcHVsbCB1cGRhdGVzIHdoZW4gT2JzaWRpYW4gc3RhcnRzXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxPbkJvb3QpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbE9uQm9vdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiRGlzYWJsZSBwdXNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkRvIG5vdCBwdXNoIGNoYW5nZXMgdG8gdGhlIHJlbW90ZSByZXBvc2l0b3J5XCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuZGlzYWJsZVB1c2gpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlUHVzaCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiUHVsbCBjaGFuZ2VzIGJlZm9yZSBwdXNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkNvbW1pdCAtPiBwdWxsIC0+IHB1c2ggKE9ubHkgaWYgcHVzaGluZyBpcyBlbmFibGVkKVwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnB1bGxCZWZvcmVQdXNoKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MucHVsbEJlZm9yZVB1c2ggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkRpc2FibGUgbm90aWZpY2F0aW9uc1wiKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgICAgXCJEaXNhYmxlIG5vdGlmaWNhdGlvbnMgZm9yIGdpdCBvcGVyYXRpb25zIHRvIG1pbmltaXplIGRpc3RyYWN0aW9uIChyZWZlciB0byBzdGF0dXMgYmFyIGZvciB1cGRhdGVzKVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuZGlzYWJsZVBvcHVwcylcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmRpc2FibGVQb3B1cHMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlNob3cgc3RhdHVzIGJhclwiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJPYnNpZGlhbiBtdXN0IGJlIHJlc3RhcnRlZCBmb3IgdGhlIGNoYW5nZXMgdG8gdGFrZSBhZmZlY3RcIilcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5zaG93U3RhdHVzQmFyKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3Muc2hvd1N0YXR1c0JhciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBTdGF0dXNCYXJNZXNzYWdlIHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdGltZW91dDogbnVtYmVyO1xufVxuXG5jbGFzcyBTdGF0dXNCYXIge1xuICAgIHB1YmxpYyBtZXNzYWdlczogU3RhdHVzQmFyTWVzc2FnZVtdID0gW107XG4gICAgcHVibGljIGN1cnJlbnRNZXNzYWdlOiBTdGF0dXNCYXJNZXNzYWdlO1xuICAgIHB1YmxpYyBsYXN0TWVzc2FnZVRpbWVzdGFtcDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwbHVnaW46IE9ic2lkaWFuR2l0O1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50LCBwbHVnaW46IE9ic2lkaWFuR2l0KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyRWwgPSBzdGF0dXNCYXJFbDtcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3BsYXlNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgZ2l0OiAke21lc3NhZ2Uuc2xpY2UoMCwgMTAwKX1gLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPiAwICYmICF0aGlzLmN1cnJlbnRNZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy5tZXNzYWdlcy5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KHRoaXMuY3VycmVudE1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RNZXNzYWdlVGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRNZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlQWdlID0gRGF0ZS5ub3coKSAtIHRoaXMubGFzdE1lc3NhZ2VUaW1lc3RhbXA7XG4gICAgICAgICAgICBpZiAobWVzc2FnZUFnZSA+PSB0aGlzLmN1cnJlbnRNZXNzYWdlLnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RNZXNzYWdlVGltZXN0YW1wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc3BsYXlTdGF0ZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnBsdWdpbi5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5pZGxlOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUZyb21Ob3codGhpcy5wbHVnaW4ubGFzdFVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLnN0YXR1czpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGNoZWNraW5nIHJlcG8gc3RhdHVzLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmFkZDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGFkZGluZyBmaWxlcyB0byByZXBvLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmNvbW1pdDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGNvbW1pdHRpbmcgY2hhbmdlcy4uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5wdXNoOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChcImdpdDogcHVzaGluZyBjaGFuZ2VzLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLnB1bGw6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBwdWxsaW5nIGNoYW5nZXMuLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29uZmxpY3RlZDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IHlvdSBoYXZlIGNvbmZsaWN0IGZpbGVzLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChcImdpdDogZmFpbGVkIG9uIGluaXRpYWxpemF0aW9uIVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGlzcGxheUZyb21Ob3codGltZXN0YW1wOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgbGV0IG1vbWVudCA9ICh3aW5kb3cgYXMgYW55KS5tb21lbnQ7XG4gICAgICAgICAgICBsZXQgZnJvbU5vdyA9IG1vbWVudCh0aW1lc3RhbXApLmZyb21Ob3coKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgZ2l0OiBsYXN0IHVwZGF0ZSAke2Zyb21Ob3d9Li5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgZ2l0OiByZWFkeWApO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ3VzdG9tTWVzc2FnZU1vZGFsIGV4dGVuZHMgU3VnZ2VzdE1vZGFsPHN0cmluZz4ge1xuICAgIHBsdWdpbjogT2JzaWRpYW5HaXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IE9ic2lkaWFuR2l0KSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbi5hcHApO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlcihcIlR5cGUgeW91ciBtZXNzYWdlIGFuZCBzZWxlY3Qgb3B0aW9uYWwgdGhlIHZlcnNpb24gd2l0aCB0aGUgYWRkZWQgZGF0ZS5cIik7XG4gICAgfVxuXG5cbiAgICBnZXRTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBkYXRlID0gKHdpbmRvdyBhcyBhbnkpLm1vbWVudCgpLmZvcm1hdCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb21taXREYXRlRm9ybWF0KTtcbiAgICAgICAgaWYgKHF1ZXJ5ID09IFwiXCIpIHF1ZXJ5ID0gXCIuLi5cIjtcbiAgICAgICAgcmV0dXJuIFtxdWVyeSwgYCR7ZGF0ZX06ICR7cXVlcnl9YCwgYCR7cXVlcnl9OiAke2RhdGV9YF07XG4gICAgfVxuXG4gICAgcmVuZGVyU3VnZ2VzdGlvbih2YWx1ZTogc3RyaW5nLCBlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgb25DaG9vc2VTdWdnZXN0aW9uKGl0ZW06IHN0cmluZywgXzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbHVnaW4ucHJvbWlzZVF1ZXVlLmFkZFRhc2soKCkgPT4gdGhpcy5wbHVnaW4uY3JlYXRlQmFja3VwKGZhbHNlLCBpdGVtKSk7XG4gICAgfVxuXG59XG5jbGFzcyBDaGFuZ2VkRmlsZXNNb2RhbCBleHRlbmRzIEZ1enp5U3VnZ2VzdE1vZGFsPEZpbGVTdGF0dXNSZXN1bHQ+IHtcbiAgICBwbHVnaW46IE9ic2lkaWFuR2l0O1xuICAgIGNoYW5nZWRGaWxlczogRmlsZVN0YXR1c1Jlc3VsdFtdO1xuXG4gICAgY29uc3RydWN0b3IocGx1Z2luOiBPYnNpZGlhbkdpdCwgY2hhbmdlZEZpbGVzOiBGaWxlU3RhdHVzUmVzdWx0W10pIHtcbiAgICAgICAgc3VwZXIocGx1Z2luLmFwcCk7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICB0aGlzLmNoYW5nZWRGaWxlcyA9IGNoYW5nZWRGaWxlcztcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlcihcIk5vdCBzdXBwb3J0ZWQgZmlsZXMgd2lsbCBiZSBvcGVuZWQgYnkgZGVmYXVsdCBhcHAhXCIpO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IEZpbGVTdGF0dXNSZXN1bHRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRGaWxlcztcbiAgICB9XG5cbiAgICBnZXRJdGVtVGV4dChpdGVtOiBGaWxlU3RhdHVzUmVzdWx0KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0uaW5kZXggPT0gXCI/XCIgJiYgaXRlbS53b3JraW5nX2RpciA9PSBcIj9cIikge1xuICAgICAgICAgICAgcmV0dXJuIGBVbnRyYWNrZWQgfCAke2l0ZW0ucGF0aH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdvcmtpbmdfZGlyID0gXCJcIjtcbiAgICAgICAgbGV0IGluZGV4ID0gXCJcIjtcblxuICAgICAgICBpZiAoaXRlbS53b3JraW5nX2RpciAhPSBcIiBcIikgd29ya2luZ19kaXIgPSBgV29ya2luZyBkaXI6ICR7aXRlbS53b3JraW5nX2Rpcn0gYDtcbiAgICAgICAgaWYgKGl0ZW0uaW5kZXggIT0gXCIgXCIpIGluZGV4ID0gYEluZGV4OiAke2l0ZW0uaW5kZXh9YDtcblxuICAgICAgICByZXR1cm4gYCR7d29ya2luZ19kaXJ9JHtpbmRleH0gfCAke2l0ZW0ucGF0aH1gO1xuICAgIH1cblxuICAgIG9uQ2hvb3NlSXRlbShpdGVtOiBGaWxlU3RhdHVzUmVzdWx0LCBfOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wbHVnaW4uYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0Rmlyc3RMaW5rcGF0aERlc3QoaXRlbS5wYXRoLCBcIlwiKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAodGhpcy5hcHAgYXMgYW55KS5vcGVuV2l0aERlZmF1bHRBcHAoaXRlbS5wYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGl0ZW0ucGF0aCwgXCIvXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBQcm9taXNlUXVldWUge1xuICAgIHRhc2tzOiAoKCkgPT4gUHJvbWlzZTxhbnk+KVtdID0gW107XG5cbiAgICBhZGRUYXNrKHRhc2s6ICgpID0+IFByb21pc2U8YW55Pikge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUYXNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlVGFzaygpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50YXNrc1swXSgpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRhc2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJnaXRfZXJyb3JfMSIsInJlcXVpcmUkJDAiLCJvcyIsInR0eSIsInV0aWwiLCJyZXF1aXJlJCQxIiwidGhpcyIsImZzXzEiLCJmaWxlX2V4aXN0c18xIiwidXRpbF8xIiwiYXJndW1lbnRfZmlsdGVyc18xIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJyZXF1aXJlJCQ3IiwidXRpbHNfMSIsInRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xIiwidGFza18xIiwiQ2xlYW5TdW1tYXJ5XzEiLCJjaGVja19pc19yZXBvXzEiLCJjbGVhbl8xIiwiY29uZmlnXzEiLCJnaXRfY29uc3RydWN0X2Vycm9yXzEiLCJnaXRfcGx1Z2luX2Vycm9yXzEiLCJnaXRfcmVzcG9uc2VfZXJyb3JfMSIsInJlc2V0XzEiLCJkZWJ1Z18xIiwiZ2l0X2xvZ2dlcl8xIiwidGFza3NfcGVuZGluZ19xdWV1ZV8xIiwidGFzayIsImdpdEVycm9yIiwiY2hpbGRfcHJvY2Vzc18xIiwiZ2l0X2V4ZWN1dG9yX2NoYWluXzEiLCJwYXJzZV9yZW1vdGVfb2JqZWN0c18xIiwicGFyc2VfcmVtb3RlX21lc3NhZ2VzXzEiLCJNZXJnZVN1bW1hcnlfMSIsInBhcnNlX3B1bGxfMSIsInBhcnNlX21lcmdlXzEiLCJwYXJzZV9wdXNoXzEiLCJ0YXNrX2NhbGxiYWNrXzEiLCJjaGFuZ2Vfd29ya2luZ19kaXJlY3RvcnlfMSIsImhhc2hfb2JqZWN0XzEiLCJpbml0XzEiLCJtZXJnZV8xIiwicHVzaF8xIiwic3RhdHVzXzEiLCJwcm9taXNlX2RlZmVycmVkXzEiLCJCcmFuY2hEZWxldGVTdW1tYXJ5XzEiLCJCcmFuY2hTdW1tYXJ5XzEiLCJwYXJzZV9icmFuY2hfZGVsZXRlXzEiLCJwYXJzZV9icmFuY2hfMSIsIkNoZWNrSWdub3JlXzEiLCJwYXJzZV9jb21taXRfMSIsInBhcnNlX2RpZmZfc3VtbWFyeV8xIiwicGFyc2VfZmV0Y2hfMSIsInBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMSIsInBhcnNlX21vdmVfMSIsIkdldFJlbW90ZVN1bW1hcnlfMSIsImxvZ18xIiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTgiLCJyZXF1aXJlJCQxOSIsInJlcXVpcmUkJDIwIiwicmVxdWlyZSQkMjEiLCJyZXF1aXJlJCQyMiIsInJlcXVpcmUkJDIzIiwicGx1Z2lucyIsInBsdWdpbnNfMSIsIkdpdCIsImdpdF9mYWN0b3J5XzEiLCJzaW1wbGVHaXQiLCJzcGF3blN5bmMiLCJURmlsZSIsIk5vdGljZSIsIlBsdWdpbiIsIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIiwiU3VnZ2VzdE1vZGFsIiwiRnV6enlTdWdn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QUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDdkYsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxT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LEVBQUU7QUFDckIsRUFBRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsR0FBRztBQUNILEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFO0FBQ3BDLEVBQUUsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDbEMsRUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNqRTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFB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LENBQUMsR0FBRyxDQUFDO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsR0FBRztBQUNqQixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFD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LEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsQ0FBQztBQUNKLEVBQUU7QUFDRixDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUU7QUFDaEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJO0FBQzdELENBQUMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUs7QUFDeEI7QUFDQSxDQUFDLE1BQU0sSUFBSSxHQUFHLEdBQUc7QUFDakIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FB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QUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlKLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNNLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoSyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBS0EsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEssSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUtBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENB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
