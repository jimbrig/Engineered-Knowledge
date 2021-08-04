'use strict';

var obsidian = require('obsidian');

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    ignoreFolders: [".git/", ".obsidian/"],
    renameFileTypes: ["png", "jpg", "gif"],
    renameOnlyLinkedAttachments: true,
    mergeTheSameAttachments: true,
};
class SettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Unique attachments - Settings' });
        new obsidian.Setting(containerEl)
            .setName("File types to rename")
            .setDesc("Search and rename attachments of the listed file types. Write types separated by comma.")
            .addTextArea(cb => cb
            .setPlaceholder("Example: jpg,png,gif")
            .setValue(this.plugin.settings.renameFileTypes.join(","))
            .onChange((value) => {
            let extensions = value.trim().split(",");
            this.plugin.settings.renameFileTypes = extensions;
            this.plugin.saveSettings();
        }));
        new obsidian.Setting(containerEl)
            .setName("Ignore folders")
            .setDesc("Do not search or rename attachments in these folders. Write each folder on a new line.")
            .addTextArea(cb => cb
            .setPlaceholder("Example:\n.git/\n.obsidian/")
            .setValue(this.plugin.settings.ignoreFolders.join("\n"))
            .onChange((value) => {
            let paths = value.trim().split("\n").map(value => this.getNormalizedPath(value) + "/");
            this.plugin.settings.ignoreFolders = paths;
            this.plugin.saveSettings();
        }));
        new obsidian.Setting(containerEl)
            .setName('Rename only linked attachments')
            .setDesc('Rename only attachments that are used in notes. If disabled, all found files will be renamed.')
            .addToggle(cb => cb.onChange(value => {
            this.plugin.settings.renameOnlyLinkedAttachments = value;
            this.plugin.saveSettings();
        }).setValue(this.plugin.settings.renameOnlyLinkedAttachments));
        new obsidian.Setting(containerEl)
            .setName('Delete duplicates')
            .setDesc('If several files in the same folder have identical contents then delete duplicates. Otherwise, the file will be ignored (not renamed).')
            .addToggle(cb => cb.onChange(value => {
            this.plugin.settings.mergeTheSameAttachments = value;
            this.plugin.saveSettings();
        }).setValue(this.plugin.settings.mergeTheSameAttachments));
    }
    getNormalizedPath(path) {
        return path.length == 0 ? path : obsidian.normalizePath(path);
    }
}

class Utils {
    static delay(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => setTimeout(resolve, ms));
        });
    }
    static normalizePathForFile(path) {
        path = path.replace(/\\/gi, "/"); //replace \ to /
        path = path.replace(/%20/gi, " "); //replace %20 to space
        return path;
    }
    static normalizePathForLink(path) {
        path = path.replace(/\\/gi, "/"); //replace \ to /
        path = path.replace(/ /gi, "%20"); //replace space to %20
        return path;
    }
}

class path {
    static join(...parts) {
        if (arguments.length === 0)
            return '.';
        var joined;
        for (var i = 0; i < arguments.length; ++i) {
            var arg = arguments[i];
            if (arg.length > 0) {
                if (joined === undefined)
                    joined = arg;
                else
                    joined += '/' + arg;
            }
        }
        if (joined === undefined)
            return '.';
        return this.posixNormalize(joined);
    }
    static dirname(path) {
        if (path.length === 0)
            return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/;
        var end = -1;
        var matchedSlash = true;
        for (var i = path.length - 1; i >= 1; --i) {
            code = path.charCodeAt(i);
            if (code === 47 /*/*/) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            }
            else {
                // We saw the first non-path separator
                matchedSlash = false;
            }
        }
        if (end === -1)
            return hasRoot ? '/' : '.';
        if (hasRoot && end === 1)
            return '//';
        return path.slice(0, end);
    }
    static basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string')
            throw new TypeError('"ext" argument must be a string');
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path)
                return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= 0; --i) {
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                // We matched the extension, so mark this as the end of our path
                                // component
                                end = i;
                            }
                        }
                        else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end)
                end = firstNonSlashEnd;
            else if (end === -1)
                end = path.length;
            return path.slice(start, end);
        }
        else {
            for (i = path.length - 1; i >= 0; --i) {
                if (path.charCodeAt(i) === 47 /*/*/) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1)
                return '';
            return path.slice(start, end);
        }
    }
    static extname(path) {
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for (var i = path.length - 1; i >= 0; --i) {
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1)
                    startDot = i;
                else if (preDotState !== 1)
                    preDotState = 1;
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 || end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            return '';
        }
        return path.slice(startDot, end);
    }
    static parse(path) {
        var ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0)
            return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        }
        else {
            start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for (; i >= start; --i) {
            code = path.charCodeAt(i);
            if (code === 47 /*/*/) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1)
                    startDot = i;
                else if (preDotState !== 1)
                    preDotState = 1;
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 || end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute)
                    ret.base = ret.name = path.slice(1, end);
                else
                    ret.base = ret.name = path.slice(startPart, end);
            }
        }
        else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            }
            else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0)
            ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute)
            ret.dir = '/';
        return ret;
    }
    static posixNormalize(path) {
        if (path.length === 0)
            return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;
        // Normalize the path
        path = this.normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute)
            path = '.';
        if (path.length > 0 && trailingSeparator)
            path += '/';
        if (isAbsolute)
            return '/' + path;
        return path;
    }
    static normalizeStringPosix(path, allowAboveRoot) {
        var res = '';
        var lastSegmentLength = 0;
        var lastSlash = -1;
        var dots = 0;
        var code;
        for (var i = 0; i <= path.length; ++i) {
            if (i < path.length)
                code = path.charCodeAt(i);
            else if (code === 47 /*/*/)
                break;
            else
                code = 47 /*/*/;
            if (code === 47 /*/*/) {
                if (lastSlash === i - 1 || dots === 1) ;
                else if (lastSlash !== i - 1 && dots === 2) {
                    if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
                        if (res.length > 2) {
                            var lastSlashIndex = res.lastIndexOf('/');
                            if (lastSlashIndex !== res.length - 1) {
                                if (lastSlashIndex === -1) {
                                    res = '';
                                    lastSegmentLength = 0;
                                }
                                else {
                                    res = res.slice(0, lastSlashIndex);
                                    lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                                }
                                lastSlash = i;
                                dots = 0;
                                continue;
                            }
                        }
                        else if (res.length === 2 || res.length === 1) {
                            res = '';
                            lastSegmentLength = 0;
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    }
                    if (allowAboveRoot) {
                        if (res.length > 0)
                            res += '/..';
                        else
                            res = '..';
                        lastSegmentLength = 2;
                    }
                }
                else {
                    if (res.length > 0)
                        res += '/' + path.slice(lastSlash + 1, i);
                    else
                        res = path.slice(lastSlash + 1, i);
                    lastSegmentLength = i - lastSlash - 1;
                }
                lastSlash = i;
                dots = 0;
            }
            else if (code === 46 /*.*/ && dots !== -1) {
                ++dots;
            }
            else {
                dots = -1;
            }
        }
        return res;
    }
    static posixResolve(...args) {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path;
            if (i >= 0)
                path = args[i];
            else {
                if (cwd === undefined)
                    cwd = process.cwd();
                path = cwd;
            }
            // Skip empty entries
            if (path.length === 0) {
                continue;
            }
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = this.normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0)
                return '/' + resolvedPath;
            else
                return '/';
        }
        else if (resolvedPath.length > 0) {
            return resolvedPath;
        }
        else {
            return '.';
        }
    }
    static relative(from, to) {
        if (from === to)
            return '';
        from = this.posixResolve(from);
        to = this.posixResolve(to);
        if (from === to)
            return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
            if (from.charCodeAt(fromStart) !== 47 /*/*/)
                break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
            if (to.charCodeAt(toStart) !== 47 /*/*/)
                break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/) {
                        // We get here if `from` is the exact base path for `to`.
                        // For example: from='/foo/bar'; to='/foo/bar/baz'
                        return to.slice(toStart + i + 1);
                    }
                    else if (i === 0) {
                        // We get here if `from` is the root
                        // For example: from='/'; to='/foo'
                        return to.slice(toStart + i);
                    }
                }
                else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
                        // We get here if `to` is the exact base path for `from`.
                        // For example: from='/foo/bar/baz'; to='/foo/bar'
                        lastCommonSep = i;
                    }
                    else if (i === 0) {
                        // We get here if `to` is the root.
                        // For example: from='/foo'; to='/'
                        lastCommonSep = 0;
                    }
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode)
                break;
            else if (fromCode === 47 /*/*/)
                lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
                if (out.length === 0)
                    out += '..';
                else
                    out += '/..';
            }
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0)
            return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/)
                ++toStart;
            return to.slice(toStart);
        }
    }
}

//simple regex
// const markdownLinkOrEmbedRegexSimple = /\[(.*?)\]\((.*?)\)/gim
// const markdownLinkRegexSimple = /(?<!\!)\[(.*?)\]\((.*?)\)/gim;
// const markdownEmbedRegexSimple = /\!\[(.*?)\]\((.*?)\)/gim
// const wikiLinkOrEmbedRegexSimple = /\[\[(.*?)\]\]/gim
// const wikiLinkRegexSimple = /(?<!\!)\[\[(.*?)\]\]/gim;
// const wikiEmbedRegexSimple = /\!\[\[(.*?)\]\]/gim
//with escaping \ characters
const markdownLinkOrEmbedRegexG = /(?<!\\)\[(.*?)(?<!\\)\]\((.*?)(?<!\\)\)/gim;
const markdownLinkRegexG = /(?<!\!)(?<!\\)\[(.*?)(?<!\\)\]\((.*?)(?<!\\)\)/gim;
const markdownEmbedRegexG = /(?<!\\)\!\[(.*?)(?<!\\)\]\((.*?)(?<!\\)\)/gim;
const wikiLinkOrEmbedRegexG = /(?<!\\)\[\[(.*?)(?<!\\)\]\]/gim;
const wikiLinkRegexG = /(?<!\!)(?<!\\)\[\[(.*?)(?<!\\)\]\]/gim;
const wikiEmbedRegexG = /(?<!\\)\!\[\[(.*?)(?<!\\)\]\]/gim;
const markdownLinkRegex = /(?<!\!)(?<!\\)\[(.*?)(?<!\\)\]\((.*?)(?<!\\)\)/im;
class LinksHandler {
    constructor(app, consoleLogPrefix = "") {
        this.app = app;
        this.consoleLogPrefix = consoleLogPrefix;
    }
    checkIsCorrectMarkdownEmbed(text) {
        let elements = text.match(markdownEmbedRegexG);
        return (elements != null && elements.length > 0);
    }
    checkIsCorrectMarkdownLink(text) {
        let elements = text.match(markdownLinkRegexG);
        return (elements != null && elements.length > 0);
    }
    checkIsCorrectMarkdownEmbedOrLink(text) {
        let elements = text.match(markdownLinkOrEmbedRegexG);
        return (elements != null && elements.length > 0);
    }
    checkIsCorrectWikiEmbed(text) {
        let elements = text.match(wikiEmbedRegexG);
        return (elements != null && elements.length > 0);
    }
    checkIsCorrectWikiLink(text) {
        let elements = text.match(wikiLinkRegexG);
        return (elements != null && elements.length > 0);
    }
    checkIsCorrectWikiEmbedOrLink(text) {
        let elements = text.match(wikiLinkOrEmbedRegexG);
        return (elements != null && elements.length > 0);
    }
    getFileByLink(link, owningNotePath) {
        let fullPath = this.getFullPathForLink(link, owningNotePath);
        let file = this.getFileByPath(fullPath);
        return file;
    }
    getFileByPath(path) {
        path = Utils.normalizePathForFile(path);
        let files = this.app.vault.getFiles();
        let file = files.find(file => Utils.normalizePathForFile(file.path) === path);
        return file;
    }
    getFullPathForLink(link, owningNotePath) {
        link = Utils.normalizePathForFile(link);
        owningNotePath = Utils.normalizePathForFile(owningNotePath);
        let parentFolder = owningNotePath.substring(0, owningNotePath.lastIndexOf("/"));
        let fullPath = path.join(parentFolder, link);
        fullPath = Utils.normalizePathForFile(fullPath);
        return fullPath;
    }
    getAllCachedLinksToFile(filePath) {
        var _a;
        let allLinks = {};
        let notes = this.app.vault.getMarkdownFiles();
        if (notes) {
            for (let note of notes) {
                //!!! this can return undefined if note was just updated
                let links = (_a = this.app.metadataCache.getCache(note.path)) === null || _a === void 0 ? void 0 : _a.links;
                if (links) {
                    for (let link of links) {
                        let linkFullPath = this.getFullPathForLink(link.link, note.path);
                        if (linkFullPath == filePath) {
                            if (!allLinks[note.path])
                                allLinks[note.path] = [];
                            allLinks[note.path].push(link);
                        }
                    }
                }
            }
        }
        return allLinks;
    }
    getAllCachedEmbedsToFile(filePath) {
        var _a;
        let allEmbeds = {};
        let notes = this.app.vault.getMarkdownFiles();
        if (notes) {
            for (let note of notes) {
                //!!! this can return undefined if note was just updated
                let embeds = (_a = this.app.metadataCache.getCache(note.path)) === null || _a === void 0 ? void 0 : _a.embeds;
                if (embeds) {
                    for (let embed of embeds) {
                        let linkFullPath = this.getFullPathForLink(embed.link, note.path);
                        if (linkFullPath == filePath) {
                            if (!allEmbeds[note.path])
                                allEmbeds[note.path] = [];
                            allEmbeds[note.path].push(embed);
                        }
                    }
                }
            }
        }
        return allEmbeds;
    }
    updateLinksToRenamedFile(oldNotePath, newNotePath, changelinksAlt = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let notes = yield this.getNotesThatHaveLinkToFile(oldNotePath);
            let links = [{ oldPath: oldNotePath, newPath: newNotePath }];
            if (notes) {
                for (let note of notes) {
                    yield this.updateChangedPathsInNote(note, links, changelinksAlt);
                }
            }
        });
    }
    updateChangedPathInNote(notePath, oldLink, newLink, changelinksAlt = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let changes = [{ oldPath: oldLink, newPath: newLink }];
            return yield this.updateChangedPathsInNote(notePath, changes, changelinksAlt);
        });
    }
    updateChangedPathsInNote(notePath, changedLinks, changelinksAlt = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let file = this.getFileByPath(notePath);
            if (!file) {
                console.error(this.consoleLogPrefix + "cant update links in note, file not found: " + notePath);
                return;
            }
            let text = yield this.app.vault.read(file);
            let dirty = false;
            let elements = text.match(markdownLinkOrEmbedRegexG);
            if (elements != null && elements.length > 0) {
                for (let el of elements) {
                    let alt = el.match(/\[(.*?)\]/)[1];
                    let link = el.match(/\((.*?)\)/)[1];
                    let fullLink = this.getFullPathForLink(link, notePath);
                    for (let changedLink of changedLinks) {
                        if (fullLink == changedLink.oldPath) {
                            let newRelLink = path.relative(notePath, changedLink.newPath);
                            newRelLink = Utils.normalizePathForLink(newRelLink);
                            if (newRelLink.startsWith("../")) {
                                newRelLink = newRelLink.substring(3);
                            }
                            if (changelinksAlt && newRelLink.endsWith(".md")) {
                                let ext = path.extname(newRelLink);
                                let baseName = path.basename(newRelLink, ext);
                                alt = Utils.normalizePathForFile(baseName);
                            }
                            text = text.replace(el, '[' + alt + ']' + '(' + newRelLink + ')');
                            dirty = true;
                            console.log(this.consoleLogPrefix + "link updated in note [note, old link, new link]: \n   "
                                + file.path + "\n   " + link + "\n   " + newRelLink);
                        }
                    }
                }
            }
            if (dirty)
                yield this.app.vault.modify(file, text);
        });
    }
    updateInternalLinksInMovedNote(oldNotePath, newNotePath, attachmentsAlreadyMoved) {
        return __awaiter(this, void 0, void 0, function* () {
            let file = this.getFileByPath(newNotePath);
            if (!file) {
                console.error(this.consoleLogPrefix + "cant update internal links, file not found: " + newNotePath);
                return;
            }
            let text = yield this.app.vault.read(file);
            let dirty = false;
            let elements = text.match(/\[.*?\)/g);
            if (elements != null && elements.length > 0) {
                for (let el of elements) {
                    let alt = el.match(/\[(.*?)\]/)[1];
                    let link = el.match(/\((.*?)\)/)[1];
                    //startsWith("../") - for not skipping files that not in the note dir
                    if (attachmentsAlreadyMoved && !link.endsWith(".md") && !link.startsWith("../"))
                        continue;
                    let fullLink = this.getFullPathForLink(link, oldNotePath);
                    let newRelLink = path.relative(newNotePath, fullLink);
                    newRelLink = Utils.normalizePathForLink(newRelLink);
                    if (newRelLink.startsWith("../")) {
                        newRelLink = newRelLink.substring(3);
                    }
                    text = text.replace(el, '[' + alt + ']' + '(' + newRelLink + ')');
                    dirty = true;
                    console.log(this.consoleLogPrefix + "link updated in note [note, old link, new link]: \n   "
                        + file.path + "\n   " + link + "   \n" + newRelLink);
                }
            }
            if (dirty)
                yield this.app.vault.modify(file, text);
        });
    }
    getCachedNotesThatHaveLinkToFile(filePath) {
        var _a, _b;
        let notes = [];
        let allNotes = this.app.vault.getMarkdownFiles();
        if (allNotes) {
            for (let note of allNotes) {
                let notePath = note.path;
                //!!! this can return undefined if note was just updated
                let embeds = (_a = this.app.metadataCache.getCache(notePath)) === null || _a === void 0 ? void 0 : _a.embeds;
                if (embeds) {
                    for (let embed of embeds) {
                        let linkPath = this.getFullPathForLink(embed.link, note.path);
                        if (linkPath == filePath) {
                            if (!notes.contains(notePath))
                                notes.push(notePath);
                        }
                    }
                }
                //!!! this can return undefined if note was just updated
                let links = (_b = this.app.metadataCache.getCache(notePath)) === null || _b === void 0 ? void 0 : _b.links;
                if (links) {
                    for (let link of links) {
                        let linkPath = this.getFullPathForLink(link.link, note.path);
                        if (linkPath == filePath) {
                            if (!notes.contains(notePath))
                                notes.push(notePath);
                        }
                    }
                }
            }
        }
        return notes;
    }
    getNotesThatHaveLinkToFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            let notes = [];
            let allNotes = this.app.vault.getMarkdownFiles();
            if (allNotes) {
                for (let note of allNotes) {
                    let notePath = note.path;
                    let links = yield this.getLinksFromNote(notePath);
                    for (let link of links) {
                        let linkFullPath = this.getFullPathForLink(link.link, notePath);
                        if (linkFullPath == filePath) {
                            if (!notes.contains(notePath))
                                notes.push(notePath);
                        }
                    }
                }
            }
            return notes;
        });
    }
    getFilePathWithRenamedBaseName(filePath, newBaseName) {
        return Utils.normalizePathForFile(path.join(path.dirname(filePath), newBaseName + path.extname(filePath)));
    }
    getLinksFromNote(notePath) {
        return __awaiter(this, void 0, void 0, function* () {
            let file = this.getFileByPath(notePath);
            if (!file) {
                console.error(this.consoleLogPrefix + "cant get embeds, file not found: " + notePath);
                return;
            }
            let text = yield this.app.vault.read(file);
            let links = [];
            let elements = text.match(markdownLinkOrEmbedRegexG);
            if (elements != null && elements.length > 0) {
                for (let el of elements) {
                    let alt = el.match(/\[(.*?)\]/)[1];
                    let link = el.match(/\((.*?)\)/)[1];
                    let emb = {
                        link: link,
                        displayText: alt,
                        original: el,
                        position: {
                            start: {
                                col: 0,
                                line: 0,
                                offset: 0
                            },
                            end: {
                                col: 0,
                                line: 0,
                                offset: 0
                            }
                        }
                    };
                    links.push(emb);
                }
            }
            return links;
        });
    }
    convertAllNoteEmbedsPathsToRelative(notePath) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let changedEmbeds = [];
            let embeds = (_a = this.app.metadataCache.getCache(notePath)) === null || _a === void 0 ? void 0 : _a.embeds;
            if (embeds) {
                for (let embed of embeds) {
                    let isMarkdownEmbed = this.checkIsCorrectMarkdownEmbed(embed.original);
                    let isWikiEmbed = this.checkIsCorrectWikiEmbed(embed.original);
                    if (isMarkdownEmbed || isWikiEmbed) {
                        let file = this.getFileByLink(embed.link, notePath);
                        if (file)
                            continue;
                        file = this.app.metadataCache.getFirstLinkpathDest(embed.link, notePath);
                        if (file) {
                            let newRelLink = path.relative(notePath, file.path);
                            newRelLink = isMarkdownEmbed ? Utils.normalizePathForLink(newRelLink) : Utils.normalizePathForFile(newRelLink);
                            if (newRelLink.startsWith("../")) {
                                newRelLink = newRelLink.substring(3);
                            }
                            changedEmbeds.push({ old: embed, newLink: newRelLink });
                        }
                        else {
                            console.error(this.consoleLogPrefix + notePath + " has bad embed (file does not exist): " + embed.link);
                        }
                    }
                    else {
                        console.error(this.consoleLogPrefix + notePath + " has bad embed (format of link is not markdown or wikilink): " + embed.original);
                    }
                }
            }
            yield this.updateChangedEmbedInNote(notePath, changedEmbeds);
            return changedEmbeds;
        });
    }
    convertAllNoteLinksPathsToRelative(notePath) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let changedLinks = [];
            let links = (_a = this.app.metadataCache.getCache(notePath)) === null || _a === void 0 ? void 0 : _a.links;
            if (links) {
                for (let link of links) {
                    let isMarkdownLink = this.checkIsCorrectMarkdownLink(link.original);
                    let isWikiLink = this.checkIsCorrectWikiLink(link.original);
                    if (isMarkdownLink || isWikiLink) {
                        let file = this.getFileByLink(link.link, notePath);
                        if (file)
                            continue;
                        //!!! link.displayText is always "" - OBSIDIAN BUG?, so get display text manualy
                        if (isMarkdownLink) {
                            let elements = link.original.match(markdownLinkRegex);
                            if (elements)
                                link.displayText = elements[1];
                        }
                        file = this.app.metadataCache.getFirstLinkpathDest(link.link, notePath);
                        if (file) {
                            let newRelLink = path.relative(notePath, file.path);
                            newRelLink = isMarkdownLink ? Utils.normalizePathForLink(newRelLink) : Utils.normalizePathForFile(newRelLink);
                            if (newRelLink.startsWith("../")) {
                                newRelLink = newRelLink.substring(3);
                            }
                            changedLinks.push({ old: link, newLink: newRelLink });
                        }
                        else {
                            console.error(this.consoleLogPrefix + notePath + " has bad link (file does not exist): " + link.link);
                        }
                    }
                    else {
                        console.error(this.consoleLogPrefix + notePath + " has bad link (format of link is not markdown or wikilink): " + link.original);
                    }
                }
            }
            yield this.updateChangedLinkInNote(notePath, changedLinks);
            return changedLinks;
        });
    }
    updateChangedEmbedInNote(notePath, changedEmbeds) {
        return __awaiter(this, void 0, void 0, function* () {
            let noteFile = this.getFileByPath(notePath);
            if (!noteFile) {
                console.error(this.consoleLogPrefix + "cant update embeds in note, file not found: " + notePath);
                return;
            }
            let text = yield this.app.vault.read(noteFile);
            let dirty = false;
            if (changedEmbeds && changedEmbeds.length > 0) {
                for (let embed of changedEmbeds) {
                    if (embed.old.link == embed.newLink)
                        continue;
                    if (this.checkIsCorrectMarkdownEmbed(embed.old.original)) {
                        text = text.replace(embed.old.original, '![' + embed.old.displayText + ']' + '(' + embed.newLink + ')');
                    }
                    else if (this.checkIsCorrectWikiEmbed(embed.old.original)) {
                        text = text.replace(embed.old.original, '![[' + embed.newLink + ']]');
                    }
                    else {
                        console.error(this.consoleLogPrefix + notePath + " has bad embed (format of link is not maekdown or wikilink): " + embed.old.original);
                        continue;
                    }
                    console.log(this.consoleLogPrefix + "embed updated in note [note, old link, new link]: \n   "
                        + noteFile.path + "\n   " + embed.old.link + "\n   " + embed.newLink);
                    dirty = true;
                }
            }
            if (dirty)
                yield this.app.vault.modify(noteFile, text);
        });
    }
    updateChangedLinkInNote(notePath, chandedLinks) {
        return __awaiter(this, void 0, void 0, function* () {
            let noteFile = this.getFileByPath(notePath);
            if (!noteFile) {
                console.error(this.consoleLogPrefix + "cant update links in note, file not found: " + notePath);
                return;
            }
            let text = yield this.app.vault.read(noteFile);
            let dirty = false;
            if (chandedLinks && chandedLinks.length > 0) {
                for (let link of chandedLinks) {
                    if (link.old.link == link.newLink)
                        continue;
                    if (this.checkIsCorrectMarkdownLink(link.old.original)) {
                        text = text.replace(link.old.original, '[' + link.old.displayText + ']' + '(' + link.newLink + ')');
                    }
                    else if (this.checkIsCorrectWikiLink(link.old.original)) {
                        text = text.replace(link.old.original, '[[' + link.newLink + ']]');
                    }
                    else {
                        console.error(this.consoleLogPrefix + notePath + " has bad link (format of link is not maekdown or wikilink): " + link.old.original);
                        continue;
                    }
                    console.log(this.consoleLogPrefix + "link updated in note [note, old link, new link]: \n   "
                        + noteFile.path + "\n   " + link.old.link + "\n   " + link.newLink);
                    dirty = true;
                }
            }
            if (dirty)
                yield this.app.vault.modify(noteFile, text);
        });
    }
    replaceAllNoteWikilinksWithMarkdownLinks(notePath) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let res = {
                links: [],
                embeds: [],
            };
            let noteFile = this.getFileByPath(notePath);
            if (!noteFile) {
                console.error(this.consoleLogPrefix + "cant update wikilinks in note, file not found: " + notePath);
                return;
            }
            let links = (_a = this.app.metadataCache.getCache(notePath)) === null || _a === void 0 ? void 0 : _a.links;
            let embeds = (_b = this.app.metadataCache.getCache(notePath)) === null || _b === void 0 ? void 0 : _b.embeds;
            let text = yield this.app.vault.read(noteFile);
            let dirty = false;
            if (embeds) { //embeds must go first!
                for (let embed of embeds) {
                    if (this.checkIsCorrectWikiEmbed(embed.original)) {
                        let newPath = Utils.normalizePathForLink(embed.link);
                        let newLink = '![' + ']' + '(' + newPath + ')';
                        text = text.replace(embed.original, newLink);
                        console.log(this.consoleLogPrefix + "wikilink (embed) replaced in note [note, old link, new link]: \n   "
                            + noteFile.path + "\n   " + embed.original + "\n   " + newLink);
                        res.embeds.push({ old: embed, newLink: newLink });
                        dirty = true;
                    }
                }
            }
            if (links) {
                for (let link of links) {
                    if (this.checkIsCorrectWikiLink(link.original)) {
                        let newPath = Utils.normalizePathForLink(link.link);
                        let file = this.app.metadataCache.getFirstLinkpathDest(link.link, notePath);
                        if (file && file.extension == "md" && !newPath.endsWith(".md"))
                            newPath = newPath + ".md";
                        let newLink = '[' + link.displayText + ']' + '(' + newPath + ')';
                        text = text.replace(link.original, newLink);
                        console.log(this.consoleLogPrefix + "wikilink replaced in note [note, old link, new link]: \n   "
                            + noteFile.path + "\n   " + link.original + "\n   " + newLink);
                        res.links.push({ old: link, newLink: newLink });
                        dirty = true;
                    }
                }
            }
            if (dirty)
                yield this.app.vault.modify(noteFile, text);
            return res;
        });
    }
}

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

var md5 = createCommonjsModule(function (module, exports) {
/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.


*/
Object.defineProperty(exports, "__esModule", { value: true });
var Md5 = /** @class */ (function () {
    function Md5() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    Md5.hashStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    };
    Md5.hashAsciiStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    };
    Md5._hex = function (x) {
        var hc = Md5.hexChars;
        var ho = Md5.hexOut;
        var n;
        var offset;
        var j;
        var i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    };
    Md5._md5cycle = function (x, k) {
        var a = x[0];
        var b = x[1];
        var c = x[2];
        var d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    };
    Md5.prototype.start = function () {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    };
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    Md5.prototype.appendStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var code;
        var i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendAsciiStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendByteArray = function (input) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.getState = function () {
        var self = this;
        var s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    };
    Md5.prototype.setState = function (state) {
        var buf = state.buffer;
        var x = state.state;
        var s = this._state;
        var i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    };
    Md5.prototype.end = function (raw) {
        if (raw === void 0) { raw = false; }
        var bufLen = this._bufferLength;
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var i = (bufLen >> 2) + 1;
        var dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    };
    // Private Static Variables
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    // Permanent instance is to use for one-call hashing
    Md5.onePassHasher = new Md5();
    return Md5;
}());
exports.Md5 = Md5;
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}

});

class ConsistentAttachmentsAndLinks extends obsidian.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.addSettingTab(new SettingTab(this.app, this));
            this.addCommand({
                id: 'rename-all-attachments',
                name: 'Rename all attachments',
                callback: () => this.renameAllAttachments()
            });
            this.lh = new LinksHandler(this.app, "Unique attachments: ");
        });
    }
    renameAllAttachments() {
        return __awaiter(this, void 0, void 0, function* () {
            let files = this.app.vault.getFiles();
            let renamedCount = 0;
            for (let file of files) {
                let renamed = yield this.renameAttachmentIfNeeded(file);
                if (renamed)
                    renamedCount++;
            }
            if (renamedCount == 0)
                new obsidian.Notice("No files found that need to be renamed");
            else if (renamedCount == 1)
                new obsidian.Notice("Renamed 1 file.");
            else
                new obsidian.Notice("Renamed " + renamedCount + " files.");
        });
    }
    renameAttachmentIfNeeded(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let filePath = file.path;
            if (this.checkFilePathIsIgnored(filePath) || !this.checkFileTypeIsAllowed(filePath)) {
                return false;
            }
            let ext = path.extname(filePath);
            let baseName = path.basename(filePath, ext);
            let validBaseName = yield this.generateValidBaseName(filePath);
            if (baseName == validBaseName) {
                return false;
            }
            let notes = yield this.lh.getNotesThatHaveLinkToFile(filePath);
            if (!notes || notes.length == 0) {
                if (this.settings.renameOnlyLinkedAttachments) {
                    return false;
                }
            }
            let validPath = this.lh.getFilePathWithRenamedBaseName(filePath, validBaseName);
            let targetFileAlreadyExists = yield this.app.vault.adapter.exists(validPath);
            if (targetFileAlreadyExists) {
                //if file content is the same in both files, one of them will be deleted			
                let validAnotherFileBaseName = yield this.generateValidBaseName(validPath);
                if (validAnotherFileBaseName != validBaseName) {
                    console.warn("Unique attachments: cant rename file \n   " + filePath + "\n    to\n   " + validPath + "\n   Another file exists with the same (target) name but different content.");
                    return false;
                }
                if (!this.settings.mergeTheSameAttachments) {
                    console.warn("Unique attachments: cant rename file \n   " + filePath + "\n    to\n   " + validPath + "\n   Another file exists with the same (target) name and the same content. You can enable \"Delte duplicates\" setting for delete this file and merge attachments.");
                    return false;
                }
                try {
                    yield this.app.vault.delete(file);
                }
                catch (e) {
                    console.error("Unique attachments: cant delete duplicate file " + filePath + ".\n" + e);
                    return false;
                }
                if (notes) {
                    for (let note of notes) {
                        yield this.lh.updateChangedPathInNote(note, filePath, validPath);
                    }
                }
                console.log("Unique attachments: file content is the same in \n   " + filePath + "\n   and \n   " + validPath + "\n   Duplicates merged.");
            }
            else {
                try {
                    yield this.app.vault.rename(file, validPath);
                }
                catch (e) {
                    console.error("Unique attachments: cant rename file \n   " + filePath + "\n   to \n   " + validPath + "   \n" + e);
                    return false;
                }
                if (notes) {
                    for (let note of notes) {
                        yield this.lh.updateChangedPathInNote(note, filePath, validPath);
                    }
                }
                console.log("Unique attachments: file renamed [from, to]:\n   " + filePath + "\n   " + validPath);
            }
            return true;
        });
    }
    checkFilePathIsIgnored(filePath) {
        for (let folder of this.settings.ignoreFolders) {
            if (filePath.startsWith(folder))
                return true;
        }
        return false;
    }
    checkFileTypeIsAllowed(filePath) {
        for (let ext of this.settings.renameFileTypes) {
            if (filePath.endsWith("." + ext))
                return true;
        }
        return false;
    }
    generateValidBaseName(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            let file = this.lh.getFileByPath(filePath);
            let data = yield this.app.vault.readBinary(file);
            const buf = Buffer.from(data);
            // var crypto = require('crypto');
            // let hash: string = crypto.createHash('md5').update(buf).digest("hex");
            let md5$1 = new md5.Md5();
            md5$1.appendByteArray(buf);
            let hash = md5$1.end().toString();
            return hash;
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
}

module.exports = ConsistentAttachmentsAndLinks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9zZXR0aW5ncy50cyIsInNyYy91dGlscy50cyIsInNyYy9wYXRoLnRzIiwic3JjL2xpbmtzLWhhbmRsZXIudHMiLCJzcmMvbWQ1L21kNS5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IEFwcCwgbm9ybWFsaXplUGF0aCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgfSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCBDb25zaXN0ZW50QXR0YWNobWVudHNBbmRMaW5rcyBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbHVnaW5TZXR0aW5ncyB7XHJcbiAgICBpZ25vcmVGb2xkZXJzOiBzdHJpbmdbXTtcclxuICAgIHJlbmFtZUZpbGVUeXBlczogc3RyaW5nW107XHJcbiAgICByZW5hbWVPbmx5TGlua2VkQXR0YWNobWVudHM6IGJvb2xlYW4sXHJcbiAgICBtZXJnZVRoZVNhbWVBdHRhY2htZW50czogYm9vbGVhbixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFBsdWdpblNldHRpbmdzID0ge1xyXG4gICAgaWdub3JlRm9sZGVyczogW1wiLmdpdC9cIiwgXCIub2JzaWRpYW4vXCJdLFxyXG4gICAgcmVuYW1lRmlsZVR5cGVzOiBbXCJwbmdcIiwgXCJqcGdcIiwgXCJnaWZcIl0sXHJcbiAgICByZW5hbWVPbmx5TGlua2VkQXR0YWNobWVudHM6IHRydWUsXHJcbiAgICBtZXJnZVRoZVNhbWVBdHRhY2htZW50czogdHJ1ZSxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuICAgIHBsdWdpbjogQ29uc2lzdGVudEF0dGFjaG1lbnRzQW5kTGlua3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogQ29uc2lzdGVudEF0dGFjaG1lbnRzQW5kTGlua3MpIHtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnVW5pcXVlIGF0dGFjaG1lbnRzIC0gU2V0dGluZ3MnIH0pO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUoXCJGaWxlIHR5cGVzIHRvIHJlbmFtZVwiKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyhcIlNlYXJjaCBhbmQgcmVuYW1lIGF0dGFjaG1lbnRzIG9mIHRoZSBsaXN0ZWQgZmlsZSB0eXBlcy4gV3JpdGUgdHlwZXMgc2VwYXJhdGVkIGJ5IGNvbW1hLlwiKVxyXG4gICAgICAgICAgICAuYWRkVGV4dEFyZWEoY2IgPT4gY2JcclxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIkV4YW1wbGU6IGpwZyxwbmcsZ2lmXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucmVuYW1lRmlsZVR5cGVzLmpvaW4oXCIsXCIpKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBleHRlbnNpb25zID0gdmFsdWUudHJpbSgpLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZW5hbWVGaWxlVHlwZXMgPSBleHRlbnNpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZShcIklnbm9yZSBmb2xkZXJzXCIpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKFwiRG8gbm90IHNlYXJjaCBvciByZW5hbWUgYXR0YWNobWVudHMgaW4gdGhlc2UgZm9sZGVycy4gV3JpdGUgZWFjaCBmb2xkZXIgb24gYSBuZXcgbGluZS5cIilcclxuICAgICAgICAgICAgLmFkZFRleHRBcmVhKGNiID0+IGNiXHJcbiAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJFeGFtcGxlOlxcbi5naXQvXFxuLm9ic2lkaWFuL1wiKVxyXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmlnbm9yZUZvbGRlcnMuam9pbihcIlxcblwiKSlcclxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoXCJcXG5cIikubWFwKHZhbHVlID0+IHRoaXMuZ2V0Tm9ybWFsaXplZFBhdGgodmFsdWUpICsgXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmlnbm9yZUZvbGRlcnMgPSBwYXRocztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdSZW5hbWUgb25seSBsaW5rZWQgYXR0YWNobWVudHMnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnUmVuYW1lIG9ubHkgYXR0YWNobWVudHMgdGhhdCBhcmUgdXNlZCBpbiBub3Rlcy4gSWYgZGlzYWJsZWQsIGFsbCBmb3VuZCBmaWxlcyB3aWxsIGJlIHJlbmFtZWQuJylcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZShjYiA9PiBjYi5vbkNoYW5nZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZW5hbWVPbmx5TGlua2VkQXR0YWNobWVudHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucmVuYW1lT25seUxpbmtlZEF0dGFjaG1lbnRzKSk7XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnRGVsZXRlIGR1cGxpY2F0ZXMnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnSWYgc2V2ZXJhbCBmaWxlcyBpbiB0aGUgc2FtZSBmb2xkZXIgaGF2ZSBpZGVudGljYWwgY29udGVudHMgdGhlbiBkZWxldGUgZHVwbGljYXRlcy4gT3RoZXJ3aXNlLCB0aGUgZmlsZSB3aWxsIGJlIGlnbm9yZWQgKG5vdCByZW5hbWVkKS4nKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKGNiID0+IGNiLm9uQ2hhbmdlKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1lcmdlVGhlU2FtZUF0dGFjaG1lbnRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm1lcmdlVGhlU2FtZUF0dGFjaG1lbnRzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm9ybWFsaXplZFBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcGF0aC5sZW5ndGggPT0gMCA/IHBhdGggOiBub3JtYWxpemVQYXRoKHBhdGgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICAgIHN0YXRpYyBhc3luYyBkZWxheShtczogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblx0fVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemVQYXRoRm9yRmlsZShwYXRoOiBzdHJpbmcpIDpzdHJpbmd7XHJcblx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2dpLCBcIi9cIik7IC8vcmVwbGFjZSBcXCB0byAvXHJcblx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKC8lMjAvZ2ksIFwiIFwiKTsgLy9yZXBsYWNlICUyMCB0byBzcGFjZVxyXG5cdFx0cmV0dXJuIHBhdGg7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbm9ybWFsaXplUGF0aEZvckxpbmsocGF0aDogc3RyaW5nKTpzdHJpbmcge1xyXG5cdFx0cGF0aCA9IHBhdGgucmVwbGFjZSgvXFxcXC9naSwgXCIvXCIpOyAvL3JlcGxhY2UgXFwgdG8gL1xyXG5cdFx0cGF0aCA9IHBhdGgucmVwbGFjZSgvIC9naSwgXCIlMjBcIik7IC8vcmVwbGFjZSBzcGFjZSB0byAlMjBcclxuXHRcdHJldHVybiBwYXRoO1xyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBwYXRoIHtcclxuICAgIHN0YXRpYyBqb2luKC4uLnBhcnRzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gJy4nO1xyXG4gICAgICAgIHZhciBqb2luZWQ7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgaWYgKGFyZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoam9pbmVkID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbmVkID0gYXJnO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGpvaW5lZCArPSAnLycgKyBhcmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGpvaW5lZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gJy4nO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l4Tm9ybWFsaXplKGpvaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpcm5hbWUocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xyXG4gICAgICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XHJcbiAgICAgICAgdmFyIGVuZCA9IC0xO1xyXG4gICAgICAgIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcclxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XHJcbiAgICAgICAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSByZXR1cm4gJy8vJztcclxuICAgICAgICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYXNlbmFtZShwYXRoOiBzdHJpbmcsIGV4dD86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChleHQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZXh0ICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJleHRcIiBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XHJcblxyXG4gICAgICAgIHZhciBzdGFydCA9IDA7XHJcbiAgICAgICAgdmFyIGVuZCA9IC0xO1xyXG4gICAgICAgIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xyXG4gICAgICAgIHZhciBpO1xyXG5cclxuICAgICAgICBpZiAoZXh0ICE9PSB1bmRlZmluZWQgJiYgZXh0Lmxlbmd0aCA+IDAgJiYgZXh0Lmxlbmd0aCA8PSBwYXRoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoZXh0Lmxlbmd0aCA9PT0gcGF0aC5sZW5ndGggJiYgZXh0ID09PSBwYXRoKSByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIHZhciBleHRJZHggPSBleHQubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdmFyIGZpcnN0Tm9uU2xhc2hFbmQgPSAtMTtcclxuICAgICAgICAgICAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0Tm9uU2xhc2hFbmQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCByZW1lbWJlciB0aGlzIGluZGV4IGluIGNhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCBpdCBpZiB0aGUgZXh0ZW5zaW9uIGVuZHMgdXAgbm90IG1hdGNoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5vblNsYXNoRW5kID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRJZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGV4cGxpY2l0IGV4dGVuc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PT0gZXh0LmNoYXJDb2RlQXQoZXh0SWR4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0tZXh0SWR4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG1hdGNoZWQgdGhlIGV4dGVuc2lvbiwgc28gbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyIHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXh0ZW5zaW9uIGRvZXMgbm90IG1hdGNoLCBzbyBvdXIgcmVzdWx0IGlzIHRoZSBlbnRpcmUgcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRJZHggPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGZpcnN0Tm9uU2xhc2hFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PT0gZW5kKSBlbmQgPSBmaXJzdE5vblNsYXNoRW5kOyBlbHNlIGlmIChlbmQgPT09IC0xKSBlbmQgPSBwYXRoLmxlbmd0aDtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGV4dG5hbWUocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0RG90ID0gLTE7XHJcbiAgICAgICAgdmFyIHN0YXJ0UGFydCA9IDA7XHJcbiAgICAgICAgdmFyIGVuZCA9IC0xO1xyXG4gICAgICAgIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xyXG4gICAgICAgIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcclxuICAgICAgICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxyXG4gICAgICAgIHZhciBwcmVEb3RTdGF0ZSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcclxuICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXHJcbiAgICAgICAgICAgICAgICAvLyBleHRlbnNpb25cclxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZW5kID0gaSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cclxuICAgICAgICAgICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREb3QgPSBpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcclxuICAgICAgICAgICAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXHJcbiAgICAgICAgICAgICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcclxuICAgICAgICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcclxuICAgICAgICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcclxuICAgICAgICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xyXG4gICAgICAgICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIHBhcnNlKHBhdGg6IHN0cmluZykge1xyXG5cclxuICAgICAgICB2YXIgcmV0ID0geyByb290OiAnJywgZGlyOiAnJywgYmFzZTogJycsIGV4dDogJycsIG5hbWU6ICcnIH07XHJcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gcmV0O1xyXG4gICAgICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIHZhciBpc0Fic29sdXRlID0gY29kZSA9PT0gNDcgLyovKi87XHJcbiAgICAgICAgdmFyIHN0YXJ0O1xyXG4gICAgICAgIGlmIChpc0Fic29sdXRlKSB7XHJcbiAgICAgICAgICAgIHJldC5yb290ID0gJy8nO1xyXG4gICAgICAgICAgICBzdGFydCA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhcnREb3QgPSAtMTtcclxuICAgICAgICB2YXIgc3RhcnRQYXJ0ID0gMDtcclxuICAgICAgICB2YXIgZW5kID0gLTE7XHJcbiAgICAgICAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcclxuICAgICAgICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxyXG4gICAgICAgIHZhciBwcmVEb3RTdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgIC8vIEdldCBub24tZGlyIGluZm9cclxuICAgICAgICBmb3IgKDsgaSA+PSBzdGFydDsgLS1pKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcclxuICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXHJcbiAgICAgICAgICAgICAgICAvLyBleHRlbnNpb25cclxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZW5kID0gaSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cclxuICAgICAgICAgICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpIHN0YXJ0RG90ID0gaTsgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpIHByZURvdFN0YXRlID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXHJcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxyXG4gICAgICAgICAgICAgICAgcHJlRG90U3RhdGUgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XHJcbiAgICAgICAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XHJcbiAgICAgICAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XHJcbiAgICAgICAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcclxuICAgICAgICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcclxuICAgICAgICAgICAgaWYgKGVuZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydFBhcnQgPT09IDAgJiYgaXNBYnNvbHV0ZSkgcmV0LmJhc2UgPSByZXQubmFtZSA9IHBhdGguc2xpY2UoMSwgZW5kKTsgZWxzZSByZXQuYmFzZSA9IHJldC5uYW1lID0gcGF0aC5zbGljZShzdGFydFBhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRQYXJ0ID09PSAwICYmIGlzQWJzb2x1dGUpIHtcclxuICAgICAgICAgICAgICAgIHJldC5uYW1lID0gcGF0aC5zbGljZSgxLCBzdGFydERvdCk7XHJcbiAgICAgICAgICAgICAgICByZXQuYmFzZSA9IHBhdGguc2xpY2UoMSwgZW5kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5uYW1lID0gcGF0aC5zbGljZShzdGFydFBhcnQsIHN0YXJ0RG90KTtcclxuICAgICAgICAgICAgICAgIHJldC5iYXNlID0gcGF0aC5zbGljZShzdGFydFBhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0LmV4dCA9IHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhcnRQYXJ0ID4gMCkgcmV0LmRpciA9IHBhdGguc2xpY2UoMCwgc3RhcnRQYXJ0IC0gMSk7IGVsc2UgaWYgKGlzQWJzb2x1dGUpIHJldC5kaXIgPSAnLyc7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIHBvc2l4Tm9ybWFsaXplKHBhdGg6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XHJcblxyXG4gICAgICAgIHZhciBpc0Fic29sdXRlID0gcGF0aC5jaGFyQ29kZUF0KDApID09PSA0NyAvKi8qLztcclxuICAgICAgICB2YXIgdHJhaWxpbmdTZXBhcmF0b3IgPSBwYXRoLmNoYXJDb2RlQXQocGF0aC5sZW5ndGggLSAxKSA9PT0gNDcgLyovKi87XHJcblxyXG4gICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxyXG4gICAgICAgIHBhdGggPSB0aGlzLm5vcm1hbGl6ZVN0cmluZ1Bvc2l4KHBhdGgsICFpc0Fic29sdXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwICYmICFpc0Fic29sdXRlKSBwYXRoID0gJy4nO1xyXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgdHJhaWxpbmdTZXBhcmF0b3IpIHBhdGggKz0gJy8nO1xyXG5cclxuICAgICAgICBpZiAoaXNBYnNvbHV0ZSkgcmV0dXJuICcvJyArIHBhdGg7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZVN0cmluZ1Bvc2l4KHBhdGg6IHN0cmluZywgYWxsb3dBYm92ZVJvb3Q6IGJvb2xlYW4pIHtcclxuICAgICAgICB2YXIgcmVzID0gJyc7XHJcbiAgICAgICAgdmFyIGxhc3RTZWdtZW50TGVuZ3RoID0gMDtcclxuICAgICAgICB2YXIgbGFzdFNsYXNoID0gLTE7XHJcbiAgICAgICAgdmFyIGRvdHMgPSAwO1xyXG4gICAgICAgIHZhciBjb2RlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHBhdGgubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKGkgPCBwYXRoLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IDQ3IC8qLyovKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNvZGUgPSA0NyAvKi8qLztcclxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdFNsYXNoID09PSBpIC0gMSB8fCBkb3RzID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTk9PUFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0U2xhc2ggIT09IGkgLSAxICYmIGRvdHMgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmxlbmd0aCA8IDIgfHwgbGFzdFNlZ21lbnRMZW5ndGggIT09IDIgfHwgcmVzLmNoYXJDb2RlQXQocmVzLmxlbmd0aCAtIDEpICE9PSA0NiAvKi4qLyB8fCByZXMuY2hhckNvZGVBdChyZXMubGVuZ3RoIC0gMikgIT09IDQ2IC8qLiovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RTbGFzaEluZGV4ID0gcmVzLmxhc3RJbmRleE9mKCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFNsYXNoSW5kZXggIT09IHJlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RTbGFzaEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNlZ21lbnRMZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5zbGljZSgwLCBsYXN0U2xhc2hJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTZWdtZW50TGVuZ3RoID0gcmVzLmxlbmd0aCAtIDEgLSByZXMubGFzdEluZGV4T2YoJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNsYXNoID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMubGVuZ3RoID09PSAyIHx8IHJlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNlZ21lbnRMZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNsYXNoID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93QWJvdmVSb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSAnLy4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gJy4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNlZ21lbnRMZW5ndGggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gJy8nICsgcGF0aC5zbGljZShsYXN0U2xhc2ggKyAxLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IHBhdGguc2xpY2UobGFzdFNsYXNoICsgMSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNlZ21lbnRMZW5ndGggPSBpIC0gbGFzdFNsYXNoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhc3RTbGFzaCA9IGk7XHJcbiAgICAgICAgICAgICAgICBkb3RzID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA0NiAvKi4qLyAmJiBkb3RzICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgKytkb3RzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG90cyA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBvc2l4UmVzb2x2ZSguLi5hcmdzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHZhciByZXNvbHZlZFBhdGggPSAnJztcclxuICAgICAgICB2YXIgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBjd2Q7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgcGF0aDtcclxuICAgICAgICAgICAgaWYgKGkgPj0gMClcclxuICAgICAgICAgICAgICAgIHBhdGggPSBhcmdzW2ldO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjd2QgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGN3ZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFNraXAgZW1wdHkgZW50cmllc1xyXG4gICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgICAgICAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQ29kZUF0KDApID09PSA0NyAvKi8qLztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAgICAgICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgICAgICAgcmVzb2x2ZWRQYXRoID0gdGhpcy5ub3JtYWxpemVTdHJpbmdQb3NpeChyZXNvbHZlZFBhdGgsICFyZXNvbHZlZEFic29sdXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgICAgICAgaWYgKHJlc29sdmVkUGF0aC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcvJyArIHJlc29sdmVkUGF0aDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcvJztcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmVkUGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlZFBhdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbGF0aXZlKGZyb206IHN0cmluZywgdG86IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAoZnJvbSA9PT0gdG8pIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgZnJvbSA9IHRoaXMucG9zaXhSZXNvbHZlKGZyb20pO1xyXG4gICAgICAgIHRvID0gdGhpcy5wb3NpeFJlc29sdmUodG8pO1xyXG5cclxuICAgICAgICBpZiAoZnJvbSA9PT0gdG8pIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgLy8gVHJpbSBhbnkgbGVhZGluZyBiYWNrc2xhc2hlc1xyXG4gICAgICAgIHZhciBmcm9tU3RhcnQgPSAxO1xyXG4gICAgICAgIGZvciAoOyBmcm9tU3RhcnQgPCBmcm9tLmxlbmd0aDsgKytmcm9tU3RhcnQpIHtcclxuICAgICAgICAgICAgaWYgKGZyb20uY2hhckNvZGVBdChmcm9tU3RhcnQpICE9PSA0NyAvKi8qLylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnJvbUVuZCA9IGZyb20ubGVuZ3RoO1xyXG4gICAgICAgIHZhciBmcm9tTGVuID0gZnJvbUVuZCAtIGZyb21TdGFydDtcclxuXHJcbiAgICAgICAgLy8gVHJpbSBhbnkgbGVhZGluZyBiYWNrc2xhc2hlc1xyXG4gICAgICAgIHZhciB0b1N0YXJ0ID0gMTtcclxuICAgICAgICBmb3IgKDsgdG9TdGFydCA8IHRvLmxlbmd0aDsgKyt0b1N0YXJ0KSB7XHJcbiAgICAgICAgICAgIGlmICh0by5jaGFyQ29kZUF0KHRvU3RhcnQpICE9PSA0NyAvKi8qLylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9FbmQgPSB0by5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHRvTGVuID0gdG9FbmQgLSB0b1N0YXJ0O1xyXG5cclxuICAgICAgICAvLyBDb21wYXJlIHBhdGhzIHRvIGZpbmQgdGhlIGxvbmdlc3QgY29tbW9uIHBhdGggZnJvbSByb290XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IGZyb21MZW4gPCB0b0xlbiA/IGZyb21MZW4gOiB0b0xlbjtcclxuICAgICAgICB2YXIgbGFzdENvbW1vblNlcCA9IC0xO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICBmb3IgKDsgaSA8PSBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9MZW4gPiBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG8uY2hhckNvZGVBdCh0b1N0YXJ0ICsgaSkgPT09IDQ3IC8qLyovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGdldCBoZXJlIGlmIGBmcm9tYCBpcyB0aGUgZXhhY3QgYmFzZSBwYXRoIGZvciBgdG9gLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZXhhbXBsZTogZnJvbT0nL2Zvby9iYXInOyB0bz0nL2Zvby9iYXIvYmF6J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG8uc2xpY2UodG9TdGFydCArIGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZ2V0IGhlcmUgaWYgYGZyb21gIGlzIHRoZSByb290XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlOiBmcm9tPScvJzsgdG89Jy9mb28nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0by5zbGljZSh0b1N0YXJ0ICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tTGVuID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb20uY2hhckNvZGVBdChmcm9tU3RhcnQgKyBpKSA9PT0gNDcgLyovKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZ2V0IGhlcmUgaWYgYHRvYCBpcyB0aGUgZXhhY3QgYmFzZSBwYXRoIGZvciBgZnJvbWAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlOiBmcm9tPScvZm9vL2Jhci9iYXonOyB0bz0nL2Zvby9iYXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RDb21tb25TZXAgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBnZXQgaGVyZSBpZiBgdG9gIGlzIHRoZSByb290LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZXhhbXBsZTogZnJvbT0nL2Zvbyc7IHRvPScvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Q29tbW9uU2VwID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZnJvbUNvZGUgPSBmcm9tLmNoYXJDb2RlQXQoZnJvbVN0YXJ0ICsgaSk7XHJcbiAgICAgICAgICAgIHZhciB0b0NvZGUgPSB0by5jaGFyQ29kZUF0KHRvU3RhcnQgKyBpKTtcclxuICAgICAgICAgICAgaWYgKGZyb21Db2RlICE9PSB0b0NvZGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZWxzZSBpZiAoZnJvbUNvZGUgPT09IDQ3IC8qLyovKVxyXG4gICAgICAgICAgICAgICAgbGFzdENvbW1vblNlcCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3V0ID0gJyc7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIHJlbGF0aXZlIHBhdGggYmFzZWQgb24gdGhlIHBhdGggZGlmZmVyZW5jZSBiZXR3ZWVuIGB0b2BcclxuICAgICAgICAvLyBhbmQgYGZyb21gXHJcbiAgICAgICAgZm9yIChpID0gZnJvbVN0YXJ0ICsgbGFzdENvbW1vblNlcCArIDE7IGkgPD0gZnJvbUVuZDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBmcm9tRW5kIHx8IGZyb20uY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIG91dCArPSAnLi4nO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIG91dCArPSAnLy4uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGFzdGx5LCBhcHBlbmQgdGhlIHJlc3Qgb2YgdGhlIGRlc3RpbmF0aW9uIChgdG9gKSBwYXRoIHRoYXQgY29tZXMgYWZ0ZXJcclxuICAgICAgICAvLyB0aGUgY29tbW9uIHBhdGggcGFydHNcclxuICAgICAgICBpZiAob3V0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBvdXQgKyB0by5zbGljZSh0b1N0YXJ0ICsgbGFzdENvbW1vblNlcCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvU3RhcnQgKz0gbGFzdENvbW1vblNlcDtcclxuICAgICAgICAgICAgaWYgKHRvLmNoYXJDb2RlQXQodG9TdGFydCkgPT09IDQ3IC8qLyovKVxyXG4gICAgICAgICAgICAgICAgKyt0b1N0YXJ0O1xyXG4gICAgICAgICAgICByZXR1cm4gdG8uc2xpY2UodG9TdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXBwLCBUQWJzdHJhY3RGaWxlLCBURmlsZSwgRW1iZWRDYWNoZSwgTGlua0NhY2hlLCBQb3MgfSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IHBhdGggfSBmcm9tICcuL3BhdGgnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXRoQ2hhbmdlSW5mbyB7XHJcblx0b2xkUGF0aDogc3RyaW5nLFxyXG5cdG5ld1BhdGg6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbWJlZENoYW5nZUluZm8ge1xyXG5cdG9sZDogRW1iZWRDYWNoZSxcclxuXHRuZXdMaW5rOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua0NoYW5nZUluZm8ge1xyXG5cdG9sZDogTGlua0NhY2hlLFxyXG5cdG5ld0xpbms6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaW5rc0FuZEVtYmVkc0NoYW5nZWRJbmZvIHtcclxuXHRlbWJlZHM6IEVtYmVkQ2hhbmdlSW5mb1tdXHJcblx0bGlua3M6IExpbmtDaGFuZ2VJbmZvW11cclxufVxyXG5cclxuXHJcblxyXG4vL3NpbXBsZSByZWdleFxyXG4vLyBjb25zdCBtYXJrZG93bkxpbmtPckVtYmVkUmVnZXhTaW1wbGUgPSAvXFxbKC4qPylcXF1cXCgoLio/KVxcKS9naW1cclxuLy8gY29uc3QgbWFya2Rvd25MaW5rUmVnZXhTaW1wbGUgPSAvKD88IVxcISlcXFsoLio/KVxcXVxcKCguKj8pXFwpL2dpbTtcclxuLy8gY29uc3QgbWFya2Rvd25FbWJlZFJlZ2V4U2ltcGxlID0gL1xcIVxcWyguKj8pXFxdXFwoKC4qPylcXCkvZ2ltXHJcblxyXG4vLyBjb25zdCB3aWtpTGlua09yRW1iZWRSZWdleFNpbXBsZSA9IC9cXFtcXFsoLio/KVxcXVxcXS9naW1cclxuLy8gY29uc3Qgd2lraUxpbmtSZWdleFNpbXBsZSA9IC8oPzwhXFwhKVxcW1xcWyguKj8pXFxdXFxdL2dpbTtcclxuLy8gY29uc3Qgd2lraUVtYmVkUmVnZXhTaW1wbGUgPSAvXFwhXFxbXFxbKC4qPylcXF1cXF0vZ2ltXHJcblxyXG4vL3dpdGggZXNjYXBpbmcgXFwgY2hhcmFjdGVyc1xyXG5jb25zdCBtYXJrZG93bkxpbmtPckVtYmVkUmVnZXhHID0gLyg/PCFcXFxcKVxcWyguKj8pKD88IVxcXFwpXFxdXFwoKC4qPykoPzwhXFxcXClcXCkvZ2ltXHJcbmNvbnN0IG1hcmtkb3duTGlua1JlZ2V4RyA9IC8oPzwhXFwhKSg/PCFcXFxcKVxcWyguKj8pKD88IVxcXFwpXFxdXFwoKC4qPykoPzwhXFxcXClcXCkvZ2ltO1xyXG5jb25zdCBtYXJrZG93bkVtYmVkUmVnZXhHID0gLyg/PCFcXFxcKVxcIVxcWyguKj8pKD88IVxcXFwpXFxdXFwoKC4qPykoPzwhXFxcXClcXCkvZ2ltXHJcblxyXG5jb25zdCB3aWtpTGlua09yRW1iZWRSZWdleEcgPSAvKD88IVxcXFwpXFxbXFxbKC4qPykoPzwhXFxcXClcXF1cXF0vZ2ltXHJcbmNvbnN0IHdpa2lMaW5rUmVnZXhHID0gLyg/PCFcXCEpKD88IVxcXFwpXFxbXFxbKC4qPykoPzwhXFxcXClcXF1cXF0vZ2ltO1xyXG5jb25zdCB3aWtpRW1iZWRSZWdleEcgPSAvKD88IVxcXFwpXFwhXFxbXFxbKC4qPykoPzwhXFxcXClcXF1cXF0vZ2ltXHJcblxyXG5jb25zdCBtYXJrZG93bkxpbmtPckVtYmVkUmVnZXggPSAvKD88IVxcXFwpXFxbKC4qPykoPzwhXFxcXClcXF1cXCgoLio/KSg/PCFcXFxcKVxcKS9pbVxyXG5jb25zdCBtYXJrZG93bkxpbmtSZWdleCA9IC8oPzwhXFwhKSg/PCFcXFxcKVxcWyguKj8pKD88IVxcXFwpXFxdXFwoKC4qPykoPzwhXFxcXClcXCkvaW07XHJcbmNvbnN0IG1hcmtkb3duRW1iZWRSZWdleCA9IC8oPzwhXFxcXClcXCFcXFsoLio/KSg/PCFcXFxcKVxcXVxcKCguKj8pKD88IVxcXFwpXFwpL2ltXHJcblxyXG5jb25zdCB3aWtpTGlua09yRW1iZWRSZWdleCA9IC8oPzwhXFxcXClcXFtcXFsoLio/KSg/PCFcXFxcKVxcXVxcXS9pbVxyXG5jb25zdCB3aWtpTGlua1JlZ2V4ID0gLyg/PCFcXCEpKD88IVxcXFwpXFxbXFxbKC4qPykoPzwhXFxcXClcXF1cXF0vaW07XHJcbmNvbnN0IHdpa2lFbWJlZFJlZ2V4ID0gLyg/PCFcXFxcKVxcIVxcW1xcWyguKj8pKD88IVxcXFwpXFxdXFxdL2ltXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmtzSGFuZGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhcHA6IEFwcCxcclxuXHRcdHByaXZhdGUgY29uc29sZUxvZ1ByZWZpeDogc3RyaW5nID0gXCJcIlxyXG5cdCkgeyB9XHJcblxyXG5cdGNoZWNrSXNDb3JyZWN0TWFya2Rvd25FbWJlZCh0ZXh0OiBzdHJpbmcpIHtcclxuXHRcdGxldCBlbGVtZW50cyA9IHRleHQubWF0Y2gobWFya2Rvd25FbWJlZFJlZ2V4Ryk7XHJcblx0XHRyZXR1cm4gKGVsZW1lbnRzICE9IG51bGwgJiYgZWxlbWVudHMubGVuZ3RoID4gMClcclxuXHR9XHJcblxyXG5cdGNoZWNrSXNDb3JyZWN0TWFya2Rvd25MaW5rKHRleHQ6IHN0cmluZykge1xyXG5cdFx0bGV0IGVsZW1lbnRzID0gdGV4dC5tYXRjaChtYXJrZG93bkxpbmtSZWdleEcpO1xyXG5cdFx0cmV0dXJuIChlbGVtZW50cyAhPSBudWxsICYmIGVsZW1lbnRzLmxlbmd0aCA+IDApXHJcblx0fVxyXG5cclxuXHRjaGVja0lzQ29ycmVjdE1hcmtkb3duRW1iZWRPckxpbmsodGV4dDogc3RyaW5nKSB7XHJcblx0XHRsZXQgZWxlbWVudHMgPSB0ZXh0Lm1hdGNoKG1hcmtkb3duTGlua09yRW1iZWRSZWdleEcpO1xyXG5cdFx0cmV0dXJuIChlbGVtZW50cyAhPSBudWxsICYmIGVsZW1lbnRzLmxlbmd0aCA+IDApXHJcblx0fVxyXG5cclxuXHRjaGVja0lzQ29ycmVjdFdpa2lFbWJlZCh0ZXh0OiBzdHJpbmcpIHtcclxuXHRcdGxldCBlbGVtZW50cyA9IHRleHQubWF0Y2god2lraUVtYmVkUmVnZXhHKTtcclxuXHRcdHJldHVybiAoZWxlbWVudHMgIT0gbnVsbCAmJiBlbGVtZW50cy5sZW5ndGggPiAwKVxyXG5cdH1cclxuXHJcblx0Y2hlY2tJc0NvcnJlY3RXaWtpTGluayh0ZXh0OiBzdHJpbmcpIHtcclxuXHRcdGxldCBlbGVtZW50cyA9IHRleHQubWF0Y2god2lraUxpbmtSZWdleEcpO1xyXG5cdFx0cmV0dXJuIChlbGVtZW50cyAhPSBudWxsICYmIGVsZW1lbnRzLmxlbmd0aCA+IDApXHJcblx0fVxyXG5cclxuXHRjaGVja0lzQ29ycmVjdFdpa2lFbWJlZE9yTGluayh0ZXh0OiBzdHJpbmcpIHtcclxuXHRcdGxldCBlbGVtZW50cyA9IHRleHQubWF0Y2god2lraUxpbmtPckVtYmVkUmVnZXhHKTtcclxuXHRcdHJldHVybiAoZWxlbWVudHMgIT0gbnVsbCAmJiBlbGVtZW50cy5sZW5ndGggPiAwKVxyXG5cdH1cclxuXHJcblxyXG5cdGdldEZpbGVCeUxpbmsobGluazogc3RyaW5nLCBvd25pbmdOb3RlUGF0aDogc3RyaW5nKTogVEZpbGUge1xyXG5cdFx0bGV0IGZ1bGxQYXRoID0gdGhpcy5nZXRGdWxsUGF0aEZvckxpbmsobGluaywgb3duaW5nTm90ZVBhdGgpO1xyXG5cdFx0bGV0IGZpbGUgPSB0aGlzLmdldEZpbGVCeVBhdGgoZnVsbFBhdGgpO1xyXG5cdFx0cmV0dXJuIGZpbGU7XHJcblx0fVxyXG5cclxuXHJcblx0Z2V0RmlsZUJ5UGF0aChwYXRoOiBzdHJpbmcpOiBURmlsZSB7XHJcblx0XHRwYXRoID0gVXRpbHMubm9ybWFsaXplUGF0aEZvckZpbGUocGF0aCk7XHJcblx0XHRsZXQgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpO1xyXG5cdFx0bGV0IGZpbGUgPSBmaWxlcy5maW5kKGZpbGUgPT4gVXRpbHMubm9ybWFsaXplUGF0aEZvckZpbGUoZmlsZS5wYXRoKSA9PT0gcGF0aCk7XHJcblx0XHRyZXR1cm4gZmlsZTtcclxuXHR9XHJcblxyXG5cclxuXHRnZXRGdWxsUGF0aEZvckxpbmsobGluazogc3RyaW5nLCBvd25pbmdOb3RlUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGxpbmsgPSBVdGlscy5ub3JtYWxpemVQYXRoRm9yRmlsZShsaW5rKTtcclxuXHRcdG93bmluZ05vdGVQYXRoID0gVXRpbHMubm9ybWFsaXplUGF0aEZvckZpbGUob3duaW5nTm90ZVBhdGgpO1xyXG5cclxuXHRcdGxldCBwYXJlbnRGb2xkZXIgPSBvd25pbmdOb3RlUGF0aC5zdWJzdHJpbmcoMCwgb3duaW5nTm90ZVBhdGgubGFzdEluZGV4T2YoXCIvXCIpKTtcclxuXHRcdGxldCBmdWxsUGF0aCA9IHBhdGguam9pbihwYXJlbnRGb2xkZXIsIGxpbmspO1xyXG5cclxuXHRcdGZ1bGxQYXRoID0gVXRpbHMubm9ybWFsaXplUGF0aEZvckZpbGUoZnVsbFBhdGgpO1xyXG5cdFx0cmV0dXJuIGZ1bGxQYXRoO1xyXG5cdH1cclxuXHJcblxyXG5cdGdldEFsbENhY2hlZExpbmtzVG9GaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiB7IFtub3RlUGF0aDogc3RyaW5nXTogTGlua0NhY2hlW107IH0ge1xyXG5cdFx0bGV0IGFsbExpbmtzOiB7IFtub3RlUGF0aDogc3RyaW5nXTogTGlua0NhY2hlW107IH0gPSB7fTtcclxuXHRcdGxldCBub3RlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuXHJcblx0XHRpZiAobm90ZXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgbm90ZSBvZiBub3Rlcykge1xyXG5cdFx0XHRcdC8vISEhIHRoaXMgY2FuIHJldHVybiB1bmRlZmluZWQgaWYgbm90ZSB3YXMganVzdCB1cGRhdGVkXHJcblx0XHRcdFx0bGV0IGxpbmtzID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRDYWNoZShub3RlLnBhdGgpPy5saW5rcztcclxuXHJcblx0XHRcdFx0aWYgKGxpbmtzKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBsaW5rRnVsbFBhdGggPSB0aGlzLmdldEZ1bGxQYXRoRm9yTGluayhsaW5rLmxpbmssIG5vdGUucGF0aCk7XHJcblx0XHRcdFx0XHRcdGlmIChsaW5rRnVsbFBhdGggPT0gZmlsZVBhdGgpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIWFsbExpbmtzW25vdGUucGF0aF0pXHJcblx0XHRcdFx0XHRcdFx0XHRhbGxMaW5rc1tub3RlLnBhdGhdID0gW107XHJcblx0XHRcdFx0XHRcdFx0YWxsTGlua3Nbbm90ZS5wYXRoXS5wdXNoKGxpbmspO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGFsbExpbmtzO1xyXG5cdH1cclxuXHJcblxyXG5cdGdldEFsbENhY2hlZEVtYmVkc1RvRmlsZShmaWxlUGF0aDogc3RyaW5nKTogeyBbbm90ZVBhdGg6IHN0cmluZ106IEVtYmVkQ2FjaGVbXTsgfSB7XHJcblx0XHRsZXQgYWxsRW1iZWRzOiB7IFtub3RlUGF0aDogc3RyaW5nXTogRW1iZWRDYWNoZVtdOyB9ID0ge307XHJcblx0XHRsZXQgbm90ZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XHJcblxyXG5cdFx0aWYgKG5vdGVzKSB7XHJcblx0XHRcdGZvciAobGV0IG5vdGUgb2Ygbm90ZXMpIHtcclxuXHRcdFx0XHQvLyEhISB0aGlzIGNhbiByZXR1cm4gdW5kZWZpbmVkIGlmIG5vdGUgd2FzIGp1c3QgdXBkYXRlZFxyXG5cdFx0XHRcdGxldCBlbWJlZHMgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldENhY2hlKG5vdGUucGF0aCk/LmVtYmVkcztcclxuXHJcblx0XHRcdFx0aWYgKGVtYmVkcykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgZW1iZWQgb2YgZW1iZWRzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBsaW5rRnVsbFBhdGggPSB0aGlzLmdldEZ1bGxQYXRoRm9yTGluayhlbWJlZC5saW5rLCBub3RlLnBhdGgpO1xyXG5cdFx0XHRcdFx0XHRpZiAobGlua0Z1bGxQYXRoID09IGZpbGVQYXRoKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFhbGxFbWJlZHNbbm90ZS5wYXRoXSlcclxuXHRcdFx0XHRcdFx0XHRcdGFsbEVtYmVkc1tub3RlLnBhdGhdID0gW107XHJcblx0XHRcdFx0XHRcdFx0YWxsRW1iZWRzW25vdGUucGF0aF0ucHVzaChlbWJlZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYWxsRW1iZWRzO1xyXG5cdH1cclxuXHJcblxyXG5cdGFzeW5jIHVwZGF0ZUxpbmtzVG9SZW5hbWVkRmlsZShvbGROb3RlUGF0aDogc3RyaW5nLCBuZXdOb3RlUGF0aDogc3RyaW5nLCBjaGFuZ2VsaW5rc0FsdCA9IGZhbHNlKSB7XHJcblx0XHRsZXQgbm90ZXMgPSBhd2FpdCB0aGlzLmdldE5vdGVzVGhhdEhhdmVMaW5rVG9GaWxlKG9sZE5vdGVQYXRoKTtcclxuXHRcdGxldCBsaW5rczogUGF0aENoYW5nZUluZm9bXSA9IFt7IG9sZFBhdGg6IG9sZE5vdGVQYXRoLCBuZXdQYXRoOiBuZXdOb3RlUGF0aCB9XTtcclxuXHJcblx0XHRpZiAobm90ZXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgbm90ZSBvZiBub3Rlcykge1xyXG5cdFx0XHRcdGF3YWl0IHRoaXMudXBkYXRlQ2hhbmdlZFBhdGhzSW5Ob3RlKG5vdGUsIGxpbmtzLCBjaGFuZ2VsaW5rc0FsdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRhc3luYyB1cGRhdGVDaGFuZ2VkUGF0aEluTm90ZShub3RlUGF0aDogc3RyaW5nLCBvbGRMaW5rOiBzdHJpbmcsIG5ld0xpbms6IHN0cmluZywgY2hhbmdlbGlua3NBbHQgPSBmYWxzZSkge1xyXG5cdFx0bGV0IGNoYW5nZXM6IFBhdGhDaGFuZ2VJbmZvW10gPSBbeyBvbGRQYXRoOiBvbGRMaW5rLCBuZXdQYXRoOiBuZXdMaW5rIH1dO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMudXBkYXRlQ2hhbmdlZFBhdGhzSW5Ob3RlKG5vdGVQYXRoLCBjaGFuZ2VzLCBjaGFuZ2VsaW5rc0FsdCk7XHJcblx0fVxyXG5cclxuXHJcblx0YXN5bmMgdXBkYXRlQ2hhbmdlZFBhdGhzSW5Ob3RlKG5vdGVQYXRoOiBzdHJpbmcsIGNoYW5nZWRMaW5rczogUGF0aENoYW5nZUluZm9bXSwgY2hhbmdlbGlua3NBbHQgPSBmYWxzZSkge1xyXG5cdFx0bGV0IGZpbGUgPSB0aGlzLmdldEZpbGVCeVBhdGgobm90ZVBhdGgpO1xyXG5cdFx0aWYgKCFmaWxlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IodGhpcy5jb25zb2xlTG9nUHJlZml4ICsgXCJjYW50IHVwZGF0ZSBsaW5rcyBpbiBub3RlLCBmaWxlIG5vdCBmb3VuZDogXCIgKyBub3RlUGF0aCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdGV4dCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XHJcblx0XHRsZXQgZGlydHkgPSBmYWxzZTtcclxuXHJcblx0XHRsZXQgZWxlbWVudHMgPSB0ZXh0Lm1hdGNoKG1hcmtkb3duTGlua09yRW1iZWRSZWdleEcpO1xyXG5cdFx0aWYgKGVsZW1lbnRzICE9IG51bGwgJiYgZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRmb3IgKGxldCBlbCBvZiBlbGVtZW50cykge1xyXG5cdFx0XHRcdGxldCBhbHQgPSBlbC5tYXRjaCgvXFxbKC4qPylcXF0vKVsxXTtcclxuXHRcdFx0XHRsZXQgbGluayA9IGVsLm1hdGNoKC9cXCgoLio/KVxcKS8pWzFdO1xyXG5cclxuXHRcdFx0XHRsZXQgZnVsbExpbmsgPSB0aGlzLmdldEZ1bGxQYXRoRm9yTGluayhsaW5rLCBub3RlUGF0aCk7XHJcblxyXG5cdFx0XHRcdGZvciAobGV0IGNoYW5nZWRMaW5rIG9mIGNoYW5nZWRMaW5rcykge1xyXG5cdFx0XHRcdFx0aWYgKGZ1bGxMaW5rID09IGNoYW5nZWRMaW5rLm9sZFBhdGgpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG5ld1JlbExpbms6IHN0cmluZyA9IHBhdGgucmVsYXRpdmUobm90ZVBhdGgsIGNoYW5nZWRMaW5rLm5ld1BhdGgpO1xyXG5cdFx0XHRcdFx0XHRuZXdSZWxMaW5rID0gVXRpbHMubm9ybWFsaXplUGF0aEZvckxpbmsobmV3UmVsTGluayk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobmV3UmVsTGluay5zdGFydHNXaXRoKFwiLi4vXCIpKSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3UmVsTGluayA9IG5ld1JlbExpbmsuc3Vic3RyaW5nKDMpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoY2hhbmdlbGlua3NBbHQgJiYgbmV3UmVsTGluay5lbmRzV2l0aChcIi5tZFwiKSkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBleHQgPSBwYXRoLmV4dG5hbWUobmV3UmVsTGluayk7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGJhc2VOYW1lID0gcGF0aC5iYXNlbmFtZShuZXdSZWxMaW5rLCBleHQpO1xyXG5cdFx0XHRcdFx0XHRcdGFsdCA9IFV0aWxzLm5vcm1hbGl6ZVBhdGhGb3JGaWxlKGJhc2VOYW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShlbCwgJ1snICsgYWx0ICsgJ10nICsgJygnICsgbmV3UmVsTGluayArICcpJylcclxuXHJcblx0XHRcdFx0XHRcdGRpcnR5ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY29uc29sZUxvZ1ByZWZpeCArIFwibGluayB1cGRhdGVkIGluIG5vdGUgW25vdGUsIG9sZCBsaW5rLCBuZXcgbGlua106IFxcbiAgIFwiXHJcblx0XHRcdFx0XHRcdFx0KyBmaWxlLnBhdGggKyBcIlxcbiAgIFwiICsgbGluayArIFwiXFxuICAgXCIgKyBuZXdSZWxMaW5rKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkaXJ0eSlcclxuXHRcdFx0YXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIHRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cdGFzeW5jIHVwZGF0ZUludGVybmFsTGlua3NJbk1vdmVkTm90ZShvbGROb3RlUGF0aDogc3RyaW5nLCBuZXdOb3RlUGF0aDogc3RyaW5nLCBhdHRhY2htZW50c0FscmVhZHlNb3ZlZDogYm9vbGVhbikge1xyXG5cdFx0bGV0IGZpbGUgPSB0aGlzLmdldEZpbGVCeVBhdGgobmV3Tm90ZVBhdGgpO1xyXG5cdFx0aWYgKCFmaWxlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IodGhpcy5jb25zb2xlTG9nUHJlZml4ICsgXCJjYW50IHVwZGF0ZSBpbnRlcm5hbCBsaW5rcywgZmlsZSBub3QgZm91bmQ6IFwiICsgbmV3Tm90ZVBhdGgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHRleHQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xyXG5cdFx0bGV0IGRpcnR5ID0gZmFsc2U7XHJcblxyXG5cdFx0bGV0IGVsZW1lbnRzID0gdGV4dC5tYXRjaCgvXFxbLio/XFwpL2cpO1xyXG5cdFx0aWYgKGVsZW1lbnRzICE9IG51bGwgJiYgZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRmb3IgKGxldCBlbCBvZiBlbGVtZW50cykge1xyXG5cdFx0XHRcdGxldCBhbHQgPSBlbC5tYXRjaCgvXFxbKC4qPylcXF0vKVsxXTtcclxuXHRcdFx0XHRsZXQgbGluayA9IGVsLm1hdGNoKC9cXCgoLio/KVxcKS8pWzFdO1xyXG5cclxuXHRcdFx0XHQvL3N0YXJ0c1dpdGgoXCIuLi9cIikgLSBmb3Igbm90IHNraXBwaW5nIGZpbGVzIHRoYXQgbm90IGluIHRoZSBub3RlIGRpclxyXG5cdFx0XHRcdGlmIChhdHRhY2htZW50c0FscmVhZHlNb3ZlZCAmJiAhbGluay5lbmRzV2l0aChcIi5tZFwiKSAmJiAhbGluay5zdGFydHNXaXRoKFwiLi4vXCIpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBmdWxsTGluayA9IHRoaXMuZ2V0RnVsbFBhdGhGb3JMaW5rKGxpbmssIG9sZE5vdGVQYXRoKTtcclxuXHRcdFx0XHRsZXQgbmV3UmVsTGluazogc3RyaW5nID0gcGF0aC5yZWxhdGl2ZShuZXdOb3RlUGF0aCwgZnVsbExpbmspO1xyXG5cdFx0XHRcdG5ld1JlbExpbmsgPSBVdGlscy5ub3JtYWxpemVQYXRoRm9yTGluayhuZXdSZWxMaW5rKTtcclxuXHJcblx0XHRcdFx0aWYgKG5ld1JlbExpbmsuc3RhcnRzV2l0aChcIi4uL1wiKSkge1xyXG5cdFx0XHRcdFx0bmV3UmVsTGluayA9IG5ld1JlbExpbmsuc3Vic3RyaW5nKDMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShlbCwgJ1snICsgYWx0ICsgJ10nICsgJygnICsgbmV3UmVsTGluayArICcpJyk7XHJcblxyXG5cdFx0XHRcdGRpcnR5ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb25zb2xlTG9nUHJlZml4ICsgXCJsaW5rIHVwZGF0ZWQgaW4gbm90ZSBbbm90ZSwgb2xkIGxpbmssIG5ldyBsaW5rXTogXFxuICAgXCJcclxuXHRcdFx0XHRcdCsgZmlsZS5wYXRoICsgXCJcXG4gICBcIiArIGxpbmsgKyBcIiAgIFxcblwiICsgbmV3UmVsTGluayk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZGlydHkpXHJcblx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCB0ZXh0KTtcclxuXHR9XHJcblxyXG5cclxuXHRnZXRDYWNoZWROb3Rlc1RoYXRIYXZlTGlua1RvRmlsZShmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG5cdFx0bGV0IG5vdGVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdFx0bGV0IGFsbE5vdGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xyXG5cclxuXHRcdGlmIChhbGxOb3Rlcykge1xyXG5cdFx0XHRmb3IgKGxldCBub3RlIG9mIGFsbE5vdGVzKSB7XHJcblx0XHRcdFx0bGV0IG5vdGVQYXRoID0gbm90ZS5wYXRoO1xyXG5cclxuXHRcdFx0XHQvLyEhISB0aGlzIGNhbiByZXR1cm4gdW5kZWZpbmVkIGlmIG5vdGUgd2FzIGp1c3QgdXBkYXRlZFxyXG5cdFx0XHRcdGxldCBlbWJlZHMgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldENhY2hlKG5vdGVQYXRoKT8uZW1iZWRzO1xyXG5cdFx0XHRcdGlmIChlbWJlZHMpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGVtYmVkIG9mIGVtYmVkcykge1xyXG5cdFx0XHRcdFx0XHRsZXQgbGlua1BhdGggPSB0aGlzLmdldEZ1bGxQYXRoRm9yTGluayhlbWJlZC5saW5rLCBub3RlLnBhdGgpO1xyXG5cdFx0XHRcdFx0XHRpZiAobGlua1BhdGggPT0gZmlsZVBhdGgpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIW5vdGVzLmNvbnRhaW5zKG5vdGVQYXRoKSlcclxuXHRcdFx0XHRcdFx0XHRcdG5vdGVzLnB1c2gobm90ZVBhdGgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyEhISB0aGlzIGNhbiByZXR1cm4gdW5kZWZpbmVkIGlmIG5vdGUgd2FzIGp1c3QgdXBkYXRlZFxyXG5cdFx0XHRcdGxldCBsaW5rcyA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0Q2FjaGUobm90ZVBhdGgpPy5saW5rcztcclxuXHRcdFx0XHRpZiAobGlua3MpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGxpbmtQYXRoID0gdGhpcy5nZXRGdWxsUGF0aEZvckxpbmsobGluay5saW5rLCBub3RlLnBhdGgpO1xyXG5cdFx0XHRcdFx0XHRpZiAobGlua1BhdGggPT0gZmlsZVBhdGgpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIW5vdGVzLmNvbnRhaW5zKG5vdGVQYXRoKSlcclxuXHRcdFx0XHRcdFx0XHRcdG5vdGVzLnB1c2gobm90ZVBhdGgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5vdGVzO1xyXG5cdH1cclxuXHJcblxyXG5cdGFzeW5jIGdldE5vdGVzVGhhdEhhdmVMaW5rVG9GaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcblx0XHRsZXQgbm90ZXM6IHN0cmluZ1tdID0gW107XHJcblx0XHRsZXQgYWxsTm90ZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XHJcblxyXG5cdFx0aWYgKGFsbE5vdGVzKSB7XHJcblx0XHRcdGZvciAobGV0IG5vdGUgb2YgYWxsTm90ZXMpIHtcclxuXHRcdFx0XHRsZXQgbm90ZVBhdGggPSBub3RlLnBhdGg7XHJcblxyXG5cdFx0XHRcdGxldCBsaW5rcyA9IGF3YWl0IHRoaXMuZ2V0TGlua3NGcm9tTm90ZShub3RlUGF0aCk7XHJcblxyXG5cdFx0XHRcdGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuXHRcdFx0XHRcdGxldCBsaW5rRnVsbFBhdGggPSB0aGlzLmdldEZ1bGxQYXRoRm9yTGluayhsaW5rLmxpbmssIG5vdGVQYXRoKTtcclxuXHRcdFx0XHRcdGlmIChsaW5rRnVsbFBhdGggPT0gZmlsZVBhdGgpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFub3Rlcy5jb250YWlucyhub3RlUGF0aCkpXHJcblx0XHRcdFx0XHRcdFx0bm90ZXMucHVzaChub3RlUGF0aCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5vdGVzO1xyXG5cdH1cclxuXHJcblxyXG5cdGdldEZpbGVQYXRoV2l0aFJlbmFtZWRCYXNlTmFtZShmaWxlUGF0aDogc3RyaW5nLCBuZXdCYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBVdGlscy5ub3JtYWxpemVQYXRoRm9yRmlsZShwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKGZpbGVQYXRoKSwgbmV3QmFzZU5hbWUgKyBwYXRoLmV4dG5hbWUoZmlsZVBhdGgpKSk7XHJcblx0fVxyXG5cclxuXHJcblx0YXN5bmMgZ2V0TGlua3NGcm9tTm90ZShub3RlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxMaW5rQ2FjaGVbXT4ge1xyXG5cdFx0bGV0IGZpbGUgPSB0aGlzLmdldEZpbGVCeVBhdGgobm90ZVBhdGgpO1xyXG5cdFx0aWYgKCFmaWxlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IodGhpcy5jb25zb2xlTG9nUHJlZml4ICsgXCJjYW50IGdldCBlbWJlZHMsIGZpbGUgbm90IGZvdW5kOiBcIiArIG5vdGVQYXRoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB0ZXh0ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcclxuXHJcblx0XHRsZXQgbGlua3M6IExpbmtDYWNoZVtdID0gW107XHJcblxyXG5cdFx0bGV0IGVsZW1lbnRzID0gdGV4dC5tYXRjaChtYXJrZG93bkxpbmtPckVtYmVkUmVnZXhHKTtcclxuXHRcdGlmIChlbGVtZW50cyAhPSBudWxsICYmIGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yIChsZXQgZWwgb2YgZWxlbWVudHMpIHtcclxuXHRcdFx0XHRsZXQgYWx0ID0gZWwubWF0Y2goL1xcWyguKj8pXFxdLylbMV07XHJcblx0XHRcdFx0bGV0IGxpbmsgPSBlbC5tYXRjaCgvXFwoKC4qPylcXCkvKVsxXTtcclxuXHJcblx0XHRcdFx0bGV0IGVtYjogTGlua0NhY2hlID0ge1xyXG5cdFx0XHRcdFx0bGluazogbGluayxcclxuXHRcdFx0XHRcdGRpc3BsYXlUZXh0OiBhbHQsXHJcblx0XHRcdFx0XHRvcmlnaW5hbDogZWwsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRzdGFydDoge1xyXG5cdFx0XHRcdFx0XHRcdGNvbDogMCwvL3RvZG9cclxuXHRcdFx0XHRcdFx0XHRsaW5lOiAwLFxyXG5cdFx0XHRcdFx0XHRcdG9mZnNldDogMFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRlbmQ6IHtcclxuXHRcdFx0XHRcdFx0XHRjb2w6IDAsLy90b2RvXHJcblx0XHRcdFx0XHRcdFx0bGluZTogMCxcclxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ6IDBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGxpbmtzLnB1c2goZW1iKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxpbmtzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcblx0YXN5bmMgY29udmVydEFsbE5vdGVFbWJlZHNQYXRoc1RvUmVsYXRpdmUobm90ZVBhdGg6IHN0cmluZyk6IFByb21pc2U8RW1iZWRDaGFuZ2VJbmZvW10+IHtcclxuXHRcdGxldCBjaGFuZ2VkRW1iZWRzOiBFbWJlZENoYW5nZUluZm9bXSA9IFtdO1xyXG5cclxuXHRcdGxldCBlbWJlZHMgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldENhY2hlKG5vdGVQYXRoKT8uZW1iZWRzO1xyXG5cclxuXHRcdGlmIChlbWJlZHMpIHtcclxuXHRcdFx0Zm9yIChsZXQgZW1iZWQgb2YgZW1iZWRzKSB7XHJcblx0XHRcdFx0bGV0IGlzTWFya2Rvd25FbWJlZCA9IHRoaXMuY2hlY2tJc0NvcnJlY3RNYXJrZG93bkVtYmVkKGVtYmVkLm9yaWdpbmFsKTtcclxuXHRcdFx0XHRsZXQgaXNXaWtpRW1iZWQgPSB0aGlzLmNoZWNrSXNDb3JyZWN0V2lraUVtYmVkKGVtYmVkLm9yaWdpbmFsKTtcclxuXHRcdFx0XHRpZiAoaXNNYXJrZG93bkVtYmVkIHx8IGlzV2lraUVtYmVkKSB7XHJcblx0XHRcdFx0XHRsZXQgZmlsZSA9IHRoaXMuZ2V0RmlsZUJ5TGluayhlbWJlZC5saW5rLCBub3RlUGF0aCk7XHJcblx0XHRcdFx0XHRpZiAoZmlsZSlcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdFx0ZmlsZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0Rmlyc3RMaW5rcGF0aERlc3QoZW1iZWQubGluaywgbm90ZVBhdGgpO1xyXG5cdFx0XHRcdFx0aWYgKGZpbGUpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG5ld1JlbExpbms6IHN0cmluZyA9IHBhdGgucmVsYXRpdmUobm90ZVBhdGgsIGZpbGUucGF0aCk7XHJcblx0XHRcdFx0XHRcdG5ld1JlbExpbmsgPSBpc01hcmtkb3duRW1iZWQgPyBVdGlscy5ub3JtYWxpemVQYXRoRm9yTGluayhuZXdSZWxMaW5rKSA6IFV0aWxzLm5vcm1hbGl6ZVBhdGhGb3JGaWxlKG5ld1JlbExpbmspO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKG5ld1JlbExpbmsuc3RhcnRzV2l0aChcIi4uL1wiKSkge1xyXG5cdFx0XHRcdFx0XHRcdG5ld1JlbExpbmsgPSBuZXdSZWxMaW5rLnN1YnN0cmluZygzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Y2hhbmdlZEVtYmVkcy5wdXNoKHsgb2xkOiBlbWJlZCwgbmV3TGluazogbmV3UmVsTGluayB9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcih0aGlzLmNvbnNvbGVMb2dQcmVmaXggKyBub3RlUGF0aCArIFwiIGhhcyBiYWQgZW1iZWQgKGZpbGUgZG9lcyBub3QgZXhpc3QpOiBcIiArIGVtYmVkLmxpbmspO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKHRoaXMuY29uc29sZUxvZ1ByZWZpeCArIG5vdGVQYXRoICsgXCIgaGFzIGJhZCBlbWJlZCAoZm9ybWF0IG9mIGxpbmsgaXMgbm90IG1hcmtkb3duIG9yIHdpa2lsaW5rKTogXCIgKyBlbWJlZC5vcmlnaW5hbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0YXdhaXQgdGhpcy51cGRhdGVDaGFuZ2VkRW1iZWRJbk5vdGUobm90ZVBhdGgsIGNoYW5nZWRFbWJlZHMpO1xyXG5cdFx0cmV0dXJuIGNoYW5nZWRFbWJlZHM7XHJcblx0fVxyXG5cclxuXHJcblx0YXN5bmMgY29udmVydEFsbE5vdGVMaW5rc1BhdGhzVG9SZWxhdGl2ZShub3RlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxMaW5rQ2hhbmdlSW5mb1tdPiB7XHJcblx0XHRsZXQgY2hhbmdlZExpbmtzOiBMaW5rQ2hhbmdlSW5mb1tdID0gW107XHJcblxyXG5cdFx0bGV0IGxpbmtzID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRDYWNoZShub3RlUGF0aCk/LmxpbmtzO1xyXG5cclxuXHRcdGlmIChsaW5rcykge1xyXG5cdFx0XHRmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcblx0XHRcdFx0bGV0IGlzTWFya2Rvd25MaW5rID0gdGhpcy5jaGVja0lzQ29ycmVjdE1hcmtkb3duTGluayhsaW5rLm9yaWdpbmFsKTtcclxuXHRcdFx0XHRsZXQgaXNXaWtpTGluayA9IHRoaXMuY2hlY2tJc0NvcnJlY3RXaWtpTGluayhsaW5rLm9yaWdpbmFsKTtcclxuXHRcdFx0XHRpZiAoaXNNYXJrZG93bkxpbmsgfHwgaXNXaWtpTGluaykge1xyXG5cdFx0XHRcdFx0bGV0IGZpbGUgPSB0aGlzLmdldEZpbGVCeUxpbmsobGluay5saW5rLCBub3RlUGF0aCk7XHJcblx0XHRcdFx0XHRpZiAoZmlsZSlcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdFx0Ly8hISEgbGluay5kaXNwbGF5VGV4dCBpcyBhbHdheXMgXCJcIiAtIE9CU0lESUFOIEJVRz8sIHNvIGdldCBkaXNwbGF5IHRleHQgbWFudWFseVxyXG5cdFx0XHRcdFx0aWYgKGlzTWFya2Rvd25MaW5rKSB7XHJcblx0XHRcdFx0XHRcdGxldCBlbGVtZW50cyA9IGxpbmsub3JpZ2luYWwubWF0Y2gobWFya2Rvd25MaW5rUmVnZXgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoZWxlbWVudHMpXHJcblx0XHRcdFx0XHRcdFx0bGluay5kaXNwbGF5VGV4dCA9IGVsZW1lbnRzWzFdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZpbGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KGxpbmsubGluaywgbm90ZVBhdGgpO1xyXG5cdFx0XHRcdFx0aWYgKGZpbGUpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG5ld1JlbExpbms6IHN0cmluZyA9IHBhdGgucmVsYXRpdmUobm90ZVBhdGgsIGZpbGUucGF0aCk7XHJcblx0XHRcdFx0XHRcdG5ld1JlbExpbmsgPSBpc01hcmtkb3duTGluayA/IFV0aWxzLm5vcm1hbGl6ZVBhdGhGb3JMaW5rKG5ld1JlbExpbmspIDogVXRpbHMubm9ybWFsaXplUGF0aEZvckZpbGUobmV3UmVsTGluayk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobmV3UmVsTGluay5zdGFydHNXaXRoKFwiLi4vXCIpKSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3UmVsTGluayA9IG5ld1JlbExpbmsuc3Vic3RyaW5nKDMpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRjaGFuZ2VkTGlua3MucHVzaCh7IG9sZDogbGluaywgbmV3TGluazogbmV3UmVsTGluayB9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcih0aGlzLmNvbnNvbGVMb2dQcmVmaXggKyBub3RlUGF0aCArIFwiIGhhcyBiYWQgbGluayAoZmlsZSBkb2VzIG5vdCBleGlzdCk6IFwiICsgbGluay5saW5rKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcih0aGlzLmNvbnNvbGVMb2dQcmVmaXggKyBub3RlUGF0aCArIFwiIGhhcyBiYWQgbGluayAoZm9ybWF0IG9mIGxpbmsgaXMgbm90IG1hcmtkb3duIG9yIHdpa2lsaW5rKTogXCIgKyBsaW5rLm9yaWdpbmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRhd2FpdCB0aGlzLnVwZGF0ZUNoYW5nZWRMaW5rSW5Ob3RlKG5vdGVQYXRoLCBjaGFuZ2VkTGlua3MpO1xyXG5cdFx0cmV0dXJuIGNoYW5nZWRMaW5rcztcclxuXHR9XHJcblxyXG5cclxuXHRhc3luYyB1cGRhdGVDaGFuZ2VkRW1iZWRJbk5vdGUobm90ZVBhdGg6IHN0cmluZywgY2hhbmdlZEVtYmVkczogRW1iZWRDaGFuZ2VJbmZvW10pIHtcclxuXHRcdGxldCBub3RlRmlsZSA9IHRoaXMuZ2V0RmlsZUJ5UGF0aChub3RlUGF0aCk7XHJcblx0XHRpZiAoIW5vdGVGaWxlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IodGhpcy5jb25zb2xlTG9nUHJlZml4ICsgXCJjYW50IHVwZGF0ZSBlbWJlZHMgaW4gbm90ZSwgZmlsZSBub3QgZm91bmQ6IFwiICsgbm90ZVBhdGgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHRleHQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKG5vdGVGaWxlKTtcclxuXHRcdGxldCBkaXJ0eSA9IGZhbHNlO1xyXG5cclxuXHRcdGlmIChjaGFuZ2VkRW1iZWRzICYmIGNoYW5nZWRFbWJlZHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRmb3IgKGxldCBlbWJlZCBvZiBjaGFuZ2VkRW1iZWRzKSB7XHJcblx0XHRcdFx0aWYgKGVtYmVkLm9sZC5saW5rID09IGVtYmVkLm5ld0xpbmspXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuY2hlY2tJc0NvcnJlY3RNYXJrZG93bkVtYmVkKGVtYmVkLm9sZC5vcmlnaW5hbCkpIHtcclxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoZW1iZWQub2xkLm9yaWdpbmFsLCAnIVsnICsgZW1iZWQub2xkLmRpc3BsYXlUZXh0ICsgJ10nICsgJygnICsgZW1iZWQubmV3TGluayArICcpJyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmNoZWNrSXNDb3JyZWN0V2lraUVtYmVkKGVtYmVkLm9sZC5vcmlnaW5hbCkpIHtcclxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoZW1iZWQub2xkLm9yaWdpbmFsLCAnIVtbJyArIGVtYmVkLm5ld0xpbmsgKyAnXV0nKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcih0aGlzLmNvbnNvbGVMb2dQcmVmaXggKyBub3RlUGF0aCArIFwiIGhhcyBiYWQgZW1iZWQgKGZvcm1hdCBvZiBsaW5rIGlzIG5vdCBtYWVrZG93biBvciB3aWtpbGluayk6IFwiICsgZW1iZWQub2xkLm9yaWdpbmFsKTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb25zb2xlTG9nUHJlZml4ICsgXCJlbWJlZCB1cGRhdGVkIGluIG5vdGUgW25vdGUsIG9sZCBsaW5rLCBuZXcgbGlua106IFxcbiAgIFwiXHJcblx0XHRcdFx0XHQrIG5vdGVGaWxlLnBhdGggKyBcIlxcbiAgIFwiICsgZW1iZWQub2xkLmxpbmsgKyBcIlxcbiAgIFwiICsgZW1iZWQubmV3TGluaylcclxuXHJcblx0XHRcdFx0ZGlydHkgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGRpcnR5KVxyXG5cdFx0XHRhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkobm90ZUZpbGUsIHRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cdGFzeW5jIHVwZGF0ZUNoYW5nZWRMaW5rSW5Ob3RlKG5vdGVQYXRoOiBzdHJpbmcsIGNoYW5kZWRMaW5rczogTGlua0NoYW5nZUluZm9bXSkge1xyXG5cdFx0bGV0IG5vdGVGaWxlID0gdGhpcy5nZXRGaWxlQnlQYXRoKG5vdGVQYXRoKTtcclxuXHRcdGlmICghbm90ZUZpbGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcih0aGlzLmNvbnNvbGVMb2dQcmVmaXggKyBcImNhbnQgdXBkYXRlIGxpbmtzIGluIG5vdGUsIGZpbGUgbm90IGZvdW5kOiBcIiArIG5vdGVQYXRoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB0ZXh0ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChub3RlRmlsZSk7XHJcblx0XHRsZXQgZGlydHkgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoY2hhbmRlZExpbmtzICYmIGNoYW5kZWRMaW5rcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGZvciAobGV0IGxpbmsgb2YgY2hhbmRlZExpbmtzKSB7XHJcblx0XHRcdFx0aWYgKGxpbmsub2xkLmxpbmsgPT0gbGluay5uZXdMaW5rKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmNoZWNrSXNDb3JyZWN0TWFya2Rvd25MaW5rKGxpbmsub2xkLm9yaWdpbmFsKSkge1xyXG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShsaW5rLm9sZC5vcmlnaW5hbCwgJ1snICsgbGluay5vbGQuZGlzcGxheVRleHQgKyAnXScgKyAnKCcgKyBsaW5rLm5ld0xpbmsgKyAnKScpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jaGVja0lzQ29ycmVjdFdpa2lMaW5rKGxpbmsub2xkLm9yaWdpbmFsKSkge1xyXG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShsaW5rLm9sZC5vcmlnaW5hbCwgJ1tbJyArIGxpbmsubmV3TGluayArICddXScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKHRoaXMuY29uc29sZUxvZ1ByZWZpeCArIG5vdGVQYXRoICsgXCIgaGFzIGJhZCBsaW5rIChmb3JtYXQgb2YgbGluayBpcyBub3QgbWFla2Rvd24gb3Igd2lraWxpbmspOiBcIiArIGxpbmsub2xkLm9yaWdpbmFsKTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb25zb2xlTG9nUHJlZml4ICsgXCJsaW5rIHVwZGF0ZWQgaW4gbm90ZSBbbm90ZSwgb2xkIGxpbmssIG5ldyBsaW5rXTogXFxuICAgXCJcclxuXHRcdFx0XHRcdCsgbm90ZUZpbGUucGF0aCArIFwiXFxuICAgXCIgKyBsaW5rLm9sZC5saW5rICsgXCJcXG4gICBcIiArIGxpbmsubmV3TGluaylcclxuXHJcblx0XHRcdFx0ZGlydHkgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGRpcnR5KVxyXG5cdFx0XHRhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkobm90ZUZpbGUsIHRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cdGFzeW5jIHJlcGxhY2VBbGxOb3RlV2lraWxpbmtzV2l0aE1hcmtkb3duTGlua3Mobm90ZVBhdGg6IHN0cmluZyk6IFByb21pc2U8TGlua3NBbmRFbWJlZHNDaGFuZ2VkSW5mbz4ge1xyXG5cdFx0bGV0IHJlczogTGlua3NBbmRFbWJlZHNDaGFuZ2VkSW5mbyA9IHtcclxuXHRcdFx0bGlua3M6IFtdLFxyXG5cdFx0XHRlbWJlZHM6IFtdLFxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBub3RlRmlsZSA9IHRoaXMuZ2V0RmlsZUJ5UGF0aChub3RlUGF0aCk7XHJcblx0XHRpZiAoIW5vdGVGaWxlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IodGhpcy5jb25zb2xlTG9nUHJlZml4ICsgXCJjYW50IHVwZGF0ZSB3aWtpbGlua3MgaW4gbm90ZSwgZmlsZSBub3QgZm91bmQ6IFwiICsgbm90ZVBhdGgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGxpbmtzID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRDYWNoZShub3RlUGF0aCk/LmxpbmtzO1xyXG5cdFx0bGV0IGVtYmVkcyA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0Q2FjaGUobm90ZVBhdGgpPy5lbWJlZHM7XHJcblx0XHRsZXQgdGV4dCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQobm90ZUZpbGUpO1xyXG5cdFx0bGV0IGRpcnR5ID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKGVtYmVkcykgeyAvL2VtYmVkcyBtdXN0IGdvIGZpcnN0IVxyXG5cdFx0XHRmb3IgKGxldCBlbWJlZCBvZiBlbWJlZHMpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jaGVja0lzQ29ycmVjdFdpa2lFbWJlZChlbWJlZC5vcmlnaW5hbCkpIHtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV3UGF0aCA9IFV0aWxzLm5vcm1hbGl6ZVBhdGhGb3JMaW5rKGVtYmVkLmxpbmspXHJcblx0XHRcdFx0XHRsZXQgbmV3TGluayA9ICchWycgKyAnXScgKyAnKCcgKyBuZXdQYXRoICsgJyknXHJcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGVtYmVkLm9yaWdpbmFsLCBuZXdMaW5rKTtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmNvbnNvbGVMb2dQcmVmaXggKyBcIndpa2lsaW5rIChlbWJlZCkgcmVwbGFjZWQgaW4gbm90ZSBbbm90ZSwgb2xkIGxpbmssIG5ldyBsaW5rXTogXFxuICAgXCJcclxuXHRcdFx0XHRcdFx0KyBub3RlRmlsZS5wYXRoICsgXCJcXG4gICBcIiArIGVtYmVkLm9yaWdpbmFsICsgXCJcXG4gICBcIiArIG5ld0xpbmspXHJcblxyXG5cdFx0XHRcdFx0cmVzLmVtYmVkcy5wdXNoKHsgb2xkOiBlbWJlZCwgbmV3TGluazogbmV3TGluayB9KVxyXG5cclxuXHRcdFx0XHRcdGRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobGlua3MpIHtcclxuXHRcdFx0Zm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNoZWNrSXNDb3JyZWN0V2lraUxpbmsobGluay5vcmlnaW5hbCkpIHtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgbmV3UGF0aCA9IFV0aWxzLm5vcm1hbGl6ZVBhdGhGb3JMaW5rKGxpbmsubGluaylcclxuXHJcblx0XHRcdFx0XHRsZXQgZmlsZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0Rmlyc3RMaW5rcGF0aERlc3QobGluay5saW5rLCBub3RlUGF0aCk7XHJcblx0XHRcdFx0XHRpZiAoZmlsZSAmJiBmaWxlLmV4dGVuc2lvbiA9PSBcIm1kXCIgJiYgIW5ld1BhdGguZW5kc1dpdGgoXCIubWRcIikpXHJcblx0XHRcdFx0XHRcdG5ld1BhdGggPSBuZXdQYXRoICsgXCIubWRcIjtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV3TGluayA9ICdbJyArIGxpbmsuZGlzcGxheVRleHQgKyAnXScgKyAnKCcgKyBuZXdQYXRoICsgJyknXHJcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGxpbmsub3JpZ2luYWwsIG5ld0xpbmspO1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY29uc29sZUxvZ1ByZWZpeCArIFwid2lraWxpbmsgcmVwbGFjZWQgaW4gbm90ZSBbbm90ZSwgb2xkIGxpbmssIG5ldyBsaW5rXTogXFxuICAgXCJcclxuXHRcdFx0XHRcdFx0KyBub3RlRmlsZS5wYXRoICsgXCJcXG4gICBcIiArIGxpbmsub3JpZ2luYWwgKyBcIlxcbiAgIFwiICsgbmV3TGluaylcclxuXHJcblx0XHRcdFx0XHRyZXMubGlua3MucHVzaCh7IG9sZDogbGluaywgbmV3TGluazogbmV3TGluayB9KVxyXG5cclxuXHRcdFx0XHRcdGRpcnR5ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZGlydHkpXHJcblx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShub3RlRmlsZSwgdGV4dCk7XHJcblxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5cblR5cGVTY3JpcHQgTWQ1XG49PT09PT09PT09PT09PVxuXG5CYXNlZCBvbiB3b3JrIGJ5XG4qIEpvc2VwaCBNeWVyczogaHR0cDovL3d3dy5teWVyc2RhaWx5Lm9yZy9qb3NlcGgvamF2YXNjcmlwdC9tZDUtdGV4dC5odG1sXG4qIEFuZHLDqSBDcnV6OiBodHRwczovL2dpdGh1Yi5jb20vc2F0YXpvci9TcGFya01ENVxuKiBSYXltb25kIEhpbGw6IGh0dHBzOi8vZ2l0aHViLmNvbS9nb3JoaWxsL3lhbWQ1LmpzXG5cbkVmZmVjdGl2ZWx5IGEgVHlwZVNjcnlwdCByZS13cml0ZSBvZiBSYXltb25kIEhpbGwgSlMgTGlicmFyeVxuXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChDKSAyMDE0IFJheW1vbmQgSGlsbFxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cblxuXG4gICAgICAgICAgICBETyBXSEFUIFRIRSBGVUNLIFlPVSBXQU5UIFRPIFBVQkxJQyBMSUNFTlNFXG4gICAgICAgICAgICAgICAgICAgIFZlcnNpb24gMiwgRGVjZW1iZXIgMjAwNFxuXG4gQ29weXJpZ2h0IChDKSAyMDE1IEFuZHLDqSBDcnV6IDxhbWRmY3J1ekBnbWFpbC5jb20+XG5cbiBFdmVyeW9uZSBpcyBwZXJtaXR0ZWQgdG8gY29weSBhbmQgZGlzdHJpYnV0ZSB2ZXJiYXRpbSBvciBtb2RpZmllZFxuIGNvcGllcyBvZiB0aGlzIGxpY2Vuc2UgZG9jdW1lbnQsIGFuZCBjaGFuZ2luZyBpdCBpcyBhbGxvd2VkIGFzIGxvbmdcbiBhcyB0aGUgbmFtZSBpcyBjaGFuZ2VkLlxuXG4gICAgICAgICAgICBETyBXSEFUIFRIRSBGVUNLIFlPVSBXQU5UIFRPIFBVQkxJQyBMSUNFTlNFXG4gICBURVJNUyBBTkQgQ09ORElUSU9OUyBGT1IgQ09QWUlORywgRElTVFJJQlVUSU9OIEFORCBNT0RJRklDQVRJT05cblxuICAwLiBZb3UganVzdCBETyBXSEFUIFRIRSBGVUNLIFlPVSBXQU5UIFRPLlxuXG5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTWQ1ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1kNSgpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgSW50MzJBcnJheSg0KTtcbiAgICAgICAgdGhpcy5fYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDY4KTtcbiAgICAgICAgdGhpcy5fYnVmZmVyOCA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2J1ZmZlciwgMCwgNjgpO1xuICAgICAgICB0aGlzLl9idWZmZXIzMiA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9idWZmZXIsIDAsIDE3KTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgICBNZDUuaGFzaFN0ciA9IGZ1bmN0aW9uIChzdHIsIHJhdykge1xuICAgICAgICBpZiAocmF3ID09PSB2b2lkIDApIHsgcmF3ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMub25lUGFzc0hhc2hlclxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgIC5hcHBlbmRTdHIoc3RyKVxuICAgICAgICAgICAgLmVuZChyYXcpO1xuICAgIH07XG4gICAgTWQ1Lmhhc2hBc2NpaVN0ciA9IGZ1bmN0aW9uIChzdHIsIHJhdykge1xuICAgICAgICBpZiAocmF3ID09PSB2b2lkIDApIHsgcmF3ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMub25lUGFzc0hhc2hlclxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgIC5hcHBlbmRBc2NpaVN0cihzdHIpXG4gICAgICAgICAgICAuZW5kKHJhdyk7XG4gICAgfTtcbiAgICBNZDUuX2hleCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciBoYyA9IE1kNS5oZXhDaGFycztcbiAgICAgICAgdmFyIGhvID0gTWQ1LmhleE91dDtcbiAgICAgICAgdmFyIG47XG4gICAgICAgIHZhciBvZmZzZXQ7XG4gICAgICAgIHZhciBqO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gaSAqIDg7XG4gICAgICAgICAgICBuID0geFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCA4OyBqICs9IDIpIHtcbiAgICAgICAgICAgICAgICBob1tvZmZzZXQgKyAxICsgal0gPSBoYy5jaGFyQXQobiAmIDB4MEYpO1xuICAgICAgICAgICAgICAgIG4gPj4+PSA0O1xuICAgICAgICAgICAgICAgIGhvW29mZnNldCArIDAgKyBqXSA9IGhjLmNoYXJBdChuICYgMHgwRik7XG4gICAgICAgICAgICAgICAgbiA+Pj49IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvLmpvaW4oJycpO1xuICAgIH07XG4gICAgTWQ1Ll9tZDVjeWNsZSA9IGZ1bmN0aW9uICh4LCBrKSB7XG4gICAgICAgIHZhciBhID0geFswXTtcbiAgICAgICAgdmFyIGIgPSB4WzFdO1xuICAgICAgICB2YXIgYyA9IHhbMl07XG4gICAgICAgIHZhciBkID0geFszXTtcbiAgICAgICAgLy8gZmYoKVxuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzBdIC0gNjgwODc2OTM2IHwgMDtcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGIgfCB+YSAmIGMpICsga1sxXSAtIDM4OTU2NDU4NiB8IDA7XG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzJdICsgNjA2MTA1ODE5IHwgMDtcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbM10gLSAxMDQ0NTI1MzMwIHwgMDtcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgJiBjIHwgfmIgJiBkKSArIGtbNF0gLSAxNzY0MTg4OTcgfCAwO1xuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzVdICsgMTIwMDA4MDQyNiB8IDA7XG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzZdIC0gMTQ3MzIzMTM0MSB8IDA7XG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzddIC0gNDU3MDU5ODMgfCAwO1xuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYiAmIGMgfCB+YiAmIGQpICsga1s4XSArIDE3NzAwMzU0MTYgfCAwO1xuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzldIC0gMTk1ODQxNDQxNyB8IDA7XG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYSB8IH5kICYgYikgKyBrWzEwXSAtIDQyMDYzIHwgMDtcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgJiBkIHwgfmMgJiBhKSArIGtbMTFdIC0gMTk5MDQwNDE2MiB8IDA7XG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgfCAwO1xuICAgICAgICBhICs9IChiICYgYyB8IH5iICYgZCkgKyBrWzEyXSArIDE4MDQ2MDM2ODIgfCAwO1xuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYiB8IH5hICYgYykgKyBrWzEzXSAtIDQwMzQxMTAxIHwgMDtcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgJiBhIHwgfmQgJiBiKSArIGtbMTRdIC0gMTUwMjAwMjI5MCB8IDA7XG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgZCB8IH5jICYgYSkgKyBrWzE1XSArIDEyMzY1MzUzMjkgfCAwO1xuICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIHwgMDtcbiAgICAgICAgLy8gZ2coKVxuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzFdIC0gMTY1Nzk2NTEwIHwgMDtcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1s2XSAtIDEwNjk1MDE2MzIgfCAwO1xuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzExXSArIDY0MzcxNzcxMyB8IDA7XG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzBdIC0gMzczODk3MzAyIHwgMDtcbiAgICAgICAgYiA9IChiIDw8IDIwIHwgYiA+Pj4gMTIpICsgYyB8IDA7XG4gICAgICAgIGEgKz0gKGIgJiBkIHwgYyAmIH5kKSArIGtbNV0gLSA3MDE1NTg2OTEgfCAwO1xuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzEwXSArIDM4MDE2MDgzIHwgMDtcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1sxNV0gLSA2NjA0NzgzMzUgfCAwO1xuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoYyAmIGEgfCBkICYgfmEpICsga1s0XSAtIDQwNTUzNzg0OCB8IDA7XG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzldICsgNTY4NDQ2NDM4IHwgMDtcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSAmIGMgfCBiICYgfmMpICsga1sxNF0gLSAxMDE5ODAzNjkwIHwgMDtcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCAmIGIgfCBhICYgfmIpICsga1szXSAtIDE4NzM2Mzk2MSB8IDA7XG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzhdICsgMTE2MzUzMTUwMSB8IDA7XG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgfCAwO1xuICAgICAgICBhICs9IChiICYgZCB8IGMgJiB+ZCkgKyBrWzEzXSAtIDE0NDQ2ODE0NjcgfCAwO1xuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhICYgYyB8IGIgJiB+YykgKyBrWzJdIC0gNTE0MDM3ODQgfCAwO1xuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkICYgYiB8IGEgJiB+YikgKyBrWzddICsgMTczNTMyODQ3MyB8IDA7XG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjICYgYSB8IGQgJiB+YSkgKyBrWzEyXSAtIDE5MjY2MDc3MzQgfCAwO1xuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIHwgMDtcbiAgICAgICAgLy8gaGgoKVxuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1s1XSAtIDM3ODU1OCB8IDA7XG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGEgXiBiIF4gYykgKyBrWzhdIC0gMjAyMjU3NDQ2MyB8IDA7XG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1sxMV0gKyAxODM5MDMwNTYyIHwgMDtcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzE0XSAtIDM1MzA5NTU2IHwgMDtcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbMV0gLSAxNTMwOTkyMDYwIHwgMDtcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIHwgMDtcbiAgICAgICAgZCArPSAoYSBeIGIgXiBjKSArIGtbNF0gKyAxMjcyODkzMzUzIHwgMDtcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSB8IDA7XG4gICAgICAgIGMgKz0gKGQgXiBhIF4gYikgKyBrWzddIC0gMTU1NDk3NjMyIHwgMDtcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzEwXSAtIDEwOTQ3MzA2NDAgfCAwO1xuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgfCAwO1xuICAgICAgICBhICs9IChiIF4gYyBeIGQpICsga1sxM10gKyA2ODEyNzkxNzQgfCAwO1xuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1swXSAtIDM1ODUzNzIyMiB8IDA7XG4gICAgICAgIGQgPSAoZCA8PCAxMSB8IGQgPj4+IDIxKSArIGEgfCAwO1xuICAgICAgICBjICs9IChkIF4gYSBeIGIpICsga1szXSAtIDcyMjUyMTk3OSB8IDA7XG4gICAgICAgIGMgPSAoYyA8PCAxNiB8IGMgPj4+IDE2KSArIGQgfCAwO1xuICAgICAgICBiICs9IChjIF4gZCBeIGEpICsga1s2XSArIDc2MDI5MTg5IHwgMDtcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYiBeIGMgXiBkKSArIGtbOV0gLSA2NDAzNjQ0ODcgfCAwO1xuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgfCAwO1xuICAgICAgICBkICs9IChhIF4gYiBeIGMpICsga1sxMl0gLSA0MjE4MTU4MzUgfCAwO1xuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoZCBeIGEgXiBiKSArIGtbMTVdICsgNTMwNzQyNTIwIHwgMDtcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGMgXiBkIF4gYSkgKyBrWzJdIC0gOTk1MzM4NjUxIHwgMDtcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIHwgMDtcbiAgICAgICAgLy8gaWkoKVxuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1swXSAtIDE5ODYzMDg0NCB8IDA7XG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzddICsgMTEyNjg5MTQxNSB8IDA7XG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxNF0gLSAxNDE2MzU0OTA1IHwgMDtcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzVdIC0gNTc0MzQwNTUgfCAwO1xuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGtbMTJdICsgMTcwMDQ4NTU3MSB8IDA7XG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzNdIC0gMTg5NDk4NjYwNiB8IDA7XG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1sxMF0gLSAxMDUxNTIzIHwgMDtcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCB8IDA7XG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBrWzFdIC0gMjA1NDkyMjc5OSB8IDA7XG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1s4XSArIDE4NzMzMTMzNTkgfCAwO1xuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgfCAwO1xuICAgICAgICBkICs9IChiIF4gKGEgfCB+YykpICsga1sxNV0gLSAzMDYxMTc0NCB8IDA7XG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgfCAwO1xuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsga1s2XSAtIDE1NjAxOTgzODAgfCAwO1xuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbMTNdICsgMTMwOTE1MTY0OSB8IDA7XG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgfCAwO1xuICAgICAgICBhICs9IChjIF4gKGIgfCB+ZCkpICsga1s0XSAtIDE0NTUyMzA3MCB8IDA7XG4gICAgICAgIGEgPSAoYSA8PCA2IHwgYSA+Pj4gMjYpICsgYiB8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBrWzExXSAtIDExMjAyMTAzNzkgfCAwO1xuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIHwgMDtcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGtbMl0gKyA3MTg3ODcyNTkgfCAwO1xuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIHwgMDtcbiAgICAgICAgYiArPSAoZCBeIChjIHwgfmEpKSArIGtbOV0gLSAzNDM0ODU1NTEgfCAwO1xuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIHwgMDtcbiAgICAgICAgeFswXSA9IGEgKyB4WzBdIHwgMDtcbiAgICAgICAgeFsxXSA9IGIgKyB4WzFdIHwgMDtcbiAgICAgICAgeFsyXSA9IGMgKyB4WzJdIHwgMDtcbiAgICAgICAgeFszXSA9IGQgKyB4WzNdIHwgMDtcbiAgICB9O1xuICAgIE1kNS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9idWZmZXJMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9zdGF0ZS5zZXQoTWQ1LnN0YXRlSWRlbnRpdHkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8vIENoYXIgdG8gY29kZSBwb2ludCB0byB0byBhcnJheSBjb252ZXJzaW9uOlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9jaGFyQ29kZUF0XG4gICAgLy8gI0V4YW1wbGUuM0FfRml4aW5nX2NoYXJDb2RlQXRfdG9faGFuZGxlX25vbi1CYXNpYy1NdWx0aWxpbmd1YWwtUGxhbmVfY2hhcmFjdGVyc19pZl90aGVpcl9wcmVzZW5jZV9lYXJsaWVyX2luX3RoZV9zdHJpbmdfaXNfdW5rbm93blxuICAgIE1kNS5wcm90b3R5cGUuYXBwZW5kU3RyID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICB2YXIgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XG4gICAgICAgIHZhciBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xuICAgICAgICB2YXIgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xuICAgICAgICB2YXIgY29kZTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIGlmIChjb2RlIDwgMTI4KSB7XG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSBjb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gNikgKyAweEMwO1xuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gY29kZSAmIDB4M0YgfCAweDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA8IDB4RDgwMCB8fCBjb2RlID4gMHhEQkZGKSB7XG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTIpICsgMHhFMDtcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgJiAweDNGKSB8IDB4ODA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2RlID0gKChjb2RlIC0gMHhEODAwKSAqIDB4NDAwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPiAweDEwRkZGRikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaWNvZGUgc3RhbmRhcmQgc3VwcG9ydHMgY29kZSBwb2ludHMgdXAgdG8gVSsxMEZGRkYnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnVmOFtidWZMZW4rK10gPSAoY29kZSA+Pj4gMTgpICsgMHhGMDtcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiAxMiAmIDB4M0YpIHwgMHg4MDtcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IChjb2RlID4+PiA2ICYgMHgzRikgfCAweDgwO1xuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gKGNvZGUgJiAweDNGKSB8IDB4ODA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnVmTGVuID49IDY0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcbiAgICAgICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XG4gICAgICAgICAgICAgICAgYnVmTGVuIC09IDY0O1xuICAgICAgICAgICAgICAgIGJ1ZjMyWzBdID0gYnVmMzJbMTZdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBNZDUucHJvdG90eXBlLmFwcGVuZEFzY2lpU3RyID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICB2YXIgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XG4gICAgICAgIHZhciBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xuICAgICAgICB2YXIgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICBpID0gTWF0aC5taW4oc3RyLmxlbmd0aCAtIGosIDY0IC0gYnVmTGVuKTtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBidWY4W2J1ZkxlbisrXSA9IHN0ci5jaGFyQ29kZUF0KGorKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnVmTGVuIDwgNjQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gNjQ7XG4gICAgICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XG4gICAgICAgICAgICBidWZMZW4gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2J1ZmZlckxlbmd0aCA9IGJ1ZkxlbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBNZDUucHJvdG90eXBlLmFwcGVuZEJ5dGVBcnJheSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICB2YXIgYnVmOCA9IHRoaXMuX2J1ZmZlcjg7XG4gICAgICAgIHZhciBidWYzMiA9IHRoaXMuX2J1ZmZlcjMyO1xuICAgICAgICB2YXIgYnVmTGVuID0gdGhpcy5fYnVmZmVyTGVuZ3RoO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICBpID0gTWF0aC5taW4oaW5wdXQubGVuZ3RoIC0gaiwgNjQgLSBidWZMZW4pO1xuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGJ1ZjhbYnVmTGVuKytdID0gaW5wdXRbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWZMZW4gPCA2NCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSA2NDtcbiAgICAgICAgICAgIE1kNS5fbWQ1Y3ljbGUodGhpcy5fc3RhdGUsIGJ1ZjMyKTtcbiAgICAgICAgICAgIGJ1ZkxlbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gYnVmTGVuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE1kNS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHMgPSBzZWxmLl9zdGF0ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1ZmZlcjogU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBzZWxmLl9idWZmZXI4KSxcbiAgICAgICAgICAgIGJ1Zmxlbjogc2VsZi5fYnVmZmVyTGVuZ3RoLFxuICAgICAgICAgICAgbGVuZ3RoOiBzZWxmLl9kYXRhTGVuZ3RoLFxuICAgICAgICAgICAgc3RhdGU6IFtzWzBdLCBzWzFdLCBzWzJdLCBzWzNdXVxuICAgICAgICB9O1xuICAgIH07XG4gICAgTWQ1LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYnVmID0gc3RhdGUuYnVmZmVyO1xuICAgICAgICB2YXIgeCA9IHN0YXRlLnN0YXRlO1xuICAgICAgICB2YXIgcyA9IHRoaXMuX3N0YXRlO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fYnVmZmVyTGVuZ3RoID0gc3RhdGUuYnVmbGVuO1xuICAgICAgICBzWzBdID0geFswXTtcbiAgICAgICAgc1sxXSA9IHhbMV07XG4gICAgICAgIHNbMl0gPSB4WzJdO1xuICAgICAgICBzWzNdID0geFszXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1Zi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyOFtpXSA9IGJ1Zi5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNZDUucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChyYXcpIHtcbiAgICAgICAgaWYgKHJhdyA9PT0gdm9pZCAwKSB7IHJhdyA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBidWZMZW4gPSB0aGlzLl9idWZmZXJMZW5ndGg7XG4gICAgICAgIHZhciBidWY4ID0gdGhpcy5fYnVmZmVyODtcbiAgICAgICAgdmFyIGJ1ZjMyID0gdGhpcy5fYnVmZmVyMzI7XG4gICAgICAgIHZhciBpID0gKGJ1ZkxlbiA+PiAyKSArIDE7XG4gICAgICAgIHZhciBkYXRhQml0c0xlbjtcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCArPSBidWZMZW47XG4gICAgICAgIGJ1ZjhbYnVmTGVuXSA9IDB4ODA7XG4gICAgICAgIGJ1ZjhbYnVmTGVuICsgMV0gPSBidWY4W2J1ZkxlbiArIDJdID0gYnVmOFtidWZMZW4gKyAzXSA9IDA7XG4gICAgICAgIGJ1ZjMyLnNldChNZDUuYnVmZmVyMzJJZGVudGl0eS5zdWJhcnJheShpKSwgaSk7XG4gICAgICAgIGlmIChidWZMZW4gPiA1NSkge1xuICAgICAgICAgICAgTWQ1Ll9tZDVjeWNsZSh0aGlzLl9zdGF0ZSwgYnVmMzIpO1xuICAgICAgICAgICAgYnVmMzIuc2V0KE1kNS5idWZmZXIzMklkZW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyB0aGUgZmluYWwgY29tcHV0YXRpb24gYmFzZWQgb24gdGhlIHRhaWwgYW5kIGxlbmd0aFxuICAgICAgICAvLyBCZXdhcmUgdGhhdCB0aGUgZmluYWwgbGVuZ3RoIG1heSBub3QgZml0IGluIDMyIGJpdHMgc28gd2UgdGFrZSBjYXJlIG9mIHRoYXRcbiAgICAgICAgZGF0YUJpdHNMZW4gPSB0aGlzLl9kYXRhTGVuZ3RoICogODtcbiAgICAgICAgaWYgKGRhdGFCaXRzTGVuIDw9IDB4RkZGRkZGRkYpIHtcbiAgICAgICAgICAgIGJ1ZjMyWzE0XSA9IGRhdGFCaXRzTGVuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBkYXRhQml0c0xlbi50b1N0cmluZygxNikubWF0Y2goLyguKj8pKC57MCw4fSkkLyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsbyA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDE2KTtcbiAgICAgICAgICAgIHZhciBoaSA9IHBhcnNlSW50KG1hdGNoZXNbMV0sIDE2KSB8fCAwO1xuICAgICAgICAgICAgYnVmMzJbMTRdID0gbG87XG4gICAgICAgICAgICBidWYzMlsxNV0gPSBoaTtcbiAgICAgICAgfVxuICAgICAgICBNZDUuX21kNWN5Y2xlKHRoaXMuX3N0YXRlLCBidWYzMik7XG4gICAgICAgIHJldHVybiByYXcgPyB0aGlzLl9zdGF0ZSA6IE1kNS5faGV4KHRoaXMuX3N0YXRlKTtcbiAgICB9O1xuICAgIC8vIFByaXZhdGUgU3RhdGljIFZhcmlhYmxlc1xuICAgIE1kNS5zdGF0ZUlkZW50aXR5ID0gbmV3IEludDMyQXJyYXkoWzE3MzI1ODQxOTMsIC0yNzE3MzM4NzksIC0xNzMyNTg0MTk0LCAyNzE3MzM4NzhdKTtcbiAgICBNZDUuYnVmZmVyMzJJZGVudGl0eSA9IG5ldyBJbnQzMkFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSk7XG4gICAgTWQ1LmhleENoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuICAgIE1kNS5oZXhPdXQgPSBbXTtcbiAgICAvLyBQZXJtYW5lbnQgaW5zdGFuY2UgaXMgdG8gdXNlIGZvciBvbmUtY2FsbCBoYXNoaW5nXG4gICAgTWQ1Lm9uZVBhc3NIYXNoZXIgPSBuZXcgTWQ1KCk7XG4gICAgcmV0dXJuIE1kNTtcbn0oKSk7XG5leHBvcnRzLk1kNSA9IE1kNTtcbmlmIChNZDUuaGFzaFN0cignaGVsbG8nKSAhPT0gJzVkNDE0MDJhYmM0YjJhNzZiOTcxOWQ5MTEwMTdjNTkyJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01kNSBzZWxmIHRlc3QgZmFpbGVkLicpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWQ1LmpzLm1hcCIsImltcG9ydCB7IEFwcCwgUGx1Z2luLCBUQWJzdHJhY3RGaWxlLCBURmlsZSwgRW1iZWRDYWNoZSwgTGlua0NhY2hlLCBOb3RpY2UgfSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCB7IFBsdWdpblNldHRpbmdzLCBERUZBVUxUX1NFVFRJTkdTLCBTZXR0aW5nVGFiIH0gZnJvbSAnLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IExpbmtzSGFuZGxlciwgTGlua0NoYW5nZUluZm8gfSBmcm9tICcuL2xpbmtzLWhhbmRsZXInO1xyXG5pbXBvcnQgeyBwYXRoIH0gZnJvbSAnLi9wYXRoJztcclxuaW1wb3J0IHsgTWQ1IH0gZnJvbSAnLi9tZDUvbWQ1JztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNpc3RlbnRBdHRhY2htZW50c0FuZExpbmtzIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRzZXR0aW5nczogUGx1Z2luU2V0dGluZ3M7XHJcblx0bGg6IExpbmtzSGFuZGxlcjtcclxuXHJcblxyXG5cdGFzeW5jIG9ubG9hZCgpIHtcclxuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XHJcblxyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6ICdyZW5hbWUtYWxsLWF0dGFjaG1lbnRzJyxcclxuXHRcdFx0bmFtZTogJ1JlbmFtZSBhbGwgYXR0YWNobWVudHMnLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4gdGhpcy5yZW5hbWVBbGxBdHRhY2htZW50cygpXHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0dGhpcy5saCA9IG5ldyBMaW5rc0hhbmRsZXIodGhpcy5hcHAsIFwiVW5pcXVlIGF0dGFjaG1lbnRzOiBcIik7XHJcblx0fVxyXG5cclxuXHJcblx0YXN5bmMgcmVuYW1lQWxsQXR0YWNobWVudHMoKSB7XHJcblx0XHRsZXQgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpO1xyXG5cdFx0bGV0IHJlbmFtZWRDb3VudCA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xyXG5cdFx0XHRsZXQgcmVuYW1lZCA9IGF3YWl0IHRoaXMucmVuYW1lQXR0YWNobWVudElmTmVlZGVkKGZpbGUpO1xyXG5cdFx0XHRpZiAocmVuYW1lZClcclxuXHRcdFx0XHRyZW5hbWVkQ291bnQrKztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocmVuYW1lZENvdW50ID09IDApXHJcblx0XHRcdG5ldyBOb3RpY2UoXCJObyBmaWxlcyBmb3VuZCB0aGF0IG5lZWQgdG8gYmUgcmVuYW1lZFwiKTtcclxuXHRcdGVsc2UgaWYgKHJlbmFtZWRDb3VudCA9PSAxKVxyXG5cdFx0XHRuZXcgTm90aWNlKFwiUmVuYW1lZCAxIGZpbGUuXCIpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXcgTm90aWNlKFwiUmVuYW1lZCBcIiArIHJlbmFtZWRDb3VudCArIFwiIGZpbGVzLlwiKTtcclxuXHR9XHJcblxyXG5cclxuXHRhc3luYyByZW5hbWVBdHRhY2htZW50SWZOZWVkZWQoZmlsZTogVEFic3RyYWN0RmlsZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG5cdFx0bGV0IGZpbGVQYXRoID0gZmlsZS5wYXRoO1xyXG5cdFx0aWYgKHRoaXMuY2hlY2tGaWxlUGF0aElzSWdub3JlZChmaWxlUGF0aCkgfHwgIXRoaXMuY2hlY2tGaWxlVHlwZUlzQWxsb3dlZChmaWxlUGF0aCkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBleHQgPSBwYXRoLmV4dG5hbWUoZmlsZVBhdGgpO1xyXG5cdFx0bGV0IGJhc2VOYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aCwgZXh0KTtcclxuXHRcdGxldCB2YWxpZEJhc2VOYW1lID0gYXdhaXQgdGhpcy5nZW5lcmF0ZVZhbGlkQmFzZU5hbWUoZmlsZVBhdGgpO1xyXG5cdFx0aWYgKGJhc2VOYW1lID09IHZhbGlkQmFzZU5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBub3RlcyA9IGF3YWl0IHRoaXMubGguZ2V0Tm90ZXNUaGF0SGF2ZUxpbmtUb0ZpbGUoZmlsZVBhdGgpO1xyXG5cclxuXHRcdGlmICghbm90ZXMgfHwgbm90ZXMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MucmVuYW1lT25seUxpbmtlZEF0dGFjaG1lbnRzKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHZhbGlkUGF0aCA9IHRoaXMubGguZ2V0RmlsZVBhdGhXaXRoUmVuYW1lZEJhc2VOYW1lKGZpbGVQYXRoLCB2YWxpZEJhc2VOYW1lKTtcclxuXHJcblx0XHRsZXQgdGFyZ2V0RmlsZUFscmVhZHlFeGlzdHMgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyh2YWxpZFBhdGgpXHJcblxyXG5cdFx0aWYgKHRhcmdldEZpbGVBbHJlYWR5RXhpc3RzKSB7XHJcblx0XHRcdC8vaWYgZmlsZSBjb250ZW50IGlzIHRoZSBzYW1lIGluIGJvdGggZmlsZXMsIG9uZSBvZiB0aGVtIHdpbGwgYmUgZGVsZXRlZFx0XHRcdFxyXG5cdFx0XHRsZXQgdmFsaWRBbm90aGVyRmlsZUJhc2VOYW1lID0gYXdhaXQgdGhpcy5nZW5lcmF0ZVZhbGlkQmFzZU5hbWUodmFsaWRQYXRoKTtcclxuXHRcdFx0aWYgKHZhbGlkQW5vdGhlckZpbGVCYXNlTmFtZSAhPSB2YWxpZEJhc2VOYW1lKSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiVW5pcXVlIGF0dGFjaG1lbnRzOiBjYW50IHJlbmFtZSBmaWxlIFxcbiAgIFwiICsgZmlsZVBhdGggKyBcIlxcbiAgICB0b1xcbiAgIFwiICsgdmFsaWRQYXRoICsgXCJcXG4gICBBbm90aGVyIGZpbGUgZXhpc3RzIHdpdGggdGhlIHNhbWUgKHRhcmdldCkgbmFtZSBidXQgZGlmZmVyZW50IGNvbnRlbnQuXCIpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3MubWVyZ2VUaGVTYW1lQXR0YWNobWVudHMpIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJVbmlxdWUgYXR0YWNobWVudHM6IGNhbnQgcmVuYW1lIGZpbGUgXFxuICAgXCIgKyBmaWxlUGF0aCArIFwiXFxuICAgIHRvXFxuICAgXCIgKyB2YWxpZFBhdGggKyBcIlxcbiAgIEFub3RoZXIgZmlsZSBleGlzdHMgd2l0aCB0aGUgc2FtZSAodGFyZ2V0KSBuYW1lIGFuZCB0aGUgc2FtZSBjb250ZW50LiBZb3UgY2FuIGVuYWJsZSBcXFwiRGVsdGUgZHVwbGljYXRlc1xcXCIgc2V0dGluZyBmb3IgZGVsZXRlIHRoaXMgZmlsZSBhbmQgbWVyZ2UgYXR0YWNobWVudHMuXCIpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0LmRlbGV0ZShmaWxlKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJVbmlxdWUgYXR0YWNobWVudHM6IGNhbnQgZGVsZXRlIGR1cGxpY2F0ZSBmaWxlIFwiICsgZmlsZVBhdGggKyBcIi5cXG5cIiArIGUpO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5vdGVzKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgbm90ZSBvZiBub3Rlcykge1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5saC51cGRhdGVDaGFuZ2VkUGF0aEluTm90ZShub3RlLCBmaWxlUGF0aCwgdmFsaWRQYXRoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiVW5pcXVlIGF0dGFjaG1lbnRzOiBmaWxlIGNvbnRlbnQgaXMgdGhlIHNhbWUgaW4gXFxuICAgXCIgKyBmaWxlUGF0aCArIFwiXFxuICAgYW5kIFxcbiAgIFwiICsgdmFsaWRQYXRoICsgXCJcXG4gICBEdXBsaWNhdGVzIG1lcmdlZC5cIilcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgdGhpcy5hcHAudmF1bHQucmVuYW1lKGZpbGUsIHZhbGlkUGF0aCk7XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiVW5pcXVlIGF0dGFjaG1lbnRzOiBjYW50IHJlbmFtZSBmaWxlIFxcbiAgIFwiICsgZmlsZVBhdGggKyBcIlxcbiAgIHRvIFxcbiAgIFwiICsgdmFsaWRQYXRoICsgXCIgICBcXG5cIiArIGUpO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5vdGVzKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgbm90ZSBvZiBub3Rlcykge1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5saC51cGRhdGVDaGFuZ2VkUGF0aEluTm90ZShub3RlLCBmaWxlUGF0aCwgdmFsaWRQYXRoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiVW5pcXVlIGF0dGFjaG1lbnRzOiBmaWxlIHJlbmFtZWQgW2Zyb20sIHRvXTpcXG4gICBcIiArIGZpbGVQYXRoICsgXCJcXG4gICBcIiArIHZhbGlkUGF0aCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblx0Y2hlY2tGaWxlUGF0aElzSWdub3JlZChmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRmb3IgKGxldCBmb2xkZXIgb2YgdGhpcy5zZXR0aW5ncy5pZ25vcmVGb2xkZXJzKSB7XHJcblx0XHRcdGlmIChmaWxlUGF0aC5zdGFydHNXaXRoKGZvbGRlcikpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblx0Y2hlY2tGaWxlVHlwZUlzQWxsb3dlZChmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRmb3IgKGxldCBleHQgb2YgdGhpcy5zZXR0aW5ncy5yZW5hbWVGaWxlVHlwZXMpIHtcclxuXHRcdFx0aWYgKGZpbGVQYXRoLmVuZHNXaXRoKFwiLlwiICsgZXh0KSlcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cclxuXHRhc3luYyBnZW5lcmF0ZVZhbGlkQmFzZU5hbWUoZmlsZVBhdGg6IHN0cmluZykge1xyXG5cdFx0bGV0IGZpbGUgPSB0aGlzLmxoLmdldEZpbGVCeVBhdGgoZmlsZVBhdGgpO1xyXG5cdFx0bGV0IGRhdGEgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkQmluYXJ5KGZpbGUpO1xyXG5cdFx0Y29uc3QgYnVmID0gQnVmZmVyLmZyb20oZGF0YSk7XHJcblxyXG5cdFx0Ly8gdmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xyXG5cdFx0Ly8gbGV0IGhhc2g6IHN0cmluZyA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoYnVmKS5kaWdlc3QoXCJoZXhcIik7XHJcblxyXG5cdFx0bGV0IG1kNSA9IG5ldyBNZDUoKTtcclxuXHRcdG1kNS5hcHBlbmRCeXRlQXJyYXkoYnVmKTtcclxuXHRcdGxldCBoYXNoID0gbWQ1LmVuZCgpLnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fVxyXG5cclxuXHJcblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUGx1Z2luU2V0dGluZ1RhYiIsIlNldHRpbmciLCJub3JtYWxpemVQYXRoIiwiUGx1Z2luIiwiTm90aWNlIiwibWQ1IiwiTWQ1Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVEQTtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUs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QUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckI7QUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNyRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDckQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNyRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNwRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNsRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdkQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNyRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdkQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekM7QUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUN0RCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDdEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNyRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDckQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNyRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDckQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNyRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNwRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekM7QUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNqRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDbEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNqRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDakQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNsRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDakQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNoRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDL0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNqRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDakQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEM7QUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNuRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNsRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDcEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNsRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDcEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNuRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNuRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbkQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FB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QUFFLElBQUksQ0FBQyxXQUFXO0FBQ3BDLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFNBQVMsQ0FBQztBQUNWLEtBQUssQ0FBQztBQUNOLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDOUMsUUFBUSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQy9CLFFBQVEsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUM1QixRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUIsUUFBUSxJQUFJLENBQUMsQ0FBQztBQUNkLFFBQVEsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3hDLFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixRQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzVDLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FB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
