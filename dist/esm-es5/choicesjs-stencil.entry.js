var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
import { r as registerInstance, h, g as getElement } from './index-3f2deb12.js';
/**
 * Filter out entries from an object.
 *
 * @param obj - object to filter.
 * @param fn - filter function.
 * @returns a new object without the entries satisfying the filter function.
 */
function filterObject(obj, fn) {
    return Object.keys(obj).reduce(function (accum, property) {
        var value = obj[property];
        if (fn(value, property, obj)) {
            accum[property] = value;
        }
        return accum;
    }, {});
}
/**
 * Check if given parameter is not undefined.
 *
 * @param value - value to check.
 * @returns whether the value is defined.
 */
function isDefined(value) {
    return typeof value !== 'undefined';
}
/**
 * Returns the list of values.
 *
 * @param value - Value or list of values.
 * @returns List of values.
 */
function getValues(value) {
    return typeof value !== 'undefined'
        ? [].concat(typeof value === 'string' ? value.split(',') : value)
        : [];
}
var choicesjsStencilCss = ".choices{position:relative;margin-bottom:24px;font-size:16px}.choices:focus{outline:none}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none !important}.choices[data-type*='select-one']{cursor:pointer}.choices[data-type*='select-one'] .choices__inner{padding-bottom:7.5px}.choices[data-type*='select-one'] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #dddddd;background-color:#ffffff;margin:0}.choices[data-type*='select-one'] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:0.5}.choices[data-type*='select-one'] .choices__button:hover,.choices[data-type*='select-one'] .choices__button:focus{opacity:1}.choices[data-type*='select-one'] .choices__button:focus{-webkit-box-shadow:0px 0px 0px 2px #00bcd4;box-shadow:0px 0px 0px 2px #00bcd4}.choices[data-type*='select-one'] .choices__item[data-value=''] .choices__button{display:none}.choices[data-type*='select-one']:after{content:'';height:0;width:0;border-style:solid;border-color:#333333 transparent transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*='select-one'].is-open:after{border-color:transparent transparent #333333 transparent;margin-top:-7.5px}.choices[data-type*='select-one'][dir='rtl']:after{left:11.5px;right:auto}.choices[data-type*='select-one'][dir='rtl'] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*='select-multiple'] .choices__inner,.choices[data-type*='text'] .choices__inner{cursor:text}.choices[data-type*='select-multiple'] .choices__button,.choices[data-type*='text'] .choices__button{position:relative;display:inline-block;margin-top:0;margin-right:-4px;margin-bottom:0;margin-left:8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:0.75;border-radius:0}.choices[data-type*='select-multiple'] .choices__button:hover,.choices[data-type*='select-multiple'] .choices__button:focus,.choices[data-type*='text'] .choices__button:hover,.choices[data-type*='text'] .choices__button:focus{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #dddddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir='rtl'] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#ffffff;word-break:break-all;-webkit-box-sizing:border-box;box-sizing:border-box}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir='rtl'] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaaaaa;border:1px solid #919191}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#ffffff;border:1px solid #dddddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:0.25rem 0.25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir='rtl'] .choices__list--dropdown .choices__item{text-align:right}@media (min-width: 640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}[dir='rtl'] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir='rtl'] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:0.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:0.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.choices__button:focus{outline:none}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}.choices__input:focus{outline:0}[dir='rtl'] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:0.5}";
var ChoicesJSStencil = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.highlightItem = function (item, runEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.highlightItem(item, runEvent);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.unhighlightItem = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.unhighlightItem(item);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.highlightAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.highlightAll();
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.unhighlightAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.unhighlightAll();
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.removeActiveItemsByValue = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.removeActiveItemsByValue(value);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.removeActiveItems = function (excludedId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.removeActiveItems(excludedId);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.removeHighlightedItems = function (runEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.removeHighlightedItems(runEvent);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.showDropdown = function (focusInput) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.showDropdown(focusInput);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.hideDropdown = function (blurInput) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.hideDropdown(blurInput);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.getValue = function (valueOnly) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.choice.getValue(valueOnly)];
            });
        });
    };
    class_1.prototype.setValue = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.setValue(args);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.setChoiceByValue = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.setChoiceByValue(value);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.setChoices = function (choices, value, label, replaceChoices) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.setChoices(choices, value, label, replaceChoices);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.clearChoices = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.clearChoices();
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.clearStore = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.clearStore();
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.clearInput = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.clearInput();
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.enable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.enable();
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.disable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.disable();
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.ajax = function (fn) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.choice.ajax(fn);
                return [2 /*return*/, this];
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        this.init();
    };
    class_1.prototype.componentDidUpdate = function () {
        this.init();
    };
    class_1.prototype.componentDidUnload = function () {
        this.destroy();
    };
    class_1.prototype.render = function () {
        var attributes = {
            'data-selector': 'root',
            'name': this.name || null
        };
        // destroy choices element to restore previous dom structure
        // so vdom can replace the element correctly
        this.destroy();
        switch (this.type) {
            case 'single':
                this.element =
                    h("select", Object.assign({}, attributes), this.value ? this.createSelectOptions(this.value) : null);
                break;
            case 'multiple':
                this.element =
                    h("select", Object.assign({}, attributes, { multiple: true }), this.value ? this.createSelectOptions(this.value) : null);
                break;
            case 'text':
            default:
                this.element =
                    h("input", Object.assign({ type: "text", value: this.value }, attributes));
                break;
        }
        return this.element;
    };
    class_1.prototype.init = function () {
        var props = {
            silent: this.silent,
            items: this.items,
            choices: this.choices,
            renderChoiceLimit: this.renderChoiceLimit,
            maxItemCount: this.maxItemCount,
            addItems: this.addItems,
            removeItems: this.removeItems,
            removeItemButton: this.removeItemButton,
            editItems: this.editItems,
            duplicateItemsAllowed: this.duplicateItemsAllowed,
            delimiter: this.delimiter,
            paste: this.paste,
            searchEnabled: this.searchEnabled,
            searchChoices: this.searchChoices,
            searchFields: this.searchFields,
            searchFloor: this.searchFloor,
            searchResultLimit: this.searchResultLimit,
            position: this.position,
            resetScrollPosition: this.resetScrollPosition,
            shouldSort: this.shouldSort,
            shouldSortItems: this.shouldSortItems,
            sorter: this.sorter,
            placeholder: true,
            placeholderValue: this.placeholderValue || (typeof this.placeholder === 'string' && this.placeholder) || ' ',
            searchPlaceholderValue: this.searchPlaceholderValue,
            prependValue: this.prependValue,
            appendValue: this.appendValue,
            renderSelectedChoices: this.renderSelectedChoices,
            loadingText: this.loadingText,
            noResultsText: this.noResultsText,
            noChoicesText: this.noChoicesText,
            itemSelectText: this.itemSelectText,
            addItemText: this.addItemText,
            maxItemText: this.maxItemText,
            uniqueItemText: this.uniqueItemText,
            classNames: this.classNames,
            fuseOptions: this.fuseOptions,
            callbackOnInit: this.callbackOnInit,
            callbackOnCreateTemplates: this.callbackOnCreateTemplates,
            valueComparer: this.valueComparer,
            addItemFilter: this.addItemFilter,
            customAddItemText: this.customAddItemText
        };
        var settings = filterObject(props, isDefined);
        this.choice = new Choices(this.root.querySelector('[data-selector="root"]'), settings);
    };
    class_1.prototype.destroy = function () {
        if (this.element) {
            this.element = null;
        }
        if (this.choice) {
            this.choice.destroy();
            this.choice = null;
        }
    };
    class_1.prototype.createSelectOptions = function (values) {
        return getValues(values).map(function (value) { return h("option", { value: value }, value); });
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
ChoicesJSStencil.style = choicesjsStencilCss;
export { ChoicesJSStencil as choicesjs_stencil };
