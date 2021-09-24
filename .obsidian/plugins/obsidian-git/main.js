'use strict';

var obsidian = require('obsidian');
var path = require('path');
var child_process_1 = require('child_process');
var fs_1 = require('fs');
var tty = require('tty');
var util$1 = require('util');
var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var path__namespace = /*#__PURE__*/_interopNamespace(path);
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
    return to.concat(ar || Array.prototype.slice.call(from));
}

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
                        case 0: return [4 /*yield*/, plugin.gitManager.formatCommitMessage()];
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
                    case 0: return [4 /*yield*/, plugin.gitManager.branchInfo()];
                    case 1:
                        branchInfo = _b.sent();
                        for (_i = 0, _a = branchInfo.branches; _i < _a.length; _i++) {
                            branch = _a[_i];
                            dropdown.addOption(branch, branch);
                        }
                        dropdown.setValue(branchInfo.current);
                        dropdown.onChange(function (option) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, plugin.gitManager.checkout(option)];
                                    case 1:
                                        _a.sent();
                                        new obsidian.Notice("Checked out to " + option);
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
            .setName("Update submodules")
            .setDesc('"Create backup" and "pull" takes care of submodules. Missing features: Conflicted files, count of pulled/pushed/committed files. Tracking branch needs to be set for each submodule')
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.updateSubmodules)
                .onChange(function (value) {
                plugin.settings.updateSubmodules = value;
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
        new obsidian.Setting(containerEl)
            .setName("Custom Git binary path")
            .addText(function (cb) {
            cb.setValue(plugin.settings.gitPath);
            cb.setPlaceholder("git");
            cb.onChange(function (value) {
                plugin.settings.gitPath = value;
                plugin.gitManager.updateGitPath(value || "git");
                plugin.saveSettings();
            });
        });
    };
    return ObsidianGitSettingsTab;
}(obsidian.PluginSettingTab));

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
                this.statusBarEl.setText("git: checking repo status...");
                break;
            case PluginState.add:
                this.statusBarEl.setText("git: adding files to repo...");
                break;
            case PluginState.commit:
                this.statusBarEl.setText("git: committing changes...");
                break;
            case PluginState.push:
                this.statusBarEl.setText("git: pushing changes...");
                break;
            case PluginState.pull:
                this.statusBarEl.setText("git: pulling changes...");
                break;
            case PluginState.conflicted:
                this.statusBarEl.setText("git: you have conflict files...");
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
            this.statusBarEl.setText("git: last update " + fromNow);
        }
        else {
            this.statusBarEl.setText("git: ready");
        }
    };
    return StatusBar;
}());

var GeneralModal = /** @class */ (function (_super) {
    __extends(GeneralModal, _super);
    function GeneralModal(app, remotes, placeholder) {
        var _this = _super.call(this, app) || this;
        _this.resolve = null;
        _this.list = remotes;
        _this.setPlaceholder(placeholder);
        return _this;
    }
    GeneralModal.prototype.open = function () {
        var _this = this;
        _super.prototype.open.call(this);
        return new Promise(function (resolve) {
            _this.resolve = resolve;
        });
    };
    GeneralModal.prototype.selectSuggestion = function (value, evt) {
        if (this.resolve)
            this.resolve(value);
        _super.prototype.selectSuggestion.call(this, value, evt);
    };
    GeneralModal.prototype.onClose = function () {
        if (this.resolve)
            this.resolve(undefined);
    };
    GeneralModal.prototype.getSuggestions = function (query) {
        return __spreadArray([query.length > 0 ? query : "..."], this.list);
    };
    GeneralModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value;
    };
    GeneralModal.prototype.onChooseSuggestion = function (item, _) { };
    return GeneralModal;
}(obsidian.SuggestModal));

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
exports.configGetParser = exports.configListParser = exports.ConfigList = void 0;

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
    for (const item of configParser(text)) {
        config.addValue(item.file, String(item.key), item.value);
    }
    return config;
}
exports.configListParser = configListParser;
function configGetParser(text, key) {
    let value = null;
    const values = [];
    const scopes = new Map();
    for (const item of configParser(text, key)) {
        if (item.key !== key) {
            continue;
        }
        values.push(value = item.value);
        if (!scopes.has(item.file)) {
            scopes.set(item.file, []);
        }
        scopes.get(item.file).push(value);
    }
    return {
        key,
        paths: Array.from(scopes.keys()),
        scopes,
        value,
        values
    };
}
exports.configGetParser = configGetParser;
function configFilePath(filePath) {
    return filePath.replace(/^(file):/, '');
}
function* configParser(text, requestedKey = null) {
    const lines = text.split('\0');
    for (let i = 0, max = lines.length - 1; i < max;) {
        const file = configFilePath(lines[i++]);
        let value = lines[i++];
        let key = requestedKey;
        if (value.includes('\n')) {
            const line = utils.splitOn(value, '\n');
            key = line[0];
            value = line[1];
        }
        yield { file, key, value };
    }
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
function asConfigScope(scope, fallback) {
    if (typeof scope === 'string' && GitConfigScope.hasOwnProperty(scope)) {
        return scope;
    }
    return fallback;
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
function getConfigTask(key, scope) {
    const commands = ['config', '--null', '--show-origin', '--get-all', key];
    if (scope) {
        commands.splice(1, 0, `--${scope}`);
    }
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return ConfigList_1.configGetParser(text, key);
        }
    };
}
function listConfigTask(scope) {
    const commands = ['config', '--list', '--show-origin', '--null'];
    if (scope) {
        commands.push(`--${scope}`);
    }
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return ConfigList_1.configListParser(text);
        },
    };
}
function default_1() {
    return {
        addConfig(key, value, ...rest) {
            return this._runTask(addConfigTask(key, value, rest[0] === true, asConfigScope(rest[1], GitConfigScope.local)), utils.trailingFunctionArgument(arguments));
        },
        getConfig(key, scope) {
            return this._runTask(getConfigTask(key, asConfigScope(scope, undefined)), utils.trailingFunctionArgument(arguments));
        },
        listConfig(...rest) {
            return this._runTask(listConfigTask(asConfigScope(rest[0], undefined)), utils.trailingFunctionArgument(arguments));
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
                const message = /^([\s\S]+?):\s*(\d+)% \((\d+)\/(\d+)\)/.exec(chunk.toString('utf8'));
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
            callback((err instanceof gitResponseError.GitResponseError) ? addDeprecationNoticeToError(err) : err, undefined);
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
    excludeOptions[excludeOptions["mailMap"] = 10] = "mailMap";
    excludeOptions[excludeOptions["multiLine"] = 11] = "multiLine";
    excludeOptions[excludeOptions["strictDate"] = 12] = "strictDate";
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
        author_name: opt.mailMap !== false ? '%aN' : '%an',
        author_email: opt.mailMap !== false ? '%aE' : '%ae'
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
function default_1() {
    return {
        log(...rest) {
            const next = utils.trailingFunctionArgument(arguments);
            const task = rejectDeprecatedSignatures(...rest) ||
                createLogTask(parseLogOptions(utils.trailingOptionsArgument(arguments), utils.filterType(arguments[0], utils.filterArray)));
            return this._runTask(task, next);
        }
    };
    function createLogTask(options) {
        return logTask(options.splitter, options.fields, options.commands);
    }
    function rejectDeprecatedSignatures(from, to) {
        return (utils.filterString(from) &&
            utils.filterString(to) &&
            task.configurationErrorTask(`git.log(string, string) should be replaced with git.log({ from: string, to: string })`));
    }
}
exports.default = default_1;

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
Object.assign(SimpleGitApi.prototype, config.default(), log.default());

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

var GitManager = /** @class */ (function () {
    function GitManager(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
    }
    GitManager.prototype.formatCommitMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var template, status_1, numFiles, status_2, changeset_1, chunks, _i, _a, _b, action, files_1, files, moment, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        template = this.plugin.settings.commitMessage;
                        if (!template.includes("{{numFiles}}")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.status()];
                    case 1:
                        status_1 = _d.sent();
                        numFiles = status_1.changed.length;
                        template = template.replace("{{numFiles}}", String(numFiles));
                        _d.label = 2;
                    case 2:
                        if (!template.includes("{{files}}")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.status()];
                    case 3:
                        status_2 = _d.sent();
                        changeset_1 = {};
                        status_2.changed.forEach(function (value) {
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
                        _d.label = 4;
                    case 4:
                        moment = window.moment;
                        template = template.replace("{{date}}", moment().format(this.plugin.settings.commitDateFormat));
                        if (!this.plugin.settings.listChangedFilesInMessageBody) return [3 /*break*/, 6];
                        _c = template + "\n\n" + "Affected files:" + "\n";
                        return [4 /*yield*/, this.status()];
                    case 5:
                        template = _c + (_d.sent()).staged.join("\n");
                        _d.label = 6;
                    case 6: return [2 /*return*/, template];
                }
            });
        });
    };
    return GitManager;
}());

var SimpleGit = /** @class */ (function (_super) {
    __extends(SimpleGit, _super);
    function SimpleGit(plugin) {
        var _this = _super.call(this, plugin) || this;
        var adapter = _this.app.vault.adapter;
        var path = adapter.getBasePath();
        if (_this.isGitInstalled()) {
            _this.git = src({
                baseDir: path,
                binary: _this.plugin.settings.gitPath || undefined,
            });
        }
        return _this;
    }
    SimpleGit.prototype.status = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.setState(PluginState.status);
                        return [4 /*yield*/, this.git.status()];
                    case 1:
                        status = _a.sent();
                        return [2 /*return*/, {
                                changed: status.files,
                                staged: status.staged,
                                conflicted: status.conflicted,
                            }];
                }
            });
        });
    };
    SimpleGit.prototype.commitAll = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var _this = this;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!this.plugin.settings.updateSubmodules) return [3 /*break*/, 5];
                        this.plugin.setState(PluginState.commit);
                        _b = (_a = this.git).subModule;
                        _c = ["foreach", "--recursive"];
                        _d = "git add -A && if [ ! -z \"$(git status --porcelain)\" ]; then git commit -m \"";
                        if (!(message !== null && message !== void 0)) return [3 /*break*/, 1];
                        _e = message;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.formatCommitMessage()];
                    case 2:
                        _e = _j.sent();
                        _j.label = 3;
                    case 3: return [4 /*yield*/, _b.apply(_a, [_c.concat([_d + (_e) + "\"; fi"]), function (err) { return _this.onError(err); }])];
                    case 4:
                        _j.sent();
                        _j.label = 5;
                    case 5:
                        this.plugin.setState(PluginState.add);
                        return [4 /*yield*/, this.git.add("./*", function (err) { return _this.onError(err); })];
                    case 6:
                        _j.sent();
                        this.plugin.setState(PluginState.commit);
                        _g = (_f = this.git).commit;
                        if (!(message !== null && message !== void 0)) return [3 /*break*/, 7];
                        _h = message;
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.formatCommitMessage()];
                    case 8:
                        _h = _j.sent();
                        _j.label = 9;
                    case 9: return [4 /*yield*/, _g.apply(_f, [_h])];
                    case 10: return [2 /*return*/, (_j.sent()).summary.changes];
                }
            });
        });
    };
    SimpleGit.prototype.pull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pullResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.setState(PluginState.pull);
                        if (!this.plugin.settings.updateSubmodules) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.git.subModule(["update", "--remote", "--merge", "--recursive"], function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.git.pull(["--no-rebase"], function (err) { return __awaiter(_this, void 0, void 0, function () {
                            var status_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!err) return [3 /*break*/, 2];
                                        this.plugin.displayError("Pull failed " + err.message);
                                        return [4 /*yield*/, this.git.status()];
                                    case 1:
                                        status_1 = _a.sent();
                                        if (status_1.conflicted.length > 0) {
                                            this.plugin.handleConflict(status_1.conflicted);
                                        }
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 3:
                        pullResult = _a.sent();
                        return [2 /*return*/, pullResult.files.length];
                }
            });
        });
    };
    SimpleGit.prototype.push = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, trackingBranch, currentBranch, remoteChangedFiles;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.setState(PluginState.status);
                        return [4 /*yield*/, this.git.status()];
                    case 1:
                        status = _a.sent();
                        trackingBranch = status.tracking;
                        currentBranch = status.current;
                        return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 2:
                        remoteChangedFiles = (_a.sent()).changed;
                        this.plugin.setState(PluginState.push);
                        if (!this.plugin.settings.updateSubmodules) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.git.env(__assign(__assign({}, process.env), { "OBSIDIAN_GIT": 1 })).subModule(["foreach", "--recursive", "tracking=$(git for-each-ref --format='%(upstream:short)' \"$(git symbolic-ref -q HEAD)\"); echo $tracking; if [ ! -z \"$(git diff --shortstat $tracking)\" ]; then git push; fi"], function (err) { return _this.onError(err); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.git.env(__assign(__assign({}, process.env), { "OBSIDIAN_GIT": 1 })).push(function (err) { return _this.onError(err); })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, remoteChangedFiles];
                }
            });
        });
    };
    SimpleGit.prototype.canPush = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, trackingBranch, currentBranch, remoteChangedFiles;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // allow pushing in submodules even if the root has no changes.
                        if (this.plugin.settings.updateSubmodules === true) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.git.status(function (err) { return _this.onError(err); })];
                    case 1:
                        status = _a.sent();
                        trackingBranch = status.tracking;
                        currentBranch = status.current;
                        return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 2:
                        remoteChangedFiles = (_a.sent()).changed;
                        return [2 /*return*/, remoteChangedFiles !== 0];
                }
            });
        });
    };
    SimpleGit.prototype.checkRequirements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isGitInstalled()) {
                            return [2 /*return*/, "missing-git"];
                        }
                        return [4 /*yield*/, this.git.checkIsRepo()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, "missing-repo"];
                        }
                        return [2 /*return*/, "valid"];
                }
            });
        });
    };
    SimpleGit.prototype.branchInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, branches;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.status(function (err) { return _this.onError(err); })];
                    case 1:
                        status = _a.sent();
                        return [4 /*yield*/, this.git.branch(["--no-color"], function (err) { return _this.onError(err); })];
                    case 2:
                        branches = _a.sent();
                        return [2 /*return*/, {
                                current: status.current,
                                tracking: status.tracking,
                                branches: branches.all,
                            }];
                }
            });
        });
    };
    SimpleGit.prototype.checkout = function (branch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.checkout(branch, function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.init(false, function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.clone = function (url, dir) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.clone(url, path__namespace.join(this.app.vault.adapter.getBasePath(), dir), [], function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.setConfig = function (path, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.addConfig(path, value, function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.getConfig = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.listConfig(function (err) { return _this.onError(err); })];
                    case 1:
                        config = _a.sent();
                        return [2 /*return*/, config.all[path]];
                }
            });
        });
    };
    SimpleGit.prototype.fetch = function (remote) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.fetch(remote != undefined ? [remote] : [], function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.setRemote = function (name, url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRemotes()];
                    case 1:
                        if (!(_a.sent()).includes(name)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.git.remote(["set-url", name, url], function (err) { return _this.onError(err); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.git.remote(["add", name, url], function (err) { return _this.onError(err); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.getRemoteBranches = function (remote) {
        return __awaiter(this, void 0, void 0, function () {
            var res, list, item;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.branch(["-r", "--list", remote + "*"], function (err) { return _this.onError(err); })];
                    case 1:
                        res = _a.sent();
                        list = [];
                        for (item in res.branches) {
                            list.push(res.branches[item].name);
                        }
                        return [2 /*return*/, list];
                }
            });
        });
    };
    SimpleGit.prototype.getRemotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.remote([], function (err) { return _this.onError(err); })];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            return [2 /*return*/, res.trim().split("\n")];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                }
            });
        });
    };
    SimpleGit.prototype.removeRemote = function (remoteName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.removeRemote(remoteName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.updateUpstreamBranch = function (remoteBranch) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.push(__spreadArray(["--set-upstream"], remoteBranch.split("/")), function (err) { return _this.onError(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SimpleGit.prototype.updateGitPath = function (gitPath) {
        return this.git.customBinary(gitPath);
    };
    SimpleGit.prototype.isGitInstalled = function () {
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
    SimpleGit.prototype.onError = function (error) {
        if (error) {
            this.plugin.displayError(error.message);
        }
    };
    return SimpleGit;
}(GitManager));

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
    updateSubmodules: false,
    gitPath: ""
};
var ObsidianGit = /** @class */ (function (_super) {
    __extends(ObsidianGit, _super);
    function ObsidianGit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gitReady = false;
        _this.promiseQueue = new PromiseQueue();
        _this.conflictOutputFile = "conflict-files-obsidian-git.md";
        return _this;
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
                            name: "Create backup",
                            callback: function () { return _this.promiseQueue.addTask(function () { return _this.createBackup(false); }); }
                        });
                        this.addCommand({
                            id: "edit-remotes",
                            name: "Edit remotes",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.editRemotes()];
                            }); }); }
                        });
                        this.addCommand({
                            id: "remove-remote",
                            name: "Remove remote",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.removeRemote()];
                            }); }); }
                        });
                        this.addCommand({
                            id: "init-repo",
                            name: "Initialize a new repo",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.createNewRepo()];
                            }); }); }
                        });
                        this.addCommand({
                            id: "clone-repo",
                            name: "Clone an existing remote repo",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.cloneNewRepo()];
                            }); }); }
                        });
                        this.addCommand({
                            id: "commit-push-specified-message",
                            name: "Create backup with specified message",
                            callback: function () { return new CustomMessageModal(_this).open(); }
                        });
                        this.addCommand({
                            id: "list-changed-files",
                            name: "List changed files",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () {
                                var status;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.gitManager.status()];
                                        case 1:
                                            status = _a.sent();
                                            this.setState(PluginState.idle);
                                            new ChangedFilesModal(this, status.changed).open();
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
            var result, _a, lastAutos, now, diff, now, diff, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, , 9]);
                        this.gitManager = new SimpleGit(this);
                        return [4 /*yield*/, this.gitManager.checkRequirements()];
                    case 1:
                        result = _b.sent();
                        _a = result;
                        switch (_a) {
                            case "missing-git": return [3 /*break*/, 2];
                            case "missing-repo": return [3 /*break*/, 3];
                            case "valid": return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        this.displayError("Cannot run git command");
                        return [3 /*break*/, 7];
                    case 3:
                        new obsidian.Notice("Can't find a valid git repository. Please create one via the given command.");
                        return [3 /*break*/, 7];
                    case 4:
                        this.gitReady = true;
                        this.setState(PluginState.idle);
                        if (this.settings.autoPullOnBoot) {
                            this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); });
                        }
                        return [4 /*yield*/, this.loadLastAuto()];
                    case 5:
                        lastAutos = _b.sent();
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
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("Something weird happened. The 'checkRequirements' result is " + result);
                        _b.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _b.sent();
                        this.displayError(error_1);
                        console.error(error_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.createNewRepo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gitManager.init()];
                    case 1:
                        _a.sent();
                        new obsidian.Notice("Initialized new repo");
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.cloneNewRepo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, url, dir;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = new GeneralModal(this.app, [], "Enter remote URL");
                        return [4 /*yield*/, modal.open()];
                    case 1:
                        url = _a.sent();
                        if (!url) return [3 /*break*/, 4];
                        return [4 /*yield*/, new GeneralModal(this.app, [], "Enter directory for clone. It needs to be empty or not existent.").open()];
                    case 2:
                        dir = _a.sent();
                        if (!dir) return [3 /*break*/, 4];
                        dir = path__namespace.normalize(dir);
                        new obsidian.Notice("Cloning new repo into \"" + dir + "\"");
                        return [4 /*yield*/, this.gitManager.clone(url, dir)];
                    case 3:
                        _a.sent();
                        new obsidian.Notice("Cloned new repo");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retries to call `this.init()` if necessary, otherwise returns directly
     * @returns true if `this.gitManager` is ready to be used, false if not.
     */
    ObsidianGit.prototype.isAllInitialized = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gitReady) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.gitReady];
                }
            });
        });
    };
    ObsidianGit.prototype.pullChangesFromRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filesUpdated, status_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAllInitialized()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.gitManager.pull()];
                    case 2:
                        filesUpdated = _a.sent();
                        if (filesUpdated > 0) {
                            this.displayMessage("Pulled new changes. " + filesUpdated + " files updated");
                        }
                        else {
                            this.displayMessage("Everything is up-to-date");
                        }
                        if (!(this.gitManager instanceof SimpleGit)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.gitManager.status()];
                    case 3:
                        status_1 = _a.sent();
                        if (status_1.conflicted.length > 0) {
                            this.displayError("You have " + status_1.conflicted.length + " conflict files");
                        }
                        _a.label = 4;
                    case 4:
                        this.lastUpdate = Date.now();
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.createBackup = function (fromAutoBackup, commitMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var file, status_2, changedFiles, commitedFiles, remoteBranch, pulledFilesLength, status_3, _a, pushedFiles;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.isAllInitialized()];
                    case 1:
                        if (!(_b.sent()))
                            return [2 /*return*/];
                        if (!!fromAutoBackup) return [3 /*break*/, 3];
                        file = this.app.vault.getAbstractFileByPath(this.conflictOutputFile);
                        return [4 /*yield*/, this.app.vault.delete(file)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!(this.gitManager instanceof SimpleGit)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.gitManager.status()];
                    case 4:
                        status_2 = _b.sent();
                        // check for conflict files on auto backup
                        if (fromAutoBackup && status_2.conflicted.length > 0) {
                            this.setState(PluginState.idle);
                            this.displayError("Did not commit, because you have " + status_2.conflicted.length + " conflict files. Please resolve them and commit per command.");
                            this.handleConflict(status_2.conflicted);
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5: return [4 /*yield*/, this.gitManager.status()];
                    case 6:
                        changedFiles = (_b.sent()).changed;
                        if (!(changedFiles.length !== 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.gitManager.commitAll(commitMessage)];
                    case 7:
                        commitedFiles = _b.sent();
                        this.displayMessage("Committed " + commitedFiles + " files");
                        return [3 /*break*/, 9];
                    case 8:
                        this.displayMessage("No changes to commit");
                        _b.label = 9;
                    case 9:
                        if (!!this.settings.disablePush) return [3 /*break*/, 24];
                        return [4 /*yield*/, this.gitManager.branchInfo()];
                    case 10:
                        if (!!(_b.sent()).tracking) return [3 /*break*/, 14];
                        new obsidian.Notice("No upstream branch is set. Please select one.");
                        return [4 /*yield*/, this.selectRemoteBranch()];
                    case 11:
                        remoteBranch = _b.sent();
                        if (!(remoteBranch == undefined)) return [3 /*break*/, 12];
                        this.displayError("Did not push. No upstream-branch is set!", 10000);
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                    case 12: return [4 /*yield*/, this.gitManager.updateUpstreamBranch(remoteBranch)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: return [4 /*yield*/, this.gitManager.canPush()];
                    case 15:
                        if (!_b.sent()) return [3 /*break*/, 23];
                        if (!this.settings.pullBeforePush) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.gitManager.pull()];
                    case 16:
                        pulledFilesLength = _b.sent();
                        if (pulledFilesLength > 0) {
                            this.displayMessage("Pulled " + pulledFilesLength + " files from remote");
                        }
                        _b.label = 17;
                    case 17:
                        _a = this.gitManager instanceof SimpleGit;
                        if (!_a) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.gitManager.status()];
                    case 18:
                        _a = (status_3 = _b.sent()).conflicted.length > 0;
                        _b.label = 19;
                    case 19:
                        if (!_a) return [3 /*break*/, 20];
                        this.displayError("Cannot push. You have " + status_3.conflicted.length + " conflict files");
                        this.handleConflict(status_3.conflicted);
                        return [2 /*return*/];
                    case 20: return [4 /*yield*/, this.gitManager.push()];
                    case 21:
                        pushedFiles = _b.sent();
                        this.lastUpdate = Date.now();
                        this.displayMessage("Pushed " + pushedFiles + " files to remote");
                        _b.label = 22;
                    case 22: return [3 /*break*/, 24];
                    case 23:
                        this.displayMessage("No changes to push");
                        _b.label = 24;
                    case 24:
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ObsidianGit.prototype.editRemotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remotes, nameModal, remoteName, urlModal, remoteURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAllInitialized()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.gitManager.getRemotes()];
                    case 2:
                        remotes = _a.sent();
                        nameModal = new GeneralModal(this.app, remotes, "Select or create a new remote by typing its name and selecting it");
                        return [4 /*yield*/, nameModal.open()];
                    case 3:
                        remoteName = _a.sent();
                        if (!remoteName) return [3 /*break*/, 6];
                        urlModal = new GeneralModal(this.app, [], "Enter the remote URL");
                        return [4 /*yield*/, urlModal.open()];
                    case 4:
                        remoteURL = _a.sent();
                        return [4 /*yield*/, this.gitManager.setRemote(remoteName, remoteURL)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, remoteName];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.selectRemoteBranch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remotes, selectedRemote, nameModal, remoteName, _a, branches, branchModal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.gitManager.getRemotes()];
                    case 1:
                        remotes = _b.sent();
                        if (!(remotes.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.editRemotes()];
                    case 2:
                        selectedRemote = _b.sent();
                        if (!(selectedRemote == undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.gitManager.getRemotes()];
                    case 3:
                        remotes = _b.sent();
                        _b.label = 4;
                    case 4:
                        nameModal = new GeneralModal(this.app, remotes, "Select or create a new remote by typing its name and selecting it");
                        if (!(selectedRemote !== null && selectedRemote !== void 0)) return [3 /*break*/, 5];
                        _a = selectedRemote;
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, nameModal.open()];
                    case 6:
                        _a = _b.sent();
                        _b.label = 7;
                    case 7:
                        remoteName = _a;
                        if (!remoteName) return [3 /*break*/, 11];
                        this.displayMessage("Fetching remote branches");
                        return [4 /*yield*/, this.gitManager.fetch(remoteName)];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, this.gitManager.getRemoteBranches(remoteName)];
                    case 9:
                        branches = _b.sent();
                        branchModal = new GeneralModal(this.app, branches, "Select or create a new remote branch by typing its name and selecting it");
                        return [4 /*yield*/, branchModal.open()];
                    case 10: return [2 /*return*/, _b.sent()];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.removeRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remotes, nameModal, remoteName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAllInitialized()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.gitManager.getRemotes()];
                    case 2:
                        remotes = _a.sent();
                        nameModal = new GeneralModal(this.app, remotes, "Select a remote");
                        return [4 /*yield*/, nameModal.open()];
                    case 3:
                        remoteName = _a.sent();
                        if (remoteName) {
                            this.gitManager.removeRemote(remoteName);
                        }
                        return [2 /*return*/];
                }
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
        // Some errors might not be of type string
        message = message.toString();
        new obsidian.Notice(message);
        console.log("git obsidian error: " + message);
        (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.displayMessage(message.toLowerCase(), timeout);
    };
    return ObsidianGit;
}(obsidian.Plugin));

module.exports = ObsidianGit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tb2RhbHMvY2hhbmdlZEZpbGVzTW9kYWwudHMiLCJzcmMvbW9kYWxzL2N1c3RvbU1lc3NhZ2VNb2RhbC50cyIsInNyYy9wcm9taXNlUXVldWUudHMiLCJzcmMvc2V0dGluZ3MudHMiLCJzcmMvdHlwZXMudHMiLCJzcmMvc3RhdHVzQmFyLnRzIiwic3JjL21vZGFscy9nZW5lcmFsTW9kYWwudHMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtZXJyb3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtY29uc3RydWN0LWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9lcnJvcnMvZ2l0LXBsdWdpbi1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL3Rhc2stY29uZmlndXJhdGlvbi1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9Aa3dzaXRlcy9maWxlLWV4aXN0cy9kaXN0L3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9Aa3dzaXRlcy9maWxlLWV4aXN0cy9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy91dGlsLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy9hcmd1bWVudC1maWx0ZXJzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy9leGl0LWNvZGVzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy9naXQtb3V0cHV0LXN0cmVhbXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2xpbmUtcGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy9zaW1wbGUtZ2l0LW9wdGlvbnMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL3Rhc2stb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvdGFzay1wYXJzZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jaGVjay1pcy1yZXBvLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQ2xlYW5TdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy90YXNrLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jbGVhbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0NvbmZpZ0xpc3QuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NvbmZpZy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvcmVzZXQuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2FwaS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9jb21tYW5kLWNvbmZpZy1wcmVmaXhpbmctcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wbHVnaW5zL2Vycm9yLWRldGVjdGlvbi5wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvcGx1Z2luLXN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wbHVnaW5zL3Byb2dyZXNzLW1vbml0b3ItcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wbHVnaW5zL3NpbXBsZS1naXQtcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wbHVnaW5zL3NwYXduLW9wdGlvbnMtcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wbHVnaW5zL3RpbW91dC1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2dpdC1sb2dnZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3J1bm5lcnMvdGFza3MtcGVuZGluZy1xdWV1ZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9naXQtZXhlY3V0b3ItY2hhaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3J1bm5lcnMvZ2l0LWV4ZWN1dG9yLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrLWNhbGxiYWNrLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jaGFuZ2Utd29ya2luZy1kaXJlY3RvcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2hhc2gtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvSW5pdFN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2luaXQuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9EaWZmU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1kaWZmLXN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtbGlzdC1sb2ctc3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvbG9nLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvTWVyZ2VTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvUHVsbFN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtcmVtb3RlLW9iamVjdHMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtcmVtb3RlLW1lc3NhZ2VzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLXB1bGwuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtbWVyZ2UuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL21lcmdlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLXB1c2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3B1c2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9GaWxlU3RhdHVzU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL1N0YXR1c1N1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3N0YXR1cy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvc2ltcGxlLWdpdC1hcGkuanMiLCJub2RlX21vZHVsZXMvQGt3c2l0ZXMvcHJvbWlzZS1kZWZlcnJlZC9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9ydW5uZXJzL3NjaGVkdWxlci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvYXBwbHktcGF0Y2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9CcmFuY2hEZWxldGVTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWJyYW5jaC1kZWxldGUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9CcmFuY2hTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWJyYW5jaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvYnJhbmNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQ2hlY2tJZ25vcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NoZWNrLWlnbm9yZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtY29tbWl0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jb21taXQuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2RpZmYuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtZmV0Y2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2ZldGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLW1vdmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL21vdmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3B1bGwuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9HZXRSZW1vdGVTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9yZW1vdGUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3N0YXNoLWxpc3QuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3N1Yi1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9UYWdMaXN0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy90YWcuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvZ2l0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9naXQtZmFjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9wcm9taXNlLXdyYXBwZWQuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvaW5kZXguanMiLCJzcmMvZ2l0TWFuYWdlci50cyIsInNyYy9zaW1wbGVHaXQudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IEZ1enp5U3VnZ2VzdE1vZGFsIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgT2JzaWRpYW5HaXQgZnJvbSBcInNyYy9tYWluXCI7XG5pbXBvcnQgeyBGaWxlU3RhdHVzUmVzdWx0IH0gZnJvbSBcInNyYy90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2hhbmdlZEZpbGVzTW9kYWwgZXh0ZW5kcyBGdXp6eVN1Z2dlc3RNb2RhbDxGaWxlU3RhdHVzUmVzdWx0PiB7XG4gICAgcGx1Z2luOiBPYnNpZGlhbkdpdDtcbiAgICBjaGFuZ2VkRmlsZXM6IEZpbGVTdGF0dXNSZXN1bHRbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBsdWdpbjogT2JzaWRpYW5HaXQsIGNoYW5nZWRGaWxlczogRmlsZVN0YXR1c1Jlc3VsdFtdKSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbi5hcHApO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRmlsZXMgPSBjaGFuZ2VkRmlsZXM7XG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoXCJOb3Qgc3VwcG9ydGVkIGZpbGVzIHdpbGwgYmUgb3BlbmVkIGJ5IGRlZmF1bHQgYXBwIVwiKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBGaWxlU3RhdHVzUmVzdWx0W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkRmlsZXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbVRleHQoaXRlbTogRmlsZVN0YXR1c1Jlc3VsdCk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpdGVtLmluZGV4ID09IFwiP1wiICYmIGl0ZW0ud29ya2luZ19kaXIgPT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBgVW50cmFja2VkIHwgJHtpdGVtLnBhdGh9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3b3JraW5nX2RpciA9IFwiXCI7XG4gICAgICAgIGxldCBpbmRleCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGl0ZW0ud29ya2luZ19kaXIgIT0gXCIgXCIpIHdvcmtpbmdfZGlyID0gYFdvcmtpbmcgZGlyOiAke2l0ZW0ud29ya2luZ19kaXJ9IGA7XG4gICAgICAgIGlmIChpdGVtLmluZGV4ICE9IFwiIFwiKSBpbmRleCA9IGBJbmRleDogJHtpdGVtLmluZGV4fWA7XG5cbiAgICAgICAgcmV0dXJuIGAke3dvcmtpbmdfZGlyfSR7aW5kZXh9IHwgJHtpdGVtLnBhdGh9YDtcbiAgICB9XG5cbiAgICBvbkNob29zZUl0ZW0oaXRlbTogRmlsZVN0YXR1c1Jlc3VsdCwgXzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KGl0ZW0ucGF0aCwgXCJcIikgPT0gbnVsbCkge1xuICAgICAgICAgICAgKHRoaXMuYXBwIGFzIGFueSkub3BlbldpdGhEZWZhdWx0QXBwKGl0ZW0ucGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsIFwiL1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTdWdnZXN0TW9kYWwgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBPYnNpZGlhbkdpdCBmcm9tIFwic3JjL21haW5cIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbU1lc3NhZ2VNb2RhbCBleHRlbmRzIFN1Z2dlc3RNb2RhbDxzdHJpbmc+IHtcbiAgICBwbHVnaW46IE9ic2lkaWFuR2l0O1xuXG4gICAgY29uc3RydWN0b3IocGx1Z2luOiBPYnNpZGlhbkdpdCkge1xuICAgICAgICBzdXBlcihwbHVnaW4uYXBwKTtcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoXCJUeXBlIHlvdXIgbWVzc2FnZSBhbmQgc2VsZWN0IG9wdGlvbmFsIHRoZSB2ZXJzaW9uIHdpdGggdGhlIGFkZGVkIGRhdGUuXCIpO1xuICAgIH1cblxuXG4gICAgZ2V0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9ICh3aW5kb3cgYXMgYW55KS5tb21lbnQoKS5mb3JtYXQodGhpcy5wbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdCk7XG4gICAgICAgIGlmIChxdWVyeSA9PSBcIlwiKSBxdWVyeSA9IFwiLi4uXCI7XG4gICAgICAgIHJldHVybiBbcXVlcnksIGAke2RhdGV9OiAke3F1ZXJ5fWAsIGAke3F1ZXJ5fTogJHtkYXRlfWBdO1xuICAgIH1cblxuICAgIHJlbmRlclN1Z2dlc3Rpb24odmFsdWU6IHN0cmluZywgZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIG9uQ2hvb3NlU3VnZ2VzdGlvbihpdGVtOiBzdHJpbmcsIF86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucGx1Z2luLnByb21pc2VRdWV1ZS5hZGRUYXNrKCgpID0+IHRoaXMucGx1Z2luLmNyZWF0ZUJhY2t1cChmYWxzZSwgaXRlbSkpO1xuICAgIH1cblxufSIsIlxuZXhwb3J0IGNsYXNzIFByb21pc2VRdWV1ZSB7XG4gICAgdGFza3M6ICgoKSA9PiBQcm9taXNlPGFueT4pW10gPSBbXTtcblxuICAgIGFkZFRhc2sodGFzazogKCkgPT4gUHJvbWlzZTxhbnk+KSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRhc2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVUYXNrKCkge1xuICAgICAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tzWzBdKCkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGFzaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgTm90aWNlLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgT2JzaWRpYW5HaXQgZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgY2xhc3MgT2JzaWRpYW5HaXRTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICAgIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgICAgIGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBwbHVnaW46IE9ic2lkaWFuR2l0ID0gKHRoaXMgYXMgYW55KS5wbHVnaW47XG5cbiAgICAgICAgY29udGFpbmVyRWwuZW1wdHkoKTtcbiAgICAgICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoMlwiLCB7IHRleHQ6IFwiR2l0IEJhY2t1cCBzZXR0aW5nc1wiIH0pO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJWYXVsdCBiYWNrdXAgaW50ZXJ2YWwgKG1pbnV0ZXMpXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgICBcIkNvbW1pdCBhbmQgcHVzaCBjaGFuZ2VzIGV2ZXJ5IFggbWludXRlcy4gVG8gZGlzYWJsZSBhdXRvbWF0aWMgYmFja3VwLCBzcGVjaWZ5IG5lZ2F0aXZlIHZhbHVlIG9yIHplcm8gKGRlZmF1bHQpXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKFN0cmluZyhwbHVnaW4uc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCkpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uY2xlYXJBdXRvQmFja3VwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zdGFydEF1dG9CYWNrdXAocGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYEF1dG9tYXRpYyBiYWNrdXAgZW5hYmxlZCEgRXZlcnkgJHtwbHVnaW4uc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbH0gbWludXRlcy5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPD0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4udGltZW91dElEQmFja3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5jbGVhckF1dG9CYWNrdXAoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcIkF1dG9tYXRpYyBiYWNrdXAgZGlzYWJsZWQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBzcGVjaWZ5IGEgdmFsaWQgbnVtYmVyLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJBdXRvIHB1bGwgaW50ZXJ2YWwgKG1pbnV0ZXMpXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgICBcIlB1bGwgY2hhbmdlcyBldmVyeSBYIG1pbnV0ZXMuIFRvIGRpc2FibGUgYXV0b21hdGljIHB1bGwsIHNwZWNpZnkgbmVnYXRpdmUgdmFsdWUgb3IgemVybyAoZGVmYXVsdClcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsKSlcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIodmFsdWUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5jbGVhckF1dG9QdWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zdGFydEF1dG9QdWxsKHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBBdXRvbWF0aWMgcHVsbCBlbmFibGVkISBFdmVyeSAke3BsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsfSBtaW51dGVzLmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCA8PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi50aW1lb3V0SURQdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5jbGVhckF1dG9QdWxsKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJBdXRvbWF0aWMgcHVsbCBkaXNhYmxlZCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIHNwZWNpZnkgYSB2YWxpZCBudW1iZXIuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiQ29tbWl0IG1lc3NhZ2VcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICAgIFwiU3BlY2lmeSBjdXN0b20gY29tbWl0IG1lc3NhZ2UuIEF2YWlsYWJsZSBwbGFjZWhvbGRlcnM6IHt7ZGF0ZX19XCIgK1xuICAgICAgICAgICAgICAgIFwiIChzZWUgYmVsb3cpIGFuZCB7e251bUZpbGVzfX0gKG51bWJlciBvZiBjaGFuZ2VkIGZpbGVzIGluIHRoZSBjb21taXQpXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwidmF1bHQgYmFja3VwXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5jb21taXRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5jb21taXRNZXNzYWdlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJ7e2RhdGV9fSBwbGFjZWhvbGRlciBmb3JtYXRcIilcbiAgICAgICAgICAgIC5zZXREZXNjKCdTcGVjaWZ5IGN1c3RvbSBkYXRlIGZvcm1hdC4gRS5nLiBcIllZWVktTU0tREQgSEg6bW06c3NcIicpXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihwbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5jb21taXREYXRlRm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiUHJldmlldyBjb21taXQgbWVzc2FnZVwiKVxuICAgICAgICAgICAgLmFkZEJ1dHRvbigoYnV0dG9uKSA9PlxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRCdXR0b25UZXh0KFwiUHJldmlld1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbW1pdE1lc3NhZ2VQcmV2aWV3ID0gYXdhaXQgcGx1Z2luLmdpdE1hbmFnZXIuZm9ybWF0Q29tbWl0TWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGAke2NvbW1pdE1lc3NhZ2VQcmV2aWV3fWApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJMaXN0IGZpbGVuYW1lcyBhZmZlY3RlZCBieSBjb21taXQgaW4gdGhlIGNvbW1pdCBib2R5XCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MubGlzdENoYW5nZWRGaWxlc0luTWVzc2FnZUJvZHkpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5saXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiQ3VycmVudCBicmFuY2hcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiU3dpdGNoIHRvIGEgZGlmZmVyZW50IGJyYW5jaFwiKVxuICAgICAgICAgICAgLmFkZERyb3Bkb3duKGFzeW5jIChkcm9wZG93bikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5jaEluZm8gPSBhd2FpdCBwbHVnaW4uZ2l0TWFuYWdlci5icmFuY2hJbmZvKCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBicmFuY2ggb2YgYnJhbmNoSW5mby5icmFuY2hlcykge1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24oYnJhbmNoLCBicmFuY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcm9wZG93bi5zZXRWYWx1ZShicmFuY2hJbmZvLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKGFzeW5jIChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcGx1Z2luLmdpdE1hbmFnZXIuY2hlY2tvdXQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShgQ2hlY2tlZCBvdXQgdG8gJHtvcHRpb259YCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiUHVsbCB1cGRhdGVzIG9uIHN0YXJ0dXBcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiQXV0b21hdGljYWxseSBwdWxsIHVwZGF0ZXMgd2hlbiBPYnNpZGlhbiBzdGFydHNcIilcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbE9uQm9vdClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsT25Cb290ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJEaXNhYmxlIHB1c2hcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiRG8gbm90IHB1c2ggY2hhbmdlcyB0byB0aGUgcmVtb3RlIHJlcG9zaXRvcnlcIilcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlUHVzaClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmRpc2FibGVQdXNoID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJQdWxsIGNoYW5nZXMgYmVmb3JlIHB1c2hcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiQ29tbWl0IC0+IHB1bGwgLT4gcHVzaCAoT25seSBpZiBwdXNoaW5nIGlzIGVuYWJsZWQpXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MucHVsbEJlZm9yZVB1c2gpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5wdWxsQmVmb3JlUHVzaCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiVXBkYXRlIHN1Ym1vZHVsZXNcIilcbiAgICAgICAgICAgIC5zZXREZXNjKCdcIkNyZWF0ZSBiYWNrdXBcIiBhbmQgXCJwdWxsXCIgdGFrZXMgY2FyZSBvZiBzdWJtb2R1bGVzLiBNaXNzaW5nIGZlYXR1cmVzOiBDb25mbGljdGVkIGZpbGVzLCBjb3VudCBvZiBwdWxsZWQvcHVzaGVkL2NvbW1pdHRlZCBmaWxlcy4gVHJhY2tpbmcgYnJhbmNoIG5lZWRzIHRvIGJlIHNldCBmb3IgZWFjaCBzdWJtb2R1bGUnKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnVwZGF0ZVN1Ym1vZHVsZXMpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy51cGRhdGVTdWJtb2R1bGVzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJEaXNhYmxlIG5vdGlmaWNhdGlvbnNcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICAgIFwiRGlzYWJsZSBub3RpZmljYXRpb25zIGZvciBnaXQgb3BlcmF0aW9ucyB0byBtaW5pbWl6ZSBkaXN0cmFjdGlvbiAocmVmZXIgdG8gc3RhdHVzIGJhciBmb3IgdXBkYXRlcylcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLmRpc2FibGVQb3B1cHMpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlUG9wdXBzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJTaG93IHN0YXR1cyBiYXJcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiT2JzaWRpYW4gbXVzdCBiZSByZXN0YXJ0ZWQgZm9yIHRoZSBjaGFuZ2VzIHRvIHRha2UgYWZmZWN0XCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd1N0YXR1c0JhcilcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNob3dTdGF0dXNCYXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkN1c3RvbSBHaXQgYmluYXJ5IHBhdGhcIilcbiAgICAgICAgICAgIC5hZGRUZXh0KChjYikgPT4ge1xuICAgICAgICAgICAgICAgIGNiLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5naXRQYXRoKTtcbiAgICAgICAgICAgICAgICBjYi5zZXRQbGFjZWhvbGRlcihcImdpdFwiKTtcbiAgICAgICAgICAgICAgICBjYi5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmdpdFBhdGggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luLmdpdE1hbmFnZXIudXBkYXRlR2l0UGF0aCh2YWx1ZSB8fCBcImdpdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgT2JzaWRpYW5HaXRTZXR0aW5ncyB7XG4gICAgY29tbWl0TWVzc2FnZTogc3RyaW5nO1xuICAgIGNvbW1pdERhdGVGb3JtYXQ6IHN0cmluZztcbiAgICBhdXRvU2F2ZUludGVydmFsOiBudW1iZXI7XG4gICAgYXV0b1B1bGxJbnRlcnZhbDogbnVtYmVyO1xuICAgIGF1dG9QdWxsT25Cb290OiBib29sZWFuO1xuICAgIGRpc2FibGVQdXNoOiBib29sZWFuO1xuICAgIHB1bGxCZWZvcmVQdXNoOiBib29sZWFuO1xuICAgIGRpc2FibGVQb3B1cHM6IGJvb2xlYW47XG4gICAgbGlzdENoYW5nZWRGaWxlc0luTWVzc2FnZUJvZHk6IGJvb2xlYW47XG4gICAgc3RhbmRhbG9uZU1vZGU6IGJvb2xlYW47XG4gICAgcHJveHlVUkw6IHN0cmluZztcbiAgICBzaG93U3RhdHVzQmFyOiBib29sZWFuO1xuICAgIGxhc3RBdXRvQmFja1VwOiBzdHJpbmc7XG4gICAgbGFzdEF1dG9QdWxsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzIHtcbiAgICBjaGFuZ2VkOiBGaWxlU3RhdHVzUmVzdWx0W107XG4gICAgc3RhZ2VkOiBzdHJpbmdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVN0YXR1c1Jlc3VsdCB7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIGluZGV4OiBzdHJpbmc7XG4gICAgd29ya2luZ19kaXI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGlmZlJlc3VsdCB7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIHR5cGU6IFwiZXF1YWxcIiB8IFwibW9kaWZ5XCIgfCBcImFkZFwiIHwgXCJyZW1vdmVcIjtcbn1cblxuZXhwb3J0IGVudW0gUGx1Z2luU3RhdGUge1xuICAgIGlkbGUsXG4gICAgc3RhdHVzLFxuICAgIHB1bGwsXG4gICAgYWRkLFxuICAgIGNvbW1pdCxcbiAgICBwdXNoLFxuICAgIGNvbmZsaWN0ZWQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoSW5mbyB7XG4gICAgY3VycmVudDogc3RyaW5nO1xuICAgIHRyYWNraW5nOiBzdHJpbmc7XG4gICAgYnJhbmNoZXM6IHN0cmluZ1tdO1xufSIsImltcG9ydCBPYnNpZGlhbkdpdCBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBQbHVnaW5TdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmludGVyZmFjZSBTdGF0dXNCYXJNZXNzYWdlIHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdGltZW91dDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIHtcbiAgICBwdWJsaWMgbWVzc2FnZXM6IFN0YXR1c0Jhck1lc3NhZ2VbXSA9IFtdO1xuICAgIHB1YmxpYyBjdXJyZW50TWVzc2FnZTogU3RhdHVzQmFyTWVzc2FnZTtcbiAgICBwdWJsaWMgbGFzdE1lc3NhZ2VUaW1lc3RhbXA6IG51bWJlcjtcblxuICAgIHByaXZhdGUgc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcGx1Z2luOiBPYnNpZGlhbkdpdDtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXR1c0JhckVsOiBIVE1MRWxlbWVudCwgcGx1Z2luOiBPYnNpZGlhbkdpdCkge1xuICAgICAgICB0aGlzLnN0YXR1c0JhckVsID0gc3RhdHVzQmFyRWw7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYGdpdDogJHttZXNzYWdlLnNsaWNlKDAsIDEwMCl9YCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhdGhpcy5jdXJyZW50TWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IHRoaXMubWVzc2FnZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dCh0aGlzLmN1cnJlbnRNZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5sYXN0TWVzc2FnZVRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50TWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUFnZSA9IERhdGUubm93KCkgLSB0aGlzLmxhc3RNZXNzYWdlVGltZXN0YW1wO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VBZ2UgPj0gdGhpcy5jdXJyZW50TWVzc2FnZS50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TWVzc2FnZVRpbWVzdGFtcCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNwbGF5U3RhdGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wbHVnaW4uc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUuaWRsZTpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlGcm9tTm93KHRoaXMucGx1Z2luLmxhc3RVcGRhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5zdGF0dXM6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBjaGVja2luZyByZXBvIHN0YXR1cy4uLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUuYWRkOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChcImdpdDogYWRkaW5nIGZpbGVzIHRvIHJlcG8uLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmNvbW1pdDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGNvbW1pdHRpbmcgY2hhbmdlcy4uLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUucHVzaDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IHB1c2hpbmcgY2hhbmdlcy4uLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUucHVsbDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IHB1bGxpbmcgY2hhbmdlcy4uLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29uZmxpY3RlZDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IHlvdSBoYXZlIGNvbmZsaWN0IGZpbGVzLi4uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGZhaWxlZCBvbiBpbml0aWFsaXphdGlvbiFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc3BsYXlGcm9tTm93KHRpbWVzdGFtcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIGxldCBtb21lbnQgPSAod2luZG93IGFzIGFueSkubW9tZW50O1xuICAgICAgICAgICAgbGV0IGZyb21Ob3cgPSBtb21lbnQodGltZXN0YW1wKS5mcm9tTm93KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYGdpdDogbGFzdCB1cGRhdGUgJHtmcm9tTm93fWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBnaXQ6IHJlYWR5YCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQXBwLCBTdWdnZXN0TW9kYWwgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGNsYXNzIEdlbmVyYWxNb2RhbCBleHRlbmRzIFN1Z2dlc3RNb2RhbDxzdHJpbmc+IHtcbiAgICBsaXN0OiBzdHJpbmdbXTtcbiAgICByZXNvbHZlOiAoKHZhbHVlOiBzdHJpbmcgfCBQcm9taXNlTGlrZTxzdHJpbmc+KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcmVtb3Rlczogc3RyaW5nW10sIHBsYWNlaG9sZGVyOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoYXBwKTtcbiAgICAgICAgdGhpcy5saXN0ID0gcmVtb3RlcztcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlcihwbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgb3BlbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0U3VnZ2VzdGlvbih2YWx1ZTogc3RyaW5nLCBldnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJlc29sdmUpIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIHN1cGVyLnNlbGVjdFN1Z2dlc3Rpb24odmFsdWUsIGV2dCk7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzb2x2ZSkgdGhpcy5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgZ2V0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFtxdWVyeS5sZW5ndGggPiAwID8gcXVlcnkgOiBcIi4uLlwiLCAuLi50aGlzLmxpc3RdO1xuICAgIH1cblxuICAgIHJlbmRlclN1Z2dlc3Rpb24odmFsdWU6IHN0cmluZywgZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIG9uQ2hvb3NlU3VnZ2VzdGlvbihpdGVtOiBzdHJpbmcsIF86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7IH1cblxufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRFcnJvciA9IHZvaWQgMDtcbi8qKlxuICogVGhlIGBHaXRFcnJvcmAgaXMgdGhyb3duIHdoZW4gdGhlIHVuZGVybHlpbmcgYGdpdGAgcHJvY2VzcyB0aHJvd3MgYVxuICogZmF0YWwgZXhjZXB0aW9uIChlZyBhbiBgRU5PRU5UYCBleGNlcHRpb24gd2hlbiBhdHRlbXB0aW5nIHRvIHVzZSBhXG4gKiBub24td3JpdGFibGUgZGlyZWN0b3J5IGFzIHRoZSByb290IGZvciB5b3VyIHJlcG8pLCBhbmQgYWN0cyBhcyB0aGVcbiAqIGJhc2UgY2xhc3MgZm9yIG1vcmUgc3BlY2lmaWMgZXJyb3JzIHRocm93biBieSB0aGUgcGFyc2luZyBvZiB0aGVcbiAqIGdpdCByZXNwb25zZSBvciBlcnJvcnMgaW4gdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHRhc2sgYWJvdXQgdG9cbiAqIGJlIHJ1bi5cbiAqXG4gKiBXaGVuIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24sIHBlbmRpbmcgdGFza3MgaW4gdGhlIHNhbWUgaW5zdGFuY2Ugd2lsbFxuICogbm90IGJlIGV4ZWN1dGVkLiBUaGUgcmVjb21tZW5kZWQgd2F5IHRvIHJ1biBhIHNlcmllcyBvZiB0YXNrcyB0aGF0XG4gKiBjYW4gaW5kZXBlbmRlbnRseSBmYWlsIHdpdGhvdXQgbmVlZGluZyB0byBwcmV2ZW50IGZ1dHVyZSB0YXNrcyBmcm9tXG4gKiBydW5uaW5nIGlzIHRvIGNhdGNoIHRoZW0gaW5kaXZpZHVhbGx5OlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQgeyBnaXRQLCBTaW1wbGVHaXQsIEdpdEVycm9yLCBQdWxsUmVzdWx0IH0gZnJvbSAnc2ltcGxlLWdpdCc7XG5cbiBmdW5jdGlvbiBjYXRjaFRhc2sgKGU6IEdpdEVycm9yKSB7XG4gICByZXR1cm4gZS5cbiB9XG5cbiBjb25zdCBnaXQgPSBnaXRQKHJlcG9Xb3JraW5nRGlyKTtcbiBjb25zdCBwdWxsZWQ6IFB1bGxSZXN1bHQgfCBHaXRFcnJvciA9IGF3YWl0IGdpdC5wdWxsKCkuY2F0Y2goY2F0Y2hUYXNrKTtcbiBjb25zdCBwdXNoZWQ6IHN0cmluZyB8IEdpdEVycm9yID0gYXdhaXQgZ2l0LnB1c2hUYWdzKCkuY2F0Y2goY2F0Y2hUYXNrKTtcbiBgYGBcbiAqL1xuY2xhc3MgR2l0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFzaywgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkdpdEVycm9yID0gR2l0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdFJlc3BvbnNlRXJyb3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2dpdC1lcnJvclwiKTtcbi8qKlxuICogVGhlIGBHaXRSZXNwb25zZUVycm9yYCBpcyB0aGUgd3JhcHBlciBmb3IgYSBwYXJzZWQgcmVzcG9uc2UgdGhhdCBpcyB0cmVhdGVkIGFzXG4gKiBhIGZhdGFsIGVycm9yLCBmb3IgZXhhbXBsZSBhdHRlbXB0aW5nIGEgYG1lcmdlYCBjYW4gbGVhdmUgdGhlIHJlcG8gaW4gYSBjb3JydXB0ZWRcbiAqIHN0YXRlIHdoZW4gdGhlcmUgYXJlIGNvbmZsaWN0cyBzbyB0aGUgdGFzayB3aWxsIHJlamVjdCByYXRoZXIgdGhhbiByZXNvbHZlLlxuICpcbiAqIEZvciBleGFtcGxlLCBjYXRjaGluZyB0aGUgbWVyZ2UgY29uZmxpY3QgZXhjZXB0aW9uOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQgeyBnaXRQLCBTaW1wbGVHaXQsIEdpdFJlc3BvbnNlRXJyb3IsIE1lcmdlU3VtbWFyeSB9IGZyb20gJ3NpbXBsZS1naXQnO1xuXG4gY29uc3QgZ2l0ID0gZ2l0UChyZXBvUm9vdCk7XG4gY29uc3QgbWVyZ2VPcHRpb25zOiBzdHJpbmdbXSA9IFsnLS1uby1mZicsICdvdGhlci1icmFuY2gnXTtcbiBjb25zdCBtZXJnZVN1bW1hcnk6IE1lcmdlU3VtbWFyeSA9IGF3YWl0IGdpdC5tZXJnZShtZXJnZU9wdGlvbnMpXG4gICAgICAuY2F0Y2goKGU6IEdpdFJlc3BvbnNlRXJyb3I8TWVyZ2VTdW1tYXJ5PikgPT4gZS5naXQpO1xuXG4gaWYgKG1lcmdlU3VtbWFyeS5mYWlsZWQpIHtcbiAgIC8vIGRlYWwgd2l0aCB0aGUgZXJyb3JcbiB9XG4gYGBgXG4gKi9cbmNsYXNzIEdpdFJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLyoqXG4gICAgICogYC5naXRgIGFjY2VzcyB0aGUgcGFyc2VkIHJlc3BvbnNlIHRoYXQgaXMgdHJlYXRlZCBhcyBiZWluZyBhbiBlcnJvclxuICAgICAqL1xuICAgIGdpdCwgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcih1bmRlZmluZWQsIG1lc3NhZ2UgfHwgU3RyaW5nKGdpdCkpO1xuICAgICAgICB0aGlzLmdpdCA9IGdpdDtcbiAgICB9XG59XG5leHBvcnRzLkdpdFJlc3BvbnNlRXJyb3IgPSBHaXRSZXNwb25zZUVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LXJlc3BvbnNlLWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRDb25zdHJ1Y3RFcnJvciA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZ2l0LWVycm9yXCIpO1xuLyoqXG4gKiBUaGUgYEdpdENvbnN0cnVjdEVycm9yYCBpcyB0aHJvd24gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIGNvbnN0cnVjdG9yXG4gKiBvZiB0aGUgYHNpbXBsZS1naXRgIGluc3RhbmNlIGl0c2VsZi4gTW9zdCBjb21tb25seSBhcyBhIHJlc3VsdCBvZiB1c2luZ1xuICogYSBgYmFzZURpcmAgb3B0aW9uIHRoYXQgcG9pbnRzIHRvIGEgZm9sZGVyIHRoYXQgZWl0aGVyIGRvZXMgbm90IGV4aXN0LFxuICogb3IgY2Fubm90IGJlIHJlYWQgYnkgdGhlIHVzZXIgdGhlIG5vZGUgc2NyaXB0IGlzIHJ1bm5pbmcgYXMuXG4gKlxuICogQ2hlY2sgdGhlIGAubWVzc2FnZWAgcHJvcGVydHkgZm9yIG1vcmUgZGV0YWlsIGluY2x1ZGluZyB0aGUgcHJvcGVydGllc1xuICogcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgR2l0Q29uc3RydWN0RXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0Q29uc3RydWN0RXJyb3IgPSBHaXRDb25zdHJ1Y3RFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1jb25zdHJ1Y3QtZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdFBsdWdpbkVycm9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9naXQtZXJyb3JcIik7XG5jbGFzcyBHaXRQbHVnaW5FcnJvciBleHRlbmRzIGdpdF9lcnJvcl8xLkdpdEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBwbHVnaW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIodGFzaywgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0UGx1Z2luRXJyb3IgPSBHaXRQbHVnaW5FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1wbHVnaW4tZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRhc2tDb25maWd1cmF0aW9uRXJyb3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2dpdC1lcnJvclwiKTtcbi8qKlxuICogVGhlIGBUYXNrQ29uZmlndXJhdGlvbkVycm9yYCBpcyB0aHJvd24gd2hlbiBhIGNvbW1hbmQgd2FzIGluY29ycmVjdGx5XG4gKiBjb25maWd1cmVkLiBBbiBlcnJvciBvZiB0aGlzIGtpbmQgbWVhbnMgdGhhdCBubyBhdHRlbXB0IHdhcyBtYWRlIHRvXG4gKiBydW4geW91ciBjb21tYW5kIHRocm91Z2ggdGhlIHVuZGVybHlpbmcgYGdpdGAgYmluYXJ5LlxuICpcbiAqIENoZWNrIHRoZSBgLm1lc3NhZ2VgIHByb3BlcnR5IGZvciBtb3JlIGRldGFpbCBvbiB3aHkgeW91ciBjb25maWd1cmF0aW9uXG4gKiByZXN1bHRlZCBpbiBhbiBlcnJvci5cbiAqL1xuY2xhc3MgVGFza0NvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIGdpdF9lcnJvcl8xLkdpdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgfVxufVxuZXhwb3J0cy5UYXNrQ29uZmlndXJhdGlvbkVycm9yID0gVGFza0NvbmZpZ3VyYXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stY29uZmlndXJhdGlvbi1lcnJvci5qcy5tYXAiLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXHRcdGxldCBlbmFibGVPdmVycmlkZSA9IG51bGw7XG5cdFx0bGV0IG5hbWVzcGFjZXNDYWNoZTtcblx0XHRsZXQgZW5hYmxlZENhY2hlO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZU92ZXJyaWRlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVuYWJsZU92ZXJyaWRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChuYW1lc3BhY2VzQ2FjaGUgIT09IGNyZWF0ZURlYnVnLm5hbWVzcGFjZXMpIHtcblx0XHRcdFx0XHRuYW1lc3BhY2VzQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzO1xuXHRcdFx0XHRcdGVuYWJsZWRDYWNoZSA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbmFibGVkQ2FjaGU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXHRcdGNyZWF0ZURlYnVnLm5hbWVzcGFjZXMgPSBuYW1lc3BhY2VzO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2ID0gcHJvY2Vzcy5hcmd2KSA9PiB7XG5cdGNvbnN0IHByZWZpeCA9IGZsYWcuc3RhcnRzV2l0aCgnLScpID8gJycgOiAoZmxhZy5sZW5ndGggPT09IDEgPyAnLScgOiAnLS0nKTtcblx0Y29uc3QgcG9zaXRpb24gPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3NpdGlvbiA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0cmV0dXJuIHBvc2l0aW9uICE9PSAtMSAmJiAodGVybWluYXRvclBvc2l0aW9uID09PSAtMSB8fCBwb3NpdGlvbiA8IHRlcm1pbmF0b3JQb3NpdGlvbik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5jb25zdCBoYXNGbGFnID0gcmVxdWlyZSgnaGFzLWZsYWcnKTtcblxuY29uc3Qge2Vudn0gPSBwcm9jZXNzO1xuXG5sZXQgZm9yY2VDb2xvcjtcbmlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJykgfHxcblx0aGFzRmxhZygnY29sb3I9bmV2ZXInKSkge1xuXHRmb3JjZUNvbG9yID0gMDtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IDE7XG59XG5cbmlmICgnRk9SQ0VfQ09MT1InIGluIGVudikge1xuXHRpZiAoZW52LkZPUkNFX0NPTE9SID09PSAndHJ1ZScpIHtcblx0XHRmb3JjZUNvbG9yID0gMTtcblx0fSBlbHNlIGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICdmYWxzZScpIHtcblx0XHRmb3JjZUNvbG9yID0gMDtcblx0fSBlbHNlIHtcblx0XHRmb3JjZUNvbG9yID0gZW52LkZPUkNFX0NPTE9SLmxlbmd0aCA9PT0gMCA/IDEgOiBNYXRoLm1pbihwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSwgMyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcblx0aWYgKGxldmVsID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsZXZlbCxcblx0XHRoYXNCYXNpYzogdHJ1ZSxcblx0XHRoYXMyNTY6IGxldmVsID49IDIsXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzXG5cdH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3IoaGF2ZVN0cmVhbSwgc3RyZWFtSXNUVFkpIHtcblx0aWYgKGZvcmNlQ29sb3IgPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChoYXZlU3RyZWFtICYmICFzdHJlYW1Jc1RUWSAmJiBmb3JjZUNvbG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IG1pbiA9IGZvcmNlQ29sb3IgfHwgMDtcblxuXHRpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuXG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGUgZmlyc3QgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG5cdFx0Y29uc3Qgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG5cdFx0aWYgKFxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knLCAnR0lUSFVCX0FDVElPTlMnLCAnQlVJTERLSVRFJ10uc29tZShzaWduID0+IHNpZ24gaW4gZW52KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG5cdFx0cmV0dXJuIC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwO1xuXHR9XG5cblx0aWYgKGVudi5DT0xPUlRFUk0gPT09ICd0cnVlY29sb3InKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuXHRcdHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuXHRcdFx0Y2FzZSAnaVRlcm0uYXBwJzpcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuXHRcdFx0Y2FzZSAnQXBwbGVfVGVybWluYWwnOlxuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHR9XG5cdH1cblxuXHRpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnZ0MjIwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSwgc3RyZWFtICYmIHN0cmVhbS5pc1RUWSk7XG5cdHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG5cdHN0ZG91dDogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDEpKSksXG5cdHN0ZGVycjogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDIpKSlcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5kZXN0cm95ID0gdXRpbC5kZXByZWNhdGUoXG5cdCgpID0+IHt9LFxuXHQnSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLidcbik7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWzYsIDIsIDMsIDQsIDUsIDFdO1xuXG50cnkge1xuXHQvLyBPcHRpb25hbCBkZXBlbmRlbmN5IChhcyBpbiwgZG9lc24ndCBuZWVkIHRvIGJlIGluc3RhbGxlZCwgTk9UIGxpa2Ugb3B0aW9uYWxEZXBlbmRlbmNpZXMgaW4gcGFja2FnZS5qc29uKVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5cdGNvbnN0IHN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCdzdXBwb3J0cy1jb2xvcicpO1xuXG5cdGlmIChzdXBwb3J0c0NvbG9yICYmIChzdXBwb3J0c0NvbG9yLnN0ZGVyciB8fCBzdXBwb3J0c0NvbG9yKS5sZXZlbCA+PSAyKSB7XG5cdFx0ZXhwb3J0cy5jb2xvcnMgPSBbXG5cdFx0XHQyMCxcblx0XHRcdDIxLFxuXHRcdFx0MjYsXG5cdFx0XHQyNyxcblx0XHRcdDMyLFxuXHRcdFx0MzMsXG5cdFx0XHQzOCxcblx0XHRcdDM5LFxuXHRcdFx0NDAsXG5cdFx0XHQ0MSxcblx0XHRcdDQyLFxuXHRcdFx0NDMsXG5cdFx0XHQ0NCxcblx0XHRcdDQ1LFxuXHRcdFx0NTYsXG5cdFx0XHQ1Nyxcblx0XHRcdDYyLFxuXHRcdFx0NjMsXG5cdFx0XHQ2OCxcblx0XHRcdDY5LFxuXHRcdFx0NzQsXG5cdFx0XHQ3NSxcblx0XHRcdDc2LFxuXHRcdFx0NzcsXG5cdFx0XHQ3OCxcblx0XHRcdDc5LFxuXHRcdFx0ODAsXG5cdFx0XHQ4MSxcblx0XHRcdDkyLFxuXHRcdFx0OTMsXG5cdFx0XHQ5OCxcblx0XHRcdDk5LFxuXHRcdFx0MTEyLFxuXHRcdFx0MTEzLFxuXHRcdFx0MTI4LFxuXHRcdFx0MTI5LFxuXHRcdFx0MTM0LFxuXHRcdFx0MTM1LFxuXHRcdFx0MTQ4LFxuXHRcdFx0MTQ5LFxuXHRcdFx0MTYwLFxuXHRcdFx0MTYxLFxuXHRcdFx0MTYyLFxuXHRcdFx0MTYzLFxuXHRcdFx0MTY0LFxuXHRcdFx0MTY1LFxuXHRcdFx0MTY2LFxuXHRcdFx0MTY3LFxuXHRcdFx0MTY4LFxuXHRcdFx0MTY5LFxuXHRcdFx0MTcwLFxuXHRcdFx0MTcxLFxuXHRcdFx0MTcyLFxuXHRcdFx0MTczLFxuXHRcdFx0MTc4LFxuXHRcdFx0MTc5LFxuXHRcdFx0MTg0LFxuXHRcdFx0MTg1LFxuXHRcdFx0MTk2LFxuXHRcdFx0MTk3LFxuXHRcdFx0MTk4LFxuXHRcdFx0MTk5LFxuXHRcdFx0MjAwLFxuXHRcdFx0MjAxLFxuXHRcdFx0MjAyLFxuXHRcdFx0MjAzLFxuXHRcdFx0MjA0LFxuXHRcdFx0MjA1LFxuXHRcdFx0MjA2LFxuXHRcdFx0MjA3LFxuXHRcdFx0MjA4LFxuXHRcdFx0MjA5LFxuXHRcdFx0MjE0LFxuXHRcdFx0MjE1LFxuXHRcdFx0MjIwLFxuXHRcdFx0MjIxXG5cdFx0XTtcblx0fVxufSBjYXRjaCAoZXJyb3IpIHtcblx0Ly8gU3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihrZXkgPT4ge1xuXHRyZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG5cdC8vIENhbWVsLWNhc2Vcblx0Y29uc3QgcHJvcCA9IGtleVxuXHRcdC5zdWJzdHJpbmcoNilcblx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdC5yZXBsYWNlKC9fKFthLXpdKS9nLCAoXywgaykgPT4ge1xuXHRcdFx0cmV0dXJuIGsudG9VcHBlckNhc2UoKTtcblx0XHR9KTtcblxuXHQvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcblx0bGV0IHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG5cdGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHtcblx0XHR2YWwgPSB0cnVlO1xuXHR9IGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHtcblx0XHR2YWwgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHR9XG5cblx0b2JqW3Byb3BdID0gdmFsO1xuXHRyZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZW5hYmxlZCB3aGVuIGB0cnVlYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdHJldHVybiAnY29sb3JzJyBpbiBleHBvcnRzLmluc3BlY3RPcHRzID9cblx0XHRCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKSA6XG5cdFx0dHR5LmlzYXR0eShwcm9jZXNzLnN0ZGVyci5mZCk7XG59XG5cbi8qKlxuICogQWRkcyBBTlNJIGNvbG9yIGVzY2FwZSBjb2RlcyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGNvbnN0IHtuYW1lc3BhY2U6IG5hbWUsIHVzZUNvbG9yc30gPSB0aGlzO1xuXG5cdGlmICh1c2VDb2xvcnMpIHtcblx0XHRjb25zdCBjID0gdGhpcy5jb2xvcjtcblx0XHRjb25zdCBjb2xvckNvZGUgPSAnXFx1MDAxQlszJyArIChjIDwgOCA/IGMgOiAnODs1OycgKyBjKTtcblx0XHRjb25zdCBwcmVmaXggPSBgICAke2NvbG9yQ29kZX07MW0ke25hbWV9IFxcdTAwMUJbMG1gO1xuXG5cdFx0YXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuXHRcdGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKSArICdcXHUwMDFCWzBtJyk7XG5cdH0gZWxzZSB7XG5cdFx0YXJnc1swXSA9IGdldERhdGUoKSArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG5cdGlmIChleHBvcnRzLmluc3BlY3RPcHRzLmhpZGVEYXRlKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyAnICc7XG59XG5cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIHN0ZGVyci5cbiAqL1xuXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHRyZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQoLi4uYXJncykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG5cdFx0Ly8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cblx0XHRkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRyZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdChkZWJ1Zykge1xuXHRkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmluc3BlY3RPcHRzKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZGVidWcuaW5zcGVjdE9wdHNba2V5c1tpXV0gPSBleHBvcnRzLmluc3BlY3RPcHRzW2tleXNbaV1dO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0Lm1hcChzdHIgPT4gc3RyLnRyaW0oKSlcblx0XHQuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJU8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmZvcm1hdHRlcnMuTyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cyk7XG59O1xuIiwiLyoqXG4gKiBEZXRlY3QgRWxlY3Ryb24gcmVuZGVyZXIgLyBud2pzIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCBwcm9jZXNzLmJyb3dzZXIgPT09IHRydWUgfHwgcHJvY2Vzcy5fX253anMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZzXzEgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBkZWJ1Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkZWJ1Z1wiKSk7XG5jb25zdCBsb2cgPSBkZWJ1Z18xLmRlZmF1bHQoJ0Brd3NpdGVzL2ZpbGUtZXhpc3RzJyk7XG5mdW5jdGlvbiBjaGVjayhwYXRoLCBpc0ZpbGUsIGlzRGlyZWN0b3J5KSB7XG4gICAgbG9nKGBjaGVja2luZyAlc2AsIHBhdGgpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0YXQgPSBmc18xLnN0YXRTeW5jKHBhdGgpO1xuICAgICAgICBpZiAoc3RhdC5pc0ZpbGUoKSAmJiBpc0ZpbGUpIHtcbiAgICAgICAgICAgIGxvZyhgW09LXSBwYXRoIHJlcHJlc2VudHMgYSBmaWxlYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpICYmIGlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICBsb2coYFtPS10gcGF0aCByZXByZXNlbnRzIGEgZGlyZWN0b3J5YCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsb2coYFtGQUlMXSBwYXRoIHJlcHJlc2VudHMgc29tZXRoaW5nIG90aGVyIHRoYW4gYSBmaWxlIG9yIGRpcmVjdG9yeWApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAgICAgICBsb2coYFtGQUlMXSBwYXRoIGlzIG5vdCBhY2Nlc3NpYmxlOiAlb2AsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxvZyhgW0ZBVEFMXSAlb2AsIGUpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cbi8qKlxuICogU3luY2hyb25vdXMgdmFsaWRhdGlvbiBvZiBhIHBhdGggZXhpc3RpbmcgZWl0aGVyIGFzIGEgZmlsZSBvciBhcyBhIGRpcmVjdG9yeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVja1xuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgT25lIG9yIGJvdGggb2YgdGhlIGV4cG9ydGVkIG51bWVyaWMgY29uc3RhbnRzXG4gKi9cbmZ1bmN0aW9uIGV4aXN0cyhwYXRoLCB0eXBlID0gZXhwb3J0cy5SRUFEQUJMRSkge1xuICAgIHJldHVybiBjaGVjayhwYXRoLCAodHlwZSAmIGV4cG9ydHMuRklMRSkgPiAwLCAodHlwZSAmIGV4cG9ydHMuRk9MREVSKSA+IDApO1xufVxuZXhwb3J0cy5leGlzdHMgPSBleGlzdHM7XG4vKipcbiAqIENvbnN0YW50IHJlcHJlc2VudGluZyBhIGZpbGVcbiAqL1xuZXhwb3J0cy5GSUxFID0gMTtcbi8qKlxuICogQ29uc3RhbnQgcmVwcmVzZW50aW5nIGEgZm9sZGVyXG4gKi9cbmV4cG9ydHMuRk9MREVSID0gMjtcbi8qKlxuICogQ29uc3RhbnQgcmVwcmVzZW50aW5nIGVpdGhlciBhIGZpbGUgb3IgYSBmb2xkZXJcbiAqL1xuZXhwb3J0cy5SRUFEQUJMRSA9IGV4cG9ydHMuRklMRSArIGV4cG9ydHMuRk9MREVSO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5waWNrID0gZXhwb3J0cy5idWZmZXJUb1N0cmluZyA9IGV4cG9ydHMucHJlZml4ZWRBcnJheSA9IGV4cG9ydHMuYXNOdW1iZXIgPSBleHBvcnRzLmFzU3RyaW5nQXJyYXkgPSBleHBvcnRzLmFzQXJyYXkgPSBleHBvcnRzLm9iamVjdFRvU3RyaW5nID0gZXhwb3J0cy5yZW1vdmUgPSBleHBvcnRzLmluY2x1ZGluZyA9IGV4cG9ydHMuYXBwZW5kID0gZXhwb3J0cy5mb2xkZXJFeGlzdHMgPSBleHBvcnRzLmZvckVhY2hMaW5lV2l0aENvbnRlbnQgPSBleHBvcnRzLnRvTGluZXNXaXRoQ29udGVudCA9IGV4cG9ydHMubGFzdCA9IGV4cG9ydHMuZmlyc3QgPSBleHBvcnRzLnNwbGl0T24gPSBleHBvcnRzLmlzVXNlckZ1bmN0aW9uID0gZXhwb3J0cy5hc0Z1bmN0aW9uID0gZXhwb3J0cy5OT09QID0gdm9pZCAwO1xuY29uc3QgZmlsZV9leGlzdHNfMSA9IHJlcXVpcmUoXCJAa3dzaXRlcy9maWxlLWV4aXN0c1wiKTtcbmNvbnN0IE5PT1AgPSAoKSA9PiB7XG59O1xuZXhwb3J0cy5OT09QID0gTk9PUDtcbi8qKlxuICogUmV0dXJucyBlaXRoZXIgdGhlIHNvdXJjZSBhcmd1bWVudCB3aGVuIGl0IGlzIGEgYEZ1bmN0aW9uYCwgb3IgdGhlIGRlZmF1bHRcbiAqIGBOT09QYCBmdW5jdGlvbiBjb25zdGFudFxuICovXG5mdW5jdGlvbiBhc0Z1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2Ygc291cmNlID09PSAnZnVuY3Rpb24nID8gc291cmNlIDogZXhwb3J0cy5OT09QO1xufVxuZXhwb3J0cy5hc0Z1bmN0aW9uID0gYXNGdW5jdGlvbjtcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzdXBwbGllZCBhcmd1bWVudCBpcyBib3RoIGEgZnVuY3Rpb24sIGFuZCBpcyBub3RcbiAqIHRoZSBgTk9PUGAgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGlzVXNlckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiAodHlwZW9mIHNvdXJjZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzb3VyY2UgIT09IGV4cG9ydHMuTk9PUCk7XG59XG5leHBvcnRzLmlzVXNlckZ1bmN0aW9uID0gaXNVc2VyRnVuY3Rpb247XG5mdW5jdGlvbiBzcGxpdE9uKGlucHV0LCBjaGFyKSB7XG4gICAgY29uc3QgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNoYXIpO1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIHJldHVybiBbaW5wdXQsICcnXTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgICAgaW5wdXQuc3Vic3RyKDAsIGluZGV4KSxcbiAgICAgICAgaW5wdXQuc3Vic3RyKGluZGV4ICsgMSksXG4gICAgXTtcbn1cbmV4cG9ydHMuc3BsaXRPbiA9IHNwbGl0T247XG5mdW5jdGlvbiBmaXJzdChpbnB1dCwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiBpc0FycmF5TGlrZShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID4gb2Zmc2V0ID8gaW5wdXRbb2Zmc2V0XSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmZ1bmN0aW9uIGxhc3QoaW5wdXQsIG9mZnNldCA9IDApIHtcbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA+IG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMSAtIG9mZnNldF07XG4gICAgfVxufVxuZXhwb3J0cy5sYXN0ID0gbGFzdDtcbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKGlucHV0KSB7XG4gICAgcmV0dXJuICEhKGlucHV0ICYmIHR5cGVvZiBpbnB1dC5sZW5ndGggPT09ICdudW1iZXInKTtcbn1cbmZ1bmN0aW9uIHRvTGluZXNXaXRoQ29udGVudChpbnB1dCwgdHJpbW1lZCA9IHRydWUsIHNlcGFyYXRvciA9ICdcXG4nKSB7XG4gICAgcmV0dXJuIGlucHV0LnNwbGl0KHNlcGFyYXRvcilcbiAgICAgICAgLnJlZHVjZSgob3V0cHV0LCBsaW5lKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmVDb250ZW50ID0gdHJpbW1lZCA/IGxpbmUudHJpbSgpIDogbGluZTtcbiAgICAgICAgaWYgKGxpbmVDb250ZW50KSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChsaW5lQ29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCBbXSk7XG59XG5leHBvcnRzLnRvTGluZXNXaXRoQ29udGVudCA9IHRvTGluZXNXaXRoQ29udGVudDtcbmZ1bmN0aW9uIGZvckVhY2hMaW5lV2l0aENvbnRlbnQoaW5wdXQsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRvTGluZXNXaXRoQ29udGVudChpbnB1dCwgdHJ1ZSkubWFwKGxpbmUgPT4gY2FsbGJhY2sobGluZSkpO1xufVxuZXhwb3J0cy5mb3JFYWNoTGluZVdpdGhDb250ZW50ID0gZm9yRWFjaExpbmVXaXRoQ29udGVudDtcbmZ1bmN0aW9uIGZvbGRlckV4aXN0cyhwYXRoKSB7XG4gICAgcmV0dXJuIGZpbGVfZXhpc3RzXzEuZXhpc3RzKHBhdGgsIGZpbGVfZXhpc3RzXzEuRk9MREVSKTtcbn1cbmV4cG9ydHMuZm9sZGVyRXhpc3RzID0gZm9sZGVyRXhpc3RzO1xuLyoqXG4gKiBBZGRzIGBpdGVtYCBpbnRvIHRoZSBgdGFyZ2V0YCBgQXJyYXlgIG9yIGBTZXRgIHdoZW4gaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudCBhbmQgcmV0dXJucyB0aGUgYGl0ZW1gLlxuICovXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBpdGVtKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICBpZiAoIXRhcmdldC5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRhcmdldC5hZGQoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xufVxuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG4vKipcbiAqIEFkZHMgYGl0ZW1gIGludG8gdGhlIGB0YXJnZXRgIGBBcnJheWAgd2hlbiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50IGFuZCByZXR1cm5zIHRoZSBgdGFyZ2V0YC5cbiAqL1xuZnVuY3Rpb24gaW5jbHVkaW5nKHRhcmdldCwgaXRlbSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgIXRhcmdldC5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydHMuaW5jbHVkaW5nID0gaW5jbHVkaW5nO1xuZnVuY3Rpb24gcmVtb3ZlKHRhcmdldCwgaXRlbSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YXJnZXQuZGVsZXRlKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbn1cbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5vYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuZnVuY3Rpb24gYXNBcnJheShzb3VyY2UpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShzb3VyY2UpID8gc291cmNlIDogW3NvdXJjZV07XG59XG5leHBvcnRzLmFzQXJyYXkgPSBhc0FycmF5O1xuZnVuY3Rpb24gYXNTdHJpbmdBcnJheShzb3VyY2UpIHtcbiAgICByZXR1cm4gYXNBcnJheShzb3VyY2UpLm1hcChTdHJpbmcpO1xufVxuZXhwb3J0cy5hc1N0cmluZ0FycmF5ID0gYXNTdHJpbmdBcnJheTtcbmZ1bmN0aW9uIGFzTnVtYmVyKHNvdXJjZSwgb25OYU4gPSAwKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvbk5hTjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XG4gICAgcmV0dXJuIGlzTmFOKG51bSkgPyBvbk5hTiA6IG51bTtcbn1cbmV4cG9ydHMuYXNOdW1iZXIgPSBhc051bWJlcjtcbmZ1bmN0aW9uIHByZWZpeGVkQXJyYXkoaW5wdXQsIHByZWZpeCkge1xuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBpbnB1dC5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBvdXRwdXQucHVzaChwcmVmaXgsIGlucHV0W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydHMucHJlZml4ZWRBcnJheSA9IHByZWZpeGVkQXJyYXk7XG5mdW5jdGlvbiBidWZmZXJUb1N0cmluZyhpbnB1dCkge1xuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheShpbnB1dCkgPyBCdWZmZXIuY29uY2F0KGlucHV0KSA6IGlucHV0KS50b1N0cmluZygndXRmLTgnKTtcbn1cbmV4cG9ydHMuYnVmZmVyVG9TdHJpbmcgPSBidWZmZXJUb1N0cmluZztcbi8qKlxuICogR2V0IGEgbmV3IG9iamVjdCBmcm9tIGEgc291cmNlIG9iamVjdCB3aXRoIG9ubHkgdGhlIGxpc3RlZCBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBwaWNrKHNvdXJjZSwgcHJvcGVydGllcykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCAuLi5wcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IHByb3BlcnR5IGluIHNvdXJjZSA/IHsgW3Byb3BlcnR5XTogc291cmNlW3Byb3BlcnR5XSB9IDoge30pKTtcbn1cbmV4cG9ydHMucGljayA9IHBpY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5maWx0ZXJIYXNMZW5ndGggPSBleHBvcnRzLmZpbHRlckZ1bmN0aW9uID0gZXhwb3J0cy5maWx0ZXJQbGFpbk9iamVjdCA9IGV4cG9ydHMuZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSA9IGV4cG9ydHMuZmlsdGVyU3RyaW5nQXJyYXkgPSBleHBvcnRzLmZpbHRlclN0cmluZyA9IGV4cG9ydHMuZmlsdGVyUHJpbWl0aXZlcyA9IGV4cG9ydHMuZmlsdGVyQXJyYXkgPSBleHBvcnRzLmZpbHRlclR5cGUgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZnVuY3Rpb24gZmlsdGVyVHlwZShpbnB1dCwgZmlsdGVyLCBkZWYpIHtcbiAgICBpZiAoZmlsdGVyKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIHJldHVybiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpID8gZGVmIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5maWx0ZXJUeXBlID0gZmlsdGVyVHlwZTtcbmNvbnN0IGZpbHRlckFycmF5ID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpO1xufTtcbmV4cG9ydHMuZmlsdGVyQXJyYXkgPSBmaWx0ZXJBcnJheTtcbmZ1bmN0aW9uIGZpbHRlclByaW1pdGl2ZXMoaW5wdXQsIG9taXQpIHtcbiAgICByZXR1cm4gL251bWJlcnxzdHJpbmd8Ym9vbGVhbi8udGVzdCh0eXBlb2YgaW5wdXQpICYmICghb21pdCB8fCAhb21pdC5pbmNsdWRlcygodHlwZW9mIGlucHV0KSkpO1xufVxuZXhwb3J0cy5maWx0ZXJQcmltaXRpdmVzID0gZmlsdGVyUHJpbWl0aXZlcztcbmNvbnN0IGZpbHRlclN0cmluZyA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nID0gZmlsdGVyU3RyaW5nO1xuY29uc3QgZmlsdGVyU3RyaW5nQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgJiYgaW5wdXQuZXZlcnkoZXhwb3J0cy5maWx0ZXJTdHJpbmcpO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nQXJyYXkgPSBmaWx0ZXJTdHJpbmdBcnJheTtcbmNvbnN0IGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gZXhwb3J0cy5maWx0ZXJTdHJpbmcoaW5wdXQpIHx8IChBcnJheS5pc0FycmF5KGlucHV0KSAmJiBpbnB1dC5ldmVyeShleHBvcnRzLmZpbHRlclN0cmluZykpO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSA9IGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXk7XG5mdW5jdGlvbiBmaWx0ZXJQbGFpbk9iamVjdChpbnB1dCkge1xuICAgIHJldHVybiAhIWlucHV0ICYmIHV0aWxfMS5vYmplY3RUb1N0cmluZyhpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuZXhwb3J0cy5maWx0ZXJQbGFpbk9iamVjdCA9IGZpbHRlclBsYWluT2JqZWN0O1xuZnVuY3Rpb24gZmlsdGVyRnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5maWx0ZXJGdW5jdGlvbiA9IGZpbHRlckZ1bmN0aW9uO1xuY29uc3QgZmlsdGVySGFzTGVuZ3RoID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKGlucHV0ID09IG51bGwgfHwgJ251bWJlcnxib29sZWFufGZ1bmN0aW9uJy5pbmNsdWRlcyh0eXBlb2YgaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGlucHV0Lmxlbmd0aCA9PT0gJ251bWJlcic7XG59O1xuZXhwb3J0cy5maWx0ZXJIYXNMZW5ndGggPSBmaWx0ZXJIYXNMZW5ndGg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcmd1bWVudC1maWx0ZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeGl0Q29kZXMgPSB2b2lkIDA7XG4vKipcbiAqIEtub3duIHByb2Nlc3MgZXhpdCBjb2RlcyB1c2VkIGJ5IHRoZSB0YXNrIHBhcnNlcnMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gZXJyb3JcbiAqIHdhcyBvbmUgdGhleSBjYW4gYXV0b21hdGljYWxseSBoYW5kbGVcbiAqL1xudmFyIEV4aXRDb2RlcztcbihmdW5jdGlvbiAoRXhpdENvZGVzKSB7XG4gICAgRXhpdENvZGVzW0V4aXRDb2Rlc1tcIlNVQ0NFU1NcIl0gPSAwXSA9IFwiU1VDQ0VTU1wiO1xuICAgIEV4aXRDb2Rlc1tFeGl0Q29kZXNbXCJFUlJPUlwiXSA9IDFdID0gXCJFUlJPUlwiO1xuICAgIEV4aXRDb2Rlc1tFeGl0Q29kZXNbXCJVTkNMRUFOXCJdID0gMTI4XSA9IFwiVU5DTEVBTlwiO1xufSkoRXhpdENvZGVzID0gZXhwb3J0cy5FeGl0Q29kZXMgfHwgKGV4cG9ydHMuRXhpdENvZGVzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4aXQtY29kZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdE91dHB1dFN0cmVhbXMgPSB2b2lkIDA7XG5jbGFzcyBHaXRPdXRwdXRTdHJlYW1zIHtcbiAgICBjb25zdHJ1Y3RvcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICB0aGlzLnN0ZE91dCA9IHN0ZE91dDtcbiAgICAgICAgdGhpcy5zdGRFcnIgPSBzdGRFcnI7XG4gICAgfVxuICAgIGFzU3RyaW5ncygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHaXRPdXRwdXRTdHJlYW1zKHRoaXMuc3RkT3V0LnRvU3RyaW5nKCd1dGY4JyksIHRoaXMuc3RkRXJyLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0T3V0cHV0U3RyZWFtcyA9IEdpdE91dHB1dFN0cmVhbXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtb3V0cHV0LXN0cmVhbXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbW90ZUxpbmVQYXJzZXIgPSBleHBvcnRzLkxpbmVQYXJzZXIgPSB2b2lkIDA7XG5jbGFzcyBMaW5lUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihyZWdFeHAsIHVzZU1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICAgIHRoaXMucGFyc2UgPSAobGluZSwgdGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TWF0Y2hlcygpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZWdFeHAuZXZlcnkoKHJlZywgaW5kZXgpID0+IHRoaXMuYWRkTWF0Y2gocmVnLCBpbmRleCwgbGluZShpbmRleCkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZU1hdGNoZXModGFyZ2V0LCB0aGlzLnByZXBhcmVNYXRjaGVzKCkpICE9PSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcmVnRXhwID0gQXJyYXkuaXNBcnJheShyZWdFeHApID8gcmVnRXhwIDogW3JlZ0V4cF07XG4gICAgICAgIGlmICh1c2VNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnVzZU1hdGNoZXMgPSB1c2VNYXRjaGVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB1c2VNYXRjaGVzKHRhcmdldCwgbWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMaW5lUGFyc2VyOnVzZU1hdGNoZXMgbm90IGltcGxlbWVudGVkYCk7XG4gICAgfVxuICAgIHJlc2V0TWF0Y2hlcygpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIHByZXBhcmVNYXRjaGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaGVzO1xuICAgIH1cbiAgICBhZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWQgPSBsaW5lICYmIHJlZy5leGVjKGxpbmUpO1xuICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoTWF0Y2goaW5kZXgsIG1hdGNoZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIW1hdGNoZWQ7XG4gICAgfVxuICAgIHB1c2hNYXRjaChfaW5kZXgsIG1hdGNoZWQpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzLnB1c2goLi4ubWF0Y2hlZC5zbGljZSgxKSk7XG4gICAgfVxufVxuZXhwb3J0cy5MaW5lUGFyc2VyID0gTGluZVBhcnNlcjtcbmNsYXNzIFJlbW90ZUxpbmVQYXJzZXIgZXh0ZW5kcyBMaW5lUGFyc2VyIHtcbiAgICBhZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKSB7XG4gICAgICAgIHJldHVybiAvXnJlbW90ZTpcXHMvLnRlc3QoU3RyaW5nKGxpbmUpKSAmJiBzdXBlci5hZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKTtcbiAgICB9XG4gICAgcHVzaE1hdGNoKGluZGV4LCBtYXRjaGVkKSB7XG4gICAgICAgIGlmIChpbmRleCA+IDAgfHwgbWF0Y2hlZC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzdXBlci5wdXNoTWF0Y2goaW5kZXgsIG1hdGNoZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZW1vdGVMaW5lUGFyc2VyID0gUmVtb3RlTGluZVBhcnNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmUtcGFyc2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVJbnN0YW5jZUNvbmZpZyA9IHZvaWQgMDtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGJpbmFyeTogJ2dpdCcsXG4gICAgbWF4Q29uY3VycmVudFByb2Nlc3NlczogNSxcbiAgICBjb25maWc6IFtdLFxufTtcbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlQ29uZmlnKC4uLm9wdGlvbnMpIHtcbiAgICBjb25zdCBiYXNlRGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBiYXNlRGlyIH0sIGRlZmF1bHRPcHRpb25zKSwgLi4uKG9wdGlvbnMuZmlsdGVyKG8gPT4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8pKSk7XG4gICAgY29uZmlnLmJhc2VEaXIgPSBjb25maWcuYmFzZURpciB8fCBiYXNlRGlyO1xuICAgIHJldHVybiBjb25maWc7XG59XG5leHBvcnRzLmNyZWF0ZUluc3RhbmNlQ29uZmlnID0gY3JlYXRlSW5zdGFuY2VDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGUtZ2l0LW9wdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudCA9IGV4cG9ydHMudHJhaWxpbmdPcHRpb25zQXJndW1lbnQgPSBleHBvcnRzLmdldFRyYWlsaW5nT3B0aW9ucyA9IGV4cG9ydHMuYXBwZW5kVGFza09wdGlvbnMgPSB2b2lkIDA7XG5jb25zdCBhcmd1bWVudF9maWx0ZXJzXzEgPSByZXF1aXJlKFwiLi9hcmd1bWVudC1maWx0ZXJzXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmZ1bmN0aW9uIGFwcGVuZFRhc2tPcHRpb25zKG9wdGlvbnMsIGNvbW1hbmRzID0gW10pIHtcbiAgICBpZiAoIWFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGNvbW1hbmRzLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgIGlmIChhcmd1bWVudF9maWx0ZXJzXzEuZmlsdGVyUHJpbWl0aXZlcyh2YWx1ZSwgWydib29sZWFuJ10pKSB7XG4gICAgICAgICAgICBjb21tYW5kcy5wdXNoKGtleSArICc9JyArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbW1hbmRzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgfSwgY29tbWFuZHMpO1xufVxuZXhwb3J0cy5hcHBlbmRUYXNrT3B0aW9ucyA9IGFwcGVuZFRhc2tPcHRpb25zO1xuZnVuY3Rpb24gZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3MsIGluaXRpYWxQcmltaXRpdmUgPSAwLCBvYmplY3RPbmx5ID0gZmFsc2UpIHtcbiAgICBjb25zdCBjb21tYW5kID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGluaXRpYWxQcmltaXRpdmUgPCAwID8gYXJncy5sZW5ndGggOiBpbml0aWFsUHJpbWl0aXZlOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgaWYgKCdzdHJpbmd8bnVtYmVyJy5pbmNsdWRlcyh0eXBlb2YgYXJnc1tpXSkpIHtcbiAgICAgICAgICAgIGNvbW1hbmQucHVzaChTdHJpbmcoYXJnc1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZFRhc2tPcHRpb25zKHRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3MpLCBjb21tYW5kKTtcbiAgICBpZiAoIW9iamVjdE9ubHkpIHtcbiAgICAgICAgY29tbWFuZC5wdXNoKC4uLnRyYWlsaW5nQXJyYXlBcmd1bWVudChhcmdzKSk7XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kO1xufVxuZXhwb3J0cy5nZXRUcmFpbGluZ09wdGlvbnMgPSBnZXRUcmFpbGluZ09wdGlvbnM7XG5mdW5jdGlvbiB0cmFpbGluZ0FycmF5QXJndW1lbnQoYXJncykge1xuICAgIGNvbnN0IGhhc1RyYWlsaW5nQ2FsbGJhY2sgPSB0eXBlb2YgdXRpbF8xLmxhc3QoYXJncykgPT09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJUeXBlKHV0aWxfMS5sYXN0KGFyZ3MsIGhhc1RyYWlsaW5nQ2FsbGJhY2sgPyAxIDogMCksIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJBcnJheSwgW10pO1xufVxuLyoqXG4gKiBHaXZlbiBhbnkgbnVtYmVyIG9mIGFyZ3VtZW50cywgcmV0dXJucyB0aGUgdHJhaWxpbmcgb3B0aW9ucyBhcmd1bWVudCwgaWdub3JpbmcgYSB0cmFpbGluZyBmdW5jdGlvbiBhcmd1bWVudFxuICogaWYgdGhlcmUgaXMgb25lLiBXaGVuIG5vdCBmb3VuZCwgdGhlIHJldHVybiB2YWx1ZSBpcyBudWxsLlxuICovXG5mdW5jdGlvbiB0cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmdzKSB7XG4gICAgY29uc3QgaGFzVHJhaWxpbmdDYWxsYmFjayA9IGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJGdW5jdGlvbih1dGlsXzEubGFzdChhcmdzKSk7XG4gICAgcmV0dXJuIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJUeXBlKHV0aWxfMS5sYXN0KGFyZ3MsIGhhc1RyYWlsaW5nQ2FsbGJhY2sgPyAxIDogMCksIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJQbGFpbk9iamVjdCk7XG59XG5leHBvcnRzLnRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50ID0gdHJhaWxpbmdPcHRpb25zQXJndW1lbnQ7XG4vKipcbiAqIFJldHVybnMgZWl0aGVyIHRoZSBzb3VyY2UgYXJndW1lbnQgd2hlbiBpdCBpcyBhIGBGdW5jdGlvbmAsIG9yIHRoZSBkZWZhdWx0XG4gKiBgTk9PUGAgZnVuY3Rpb24gY29uc3RhbnRcbiAqL1xuZnVuY3Rpb24gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3MsIGluY2x1ZGVOb29wID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdXRpbF8xLmFzRnVuY3Rpb24odXRpbF8xLmxhc3QoYXJncykpO1xuICAgIHJldHVybiBpbmNsdWRlTm9vcCB8fCB1dGlsXzEuaXNVc2VyRnVuY3Rpb24oY2FsbGJhY2spID8gY2FsbGJhY2sgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudCA9IHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stb3B0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VTdHJpbmdSZXNwb25zZSA9IGV4cG9ydHMuY2FsbFRhc2tQYXJzZXIgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZnVuY3Rpb24gY2FsbFRhc2tQYXJzZXIocGFyc2VyLCBzdHJlYW1zKSB7XG4gICAgcmV0dXJuIHBhcnNlcihzdHJlYW1zLnN0ZE91dCwgc3RyZWFtcy5zdGRFcnIpO1xufVxuZXhwb3J0cy5jYWxsVGFza1BhcnNlciA9IGNhbGxUYXNrUGFyc2VyO1xuZnVuY3Rpb24gcGFyc2VTdHJpbmdSZXNwb25zZShyZXN1bHQsIHBhcnNlcnMsIC4uLnRleHRzKSB7XG4gICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGluZXMgPSB1dGlsXzEudG9MaW5lc1dpdGhDb250ZW50KHRleHQpLCBpID0gMCwgbWF4ID0gbGluZXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSAob2Zmc2V0ID0gMCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgoaSArIG9mZnNldCkgPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVzW2kgKyBvZmZzZXRdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhcnNlcnMuc29tZSgoeyBwYXJzZSB9KSA9PiBwYXJzZShsaW5lLCByZXN1bHQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlU3RyaW5nUmVzcG9uc2UgPSBwYXJzZVN0cmluZ1Jlc3BvbnNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFzay1wYXJzZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hcmd1bWVudC1maWx0ZXJzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9leGl0LWNvZGVzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9naXQtb3V0cHV0LXN0cmVhbXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2xpbmUtcGFyc2VyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zaW1wbGUtZ2l0LW9wdGlvbnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3Rhc2stb3B0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGFzay1wYXJzZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNoZWNrSXNCYXJlUmVwb1Rhc2sgPSBleHBvcnRzLmNoZWNrSXNSZXBvUm9vdFRhc2sgPSBleHBvcnRzLmNoZWNrSXNSZXBvVGFzayA9IGV4cG9ydHMuQ2hlY2tSZXBvQWN0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgQ2hlY2tSZXBvQWN0aW9ucztcbihmdW5jdGlvbiAoQ2hlY2tSZXBvQWN0aW9ucykge1xuICAgIENoZWNrUmVwb0FjdGlvbnNbXCJCQVJFXCJdID0gXCJiYXJlXCI7XG4gICAgQ2hlY2tSZXBvQWN0aW9uc1tcIklOX1RSRUVcIl0gPSBcInRyZWVcIjtcbiAgICBDaGVja1JlcG9BY3Rpb25zW1wiSVNfUkVQT19ST09UXCJdID0gXCJyb290XCI7XG59KShDaGVja1JlcG9BY3Rpb25zID0gZXhwb3J0cy5DaGVja1JlcG9BY3Rpb25zIHx8IChleHBvcnRzLkNoZWNrUmVwb0FjdGlvbnMgPSB7fSkpO1xuY29uc3Qgb25FcnJvciA9ICh7IGV4aXRDb2RlIH0sIGVycm9yLCBkb25lLCBmYWlsKSA9PiB7XG4gICAgaWYgKGV4aXRDb2RlID09PSB1dGlsc18xLkV4aXRDb2Rlcy5VTkNMRUFOICYmIGlzTm90UmVwb01lc3NhZ2UoZXJyb3IpKSB7XG4gICAgICAgIHJldHVybiBkb25lKEJ1ZmZlci5mcm9tKCdmYWxzZScpKTtcbiAgICB9XG4gICAgZmFpbChlcnJvcik7XG59O1xuY29uc3QgcGFyc2VyID0gKHRleHQpID0+IHtcbiAgICByZXR1cm4gdGV4dC50cmltKCkgPT09ICd0cnVlJztcbn07XG5mdW5jdGlvbiBjaGVja0lzUmVwb1Rhc2soYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSBDaGVja1JlcG9BY3Rpb25zLkJBUkU6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tJc0JhcmVSZXBvVGFzaygpO1xuICAgICAgICBjYXNlIENoZWNrUmVwb0FjdGlvbnMuSVNfUkVQT19ST09UOlxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrSXNSZXBvUm9vdFRhc2soKTtcbiAgICB9XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jldi1wYXJzZScsICctLWlzLWluc2lkZS13b3JrLXRyZWUnXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBvbkVycm9yLFxuICAgICAgICBwYXJzZXIsXG4gICAgfTtcbn1cbmV4cG9ydHMuY2hlY2tJc1JlcG9UYXNrID0gY2hlY2tJc1JlcG9UYXNrO1xuZnVuY3Rpb24gY2hlY2tJc1JlcG9Sb290VGFzaygpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmV2LXBhcnNlJywgJy0tZ2l0LWRpciddO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIG9uRXJyb3IsXG4gICAgICAgIHBhcnNlcihwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gL15cXC4oZ2l0KT8kLy50ZXN0KHBhdGgudHJpbSgpKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lzUmVwb1Jvb3RUYXNrID0gY2hlY2tJc1JlcG9Sb290VGFzaztcbmZ1bmN0aW9uIGNoZWNrSXNCYXJlUmVwb1Rhc2soKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jldi1wYXJzZScsICctLWlzLWJhcmUtcmVwb3NpdG9yeSddO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIG9uRXJyb3IsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lzQmFyZVJlcG9UYXNrID0gY2hlY2tJc0JhcmVSZXBvVGFzaztcbmZ1bmN0aW9uIGlzTm90UmVwb01lc3NhZ2UoZXJyb3IpIHtcbiAgICByZXR1cm4gLyhOb3QgYSBnaXQgcmVwb3NpdG9yeXxLZWluIEdpdC1SZXBvc2l0b3J5KS9pLnRlc3QoU3RyaW5nKGVycm9yKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGVjay1pcy1yZXBvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbGVhblN1bW1hcnlQYXJzZXIgPSBleHBvcnRzLkNsZWFuUmVzcG9uc2UgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ2xlYW5SZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IoZHJ5UnVuKSB7XG4gICAgICAgIHRoaXMuZHJ5UnVuID0gZHJ5UnVuO1xuICAgICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb2xkZXJzID0gW107XG4gICAgfVxufVxuZXhwb3J0cy5DbGVhblJlc3BvbnNlID0gQ2xlYW5SZXNwb25zZTtcbmNvbnN0IHJlbW92YWxSZWdleHAgPSAvXlthLXpdK1xccyovaTtcbmNvbnN0IGRyeVJ1blJlbW92YWxSZWdleHAgPSAvXlthLXpdK1xccytbYS16XStcXHMqL2k7XG5jb25zdCBpc0ZvbGRlclJlZ2V4cCA9IC9cXC8kLztcbmZ1bmN0aW9uIGNsZWFuU3VtbWFyeVBhcnNlcihkcnlSdW4sIHRleHQpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gbmV3IENsZWFuUmVzcG9uc2UoZHJ5UnVuKTtcbiAgICBjb25zdCByZWdleHAgPSBkcnlSdW4gPyBkcnlSdW5SZW1vdmFsUmVnZXhwIDogcmVtb3ZhbFJlZ2V4cDtcbiAgICB1dGlsc18xLnRvTGluZXNXaXRoQ29udGVudCh0ZXh0KS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVkID0gbGluZS5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuICAgICAgICBzdW1tYXJ5LnBhdGhzLnB1c2gocmVtb3ZlZCk7XG4gICAgICAgIChpc0ZvbGRlclJlZ2V4cC50ZXN0KHJlbW92ZWQpID8gc3VtbWFyeS5mb2xkZXJzIDogc3VtbWFyeS5maWxlcykucHVzaChyZW1vdmVkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VtbWFyeTtcbn1cbmV4cG9ydHMuY2xlYW5TdW1tYXJ5UGFyc2VyID0gY2xlYW5TdW1tYXJ5UGFyc2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xlYW5TdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0VtcHR5VGFzayA9IGV4cG9ydHMuaXNCdWZmZXJUYXNrID0gZXhwb3J0cy5zdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrID0gZXhwb3J0cy5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrID0gZXhwb3J0cy5jb25maWd1cmF0aW9uRXJyb3JUYXNrID0gZXhwb3J0cy5hZGhvY0V4ZWNUYXNrID0gZXhwb3J0cy5FTVBUWV9DT01NQU5EUyA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy90YXNrLWNvbmZpZ3VyYXRpb24tZXJyb3JcIik7XG5leHBvcnRzLkVNUFRZX0NPTU1BTkRTID0gW107XG5mdW5jdGlvbiBhZGhvY0V4ZWNUYXNrKHBhcnNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBleHBvcnRzLkVNUFRZX0NPTU1BTkRTLFxuICAgICAgICBmb3JtYXQ6ICdlbXB0eScsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5hZGhvY0V4ZWNUYXNrID0gYWRob2NFeGVjVGFzaztcbmZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogZXhwb3J0cy5FTVBUWV9DT01NQU5EUyxcbiAgICAgICAgZm9ybWF0OiAnZW1wdHknLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gbmV3IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xLlRhc2tDb25maWd1cmF0aW9uRXJyb3IoZXJyb3IpIDogZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5jb25maWd1cmF0aW9uRXJyb3JUYXNrID0gY29uZmlndXJhdGlvbkVycm9yVGFzaztcbmZ1bmN0aW9uIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRyaW1tZWQgPSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJpbW1lZCA/IFN0cmluZyh0ZXh0KS50cmltKCkgOiB0ZXh0O1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2sgPSBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrO1xuZnVuY3Rpb24gc3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzayhjb21tYW5kcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICdidWZmZXInLFxuICAgICAgICBwYXJzZXIoYnVmZmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnN0cmFpZ2h0VGhyb3VnaEJ1ZmZlclRhc2sgPSBzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrO1xuZnVuY3Rpb24gaXNCdWZmZXJUYXNrKHRhc2spIHtcbiAgICByZXR1cm4gdGFzay5mb3JtYXQgPT09ICdidWZmZXInO1xufVxuZXhwb3J0cy5pc0J1ZmZlclRhc2sgPSBpc0J1ZmZlclRhc2s7XG5mdW5jdGlvbiBpc0VtcHR5VGFzayh0YXNrKSB7XG4gICAgcmV0dXJuIHRhc2suZm9ybWF0ID09PSAnZW1wdHknIHx8ICF0YXNrLmNvbW1hbmRzLmxlbmd0aDtcbn1cbmV4cG9ydHMuaXNFbXB0eVRhc2sgPSBpc0VtcHR5VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQ2xlYW5PcHRpb25zQXJyYXkgPSBleHBvcnRzLmNsZWFuVGFzayA9IGV4cG9ydHMuY2xlYW5XaXRoT3B0aW9uc1Rhc2sgPSBleHBvcnRzLkNsZWFuT3B0aW9ucyA9IGV4cG9ydHMuQ09ORklHX0VSUk9SX1VOS05PV05fT1BUSU9OID0gZXhwb3J0cy5DT05GSUdfRVJST1JfTU9ERV9SRVFVSVJFRCA9IGV4cG9ydHMuQ09ORklHX0VSUk9SX0lOVEVSQUNUSVZFX01PREUgPSB2b2lkIDA7XG5jb25zdCBDbGVhblN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQ2xlYW5TdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5leHBvcnRzLkNPTkZJR19FUlJPUl9JTlRFUkFDVElWRV9NT0RFID0gJ0dpdCBjbGVhbiBpbnRlcmFjdGl2ZSBtb2RlIGlzIG5vdCBzdXBwb3J0ZWQnO1xuZXhwb3J0cy5DT05GSUdfRVJST1JfTU9ERV9SRVFVSVJFRCA9ICdHaXQgY2xlYW4gbW9kZSBwYXJhbWV0ZXIgKFwiblwiIG9yIFwiZlwiKSBpcyByZXF1aXJlZCc7XG5leHBvcnRzLkNPTkZJR19FUlJPUl9VTktOT1dOX09QVElPTiA9ICdHaXQgY2xlYW4gdW5rbm93biBvcHRpb24gZm91bmQgaW46ICc7XG4vKipcbiAqIEFsbCBzdXBwb3J0ZWQgb3B0aW9uIHN3aXRjaGVzIGF2YWlsYWJsZSBmb3IgdXNlIGluIGEgYGdpdC5jbGVhbmAgb3BlcmF0aW9uXG4gKi9cbnZhciBDbGVhbk9wdGlvbnM7XG4oZnVuY3Rpb24gKENsZWFuT3B0aW9ucykge1xuICAgIENsZWFuT3B0aW9uc1tcIkRSWV9SVU5cIl0gPSBcIm5cIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJGT1JDRVwiXSA9IFwiZlwiO1xuICAgIENsZWFuT3B0aW9uc1tcIklHTk9SRURfSU5DTFVERURcIl0gPSBcInhcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJJR05PUkVEX09OTFlcIl0gPSBcIlhcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJFWENMVURJTkdcIl0gPSBcImVcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJRVUlFVFwiXSA9IFwicVwiO1xuICAgIENsZWFuT3B0aW9uc1tcIlJFQ1VSU0lWRVwiXSA9IFwiZFwiO1xufSkoQ2xlYW5PcHRpb25zID0gZXhwb3J0cy5DbGVhbk9wdGlvbnMgfHwgKGV4cG9ydHMuQ2xlYW5PcHRpb25zID0ge30pKTtcbmNvbnN0IENsZWFuT3B0aW9uVmFsdWVzID0gbmV3IFNldChbJ2knLCAuLi51dGlsc18xLmFzU3RyaW5nQXJyYXkoT2JqZWN0LnZhbHVlcyhDbGVhbk9wdGlvbnMpKV0pO1xuZnVuY3Rpb24gY2xlYW5XaXRoT3B0aW9uc1Rhc2sobW9kZSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IHsgY2xlYW5Nb2RlLCBvcHRpb25zLCB2YWxpZCB9ID0gZ2V0Q2xlYW5PcHRpb25zKG1vZGUpO1xuICAgIGlmICghY2xlYW5Nb2RlKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9NT0RFX1JFUVVJUkVEKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZC5vcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9VTktOT1dOX09QVElPTiArIEpTT04uc3RyaW5naWZ5KG1vZGUpKTtcbiAgICB9XG4gICAgb3B0aW9ucy5wdXNoKC4uLmN1c3RvbUFyZ3MpO1xuICAgIGlmIChvcHRpb25zLnNvbWUoaXNJbnRlcmFjdGl2ZU1vZGUpKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9JTlRFUkFDVElWRV9NT0RFKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZWFuVGFzayhjbGVhbk1vZGUsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jbGVhbldpdGhPcHRpb25zVGFzayA9IGNsZWFuV2l0aE9wdGlvbnNUYXNrO1xuZnVuY3Rpb24gY2xlYW5UYXNrKG1vZGUsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnY2xlYW4nLCBgLSR7bW9kZX1gLCAuLi5jdXN0b21BcmdzXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIENsZWFuU3VtbWFyeV8xLmNsZWFuU3VtbWFyeVBhcnNlcihtb2RlID09PSBDbGVhbk9wdGlvbnMuRFJZX1JVTiwgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5jbGVhblRhc2sgPSBjbGVhblRhc2s7XG5mdW5jdGlvbiBpc0NsZWFuT3B0aW9uc0FycmF5KGlucHV0KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpICYmIGlucHV0LmV2ZXJ5KHRlc3QgPT4gQ2xlYW5PcHRpb25WYWx1ZXMuaGFzKHRlc3QpKTtcbn1cbmV4cG9ydHMuaXNDbGVhbk9wdGlvbnNBcnJheSA9IGlzQ2xlYW5PcHRpb25zQXJyYXk7XG5mdW5jdGlvbiBnZXRDbGVhbk9wdGlvbnMoaW5wdXQpIHtcbiAgICBsZXQgY2xlYW5Nb2RlO1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHZhbGlkID0geyBjbGVhbk1vZGU6IGZhbHNlLCBvcHRpb25zOiB0cnVlIH07XG4gICAgaW5wdXQucmVwbGFjZSgvW15hLXpdaS9nLCAnJykuc3BsaXQoJycpLmZvckVhY2goY2hhciA9PiB7XG4gICAgICAgIGlmIChpc0NsZWFuTW9kZShjaGFyKSkge1xuICAgICAgICAgICAgY2xlYW5Nb2RlID0gY2hhcjtcbiAgICAgICAgICAgIHZhbGlkLmNsZWFuTW9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZC5vcHRpb25zID0gdmFsaWQub3B0aW9ucyAmJiBpc0tub3duT3B0aW9uKG9wdGlvbnNbb3B0aW9ucy5sZW5ndGhdID0gKGAtJHtjaGFyfWApKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFuTW9kZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgdmFsaWQsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzQ2xlYW5Nb2RlKGNsZWFuTW9kZSkge1xuICAgIHJldHVybiBjbGVhbk1vZGUgPT09IENsZWFuT3B0aW9ucy5GT1JDRSB8fCBjbGVhbk1vZGUgPT09IENsZWFuT3B0aW9ucy5EUllfUlVOO1xufVxuZnVuY3Rpb24gaXNLbm93bk9wdGlvbihvcHRpb24pIHtcbiAgICByZXR1cm4gL14tW2Etel0kL2kudGVzdChvcHRpb24pICYmIENsZWFuT3B0aW9uVmFsdWVzLmhhcyhvcHRpb24uY2hhckF0KDEpKTtcbn1cbmZ1bmN0aW9uIGlzSW50ZXJhY3RpdmVNb2RlKG9wdGlvbikge1xuICAgIGlmICgvXi1bXlxcLV0vLnRlc3Qob3B0aW9uKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmluZGV4T2YoJ2knKSA+IDA7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb24gPT09ICctLWludGVyYWN0aXZlJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb25maWdHZXRQYXJzZXIgPSBleHBvcnRzLmNvbmZpZ0xpc3RQYXJzZXIgPSBleHBvcnRzLkNvbmZpZ0xpc3QgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ29uZmlnTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBnZXQgYWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2FsbCkge1xuICAgICAgICAgICAgdGhpcy5fYWxsID0gdGhpcy5maWxlcy5yZWR1Y2UoKGFsbCwgZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFsbCwgdGhpcy52YWx1ZXNbZmlsZV0pO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGw7XG4gICAgfVxuICAgIGFkZEZpbGUoZmlsZSkge1xuICAgICAgICBpZiAoIShmaWxlIGluIHRoaXMudmFsdWVzKSkge1xuICAgICAgICAgICAgY29uc3QgbGF0ZXN0ID0gdXRpbHNfMS5sYXN0KHRoaXMuZmlsZXMpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbZmlsZV0gPSBsYXRlc3QgPyBPYmplY3QuY3JlYXRlKHRoaXMudmFsdWVzW2xhdGVzdF0pIDoge307XG4gICAgICAgICAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW2ZpbGVdO1xuICAgIH1cbiAgICBhZGRWYWx1ZShmaWxlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuYWRkRmlsZShmaWxlKTtcbiAgICAgICAgaWYgKCF2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlc1trZXldKSkge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IFt2YWx1ZXNba2V5XSwgdmFsdWVdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FsbCA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnRzLkNvbmZpZ0xpc3QgPSBDb25maWdMaXN0O1xuZnVuY3Rpb24gY29uZmlnTGlzdFBhcnNlcih0ZXh0KSB7XG4gICAgY29uc3QgY29uZmlnID0gbmV3IENvbmZpZ0xpc3QoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29uZmlnUGFyc2VyKHRleHQpKSB7XG4gICAgICAgIGNvbmZpZy5hZGRWYWx1ZShpdGVtLmZpbGUsIFN0cmluZyhpdGVtLmtleSksIGl0ZW0udmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlnO1xufVxuZXhwb3J0cy5jb25maWdMaXN0UGFyc2VyID0gY29uZmlnTGlzdFBhcnNlcjtcbmZ1bmN0aW9uIGNvbmZpZ0dldFBhcnNlcih0ZXh0LCBrZXkpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IHNjb3BlcyA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29uZmlnUGFyc2VyKHRleHQsIGtleSkpIHtcbiAgICAgICAgaWYgKGl0ZW0ua2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlID0gaXRlbS52YWx1ZSk7XG4gICAgICAgIGlmICghc2NvcGVzLmhhcyhpdGVtLmZpbGUpKSB7XG4gICAgICAgICAgICBzY29wZXMuc2V0KGl0ZW0uZmlsZSwgW10pO1xuICAgICAgICB9XG4gICAgICAgIHNjb3Blcy5nZXQoaXRlbS5maWxlKS5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5LFxuICAgICAgICBwYXRoczogQXJyYXkuZnJvbShzY29wZXMua2V5cygpKSxcbiAgICAgICAgc2NvcGVzLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgdmFsdWVzXG4gICAgfTtcbn1cbmV4cG9ydHMuY29uZmlnR2V0UGFyc2VyID0gY29uZmlnR2V0UGFyc2VyO1xuZnVuY3Rpb24gY29uZmlnRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICByZXR1cm4gZmlsZVBhdGgucmVwbGFjZSgvXihmaWxlKTovLCAnJyk7XG59XG5mdW5jdGlvbiogY29uZmlnUGFyc2VyKHRleHQsIHJlcXVlc3RlZEtleSA9IG51bGwpIHtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcMCcpO1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBsaW5lcy5sZW5ndGggLSAxOyBpIDwgbWF4Oykge1xuICAgICAgICBjb25zdCBmaWxlID0gY29uZmlnRmlsZVBhdGgobGluZXNbaSsrXSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxpbmVzW2krK107XG4gICAgICAgIGxldCBrZXkgPSByZXF1ZXN0ZWRLZXk7XG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnXFxuJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSB1dGlsc18xLnNwbGl0T24odmFsdWUsICdcXG4nKTtcbiAgICAgICAgICAgIGtleSA9IGxpbmVbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGxpbmVbMV07XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgeyBmaWxlLCBrZXksIHZhbHVlIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29uZmlnTGlzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0Q29uZmlnU2NvcGUgPSB2b2lkIDA7XG5jb25zdCBDb25maWdMaXN0XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0NvbmZpZ0xpc3RcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIEdpdENvbmZpZ1Njb3BlO1xuKGZ1bmN0aW9uIChHaXRDb25maWdTY29wZSkge1xuICAgIEdpdENvbmZpZ1Njb3BlW1wic3lzdGVtXCJdID0gXCJzeXN0ZW1cIjtcbiAgICBHaXRDb25maWdTY29wZVtcImdsb2JhbFwiXSA9IFwiZ2xvYmFsXCI7XG4gICAgR2l0Q29uZmlnU2NvcGVbXCJsb2NhbFwiXSA9IFwibG9jYWxcIjtcbiAgICBHaXRDb25maWdTY29wZVtcIndvcmt0cmVlXCJdID0gXCJ3b3JrdHJlZVwiO1xufSkoR2l0Q29uZmlnU2NvcGUgPSBleHBvcnRzLkdpdENvbmZpZ1Njb3BlIHx8IChleHBvcnRzLkdpdENvbmZpZ1Njb3BlID0ge30pKTtcbmZ1bmN0aW9uIGFzQ29uZmlnU2NvcGUoc2NvcGUsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBzY29wZSA9PT0gJ3N0cmluZycgJiYgR2l0Q29uZmlnU2NvcGUuaGFzT3duUHJvcGVydHkoc2NvcGUpKSB7XG4gICAgICAgIHJldHVybiBzY29wZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xufVxuZnVuY3Rpb24gYWRkQ29uZmlnVGFzayhrZXksIHZhbHVlLCBhcHBlbmQsIHNjb3BlKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2NvbmZpZycsIGAtLSR7c2NvcGV9YF07XG4gICAgaWYgKGFwcGVuZCkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKCctLWFkZCcpO1xuICAgIH1cbiAgICBjb21tYW5kcy5wdXNoKGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRDb25maWdUYXNrKGtleSwgc2NvcGUpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnY29uZmlnJywgJy0tbnVsbCcsICctLXNob3ctb3JpZ2luJywgJy0tZ2V0LWFsbCcsIGtleV07XG4gICAgaWYgKHNjb3BlKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCBgLS0ke3Njb3BlfWApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbmZpZ0xpc3RfMS5jb25maWdHZXRQYXJzZXIodGV4dCwga2V5KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBsaXN0Q29uZmlnVGFzayhzY29wZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjb25maWcnLCAnLS1saXN0JywgJy0tc2hvdy1vcmlnaW4nLCAnLS1udWxsJ107XG4gICAgaWYgKHNjb3BlKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goYC0tJHtzY29wZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBDb25maWdMaXN0XzEuY29uZmlnTGlzdFBhcnNlcih0ZXh0KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZnVuY3Rpb24gZGVmYXVsdF8xKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZENvbmZpZyhrZXksIHZhbHVlLCAuLi5yZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhhZGRDb25maWdUYXNrKGtleSwgdmFsdWUsIHJlc3RbMF0gPT09IHRydWUsIGFzQ29uZmlnU2NvcGUocmVzdFsxXSwgR2l0Q29uZmlnU2NvcGUubG9jYWwpKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENvbmZpZyhrZXksIHNjb3BlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhnZXRDb25maWdUYXNrKGtleSwgYXNDb25maWdTY29wZShzY29wZSwgdW5kZWZpbmVkKSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgICAgICB9LFxuICAgICAgICBsaXN0Q29uZmlnKC4uLnJlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGxpc3RDb25maWdUYXNrKGFzQ29uZmlnU2NvcGUocmVzdFswXSwgdW5kZWZpbmVkKSksIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFJlc2V0TW9kZSA9IGV4cG9ydHMucmVzZXRUYXNrID0gZXhwb3J0cy5SZXNldE1vZGUgPSB2b2lkIDA7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrXCIpO1xudmFyIFJlc2V0TW9kZTtcbihmdW5jdGlvbiAoUmVzZXRNb2RlKSB7XG4gICAgUmVzZXRNb2RlW1wiTUlYRURcIl0gPSBcIm1peGVkXCI7XG4gICAgUmVzZXRNb2RlW1wiU09GVFwiXSA9IFwic29mdFwiO1xuICAgIFJlc2V0TW9kZVtcIkhBUkRcIl0gPSBcImhhcmRcIjtcbiAgICBSZXNldE1vZGVbXCJNRVJHRVwiXSA9IFwibWVyZ2VcIjtcbiAgICBSZXNldE1vZGVbXCJLRUVQXCJdID0gXCJrZWVwXCI7XG59KShSZXNldE1vZGUgPSBleHBvcnRzLlJlc2V0TW9kZSB8fCAoZXhwb3J0cy5SZXNldE1vZGUgPSB7fSkpO1xuY29uc3QgUmVzZXRNb2RlcyA9IEFycmF5LmZyb20oT2JqZWN0LnZhbHVlcyhSZXNldE1vZGUpKTtcbmZ1bmN0aW9uIHJlc2V0VGFzayhtb2RlLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jlc2V0J107XG4gICAgaWYgKGlzVmFsaWRSZXNldE1vZGUobW9kZSkpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChgLS0ke21vZGV9YCk7XG4gICAgfVxuICAgIGNvbW1hbmRzLnB1c2goLi4uY3VzdG9tQXJncyk7XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKTtcbn1cbmV4cG9ydHMucmVzZXRUYXNrID0gcmVzZXRUYXNrO1xuZnVuY3Rpb24gZ2V0UmVzZXRNb2RlKG1vZGUpIHtcbiAgICBpZiAoaXNWYWxpZFJlc2V0TW9kZShtb2RlKSkge1xuICAgICAgICByZXR1cm4gbW9kZTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlb2YgbW9kZSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgcmV0dXJuIFJlc2V0TW9kZS5TT0ZUO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnRzLmdldFJlc2V0TW9kZSA9IGdldFJlc2V0TW9kZTtcbmZ1bmN0aW9uIGlzVmFsaWRSZXNldE1vZGUobW9kZSkge1xuICAgIHJldHVybiBSZXNldE1vZGVzLmluY2x1ZGVzKG1vZGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzZXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBnaXRfY29uc3RydWN0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvZ2l0LWNvbnN0cnVjdC1lcnJvclwiKTtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1lcnJvclwiKTtcbmNvbnN0IGdpdF9wbHVnaW5fZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtcGx1Z2luLWVycm9yXCIpO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvZ2l0LXJlc3BvbnNlLWVycm9yXCIpO1xuY29uc3QgdGFza19jb25maWd1cmF0aW9uX2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvdGFzay1jb25maWd1cmF0aW9uLWVycm9yXCIpO1xuY29uc3QgY2hlY2tfaXNfcmVwb18xID0gcmVxdWlyZShcIi4vdGFza3MvY2hlY2staXMtcmVwb1wiKTtcbmNvbnN0IGNsZWFuXzEgPSByZXF1aXJlKFwiLi90YXNrcy9jbGVhblwiKTtcbmNvbnN0IGNvbmZpZ18xID0gcmVxdWlyZShcIi4vdGFza3MvY29uZmlnXCIpO1xuY29uc3QgcmVzZXRfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL3Jlc2V0XCIpO1xuY29uc3QgYXBpID0ge1xuICAgIENoZWNrUmVwb0FjdGlvbnM6IGNoZWNrX2lzX3JlcG9fMS5DaGVja1JlcG9BY3Rpb25zLFxuICAgIENsZWFuT3B0aW9uczogY2xlYW5fMS5DbGVhbk9wdGlvbnMsXG4gICAgR2l0Q29uZmlnU2NvcGU6IGNvbmZpZ18xLkdpdENvbmZpZ1Njb3BlLFxuICAgIEdpdENvbnN0cnVjdEVycm9yOiBnaXRfY29uc3RydWN0X2Vycm9yXzEuR2l0Q29uc3RydWN0RXJyb3IsXG4gICAgR2l0RXJyb3I6IGdpdF9lcnJvcl8xLkdpdEVycm9yLFxuICAgIEdpdFBsdWdpbkVycm9yOiBnaXRfcGx1Z2luX2Vycm9yXzEuR2l0UGx1Z2luRXJyb3IsXG4gICAgR2l0UmVzcG9uc2VFcnJvcjogZ2l0X3Jlc3BvbnNlX2Vycm9yXzEuR2l0UmVzcG9uc2VFcnJvcixcbiAgICBSZXNldE1vZGU6IHJlc2V0XzEuUmVzZXRNb2RlLFxuICAgIFRhc2tDb25maWd1cmF0aW9uRXJyb3I6IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xLlRhc2tDb25maWd1cmF0aW9uRXJyb3IsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gYXBpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb21tYW5kQ29uZmlnUHJlZml4aW5nUGx1Z2luID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIGNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW4oY29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IHByZWZpeCA9IHV0aWxzXzEucHJlZml4ZWRBcnJheShjb25maWd1cmF0aW9uLCAnLWMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnc3Bhd24uYXJncycsXG4gICAgICAgIGFjdGlvbihkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZWZpeCwgLi4uZGF0YV07XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuY29tbWFuZENvbmZpZ1ByZWZpeGluZ1BsdWdpbiA9IGNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tYW5kLWNvbmZpZy1wcmVmaXhpbmctcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lcnJvckRldGVjdGlvblBsdWdpbiA9IGV4cG9ydHMuZXJyb3JEZXRlY3Rpb25IYW5kbGVyID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1lcnJvclwiKTtcbmZ1bmN0aW9uIGlzVGFza0Vycm9yKHJlc3VsdCkge1xuICAgIHJldHVybiAhIShyZXN1bHQuZXhpdENvZGUgJiYgcmVzdWx0LnN0ZEVyci5sZW5ndGgpO1xufVxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKHJlc3VsdCkge1xuICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFsuLi5yZXN1bHQuc3RkT3V0LCAuLi5yZXN1bHQuc3RkRXJyXSk7XG59XG5mdW5jdGlvbiBlcnJvckRldGVjdGlvbkhhbmRsZXIob3ZlcndyaXRlID0gZmFsc2UsIGlzRXJyb3IgPSBpc1Rhc2tFcnJvciwgZXJyb3JNZXNzYWdlID0gZ2V0RXJyb3JNZXNzYWdlKSB7XG4gICAgcmV0dXJuIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmICgoIW92ZXJ3cml0ZSAmJiBlcnJvcikgfHwgIWlzRXJyb3IocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2UocmVzdWx0KTtcbiAgICB9O1xufVxuZXhwb3J0cy5lcnJvckRldGVjdGlvbkhhbmRsZXIgPSBlcnJvckRldGVjdGlvbkhhbmRsZXI7XG5mdW5jdGlvbiBlcnJvckRldGVjdGlvblBsdWdpbihjb25maWcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAndGFzay5lcnJvcicsXG4gICAgICAgIGFjdGlvbihkYXRhLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGNvbmZpZyhkYXRhLmVycm9yLCB7XG4gICAgICAgICAgICAgICAgc3RkRXJyOiBjb250ZXh0LnN0ZEVycixcbiAgICAgICAgICAgICAgICBzdGRPdXQ6IGNvbnRleHQuc3RkT3V0LFxuICAgICAgICAgICAgICAgIGV4aXRDb2RlOiBjb250ZXh0LmV4aXRDb2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IG5ldyBnaXRfZXJyb3JfMS5HaXRFcnJvcih1bmRlZmluZWQsIGVycm9yLnRvU3RyaW5nKCd1dGYtOCcpKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5lcnJvckRldGVjdGlvblBsdWdpbiA9IGVycm9yRGV0ZWN0aW9uUGx1Z2luO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3ItZGV0ZWN0aW9uLnBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGx1Z2luU3RvcmUgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgUGx1Z2luU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGFkZChwbHVnaW4pIHtcbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtdO1xuICAgICAgICB1dGlsc18xLmFzQXJyYXkocGx1Z2luKS5mb3JFYWNoKHBsdWdpbiA9PiBwbHVnaW4gJiYgdGhpcy5wbHVnaW5zLmFkZCh1dGlsc18xLmFwcGVuZChwbHVnaW5zLCBwbHVnaW4pKSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBwbHVnaW5zLmZvckVhY2gocGx1Z2luID0+IHRoaXMucGx1Z2lucy5kZWxldGUocGx1Z2luKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGV4ZWModHlwZSwgZGF0YSwgY29udGV4dCkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gZGF0YTtcbiAgICAgICAgY29uc3QgY29udGV4dHVhbCA9IE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShjb250ZXh0KSk7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMucGx1Z2lucykge1xuICAgICAgICAgICAgaWYgKHBsdWdpbi50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gcGx1Z2luLmFjdGlvbihvdXRwdXQsIGNvbnRleHR1YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5QbHVnaW5TdG9yZSA9IFBsdWdpblN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGx1Z2luLXN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9ncmVzc01vbml0b3JQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gcHJvZ3Jlc3NNb25pdG9yUGx1Z2luKHByb2dyZXNzKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3NDb21tYW5kID0gJy0tcHJvZ3Jlc3MnO1xuICAgIGNvbnN0IHByb2dyZXNzTWV0aG9kcyA9IFsnY2hlY2tvdXQnLCAnY2xvbmUnLCAnZmV0Y2gnLCAncHVsbCcsICdwdXNoJ107XG4gICAgY29uc3Qgb25Qcm9ncmVzcyA9IHtcbiAgICAgICAgdHlwZTogJ3NwYXduLmFmdGVyJyxcbiAgICAgICAgYWN0aW9uKF9kYXRhLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQuY29tbWFuZHMuaW5jbHVkZXMocHJvZ3Jlc3NDb21tYW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IGNvbnRleHQuc3Bhd25lZC5zdGRlcnIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAvXihbXFxzXFxTXSs/KTpcXHMqKFxcZCspJSBcXCgoXFxkKylcXC8oXFxkKylcXCkvLmV4ZWMoY2h1bmsudG9TdHJpbmcoJ3V0ZjgnKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3Moe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGNvbnRleHQubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBzdGFnZTogcHJvZ3Jlc3NFdmVudFN0YWdlKG1lc3NhZ2VbMV0pLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdXRpbHNfMS5hc051bWJlcihtZXNzYWdlWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkOiB1dGlsc18xLmFzTnVtYmVyKG1lc3NhZ2VbM10pLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdXRpbHNfMS5hc051bWJlcihtZXNzYWdlWzRdKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbkFyZ3MgPSB7XG4gICAgICAgIHR5cGU6ICdzcGF3bi5hcmdzJyxcbiAgICAgICAgYWN0aW9uKGFyZ3MsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICghcHJvZ3Jlc3NNZXRob2RzLmluY2x1ZGVzKGNvbnRleHQubWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzXzEuaW5jbHVkaW5nKGFyZ3MsIHByb2dyZXNzQ29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBbb25BcmdzLCBvblByb2dyZXNzXTtcbn1cbmV4cG9ydHMucHJvZ3Jlc3NNb25pdG9yUGx1Z2luID0gcHJvZ3Jlc3NNb25pdG9yUGx1Z2luO1xuZnVuY3Rpb24gcHJvZ3Jlc3NFdmVudFN0YWdlKGlucHV0KSB7XG4gICAgcmV0dXJuIFN0cmluZyhpbnB1dC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJywgMSkpIHx8ICd1bmtub3duJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb2dyZXNzLW1vbml0b3ItcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2ltcGxlLWdpdC1wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNwYXduT3B0aW9uc1BsdWdpbiA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBzcGF3bk9wdGlvbnNQbHVnaW4oc3Bhd25PcHRpb25zKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHV0aWxzXzEucGljayhzcGF3bk9wdGlvbnMsIFsndWlkJywgJ2dpZCddKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnc3Bhd24ub3B0aW9ucycsXG4gICAgICAgIGFjdGlvbihkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwgZGF0YSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuc3Bhd25PcHRpb25zUGx1Z2luID0gc3Bhd25PcHRpb25zUGx1Z2luO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Bhd24tb3B0aW9ucy1wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRpbWVvdXRQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCBnaXRfcGx1Z2luX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1wbHVnaW4tZXJyb3JcIik7XG5mdW5jdGlvbiB0aW1lb3V0UGx1Z2luKHsgYmxvY2sgfSkge1xuICAgIGlmIChibG9jayA+IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdzcGF3bi5hZnRlcicsXG4gICAgICAgICAgICBhY3Rpb24oX2RhdGEsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIGxldCB0aW1lb3V0O1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChraWxsLCBibG9jayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRleHQuc3Bhd25lZC5zdGRvdXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vZmYoJ2RhdGEnLCB3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gY29udGV4dC5zcGF3bmVkLnN0ZGVycikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9mZignZGF0YScsIHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNwYXduZWQub2ZmKCdleGl0Jywgc3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Bhd25lZC5vZmYoJ2Nsb3NlJywgc3RvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGtpbGwoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5raWxsKG5ldyBnaXRfcGx1Z2luX2Vycm9yXzEuR2l0UGx1Z2luRXJyb3IodW5kZWZpbmVkLCAndGltZW91dCcsIGBibG9jayB0aW1lb3V0IHJlYWNoZWRgKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IGNvbnRleHQuc3Bhd25lZC5zdGRvdXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbignZGF0YScsIHdhaXQpO1xuICAgICAgICAgICAgICAgIChfYiA9IGNvbnRleHQuc3Bhd25lZC5zdGRlcnIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vbignZGF0YScsIHdhaXQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Bhd25lZC5vbignZXhpdCcsIHN0b3ApO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Bhd25lZC5vbignY2xvc2UnLCBzdG9wKTtcbiAgICAgICAgICAgICAgICB3YWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy50aW1lb3V0UGx1Z2luID0gdGltZW91dFBsdWdpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbW91dC1wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tYW5kLWNvbmZpZy1wcmVmaXhpbmctcGx1Z2luXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lcnJvci1kZXRlY3Rpb24ucGx1Z2luXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9wbHVnaW4tc3RvcmVcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3Byb2dyZXNzLW1vbml0b3ItcGx1Z2luXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zaW1wbGUtZ2l0LXBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc3Bhd24tb3B0aW9ucy1wbHVnaW5cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RpbW91dC1wbHVnaW5cIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdExvZ2dlciA9IGV4cG9ydHMuY3JlYXRlTG9nZ2VyID0gdm9pZCAwO1xuY29uc3QgZGVidWdfMSA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmRlYnVnXzEuZGVmYXVsdC5mb3JtYXR0ZXJzLkwgPSAodmFsdWUpID0+IFN0cmluZyh1dGlsc18xLmZpbHRlckhhc0xlbmd0aCh2YWx1ZSkgPyB2YWx1ZS5sZW5ndGggOiAnLScpO1xuZGVidWdfMS5kZWZhdWx0LmZvcm1hdHRlcnMuQiA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygndXRmOCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXRpbHNfMS5vYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59O1xuZnVuY3Rpb24gY3JlYXRlTG9nKCkge1xuICAgIHJldHVybiBkZWJ1Z18xLmRlZmF1bHQoJ3NpbXBsZS1naXQnKTtcbn1cbmZ1bmN0aW9uIHByZWZpeGVkTG9nZ2VyKHRvLCBwcmVmaXgsIGZvcndhcmQpIHtcbiAgICBpZiAoIXByZWZpeCB8fCAhU3RyaW5nKHByZWZpeCkucmVwbGFjZSgvXFxzKi8sICcnKSkge1xuICAgICAgICByZXR1cm4gIWZvcndhcmQgPyB0byA6IChtZXNzYWdlLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICB0byhtZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIGZvcndhcmQobWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAobWVzc2FnZSwgLi4uYXJncykgPT4ge1xuICAgICAgICB0byhgJXMgJHttZXNzYWdlfWAsIHByZWZpeCwgLi4uYXJncyk7XG4gICAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgICAgICBmb3J3YXJkKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoaWxkTG9nZ2VyTmFtZShuYW1lLCBjaGlsZERlYnVnZ2VyLCB7IG5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlIH0pIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZE5hbWVzcGFjZSA9IGNoaWxkRGVidWdnZXIgJiYgY2hpbGREZWJ1Z2dlci5uYW1lc3BhY2UgfHwgJyc7XG4gICAgaWYgKGNoaWxkTmFtZXNwYWNlLnN0YXJ0c1dpdGgocGFyZW50TmFtZXNwYWNlKSkge1xuICAgICAgICByZXR1cm4gY2hpbGROYW1lc3BhY2Uuc3Vic3RyKHBhcmVudE5hbWVzcGFjZS5sZW5ndGggKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkTmFtZXNwYWNlIHx8IHBhcmVudE5hbWVzcGFjZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihsYWJlbCwgdmVyYm9zZSwgaW5pdGlhbFN0ZXAsIGluZm9EZWJ1Z2dlciA9IGNyZWF0ZUxvZygpKSB7XG4gICAgY29uc3QgbGFiZWxQcmVmaXggPSBsYWJlbCAmJiBgWyR7bGFiZWx9XWAgfHwgJyc7XG4gICAgY29uc3Qgc3Bhd25lZCA9IFtdO1xuICAgIGNvbnN0IGRlYnVnRGVidWdnZXIgPSAodHlwZW9mIHZlcmJvc2UgPT09ICdzdHJpbmcnKSA/IGluZm9EZWJ1Z2dlci5leHRlbmQodmVyYm9zZSkgOiB2ZXJib3NlO1xuICAgIGNvbnN0IGtleSA9IGNoaWxkTG9nZ2VyTmFtZSh1dGlsc18xLmZpbHRlclR5cGUodmVyYm9zZSwgdXRpbHNfMS5maWx0ZXJTdHJpbmcpLCBkZWJ1Z0RlYnVnZ2VyLCBpbmZvRGVidWdnZXIpO1xuICAgIHJldHVybiBzdGVwKGluaXRpYWxTdGVwKTtcbiAgICBmdW5jdGlvbiBzaWJsaW5nKG5hbWUsIGluaXRpYWwpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEuYXBwZW5kKHNwYXduZWQsIGNyZWF0ZUxvZ2dlcihsYWJlbCwga2V5LnJlcGxhY2UoL15bXjpdKy8sIG5hbWUpLCBpbml0aWFsLCBpbmZvRGVidWdnZXIpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RlcChwaGFzZSkge1xuICAgICAgICBjb25zdCBzdGVwUHJlZml4ID0gcGhhc2UgJiYgYFske3BoYXNlfV1gIHx8ICcnO1xuICAgICAgICBjb25zdCBkZWJ1ZyA9IGRlYnVnRGVidWdnZXIgJiYgcHJlZml4ZWRMb2dnZXIoZGVidWdEZWJ1Z2dlciwgc3RlcFByZWZpeCkgfHwgdXRpbHNfMS5OT09QO1xuICAgICAgICBjb25zdCBpbmZvID0gcHJlZml4ZWRMb2dnZXIoaW5mb0RlYnVnZ2VyLCBgJHtsYWJlbFByZWZpeH0gJHtzdGVwUHJlZml4fWAsIGRlYnVnKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVidWdEZWJ1Z2dlciA/IGRlYnVnIDogaW5mbywge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBzaWJsaW5nLFxuICAgICAgICAgICAgaW5mbyxcbiAgICAgICAgICAgIHN0ZXAsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuY3JlYXRlTG9nZ2VyID0gY3JlYXRlTG9nZ2VyO1xuLyoqXG4gKiBUaGUgYEdpdExvZ2dlcmAgaXMgdXNlZCBieSB0aGUgbWFpbiBgU2ltcGxlR2l0YCBydW5uZXIgdG8gaGFuZGxlIGxvZ2dpbmdcbiAqIGFueSB3YXJuaW5ncyBvciBlcnJvcnMuXG4gKi9cbmNsYXNzIEdpdExvZ2dlciB7XG4gICAgY29uc3RydWN0b3IoX291dCA9IGNyZWF0ZUxvZygpKSB7XG4gICAgICAgIHRoaXMuX291dCA9IF9vdXQ7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBwcmVmaXhlZExvZ2dlcihfb3V0LCAnW0VSUk9SXScpO1xuICAgICAgICB0aGlzLndhcm4gPSBwcmVmaXhlZExvZ2dlcihfb3V0LCAnW1dBUk5dJyk7XG4gICAgfVxuICAgIHNpbGVudChzaWxlbmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHNpbGVuY2UgIT09IHRoaXMuX291dC5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBuYW1lc3BhY2UgfSA9IHRoaXMuX291dDtcbiAgICAgICAgY29uc3QgZW52ID0gKHByb2Nlc3MuZW52LkRFQlVHIHx8ICcnKS5zcGxpdCgnLCcpLmZpbHRlcihzID0+ICEhcyk7XG4gICAgICAgIGNvbnN0IGhhc09uID0gZW52LmluY2x1ZGVzKG5hbWVzcGFjZSk7XG4gICAgICAgIGNvbnN0IGhhc09mZiA9IGVudi5pbmNsdWRlcyhgLSR7bmFtZXNwYWNlfWApO1xuICAgICAgICAvLyBlbmFibGluZyB0aGUgbG9nXG4gICAgICAgIGlmICghc2lsZW5jZSkge1xuICAgICAgICAgICAgaWYgKGhhc09mZikge1xuICAgICAgICAgICAgICAgIHV0aWxzXzEucmVtb3ZlKGVudiwgYC0ke25hbWVzcGFjZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVudi5wdXNoKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzT24pIHtcbiAgICAgICAgICAgICAgICB1dGlsc18xLnJlbW92ZShlbnYsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnYucHVzaChgLSR7bmFtZXNwYWNlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnXzEuZGVmYXVsdC5lbmFibGUoZW52LmpvaW4oJywnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRMb2dnZXIgPSBHaXRMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtbG9nZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UYXNrc1BlbmRpbmdRdWV1ZSA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtZXJyb3JcIik7XG5jb25zdCBnaXRfbG9nZ2VyXzEgPSByZXF1aXJlKFwiLi4vZ2l0LWxvZ2dlclwiKTtcbmNsYXNzIFRhc2tzUGVuZGluZ1F1ZXVlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2dMYWJlbCA9ICdHaXRFeGVjdXRvcicpIHtcbiAgICAgICAgdGhpcy5sb2dMYWJlbCA9IGxvZ0xhYmVsO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgd2l0aFByb2dyZXNzKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlLmdldCh0YXNrKTtcbiAgICB9XG4gICAgY3JlYXRlUHJvZ3Jlc3ModGFzaykge1xuICAgICAgICBjb25zdCBuYW1lID0gVGFza3NQZW5kaW5nUXVldWUuZ2V0TmFtZSh0YXNrLmNvbW1hbmRzWzBdKTtcbiAgICAgICAgY29uc3QgbG9nZ2VyID0gZ2l0X2xvZ2dlcl8xLmNyZWF0ZUxvZ2dlcih0aGlzLmxvZ0xhYmVsLCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhc2ssXG4gICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwdXNoKHRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmNyZWF0ZVByb2dyZXNzKHRhc2spO1xuICAgICAgICBwcm9ncmVzcy5sb2dnZXIoJ0FkZGluZyB0YXNrIHRvIHRoZSBxdWV1ZSwgY29tbWFuZHMgPSAlbycsIHRhc2suY29tbWFuZHMpO1xuICAgICAgICB0aGlzLl9xdWV1ZS5zZXQodGFzaywgcHJvZ3Jlc3MpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfVxuICAgIGZhdGFsKGVycikge1xuICAgICAgICBmb3IgKGNvbnN0IFt0YXNrLCB7IGxvZ2dlciB9XSBvZiBBcnJheS5mcm9tKHRoaXMuX3F1ZXVlLmVudHJpZXMoKSkpIHtcbiAgICAgICAgICAgIGlmICh0YXNrID09PSBlcnIudGFzaykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBGYWlsZWQgJW9gLCBlcnIpO1xuICAgICAgICAgICAgICAgIGxvZ2dlcihgRmF0YWwgZXhjZXB0aW9uLCBhbnkgYXMteWV0IHVuLXN0YXJ0ZWQgdGFza3MgcnVuIHRocm91Z2ggdGhpcyBleGVjdXRvciB3aWxsIG5vdCBiZSBhdHRlbXB0ZWRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBBIGZhdGFsIGV4Y2VwdGlvbiBvY2N1cnJlZCBpbiBhIHByZXZpb3VzIHRhc2ssIHRoZSBxdWV1ZSBoYXMgYmVlbiBwdXJnZWQ6ICVvYCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcXVldWUuc2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBRdWV1ZSBzaXplIHNob3VsZCBiZSB6ZXJvIGFmdGVyIGZhdGFsOiAke3RoaXMuX3F1ZXVlLnNpemV9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcGxldGUodGFzaykge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMud2l0aFByb2dyZXNzKHRhc2spO1xuICAgICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhdHRlbXB0KHRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLndpdGhQcm9ncmVzcyh0YXNrKTtcbiAgICAgICAgaWYgKCFwcm9ncmVzcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IGdpdF9lcnJvcl8xLkdpdEVycm9yKHVuZGVmaW5lZCwgJ1Rhc2tzUGVuZGluZ1F1ZXVlOiBhdHRlbXB0IGNhbGxlZCBmb3IgYW4gdW5rbm93biB0YXNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvZ3Jlc3MubG9nZ2VyKCdTdGFydGluZyB0YXNrJyk7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9XG4gICAgc3RhdGljIGdldE5hbWUobmFtZSA9ICdlbXB0eScpIHtcbiAgICAgICAgcmV0dXJuIGB0YXNrOiR7bmFtZX06JHsrK1Rhc2tzUGVuZGluZ1F1ZXVlLmNvdW50ZXJ9YDtcbiAgICB9XG59XG5leHBvcnRzLlRhc2tzUGVuZGluZ1F1ZXVlID0gVGFza3NQZW5kaW5nUXVldWU7XG5UYXNrc1BlbmRpbmdRdWV1ZS5jb3VudGVyID0gMDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2tzLXBlbmRpbmctcXVldWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0RXhlY3V0b3JDaGFpbiA9IHZvaWQgMDtcbmNvbnN0IGNoaWxkX3Byb2Nlc3NfMSA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1lcnJvclwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuLi90YXNrcy90YXNrXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHRhc2tzX3BlbmRpbmdfcXVldWVfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzLXBlbmRpbmctcXVldWVcIik7XG5jbGFzcyBHaXRFeGVjdXRvckNoYWluIHtcbiAgICBjb25zdHJ1Y3RvcihfZXhlY3V0b3IsIF9zY2hlZHVsZXIsIF9wbHVnaW5zKSB7XG4gICAgICAgIHRoaXMuX2V4ZWN1dG9yID0gX2V4ZWN1dG9yO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSBfc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLl9wbHVnaW5zID0gX3BsdWdpbnM7XG4gICAgICAgIHRoaXMuX2NoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gbmV3IHRhc2tzX3BlbmRpbmdfcXVldWVfMS5UYXNrc1BlbmRpbmdRdWV1ZSgpO1xuICAgIH1cbiAgICBnZXQgYmluYXJ5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0b3IuYmluYXJ5O1xuICAgIH1cbiAgICBnZXQgY3dkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3dkIHx8IHRoaXMuX2V4ZWN1dG9yLmN3ZDtcbiAgICB9XG4gICAgc2V0IGN3ZChjd2QpIHtcbiAgICAgICAgdGhpcy5fY3dkID0gY3dkO1xuICAgIH1cbiAgICBnZXQgZW52KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0b3IuZW52O1xuICAgIH1cbiAgICBnZXQgb3V0cHV0SGFuZGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dG9yLm91dHB1dEhhbmRsZXI7XG4gICAgfVxuICAgIGNoYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHVzaCh0YXNrKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlLnB1c2godGFzayk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFpbiA9IHRoaXMuX2NoYWluLnRoZW4oKCkgPT4gdGhpcy5hdHRlbXB0VGFzayh0YXNrKSk7XG4gICAgfVxuICAgIGF0dGVtcHRUYXNrKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG9uU2NoZWR1bGVDb21wbGV0ZSA9IHlpZWxkIHRoaXMuX3NjaGVkdWxlci5uZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBvblF1ZXVlQ29tcGxldGUgPSAoKSA9PiB0aGlzLl9xdWV1ZS5jb21wbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsb2dnZXIgfSA9IHRoaXMuX3F1ZXVlLmF0dGVtcHQodGFzayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkICh0YXNrXzEuaXNFbXB0eVRhc2sodGFzaylcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmF0dGVtcHRFbXB0eVRhc2sodGFzaywgbG9nZ2VyKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuYXR0ZW1wdFJlbW90ZVRhc2sodGFzaywgbG9nZ2VyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRocm93IHRoaXMub25GYXRhbEV4Y2VwdGlvbih0YXNrLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIG9uUXVldWVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIG9uU2NoZWR1bGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25GYXRhbEV4Y2VwdGlvbih0YXNrLCBlKSB7XG4gICAgICAgIGNvbnN0IGdpdEVycm9yID0gKGUgaW5zdGFuY2VvZiBnaXRfZXJyb3JfMS5HaXRFcnJvcikgPyBPYmplY3QuYXNzaWduKGUsIHsgdGFzayB9KSA6IG5ldyBnaXRfZXJyb3JfMS5HaXRFcnJvcih0YXNrLCBlICYmIFN0cmluZyhlKSk7XG4gICAgICAgIHRoaXMuX2NoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3F1ZXVlLmZhdGFsKGdpdEVycm9yKTtcbiAgICAgICAgcmV0dXJuIGdpdEVycm9yO1xuICAgIH1cbiAgICBhdHRlbXB0UmVtb3RlVGFzayh0YXNrLCBsb2dnZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLl9wbHVnaW5zLmV4ZWMoJ3NwYXduLmFyZ3MnLCBbLi4udGFzay5jb21tYW5kc10sIHBsdWdpbkNvbnRleHQodGFzaywgdGFzay5jb21tYW5kcykpO1xuICAgICAgICAgICAgY29uc3QgcmF3ID0geWllbGQgdGhpcy5naXRSZXNwb25zZSh0YXNrLCB0aGlzLmJpbmFyeSwgYXJncywgdGhpcy5vdXRwdXRIYW5kbGVyLCBsb2dnZXIuc3RlcCgnU1BBV04nKSk7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXRTdHJlYW1zID0geWllbGQgdGhpcy5oYW5kbGVUYXNrRGF0YSh0YXNrLCBhcmdzLCByYXcsIGxvZ2dlci5zdGVwKCdIQU5ETEUnKSk7XG4gICAgICAgICAgICBsb2dnZXIoYHBhc3NpbmcgcmVzcG9uc2UgdG8gdGFzaydzIHBhcnNlciBhcyBhICVzYCwgdGFzay5mb3JtYXQpO1xuICAgICAgICAgICAgaWYgKHRhc2tfMS5pc0J1ZmZlclRhc2sodGFzaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5jYWxsVGFza1BhcnNlcih0YXNrLnBhcnNlciwgb3V0cHV0U3RyZWFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5jYWxsVGFza1BhcnNlcih0YXNrLnBhcnNlciwgb3V0cHV0U3RyZWFtcy5hc1N0cmluZ3MoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhdHRlbXB0RW1wdHlUYXNrKHRhc2ssIGxvZ2dlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbG9nZ2VyKGBlbXB0eSB0YXNrIGJ5cGFzc2luZyBjaGlsZCBwcm9jZXNzIHRvIGNhbGwgdG8gdGFzaydzIHBhcnNlcmApO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2sucGFyc2VyKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlVGFza0RhdGEodGFzaywgYXJncywgcmVzdWx0LCBsb2dnZXIpIHtcbiAgICAgICAgY29uc3QgeyBleGl0Q29kZSwgcmVqZWN0aW9uLCBzdGRPdXQsIHN0ZEVyciB9ID0gcmVzdWx0O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKGRvbmUsIGZhaWwpID0+IHtcbiAgICAgICAgICAgIGxvZ2dlcihgUHJlcGFyaW5nIHRvIGhhbmRsZSBwcm9jZXNzIHJlc3BvbnNlIGV4aXRDb2RlPSVkIHN0ZE91dD1gLCBleGl0Q29kZSk7XG4gICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSB0aGlzLl9wbHVnaW5zLmV4ZWMoJ3Rhc2suZXJyb3InLCB7IGVycm9yOiByZWplY3Rpb24gfSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwbHVnaW5Db250ZXh0KHRhc2ssIGFyZ3MpKSwgcmVzdWx0KSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgdGFzay5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYGV4aXRDb2RlPSVzIGhhbmRsaW5nIHdpdGggY3VzdG9tIGVycm9yIGhhbmRsZXJgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5vbkVycm9yKHJlc3VsdCwgZXJyb3IsIChuZXdTdGRPdXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYGN1c3RvbSBlcnJvciBoYW5kbGVyIHRyZWF0ZWQgYXMgc3VjY2Vzc2ApO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIoYGN1c3RvbSBlcnJvciByZXR1cm5lZCBhICVzYCwgdXRpbHNfMS5vYmplY3RUb1N0cmluZyhuZXdTdGRPdXQpKTtcbiAgICAgICAgICAgICAgICAgICAgZG9uZShuZXcgdXRpbHNfMS5HaXRPdXRwdXRTdHJlYW1zKEFycmF5LmlzQXJyYXkobmV3U3RkT3V0KSA/IEJ1ZmZlci5jb25jYXQobmV3U3RkT3V0KSA6IG5ld1N0ZE91dCwgQnVmZmVyLmNvbmNhdChzdGRFcnIpKSk7XG4gICAgICAgICAgICAgICAgfSwgZmFpbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgaGFuZGxpbmcgYXMgZXJyb3I6IGV4aXRDb2RlPSVzIHN0ZEVycj0lcyByZWplY3Rpb249JW9gLCBleGl0Q29kZSwgc3RkRXJyLmxlbmd0aCwgcmVqZWN0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dnZXIuaW5mbyhgcmV0cmlldmluZyB0YXNrIG91dHB1dCBjb21wbGV0ZWApO1xuICAgICAgICAgICAgZG9uZShuZXcgdXRpbHNfMS5HaXRPdXRwdXRTdHJlYW1zKEJ1ZmZlci5jb25jYXQoc3RkT3V0KSwgQnVmZmVyLmNvbmNhdChzdGRFcnIpKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnaXRSZXNwb25zZSh0YXNrLCBjb21tYW5kLCBhcmdzLCBvdXRwdXRIYW5kbGVyLCBsb2dnZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dExvZ2dlciA9IGxvZ2dlci5zaWJsaW5nKCdvdXRwdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNwYXduT3B0aW9ucyA9IHRoaXMuX3BsdWdpbnMuZXhlYygnc3Bhd24ub3B0aW9ucycsIHtcbiAgICAgICAgICAgICAgICBjd2Q6IHRoaXMuY3dkLFxuICAgICAgICAgICAgICAgIGVudjogdGhpcy5lbnYsXG4gICAgICAgICAgICAgICAgd2luZG93c0hpZGU6IHRydWUsXG4gICAgICAgICAgICB9LCBwbHVnaW5Db250ZXh0KHRhc2ssIHRhc2suY29tbWFuZHMpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoZG9uZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZE91dCA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZEVyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBhdHRlbXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgcmVqZWN0aW9uO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGF0dGVtcHRDbG9zZShleGl0Q29kZSwgZXZlbnQgPSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3Npbmcgd2hlbiB0aGVyZSBpcyBjb250ZW50LCB0ZXJtaW5hdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRlZCB8fCBzdGRFcnIubGVuZ3RoIHx8IHN0ZE91dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBleGl0Q29kZT0lcyBldmVudD0lcyByZWplY3Rpb249JW9gLCBleGl0Q29kZSwgZXZlbnQsIHJlamVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGRPdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RkRXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCBhdHRlbXB0IGF0IGNsb3NpbmcgYnV0IG5vIGNvbnRlbnQgeWV0LCB3YWl0IGJyaWVmbHkgZm9yIHRoZSBjbG9zZS9leGl0IHRoYXQgbWF5IGZvbGxvd1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWF0dGVtcHRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXR0ZW1wdENsb3NlKGV4aXRDb2RlLCAnZGVmZXJyZWQnKSwgNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKCdyZWNlaXZlZCAlcyBldmVudCBiZWZvcmUgY29udGVudCBvbiBzdGRPdXQvc3RkRXJyJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGAlcyAlb2AsIGNvbW1hbmQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGxvZ2dlcignJU8nLCBzcGF3bk9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYXduZWQgPSBjaGlsZF9wcm9jZXNzXzEuc3Bhd24oY29tbWFuZCwgYXJncywgc3Bhd25PcHRpb25zKTtcbiAgICAgICAgICAgICAgICBzcGF3bmVkLnN0ZG91dC5vbignZGF0YScsIG9uRGF0YVJlY2VpdmVkKHN0ZE91dCwgJ3N0ZE91dCcsIGxvZ2dlciwgb3V0cHV0TG9nZ2VyLnN0ZXAoJ3N0ZE91dCcpKSk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5zdGRlcnIub24oJ2RhdGEnLCBvbkRhdGFSZWNlaXZlZChzdGRFcnIsICdzdGRFcnInLCBsb2dnZXIsIG91dHB1dExvZ2dlci5zdGVwKCdzdGRFcnInKSkpO1xuICAgICAgICAgICAgICAgIHNwYXduZWQub24oJ2Vycm9yJywgb25FcnJvclJlY2VpdmVkKHN0ZEVyciwgbG9nZ2VyKSk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5vbignY2xvc2UnLCAoY29kZSkgPT4gYXR0ZW1wdENsb3NlKGNvZGUsICdjbG9zZScpKTtcbiAgICAgICAgICAgICAgICBzcGF3bmVkLm9uKCdleGl0JywgKGNvZGUpID0+IGF0dGVtcHRDbG9zZShjb2RlLCAnZXhpdCcpKTtcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0SGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIoYFBhc3NpbmcgY2hpbGQgcHJvY2VzcyBzdGRPdXQvc3RkRXJyIHRvIGN1c3RvbSBvdXRwdXRIYW5kbGVyYCk7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dEhhbmRsZXIoY29tbWFuZCwgc3Bhd25lZC5zdGRvdXQsIHNwYXduZWQuc3RkZXJyLCBbLi4uYXJnc10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wbHVnaW5zLmV4ZWMoJ3NwYXduLmFmdGVyJywgdW5kZWZpbmVkLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBsdWdpbkNvbnRleHQodGFzaywgYXJncykpLCB7IHNwYXduZWQsIGtpbGwocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Bhd25lZC5raWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Rpb24gPSByZWFzb247XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGF3bmVkLmtpbGwoJ1NJR0lOVCcpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkdpdEV4ZWN1dG9yQ2hhaW4gPSBHaXRFeGVjdXRvckNoYWluO1xuZnVuY3Rpb24gcGx1Z2luQ29udGV4dCh0YXNrLCBjb21tYW5kcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIG1ldGhvZDogdXRpbHNfMS5maXJzdCh0YXNrLmNvbW1hbmRzKSB8fCAnJyxcbiAgICAgICAgY29tbWFuZHMsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9uRXJyb3JSZWNlaXZlZCh0YXJnZXQsIGxvZ2dlcikge1xuICAgIHJldHVybiAoZXJyKSA9PiB7XG4gICAgICAgIGxvZ2dlcihgW0VSUk9SXSBjaGlsZCBwcm9jZXNzIGV4Y2VwdGlvbiAlb2AsIGVycik7XG4gICAgICAgIHRhcmdldC5wdXNoKEJ1ZmZlci5mcm9tKFN0cmluZyhlcnIuc3RhY2spLCAnYXNjaWknKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9uRGF0YVJlY2VpdmVkKHRhcmdldCwgbmFtZSwgbG9nZ2VyLCBvdXRwdXQpIHtcbiAgICByZXR1cm4gKGJ1ZmZlcikgPT4ge1xuICAgICAgICBsb2dnZXIoYCVzIHJlY2VpdmVkICVMIGJ5dGVzYCwgbmFtZSwgYnVmZmVyKTtcbiAgICAgICAgb3V0cHV0KGAlQmAsIGJ1ZmZlcik7XG4gICAgICAgIHRhcmdldC5wdXNoKGJ1ZmZlcik7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1leGVjdXRvci1jaGFpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0RXhlY3V0b3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXhlY3V0b3JfY2hhaW5fMSA9IHJlcXVpcmUoXCIuL2dpdC1leGVjdXRvci1jaGFpblwiKTtcbmNsYXNzIEdpdEV4ZWN1dG9yIHtcbiAgICBjb25zdHJ1Y3RvcihiaW5hcnkgPSAnZ2l0JywgY3dkLCBfc2NoZWR1bGVyLCBfcGx1Z2lucykge1xuICAgICAgICB0aGlzLmJpbmFyeSA9IGJpbmFyeTtcbiAgICAgICAgdGhpcy5jd2QgPSBjd2Q7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlciA9IF9zY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuX3BsdWdpbnMgPSBfcGx1Z2lucztcbiAgICAgICAgdGhpcy5fY2hhaW4gPSBuZXcgZ2l0X2V4ZWN1dG9yX2NoYWluXzEuR2l0RXhlY3V0b3JDaGFpbih0aGlzLCB0aGlzLl9zY2hlZHVsZXIsIHRoaXMuX3BsdWdpbnMpO1xuICAgIH1cbiAgICBjaGFpbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBnaXRfZXhlY3V0b3JfY2hhaW5fMS5HaXRFeGVjdXRvckNoYWluKHRoaXMsIHRoaXMuX3NjaGVkdWxlciwgdGhpcy5fcGx1Z2lucyk7XG4gICAgfVxuICAgIHB1c2godGFzaykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW4ucHVzaCh0YXNrKTtcbiAgICB9XG59XG5leHBvcnRzLkdpdEV4ZWN1dG9yID0gR2l0RXhlY3V0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZXhlY3V0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRhc2tDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IGdpdF9yZXNwb25zZV9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHRhc2tDYWxsYmFjayh0YXNrLCByZXNwb25zZSwgY2FsbGJhY2sgPSB1dGlsc18xLk5PT1ApIHtcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGlmICgoZXJyID09PSBudWxsIHx8IGVyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyLnRhc2spID09PSB0YXNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygoZXJyIGluc3RhbmNlb2YgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEuR2l0UmVzcG9uc2VFcnJvcikgPyBhZGREZXByZWNhdGlvbk5vdGljZVRvRXJyb3IoZXJyKSA6IGVyciwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVzcG9uc2UudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xufVxuZXhwb3J0cy50YXNrQ2FsbGJhY2sgPSB0YXNrQ2FsbGJhY2s7XG5mdW5jdGlvbiBhZGREZXByZWNhdGlvbk5vdGljZVRvRXJyb3IoZXJyKSB7XG4gICAgbGV0IGxvZyA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2Fybihgc2ltcGxlLWdpdCBkZXByZWNhdGlvbiBub3RpY2U6IGFjY2Vzc2luZyBHaXRSZXNwb25zZUVycm9yLiR7bmFtZX0gc2hvdWxkIGJlIEdpdFJlc3BvbnNlRXJyb3IuZ2l0LiR7bmFtZX0sIHRoaXMgd2lsbCBubyBsb25nZXIgYmUgYXZhaWxhYmxlIGluIHZlcnNpb24gM2ApO1xuICAgICAgICBsb2cgPSB1dGlsc18xLk5PT1A7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShlcnIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGVyci5naXQpLnJlZHVjZShkZXNjcmlwdG9yUmVkdWNlciwge30pKTtcbiAgICBmdW5jdGlvbiBkZXNjcmlwdG9yUmVkdWNlcihhbGwsIG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgaW4gZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxsO1xuICAgICAgICB9XG4gICAgICAgIGFsbFtuYW1lXSA9IHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsb2cobmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyci5naXRbbmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNoYW5nZVdvcmtpbmdEaXJlY3RvcnlUYXNrID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBjaGFuZ2VXb3JraW5nRGlyZWN0b3J5VGFzayhkaXJlY3RvcnksIHJvb3QpIHtcbiAgICByZXR1cm4gdGFza18xLmFkaG9jRXhlY1Rhc2soKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGlmICghdXRpbHNfMS5mb2xkZXJFeGlzdHMoZGlyZWN0b3J5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBHaXQuY3dkOiBjYW5ub3QgY2hhbmdlIHRvIG5vbi1kaXJlY3RvcnkgXCIke2RpcmVjdG9yeX1cImApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKHJvb3QgfHwgaW5zdGFuY2UpLmN3ZCA9IGRpcmVjdG9yeSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmNoYW5nZVdvcmtpbmdEaXJlY3RvcnlUYXNrID0gY2hhbmdlV29ya2luZ0RpcmVjdG9yeVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGFuZ2Utd29ya2luZy1kaXJlY3RvcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc2hPYmplY3RUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuaGFzaE9iamVjdGBcbiAqL1xuZnVuY3Rpb24gaGFzaE9iamVjdFRhc2soZmlsZVBhdGgsIHdyaXRlKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2hhc2gtb2JqZWN0JywgZmlsZVBhdGhdO1xuICAgIGlmICh3cml0ZSkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKCctdycpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRydWUpO1xufVxuZXhwb3J0cy5oYXNoT2JqZWN0VGFzayA9IGhhc2hPYmplY3RUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGFzaC1vYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlSW5pdCA9IGV4cG9ydHMuSW5pdFN1bW1hcnkgPSB2b2lkIDA7XG5jbGFzcyBJbml0U3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IoYmFyZSwgcGF0aCwgZXhpc3RpbmcsIGdpdERpcikge1xuICAgICAgICB0aGlzLmJhcmUgPSBiYXJlO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmV4aXN0aW5nID0gZXhpc3Rpbmc7XG4gICAgICAgIHRoaXMuZ2l0RGlyID0gZ2l0RGlyO1xuICAgIH1cbn1cbmV4cG9ydHMuSW5pdFN1bW1hcnkgPSBJbml0U3VtbWFyeTtcbmNvbnN0IGluaXRSZXNwb25zZVJlZ2V4ID0gL15Jbml0LisgcmVwb3NpdG9yeSBpbiAoLispJC87XG5jb25zdCByZUluaXRSZXNwb25zZVJlZ2V4ID0gL15SZWluLisgaW4gKC4rKSQvO1xuZnVuY3Rpb24gcGFyc2VJbml0KGJhcmUsIHBhdGgsIHRleHQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IFN0cmluZyh0ZXh0KS50cmltKCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAoKHJlc3VsdCA9IGluaXRSZXNwb25zZVJlZ2V4LmV4ZWMocmVzcG9uc2UpKSkge1xuICAgICAgICByZXR1cm4gbmV3IEluaXRTdW1tYXJ5KGJhcmUsIHBhdGgsIGZhbHNlLCByZXN1bHRbMV0pO1xuICAgIH1cbiAgICBpZiAoKHJlc3VsdCA9IHJlSW5pdFJlc3BvbnNlUmVnZXguZXhlYyhyZXNwb25zZSkpKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5pdFN1bW1hcnkoYmFyZSwgcGF0aCwgdHJ1ZSwgcmVzdWx0WzFdKTtcbiAgICB9XG4gICAgbGV0IGdpdERpciA9ICcnO1xuICAgIGNvbnN0IHRva2VucyA9IHJlc3BvbnNlLnNwbGl0KCcgJyk7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgaWYgKHRva2VuID09PSAnaW4nKSB7XG4gICAgICAgICAgICBnaXREaXIgPSB0b2tlbnMuam9pbignICcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBJbml0U3VtbWFyeShiYXJlLCBwYXRoLCAvXnJlL2kudGVzdChyZXNwb25zZSksIGdpdERpcik7XG59XG5leHBvcnRzLnBhcnNlSW5pdCA9IHBhcnNlSW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUluaXRTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0VGFzayA9IHZvaWQgMDtcbmNvbnN0IEluaXRTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0luaXRTdW1tYXJ5XCIpO1xuY29uc3QgYmFyZUNvbW1hbmQgPSAnLS1iYXJlJztcbmZ1bmN0aW9uIGhhc0JhcmVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICByZXR1cm4gY29tbWFuZC5pbmNsdWRlcyhiYXJlQ29tbWFuZCk7XG59XG5mdW5jdGlvbiBpbml0VGFzayhiYXJlID0gZmFsc2UsIHBhdGgsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnaW5pdCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChiYXJlICYmICFoYXNCYXJlQ29tbWFuZChjb21tYW5kcykpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIGJhcmVDb21tYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbml0U3VtbWFyeV8xLnBhcnNlSW5pdChjb21tYW5kcy5pbmNsdWRlcygnLS1iYXJlJyksIHBhdGgsIHRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuaW5pdFRhc2sgPSBpbml0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRpZmZTdW1tYXJ5ID0gdm9pZCAwO1xuLyoqKlxuICogVGhlIERpZmZTdW1tYXJ5IGlzIHJldHVybmVkIGFzIGEgcmVzcG9uc2UgdG8gZ2V0dGluZyBgZ2l0KCkuc3RhdHVzKClgXG4gKi9cbmNsYXNzIERpZmZTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gMDtcbiAgICAgICAgdGhpcy5kZWxldGlvbnMgPSAwO1xuICAgICAgICB0aGlzLmluc2VydGlvbnMgPSAwO1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgfVxufVxuZXhwb3J0cy5EaWZmU3VtbWFyeSA9IERpZmZTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGlmZlN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlRGlmZlJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IERpZmZTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0RpZmZTdW1tYXJ5XCIpO1xuZnVuY3Rpb24gcGFyc2VEaWZmUmVzdWx0KHN0ZE91dCkge1xuICAgIGNvbnN0IGxpbmVzID0gc3RkT3V0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3Qgc3RhdHVzID0gbmV3IERpZmZTdW1tYXJ5XzEuRGlmZlN1bW1hcnkoKTtcbiAgICByZWFkU3VtbWFyeUxpbmUoc3RhdHVzLCBsaW5lcy5wb3AoKSk7XG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGxpbmVzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgdGV4dEZpbGVDaGFuZ2UobGluZSwgc3RhdHVzKSB8fCBiaW5hcnlGaWxlQ2hhbmdlKGxpbmUsIHN0YXR1cyk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG59XG5leHBvcnRzLnBhcnNlRGlmZlJlc3VsdCA9IHBhcnNlRGlmZlJlc3VsdDtcbmZ1bmN0aW9uIHJlYWRTdW1tYXJ5TGluZShzdGF0dXMsIHN1bW1hcnkpIHtcbiAgICAoc3VtbWFyeSB8fCAnJylcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoJywgJylcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IC8oXFxkKylcXHMoW2Etel0rKS8uZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKCFzdW1tYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VtbWFyeVR5cGUoc3RhdHVzLCBzdW1tYXJ5WzJdLCBwYXJzZUludChzdW1tYXJ5WzFdLCAxMCkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc3VtbWFyeVR5cGUoc3RhdHVzLCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgbWF0Y2ggPSAoLyhbYS16XSs/KXM/XFxiLy5leGVjKGtleSkpO1xuICAgIGlmICghbWF0Y2ggfHwgIXN0YXR1c1VwZGF0ZVttYXRjaFsxXV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0dXNVcGRhdGVbbWF0Y2hbMV1dKHN0YXR1cywgdmFsdWUpO1xufVxuY29uc3Qgc3RhdHVzVXBkYXRlID0ge1xuICAgIGZpbGUoc3RhdHVzLCB2YWx1ZSkge1xuICAgICAgICBzdGF0dXMuY2hhbmdlZCA9IHZhbHVlO1xuICAgIH0sXG4gICAgZGVsZXRpb24oc3RhdHVzLCB2YWx1ZSkge1xuICAgICAgICBzdGF0dXMuZGVsZXRpb25zID0gdmFsdWU7XG4gICAgfSxcbiAgICBpbnNlcnRpb24oc3RhdHVzLCB2YWx1ZSkge1xuICAgICAgICBzdGF0dXMuaW5zZXJ0aW9ucyA9IHZhbHVlO1xuICAgIH1cbn07XG5mdW5jdGlvbiB0ZXh0RmlsZUNoYW5nZShpbnB1dCwgeyBmaWxlcyB9KSB7XG4gICAgY29uc3QgbGluZSA9IGlucHV0LnRyaW0oKS5tYXRjaCgvXiguKylcXHMrXFx8XFxzKyhcXGQrKShcXHMrWytcXC1dKyk/JC8pO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICAgIHZhciBhbHRlcmF0aW9ucyA9IChsaW5lWzNdIHx8ICcnKS50cmltKCk7XG4gICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgICAgZmlsZTogbGluZVsxXS50cmltKCksXG4gICAgICAgICAgICBjaGFuZ2VzOiBwYXJzZUludChsaW5lWzJdLCAxMCksXG4gICAgICAgICAgICBpbnNlcnRpb25zOiBhbHRlcmF0aW9ucy5yZXBsYWNlKC8tL2csICcnKS5sZW5ndGgsXG4gICAgICAgICAgICBkZWxldGlvbnM6IGFsdGVyYXRpb25zLnJlcGxhY2UoL1xcKy9nLCAnJykubGVuZ3RoLFxuICAgICAgICAgICAgYmluYXJ5OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGJpbmFyeUZpbGVDaGFuZ2UoaW5wdXQsIHsgZmlsZXMgfSkge1xuICAgIGNvbnN0IGxpbmUgPSBpbnB1dC5tYXRjaCgvXiguKykgXFx8XFxzK0JpbiAoWzAtOS5dKykgLT4gKFswLTkuXSspIChbYS16XSspJC8pO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgICAgZmlsZTogbGluZVsxXS50cmltKCksXG4gICAgICAgICAgICBiZWZvcmU6ICtsaW5lWzJdLFxuICAgICAgICAgICAgYWZ0ZXI6ICtsaW5lWzNdLFxuICAgICAgICAgICAgYmluYXJ5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtZGlmZi1zdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlciA9IGV4cG9ydHMuU1BMSVRURVIgPSBleHBvcnRzLkNPTU1JVF9CT1VOREFSWSA9IGV4cG9ydHMuU1RBUlRfQk9VTkRBUlkgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VfZGlmZl9zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi9wYXJzZS1kaWZmLXN1bW1hcnlcIik7XG5leHBvcnRzLlNUQVJUX0JPVU5EQVJZID0gJ8Oyw7LDssOyw7LDsiAnO1xuZXhwb3J0cy5DT01NSVRfQk9VTkRBUlkgPSAnIMOyw7InO1xuZXhwb3J0cy5TUExJVFRFUiA9ICcgw7IgJztcbmNvbnN0IGRlZmF1bHRGaWVsZE5hbWVzID0gWydoYXNoJywgJ2RhdGUnLCAnbWVzc2FnZScsICdyZWZzJywgJ2F1dGhvcl9uYW1lJywgJ2F1dGhvcl9lbWFpbCddO1xuZnVuY3Rpb24gbGluZUJ1aWxkZXIodG9rZW5zLCBmaWVsZHMpIHtcbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZSgobGluZSwgZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIGxpbmVbZmllbGRdID0gdG9rZW5zW2luZGV4XSB8fCAnJztcbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZSh7IGRpZmY6IG51bGwgfSkpO1xufVxuZnVuY3Rpb24gY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIoc3BsaXR0ZXIgPSBleHBvcnRzLlNQTElUVEVSLCBmaWVsZHMgPSBkZWZhdWx0RmllbGROYW1lcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RkT3V0KSB7XG4gICAgICAgIGNvbnN0IGFsbCA9IHV0aWxzXzEudG9MaW5lc1dpdGhDb250ZW50KHN0ZE91dCwgdHJ1ZSwgZXhwb3J0cy5TVEFSVF9CT1VOREFSWSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVEZXRhaWwgPSBpdGVtLnRyaW0oKS5zcGxpdChleHBvcnRzLkNPTU1JVF9CT1VOREFSWSk7XG4gICAgICAgICAgICBjb25zdCBsaXN0TG9nTGluZSA9IGxpbmVCdWlsZGVyKGxpbmVEZXRhaWxbMF0udHJpbSgpLnNwbGl0KHNwbGl0dGVyKSwgZmllbGRzKTtcbiAgICAgICAgICAgIGlmIChsaW5lRGV0YWlsLmxlbmd0aCA+IDEgJiYgISFsaW5lRGV0YWlsWzFdLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGxpc3RMb2dMaW5lLmRpZmYgPSBwYXJzZV9kaWZmX3N1bW1hcnlfMS5wYXJzZURpZmZSZXN1bHQobGluZURldGFpbFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdExvZ0xpbmU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxsLFxuICAgICAgICAgICAgbGF0ZXN0OiBhbGwubGVuZ3RoICYmIGFsbFswXSB8fCBudWxsLFxuICAgICAgICAgICAgdG90YWw6IGFsbC5sZW5ndGgsXG4gICAgICAgIH07XG4gICAgfTtcbn1cbmV4cG9ydHMuY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIgPSBjcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWxpc3QtbG9nLXN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvZ1Rhc2sgPSBleHBvcnRzLnBhcnNlTG9nT3B0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWxpc3QtbG9nLXN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbnZhciBleGNsdWRlT3B0aW9ucztcbihmdW5jdGlvbiAoZXhjbHVkZU9wdGlvbnMpIHtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcIi0tcHJldHR5XCJdID0gMF0gPSBcIi0tcHJldHR5XCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJtYXgtY291bnRcIl0gPSAxXSA9IFwibWF4LWNvdW50XCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJtYXhDb3VudFwiXSA9IDJdID0gXCJtYXhDb3VudFwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wiblwiXSA9IDNdID0gXCJuXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJmaWxlXCJdID0gNF0gPSBcImZpbGVcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcImZvcm1hdFwiXSA9IDVdID0gXCJmb3JtYXRcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcImZyb21cIl0gPSA2XSA9IFwiZnJvbVwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1widG9cIl0gPSA3XSA9IFwidG9cIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcInNwbGl0dGVyXCJdID0gOF0gPSBcInNwbGl0dGVyXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJzeW1tZXRyaWNcIl0gPSA5XSA9IFwic3ltbWV0cmljXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJtYWlsTWFwXCJdID0gMTBdID0gXCJtYWlsTWFwXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJtdWx0aUxpbmVcIl0gPSAxMV0gPSBcIm11bHRpTGluZVwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wic3RyaWN0RGF0ZVwiXSA9IDEyXSA9IFwic3RyaWN0RGF0ZVwiO1xufSkoZXhjbHVkZU9wdGlvbnMgfHwgKGV4Y2x1ZGVPcHRpb25zID0ge30pKTtcbmZ1bmN0aW9uIHByZXR0eUZvcm1hdChmb3JtYXQsIHNwbGl0dGVyKSB7XG4gICAgY29uc3QgZmllbGRzID0gW107XG4gICAgY29uc3QgZm9ybWF0U3RyID0gW107XG4gICAgT2JqZWN0LmtleXMoZm9ybWF0KS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBmaWVsZHMucHVzaChmaWVsZCk7XG4gICAgICAgIGZvcm1hdFN0ci5wdXNoKFN0cmluZyhmb3JtYXRbZmllbGRdKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgZmllbGRzLCBmb3JtYXRTdHIuam9pbihzcGxpdHRlcilcbiAgICBdO1xufVxuZnVuY3Rpb24gdXNlck9wdGlvbnMoaW5wdXQpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XG4gICAgT2JqZWN0LmtleXMoaW5wdXQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGtleSBpbiBleGNsdWRlT3B0aW9ucykge1xuICAgICAgICAgICAgZGVsZXRlIG91dHB1dFtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIHBhcnNlTG9nT3B0aW9ucyhvcHQgPSB7fSwgY3VzdG9tQXJncyA9IFtdKSB7XG4gICAgY29uc3Qgc3BsaXR0ZXIgPSBvcHQuc3BsaXR0ZXIgfHwgcGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xLlNQTElUVEVSO1xuICAgIGNvbnN0IGZvcm1hdCA9IG9wdC5mb3JtYXQgfHwge1xuICAgICAgICBoYXNoOiAnJUgnLFxuICAgICAgICBkYXRlOiBvcHQuc3RyaWN0RGF0ZSA9PT0gZmFsc2UgPyAnJWFpJyA6ICclYUknLFxuICAgICAgICBtZXNzYWdlOiAnJXMnLFxuICAgICAgICByZWZzOiAnJUQnLFxuICAgICAgICBib2R5OiBvcHQubXVsdGlMaW5lID8gJyVCJyA6ICclYicsXG4gICAgICAgIGF1dGhvcl9uYW1lOiBvcHQubWFpbE1hcCAhPT0gZmFsc2UgPyAnJWFOJyA6ICclYW4nLFxuICAgICAgICBhdXRob3JfZW1haWw6IG9wdC5tYWlsTWFwICE9PSBmYWxzZSA/ICclYUUnIDogJyVhZSdcbiAgICB9O1xuICAgIGNvbnN0IFtmaWVsZHMsIGZvcm1hdFN0cl0gPSBwcmV0dHlGb3JtYXQoZm9ybWF0LCBzcGxpdHRlcik7XG4gICAgY29uc3Qgc3VmZml4ID0gW107XG4gICAgY29uc3QgY29tbWFuZCA9IFtcbiAgICAgICAgYC0tcHJldHR5PWZvcm1hdDoke3BhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5TVEFSVF9CT1VOREFSWX0ke2Zvcm1hdFN0cn0ke3BhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5DT01NSVRfQk9VTkRBUll9YCxcbiAgICAgICAgLi4uY3VzdG9tQXJncyxcbiAgICBdO1xuICAgIGNvbnN0IG1heENvdW50ID0gb3B0Lm4gfHwgb3B0WydtYXgtY291bnQnXSB8fCBvcHQubWF4Q291bnQ7XG4gICAgaWYgKG1heENvdW50KSB7XG4gICAgICAgIGNvbW1hbmQucHVzaChgLS1tYXgtY291bnQ9JHttYXhDb3VudH1gKTtcbiAgICB9XG4gICAgaWYgKG9wdC5mcm9tICYmIG9wdC50bykge1xuICAgICAgICBjb25zdCByYW5nZU9wZXJhdG9yID0gKG9wdC5zeW1tZXRyaWMgIT09IGZhbHNlKSA/ICcuLi4nIDogJy4uJztcbiAgICAgICAgc3VmZml4LnB1c2goYCR7b3B0LmZyb219JHtyYW5nZU9wZXJhdG9yfSR7b3B0LnRvfWApO1xuICAgIH1cbiAgICBpZiAob3B0LmZpbGUpIHtcbiAgICAgICAgc3VmZml4LnB1c2goJy0tZm9sbG93Jywgb3B0LmZpbGUpO1xuICAgIH1cbiAgICB1dGlsc18xLmFwcGVuZFRhc2tPcHRpb25zKHVzZXJPcHRpb25zKG9wdCksIGNvbW1hbmQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgc3BsaXR0ZXIsXG4gICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICAuLi5jb21tYW5kLFxuICAgICAgICAgICAgLi4uc3VmZml4LFxuICAgICAgICBdLFxuICAgIH07XG59XG5leHBvcnRzLnBhcnNlTG9nT3B0aW9ucyA9IHBhcnNlTG9nT3B0aW9ucztcbmZ1bmN0aW9uIGxvZ1Rhc2soc3BsaXR0ZXIsIGZpZWxkcywgY3VzdG9tQXJncykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ2xvZycsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcjogcGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xLmNyZWF0ZUxpc3RMb2dTdW1tYXJ5UGFyc2VyKHNwbGl0dGVyLCBmaWVsZHMpLFxuICAgIH07XG59XG5leHBvcnRzLmxvZ1Rhc2sgPSBsb2dUYXNrO1xuZnVuY3Rpb24gZGVmYXVsdF8xKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvZyguLi5yZXN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSByZWplY3REZXByZWNhdGVkU2lnbmF0dXJlcyguLi5yZXN0KSB8fFxuICAgICAgICAgICAgICAgIGNyZWF0ZUxvZ1Rhc2socGFyc2VMb2dPcHRpb25zKHV0aWxzXzEudHJhaWxpbmdPcHRpb25zQXJndW1lbnQoYXJndW1lbnRzKSwgdXRpbHNfMS5maWx0ZXJUeXBlKGFyZ3VtZW50c1swXSwgdXRpbHNfMS5maWx0ZXJBcnJheSkpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIG5leHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBjcmVhdGVMb2dUYXNrKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGxvZ1Rhc2sob3B0aW9ucy5zcGxpdHRlciwgb3B0aW9ucy5maWVsZHMsIG9wdGlvbnMuY29tbWFuZHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWplY3REZXByZWNhdGVkU2lnbmF0dXJlcyhmcm9tLCB0bykge1xuICAgICAgICByZXR1cm4gKHV0aWxzXzEuZmlsdGVyU3RyaW5nKGZyb20pICYmXG4gICAgICAgICAgICB1dGlsc18xLmZpbHRlclN0cmluZyh0bykgJiZcbiAgICAgICAgICAgIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKGBnaXQubG9nKHN0cmluZywgc3RyaW5nKSBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCBnaXQubG9nKHsgZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nIH0pYCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVyZ2VTdW1tYXJ5RGV0YWlsID0gZXhwb3J0cy5NZXJnZVN1bW1hcnlDb25mbGljdCA9IHZvaWQgMDtcbmNsYXNzIE1lcmdlU3VtbWFyeUNvbmZsaWN0IHtcbiAgICBjb25zdHJ1Y3RvcihyZWFzb24sIGZpbGUgPSBudWxsLCBtZXRhKSB7XG4gICAgICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICB0aGlzLm1ldGEgPSBtZXRhO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmlsZX06JHt0aGlzLnJlYXNvbn1gO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QgPSBNZXJnZVN1bW1hcnlDb25mbGljdDtcbmNsYXNzIE1lcmdlU3VtbWFyeURldGFpbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29uZmxpY3RzID0gW107XG4gICAgICAgIHRoaXMubWVyZ2VzID0gW107XG4gICAgICAgIHRoaXMucmVzdWx0ID0gJ3N1Y2Nlc3MnO1xuICAgIH1cbiAgICBnZXQgZmFpbGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25mbGljdHMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgZ2V0IHJlYXNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGBDT05GTElDVFM6ICR7dGhpcy5jb25mbGljdHMuam9pbignLCAnKX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnT0snO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVyZ2VTdW1tYXJ5RGV0YWlsID0gTWVyZ2VTdW1tYXJ5RGV0YWlsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWVyZ2VTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QdWxsU3VtbWFyeSA9IHZvaWQgMDtcbmNsYXNzIFB1bGxTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZW1vdGVNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIGFsbDogW10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmRlbGV0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmluc2VydGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdW1tYXJ5ID0ge1xuICAgICAgICAgICAgY2hhbmdlczogMCxcbiAgICAgICAgICAgIGRlbGV0aW9uczogMCxcbiAgICAgICAgICAgIGluc2VydGlvbnM6IDAsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5QdWxsU3VtbWFyeSA9IFB1bGxTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHVsbFN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbW90ZU1lc3NhZ2VzT2JqZWN0UGFyc2VycyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBvYmplY3RFbnVtZXJhdGlvblJlc3VsdChyZW1vdGVNZXNzYWdlcykge1xuICAgIHJldHVybiAocmVtb3RlTWVzc2FnZXMub2JqZWN0cyA9IHJlbW90ZU1lc3NhZ2VzLm9iamVjdHMgfHwge1xuICAgICAgICBjb21wcmVzc2luZzogMCxcbiAgICAgICAgY291bnRpbmc6IDAsXG4gICAgICAgIGVudW1lcmF0aW5nOiAwLFxuICAgICAgICBwYWNrUmV1c2VkOiAwLFxuICAgICAgICByZXVzZWQ6IHsgY291bnQ6IDAsIGRlbHRhOiAwIH0sXG4gICAgICAgIHRvdGFsOiB7IGNvdW50OiAwLCBkZWx0YTogMCB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhc09iamVjdENvdW50KHNvdXJjZSkge1xuICAgIGNvbnN0IGNvdW50ID0gL15cXHMqKFxcZCspLy5leGVjKHNvdXJjZSk7XG4gICAgY29uc3QgZGVsdGEgPSAvZGVsdGEgKFxcZCspL2kuZXhlYyhzb3VyY2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvdW50OiB1dGlsc18xLmFzTnVtYmVyKGNvdW50ICYmIGNvdW50WzFdIHx8ICcwJyksXG4gICAgICAgIGRlbHRhOiB1dGlsc18xLmFzTnVtYmVyKGRlbHRhICYmIGRlbHRhWzFdIHx8ICcwJyksXG4gICAgfTtcbn1cbmV4cG9ydHMucmVtb3RlTWVzc2FnZXNPYmplY3RQYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoL15yZW1vdGU6XFxzKihlbnVtZXJhdGluZ3xjb3VudGluZ3xjb21wcmVzc2luZykgb2JqZWN0czogKFxcZCspLC9pLCAocmVzdWx0LCBbYWN0aW9uLCBjb3VudF0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGVudW1lcmF0aW9uID0gb2JqZWN0RW51bWVyYXRpb25SZXN1bHQocmVzdWx0LnJlbW90ZU1lc3NhZ2VzKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbnVtZXJhdGlvbiwgeyBba2V5XTogdXRpbHNfMS5hc051bWJlcihjb3VudCkgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcigvXnJlbW90ZTpcXHMqKGVudW1lcmF0aW5nfGNvdW50aW5nfGNvbXByZXNzaW5nKSBvYmplY3RzOiBcXGQrJSBcXChcXGQrXFwvKFxcZCspXFwpLC9pLCAocmVzdWx0LCBbYWN0aW9uLCBjb3VudF0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGVudW1lcmF0aW9uID0gb2JqZWN0RW51bWVyYXRpb25SZXN1bHQocmVzdWx0LnJlbW90ZU1lc3NhZ2VzKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbnVtZXJhdGlvbiwgeyBba2V5XTogdXRpbHNfMS5hc051bWJlcihjb3VudCkgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcigvdG90YWwgKFteLF0rKSwgcmV1c2VkIChbXixdKyksIHBhY2stcmV1c2VkIChcXGQrKS9pLCAocmVzdWx0LCBbdG90YWwsIHJldXNlZCwgcGFja1JldXNlZF0pID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IG9iamVjdEVudW1lcmF0aW9uUmVzdWx0KHJlc3VsdC5yZW1vdGVNZXNzYWdlcyk7XG4gICAgICAgIG9iamVjdHMudG90YWwgPSBhc09iamVjdENvdW50KHRvdGFsKTtcbiAgICAgICAgb2JqZWN0cy5yZXVzZWQgPSBhc09iamVjdENvdW50KHJldXNlZCk7XG4gICAgICAgIG9iamVjdHMucGFja1JldXNlZCA9IHV0aWxzXzEuYXNOdW1iZXIocGFja1JldXNlZCk7XG4gICAgfSksXG5dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVtb3RlLW9iamVjdHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbW90ZU1lc3NhZ2VTdW1tYXJ5ID0gZXhwb3J0cy5wYXJzZVJlbW90ZU1lc3NhZ2VzID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlX3JlbW90ZV9vYmplY3RzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1yZW1vdGUtb2JqZWN0c1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcigvXnJlbW90ZTpcXHMqKC4rKSQvLCAocmVzdWx0LCBbdGV4dF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlbW90ZU1lc3NhZ2VzLmFsbC5wdXNoKHRleHQudHJpbSgpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLFxuICAgIC4uLnBhcnNlX3JlbW90ZV9vYmplY3RzXzEucmVtb3RlTWVzc2FnZXNPYmplY3RQYXJzZXJzLFxuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoWy9jcmVhdGUgYSAoPzpwdWxsfG1lcmdlKSByZXF1ZXN0L2ksIC9cXHMoaHR0cHM/OlxcL1xcL1xcUyspJC9dLCAocmVzdWx0LCBbcHVsbFJlcXVlc3RVcmxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZW1vdGVNZXNzYWdlcy5wdWxsUmVxdWVzdFVybCA9IHB1bGxSZXF1ZXN0VXJsO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoWy9mb3VuZCAoXFxkKykgdnVsbmVyYWJpbGl0aWVzLitcXCgoW14pXSspXFwpL2ksIC9cXHMoaHR0cHM/OlxcL1xcL1xcUyspJC9dLCAocmVzdWx0LCBbY291bnQsIHN1bW1hcnksIHVybF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlbW90ZU1lc3NhZ2VzLnZ1bG5lcmFiaWxpdGllcyA9IHtcbiAgICAgICAgICAgIGNvdW50OiB1dGlsc18xLmFzTnVtYmVyKGNvdW50KSxcbiAgICAgICAgICAgIHN1bW1hcnksXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgIH07XG4gICAgfSksXG5dO1xuZnVuY3Rpb24gcGFyc2VSZW1vdGVNZXNzYWdlcyhfc3RkT3V0LCBzdGRFcnIpIHtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHsgcmVtb3RlTWVzc2FnZXM6IG5ldyBSZW1vdGVNZXNzYWdlU3VtbWFyeSgpIH0sIHBhcnNlcnMsIHN0ZEVycik7XG59XG5leHBvcnRzLnBhcnNlUmVtb3RlTWVzc2FnZXMgPSBwYXJzZVJlbW90ZU1lc3NhZ2VzO1xuY2xhc3MgUmVtb3RlTWVzc2FnZVN1bW1hcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFsbCA9IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVtb3RlTWVzc2FnZVN1bW1hcnkgPSBSZW1vdGVNZXNzYWdlU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbW90ZS1tZXNzYWdlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VQdWxsUmVzdWx0ID0gZXhwb3J0cy5wYXJzZVB1bGxEZXRhaWwgPSB2b2lkIDA7XG5jb25zdCBQdWxsU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9QdWxsU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLXJlbW90ZS1tZXNzYWdlc1wiKTtcbmNvbnN0IEZJTEVfVVBEQVRFX1JFR0VYID0gL15cXHMqKC4rPylcXHMrXFx8XFxzK1xcZCtcXHMqKFxcKyopKC0qKS87XG5jb25zdCBTVU1NQVJZX1JFR0VYID0gLyhcXGQrKVxcRCsoKFxcZCspXFxEK1xcKFxcK1xcKSk/KFxcRCsoXFxkKylcXEQrXFwoLVxcKSk/LztcbmNvbnN0IEFDVElPTl9SRUdFWCA9IC9eKGNyZWF0ZXxkZWxldGUpIG1vZGUgXFxkKyAoLispLztcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihGSUxFX1VQREFURV9SRUdFWCwgKHJlc3VsdCwgW2ZpbGUsIGluc2VydGlvbnMsIGRlbGV0aW9uc10pID0+IHtcbiAgICAgICAgcmVzdWx0LmZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgIGlmIChpbnNlcnRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQuaW5zZXJ0aW9uc1tmaWxlXSA9IGluc2VydGlvbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxldGlvbnMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5kZWxldGlvbnNbZmlsZV0gPSBkZWxldGlvbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihTVU1NQVJZX1JFR0VYLCAocmVzdWx0LCBbY2hhbmdlcywgLCBpbnNlcnRpb25zLCAsIGRlbGV0aW9uc10pID0+IHtcbiAgICAgICAgaWYgKGluc2VydGlvbnMgIT09IHVuZGVmaW5lZCB8fCBkZWxldGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0LnN1bW1hcnkuY2hhbmdlcyA9ICtjaGFuZ2VzIHx8IDA7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5pbnNlcnRpb25zID0gK2luc2VydGlvbnMgfHwgMDtcbiAgICAgICAgICAgIHJlc3VsdC5zdW1tYXJ5LmRlbGV0aW9ucyA9ICtkZWxldGlvbnMgfHwgMDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKEFDVElPTl9SRUdFWCwgKHJlc3VsdCwgW2FjdGlvbiwgZmlsZV0pID0+IHtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0LmZpbGVzLCBmaWxlKTtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQoKGFjdGlvbiA9PT0gJ2NyZWF0ZScpID8gcmVzdWx0LmNyZWF0ZWQgOiByZXN1bHQuZGVsZXRlZCwgZmlsZSk7XG4gICAgfSksXG5dO1xuY29uc3QgcGFyc2VQdWxsRGV0YWlsID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgUHVsbFN1bW1hcnlfMS5QdWxsU3VtbWFyeSgpLCBwYXJzZXJzLCBzdGRPdXQsIHN0ZEVycik7XG59O1xuZXhwb3J0cy5wYXJzZVB1bGxEZXRhaWwgPSBwYXJzZVB1bGxEZXRhaWw7XG5jb25zdCBwYXJzZVB1bGxSZXN1bHQgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgUHVsbFN1bW1hcnlfMS5QdWxsU3VtbWFyeSgpLCBleHBvcnRzLnBhcnNlUHVsbERldGFpbChzdGRPdXQsIHN0ZEVyciksIHBhcnNlX3JlbW90ZV9tZXNzYWdlc18xLnBhcnNlUmVtb3RlTWVzc2FnZXMoc3RkT3V0LCBzdGRFcnIpKTtcbn07XG5leHBvcnRzLnBhcnNlUHVsbFJlc3VsdCA9IHBhcnNlUHVsbFJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXB1bGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlTWVyZ2VEZXRhaWwgPSBleHBvcnRzLnBhcnNlTWVyZ2VSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCBNZXJnZVN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvTWVyZ2VTdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlX3B1bGxfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLXB1bGxcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15BdXRvLW1lcmdpbmdcXHMrKC4rKSQvLCAoc3VtbWFyeSwgW2F1dG9NZXJnZV0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5tZXJnZXMucHVzaChhdXRvTWVyZ2UpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15DT05GTElDVFxccytcXCgoLispXFwpOiBNZXJnZSBjb25mbGljdCBpbiAoLispJC8sIChzdW1tYXJ5LCBbcmVhc29uLCBmaWxlXSkgPT4ge1xuICAgICAgICBzdW1tYXJ5LmNvbmZsaWN0cy5wdXNoKG5ldyBNZXJnZVN1bW1hcnlfMS5NZXJnZVN1bW1hcnlDb25mbGljdChyZWFzb24sIGZpbGUpKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQ09ORkxJQ1RcXHMrXFwoKC4rXFwvZGVsZXRlKVxcKTogKC4rKSBkZWxldGVkIGluICguKykgYW5kLywgKHN1bW1hcnksIFtyZWFzb24sIGZpbGUsIGRlbGV0ZVJlZl0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5jb25mbGljdHMucHVzaChuZXcgTWVyZ2VTdW1tYXJ5XzEuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QocmVhc29uLCBmaWxlLCB7IGRlbGV0ZVJlZiB9KSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXkNPTkZMSUNUXFxzK1xcKCguKylcXCk6LywgKHN1bW1hcnksIFtyZWFzb25dKSA9PiB7XG4gICAgICAgIHN1bW1hcnkuY29uZmxpY3RzLnB1c2gobmV3IE1lcmdlU3VtbWFyeV8xLk1lcmdlU3VtbWFyeUNvbmZsaWN0KHJlYXNvbiwgbnVsbCkpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15BdXRvbWF0aWMgbWVyZ2UgZmFpbGVkO1xccysoLispJC8sIChzdW1tYXJ5LCBbcmVzdWx0XSkgPT4ge1xuICAgICAgICBzdW1tYXJ5LnJlc3VsdCA9IHJlc3VsdDtcbiAgICB9KSxcbl07XG4vKipcbiAqIFBhcnNlIHRoZSBjb21wbGV0ZSByZXNwb25zZSBmcm9tIGBnaXQubWVyZ2VgXG4gKi9cbmNvbnN0IHBhcnNlTWVyZ2VSZXN1bHQgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihleHBvcnRzLnBhcnNlTWVyZ2VEZXRhaWwoc3RkT3V0LCBzdGRFcnIpLCBwYXJzZV9wdWxsXzEucGFyc2VQdWxsUmVzdWx0KHN0ZE91dCwgc3RkRXJyKSk7XG59O1xuZXhwb3J0cy5wYXJzZU1lcmdlUmVzdWx0ID0gcGFyc2VNZXJnZVJlc3VsdDtcbi8qKlxuICogUGFyc2UgdGhlIG1lcmdlIHNwZWNpZmljIGRldGFpbCAoaWU6IG5vdCB0aGUgY29udGVudCBhbHNvIGF2YWlsYWJsZSBpbiB0aGUgcHVsbCBkZXRhaWwpIGZyb20gYGdpdC5tbmVyZ2VgXG4gKiBAcGFyYW0gc3RkT3V0XG4gKi9cbmNvbnN0IHBhcnNlTWVyZ2VEZXRhaWwgPSAoc3RkT3V0KSA9PiB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgTWVyZ2VTdW1tYXJ5XzEuTWVyZ2VTdW1tYXJ5RGV0YWlsKCksIHBhcnNlcnMsIHN0ZE91dCk7XG59O1xuZXhwb3J0cy5wYXJzZU1lcmdlRGV0YWlsID0gcGFyc2VNZXJnZURldGFpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLW1lcmdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tZXJnZVRhc2sgPSB2b2lkIDA7XG5jb25zdCBnaXRfcmVzcG9uc2VfZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LXJlc3BvbnNlLWVycm9yXCIpO1xuY29uc3QgcGFyc2VfbWVyZ2VfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLW1lcmdlXCIpO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmZ1bmN0aW9uIG1lcmdlVGFzayhjdXN0b21BcmdzKSB7XG4gICAgaWYgKCFjdXN0b21BcmdzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGFza18xLmNvbmZpZ3VyYXRpb25FcnJvclRhc2soJ0dpdC5tZXJnZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgb3B0aW9uJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ21lcmdlJywgLi4uY3VzdG9tQXJnc10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZSA9IHBhcnNlX21lcmdlXzEucGFyc2VNZXJnZVJlc3VsdChzdGRPdXQsIHN0ZEVycik7XG4gICAgICAgICAgICBpZiAobWVyZ2UuZmFpbGVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IobWVyZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMubWVyZ2VUYXNrID0gbWVyZ2VUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlUHVzaERldGFpbCA9IGV4cG9ydHMucGFyc2VQdXNoUmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlX3JlbW90ZV9tZXNzYWdlc18xID0gcmVxdWlyZShcIi4vcGFyc2UtcmVtb3RlLW1lc3NhZ2VzXCIpO1xuZnVuY3Rpb24gcHVzaFJlc3VsdFB1c2hlZEl0ZW0obG9jYWwsIHJlbW90ZSwgc3RhdHVzKSB7XG4gICAgY29uc3QgZGVsZXRlZCA9IHN0YXR1cy5pbmNsdWRlcygnZGVsZXRlZCcpO1xuICAgIGNvbnN0IHRhZyA9IHN0YXR1cy5pbmNsdWRlcygndGFnJykgfHwgL15yZWZzXFwvdGFncy8udGVzdChsb2NhbCk7XG4gICAgY29uc3QgYWxyZWFkeVVwZGF0ZWQgPSAhc3RhdHVzLmluY2x1ZGVzKCduZXcnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxldGVkLFxuICAgICAgICB0YWcsXG4gICAgICAgIGJyYW5jaDogIXRhZyxcbiAgICAgICAgbmV3OiAhYWxyZWFkeVVwZGF0ZWQsXG4gICAgICAgIGFscmVhZHlVcGRhdGVkLFxuICAgICAgICBsb2NhbCxcbiAgICAgICAgcmVtb3RlLFxuICAgIH07XG59XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15QdXNoaW5nIHRvICguKykkLywgKHJlc3VsdCwgW3JlcG9dKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZXBvID0gcmVwbztcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9edXBkYXRpbmcgbG9jYWwgdHJhY2tpbmcgcmVmICcoLispJy8sIChyZXN1bHQsIFtsb2NhbF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlZiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKHJlc3VsdC5yZWYgfHwge30pKSwgeyBsb2NhbCB9KTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eWyotPV1cXHMrKFteOl0rKTooXFxTKylcXHMrXFxbKC4rKV0kLywgKHJlc3VsdCwgW2xvY2FsLCByZW1vdGUsIHR5cGVdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoZWQucHVzaChwdXNoUmVzdWx0UHVzaGVkSXRlbShsb2NhbCwgcmVtb3RlLCB0eXBlKSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXkJyYW5jaCAnKFteJ10rKScgc2V0IHVwIHRvIHRyYWNrIHJlbW90ZSBicmFuY2ggJyhbXiddKyknIGZyb20gJyhbXiddKyknLywgKHJlc3VsdCwgW2xvY2FsLCByZW1vdGUsIHJlbW90ZU5hbWVdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5icmFuY2ggPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChyZXN1bHQuYnJhbmNoIHx8IHt9KSksIHsgbG9jYWwsXG4gICAgICAgICAgICByZW1vdGUsXG4gICAgICAgICAgICByZW1vdGVOYW1lIH0pO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL14oW146XSspOihcXFMrKVxccysoW2EtejAtOV0rKVxcLlxcLihbYS16MC05XSspJC8sIChyZXN1bHQsIFtsb2NhbCwgcmVtb3RlLCBmcm9tLCB0b10pID0+IHtcbiAgICAgICAgcmVzdWx0LnVwZGF0ZSA9IHtcbiAgICAgICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgICAgICBsb2NhbCxcbiAgICAgICAgICAgICAgICByZW1vdGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzaDoge1xuICAgICAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0pLFxuXTtcbmNvbnN0IHBhcnNlUHVzaFJlc3VsdCA9IChzdGRPdXQsIHN0ZEVycikgPT4ge1xuICAgIGNvbnN0IHB1c2hEZXRhaWwgPSBleHBvcnRzLnBhcnNlUHVzaERldGFpbChzdGRPdXQsIHN0ZEVycik7XG4gICAgY29uc3QgcmVzcG9uc2VEZXRhaWwgPSBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMS5wYXJzZVJlbW90ZU1lc3NhZ2VzKHN0ZE91dCwgc3RkRXJyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwdXNoRGV0YWlsKSwgcmVzcG9uc2VEZXRhaWwpO1xufTtcbmV4cG9ydHMucGFyc2VQdXNoUmVzdWx0ID0gcGFyc2VQdXNoUmVzdWx0O1xuY29uc3QgcGFyc2VQdXNoRGV0YWlsID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZSh7IHB1c2hlZDogW10gfSwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufTtcbmV4cG9ydHMucGFyc2VQdXNoRGV0YWlsID0gcGFyc2VQdXNoRGV0YWlsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcHVzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHVzaFRhc2sgPSBleHBvcnRzLnB1c2hUYWdzVGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX3B1c2hfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLXB1c2hcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gcHVzaFRhZ3NUYXNrKHJlZiA9IHt9LCBjdXN0b21BcmdzKSB7XG4gICAgdXRpbHNfMS5hcHBlbmQoY3VzdG9tQXJncywgJy0tdGFncycpO1xuICAgIHJldHVybiBwdXNoVGFzayhyZWYsIGN1c3RvbUFyZ3MpO1xufVxuZXhwb3J0cy5wdXNoVGFnc1Rhc2sgPSBwdXNoVGFnc1Rhc2s7XG5mdW5jdGlvbiBwdXNoVGFzayhyZWYgPSB7fSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydwdXNoJywgLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKHJlZi5icmFuY2gpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIHJlZi5icmFuY2gpO1xuICAgIH1cbiAgICBpZiAocmVmLnJlbW90ZSkge1xuICAgICAgICBjb21tYW5kcy5zcGxpY2UoMSwgMCwgcmVmLnJlbW90ZSk7XG4gICAgfVxuICAgIHV0aWxzXzEucmVtb3ZlKGNvbW1hbmRzLCAnLXYnKTtcbiAgICB1dGlsc18xLmFwcGVuZChjb21tYW5kcywgJy0tdmVyYm9zZScpO1xuICAgIHV0aWxzXzEuYXBwZW5kKGNvbW1hbmRzLCAnLS1wb3JjZWxhaW4nKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHBhcnNlX3B1c2hfMS5wYXJzZVB1c2hSZXN1bHQsXG4gICAgfTtcbn1cbmV4cG9ydHMucHVzaFRhc2sgPSBwdXNoVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1c2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZpbGVTdGF0dXNTdW1tYXJ5ID0gZXhwb3J0cy5mcm9tUGF0aFJlZ2V4ID0gdm9pZCAwO1xuZXhwb3J0cy5mcm9tUGF0aFJlZ2V4ID0gL14oLispIC0+ICguKykkLztcbmNsYXNzIEZpbGVTdGF0dXNTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXRoLCBpbmRleCwgd29ya2luZ19kaXIpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLndvcmtpbmdfZGlyID0gd29ya2luZ19kaXI7XG4gICAgICAgIGlmICgnUicgPT09IChpbmRleCArIHdvcmtpbmdfZGlyKSkge1xuICAgICAgICAgICAgY29uc3QgZGV0YWlsID0gZXhwb3J0cy5mcm9tUGF0aFJlZ2V4LmV4ZWMocGF0aCkgfHwgW251bGwsIHBhdGgsIHBhdGhdO1xuICAgICAgICAgICAgdGhpcy5mcm9tID0gZGV0YWlsWzFdIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gZGV0YWlsWzJdIHx8ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5GaWxlU3RhdHVzU3VtbWFyeSA9IEZpbGVTdGF0dXNTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVN0YXR1c1N1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlU3RhdHVzU3VtbWFyeSA9IGV4cG9ydHMuU3RhdHVzU3VtbWFyeSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBGaWxlU3RhdHVzU3VtbWFyeV8xID0gcmVxdWlyZShcIi4vRmlsZVN0YXR1c1N1bW1hcnlcIik7XG4vKipcbiAqIFRoZSBTdGF0dXNTdW1tYXJ5IGlzIHJldHVybmVkIGFzIGEgcmVzcG9uc2UgdG8gZ2V0dGluZyBgZ2l0KCkuc3RhdHVzKClgXG4gKi9cbmNsYXNzIFN0YXR1c1N1bW1hcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5vdF9hZGRlZCA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZsaWN0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XG4gICAgICAgIHRoaXMuZGVsZXRlZCA9IFtdO1xuICAgICAgICB0aGlzLm1vZGlmaWVkID0gW107XG4gICAgICAgIHRoaXMucmVuYW1lZCA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGZpbGVzIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyB0aGUgYHBhdGhgIGFuZCBzdGF0dXMgaW4gYGluZGV4YCBhbmRcbiAgICAgICAgICogaW4gdGhlIGB3b3JraW5nX2RpcmAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgIHRoaXMuc3RhZ2VkID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOdW1iZXIgb2YgY29tbWl0cyBhaGVhZCBvZiB0aGUgdHJhY2tlZCBicmFuY2hcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWhlYWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICpOdW1iZXIgb2YgY29tbWl0cyBiZWhpbmQgdGhlIHRyYWNrZWQgYnJhbmNoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJlaGluZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSBjdXJyZW50IGJyYW5jaFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIGJyYW5jaCBiZWluZyB0cmFja2VkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYWNraW5nID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoaXMgU3RhdHVzU3VtbWFyeSByZXByZXNlbnRzIGEgY2xlYW4gd29ya2luZyBicmFuY2guXG4gICAgICovXG4gICAgaXNDbGVhbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmZpbGVzLmxlbmd0aDtcbiAgICB9XG59XG5leHBvcnRzLlN0YXR1c1N1bW1hcnkgPSBTdGF0dXNTdW1tYXJ5O1xudmFyIFBvcmNlbGFpbkZpbGVTdGF0dXM7XG4oZnVuY3Rpb24gKFBvcmNlbGFpbkZpbGVTdGF0dXMpIHtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiQURERURcIl0gPSBcIkFcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiREVMRVRFRFwiXSA9IFwiRFwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJNT0RJRklFRFwiXSA9IFwiTVwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJSRU5BTUVEXCJdID0gXCJSXCI7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIkNPUElFRFwiXSA9IFwiQ1wiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJVTk1FUkdFRFwiXSA9IFwiVVwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJVTlRSQUNLRURcIl0gPSBcIj9cIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiSUdOT1JFRFwiXSA9IFwiIVwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJOT05FXCJdID0gXCIgXCI7XG59KShQb3JjZWxhaW5GaWxlU3RhdHVzIHx8IChQb3JjZWxhaW5GaWxlU3RhdHVzID0ge30pKTtcbmZ1bmN0aW9uIHJlbmFtZWRGaWxlKGxpbmUpIHtcbiAgICBjb25zdCBkZXRhaWwgPSAvXiguKykgLT4gKC4rKSQvLmV4ZWMobGluZSk7XG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyb206IGxpbmUsIHRvOiBsaW5lXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGZyb206IFN0cmluZyhkZXRhaWxbMV0pLFxuICAgICAgICB0bzogU3RyaW5nKGRldGFpbFsyXSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlcihpbmRleFgsIGluZGV4WSwgaGFuZGxlcikge1xuICAgIHJldHVybiBbYCR7aW5kZXhYfSR7aW5kZXhZfWAsIGhhbmRsZXJdO1xufVxuZnVuY3Rpb24gY29uZmxpY3RzKGluZGV4WCwgLi4uaW5kZXhZKSB7XG4gICAgcmV0dXJuIGluZGV4WS5tYXAoeSA9PiBwYXJzZXIoaW5kZXhYLCB5LCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuY29uZmxpY3RlZCwgZmlsZSkpKTtcbn1cbmNvbnN0IHBhcnNlcnMgPSBuZXcgTWFwKFtcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCBQb3JjZWxhaW5GaWxlU3RhdHVzLkFEREVELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuY3JlYXRlZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmRlbGV0ZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCBQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuY3JlYXRlZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnN0YWdlZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLkFEREVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuY3JlYXRlZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnN0YWdlZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuZGVsZXRlZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnN0YWdlZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIChyZXN1bHQsIGZpbGUpID0+IHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5tb2RpZmllZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnN0YWdlZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5SRU5BTUVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIChyZXN1bHQsIGZpbGUpID0+IHtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnJlbmFtZWQsIHJlbmFtZWRGaWxlKGZpbGUpKTtcbiAgICB9KSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5SRU5BTUVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCAocmVzdWx0LCBmaWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmFtZWQgPSByZW5hbWVkRmlsZShmaWxlKTtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnJlbmFtZWQsIHJlbmFtZWQpO1xuICAgICAgICB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIHJlbmFtZWQudG8pO1xuICAgIH0pLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLlVOVFJBQ0tFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTlRSQUNLRUQsIChyZXN1bHQsIGZpbGUpID0+IHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5ub3RfYWRkZWQsIGZpbGUpKSxcbiAgICAuLi5jb25mbGljdHMoUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCksXG4gICAgLi4uY29uZmxpY3RzKFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5ERUxFVEVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLlVOTUVSR0VEKSxcbiAgICAuLi5jb25mbGljdHMoUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5ERUxFVEVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLlVOTUVSR0VEKSxcbiAgICBbJyMjJywgKHJlc3VsdCwgbGluZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWhlYWRSZWcgPSAvYWhlYWQgKFxcZCspLztcbiAgICAgICAgICAgIGNvbnN0IGJlaGluZFJlZyA9IC9iZWhpbmQgKFxcZCspLztcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZWcgPSAvXiguKz8oPz0oPzpcXC57M318XFxzfCQpKSkvO1xuICAgICAgICAgICAgY29uc3QgdHJhY2tpbmdSZWcgPSAvXFwuezN9KFxcUyopLztcbiAgICAgICAgICAgIGNvbnN0IG9uRW1wdHlCcmFuY2hSZWcgPSAvXFxzb25cXHMoW1xcU10rKSQvO1xuICAgICAgICAgICAgbGV0IHJlZ2V4UmVzdWx0O1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBhaGVhZFJlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LmFoZWFkID0gcmVnZXhSZXN1bHQgJiYgK3JlZ2V4UmVzdWx0WzFdIHx8IDA7XG4gICAgICAgICAgICByZWdleFJlc3VsdCA9IGJlaGluZFJlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LmJlaGluZCA9IHJlZ2V4UmVzdWx0ICYmICtyZWdleFJlc3VsdFsxXSB8fCAwO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBjdXJyZW50UmVnLmV4ZWMobGluZSk7XG4gICAgICAgICAgICByZXN1bHQuY3VycmVudCA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSB0cmFja2luZ1JlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LnRyYWNraW5nID0gcmVnZXhSZXN1bHQgJiYgcmVnZXhSZXN1bHRbMV07XG4gICAgICAgICAgICByZWdleFJlc3VsdCA9IG9uRW1wdHlCcmFuY2hSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC5jdXJyZW50ID0gcmVnZXhSZXN1bHQgJiYgcmVnZXhSZXN1bHRbMV0gfHwgcmVzdWx0LmN1cnJlbnQ7XG4gICAgICAgIH1dXG5dKTtcbmNvbnN0IHBhcnNlU3RhdHVzU3VtbWFyeSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3Qgc3RhdHVzID0gbmV3IFN0YXR1c1N1bW1hcnkoKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBzcGxpdExpbmUoc3RhdHVzLCBsaW5lc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG59O1xuZXhwb3J0cy5wYXJzZVN0YXR1c1N1bW1hcnkgPSBwYXJzZVN0YXR1c1N1bW1hcnk7XG5mdW5jdGlvbiBzcGxpdExpbmUocmVzdWx0LCBsaW5lU3RyKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9IGxpbmVTdHIudHJpbSgpO1xuICAgIHN3aXRjaCAoJyAnKSB7XG4gICAgICAgIGNhc2UgdHJpbW1lZC5jaGFyQXQoMik6XG4gICAgICAgICAgICByZXR1cm4gZGF0YSh0cmltbWVkLmNoYXJBdCgwKSwgdHJpbW1lZC5jaGFyQXQoMSksIHRyaW1tZWQuc3Vic3RyKDMpKTtcbiAgICAgICAgY2FzZSB0cmltbWVkLmNoYXJBdCgxKTpcbiAgICAgICAgICAgIHJldHVybiBkYXRhKFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgdHJpbW1lZC5jaGFyQXQoMCksIHRyaW1tZWQuc3Vic3RyKDIpKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGF0YShpbmRleCwgd29ya2luZ0RpciwgcGF0aCkge1xuICAgICAgICBjb25zdCByYXcgPSBgJHtpbmRleH0ke3dvcmtpbmdEaXJ9YDtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcnNlcnMuZ2V0KHJhdyk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKHJlc3VsdCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhdyAhPT0gJyMjJykge1xuICAgICAgICAgICAgcmVzdWx0LmZpbGVzLnB1c2gobmV3IEZpbGVTdGF0dXNTdW1tYXJ5XzEuRmlsZVN0YXR1c1N1bW1hcnkocGF0aCwgaW5kZXgsIHdvcmtpbmdEaXIpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YXR1c1N1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXR1c1Rhc2sgPSB2b2lkIDA7XG5jb25zdCBTdGF0dXNTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL1N0YXR1c1N1bW1hcnlcIik7XG5mdW5jdGlvbiBzdGF0dXNUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3N0YXR1cycsICctLXBvcmNlbGFpbicsICctYicsICctdScsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFN0YXR1c1N1bW1hcnlfMS5wYXJzZVN0YXR1c1N1bW1hcnkodGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5zdGF0dXNUYXNrID0gc3RhdHVzVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXR1cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2ltcGxlR2l0QXBpID0gdm9pZCAwO1xuY29uc3QgdGFza19jYWxsYmFja18xID0gcmVxdWlyZShcIi4vdGFzay1jYWxsYmFja1wiKTtcbmNvbnN0IGNoYW5nZV93b3JraW5nX2RpcmVjdG9yeV8xID0gcmVxdWlyZShcIi4vdGFza3MvY2hhbmdlLXdvcmtpbmctZGlyZWN0b3J5XCIpO1xuY29uc3QgY29uZmlnXzEgPSByZXF1aXJlKFwiLi90YXNrcy9jb25maWdcIik7XG5jb25zdCBoYXNoX29iamVjdF8xID0gcmVxdWlyZShcIi4vdGFza3MvaGFzaC1vYmplY3RcIik7XG5jb25zdCBpbml0XzEgPSByZXF1aXJlKFwiLi90YXNrcy9pbml0XCIpO1xuY29uc3QgbG9nXzEgPSByZXF1aXJlKFwiLi90YXNrcy9sb2dcIik7XG5jb25zdCBtZXJnZV8xID0gcmVxdWlyZShcIi4vdGFza3MvbWVyZ2VcIik7XG5jb25zdCBwdXNoXzEgPSByZXF1aXJlKFwiLi90YXNrcy9wdXNoXCIpO1xuY29uc3Qgc3RhdHVzXzEgPSByZXF1aXJlKFwiLi90YXNrcy9zdGF0dXNcIik7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrcy90YXNrXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuY2xhc3MgU2ltcGxlR2l0QXBpIHtcbiAgICBjb25zdHJ1Y3RvcihfZXhlY3V0b3IpIHtcbiAgICAgICAgdGhpcy5fZXhlY3V0b3IgPSBfZXhlY3V0b3I7XG4gICAgfVxuICAgIF9ydW5UYXNrKHRhc2ssIHRoZW4pIHtcbiAgICAgICAgY29uc3QgY2hhaW4gPSB0aGlzLl9leGVjdXRvci5jaGFpbigpO1xuICAgICAgICBjb25zdCBwcm9taXNlID0gY2hhaW4ucHVzaCh0YXNrKTtcbiAgICAgICAgaWYgKHRoZW4pIHtcbiAgICAgICAgICAgIHRhc2tfY2FsbGJhY2tfMS50YXNrQ2FsbGJhY2sodGFzaywgcHJvbWlzZSwgdGhlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcywge1xuICAgICAgICAgICAgdGhlbjogeyB2YWx1ZTogcHJvbWlzZS50aGVuLmJpbmQocHJvbWlzZSkgfSxcbiAgICAgICAgICAgIGNhdGNoOiB7IHZhbHVlOiBwcm9taXNlLmNhdGNoLmJpbmQocHJvbWlzZSkgfSxcbiAgICAgICAgICAgIF9leGVjdXRvcjogeyB2YWx1ZTogY2hhaW4gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZChmaWxlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ2FkZCcsIC4uLnV0aWxzXzEuYXNBcnJheShmaWxlcyldKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxuICAgIGN3ZChkaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgbmV4dCA9IHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0eXBlb2YgZGlyZWN0b3J5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soY2hhbmdlX3dvcmtpbmdfZGlyZWN0b3J5XzEuY2hhbmdlV29ya2luZ0RpcmVjdG9yeVRhc2soZGlyZWN0b3J5LCB0aGlzLl9leGVjdXRvciksIG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKGRpcmVjdG9yeSA9PT0gbnVsbCB8fCBkaXJlY3RvcnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpcmVjdG9yeS5wYXRoKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGNoYW5nZV93b3JraW5nX2RpcmVjdG9yeV8xLmNoYW5nZVdvcmtpbmdEaXJlY3RvcnlUYXNrKGRpcmVjdG9yeS5wYXRoLCBkaXJlY3Rvcnkucm9vdCAmJiB0aGlzLl9leGVjdXRvciB8fCB1bmRlZmluZWQpLCBuZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzaygnR2l0LmN3ZDogd29ya2luZ0RpcmVjdG9yeSBtdXN0IGJlIHN1cHBsaWVkIGFzIGEgc3RyaW5nJyksIG5leHQpO1xuICAgIH1cbiAgICBoYXNoT2JqZWN0KHBhdGgsIHdyaXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGhhc2hfb2JqZWN0XzEuaGFzaE9iamVjdFRhc2socGF0aCwgd3JpdGUgPT09IHRydWUpLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICB9XG4gICAgaW5pdChiYXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGluaXRfMS5pbml0VGFzayhiYXJlID09PSB0cnVlLCB0aGlzLl9leGVjdXRvci5jd2QsIHV0aWxzXzEuZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICB9XG4gICAgbWVyZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKG1lcmdlXzEubWVyZ2VUYXNrKHV0aWxzXzEuZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICB9XG4gICAgbWVyZ2VGcm9tVG8ocmVtb3RlLCBicmFuY2gpIHtcbiAgICAgICAgaWYgKCEodXRpbHNfMS5maWx0ZXJTdHJpbmcocmVtb3RlKSAmJiB1dGlsc18xLmZpbHRlclN0cmluZyhicmFuY2gpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFza18xLmNvbmZpZ3VyYXRpb25FcnJvclRhc2soYEdpdC5tZXJnZUZyb21UbyByZXF1aXJlcyB0aGF0IHRoZSAncmVtb3RlJyBhbmQgJ2JyYW5jaCcgYXJndW1lbnRzIGFyZSBzdXBwbGllZCBhcyBzdHJpbmdzYCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKG1lcmdlXzEubWVyZ2VUYXNrKFtyZW1vdGUsIGJyYW5jaCwgLi4udXRpbHNfMS5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKV0pLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMsIGZhbHNlKSk7XG4gICAgfVxuICAgIG91dHB1dEhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9leGVjdXRvci5vdXRwdXRIYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1c2goKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwdXNoXzEucHVzaFRhc2soe1xuICAgICAgICAgICAgcmVtb3RlOiB1dGlsc18xLmZpbHRlclR5cGUoYXJndW1lbnRzWzBdLCB1dGlsc18xLmZpbHRlclN0cmluZyksXG4gICAgICAgICAgICBicmFuY2g6IHV0aWxzXzEuZmlsdGVyVHlwZShhcmd1bWVudHNbMV0sIHV0aWxzXzEuZmlsdGVyU3RyaW5nKSxcbiAgICAgICAgfSwgdXRpbHNfMS5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBzdGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydzdGFzaCcsIC4uLnV0aWxzXzEuZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyldKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxuICAgIHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soc3RhdHVzXzEuc3RhdHVzVGFzayh1dGlsc18xLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxufVxuZXhwb3J0cy5TaW1wbGVHaXRBcGkgPSBTaW1wbGVHaXRBcGk7XG5PYmplY3QuYXNzaWduKFNpbXBsZUdpdEFwaS5wcm90b3R5cGUsIGNvbmZpZ18xLmRlZmF1bHQoKSwgbG9nXzEuZGVmYXVsdCgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZS1naXQtYXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVEZWZlcnJlZCA9IGV4cG9ydHMuZGVmZXJyZWQgPSB2b2lkIDA7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYERlZmVycmVkUHJvbWlzZWBcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gaW1wb3J0IHtkZWZlcnJlZH0gZnJvbSAnQGt3c2l0ZXMvcHJvbWlzZS1kZWZlcnJlZGA7XG4gYGBgXG4gKi9cbmZ1bmN0aW9uIGRlZmVycmVkKCkge1xuICAgIGxldCBkb25lO1xuICAgIGxldCBmYWlsO1xuICAgIGxldCBzdGF0dXMgPSAncGVuZGluZyc7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChfZG9uZSwgX2ZhaWwpID0+IHtcbiAgICAgICAgZG9uZSA9IF9kb25lO1xuICAgICAgICBmYWlsID0gX2ZhaWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgZG9uZShyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdyZXNvbHZlZCc7XG4gICAgICAgICAgICAgICAgZG9uZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAncmVqZWN0ZWQnO1xuICAgICAgICAgICAgICAgIGZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXQgZnVsZmlsbGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cyAhPT0gJ3BlbmRpbmcnO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZlcnJlZCA9IGRlZmVycmVkO1xuLyoqXG4gKiBBbGlhcyBvZiB0aGUgZXhwb3J0ZWQgYGRlZmVycmVkYCBmdW5jdGlvbiwgdG8gaGVscCBjb25zdW1lcnMgd2FudGluZyB0byB1c2UgYGRlZmVycmVkYCBhcyB0aGVcbiAqIGxvY2FsIHZhcmlhYmxlIG5hbWUgcmF0aGVyIHRoYW4gdGhlIGZhY3RvcnkgaW1wb3J0IG5hbWUsIHdpdGhvdXQgbmVlZGluZyB0byByZW5hbWUgb24gaW1wb3J0LlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQge2NyZWF0ZURlZmVycmVkfSBmcm9tICdAa3dzaXRlcy9wcm9taXNlLWRlZmVycmVkYDtcbiBgYGBcbiAqL1xuZXhwb3J0cy5jcmVhdGVEZWZlcnJlZCA9IGRlZmVycmVkO1xuLyoqXG4gKiBEZWZhdWx0IGV4cG9ydCBhbGxvd3MgdXNlIGFzOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQgZGVmZXJyZWQgZnJvbSAnQGt3c2l0ZXMvcHJvbWlzZS1kZWZlcnJlZGA7XG4gYGBgXG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmVycmVkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNjaGVkdWxlciA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwcm9taXNlX2RlZmVycmVkXzEgPSByZXF1aXJlKFwiQGt3c2l0ZXMvcHJvbWlzZS1kZWZlcnJlZFwiKTtcbmNvbnN0IGdpdF9sb2dnZXJfMSA9IHJlcXVpcmUoXCIuLi9naXQtbG9nZ2VyXCIpO1xuY29uc3QgY3JlYXRlU2NoZWR1bGVkVGFzayA9ICgoKSA9PiB7XG4gICAgbGV0IGlkID0gMDtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZCsrO1xuICAgICAgICBjb25zdCB7IHByb21pc2UsIGRvbmUgfSA9IHByb21pc2VfZGVmZXJyZWRfMS5jcmVhdGVEZWZlcnJlZCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgICAgIGRvbmUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgfTtcbiAgICB9O1xufSkoKTtcbmNsYXNzIFNjaGVkdWxlciB7XG4gICAgY29uc3RydWN0b3IoY29uY3VycmVuY3kgPSAyKSB7XG4gICAgICAgIHRoaXMuY29uY3VycmVuY3kgPSBjb25jdXJyZW5jeTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBnaXRfbG9nZ2VyXzEuY3JlYXRlTG9nZ2VyKCcnLCAnc2NoZWR1bGVyJyk7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IFtdO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBbXTtcbiAgICAgICAgdGhpcy5sb2dnZXIoYENvbnN0cnVjdGVkLCBjb25jdXJyZW5jeT0lc2AsIGNvbmN1cnJlbmN5KTtcbiAgICB9XG4gICAgc2NoZWR1bGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wZW5kaW5nLmxlbmd0aCB8fCB0aGlzLnJ1bm5pbmcubGVuZ3RoID49IHRoaXMuY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyKGBTY2hlZHVsZSBhdHRlbXB0IGlnbm9yZWQsIHBlbmRpbmc9JXMgcnVubmluZz0lcyBjb25jdXJyZW5jeT0lc2AsIHRoaXMucGVuZGluZy5sZW5ndGgsIHRoaXMucnVubmluZy5sZW5ndGgsIHRoaXMuY29uY3VycmVuY3kpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2sgPSB1dGlsc18xLmFwcGVuZCh0aGlzLnJ1bm5pbmcsIHRoaXMucGVuZGluZy5zaGlmdCgpKTtcbiAgICAgICAgdGhpcy5sb2dnZXIoYEF0dGVtcHRpbmcgaWQ9JXNgLCB0YXNrLmlkKTtcbiAgICAgICAgdGFzay5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyKGBDb21wbGV0aW5nIGlkPWAsIHRhc2suaWQpO1xuICAgICAgICAgICAgdXRpbHNfMS5yZW1vdmUodGhpcy5ydW5uaW5nLCB0YXNrKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvbWlzZSwgaWQgfSA9IHV0aWxzXzEuYXBwZW5kKHRoaXMucGVuZGluZywgY3JlYXRlU2NoZWR1bGVkVGFzaygpKTtcbiAgICAgICAgdGhpcy5sb2dnZXIoYFNjaGVkdWxpbmcgaWQ9JXNgLCBpZCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufVxuZXhwb3J0cy5TY2hlZHVsZXIgPSBTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFwcGx5UGF0Y2hUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmZ1bmN0aW9uIGFwcGx5UGF0Y2hUYXNrKHBhdGNoZXMsIGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydhcHBseScsIC4uLmN1c3RvbUFyZ3MsIC4uLnBhdGNoZXNdKTtcbn1cbmV4cG9ydHMuYXBwbHlQYXRjaFRhc2sgPSBhcHBseVBhdGNoVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcGx5LXBhdGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1NpbmdsZUJyYW5jaERlbGV0ZUZhaWx1cmUgPSBleHBvcnRzLmJyYW5jaERlbGV0aW9uRmFpbHVyZSA9IGV4cG9ydHMuYnJhbmNoRGVsZXRpb25TdWNjZXNzID0gZXhwb3J0cy5CcmFuY2hEZWxldGlvbkJhdGNoID0gdm9pZCAwO1xuY2xhc3MgQnJhbmNoRGVsZXRpb25CYXRjaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWxsID0gW107XG4gICAgICAgIHRoaXMuYnJhbmNoZXMgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB9XG4gICAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5lcnJvcnMubGVuZ3RoO1xuICAgIH1cbn1cbmV4cG9ydHMuQnJhbmNoRGVsZXRpb25CYXRjaCA9IEJyYW5jaERlbGV0aW9uQmF0Y2g7XG5mdW5jdGlvbiBicmFuY2hEZWxldGlvblN1Y2Nlc3MoYnJhbmNoLCBoYXNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnJhbmNoLCBoYXNoLCBzdWNjZXNzOiB0cnVlLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaERlbGV0aW9uU3VjY2VzcyA9IGJyYW5jaERlbGV0aW9uU3VjY2VzcztcbmZ1bmN0aW9uIGJyYW5jaERlbGV0aW9uRmFpbHVyZShicmFuY2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBicmFuY2gsIGhhc2g6IG51bGwsIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaERlbGV0aW9uRmFpbHVyZSA9IGJyYW5jaERlbGV0aW9uRmFpbHVyZTtcbmZ1bmN0aW9uIGlzU2luZ2xlQnJhbmNoRGVsZXRlRmFpbHVyZSh0ZXN0KSB7XG4gICAgcmV0dXJuIHRlc3Quc3VjY2Vzcztcbn1cbmV4cG9ydHMuaXNTaW5nbGVCcmFuY2hEZWxldGVGYWlsdXJlID0gaXNTaW5nbGVCcmFuY2hEZWxldGVGYWlsdXJlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnJhbmNoRGVsZXRlU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzQnJhbmNoRGVsZXRpb25FcnJvciA9IGV4cG9ydHMucGFyc2VCcmFuY2hEZWxldGlvbnMgPSB2b2lkIDA7XG5jb25zdCBCcmFuY2hEZWxldGVTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0JyYW5jaERlbGV0ZVN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgZGVsZXRlU3VjY2Vzc1JlZ2V4ID0gLyhcXFMrKVxccytcXChcXFMrXFxzKFteKV0rKVxcKS87XG5jb25zdCBkZWxldGVFcnJvclJlZ2V4ID0gL15lcnJvclteJ10rJyhbXiddKyknL207XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoZGVsZXRlU3VjY2Vzc1JlZ2V4LCAocmVzdWx0LCBbYnJhbmNoLCBoYXNoXSkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGlvbiA9IEJyYW5jaERlbGV0ZVN1bW1hcnlfMS5icmFuY2hEZWxldGlvblN1Y2Nlc3MoYnJhbmNoLCBoYXNoKTtcbiAgICAgICAgcmVzdWx0LmFsbC5wdXNoKGRlbGV0aW9uKTtcbiAgICAgICAgcmVzdWx0LmJyYW5jaGVzW2JyYW5jaF0gPSBkZWxldGlvbjtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKGRlbGV0ZUVycm9yUmVnZXgsIChyZXN1bHQsIFticmFuY2hdKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uID0gQnJhbmNoRGVsZXRlU3VtbWFyeV8xLmJyYW5jaERlbGV0aW9uRmFpbHVyZShicmFuY2gpO1xuICAgICAgICByZXN1bHQuZXJyb3JzLnB1c2goZGVsZXRpb24pO1xuICAgICAgICByZXN1bHQuYWxsLnB1c2goZGVsZXRpb24pO1xuICAgICAgICByZXN1bHQuYnJhbmNoZXNbYnJhbmNoXSA9IGRlbGV0aW9uO1xuICAgIH0pLFxuXTtcbmNvbnN0IHBhcnNlQnJhbmNoRGVsZXRpb25zID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgQnJhbmNoRGVsZXRlU3VtbWFyeV8xLkJyYW5jaERlbGV0aW9uQmF0Y2goKSwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufTtcbmV4cG9ydHMucGFyc2VCcmFuY2hEZWxldGlvbnMgPSBwYXJzZUJyYW5jaERlbGV0aW9ucztcbmZ1bmN0aW9uIGhhc0JyYW5jaERlbGV0aW9uRXJyb3IoZGF0YSwgcHJvY2Vzc0V4aXRDb2RlKSB7XG4gICAgcmV0dXJuIHByb2Nlc3NFeGl0Q29kZSA9PT0gdXRpbHNfMS5FeGl0Q29kZXMuRVJST1IgJiYgZGVsZXRlRXJyb3JSZWdleC50ZXN0KGRhdGEpO1xufVxuZXhwb3J0cy5oYXNCcmFuY2hEZWxldGlvbkVycm9yID0gaGFzQnJhbmNoRGVsZXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWJyYW5jaC1kZWxldGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJyYW5jaFN1bW1hcnlSZXN1bHQgPSB2b2lkIDA7XG5jbGFzcyBCcmFuY2hTdW1tYXJ5UmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbGwgPSBbXTtcbiAgICAgICAgdGhpcy5icmFuY2hlcyA9IHt9O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAnJztcbiAgICAgICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBwdXNoKGN1cnJlbnQsIGRldGFjaGVkLCBuYW1lLCBjb21taXQsIGxhYmVsKSB7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRldGFjaGVkID0gZGV0YWNoZWQ7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxsLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuYnJhbmNoZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGNvbW1pdDogY29tbWl0LFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5CcmFuY2hTdW1tYXJ5UmVzdWx0ID0gQnJhbmNoU3VtbWFyeVJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJyYW5jaFN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQnJhbmNoU3VtbWFyeSA9IHZvaWQgMDtcbmNvbnN0IEJyYW5jaFN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQnJhbmNoU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL14oXFwqXFxzKT9cXCgoPzpIRUFEICk/ZGV0YWNoZWQgKD86ZnJvbXxhdCkgKFxcUyspXFwpXFxzKyhbYS16MC05XSspXFxzKC4qKSQvLCAocmVzdWx0LCBbY3VycmVudCwgbmFtZSwgY29tbWl0LCBsYWJlbF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2goISFjdXJyZW50LCB0cnVlLCBuYW1lLCBjb21taXQsIGxhYmVsKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eKFxcKlxccyk/KFxcUyspXFxzKyhbYS16MC05XSspXFxzKC4qKSQvcywgKHJlc3VsdCwgW2N1cnJlbnQsIG5hbWUsIGNvbW1pdCwgbGFiZWxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoKCEhY3VycmVudCwgZmFsc2UsIG5hbWUsIGNvbW1pdCwgbGFiZWwpO1xuICAgIH0pXG5dO1xuZnVuY3Rpb24gcGFyc2VCcmFuY2hTdW1tYXJ5KHN0ZE91dCkge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IEJyYW5jaFN1bW1hcnlfMS5CcmFuY2hTdW1tYXJ5UmVzdWx0KCksIHBhcnNlcnMsIHN0ZE91dCk7XG59XG5leHBvcnRzLnBhcnNlQnJhbmNoU3VtbWFyeSA9IHBhcnNlQnJhbmNoU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWJyYW5jaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVsZXRlQnJhbmNoVGFzayA9IGV4cG9ydHMuZGVsZXRlQnJhbmNoZXNUYXNrID0gZXhwb3J0cy5icmFuY2hMb2NhbFRhc2sgPSBleHBvcnRzLmJyYW5jaFRhc2sgPSBleHBvcnRzLmNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZCA9IHZvaWQgMDtcbmNvbnN0IGdpdF9yZXNwb25zZV9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3JcIik7XG5jb25zdCBwYXJzZV9icmFuY2hfZGVsZXRlXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1icmFuY2gtZGVsZXRlXCIpO1xuY29uc3QgcGFyc2VfYnJhbmNoXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1icmFuY2hcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kKGNvbW1hbmRzKSB7XG4gICAgY29uc3QgZGVsZXRlQ29tbWFuZHMgPSBbJy1kJywgJy1EJywgJy0tZGVsZXRlJ107XG4gICAgcmV0dXJuIGNvbW1hbmRzLnNvbWUoY29tbWFuZCA9PiBkZWxldGVDb21tYW5kcy5pbmNsdWRlcyhjb21tYW5kKSk7XG59XG5leHBvcnRzLmNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZCA9IGNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZDtcbmZ1bmN0aW9uIGJyYW5jaFRhc2soY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGlzRGVsZXRlID0gY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kKGN1c3RvbUFyZ3MpO1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydicmFuY2gnLCAuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goJy1hJyk7XG4gICAgfVxuICAgIGlmICghY29tbWFuZHMuaW5jbHVkZXMoJy12JykpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsICctdicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBwYXJzZXIoc3RkT3V0LCBzdGRFcnIpIHtcbiAgICAgICAgICAgIGlmIChpc0RlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfZGVsZXRlXzEucGFyc2VCcmFuY2hEZWxldGlvbnMoc3RkT3V0LCBzdGRFcnIpLmFsbFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfMS5wYXJzZUJyYW5jaFN1bW1hcnkoc3RkT3V0KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5icmFuY2hUYXNrID0gYnJhbmNoVGFzaztcbmZ1bmN0aW9uIGJyYW5jaExvY2FsVGFzaygpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZV9icmFuY2hfMS5wYXJzZUJyYW5jaFN1bW1hcnk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWydicmFuY2gnLCAnLXYnXSxcbiAgICAgICAgcGFyc2VyLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaExvY2FsVGFzayA9IGJyYW5jaExvY2FsVGFzaztcbmZ1bmN0aW9uIGRlbGV0ZUJyYW5jaGVzVGFzayhicmFuY2hlcywgZm9yY2VEZWxldGUgPSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHM6IFsnYnJhbmNoJywgJy12JywgZm9yY2VEZWxldGUgPyAnLUQnIDogJy1kJywgLi4uYnJhbmNoZXNdLFxuICAgICAgICBwYXJzZXIoc3RkT3V0LCBzdGRFcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfZGVsZXRlXzEucGFyc2VCcmFuY2hEZWxldGlvbnMoc3RkT3V0LCBzdGRFcnIpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yKHsgZXhpdENvZGUsIHN0ZE91dCB9LCBlcnJvciwgZG9uZSwgZmFpbCkge1xuICAgICAgICAgICAgaWYgKCFwYXJzZV9icmFuY2hfZGVsZXRlXzEuaGFzQnJhbmNoRGVsZXRpb25FcnJvcihTdHJpbmcoZXJyb3IpLCBleGl0Q29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lKHN0ZE91dCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVsZXRlQnJhbmNoZXNUYXNrID0gZGVsZXRlQnJhbmNoZXNUYXNrO1xuZnVuY3Rpb24gZGVsZXRlQnJhbmNoVGFzayhicmFuY2gsIGZvcmNlRGVsZXRlID0gZmFsc2UpIHtcbiAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ2JyYW5jaCcsICctdicsIGZvcmNlRGVsZXRlID8gJy1EJyA6ICctZCcsIGJyYW5jaF0sXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF9kZWxldGVfMS5wYXJzZUJyYW5jaERlbGV0aW9ucyhzdGRPdXQsIHN0ZEVycikuYnJhbmNoZXNbYnJhbmNoXTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcih7IGV4aXRDb2RlLCBzdGRFcnIsIHN0ZE91dCB9LCBlcnJvciwgXywgZmFpbCkge1xuICAgICAgICAgICAgaWYgKCFwYXJzZV9icmFuY2hfZGVsZXRlXzEuaGFzQnJhbmNoRGVsZXRpb25FcnJvcihTdHJpbmcoZXJyb3IpLCBleGl0Q29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEuR2l0UmVzcG9uc2VFcnJvcih0YXNrLnBhcnNlcih1dGlsc18xLmJ1ZmZlclRvU3RyaW5nKHN0ZE91dCksIHV0aWxzXzEuYnVmZmVyVG9TdHJpbmcoc3RkRXJyKSksIFN0cmluZyhlcnJvcikpO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHRhc2s7XG59XG5leHBvcnRzLmRlbGV0ZUJyYW5jaFRhc2sgPSBkZWxldGVCcmFuY2hUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJhbmNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZUNoZWNrSWdub3JlID0gdm9pZCAwO1xuLyoqXG4gKiBQYXJzZXIgZm9yIHRoZSBgY2hlY2staWdub3JlYCBjb21tYW5kIC0gcmV0dXJucyBlYWNoIGZpbGUgYXMgYSBzdHJpbmcgYXJyYXlcbiAqL1xuY29uc3QgcGFyc2VDaGVja0lnbm9yZSA9ICh0ZXh0KSA9PiB7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoL1xcbi9nKVxuICAgICAgICAubWFwKGxpbmUgPT4gbGluZS50cmltKCkpXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiAhIWZpbGUpO1xufTtcbmV4cG9ydHMucGFyc2VDaGVja0lnbm9yZSA9IHBhcnNlQ2hlY2tJZ25vcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGVja0lnbm9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2hlY2tJZ25vcmVUYXNrID0gdm9pZCAwO1xuY29uc3QgQ2hlY2tJZ25vcmVfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQ2hlY2tJZ25vcmVcIik7XG5mdW5jdGlvbiBjaGVja0lnbm9yZVRhc2socGF0aHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydjaGVjay1pZ25vcmUnLCAuLi5wYXRoc10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBDaGVja0lnbm9yZV8xLnBhcnNlQ2hlY2tJZ25vcmUsXG4gICAgfTtcbn1cbmV4cG9ydHMuY2hlY2tJZ25vcmVUYXNrID0gY2hlY2tJZ25vcmVUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hlY2staWdub3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbG9uZU1pcnJvclRhc2sgPSBleHBvcnRzLmNsb25lVGFzayA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gY2xvbmVUYXNrKHJlcG8sIGRpcmVjdG9yeSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjbG9uZScsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmICh0eXBlb2YgcmVwbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChyZXBvKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXJlY3RvcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goZGlyZWN0b3J5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKTtcbn1cbmV4cG9ydHMuY2xvbmVUYXNrID0gY2xvbmVUYXNrO1xuZnVuY3Rpb24gY2xvbmVNaXJyb3JUYXNrKHJlcG8sIGRpcmVjdG9yeSwgY3VzdG9tQXJncykge1xuICAgIHV0aWxzXzEuYXBwZW5kKGN1c3RvbUFyZ3MsICctLW1pcnJvcicpO1xuICAgIHJldHVybiBjbG9uZVRhc2socmVwbywgZGlyZWN0b3J5LCBjdXN0b21BcmdzKTtcbn1cbmV4cG9ydHMuY2xvbmVNaXJyb3JUYXNrID0gY2xvbmVNaXJyb3JUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xvbmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQ29tbWl0UmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXlxcWyhbXlxcc10rKSggXFwoW14pXStcXCkpPyAoW15cXF1dKykvLCAocmVzdWx0LCBbYnJhbmNoLCByb290LCBjb21taXRdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5icmFuY2ggPSBicmFuY2g7XG4gICAgICAgIHJlc3VsdC5jb21taXQgPSBjb21taXQ7XG4gICAgICAgIHJlc3VsdC5yb290ID0gISFyb290O1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL1xccypBdXRob3I6XFxzKC4rKS9pLCAocmVzdWx0LCBbYXV0aG9yXSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGF1dGhvci5zcGxpdCgnPCcpO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHBhcnRzLnBvcCgpO1xuICAgICAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF1dGhvciA9IHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbC5zdWJzdHIoMCwgZW1haWwubGVuZ3RoIC0gMSksXG4gICAgICAgICAgICBuYW1lOiBwYXJ0cy5qb2luKCc8JykudHJpbSgpXG4gICAgICAgIH07XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvKFxcZCspW14sXSooPzosXFxzKihcXGQrKVteLF0qKSg/OixcXHMqKFxcZCspKS9nLCAocmVzdWx0LCBbY2hhbmdlcywgaW5zZXJ0aW9ucywgZGVsZXRpb25zXSkgPT4ge1xuICAgICAgICByZXN1bHQuc3VtbWFyeS5jaGFuZ2VzID0gcGFyc2VJbnQoY2hhbmdlcywgMTApIHx8IDA7XG4gICAgICAgIHJlc3VsdC5zdW1tYXJ5Lmluc2VydGlvbnMgPSBwYXJzZUludChpbnNlcnRpb25zLCAxMCkgfHwgMDtcbiAgICAgICAgcmVzdWx0LnN1bW1hcnkuZGVsZXRpb25zID0gcGFyc2VJbnQoZGVsZXRpb25zLCAxMCkgfHwgMDtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eKFxcZCspW14sXSooPzosXFxzKihcXGQrKVteKF0rXFwoKFsrLV0pKT8vLCAocmVzdWx0LCBbY2hhbmdlcywgbGluZXMsIGRpcmVjdGlvbl0pID0+IHtcbiAgICAgICAgcmVzdWx0LnN1bW1hcnkuY2hhbmdlcyA9IHBhcnNlSW50KGNoYW5nZXMsIDEwKSB8fCAwO1xuICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KGxpbmVzLCAxMCkgfHwgMDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5kZWxldGlvbnMgPSBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICcrJykge1xuICAgICAgICAgICAgcmVzdWx0LnN1bW1hcnkuaW5zZXJ0aW9ucyA9IGNvdW50O1xuICAgICAgICB9XG4gICAgfSksXG5dO1xuZnVuY3Rpb24gcGFyc2VDb21taXRSZXN1bHQoc3RkT3V0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBhdXRob3I6IG51bGwsXG4gICAgICAgIGJyYW5jaDogJycsXG4gICAgICAgIGNvbW1pdDogJycsXG4gICAgICAgIHJvb3Q6IGZhbHNlLFxuICAgICAgICBzdW1tYXJ5OiB7XG4gICAgICAgICAgICBjaGFuZ2VzOiAwLFxuICAgICAgICAgICAgaW5zZXJ0aW9uczogMCxcbiAgICAgICAgICAgIGRlbGV0aW9uczogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UocmVzdWx0LCBwYXJzZXJzLCBzdGRPdXQpO1xufVxuZXhwb3J0cy5wYXJzZUNvbW1pdFJlc3VsdCA9IHBhcnNlQ29tbWl0UmVzdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtY29tbWl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb21taXRUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfY29tbWl0XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1jb21taXRcIik7XG5mdW5jdGlvbiBjb21taXRUYXNrKG1lc3NhZ2UsIGZpbGVzLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2NvbW1pdCddO1xuICAgIG1lc3NhZ2UuZm9yRWFjaCgobSkgPT4gY29tbWFuZHMucHVzaCgnLW0nLCBtKSk7XG4gICAgY29tbWFuZHMucHVzaCguLi5maWxlcywgLi4uY3VzdG9tQXJncyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9jb21taXRfMS5wYXJzZUNvbW1pdFJlc3VsdCxcbiAgICB9O1xufVxuZXhwb3J0cy5jb21taXRUYXNrID0gY29tbWl0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1pdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGlmZlN1bW1hcnlUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfZGlmZl9zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1kaWZmLXN1bW1hcnlcIik7XG5mdW5jdGlvbiBkaWZmU3VtbWFyeVRhc2soY3VzdG9tQXJncykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ2RpZmYnLCAnLS1zdGF0PTQwOTYnLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIoc3RkT3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VfZGlmZl9zdW1tYXJ5XzEucGFyc2VEaWZmUmVzdWx0KHN0ZE91dCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5kaWZmU3VtbWFyeVRhc2sgPSBkaWZmU3VtbWFyeVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaWZmLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZUZldGNoUmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvRnJvbSAoLispJC8sIChyZXN1bHQsIFtyZW1vdGVdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZW1vdGUgPSByZW1vdGU7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXFwqIFxcW25ldyBicmFuY2hdXFxzKyhcXFMrKVxccyotPiAoLispJC8sIChyZXN1bHQsIFtuYW1lLCB0cmFja2luZ10pID0+IHtcbiAgICAgICAgcmVzdWx0LmJyYW5jaGVzLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRyYWNraW5nLFxuICAgICAgICB9KTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9cXCogXFxbbmV3IHRhZ11cXHMrKFxcUyspXFxzKi0+ICguKykkLywgKHJlc3VsdCwgW25hbWUsIHRyYWNraW5nXSkgPT4ge1xuICAgICAgICByZXN1bHQudGFncy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0cmFja2luZyxcbiAgICAgICAgfSk7XG4gICAgfSlcbl07XG5mdW5jdGlvbiBwYXJzZUZldGNoUmVzdWx0KHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICByYXc6IHN0ZE91dCxcbiAgICAgICAgcmVtb3RlOiBudWxsLFxuICAgICAgICBicmFuY2hlczogW10sXG4gICAgICAgIHRhZ3M6IFtdLFxuICAgIH07XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShyZXN1bHQsIHBhcnNlcnMsIHN0ZE91dCwgc3RkRXJyKTtcbn1cbmV4cG9ydHMucGFyc2VGZXRjaFJlc3VsdCA9IHBhcnNlRmV0Y2hSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1mZXRjaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfZmV0Y2hfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWZldGNoXCIpO1xuZnVuY3Rpb24gZmV0Y2hUYXNrKHJlbW90ZSwgYnJhbmNoLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2ZldGNoJywgLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKHJlbW90ZSAmJiBicmFuY2gpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChyZW1vdGUsIGJyYW5jaCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcjogcGFyc2VfZmV0Y2hfMS5wYXJzZUZldGNoUmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLmZldGNoVGFzayA9IGZldGNoVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZldGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZU1vdmVSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eUmVuYW1pbmcgKC4rKSB0byAoLispJC8sIChyZXN1bHQsIFtmcm9tLCB0b10pID0+IHtcbiAgICAgICAgcmVzdWx0Lm1vdmVzLnB1c2goeyBmcm9tLCB0byB9KTtcbiAgICB9KSxcbl07XG5mdW5jdGlvbiBwYXJzZU1vdmVSZXN1bHQoc3RkT3V0KSB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZSh7IG1vdmVzOiBbXSB9LCBwYXJzZXJzLCBzdGRPdXQpO1xufVxuZXhwb3J0cy5wYXJzZU1vdmVSZXN1bHQgPSBwYXJzZU1vdmVSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1tb3ZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tb3ZlVGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX21vdmVfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLW1vdmVcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gbW92ZVRhc2soZnJvbSwgdG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydtdicsICctdicsIC4uLnV0aWxzXzEuYXNBcnJheShmcm9tKSwgdG9dLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcjogcGFyc2VfbW92ZV8xLnBhcnNlTW92ZVJlc3VsdCxcbiAgICB9O1xufVxuZXhwb3J0cy5tb3ZlVGFzayA9IG1vdmVUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW92ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHVsbFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9wdWxsXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1wdWxsXCIpO1xuZnVuY3Rpb24gcHVsbFRhc2socmVtb3RlLCBicmFuY2gsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncHVsbCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChyZW1vdGUgJiYgYnJhbmNoKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCByZW1vdGUsIGJyYW5jaCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX3B1bGxfMS5wYXJzZVB1bGxSZXN1bHQoc3RkT3V0LCBzdGRFcnIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMucHVsbFRhc2sgPSBwdWxsVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1bGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UgPSBleHBvcnRzLnBhcnNlR2V0UmVtb3RlcyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBwYXJzZUdldFJlbW90ZXModGV4dCkge1xuICAgIGNvbnN0IHJlbW90ZXMgPSB7fTtcbiAgICBmb3JFYWNoKHRleHQsIChbbmFtZV0pID0+IHJlbW90ZXNbbmFtZV0gPSB7IG5hbWUgfSk7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVtb3Rlcyk7XG59XG5leHBvcnRzLnBhcnNlR2V0UmVtb3RlcyA9IHBhcnNlR2V0UmVtb3RlcztcbmZ1bmN0aW9uIHBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UodGV4dCkge1xuICAgIGNvbnN0IHJlbW90ZXMgPSB7fTtcbiAgICBmb3JFYWNoKHRleHQsIChbbmFtZSwgdXJsLCBwdXJwb3NlXSkgPT4ge1xuICAgICAgICBpZiAoIXJlbW90ZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJlbW90ZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICByZWZzOiB7IGZldGNoOiAnJywgcHVzaDogJycgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHB1cnBvc2UgJiYgdXJsKSB7XG4gICAgICAgICAgICByZW1vdGVzW25hbWVdLnJlZnNbcHVycG9zZS5yZXBsYWNlKC9bXmEtel0vZywgJycpXSA9IHVybDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlbW90ZXMpO1xufVxuZXhwb3J0cy5wYXJzZUdldFJlbW90ZXNWZXJib3NlID0gcGFyc2VHZXRSZW1vdGVzVmVyYm9zZTtcbmZ1bmN0aW9uIGZvckVhY2godGV4dCwgaGFuZGxlcikge1xuICAgIHV0aWxzXzEuZm9yRWFjaExpbmVXaXRoQ29udGVudCh0ZXh0LCAobGluZSkgPT4gaGFuZGxlcihsaW5lLnNwbGl0KC9cXHMrLykpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUdldFJlbW90ZVN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbW92ZVJlbW90ZVRhc2sgPSBleHBvcnRzLnJlbW90ZVRhc2sgPSBleHBvcnRzLmxpc3RSZW1vdGVzVGFzayA9IGV4cG9ydHMuZ2V0UmVtb3Rlc1Rhc2sgPSBleHBvcnRzLmFkZFJlbW90ZVRhc2sgPSB2b2lkIDA7XG5jb25zdCBHZXRSZW1vdGVTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0dldFJlbW90ZVN1bW1hcnlcIik7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrXCIpO1xuZnVuY3Rpb24gYWRkUmVtb3RlVGFzayhyZW1vdGVOYW1lLCByZW1vdGVSZXBvLCBjdXN0b21BcmdzID0gW10pIHtcbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydyZW1vdGUnLCAnYWRkJywgLi4uY3VzdG9tQXJncywgcmVtb3RlTmFtZSwgcmVtb3RlUmVwb10pO1xufVxuZXhwb3J0cy5hZGRSZW1vdGVUYXNrID0gYWRkUmVtb3RlVGFzaztcbmZ1bmN0aW9uIGdldFJlbW90ZXNUYXNrKHZlcmJvc2UpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmVtb3RlJ107XG4gICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaCgnLXYnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiB2ZXJib3NlID8gR2V0UmVtb3RlU3VtbWFyeV8xLnBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UgOiBHZXRSZW1vdGVTdW1tYXJ5XzEucGFyc2VHZXRSZW1vdGVzLFxuICAgIH07XG59XG5leHBvcnRzLmdldFJlbW90ZXNUYXNrID0gZ2V0UmVtb3Rlc1Rhc2s7XG5mdW5jdGlvbiBsaXN0UmVtb3Rlc1Rhc2soY3VzdG9tQXJncyA9IFtdKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKGNvbW1hbmRzWzBdICE9PSAnbHMtcmVtb3RlJykge1xuICAgICAgICBjb21tYW5kcy51bnNoaWZ0KCdscy1yZW1vdGUnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKTtcbn1cbmV4cG9ydHMubGlzdFJlbW90ZXNUYXNrID0gbGlzdFJlbW90ZXNUYXNrO1xuZnVuY3Rpb24gcmVtb3RlVGFzayhjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHNbMF0gIT09ICdyZW1vdGUnKSB7XG4gICAgICAgIGNvbW1hbmRzLnVuc2hpZnQoJ3JlbW90ZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5yZW1vdGVUYXNrID0gcmVtb3RlVGFzaztcbmZ1bmN0aW9uIHJlbW92ZVJlbW90ZVRhc2socmVtb3RlTmFtZSkge1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JlbW90ZScsICdyZW1vdmUnLCByZW1vdGVOYW1lXSk7XG59XG5leHBvcnRzLnJlbW92ZVJlbW90ZVRhc2sgPSByZW1vdmVSZW1vdGVUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVtb3RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdGFzaExpc3RUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtbGlzdC1sb2ctc3VtbWFyeVwiKTtcbmNvbnN0IGxvZ18xID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuZnVuY3Rpb24gc3Rhc2hMaXN0VGFzayhvcHQgPSB7fSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBsb2dfMS5wYXJzZUxvZ09wdGlvbnMob3B0KTtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEuY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIob3B0aW9ucy5zcGxpdHRlciwgb3B0aW9ucy5maWVsZHMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ3N0YXNoJywgJ2xpc3QnLCAuLi5vcHRpb25zLmNvbW1hbmRzLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIsXG4gICAgfTtcbn1cbmV4cG9ydHMuc3Rhc2hMaXN0VGFzayA9IHN0YXNoTGlzdFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGFzaC1saXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cGRhdGVTdWJNb2R1bGVUYXNrID0gZXhwb3J0cy5zdWJNb2R1bGVUYXNrID0gZXhwb3J0cy5pbml0U3ViTW9kdWxlVGFzayA9IGV4cG9ydHMuYWRkU3ViTW9kdWxlVGFzayA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBhZGRTdWJNb2R1bGVUYXNrKHJlcG8sIHBhdGgpIHtcbiAgICByZXR1cm4gc3ViTW9kdWxlVGFzayhbJ2FkZCcsIHJlcG8sIHBhdGhdKTtcbn1cbmV4cG9ydHMuYWRkU3ViTW9kdWxlVGFzayA9IGFkZFN1Yk1vZHVsZVRhc2s7XG5mdW5jdGlvbiBpbml0U3ViTW9kdWxlVGFzayhjdXN0b21BcmdzKSB7XG4gICAgcmV0dXJuIHN1Yk1vZHVsZVRhc2soWydpbml0JywgLi4uY3VzdG9tQXJnc10pO1xufVxuZXhwb3J0cy5pbml0U3ViTW9kdWxlVGFzayA9IGluaXRTdWJNb2R1bGVUYXNrO1xuZnVuY3Rpb24gc3ViTW9kdWxlVGFzayhjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKGNvbW1hbmRzWzBdICE9PSAnc3VibW9kdWxlJykge1xuICAgICAgICBjb21tYW5kcy51bnNoaWZ0KCdzdWJtb2R1bGUnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKTtcbn1cbmV4cG9ydHMuc3ViTW9kdWxlVGFzayA9IHN1Yk1vZHVsZVRhc2s7XG5mdW5jdGlvbiB1cGRhdGVTdWJNb2R1bGVUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4gc3ViTW9kdWxlVGFzayhbJ3VwZGF0ZScsIC4uLmN1c3RvbUFyZ3NdKTtcbn1cbmV4cG9ydHMudXBkYXRlU3ViTW9kdWxlVGFzayA9IHVwZGF0ZVN1Yk1vZHVsZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWItbW9kdWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVRhZ0xpc3QgPSBleHBvcnRzLlRhZ0xpc3QgPSB2b2lkIDA7XG5jbGFzcyBUYWdMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihhbGwsIGxhdGVzdCkge1xuICAgICAgICB0aGlzLmFsbCA9IGFsbDtcbiAgICAgICAgdGhpcy5sYXRlc3QgPSBsYXRlc3Q7XG4gICAgfVxufVxuZXhwb3J0cy5UYWdMaXN0ID0gVGFnTGlzdDtcbmNvbnN0IHBhcnNlVGFnTGlzdCA9IGZ1bmN0aW9uIChkYXRhLCBjdXN0b21Tb3J0ID0gZmFsc2UpIHtcbiAgICBjb25zdCB0YWdzID0gZGF0YVxuICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgIC5tYXAodHJpbW1lZClcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICBpZiAoIWN1c3RvbVNvcnQpIHtcbiAgICAgICAgdGFncy5zb3J0KGZ1bmN0aW9uICh0YWdBLCB0YWdCKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0c0EgPSB0YWdBLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBjb25zdCBwYXJ0c0IgPSB0YWdCLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBpZiAocGFydHNBLmxlbmd0aCA9PT0gMSB8fCBwYXJ0c0IubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpbmdsZVNvcnRlZCh0b051bWJlcihwYXJ0c0FbMF0pLCB0b051bWJlcihwYXJ0c0JbMF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gTWF0aC5tYXgocGFydHNBLmxlbmd0aCwgcGFydHNCLmxlbmd0aCk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gc29ydGVkKHRvTnVtYmVyKHBhcnRzQVtpXSksIHRvTnVtYmVyKHBhcnRzQltpXSkpO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaWZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgbGF0ZXN0ID0gY3VzdG9tU29ydCA/IHRhZ3NbMF0gOiBbLi4udGFnc10ucmV2ZXJzZSgpLmZpbmQoKHRhZykgPT4gdGFnLmluZGV4T2YoJy4nKSA+PSAwKTtcbiAgICByZXR1cm4gbmV3IFRhZ0xpc3QodGFncywgbGF0ZXN0KTtcbn07XG5leHBvcnRzLnBhcnNlVGFnTGlzdCA9IHBhcnNlVGFnTGlzdDtcbmZ1bmN0aW9uIHNpbmdsZVNvcnRlZChhLCBiKSB7XG4gICAgY29uc3QgYUlzTnVtID0gaXNOYU4oYSk7XG4gICAgY29uc3QgYklzTnVtID0gaXNOYU4oYik7XG4gICAgaWYgKGFJc051bSAhPT0gYklzTnVtKSB7XG4gICAgICAgIHJldHVybiBhSXNOdW0gPyAxIDogLTE7XG4gICAgfVxuICAgIHJldHVybiBhSXNOdW0gPyBzb3J0ZWQoYSwgYikgOiAwO1xufVxuZnVuY3Rpb24gc29ydGVkKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcbn1cbmZ1bmN0aW9uIHRyaW1tZWQoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQudHJpbSgpO1xufVxuZnVuY3Rpb24gdG9OdW1iZXIoaW5wdXQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQucmVwbGFjZSgvXlxcRCsvZywgJycpLCAxMCkgfHwgMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UYWdMaXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hZGRBbm5vdGF0ZWRUYWdUYXNrID0gZXhwb3J0cy5hZGRUYWdUYXNrID0gZXhwb3J0cy50YWdMaXN0VGFzayA9IHZvaWQgMDtcbmNvbnN0IFRhZ0xpc3RfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvVGFnTGlzdFwiKTtcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQudGFnc2BcbiAqL1xuZnVuY3Rpb24gdGFnTGlzdFRhc2soY3VzdG9tQXJncyA9IFtdKSB7XG4gICAgY29uc3QgaGFzQ3VzdG9tU29ydCA9IGN1c3RvbUFyZ3Muc29tZSgob3B0aW9uKSA9PiAvXi0tc29ydD0vLnRlc3Qob3B0aW9uKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWyd0YWcnLCAnLWwnLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBUYWdMaXN0XzEucGFyc2VUYWdMaXN0KHRleHQsIGhhc0N1c3RvbVNvcnQpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnRhZ0xpc3RUYXNrID0gdGFnTGlzdFRhc2s7XG4vKipcbiAqIFRhc2sgdXNlZCBieSBgZ2l0LmFkZFRhZ2BcbiAqL1xuZnVuY3Rpb24gYWRkVGFnVGFzayhuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWyd0YWcnLCBuYW1lXSxcbiAgICAgICAgcGFyc2VyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSB9O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuYWRkVGFnVGFzayA9IGFkZFRhZ1Rhc2s7XG4vKipcbiAqIFRhc2sgdXNlZCBieSBgZ2l0LmFkZFRhZ2BcbiAqL1xuZnVuY3Rpb24gYWRkQW5ub3RhdGVkVGFnVGFzayhuYW1lLCB0YWdNZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWyd0YWcnLCAnLWEnLCAnLW0nLCB0YWdNZXNzYWdlLCBuYW1lXSxcbiAgICAgICAgcGFyc2VyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSB9O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuYWRkQW5ub3RhdGVkVGFnVGFzayA9IGFkZEFubm90YXRlZFRhZ1Rhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YWcuanMubWFwIiwiY29uc3Qge0dpdEV4ZWN1dG9yfSA9IHJlcXVpcmUoJy4vbGliL3J1bm5lcnMvZ2l0LWV4ZWN1dG9yJyk7XG5jb25zdCB7U2ltcGxlR2l0QXBpfSA9IHJlcXVpcmUoJy4vbGliL3NpbXBsZS1naXQtYXBpJyk7XG5cbmNvbnN0IHtTY2hlZHVsZXJ9ID0gcmVxdWlyZSgnLi9saWIvcnVubmVycy9zY2hlZHVsZXInKTtcbmNvbnN0IHtHaXRMb2dnZXJ9ID0gcmVxdWlyZSgnLi9saWIvZ2l0LWxvZ2dlcicpO1xuY29uc3Qge2NvbmZpZ3VyYXRpb25FcnJvclRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvdGFzaycpO1xuY29uc3Qge1xuICAgYXNBcnJheSxcbiAgIGZpbHRlckFycmF5LFxuICAgZmlsdGVyUHJpbWl0aXZlcyxcbiAgIGZpbHRlclN0cmluZyxcbiAgIGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXksXG4gICBmaWx0ZXJUeXBlLFxuICAgZ2V0VHJhaWxpbmdPcHRpb25zLFxuICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50LFxuICAgdHJhaWxpbmdPcHRpb25zQXJndW1lbnRcbn0gPSByZXF1aXJlKCcuL2xpYi91dGlscycpO1xuY29uc3Qge2FwcGx5UGF0Y2hUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2FwcGx5LXBhdGNoJylcbmNvbnN0IHticmFuY2hUYXNrLCBicmFuY2hMb2NhbFRhc2ssIGRlbGV0ZUJyYW5jaGVzVGFzaywgZGVsZXRlQnJhbmNoVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9icmFuY2gnKTtcbmNvbnN0IHtjaGVja0lnbm9yZVRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY2hlY2staWdub3JlJyk7XG5jb25zdCB7Y2hlY2tJc1JlcG9UYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2NoZWNrLWlzLXJlcG8nKTtcbmNvbnN0IHtjbG9uZVRhc2ssIGNsb25lTWlycm9yVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9jbG9uZScpO1xuY29uc3Qge2NsZWFuV2l0aE9wdGlvbnNUYXNrLCBpc0NsZWFuT3B0aW9uc0FycmF5fSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2NsZWFuJyk7XG5jb25zdCB7Y29tbWl0VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9jb21taXQnKTtcbmNvbnN0IHtkaWZmU3VtbWFyeVRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvZGlmZicpO1xuY29uc3Qge2ZldGNoVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9mZXRjaCcpO1xuY29uc3Qge21vdmVUYXNrfSA9IHJlcXVpcmUoXCIuL2xpYi90YXNrcy9tb3ZlXCIpO1xuY29uc3Qge3B1bGxUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3B1bGwnKTtcbmNvbnN0IHtwdXNoVGFnc1Rhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcHVzaCcpO1xuY29uc3Qge2FkZFJlbW90ZVRhc2ssIGdldFJlbW90ZXNUYXNrLCBsaXN0UmVtb3Rlc1Rhc2ssIHJlbW90ZVRhc2ssIHJlbW92ZVJlbW90ZVRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcmVtb3RlJyk7XG5jb25zdCB7Z2V0UmVzZXRNb2RlLCByZXNldFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcmVzZXQnKTtcbmNvbnN0IHtzdGFzaExpc3RUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3N0YXNoLWxpc3QnKTtcbmNvbnN0IHthZGRTdWJNb2R1bGVUYXNrLCBpbml0U3ViTW9kdWxlVGFzaywgc3ViTW9kdWxlVGFzaywgdXBkYXRlU3ViTW9kdWxlVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9zdWItbW9kdWxlJyk7XG5jb25zdCB7YWRkQW5ub3RhdGVkVGFnVGFzaywgYWRkVGFnVGFzaywgdGFnTGlzdFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvdGFnJyk7XG5jb25zdCB7c3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzaywgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy90YXNrJyk7XG5cbmZ1bmN0aW9uIEdpdCAob3B0aW9ucywgcGx1Z2lucykge1xuICAgdGhpcy5fZXhlY3V0b3IgPSBuZXcgR2l0RXhlY3V0b3IoXG4gICAgICBvcHRpb25zLmJpbmFyeSwgb3B0aW9ucy5iYXNlRGlyLFxuICAgICAgbmV3IFNjaGVkdWxlcihvcHRpb25zLm1heENvbmN1cnJlbnRQcm9jZXNzZXMpLCBwbHVnaW5zLFxuICAgKTtcbiAgIHRoaXMuX2xvZ2dlciA9IG5ldyBHaXRMb2dnZXIoKTtcbn1cblxuKEdpdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZUdpdEFwaS5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IEdpdDtcblxuLyoqXG4gKiBMb2dnaW5nIHV0aWxpdHkgZm9yIHByaW50aW5nIG91dCBpbmZvIG9yIGVycm9yIG1lc3NhZ2VzIHRvIHRoZSB1c2VyXG4gKiBAdHlwZSB7R2l0TG9nZ2VyfVxuICogQHByaXZhdGVcbiAqL1xuR2l0LnByb3RvdHlwZS5fbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBTZXRzIHRoZSBwYXRoIHRvIGEgY3VzdG9tIGdpdCBiaW5hcnksIHNob3VsZCBlaXRoZXIgYmUgYGdpdGAgd2hlbiB0aGVyZSBpcyBhbiBpbnN0YWxsYXRpb24gb2YgZ2l0IGF2YWlsYWJsZSBvblxuICogdGhlIHN5c3RlbSBwYXRoLCBvciBhIGZ1bGx5IHF1YWxpZmllZCBwYXRoIHRvIHRoZSBleGVjdXRhYmxlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLmN1c3RvbUJpbmFyeSA9IGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICB0aGlzLl9leGVjdXRvci5iaW5hcnkgPSBjb21tYW5kO1xuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUgZm9yIHRoZSBzcGF3bmVkIGNoaWxkIHByb2Nlc3MsIGVpdGhlciBzdXBwbHkgYm90aCBhIG5hbWUgYW5kIHZhbHVlIGFzIHN0cmluZ3Mgb3JcbiAqIGEgc2luZ2xlIG9iamVjdCB0byBlbnRpcmVseSByZXBsYWNlIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLmVudiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLl9leGVjdXRvci5lbnYgPSBuYW1lO1xuICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLl9leGVjdXRvci5lbnYgPSB0aGlzLl9leGVjdXRvci5lbnYgfHwge30pW25hbWVdID0gdmFsdWU7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBMaXN0IHRoZSBzdGFzaChzKSBvZiB0aGUgbG9jYWwgcmVwb1xuICovXG5HaXQucHJvdG90eXBlLnN0YXNoTGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0YXNoTGlzdFRhc2soXG4gICAgICAgICB0cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpIHx8IHt9LFxuICAgICAgICAgZmlsdGVyQXJyYXkob3B0aW9ucykgJiYgb3B0aW9ucyB8fCBbXVxuICAgICAgKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsb25lVGFzayAoYXBpLCB0YXNrLCByZXBvUGF0aCwgbG9jYWxQYXRoKSB7XG4gICBpZiAodHlwZW9mIHJlcG9QYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soYGdpdC4keyBhcGkgfSgpIHJlcXVpcmVzIGEgc3RyaW5nICdyZXBvUGF0aCdgKTtcbiAgIH1cblxuICAgcmV0dXJuIHRhc2socmVwb1BhdGgsIGZpbHRlclR5cGUobG9jYWxQYXRoLCBmaWx0ZXJTdHJpbmcpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSk7XG59XG5cblxuLyoqXG4gKiBDbG9uZSBhIGdpdCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGNyZWF0ZUNsb25lVGFzaygnY2xvbmUnLCBjbG9uZVRhc2ssIC4uLmFyZ3VtZW50cyksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIE1pcnJvciBhIGdpdCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUubWlycm9yID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjcmVhdGVDbG9uZVRhc2soJ21pcnJvcicsIGNsb25lTWlycm9yVGFzaywgLi4uYXJndW1lbnRzKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogTW92ZXMgb25lIG9yIG1vcmUgZmlsZXMgdG8gYSBuZXcgZGVzdGluYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL2dpdC1zY20uY29tL2RvY3MvZ2l0LW12XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGZyb21cbiAqIEBwYXJhbSB7c3RyaW5nfSB0b1xuICovXG5HaXQucHJvdG90eXBlLm12ID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhtb3ZlVGFzayhmcm9tLCB0byksIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWxseSB1c2VzIHB1bGwgYW5kIHRhZ3MgdG8gZ2V0IHRoZSBsaXN0IG9mIHRhZ3MgdGhlbiBjaGVja3Mgb3V0IHRoZSBsYXRlc3QgdGFnLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrb3V0TGF0ZXN0VGFnID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHZhciBnaXQgPSB0aGlzO1xuICAgcmV0dXJuIHRoaXMucHVsbChmdW5jdGlvbiAoKSB7XG4gICAgICBnaXQudGFncyhmdW5jdGlvbiAoZXJyLCB0YWdzKSB7XG4gICAgICAgICBnaXQuY2hlY2tvdXQodGFncy5sYXRlc3QsIHRoZW4pO1xuICAgICAgfSk7XG4gICB9KTtcbn07XG5cbi8qKlxuICogQ29tbWl0cyBjaGFuZ2VzIGluIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5IC0gd2hlbiBzcGVjaWZpYyBmaWxlIHBhdGhzIGFyZSBzdXBwbGllZCwgb25seSBjaGFuZ2VzIG9uIHRob3NlXG4gKiBmaWxlcyB3aWxsIGJlIGNvbW1pdHRlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gbWVzc2FnZVxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtmaWxlc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIChtZXNzYWdlLCBmaWxlcywgb3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgbmV4dCA9IHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcblxuICAgaWYgKGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXkobWVzc2FnZSkpIHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goLi4uYXNBcnJheShtZXNzYWdlKSk7XG4gICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdzaW1wbGUtZ2l0IGRlcHJlY2F0aW9uIG5vdGljZTogZ2l0LmNvbW1pdDogcmVxdWlyZXMgdGhlIGNvbW1pdCBtZXNzYWdlIHRvIGJlIHN1cHBsaWVkIGFzIGEgc3RyaW5nL3N0cmluZ1tdLCB0aGlzIHdpbGwgYmUgYW4gZXJyb3IgaW4gdmVyc2lvbiAzJyk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY29tbWl0VGFzayhcbiAgICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICAgYXNBcnJheShmaWx0ZXJUeXBlKGZpbGVzLCBmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5LCBbXSkpLFxuICAgICAgICAgWy4uLmZpbHRlclR5cGUob3B0aW9ucywgZmlsdGVyQXJyYXksIFtdKSwgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMCwgdHJ1ZSldXG4gICAgICApLFxuICAgICAgbmV4dFxuICAgKTtcbn07XG5cbi8qKlxuICogUHVsbCB0aGUgdXBkYXRlZCBjb250ZW50cyBvZiB0aGUgY3VycmVudCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUucHVsbCA9IGZ1bmN0aW9uIChyZW1vdGUsIGJyYW5jaCwgb3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBwdWxsVGFzayhmaWx0ZXJUeXBlKHJlbW90ZSwgZmlsdGVyU3RyaW5nKSwgZmlsdGVyVHlwZShicmFuY2gsIGZpbHRlclN0cmluZyksIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogRmV0Y2ggdGhlIHVwZGF0ZWQgY29udGVudHMgb2YgdGhlIGN1cnJlbnQgcmVwby5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAuZmV0Y2goJ3Vwc3RyZWFtJywgJ21hc3RlcicpIC8vIGZldGNoZXMgZnJvbSBtYXN0ZXIgb24gcmVtb3RlIG5hbWVkIHVwc3RyZWFtXG4gKiAgIC5mZXRjaChmdW5jdGlvbiAoKSB7fSkgLy8gcnVucyBmZXRjaCBhZ2FpbnN0IGRlZmF1bHQgcmVtb3RlIGFuZCBicmFuY2ggYW5kIGNhbGxzIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtyZW1vdGVdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2JyYW5jaF1cbiAqL1xuR2l0LnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChyZW1vdGUsIGJyYW5jaCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBmZXRjaFRhc2soZmlsdGVyVHlwZShyZW1vdGUsIGZpbHRlclN0cmluZyksIGZpbHRlclR5cGUoYnJhbmNoLCBmaWx0ZXJTdHJpbmcpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIERpc2FibGVzL2VuYWJsZXMgdGhlIHVzZSBvZiB0aGUgY29uc29sZSBmb3IgcHJpbnRpbmcgd2FybmluZ3MgYW5kIGVycm9ycywgYnkgZGVmYXVsdCBtZXNzYWdlcyBhcmUgbm90IHNob3duIGluXG4gKiBhIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzaWxlbmNlXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLnNpbGVudCA9IGZ1bmN0aW9uIChzaWxlbmNlKSB7XG4gICBjb25zb2xlLndhcm4oJ3NpbXBsZS1naXQgZGVwcmVjYXRpb24gbm90aWNlOiBnaXQuc2lsZW50OiBsb2dnaW5nIHNob3VsZCBiZSBjb25maWd1cmVkIHVzaW5nIHRoZSBgZGVidWdgIGxpYnJhcnkgLyBgREVCVUdgIGVudmlyb25tZW50IHZhcmlhYmxlLCB0aGlzIHdpbGwgYmUgYW4gZXJyb3IgaW4gdmVyc2lvbiAzJyk7XG4gICB0aGlzLl9sb2dnZXIuc2lsZW50KCEhc2lsZW5jZSk7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTGlzdCBhbGwgdGFncy4gV2hlbiB1c2luZyBnaXQgMi43LjAgb3IgYWJvdmUsIGluY2x1ZGUgYW4gb3B0aW9ucyBvYmplY3Qgd2l0aCBgXCItLXNvcnRcIjogXCJwcm9wZXJ0eS1uYW1lXCJgIHRvXG4gKiBzb3J0IHRoZSB0YWdzIGJ5IHRoYXQgcHJvcGVydHkgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCBzZW1hbnRpYyB2ZXJzaW9uaW5nIHNvcnQuXG4gKlxuICogTm90ZSwgc3VwcGx5aW5nIHRoaXMgb3B0aW9uIHdoZW4gaXQgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIEdpdCB2ZXJzaW9uIHdpbGwgY2F1c2UgdGhlIG9wZXJhdGlvbiB0byBmYWlsLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnRhZ3MgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICB0YWdMaXN0VGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJlYmFzZXMgdGhlIGN1cnJlbnQgd29ya2luZyBjb3B5LiBPcHRpb25zIGNhbiBiZSBzdXBwbGllZCBlaXRoZXIgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nIHBhcmFtZXRlcnNcbiAqIHRvIGJlIHNlbnQgdG8gdGhlIGBnaXQgcmViYXNlYCBjb21tYW5kLCBvciBhIHN0YW5kYXJkIG9wdGlvbnMgb2JqZWN0LlxuICovXG5HaXQucHJvdG90eXBlLnJlYmFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JlYmFzZScsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmVzZXQgYSByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICByZXNldFRhc2soZ2V0UmVzZXRNb2RlKG1vZGUpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJldmVydCBvbmUgb3IgbW9yZSBjb21taXRzIGluIHRoZSBsb2NhbCB3b3JraW5nIGNvcHlcbiAqL1xuR2l0LnByb3RvdHlwZS5yZXZlcnQgPSBmdW5jdGlvbiAoY29tbWl0KSB7XG4gICBjb25zdCBuZXh0ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgIGlmICh0eXBlb2YgY29tbWl0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICAgICBjb25maWd1cmF0aW9uRXJyb3JUYXNrKCdDb21taXQgbXVzdCBiZSBhIHN0cmluZycpLFxuICAgICAgICAgbmV4dCxcbiAgICAgICk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JldmVydCcsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIDAsIHRydWUpLCBjb21taXRdKSxcbiAgICAgIG5leHRcbiAgICk7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpZ2h0d2VpZ2h0IHRhZyB0byB0aGUgaGVhZCBvZiB0aGUgY3VycmVudCBicmFuY2hcbiAqL1xuR2l0LnByb3RvdHlwZS5hZGRUYWcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgY29uc3QgdGFzayA9ICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpXG4gICAgICA/IGFkZFRhZ1Rhc2sobmFtZSlcbiAgICAgIDogY29uZmlndXJhdGlvbkVycm9yVGFzaygnR2l0LmFkZFRhZyByZXF1aXJlcyBhIHRhZyBuYW1lJyk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogQWRkIGFuIGFubm90YXRlZCB0YWcgdG8gdGhlIGhlYWQgb2YgdGhlIGN1cnJlbnQgYnJhbmNoXG4gKi9cbkdpdC5wcm90b3R5cGUuYWRkQW5ub3RhdGVkVGFnID0gZnVuY3Rpb24gKHRhZ05hbWUsIHRhZ01lc3NhZ2UpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYWRkQW5ub3RhdGVkVGFnVGFzayh0YWdOYW1lLCB0YWdNZXNzYWdlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgb3V0IGEgdGFnIG9yIHJldmlzaW9uLCBhbnkgbnVtYmVyIG9mIGFkZGl0aW9uYWwgYXJndW1lbnRzIGNhbiBiZSBwYXNzZWQgdG8gdGhlIGBnaXQgY2hlY2tvdXRgIGNvbW1hbmRcbiAqIGJ5IHN1cHBseWluZyBlaXRoZXIgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICBjb25zdCBjb21tYW5kcyA9IFsnY2hlY2tvdXQnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKV07XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBDaGVjayBvdXQgYSByZW1vdGUgYnJhbmNoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJyYW5jaE5hbWUgbmFtZSBvZiBicmFuY2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFBvaW50IChlLmcgb3JpZ2luL2RldmVsb3BtZW50KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tvdXRCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoTmFtZSwgc3RhcnRQb2ludCwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuY2hlY2tvdXQoWyctYicsIGJyYW5jaE5hbWUsIHN0YXJ0UG9pbnRdLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIG91dCBhIGxvY2FsIGJyYW5jaFxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrb3V0TG9jYWxCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoTmFtZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuY2hlY2tvdXQoWyctYicsIGJyYW5jaE5hbWVdLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIERlbGV0ZSBhIGxvY2FsIGJyYW5jaFxuICovXG5HaXQucHJvdG90eXBlLmRlbGV0ZUxvY2FsQnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaE5hbWUsIGZvcmNlRGVsZXRlLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGRlbGV0ZUJyYW5jaFRhc2soYnJhbmNoTmFtZSwgdHlwZW9mIGZvcmNlRGVsZXRlID09PSBcImJvb2xlYW5cIiA/IGZvcmNlRGVsZXRlIDogZmFsc2UpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBEZWxldGUgb25lIG9yIG1vcmUgbG9jYWwgYnJhbmNoZXNcbiAqL1xuR2l0LnByb3RvdHlwZS5kZWxldGVMb2NhbEJyYW5jaGVzID0gZnVuY3Rpb24gKGJyYW5jaE5hbWVzLCBmb3JjZURlbGV0ZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBkZWxldGVCcmFuY2hlc1Rhc2soYnJhbmNoTmFtZXMsIHR5cGVvZiBmb3JjZURlbGV0ZSA9PT0gXCJib29sZWFuXCIgPyBmb3JjZURlbGV0ZSA6IGZhbHNlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogTGlzdCBhbGwgYnJhbmNoZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdCB8IHN0cmluZ1tdfSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmJyYW5jaCA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGJyYW5jaFRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbGlzdCBvZiBsb2NhbCBicmFuY2hlc1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmJyYW5jaExvY2FsID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYnJhbmNoTG9jYWxUYXNrKCksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIEV4ZWN1dGVzIGFueSBjb21tYW5kIGFnYWluc3QgdGhlIGdpdCBiaW5hcnkuXG4gKi9cbkdpdC5wcm90b3R5cGUucmF3ID0gZnVuY3Rpb24gKGNvbW1hbmRzKSB7XG4gICBjb25zdCBjcmVhdGVSZXN0Q29tbWFuZHMgPSAhQXJyYXkuaXNBcnJheShjb21tYW5kcyk7XG4gICBjb25zdCBjb21tYW5kID0gW10uc2xpY2UuY2FsbChjcmVhdGVSZXN0Q29tbWFuZHMgPyBhcmd1bWVudHMgOiBjb21tYW5kcywgMCk7XG5cbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWFuZC5sZW5ndGggJiYgY3JlYXRlUmVzdENvbW1hbmRzOyBpKyspIHtcbiAgICAgIGlmICghZmlsdGVyUHJpbWl0aXZlcyhjb21tYW5kW2ldKSkge1xuICAgICAgICAgY29tbWFuZC5zcGxpY2UoaSwgY29tbWFuZC5sZW5ndGggLSBpKTtcbiAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgfVxuXG4gICBjb21tYW5kLnB1c2goXG4gICAgICAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCAwLCB0cnVlKSxcbiAgICk7XG5cbiAgIHZhciBuZXh0ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgIGlmICghY29tbWFuZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgICAgY29uZmlndXJhdGlvbkVycm9yVGFzaygnUmF3OiBtdXN0IHN1cHBseSBvbmUgb3IgbW9yZSBjb21tYW5kIHRvIGV4ZWN1dGUnKSxcbiAgICAgICAgIG5leHQsXG4gICAgICApO1xuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmQpLCBuZXh0KTtcbn07XG5cbkdpdC5wcm90b3R5cGUuc3VibW9kdWxlQWRkID0gZnVuY3Rpb24gKHJlcG8sIHBhdGgsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYWRkU3ViTW9kdWxlVGFzayhyZXBvLCBwYXRoKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuc3VibW9kdWxlVXBkYXRlID0gZnVuY3Rpb24gKGFyZ3MsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgdXBkYXRlU3ViTW9kdWxlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLnN1Ym1vZHVsZUluaXQgPSBmdW5jdGlvbiAoYXJncywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBpbml0U3ViTW9kdWxlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLnN1Yk1vZHVsZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN1Yk1vZHVsZVRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5saXN0UmVtb3RlID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBsaXN0UmVtb3Rlc1Rhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgcmVtb3RlIHRvIHRoZSBsaXN0IG9mIHJlbW90ZXMuXG4gKi9cbkdpdC5wcm90b3R5cGUuYWRkUmVtb3RlID0gZnVuY3Rpb24gKHJlbW90ZU5hbWUsIHJlbW90ZVJlcG8sIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYWRkUmVtb3RlVGFzayhyZW1vdGVOYW1lLCByZW1vdGVSZXBvLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYW4gZW50cnkgYnkgbmFtZSBmcm9tIHRoZSBsaXN0IG9mIHJlbW90ZXMuXG4gKi9cbkdpdC5wcm90b3R5cGUucmVtb3ZlUmVtb3RlID0gZnVuY3Rpb24gKHJlbW90ZU5hbWUsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgcmVtb3ZlUmVtb3RlVGFzayhyZW1vdGVOYW1lKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgY3VycmVudGx5IGF2YWlsYWJsZSByZW1vdGVzLCBzZXR0aW5nIHRoZSBvcHRpb25hbCB2ZXJib3NlIGFyZ3VtZW50IHRvIHRydWUgaW5jbHVkZXMgYWRkaXRpb25hbFxuICogZGV0YWlsIG9uIHRoZSByZW1vdGVzIHRoZW1zZWx2ZXMuXG4gKi9cbkdpdC5wcm90b3R5cGUuZ2V0UmVtb3RlcyA9IGZ1bmN0aW9uICh2ZXJib3NlLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGdldFJlbW90ZXNUYXNrKHZlcmJvc2UgPT09IHRydWUpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBDYWxsIGFueSBgZ2l0IHJlbW90ZWAgZnVuY3Rpb24gd2l0aCBhcmd1bWVudHMgcGFzc2VkIGFzIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUucmVtb3RlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgcmVtb3RlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENhbGwgYW55IGBnaXQgdGFnYCBmdW5jdGlvbiB3aXRoIGFyZ3VtZW50cyBwYXNzZWQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS50YWcgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgY29tbWFuZCA9IGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpO1xuXG4gICBpZiAoY29tbWFuZFswXSAhPT0gJ3RhZycpIHtcbiAgICAgIGNvbW1hbmQudW5zaGlmdCgndGFnJyk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHJlcG9zaXRvcnkgc2VydmVyIGluZm9cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS51cGRhdGVTZXJ2ZXJJbmZvID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3VwZGF0ZS1zZXJ2ZXItaW5mbyddKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUHVzaGVzIHRoZSBjdXJyZW50IHRhZyBjaGFuZ2VzIHRvIGEgcmVtb3RlIHdoaWNoIGNhbiBiZSBlaXRoZXIgYSBVUkwgb3IgbmFtZWQgcmVtb3RlLiBXaGVuIG5vdCBzcGVjaWZpZWQgdXNlcyB0aGVcbiAqIGRlZmF1bHQgY29uZmlndXJlZCByZW1vdGUgc3BlYy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3JlbW90ZV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnB1c2hUYWdzID0gZnVuY3Rpb24gKHJlbW90ZSwgdGhlbikge1xuICAgY29uc3QgdGFzayA9IHB1c2hUYWdzVGFzayh7cmVtb3RlOiBmaWx0ZXJUeXBlKHJlbW90ZSwgZmlsdGVyU3RyaW5nKX0sIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzaywgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBuYW1lZCBmaWxlcyBmcm9tIHNvdXJjZSBjb250cm9sLlxuICovXG5HaXQucHJvdG90eXBlLnJtID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydybScsICctZicsIC4uLmFzQXJyYXkoZmlsZXMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmFtZWQgZmlsZXMgZnJvbSBzb3VyY2UgY29udHJvbCBidXQga2VlcHMgdGhlbSBvbiBkaXNrIHJhdGhlciB0aGFuIGRlbGV0aW5nIHRoZW0gZW50aXJlbHkuIFRvXG4gKiBjb21wbGV0ZWx5IHJlbW92ZSB0aGUgZmlsZXMsIHVzZSBgcm1gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlc1xuICovXG5HaXQucHJvdG90eXBlLnJtS2VlcExvY2FsID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydybScsICctLWNhY2hlZCcsIC4uLmFzQXJyYXkoZmlsZXMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2Ygb2JqZWN0cyBpbiBhIHRyZWUgYmFzZWQgb24gY29tbWl0IGhhc2guIFBhc3NpbmcgaW4gYW4gb2JqZWN0IGhhc2ggcmV0dXJucyB0aGUgb2JqZWN0J3MgY29udGVudCxcbiAqIHNpemUsIGFuZCB0eXBlLlxuICpcbiAqIFBhc3NpbmcgXCItcFwiIHdpbGwgaW5zdHJ1Y3QgY2F0LWZpbGUgdG8gZGV0ZXJtaW5lIHRoZSBvYmplY3QgdHlwZSwgYW5kIGRpc3BsYXkgaXRzIGZvcm1hdHRlZCBjb250ZW50cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNhdEZpbGUgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX2NhdEZpbGUoJ3V0Zi04JywgYXJndW1lbnRzKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuYmluYXJ5Q2F0RmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9jYXRGaWxlKCdidWZmZXInLCBhcmd1bWVudHMpO1xufTtcblxuR2l0LnByb3RvdHlwZS5fY2F0RmlsZSA9IGZ1bmN0aW9uIChmb3JtYXQsIGFyZ3MpIHtcbiAgIHZhciBoYW5kbGVyID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3MpO1xuICAgdmFyIGNvbW1hbmQgPSBbJ2NhdC1maWxlJ107XG4gICB2YXIgb3B0aW9ucyA9IGFyZ3NbMF07XG5cbiAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgICAgY29uZmlndXJhdGlvbkVycm9yVGFzaygnR2l0LmNhdEZpbGU6IG9wdGlvbnMgbXVzdCBiZSBzdXBwbGllZCBhcyBhbiBhcnJheSBvZiBzdHJpbmdzJyksXG4gICAgICAgICBoYW5kbGVyLFxuICAgICAgKTtcbiAgIH1cblxuICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgIGNvbW1hbmQucHVzaC5hcHBseShjb21tYW5kLCBvcHRpb25zKTtcbiAgIH1cblxuICAgY29uc3QgdGFzayA9IGZvcm1hdCA9PT0gJ2J1ZmZlcidcbiAgICAgID8gc3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzayhjb21tYW5kKVxuICAgICAgOiBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmQpO1xuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCBoYW5kbGVyKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICBjb25zdCBjb21tYW5kID0gWydkaWZmJywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyldO1xuXG4gICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb21tYW5kLnNwbGljZSgxLCAwLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuX2xvZ2dlci53YXJuKCdHaXQjZGlmZjogc3VwcGx5aW5nIG9wdGlvbnMgYXMgYSBzaW5nbGUgc3RyaW5nIGlzIG5vdyBkZXByZWNhdGVkLCBzd2l0Y2ggdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncycpO1xuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZCksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmRpZmZTdW1tYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBkaWZmU3VtbWFyeVRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMSkpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5hcHBseVBhdGNoID0gZnVuY3Rpb24gKHBhdGNoZXMpIHtcbiAgIGNvbnN0IHRhc2sgPSAhZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheShwYXRjaGVzKVxuICAgICAgPyBjb25maWd1cmF0aW9uRXJyb3JUYXNrKGBnaXQuYXBwbHlQYXRjaCByZXF1aXJlcyBvbmUgb3IgbW9yZSBzdHJpbmcgcGF0Y2hlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnRgKVxuICAgICAgOiBhcHBseVBhdGNoVGFzayhhc0FycmF5KHBhdGNoZXMpLCBnZXRUcmFpbGluZ09wdGlvbnMoW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgdGFzayxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn1cblxuR2l0LnByb3RvdHlwZS5yZXZwYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgIGNvbnN0IGNvbW1hbmRzID0gWydyZXYtcGFyc2UnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKV07XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRydWUpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBTaG93IHZhcmlvdXMgdHlwZXMgb2Ygb2JqZWN0cywgZm9yIGV4YW1wbGUgdGhlIGZpbGUgYXQgYSBjZXJ0YWluIGNvbW1pdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydzaG93JywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMSldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKi9cbkdpdC5wcm90b3R5cGUuY2xlYW4gPSBmdW5jdGlvbiAobW9kZSwgb3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgdXNpbmdDbGVhbk9wdGlvbnNBcnJheSA9IGlzQ2xlYW5PcHRpb25zQXJyYXkobW9kZSk7XG4gICBjb25zdCBjbGVhbk1vZGUgPSB1c2luZ0NsZWFuT3B0aW9uc0FycmF5ICYmIG1vZGUuam9pbignJykgfHwgZmlsdGVyVHlwZShtb2RlLCBmaWx0ZXJTdHJpbmcpIHx8ICcnO1xuICAgY29uc3QgY3VzdG9tQXJncyA9IGdldFRyYWlsaW5nT3B0aW9ucyhbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgdXNpbmdDbGVhbk9wdGlvbnNBcnJheSA/IDEgOiAwKSk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY2xlYW5XaXRoT3B0aW9uc1Rhc2soY2xlYW5Nb2RlLCBjdXN0b21BcmdzKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uICh0aGVuKSB7XG4gICBjb25zdCB0YXNrID0ge1xuICAgICAgY29tbWFuZHM6IFtdLFxuICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgcGFyc2VyICgpIHtcbiAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbigpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzayk7XG59O1xuXG4vKipcbiAqIENsZWFycyB0aGUgcXVldWUgb2YgcGVuZGluZyBjb21tYW5kcyBhbmQgcmV0dXJucyB0aGUgd3JhcHBlciBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gKlxuICogQHJldHVybnMge0dpdH1cbiAqL1xuR2l0LnByb3RvdHlwZS5jbGVhclF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgLy8gVE9ETzpcbiAgIC8vIHRoaXMuX2V4ZWN1dG9yLmNsZWFyKCk7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXRobmFtZSBvciBwYXRobmFtZXMgYXJlIGV4Y2x1ZGVkIGJ5IC5naXRpZ25vcmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcGF0aG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5jaGVja0lnbm9yZSA9IGZ1bmN0aW9uIChwYXRobmFtZXMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY2hlY2tJZ25vcmVUYXNrKGFzQXJyYXkoKGZpbHRlclR5cGUocGF0aG5hbWVzLCBmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5LCBbXSkpKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmNoZWNrSXNSZXBvID0gZnVuY3Rpb24gKGNoZWNrVHlwZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjaGVja0lzUmVwb1Rhc2soZmlsdGVyVHlwZShjaGVja1R5cGUsIGZpbHRlclN0cmluZykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2l0SW5zdGFuY2VGYWN0b3J5ID0gZXhwb3J0cy5naXRFeHBvcnRGYWN0b3J5ID0gZXhwb3J0cy5lc01vZHVsZUZhY3RvcnkgPSB2b2lkIDA7XG5jb25zdCBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmNvbnN0IHBsdWdpbnNfMSA9IHJlcXVpcmUoXCIuL3BsdWdpbnNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBHaXQgPSByZXF1aXJlKCcuLi9naXQnKTtcbi8qKlxuICogQWRkcyB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXMgdG8gdGhlIHN1cHBsaWVkIG9iamVjdCB0byBlbmFibGUgaXQgZm9yIHVzZSBhc1xuICogdGhlIGRlZmF1bHQgZXhwb3J0IG9mIGEgbW9kdWxlLlxuICpcbiAqIEVnOiBgbW9kdWxlLmV4cG9ydHMgPSBlc01vZHVsZUZhY3RvcnkoeyBzb21ldGhpbmcgKCkge30gfSlgXG4gKi9cbmZ1bmN0aW9uIGVzTW9kdWxlRmFjdG9yeShkZWZhdWx0RXhwb3J0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGRlZmF1bHRFeHBvcnQsIHtcbiAgICAgICAgX19lc01vZHVsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBkZWZhdWx0OiB7IHZhbHVlOiBkZWZhdWx0RXhwb3J0IH0sXG4gICAgfSk7XG59XG5leHBvcnRzLmVzTW9kdWxlRmFjdG9yeSA9IGVzTW9kdWxlRmFjdG9yeTtcbmZ1bmN0aW9uIGdpdEV4cG9ydEZhY3RvcnkoZmFjdG9yeSwgZXh0cmEpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCBhcGlfMS5kZWZhdWx0LCBleHRyYSB8fCB7fSk7XG59XG5leHBvcnRzLmdpdEV4cG9ydEZhY3RvcnkgPSBnaXRFeHBvcnRGYWN0b3J5O1xuZnVuY3Rpb24gZ2l0SW5zdGFuY2VGYWN0b3J5KGJhc2VEaXIsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBwbHVnaW5zID0gbmV3IHBsdWdpbnNfMS5QbHVnaW5TdG9yZSgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHV0aWxzXzEuY3JlYXRlSW5zdGFuY2VDb25maWcoYmFzZURpciAmJiAodHlwZW9mIGJhc2VEaXIgPT09ICdzdHJpbmcnID8geyBiYXNlRGlyIH0gOiBiYXNlRGlyKSB8fCB7fSwgb3B0aW9ucyk7XG4gICAgaWYgKCF1dGlsc18xLmZvbGRlckV4aXN0cyhjb25maWcuYmFzZURpcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IGFwaV8xLmRlZmF1bHQuR2l0Q29uc3RydWN0RXJyb3IoY29uZmlnLCBgQ2Fubm90IHVzZSBzaW1wbGUtZ2l0IG9uIGEgZGlyZWN0b3J5IHRoYXQgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLmNvbmZpZykpIHtcbiAgICAgICAgcGx1Z2lucy5hZGQocGx1Z2luc18xLmNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW4oY29uZmlnLmNvbmZpZykpO1xuICAgIH1cbiAgICBjb25maWcucHJvZ3Jlc3MgJiYgcGx1Z2lucy5hZGQocGx1Z2luc18xLnByb2dyZXNzTW9uaXRvclBsdWdpbihjb25maWcucHJvZ3Jlc3MpKTtcbiAgICBjb25maWcudGltZW91dCAmJiBwbHVnaW5zLmFkZChwbHVnaW5zXzEudGltZW91dFBsdWdpbihjb25maWcudGltZW91dCkpO1xuICAgIGNvbmZpZy5zcGF3bk9wdGlvbnMgJiYgcGx1Z2lucy5hZGQocGx1Z2luc18xLnNwYXduT3B0aW9uc1BsdWdpbihjb25maWcuc3Bhd25PcHRpb25zKSk7XG4gICAgcGx1Z2lucy5hZGQocGx1Z2luc18xLmVycm9yRGV0ZWN0aW9uUGx1Z2luKHBsdWdpbnNfMS5lcnJvckRldGVjdGlvbkhhbmRsZXIodHJ1ZSkpKTtcbiAgICBjb25maWcuZXJyb3JzICYmIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5lcnJvckRldGVjdGlvblBsdWdpbihjb25maWcuZXJyb3JzKSk7XG4gICAgcmV0dXJuIG5ldyBHaXQoY29uZmlnLCBwbHVnaW5zKTtcbn1cbmV4cG9ydHMuZ2l0SW5zdGFuY2VGYWN0b3J5ID0gZ2l0SW5zdGFuY2VGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWZhY3RvcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdpdFAgPSB2b2lkIDA7XG5jb25zdCBnaXRfcmVzcG9uc2VfZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LXJlc3BvbnNlLWVycm9yXCIpO1xuY29uc3QgZ2l0X2ZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi9naXQtZmFjdG9yeVwiKTtcbmNvbnN0IGZ1bmN0aW9uTmFtZXNCdWlsZGVyQXBpID0gW1xuICAgICdjdXN0b21CaW5hcnknLCAnZW52JywgJ291dHB1dEhhbmRsZXInLCAnc2lsZW50Jyxcbl07XG5jb25zdCBmdW5jdGlvbk5hbWVzUHJvbWlzZUFwaSA9IFtcbiAgICAnYWRkJyxcbiAgICAnYWRkQW5ub3RhdGVkVGFnJyxcbiAgICAnYWRkQ29uZmlnJyxcbiAgICAnYWRkUmVtb3RlJyxcbiAgICAnYWRkVGFnJyxcbiAgICAnYXBwbHlQYXRjaCcsXG4gICAgJ2JpbmFyeUNhdEZpbGUnLFxuICAgICdicmFuY2gnLFxuICAgICdicmFuY2hMb2NhbCcsXG4gICAgJ2NhdEZpbGUnLFxuICAgICdjaGVja0lnbm9yZScsXG4gICAgJ2NoZWNrSXNSZXBvJyxcbiAgICAnY2hlY2tvdXQnLFxuICAgICdjaGVja291dEJyYW5jaCcsXG4gICAgJ2NoZWNrb3V0TGF0ZXN0VGFnJyxcbiAgICAnY2hlY2tvdXRMb2NhbEJyYW5jaCcsXG4gICAgJ2NsZWFuJyxcbiAgICAnY2xvbmUnLFxuICAgICdjb21taXQnLFxuICAgICdjd2QnLFxuICAgICdkZWxldGVMb2NhbEJyYW5jaCcsXG4gICAgJ2RlbGV0ZUxvY2FsQnJhbmNoZXMnLFxuICAgICdkaWZmJyxcbiAgICAnZGlmZlN1bW1hcnknLFxuICAgICdleGVjJyxcbiAgICAnZmV0Y2gnLFxuICAgICdnZXRSZW1vdGVzJyxcbiAgICAnaW5pdCcsXG4gICAgJ2xpc3RDb25maWcnLFxuICAgICdsaXN0UmVtb3RlJyxcbiAgICAnbG9nJyxcbiAgICAnbWVyZ2UnLFxuICAgICdtZXJnZUZyb21UbycsXG4gICAgJ21pcnJvcicsXG4gICAgJ212JyxcbiAgICAncHVsbCcsXG4gICAgJ3B1c2gnLFxuICAgICdwdXNoVGFncycsXG4gICAgJ3JhdycsXG4gICAgJ3JlYmFzZScsXG4gICAgJ3JlbW90ZScsXG4gICAgJ3JlbW92ZVJlbW90ZScsXG4gICAgJ3Jlc2V0JyxcbiAgICAncmV2ZXJ0JyxcbiAgICAncmV2cGFyc2UnLFxuICAgICdybScsXG4gICAgJ3JtS2VlcExvY2FsJyxcbiAgICAnc2hvdycsXG4gICAgJ3N0YXNoJyxcbiAgICAnc3Rhc2hMaXN0JyxcbiAgICAnc3RhdHVzJyxcbiAgICAnc3ViTW9kdWxlJyxcbiAgICAnc3VibW9kdWxlQWRkJyxcbiAgICAnc3VibW9kdWxlSW5pdCcsXG4gICAgJ3N1Ym1vZHVsZVVwZGF0ZScsXG4gICAgJ3RhZycsXG4gICAgJ3RhZ3MnLFxuICAgICd1cGRhdGVTZXJ2ZXJJbmZvJ1xuXTtcbmZ1bmN0aW9uIGdpdFAoLi4uYXJncykge1xuICAgIGxldCBnaXQ7XG4gICAgbGV0IGNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2l0ID0gZ2l0X2ZhY3RvcnlfMS5naXRJbnN0YW5jZUZhY3RvcnkoLi4uYXJncyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNoYWluID0gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkZXJSZXR1cm4oKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlQXBpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFpblJldHVybigpIHtcbiAgICAgICAgcmV0dXJuIGNoYWluO1xuICAgIH1cbiAgICBjb25zdCBwcm9taXNlQXBpID0gWy4uLmZ1bmN0aW9uTmFtZXNCdWlsZGVyQXBpLCAuLi5mdW5jdGlvbk5hbWVzUHJvbWlzZUFwaV0ucmVkdWNlKChhcGksIG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaXNBc3luYyA9IGZ1bmN0aW9uTmFtZXNQcm9taXNlQXBpLmluY2x1ZGVzKG5hbWUpO1xuICAgICAgICBjb25zdCB2YWxpZCA9IGlzQXN5bmMgPyBhc3luY1dyYXBwZXIobmFtZSwgZ2l0KSA6IHN5bmNXcmFwcGVyKG5hbWUsIGdpdCwgYXBpKTtcbiAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmUgPSBpc0FzeW5jID8gY2hhaW5SZXR1cm4gOiBidWlsZGVyUmV0dXJuO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBpLCBuYW1lLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogZ2l0ID8gdmFsaWQgOiBhbHRlcm5hdGl2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBwcm9taXNlQXBpO1xuICAgIGZ1bmN0aW9uIGFzeW5jV3JhcHBlcihmbiwgZ2l0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgaW50ZXJmYWNlIHJlcXVpcmVzIHRoYXQgaGFuZGxlcnMgYXJlIG5vdCBzdXBwbGllZCBpbmxpbmUsICcgK1xuICAgICAgICAgICAgICAgICAgICAndHJhaWxpbmcgZnVuY3Rpb24gbm90IGFsbG93ZWQgaW4gY2FsbCB0byAnICsgZm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYWluLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh0b0Vycm9yKGVycikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBnaXRbZm5dLmFwcGx5KGdpdCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3luY1dyYXBwZXIoZm4sIGdpdCwgYXBpKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgZ2l0W2ZuXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJldHVybiBhcGk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5naXRQID0gZ2l0UDtcbmZ1bmN0aW9uIHRvRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IoZXJyb3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvbWlzZS13cmFwcGVkLmpzLm1hcCIsIlxuY29uc3Qge2dpdFB9ID0gcmVxdWlyZSgnLi9saWIvcnVubmVycy9wcm9taXNlLXdyYXBwZWQnKTtcbmNvbnN0IHtlc01vZHVsZUZhY3RvcnksIGdpdEluc3RhbmNlRmFjdG9yeSwgZ2l0RXhwb3J0RmFjdG9yeX0gPSByZXF1aXJlKCcuL2xpYi9naXQtZmFjdG9yeScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzTW9kdWxlRmFjdG9yeShcbiAgIGdpdEV4cG9ydEZhY3RvcnkoZ2l0SW5zdGFuY2VGYWN0b3J5LCB7Z2l0UH0pXG4pO1xuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgT2JzaWRpYW5HaXQgZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgQnJhbmNoSW5mbywgRmlsZVN0YXR1c1Jlc3VsdCwgU3RhdHVzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2l0TWFuYWdlciB7XG4gICAgcmVhZG9ubHkgcGx1Z2luOiBPYnNpZGlhbkdpdDtcbiAgICByZWFkb25seSBhcHA6IEFwcDtcbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IE9ic2lkaWFuR2l0KSB7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICB0aGlzLmFwcCA9IHBsdWdpbi5hcHA7XG4gICAgfVxuXG4gICAgYWJzdHJhY3Qgc3RhdHVzKCk6IFByb21pc2U8U3RhdHVzPjtcblxuICAgIGFic3RyYWN0IGNvbW1pdEFsbChtZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+O1xuXG4gICAgYWJzdHJhY3QgcHVsbCgpOiBQcm9taXNlPG51bWJlcj47XG5cbiAgICBhYnN0cmFjdCBwdXNoKCk6IFByb21pc2U8bnVtYmVyPjtcblxuICAgIGFic3RyYWN0IGNhblB1c2goKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIGFic3RyYWN0IGNoZWNrUmVxdWlyZW1lbnRzKCk6IFByb21pc2U8XCJ2YWxpZFwiIHwgXCJtaXNzaW5nLXJlcG9cIiB8IFwibWlzc2luZy1naXRcIj47XG5cbiAgICBhYnN0cmFjdCBicmFuY2hJbmZvKCk6IFByb21pc2U8QnJhbmNoSW5mbz47XG5cbiAgICBhYnN0cmFjdCBjaGVja291dChicmFuY2g6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhYnN0cmFjdCBpbml0KCk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhYnN0cmFjdCBjbG9uZSh1cmw6IHN0cmluZywgZGlyOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgYWJzdHJhY3Qgc2V0Q29uZmlnKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhYnN0cmFjdCBnZXRDb25maWcocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuXG4gICAgYWJzdHJhY3QgZmV0Y2gocmVtb3RlPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIGFic3RyYWN0IHNldFJlbW90ZShuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIGFic3RyYWN0IGdldFJlbW90ZXMoKTogUHJvbWlzZTxzdHJpbmdbXT47XG5cbiAgICBhYnN0cmFjdCBnZXRSZW1vdGVCcmFuY2hlcyhyZW1vdGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+O1xuXG4gICAgYWJzdHJhY3QgcmVtb3ZlUmVtb3RlKHJlbW90ZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhYnN0cmFjdCB1cGRhdGVVcHN0cmVhbUJyYW5jaChyZW1vdGVCcmFuY2g6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhYnN0cmFjdCB1cGRhdGVHaXRQYXRoKGdpdFBhdGg6IHN0cmluZyk6IHZvaWQ7XG5cbiAgICBhc3luYyBmb3JtYXRDb21taXRNZXNzYWdlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbW1pdE1lc3NhZ2U7XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlLmluY2x1ZGVzKFwie3tudW1GaWxlc319XCIpKSB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgdGhpcy5zdGF0dXMoKTtcbiAgICAgICAgICAgIGxldCBudW1GaWxlcyA9IHN0YXR1cy5jaGFuZ2VkLmxlbmd0aDtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShcInt7bnVtRmlsZXN9fVwiLCBTdHJpbmcobnVtRmlsZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZW1wbGF0ZS5pbmNsdWRlcyhcInt7ZmlsZXN9fVwiKSkge1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IHRoaXMuc3RhdHVzKCk7XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VzZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW107IH0gPSB7fTtcbiAgICAgICAgICAgIHN0YXR1cy5jaGFuZ2VkLmZvckVhY2goKHZhbHVlOiBGaWxlU3RhdHVzUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4IGluIGNoYW5nZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzZXRbdmFsdWUuaW5kZXhdLnB1c2godmFsdWUucGF0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc2V0W3ZhbHVlLmluZGV4XSA9IFt2YWx1ZS5wYXRoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGNodW5rcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgW2FjdGlvbiwgZmlsZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNoYW5nZXNldCkpIHtcbiAgICAgICAgICAgICAgICBjaHVua3MucHVzaChhY3Rpb24gKyBcIiBcIiArIGZpbGVzLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZpbGVzID0gY2h1bmtzLmpvaW4oXCIsIFwiKTtcblxuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKFwie3tmaWxlc319XCIsIGZpbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb21lbnQgPSAod2luZG93IGFzIGFueSkubW9tZW50O1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoXG4gICAgICAgICAgICBcInt7ZGF0ZX19XCIsXG4gICAgICAgICAgICBtb21lbnQoKS5mb3JtYXQodGhpcy5wbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5KSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlICsgXCJcXG5cXG5cIiArIFwiQWZmZWN0ZWQgZmlsZXM6XCIgKyBcIlxcblwiICsgKGF3YWl0IHRoaXMuc3RhdHVzKCkpLnN0YWdlZC5qb2luKFwiXFxuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzcGF3blN5bmMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgRmlsZVN5c3RlbUFkYXB0ZXIgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBzaW1wbGVHaXQsICogYXMgc2ltcGxlIGZyb20gXCJzaW1wbGUtZ2l0XCI7XG5pbXBvcnQgeyBHaXRNYW5hZ2VyIH0gZnJvbSBcIi4vZ2l0TWFuYWdlclwiO1xuaW1wb3J0IE9ic2lkaWFuR2l0IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IEJyYW5jaEluZm8sIEZpbGVTdGF0dXNSZXN1bHQsIFBsdWdpblN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUdpdCBleHRlbmRzIEdpdE1hbmFnZXIge1xuICAgIGdpdDogc2ltcGxlLlNpbXBsZUdpdDtcbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IE9ic2lkaWFuR2l0KSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbik7XG5cbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIgYXMgRmlsZVN5c3RlbUFkYXB0ZXI7XG4gICAgICAgIGNvbnN0IHBhdGggPSBhZGFwdGVyLmdldEJhc2VQYXRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNHaXRJbnN0YWxsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5naXQgPSBzaW1wbGVHaXQoe1xuICAgICAgICAgICAgICAgIGJhc2VEaXI6IHBhdGgsXG4gICAgICAgICAgICAgICAgYmluYXJ5OiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5naXRQYXRoIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhdHVzKCk6IFByb21pc2U8e1xuICAgICAgICBjaGFuZ2VkOiBGaWxlU3RhdHVzUmVzdWx0W107XG4gICAgICAgIHN0YWdlZDogc3RyaW5nW107XG4gICAgICAgIGNvbmZsaWN0ZWQ6IHN0cmluZ1tdO1xuICAgIH0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0U3RhdGUoUGx1Z2luU3RhdGUuc3RhdHVzKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGFuZ2VkOiBzdGF0dXMuZmlsZXMsXG4gICAgICAgICAgICBzdGFnZWQ6IHN0YXR1cy5zdGFnZWQsXG4gICAgICAgICAgICBjb25mbGljdGVkOiBzdGF0dXMuY29uZmxpY3RlZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21taXRBbGwobWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy51cGRhdGVTdWJtb2R1bGVzKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5jb21taXQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5naXQuc3ViTW9kdWxlKFtcImZvcmVhY2hcIiwgXCItLXJlY3Vyc2l2ZVwiLCBgZ2l0IGFkZCAtQSAmJiBpZiBbICEgLXogXCIkKGdpdCBzdGF0dXMgLS1wb3JjZWxhaW4pXCIgXTsgdGhlbiBnaXQgY29tbWl0IC1tIFwiJHttZXNzYWdlID8/IGF3YWl0IHRoaXMuZm9ybWF0Q29tbWl0TWVzc2FnZSgpfVwiOyBmaWBdLCAoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsdWdpbi5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5hZGQpO1xuICAgICAgICBhd2FpdCB0aGlzLmdpdC5hZGQoXG4gICAgICAgICAgICBcIi4vKlwiLCAoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldFN0YXRlKFBsdWdpblN0YXRlLmNvbW1pdCk7XG5cbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLmdpdC5jb21taXQobWVzc2FnZSA/PyBhd2FpdCB0aGlzLmZvcm1hdENvbW1pdE1lc3NhZ2UoKSkpLnN1bW1hcnkuY2hhbmdlcztcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldFN0YXRlKFBsdWdpblN0YXRlLnB1bGwpO1xuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MudXBkYXRlU3VibW9kdWxlcylcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2l0LnN1Yk1vZHVsZShbXCJ1cGRhdGVcIiwgXCItLXJlbW90ZVwiLCBcIi0tbWVyZ2VcIiwgXCItLXJlY3Vyc2l2ZVwiXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG5cbiAgICAgICAgY29uc3QgcHVsbFJlc3VsdCA9IGF3YWl0IHRoaXMuZ2l0LnB1bGwoW1wiLS1uby1yZWJhc2VcIl0sXG4gICAgICAgICAgICBhc3luYyAoZXJyOiBFcnJvciB8IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmRpc3BsYXlFcnJvcihgUHVsbCBmYWlsZWQgJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5oYW5kbGVDb25mbGljdChzdGF0dXMuY29uZmxpY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHB1bGxSZXN1bHQuZmlsZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2goKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0U3RhdGUoUGx1Z2luU3RhdGUuc3RhdHVzKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgICAgIGNvbnN0IHRyYWNraW5nQnJhbmNoID0gc3RhdHVzLnRyYWNraW5nO1xuICAgICAgICBjb25zdCBjdXJyZW50QnJhbmNoID0gc3RhdHVzLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHJlbW90ZUNoYW5nZWRGaWxlcyA9IChhd2FpdCB0aGlzLmdpdC5kaWZmU3VtbWFyeShbY3VycmVudEJyYW5jaCwgdHJhY2tpbmdCcmFuY2hdKSkuY2hhbmdlZDtcblxuICAgICAgICB0aGlzLnBsdWdpbi5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5wdXNoKTtcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnVwZGF0ZVN1Ym1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2l0LmVudih7IC4uLnByb2Nlc3MuZW52LCBcIk9CU0lESUFOX0dJVFwiOiAxIH0pLnN1Yk1vZHVsZShbXCJmb3JlYWNoXCIsIFwiLS1yZWN1cnNpdmVcIiwgYHRyYWNraW5nPSQoZ2l0IGZvci1lYWNoLXJlZiAtLWZvcm1hdD0nJSh1cHN0cmVhbTpzaG9ydCknIFwiJChnaXQgc3ltYm9saWMtcmVmIC1xIEhFQUQpXCIpOyBlY2hvICR0cmFja2luZzsgaWYgWyAhIC16IFwiJChnaXQgZGlmZiAtLXNob3J0c3RhdCAkdHJhY2tpbmcpXCIgXTsgdGhlbiBnaXQgcHVzaDsgZmlgXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG5cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmdpdC5lbnYoeyAuLi5wcm9jZXNzLmVudiwgXCJPQlNJRElBTl9HSVRcIjogMSB9KS5wdXNoKChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuXG4gICAgICAgIHJldHVybiByZW1vdGVDaGFuZ2VkRmlsZXM7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjYW5QdXNoKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICAvLyBhbGxvdyBwdXNoaW5nIGluIHN1Ym1vZHVsZXMgZXZlbiBpZiB0aGUgcm9vdCBoYXMgbm8gY2hhbmdlcy5cbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnVwZGF0ZVN1Ym1vZHVsZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgICAgICAgY29uc3QgdHJhY2tpbmdCcmFuY2ggPSBzdGF0dXMudHJhY2tpbmc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcmFuY2ggPSBzdGF0dXMuY3VycmVudDtcbiAgICAgICAgY29uc3QgcmVtb3RlQ2hhbmdlZEZpbGVzID0gKGF3YWl0IHRoaXMuZ2l0LmRpZmZTdW1tYXJ5KFtjdXJyZW50QnJhbmNoLCB0cmFja2luZ0JyYW5jaF0pKS5jaGFuZ2VkO1xuXG4gICAgICAgIHJldHVybiByZW1vdGVDaGFuZ2VkRmlsZXMgIT09IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tSZXF1aXJlbWVudHMoKTogUHJvbWlzZTxcInZhbGlkXCIgfCBcIm1pc3NpbmctcmVwb1wiIHwgXCJtaXNzaW5nLWdpdFwiPiB7XG4gICAgICAgIGlmICghdGhpcy5pc0dpdEluc3RhbGxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJtaXNzaW5nLWdpdFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF3YWl0IHRoaXMuZ2l0LmNoZWNrSXNSZXBvKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJtaXNzaW5nLXJlcG9cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ2YWxpZFwiO1xuICAgIH1cblxuICAgIGFzeW5jIGJyYW5jaEluZm8oKTogUHJvbWlzZTxCcmFuY2hJbmZvPiB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgICAgICAgY29uc3QgYnJhbmNoZXMgPSBhd2FpdCB0aGlzLmdpdC5icmFuY2goW1wiLS1uby1jb2xvclwiXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IHN0YXR1cy5jdXJyZW50LFxuICAgICAgICAgICAgdHJhY2tpbmc6IHN0YXR1cy50cmFja2luZyxcbiAgICAgICAgICAgIGJyYW5jaGVzOiBicmFuY2hlcy5hbGwsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tvdXQoYnJhbmNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQuY2hlY2tvdXQoYnJhbmNoLCAoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdpdC5pbml0KGZhbHNlLCAoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9uZSh1cmw6IHN0cmluZywgZGlyOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQuY2xvbmUodXJsLCBwYXRoLmpvaW4oKHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIgYXMgRmlsZVN5c3RlbUFkYXB0ZXIpLmdldEJhc2VQYXRoKCksIGRpciksIFtdLCAoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRDb25maWcocGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2l0LmFkZENvbmZpZyhwYXRoLCB2YWx1ZSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29uZmlnKHBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IHRoaXMuZ2l0Lmxpc3RDb25maWcoKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgICAgIHJldHVybiBjb25maWcuYWxsW3BhdGhdO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoKHJlbW90ZT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdpdC5mZXRjaChyZW1vdGUgIT0gdW5kZWZpbmVkID8gW3JlbW90ZV0gOiBbXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0UmVtb3RlKG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKChhd2FpdCB0aGlzLmdldFJlbW90ZXMoKSkuaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdpdC5yZW1vdGUoW1wic2V0LXVybFwiLCBuYW1lLCB1cmxdLCAoZXJyOiBhbnkpID0+IHRoaXMub25FcnJvcihlcnIpKTtcblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2l0LnJlbW90ZShbXCJhZGRcIiwgbmFtZSwgdXJsXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRSZW1vdGVCcmFuY2hlcyhyZW1vdGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5naXQuYnJhbmNoKFtcIi1yXCIsIFwiLS1saXN0XCIsIGAke3JlbW90ZX0qYF0sIChlcnI6IGFueSkgPT4gdGhpcy5vbkVycm9yKGVycikpO1xuICAgICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGl0ZW0gaW4gcmVzLmJyYW5jaGVzKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2gocmVzLmJyYW5jaGVzW2l0ZW1dLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFJlbW90ZXMoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZ2l0LnJlbW90ZShbXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMudHJpbSgpLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlUmVtb3RlKHJlbW90ZU5hbWU6IHN0cmluZykge1xuICAgICAgICBhd2FpdCB0aGlzLmdpdC5yZW1vdmVSZW1vdGUocmVtb3RlTmFtZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVXBzdHJlYW1CcmFuY2gocmVtb3RlQnJhbmNoOiBzdHJpbmcpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQucHVzaChbXCItLXNldC11cHN0cmVhbVwiLCAuLi5yZW1vdGVCcmFuY2guc3BsaXQoXCIvXCIpXSwgKGVycjogYW55KSA9PiB0aGlzLm9uRXJyb3IoZXJyKSk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVHaXRQYXRoKGdpdFBhdGg6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5naXQuY3VzdG9tQmluYXJ5KGdpdFBhdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNHaXRJbnN0YWxsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGV2ZXVreC9naXQtanMvaXNzdWVzLzQwMlxuICAgICAgICBjb25zdCBjb21tYW5kID0gc3Bhd25TeW5jKCdnaXQnLCBbJy0tdmVyc2lvbiddLCB7XG4gICAgICAgICAgICBzdGRpbzogJ2lnbm9yZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbW1hbmQuZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29tbWFuZC5lcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVycm9yKGVycm9yOiBFcnJvciB8IG51bGwpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5kaXNwbGF5RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgTm90aWNlLCBQbHVnaW4sIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBDaGFuZ2VkRmlsZXNNb2RhbCB9IGZyb20gXCJzcmMvbW9kYWxzL2NoYW5nZWRGaWxlc01vZGFsXCI7XG5pbXBvcnQgeyBDdXN0b21NZXNzYWdlTW9kYWwgfSBmcm9tIFwic3JjL21vZGFscy9jdXN0b21NZXNzYWdlTW9kYWxcIjtcbmltcG9ydCB7IFByb21pc2VRdWV1ZSB9IGZyb20gXCJzcmMvcHJvbWlzZVF1ZXVlXCI7XG5pbXBvcnQgeyBPYnNpZGlhbkdpdFNldHRpbmdzVGFiIH0gZnJvbSBcInNyYy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcInNyYy9zdGF0dXNCYXJcIjtcbmltcG9ydCB7IEdpdE1hbmFnZXIgfSBmcm9tIFwiLi9naXRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBHZW5lcmFsTW9kYWwgfSBmcm9tIFwiLi9tb2RhbHMvZ2VuZXJhbE1vZGFsXCI7XG5pbXBvcnQgeyBTaW1wbGVHaXQgfSBmcm9tIFwiLi9zaW1wbGVHaXRcIjtcbmltcG9ydCB7IFBsdWdpblN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIE9ic2lkaWFuR2l0U2V0dGluZ3Mge1xuICAgIGNvbW1pdE1lc3NhZ2U6IHN0cmluZztcbiAgICBjb21taXREYXRlRm9ybWF0OiBzdHJpbmc7XG4gICAgYXV0b1NhdmVJbnRlcnZhbDogbnVtYmVyO1xuICAgIGF1dG9QdWxsSW50ZXJ2YWw6IG51bWJlcjtcbiAgICBhdXRvUHVsbE9uQm9vdDogYm9vbGVhbjtcbiAgICBkaXNhYmxlUHVzaDogYm9vbGVhbjtcbiAgICBwdWxsQmVmb3JlUHVzaDogYm9vbGVhbjtcbiAgICBkaXNhYmxlUG9wdXBzOiBib29sZWFuO1xuICAgIGxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5OiBib29sZWFuO1xuICAgIHNob3dTdGF0dXNCYXI6IGJvb2xlYW47XG4gICAgdXBkYXRlU3VibW9kdWxlczogYm9vbGVhbjtcbiAgICBnaXRQYXRoOiBzdHJpbmc7XG59XG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBPYnNpZGlhbkdpdFNldHRpbmdzID0ge1xuICAgIGNvbW1pdE1lc3NhZ2U6IFwidmF1bHQgYmFja3VwOiB7e2RhdGV9fVwiLFxuICAgIGNvbW1pdERhdGVGb3JtYXQ6IFwiWVlZWS1NTS1ERCBISDptbTpzc1wiLFxuICAgIGF1dG9TYXZlSW50ZXJ2YWw6IDAsXG4gICAgYXV0b1B1bGxJbnRlcnZhbDogMCxcbiAgICBhdXRvUHVsbE9uQm9vdDogZmFsc2UsXG4gICAgZGlzYWJsZVB1c2g6IGZhbHNlLFxuICAgIHB1bGxCZWZvcmVQdXNoOiB0cnVlLFxuICAgIGRpc2FibGVQb3B1cHM6IGZhbHNlLFxuICAgIGxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5OiBmYWxzZSxcbiAgICBzaG93U3RhdHVzQmFyOiB0cnVlLFxuICAgIHVwZGF0ZVN1Ym1vZHVsZXM6IGZhbHNlLFxuICAgIGdpdFBhdGg6IFwiXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2lkaWFuR2l0IGV4dGVuZHMgUGx1Z2luIHtcbiAgICBnaXRNYW5hZ2VyOiBHaXRNYW5hZ2VyO1xuICAgIHNldHRpbmdzOiBPYnNpZGlhbkdpdFNldHRpbmdzO1xuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIHN0YXRlOiBQbHVnaW5TdGF0ZTtcbiAgICB0aW1lb3V0SURCYWNrdXA6IG51bWJlcjtcbiAgICB0aW1lb3V0SURQdWxsOiBudW1iZXI7XG4gICAgbGFzdFVwZGF0ZTogbnVtYmVyO1xuICAgIGdpdFJlYWR5ID0gZmFsc2U7XG4gICAgcHJvbWlzZVF1ZXVlOiBQcm9taXNlUXVldWUgPSBuZXcgUHJvbWlzZVF1ZXVlKCk7XG4gICAgY29uZmxpY3RPdXRwdXRGaWxlID0gXCJjb25mbGljdC1maWxlcy1vYnNpZGlhbi1naXQubWRcIjtcblxuICAgIHNldFN0YXRlKHN0YXRlOiBQbHVnaW5TdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyPy5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25sb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZyAnICsgdGhpcy5tYW5pZmVzdC5uYW1lICsgXCIgcGx1Z2luXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2JzaWRpYW5HaXRTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJwdWxsXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlB1bGwgZnJvbSByZW1vdGUgcmVwb3NpdG9yeVwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucHJvbWlzZVF1ZXVlLmFkZFRhc2soKCkgPT4gdGhpcy5wdWxsQ2hhbmdlc0Zyb21SZW1vdGUoKSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJwdXNoXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkNyZWF0ZSBiYWNrdXBcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnByb21pc2VRdWV1ZS5hZGRUYXNrKCgpID0+IHRoaXMuY3JlYXRlQmFja3VwKGZhbHNlKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImVkaXQtcmVtb3Rlc1wiLFxuICAgICAgICAgICAgbmFtZTogXCJFZGl0IHJlbW90ZXNcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB0aGlzLmVkaXRSZW1vdGVzKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcInJlbW92ZS1yZW1vdGVcIixcbiAgICAgICAgICAgIG5hbWU6IFwiUmVtb3ZlIHJlbW90ZVwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHRoaXMucmVtb3ZlUmVtb3RlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImluaXQtcmVwb1wiLFxuICAgICAgICAgICAgbmFtZTogXCJJbml0aWFsaXplIGEgbmV3IHJlcG9cIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB0aGlzLmNyZWF0ZU5ld1JlcG8oKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwiY2xvbmUtcmVwb1wiLFxuICAgICAgICAgICAgbmFtZTogXCJDbG9uZSBhbiBleGlzdGluZyByZW1vdGUgcmVwb1wiLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHRoaXMuY2xvbmVOZXdSZXBvKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImNvbW1pdC1wdXNoLXNwZWNpZmllZC1tZXNzYWdlXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkNyZWF0ZSBiYWNrdXAgd2l0aCBzcGVjaWZpZWQgbWVzc2FnZVwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IG5ldyBDdXN0b21NZXNzYWdlTW9kYWwodGhpcykub3BlbigpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJsaXN0LWNoYW5nZWQtZmlsZXNcIixcbiAgICAgICAgICAgIG5hbWU6IFwiTGlzdCBjaGFuZ2VkIGZpbGVzXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5zdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmlkbGUpO1xuXG4gICAgICAgICAgICAgICAgbmV3IENoYW5nZWRGaWxlc01vZGFsKHRoaXMsIHN0YXR1cy5jaGFuZ2VkKS5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93U3RhdHVzQmFyKSB7XG4gICAgICAgICAgICAvLyBpbml0IHN0YXR1c0JhclxuICAgICAgICAgICAgbGV0IHN0YXR1c0JhckVsID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIoc3RhdHVzQmFyRWwsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckludGVydmFsKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5KCksIDEwMDApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KCgpID0+IHRoaXMuaW5pdCgpKTtcblxuICAgIH1cblxuICAgIGFzeW5jIG9udW5sb2FkKCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElEQmFja3VwKTtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJRFB1bGwpO1xuICAgICAgICBjb25zb2xlLmxvZygndW5sb2FkaW5nICcgKyB0aGlzLm1hbmlmZXN0Lm5hbWUgKyBcIiBwbHVnaW5cIik7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG4gICAgfVxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBhc3luYyBzYXZlTGFzdEF1dG8oZGF0ZTogRGF0ZSwgbW9kZTogXCJiYWNrdXBcIiB8IFwicHVsbFwiKSB7XG4gICAgICAgIGlmIChtb2RlID09PSBcImJhY2t1cFwiKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5tYW5pZmVzdC5pZCArIFwiOmxhc3RBdXRvQmFja3VwXCIsIGRhdGUudG9TdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJwdWxsXCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm1hbmlmZXN0LmlkICsgXCI6bGFzdEF1dG9QdWxsXCIsIGRhdGUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTGFzdEF1dG8oKTogUHJvbWlzZTx7IFwiYmFja3VwXCI6IERhdGUsIFwicHVsbFwiOiBEYXRlOyB9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcImJhY2t1cFwiOiBuZXcgRGF0ZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5tYW5pZmVzdC5pZCArIFwiOmxhc3RBdXRvQmFja3VwXCIpID8/IFwiXCIpLFxuICAgICAgICAgICAgXCJwdWxsXCI6IG5ldyBEYXRlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm1hbmlmZXN0LmlkICsgXCI6bGFzdEF1dG9QdWxsXCIpID8/IFwiXCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZ2l0TWFuYWdlciA9IG5ldyBTaW1wbGVHaXQodGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5jaGVja1JlcXVpcmVtZW50cygpO1xuICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibWlzc2luZy1naXRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoXCJDYW5ub3QgcnVuIGdpdCBjb21tYW5kXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWlzc2luZy1yZXBvXCI6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJDYW4ndCBmaW5kIGEgdmFsaWQgZ2l0IHJlcG9zaXRvcnkuIFBsZWFzZSBjcmVhdGUgb25lIHZpYSB0aGUgZ2l2ZW4gY29tbWFuZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdpdFJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvUHVsbE9uQm9vdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlUXVldWUuYWRkVGFzaygoKSA9PiB0aGlzLnB1bGxDaGFuZ2VzRnJvbVJlbW90ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0QXV0b3MgPSBhd2FpdCB0aGlzLmxvYWRMYXN0QXV0bygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsIC0gKE1hdGgucm91bmQoKChub3cuZ2V0VGltZSgpIC0gbGFzdEF1dG9zLmJhY2t1cC5nZXRUaW1lKCkpIC8gMTAwMCkgLyA2MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9CYWNrdXAoZGlmZiA8PSAwID8gMCA6IGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsIC0gKE1hdGgucm91bmQoKChub3cuZ2V0VGltZSgpIC0gbGFzdEF1dG9zLnB1bGwuZ2V0VGltZSgpKSAvIDEwMDApIC8gNjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUHVsbChkaWZmIDw9IDAgPyAwIDogZGlmZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VpcmQgaGFwcGVuZWQuIFRoZSAnY2hlY2tSZXF1aXJlbWVudHMnIHJlc3VsdCBpcyBcIiArIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlTmV3UmVwbygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgbmV3IE5vdGljZShcIkluaXRpYWxpemVkIG5ldyByZXBvXCIpO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb25lTmV3UmVwbygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgR2VuZXJhbE1vZGFsKHRoaXMuYXBwLCBbXSwgXCJFbnRlciByZW1vdGUgVVJMXCIpO1xuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBtb2RhbC5vcGVuKCk7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIGxldCBkaXIgPSBhd2FpdCBuZXcgR2VuZXJhbE1vZGFsKHRoaXMuYXBwLCBbXSwgXCJFbnRlciBkaXJlY3RvcnkgZm9yIGNsb25lLiBJdCBuZWVkcyB0byBiZSBlbXB0eSBvciBub3QgZXhpc3RlbnQuXCIpLm9wZW4oKTtcbiAgICAgICAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSBwYXRoLm5vcm1hbGl6ZShkaXIpO1xuICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoYENsb25pbmcgbmV3IHJlcG8gaW50byBcIiR7ZGlyfVwiYCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmNsb25lKHVybCwgZGlyKTtcbiAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiQ2xvbmVkIG5ldyByZXBvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmllcyB0byBjYWxsIGB0aGlzLmluaXQoKWAgaWYgbmVjZXNzYXJ5LCBvdGhlcndpc2UgcmV0dXJucyBkaXJlY3RseVxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgYHRoaXMuZ2l0TWFuYWdlcmAgaXMgcmVhZHkgdG8gYmUgdXNlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIGFzeW5jIGlzQWxsSW5pdGlhbGl6ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGlmICghdGhpcy5naXRSZWFkeSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2l0UmVhZHk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbENoYW5nZXNGcm9tUmVtb3RlKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGlmICghYXdhaXQgdGhpcy5pc0FsbEluaXRpYWxpemVkKCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBmaWxlc1VwZGF0ZWQgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIucHVsbCgpO1xuICAgICAgICBpZiAoZmlsZXNVcGRhdGVkID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShgUHVsbGVkIG5ldyBjaGFuZ2VzLiAke2ZpbGVzVXBkYXRlZH0gZmlsZXMgdXBkYXRlZGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShcIkV2ZXJ5dGhpbmcgaXMgdXAtdG8tZGF0ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdpdE1hbmFnZXIgaW5zdGFuY2VvZiBTaW1wbGVHaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5zdGF0dXMoKTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoYFlvdSBoYXZlICR7c3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RofSBjb25mbGljdCBmaWxlc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVCYWNrdXAoZnJvbUF1dG9CYWNrdXA6IGJvb2xlYW4sIGNvbW1pdE1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFhd2FpdCB0aGlzLmlzQWxsSW5pdGlhbGl6ZWQoKSkgcmV0dXJuO1xuXG5cbiAgICAgICAgaWYgKCFmcm9tQXV0b0JhY2t1cCkge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0aGlzLmNvbmZsaWN0T3V0cHV0RmlsZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5kZWxldGUoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2l0TWFuYWdlciBpbnN0YW5jZW9mIFNpbXBsZUdpdCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLnN0YXR1cygpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgY29uZmxpY3QgZmlsZXMgb24gYXV0byBiYWNrdXBcbiAgICAgICAgICAgIGlmIChmcm9tQXV0b0JhY2t1cCAmJiBzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihgRGlkIG5vdCBjb21taXQsIGJlY2F1c2UgeW91IGhhdmUgJHtzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGh9IGNvbmZsaWN0IGZpbGVzLiBQbGVhc2UgcmVzb2x2ZSB0aGVtIGFuZCBjb21taXQgcGVyIGNvbW1hbmQuYCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDb25mbGljdChzdGF0dXMuY29uZmxpY3RlZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbmdlZEZpbGVzID0gKGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5zdGF0dXMoKSkuY2hhbmdlZDtcblxuICAgICAgICBpZiAoY2hhbmdlZEZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgY29tbWl0ZWRGaWxlcyA9IGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5jb21taXRBbGwoY29tbWl0TWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKGBDb21taXR0ZWQgJHtjb21taXRlZEZpbGVzfSBmaWxlc2ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShcIk5vIGNoYW5nZXMgdG8gY29tbWl0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmRpc2FibGVQdXNoKSB7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCB0aGlzLmdpdE1hbmFnZXIuYnJhbmNoSW5mbygpKS50cmFja2luZykge1xuICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJObyB1cHN0cmVhbSBicmFuY2ggaXMgc2V0LiBQbGVhc2Ugc2VsZWN0IG9uZS5cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlQnJhbmNoID0gYXdhaXQgdGhpcy5zZWxlY3RSZW1vdGVCcmFuY2goKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZW1vdGVCcmFuY2ggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKFwiRGlkIG5vdCBwdXNoLiBObyB1cHN0cmVhbS1icmFuY2ggaXMgc2V0IVwiLCAxMDAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdpdE1hbmFnZXIudXBkYXRlVXBzdHJlYW1CcmFuY2gocmVtb3RlQnJhbmNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gUHJldmVudCBwbHVnaW4gdG8gcHVsbC9wdXNoIGF0IGV2ZXJ5IGNhbGwgb2YgY3JlYXRlQmFja3VwLiBPbmx5IGlmIHVucHVzaGVkIGNvbW1pdHMgYXJlIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmdpdE1hbmFnZXIuY2FuUHVzaCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucHVsbEJlZm9yZVB1c2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHVsbGVkRmlsZXNMZW5ndGggPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIucHVsbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHVsbGVkRmlsZXNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKGBQdWxsZWQgJHtwdWxsZWRGaWxlc0xlbmd0aH0gZmlsZXMgZnJvbSByZW1vdGVgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggYmVjYXVzZSBvZiBwdWxsXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1czogYW55O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdpdE1hbmFnZXIgaW5zdGFuY2VvZiBTaW1wbGVHaXQgJiYgKHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5zdGF0dXMoKSkuY29uZmxpY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGBDYW5ub3QgcHVzaC4gWW91IGhhdmUgJHtzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGh9IGNvbmZsaWN0IGZpbGVzYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmxpY3Qoc3RhdHVzLmNvbmZsaWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHVzaGVkRmlsZXMgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKGBQdXNoZWQgJHtwdXNoZWRGaWxlc30gZmlsZXMgdG8gcmVtb3RlYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKFwiTm8gY2hhbmdlcyB0byBwdXNoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG4gICAgfVxuXG4gICAgc3RhcnRBdXRvQmFja3VwKG1pbnV0ZXM/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aW1lb3V0SURCYWNrdXAgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb21pc2VRdWV1ZS5hZGRUYXNrKCgpID0+IHRoaXMuY3JlYXRlQmFja3VwKHRydWUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVMYXN0QXV0byhuZXcgRGF0ZSgpLCBcImJhY2t1cFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQmFja3VwKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKG1pbnV0ZXMgPz8gdGhpcy5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsKSAqIDYwMDAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhcnRBdXRvUHVsbChtaW51dGVzPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGltZW91dElEUHVsbCA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZVF1ZXVlLmFkZFRhc2soKCkgPT4gdGhpcy5wdWxsQ2hhbmdlc0Zyb21SZW1vdGUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlTGFzdEF1dG8obmV3IERhdGUoKSwgXCJwdWxsXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9QdWxsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKG1pbnV0ZXMgPz8gdGhpcy5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsKSAqIDYwMDAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2xlYXJBdXRvQmFja3VwKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0SURCYWNrdXApIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SURCYWNrdXApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNsZWFyQXV0b1B1bGwoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJRFB1bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SURQdWxsKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVDb25mbGljdChjb25mbGljdGVkOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmNvbmZsaWN0ZWQpO1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtcbiAgICAgICAgICAgIFwiIyBDb25mbGljdCBmaWxlc1wiLFxuICAgICAgICAgICAgXCJQbGVhc2UgcmVzb2x2ZSB0aGVtIGFuZCBjb21taXQgcGVyIGNvbW1hbmQgKFRoaXMgZmlsZSB3aWxsIGJlIGRlbGV0ZWQgYmVmb3JlIHRoZSBjb21taXQpLlwiLFxuICAgICAgICAgICAgLi4uY29uZmxpY3RlZC5tYXAoZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChlKTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmZpbGVUb0xpbmt0ZXh0KGZpbGUsIFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAtIFtbJHtsaW5rfV1dYDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYC0gTm90IGEgZmlsZTogJHtlfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy53cml0ZUFuZE9wZW5GaWxlKGxpbmVzLmpvaW4oXCJcXG5cIikpO1xuICAgIH1cblxuICAgIGFzeW5jIGVkaXRSZW1vdGVzKCk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIGlmICghYXdhaXQgdGhpcy5pc0FsbEluaXRpYWxpemVkKCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCByZW1vdGVzID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmdldFJlbW90ZXMoKTtcblxuICAgICAgICBjb25zdCBuYW1lTW9kYWwgPSBuZXcgR2VuZXJhbE1vZGFsKHRoaXMuYXBwLCByZW1vdGVzLCBcIlNlbGVjdCBvciBjcmVhdGUgYSBuZXcgcmVtb3RlIGJ5IHR5cGluZyBpdHMgbmFtZSBhbmQgc2VsZWN0aW5nIGl0XCIpO1xuICAgICAgICBjb25zdCByZW1vdGVOYW1lID0gYXdhaXQgbmFtZU1vZGFsLm9wZW4oKTtcblxuICAgICAgICBpZiAocmVtb3RlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdXJsTW9kYWwgPSBuZXcgR2VuZXJhbE1vZGFsKHRoaXMuYXBwLCBbXSwgXCJFbnRlciB0aGUgcmVtb3RlIFVSTFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZVVSTCA9IGF3YWl0IHVybE1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2l0TWFuYWdlci5zZXRSZW1vdGUocmVtb3RlTmFtZSwgcmVtb3RlVVJMKTtcbiAgICAgICAgICAgIHJldHVybiByZW1vdGVOYW1lO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhc3luYyBzZWxlY3RSZW1vdGVCcmFuY2goKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgbGV0IHJlbW90ZXMgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuZ2V0UmVtb3RlcygpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRSZW1vdGU6IHN0cmluZztcbiAgICAgICAgaWYgKHJlbW90ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFJlbW90ZSA9IGF3YWl0IHRoaXMuZWRpdFJlbW90ZXMoKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFJlbW90ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZW1vdGVzID0gYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmdldFJlbW90ZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5hbWVNb2RhbCA9IG5ldyBHZW5lcmFsTW9kYWwodGhpcy5hcHAsIHJlbW90ZXMsIFwiU2VsZWN0IG9yIGNyZWF0ZSBhIG5ldyByZW1vdGUgYnkgdHlwaW5nIGl0cyBuYW1lIGFuZCBzZWxlY3RpbmcgaXRcIik7XG4gICAgICAgIGNvbnN0IHJlbW90ZU5hbWUgPSBzZWxlY3RlZFJlbW90ZSA/PyBhd2FpdCBuYW1lTW9kYWwub3BlbigpO1xuXG4gICAgICAgIGlmIChyZW1vdGVOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKFwiRmV0Y2hpbmcgcmVtb3RlIGJyYW5jaGVzXCIpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5naXRNYW5hZ2VyLmZldGNoKHJlbW90ZU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgYnJhbmNoZXMgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuZ2V0UmVtb3RlQnJhbmNoZXMocmVtb3RlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBicmFuY2hNb2RhbCA9IG5ldyBHZW5lcmFsTW9kYWwodGhpcy5hcHAsIGJyYW5jaGVzLCBcIlNlbGVjdCBvciBjcmVhdGUgYSBuZXcgcmVtb3RlIGJyYW5jaCBieSB0eXBpbmcgaXRzIG5hbWUgYW5kIHNlbGVjdGluZyBpdFwiKTtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBicmFuY2hNb2RhbC5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmVSZW1vdGUoKSB7XG4gICAgICAgIGlmICghYXdhaXQgdGhpcy5pc0FsbEluaXRpYWxpemVkKCkpIHJldHVybjtcblxuXG4gICAgICAgIGNvbnN0IHJlbW90ZXMgPSBhd2FpdCB0aGlzLmdpdE1hbmFnZXIuZ2V0UmVtb3RlcygpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVNb2RhbCA9IG5ldyBHZW5lcmFsTW9kYWwodGhpcy5hcHAsIHJlbW90ZXMsIFwiU2VsZWN0IGEgcmVtb3RlXCIpO1xuICAgICAgICBjb25zdCByZW1vdGVOYW1lID0gYXdhaXQgbmFtZU1vZGFsLm9wZW4oKTtcblxuICAgICAgICBpZiAocmVtb3RlTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5naXRNYW5hZ2VyLnJlbW92ZVJlbW90ZShyZW1vdGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHdyaXRlQW5kT3BlbkZpbGUodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIud3JpdGUodGhpcy5jb25mbGljdE91dHB1dEZpbGUsIHRleHQpO1xuXG4gICAgICAgIGxldCBmaWxlSXNBbHJlYWR5T3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5pdGVyYXRlQWxsTGVhdmVzKGxlYWYgPT4ge1xuICAgICAgICAgICAgaWYgKGxlYWYuZ2V0RGlzcGxheVRleHQoKSAhPSBcIlwiICYmIHRoaXMuY29uZmxpY3RPdXRwdXRGaWxlLnN0YXJ0c1dpdGgobGVhZi5nZXREaXNwbGF5VGV4dCgpKSkge1xuICAgICAgICAgICAgICAgIGZpbGVJc0FscmVhZHlPcGVuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFmaWxlSXNBbHJlYWR5T3BlbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHRoaXMuY29uZmxpY3RPdXRwdXRGaWxlLCBcIi9cIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZWdpb246IGRpc3BsYXlpbmcgLyBmb3JtYXR0aW5nIG1lc3NhZ2VzXG4gICAgZGlzcGxheU1lc3NhZ2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSA0ICogMTAwMCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXR1c0Jhcj8uZGlzcGxheU1lc3NhZ2UobWVzc2FnZS50b0xvd2VyQ2FzZSgpLCB0aW1lb3V0KTtcblxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZGlzYWJsZVBvcHVwcykge1xuICAgICAgICAgICAgbmV3IE5vdGljZShtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBnaXQgb2JzaWRpYW4gbWVzc2FnZTogJHttZXNzYWdlfWApO1xuICAgIH1cbiAgICBkaXNwbGF5RXJyb3IobWVzc2FnZTogYW55LCB0aW1lb3V0OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgICAgIC8vIFNvbWUgZXJyb3JzIG1pZ2h0IG5vdCBiZSBvZiB0eXBlIHN0cmluZ1xuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS50b1N0cmluZygpO1xuICAgICAgICBuZXcgTm90aWNlKG1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2l0IG9ic2lkaWFuIGVycm9yOiAke21lc3NhZ2V9YCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyPy5kaXNwbGF5TWVzc2FnZShtZXNzYWdlLnRvTG93ZXJDYXNlKCksIHRpbWVvdXQpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiRnV6enlTdWdnZXN0TW9kYWwiLCJTdWdnZXN0TW9kYWwiLCJTZXR0aW5nIiwiTm90aWNlIiwiUGx1Z2luU2V0dGluZ1RhYiIsImdpdF9lcnJvcl8xIiwicmVxdWlyZSQkMCIsIm9zIiwidHR5IiwidXRpbCIsInJlcXVpcmUkJDEiLCJ0aGlzIiwiZnNfMSIsImZpbGVfZXhpc3RzXzEiLCJ1dGlsXzEiLCJhcmd1bWVudF9maWx0ZXJzXzEiLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwicmVxdWlyZSQkNiIsInJlcXVpcmUkJDciLCJ1dGlsc18xIiwidGFza19jb25maWd1cmF0aW9uX2Vycm9yXzEiLCJ0YXNrXzEiLCJDbGVhblN1bW1hcnlfMSIsImNoZWNrX2lzX3JlcG9fMSIsImNsZWFuXzEiLCJjb25maWdfMSIsImdpdF9jb25zdHJ1Y3RfZXJyb3JfMSIsImdpdF9wbHVnaW5fZXJyb3JfMSIsImdpdF9yZXNwb25zZV9lcnJvcl8xIiwicmVzZXRfMSIsImRlYnVnXzEiLCJnaXRfbG9nZ2VyXzEiLCJ0YXNrc19wZW5kaW5nX3F1ZXVlXzEiLCJ0YXNrIiwiZ2l0RXJyb3IiLCJjaGlsZF9wcm9jZXNzXzEiLCJnaXRfZXhlY3V0b3JfY2hhaW5fMSIsInBhcnNlX2RpZmZfc3VtbWFyeV8xIiwicGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xIiwicGFyc2VfcmVtb3RlX29iamVjdHNfMSIsInBhcnNlX3JlbW90ZV9tZXNzYWdlc18xIiwiTWVyZ2VTdW1tYXJ5XzEiLCJwYXJzZV9wdWxsXzEiLCJwYXJzZV9tZXJnZV8xIiwicGFyc2VfcHVzaF8xIiwidGFza19jYWxsYmFja18xIiwiY2hhbmdlX3dvcmtpbmdfZGlyZWN0b3J5XzEiLCJoYXNoX29iamVjdF8xIiwiaW5pdF8xIiwibWVyZ2VfMSIsInB1c2hfMSIsInN0YXR1c18xIiwibG9nXzEiLCJwcm9taXNlX2RlZmVycmVkXzEiLCJCcmFuY2hEZWxldGVTdW1tYXJ5XzEiLCJCcmFuY2hTdW1tYXJ5XzEiLCJwYXJzZV9icmFuY2hfZGVsZXRlXzEiLCJwYXJzZV9icmFuY2hfMSIsIkNoZWNrSWdub3JlXzEiLCJwYXJzZV9jb21taXRfMSIsInBhcnNlX2ZldGNoXzEiLCJwYXJzZV9tb3ZlXzEiLCJHZXRSZW1vdGVTdW1tYXJ5XzEiLCJyZXF1aXJlJCQ4IiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDEwIiwicmVxdWlyZSQkMTEiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDEzIiwicmVxdWlyZSQkMTQiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE2IiwicmVxdWlyZSQkMTciLCJyZXF1aXJlJCQxOCIsInJlcXVpcmUkJDE5IiwicmVxdWlyZSQkMjAiLCJyZXF1aXJlJCQyMSIsInJlcXVpcmUkJDIyIiwicGx1Z2lucyIsInBsdWdpbnNfMSIsIkdpdCIsImdpdF9mYWN0b3J5XzEiLCJzaW1wbGVHaXQiLCJwYXRoIiwic3Bhd25TeW5jIiwiVEZpbGUiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBQ0Q7QUFDTyxJQUFJLFFBQVEsR0FBRyxXQUFXO0FBQ2pDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3JELFFBQVEsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0QsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLFlBQVksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekYsU0FBUztBQUNULFFBQVEsT0FBTyxDQUFDLENBQUM7QUFDakIsTUFBSztBQUNMLElBQUksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMzQyxFQUFDO0FBNEJEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMs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QUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDcEMsR0FBRztBQUNILEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sQ0FBQyxFQUFFLEVBQUU7QUFDckIsRUFBRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsR0FBRztBQUNILEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFO0FBQ3BDLEVBQUUsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FB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LFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxHQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN2SCxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsRUFBRTtBQUNsSSxFQUFF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RUFBRTtBQUNMLEdBQUcsRUFBRTtBQUNMLEdBQUcsRUFBRTtBQUNMLEdBQUcsRUFBRTtBQUNMLEdBQUcsRUFBRTtBQUNMLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsR0FBRztBQUNOLEdBQUcsQ0FBQztBQUNKLEVBQUU7QUFDRixDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUU7QUFDaEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENB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LEtBQUtBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM00sSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUtBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hLLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsSyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBS0EsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEssSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDcEYsUUFBUUEsS0FBTyxDQUFDLE1BQU0sQ0FB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
