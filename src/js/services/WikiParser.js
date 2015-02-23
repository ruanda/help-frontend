angular.module('helpApp.services').factory('WikiParser', [
function() {
//    var Parser;
//    var ParserRule;
//    var WikiParser;
//    
//    var parser;
//
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    };

    function escapeHtml(string) {
        return String(string).replace(/[&<>]/g, function (s) {
            return entityMap[s];
        });
    };
//
//    ParserRule = function(params) {
//        if (!arguments.length) { return; }
//        for (var p in params) { this[p] = params[p]; }
//        if (!this.children) { this.children = []; }
//    };
//
//    ParserRule.prototype = {
//        regex: null,
//        capture: null,
//        replaceRegex: null,
//        replaceString: null,
//        tag: null,
//        attrs: null,
//        children: null,
//
//        match: function(data, options) {
//            return data.match(this.regex);
//        },
//
//        build: function(node, r, options) {
//            var data;
//            if (this.capture !== null) {
//                data = r[this.capture];
//            }
//
//            var target;
//            if (this.tag) {
//                target = document.createElement(this.tag);
//                node.appendChild(target);
//            } else {
//                target = node;
//            }
//
//            if (data) {
//                if (this.replaceRegex) {
//                    data = data.replace(this.replaceRegex, this.replaceString);
//                }
//                this.apply(target, data, options);
//            }
//
//            if (this.attrs) {
//                for (var i in this.attrs) {
//                    target.setAttribute(i, this.attrs[i]);
//                    if (options && options.forIE && i == 'class') { target.className = this.attrs[i]; }
//                }
//            }
//            return this;
//        },
//
//        apply: function(node, data, options) {
//            var tail = '' + data;
//            var matches = [];
//
//            if (!this.fallback.apply) {
//                this.fallback = new ParserRule(this.fallback);
//            }
//
//            while (true) {
//                var best = false;
//                var rule  = false;
//                for (var i = 0; i < this.children.length; i++) {
//                    if (typeof matches[i] == 'undefined') {
//                        if (!this.children[i].match) {
//                            this.children[i] = new ParserRule(this.children[i]);
//                        }
//                        matches[i] = this.children[i].match(tail, options);
//                    }
//                    if (matches[i] && (!best || best.index > matches[i].index)) {
//                        best = matches[i];
//                        rule = this.children[i];
//                        if (best.index == 0) { break; }
//                    }
//                }
//
//                var pos = best ? best.index : tail.length;
//                if (pos > 0) {
//                    this.fallback.apply(node, tail.substring(0, pos), options);
//                }
//
//                if (!best) { break; }
//
//                if (!rule.build) { rule = new ParserRule(rule); }
//                rule.build(node, best, options);
//
//                var chopped = best.index + best[0].length;
//                tail = tail.substring(chopped);
//                for (var i = 0; i < this.children.length; i++) {
//                    if (matches[i]) {
//                        if (matches[i].index >= chopped) {
//                            matches[i].index -= chopped;
//                        } else {
//                            matches[i] = void 0;
//                        }
//                    }
//                }
//            }
//
//            return this;
//        },
//
//        fallback: {
//            apply: function(node, data, options) {
//                if (options && options.forIE) {
//                    data = data.replace(/\n/g, ' \r');
//                }
//                node.appendChild(document.createTextNode(data));
//            }
//        }
//    };
//
//    var rx = {};
//    rx.link = '[^\\]|~\\n]*(?:(?:\\](?!\\])|~.)[^\\]|~\\n]*)*';
//    rx.linkText = '[^\\]~\\n]*(?:(?:\\](?!\\])|~.)[^\\]~\\n]*)*';
//    rx.uriPrefix = '\\b(?:(?:https?|ftp)://|mailto:)';
//    rx.uri = rx.uriPrefix + rx.link;
//    rx.rawUri = rx.uriPrefix + '\\S*[^\\s!"\',.:;?]';
//    //rx.interwikiPrefix = '[\\w.]+:';
//    //rx.interwikiLink = rx.interwikiPrefix + rx.link;
//    //rx.img = '\\{\\{((?!\\{)[^|}\\n]*(?:}(?!})[^|}\\n]*)*)\\|([^}~\\n]*((}(?!})|~.)[^}~\\n]*)*)}}';
//
//
//    var formatLink = function(link, format) {
//        if (format instanceof Function) {
//            return format(link);
//        }
//
//        format = format instanceof Array ? format : [ format ];
//        if (typeof format[1] == 'undefined') { format[1] = ''; }
//        return format[0] + link + format[1];
//    };
//
//    var g = {
//        hr: { tag: 'hr', regex: /(^|\n)\s*----\s*(\n|$)/ },
//
//        br: { tag: 'br', regex: /\\\\/ },
//
//        preBlock: { tag: 'pre', capture: 2,
//            regex: /(^|\n)\{\{\{\n((.*\n)*?)\}\}\}(\n|$)/,
//            replaceRegex: /^ ([ \t]*\}\}\})/gm,
//            replaceString: '$1' },
//        tt: { tag: 'tt',
//            regex: /\{\{\{(.*?\}\}\}+)/, capture: 1,
//            replaceRegex: /\}\}\}$/, replaceString: '' },
//
//        ulist: { tag: 'ul', capture: 0,
//            regex: /(^|\n)([ \t]*\*[^*#].*(\n|$)([ \t]*[^\s*#].*(\n|$))*([ \t]*[*#]{2}.*(\n|$))*)+/ },
//        olist: { tag: 'ol', capture: 0,
//            regex: /(^|\n)([ \t]*#[^*#].*(\n|$)([ \t]*[^\s*#].*(\n|$))*([ \t]*[*#]{2}.*(\n|$))*)+/ },
//        li: { tag: 'li', capture: 0,
//            regex: /[ \t]*([*#]).+(\n[ \t]*[^*#\s].*)*(\n[ \t]*\1[*#].+)*/,
//            replaceRegex: /(^|\n)[ \t]*[*#]/g, replaceString: '$1' },
//
//        table: { tag: 'table', capture: 0,
//            regex: /(^|\n)(\|.*?[ \t]*(\n|$))+/ },
//
//        tr: { tag: 'tr', capture: 2, regex: /(^|\n)(\|.*?)\|?[ \t]*(\n|$)/ },
//        th: { tag: 'th', regex: /\|+=([^|]*)/, capture: 1 },
//        td: { tag: 'td', capture: 1,
//            regex: '\\|+([^|~\\[{]*((~(.|(?=\\n)|$)|' +
//                   '\\[\\[' + rx.link + '(\\|' + rx.linkText + ')?\\]\\]' +
//                   '|[\\[{])[^|~]*)*)' },
//        
//        singleLine: { regex: /.+/, capture: 0 },
//        paragraph: { tag: 'p', capture: 0,
//            regex: /(^|\n)([ \t]*\S.*(\n|$))+/ },
//        text: { capture: 0, regex: /(^|\n)([ \t]*[^\s].*(\n|$))+/ },
//
//        strong: { tag: 'strong', capture: 1,
//            regex: /\*\*([^*~]*((\*(?!\*)|~(.|(?=\n)|$))[^*~]*)*)(\*\*|\n|$)/ },
//        em: { tag: 'em', capture: 1,
//            regex: '\\/\\/(((?!' + rx.uriPrefix + ')[^\\/~])*' +
//                   '((' + rx.rawUri + '|\\/(?!\\/)|~(.|(?=\\n)|$))' +
//                   '((?!' + rx.uriPrefix + ')[^\\/~])*)*)(\\/\\/|\\n|$)' },
//
//        namedUri: { regex: '\\[\\[(' + rx.uri + ')\\|(' + rx.linkText + ')\\]\\]',
//            build: function(node, r) {
//                var link = document.createElement('a');
//                link.href = r[1];
//                if (options && options.isPlainUri) {
//                    link.appendChild(document.createTextNode(r[2]));
//                } else {
//                    this.apply(link, r[2], options);
//                }
//                node.appendChild(link);
//            } },
//
//        namedLink: { regex: '\\[\\[(' + rx.link + ')\\|(' + rx.linkText + ')\\]\\]',
//            build: function(node, r, options) {
//                var link = document.createElement('a');
//
//                link.href = options && options.linkFormat
//                    ? formatLink(r[1].replace(/~(.)/g, '$1'), options.linkFormat)
//                    : r[1].replace(/~(.)/g, '$1');
//                this.apply(link, r[2], options);
//
//                node.appendChild(link);
//            } },
//        
//        unnamedUri: { regex: '\\[\\[(' + rx.uri + ')\\]\\]',
//            build: 'dummy' },
//
//        unnamedLink: { regex: '\\[\\[(' + rx.link + ')\\]\\]',
//            build: 'dummy' },
//
//        rawUri: { regex: '(' + rx.rawUri + ')',
//            build: 'dummy' },
//
//        escapedSequence: { regex: '~(' + rx.rawUri + '|.)', capture: 1,
//            tag: 'span', attrs: { 'class': 'escaped' } },
//        escapedSymbol: { regex: /~(.)/, capture: 1,
//            tag: 'span', attrs: { 'class': 'escaped' } }
//    };
//
//    g.unnamedUri.build = g.rawUri.build = function(node, r, options) {
//        if (!options) { options = {}; }
//        options.isPlainUri = true;
//        g.namedUri.build.call(this, node, Array(r[0], r[1], r[1]), options);
//    };
//
//    g.unnamedLink.build = function(node, r, options) {
//        g.namedLink.build.call(this, node, Array(r[0], r[1], r[1]), options);
//    };
//
//    g.namedUri.children = g.unnamedUri.children = g.rawUri.children =
//                          g.namedLink.children = g.unnamedLink.children =
//        [ g.escapedSymbol, g.img ];
//
//    for (var i = 1; i <= 6; i++) {
//        g['h' + i] = { tag: 'h' + i, capture: 2,
//            regex: '(^|\\n)[ \\t]*={' + i + '}[ \\t]' +
//                   '([^~]*?(~(.|(?=\\n)|$))*)[ \\t]*=*\\s*(\\n|$)'
//        };
//    }
//
//    g.ulist.children = g.olist.children = [ g.li ];
//    g.li.children = [ g.ulist, g.olist ];
//    g.li.fallback = g.text;
//
//    g.table.children = [ g.tr ];
//    g.tr.children = [ g.th, g.td ];
//    g.td.children = [ g.singleLine ];
//    g.th.children = [ g.singleLine ];
//
//    g.h1.children = g.h2.children = g.h3.children = g.h4.children =
//                    g.h5.children = g.h6.children = g.singleLine.children =
//                    g.paragraph.children = g.text.children =
//                    g.strong.children = g.em.children =
//        [ g.escapedSequence, g.strong, g.em, g.br, g.rawUri, g.namedUri, g.namedLink,
//          g.unnamedUri, g.unnamedLink, g.tt, g.img ];
//
//    g.root = {
//        children: [ g.h1, g.h2, g.h3, g.h4, g.h5, g.h6,
//                    g.hr, g.ulist, g.olist, g.preBlock, g.table ],
//        fallback: { children: [ g.paragraph ] }
//    };
//
//    parser = {
//        options: {},
//        grammar: g,
//        parse: function(node, data, options) {
//            if (options) {
//                for (i in this.options) {
//                    if (typeof options[i] == 'undefined') { options[i] = this.options[i]; }
//                }
//            } else {
//                options = this.options;
//            }
//            if (!this.grammar.root.apply) {
//                this.grammar.root = new ParserRule(this.grammar.root);
//            }
//            this.grammar.root.apply(node, data, options);
//        }
//    };
//
    return {
        makeHtml: function(wiki) {
            var safeWiki = escapeHtml(wiki);
            return safeWiki;
        }
    };
}]);
