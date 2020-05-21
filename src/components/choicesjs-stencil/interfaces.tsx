/**
 * @link https://github.com/jshjohnson/Choices#classnames
 */
export type ClassNames = {
  containerOuter?: string;
  containerInner?: string;
  input?: string;
  inputCloned?: string;
  list?: string;
  listItems?: string;
  listSingle?: string;
  listDropdown?: string;
  item?: string;
  itemSelectable?: string;
  itemDisabled?: string;
  itemChoice?: string;
  placeholder?: string;
  group?: string;
  groupHeading?: string;
  button?: string;
  activeState?: string;
  focusState?: string;
  openState?: string;
  disabledState?: string;
  highlightedState?: string;
  selectedState: string;
  flippedState?: string;
  loadingState?: string;
  noResults?: string;
  noChoices?: string;
};

/**
 * @link https://github.com/krisk/Fuse/blob/v3.6.1/src/typings.d.ts#L51
 */
export type WeightedField = {
  [key: string]: any;
  weight: number;
};

/**
 * @version 3.6.1
 * @link https://github.com/krisk/Fuse/blob/v3.6.1/src/typings.d.ts#L43
 */
export type FuseOptions = {
  id?: string;
  caseSensitive?: boolean;
  includeMatches?: boolean;
  includeScore?: boolean;
  shouldSort?: boolean;
  keys?: Array<string> | Array<object> | Array<WeightedField>;
  verbose?: boolean;
  tokenize?: boolean;
  tokenSeparator?: RegExp;
  matchAllTokens?: boolean;
  location?: number;
  distance?: number;
  threshold?: number;
  maxPatternLength?: number;
  minMatchCharLength?: number;
  findAllMatches?: boolean;
  sortFn?(a: { score: number }, b: { score: number }): number;
  getFn?(obj: any, path: string): any;
};

/**
 * @link https://github.com/jshjohnson/Choices#addItemFilter
 */
export type ItemFilterFn = (value: string) => boolean;

/**
 * @link https://github.com/jshjohnson/Choices#noresultstext
 */
export type NoResultsTextFn = () => string;

/**
 * @link https://github.com/jshjohnson/Choices#nochoicestext
 */
export type NoChoicesTextFn = () => string;

/**
 * @link https://github.com/jshjohnson/Choices#additemtext
 */
export type AddItemTextFn = ((value: string) => string) | string;

/**
 * @link https://github.com/jshjohnson/Choices#maxitemtext
 */
export type MaxItemTextFn = (maxItemCount: number) => string;

/**
 * @link https://github.com/jshjohnson/Choices#sortfilter
 */
export type SortFn = (el1: any, el2: any) => number;

export type UniqueItemText = ((value: string) => string) | string;
export type CustomAddItemText = ((value: string) => string) | string;
/**
 * @link https://github.com/jshjohnson/Choices#callbackoninit
 */
export type OnInit = () => void;

/**
 * @link https://github.com/jshjohnson/Choices#callbackoncreatetemplates
 */
export type OnCreateTemplates = (template) => any;

/**
 * @link https://github.com/jshjohnson/Choices#valuecomparer
 */
export type ValueCompareFunction = (value1: string, value2: string) => boolean;

/**
 * @link https://github.com/jshjohnson/Choices#configuration-options
 */
export interface IChoicesProps {
  silent?: boolean;
  items?: Array<any>;
  choices?: Array<any>;
  renderChoiceLimit?: number;
  maxItemCount?: number;
  addItems?: boolean;
  addItemFilter?: string | RegExp | ItemFilterFn | null;
  addItemText?: string | AddItemTextFn;
  removeItems?: boolean;
  removeItemButton?: boolean;
  editItems?: boolean;
  duplicateItemsAllowed?: boolean;
  delimiter?: string;
  paste?: boolean;
  searchEnabled?: boolean;
  searchChoices?: boolean;
  searchFloor?: number;
  searchResultLimit?: number;
  searchFields?: Array<any> | string;
  position?: 'auto' | 'top' | 'bottom';
  resetScrollPosition?: boolean;
  shouldSort?: boolean;
  shouldSortItems?: boolean;
  sorter: SortFn;
  placeholder?: boolean | string;
  placeholderValue?: string | null;
  searchPlaceholderValue?: string | null;
  prependValue?: string | null;
  appendValue?: string | null;
  renderSelectedChoices?: 'always' | 'auto';
  loadingText?: string;
  noResultsText?: string | NoResultsTextFn;
  noChoicesText?: string | NoChoicesTextFn;
  itemSelectText?: string;
  maxItemText?: string | MaxItemTextFn;
  uniqueItemText: UniqueItemText;
  customAddItemText?: CustomAddItemText;
  valueComparer?: ValueCompareFunction;
  classNames?: ClassNames;
  fuseOptions?: FuseOptions;
  callbackOnInit?: OnInit;
  callbackOnCreateTemplates?: OnCreateTemplates;
}

/**
 * @link https://github.com/jshjohnson/Choices#ajaxfn
 */
export type AjaxFn = (callback) => void;

/**
 * @link https://github.com/jshjohnson/Choices#methods
 */
export interface IChoicesMethods {
  highlightItem(item: Element, runEvent?: boolean);
  unhighlightItem(item: Element);
  highlightAll();
  unhighlightAll();
  removeActiveItemsByValue(value);
  removeActiveItems(excludedId);
  removeHighlightedItems();
  showDropdown();
  hideDropdown();
  setChoices(choices, value, label, replaceChoices);
  clearChoices();
  getValue(valueOnly);
  setValue(args);
  setChoiceByValue(value: string | Array<string>);
  clearStore();
  clearInput();
  disable();
  enable();
}
