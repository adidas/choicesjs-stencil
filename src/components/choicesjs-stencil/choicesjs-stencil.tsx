import { Component, Element, Event, EventEmitter, Method, Prop } from '@stencil/core';
import {
  AjaxFn,
  ClassNames,
  FuseOptions,
  IChoicesProps,
  IChoicesMethods,
  NoResultsTextFn,
  NoChoicesTextFn,
  AddItemTextFn,
  MaxItemTextFn,
  SortFn,
  OnInit,
  OnCreateTemplates,
  UniqueItemText
} from './interfaces';
import { createSelectOptions, filterObject, isDefined } from './utils';

@Component({
  tag: 'choicesjs-stencil',
  styleUrl: 'choicesjs-stencil.scss'
})
export class ChoicesJSStencil implements IChoicesProps, IChoicesMethods {
  @Prop() public type?: 'single' | 'multiple' | 'text';
  @Prop() public value: string;
  @Prop() public name: string;

  @Prop() public silent: boolean;
  @Prop() public items: Array<any>;
  @Prop() public choices: Array<any>;
  @Prop() public renderChoiceLimit: number;
  @Prop() public maxItemCount: number;
  @Prop() public addItems: boolean;
  @Prop() public removeItems: boolean;
  @Prop() public removeItemButton: boolean;
  @Prop() public editItems: boolean;
  @Prop() public duplicateItems: boolean;
  @Prop() public delimiter: string;
  @Prop() public paste: boolean;
  @Prop() public searchEnabled: boolean;
  @Prop() public searchChoices: boolean;
  @Prop() public searchFields: Array<string> | string;
  @Prop() public searchFloor: number;
  @Prop() public searchResultLimit: number;
  @Prop() public position: 'auto' | 'top' | 'bottom';
  @Prop() public resetScrollPosition: boolean;
  @Prop() public regexFilter: RegExp;
  @Prop() public shouldSort: boolean;
  @Prop() public shouldSortItems: boolean;
  @Prop() public sortFilter: SortFn;
  @Prop() public placeholder: boolean | string;
  @Prop() public placeholderValue: string;
  @Prop() public searchPlaceholderValue: string;
  @Prop() public prependValue: string;
  @Prop() public appendValue: string;
  @Prop() public renderSelectedChoices: 'always' | 'auto';
  @Prop() public loadingText: string;
  @Prop() public noResultsText: string | NoResultsTextFn;
  @Prop() public noChoicesText: string | NoChoicesTextFn;
  @Prop() public itemSelectText: string;
  @Prop() public addItemText: string | AddItemTextFn;
  @Prop() public maxItemText: string | MaxItemTextFn;
  @Prop() public uniqueItemText: UniqueItemText;
  @Prop() public classNames: ClassNames;
  @Prop() public fuseOptions: FuseOptions;
  @Prop() public callbackOnInit: OnInit;
  @Prop() public callbackOnCreateTemplates: OnCreateTemplates;

  @Event({ eventName: 'addItem' }) public addItemEvent: EventEmitter;
  @Event({ eventName: 'removeItem' }) public removeItemEvent: EventEmitter;
  @Event({ eventName: 'highlightItem' }) public highlightItemEvent: EventEmitter;
  @Event({ eventName: 'unhighlightItem' }) public unhighlightItemEvent: EventEmitter;
  @Event({ eventName: 'choice' }) public choiceEvent: EventEmitter;
  @Event({ eventName: 'change' }) public changeEvent: EventEmitter;
  @Event({ eventName: 'search' }) public searchEvent: EventEmitter;
  @Event({ eventName: 'showDropdown' }) public showDropdownEvent: EventEmitter;
  @Event({ eventName: 'hideDropdown' }) public hideDropdownEvent: EventEmitter;

  @Element() public readonly passedElement: HTMLElement;
  @Element() private readonly root: HTMLElement;

  private choice;
  private element;

  @Method()
  public async highlightItem(item: Element, runEvent?: boolean) {
    this.choice.highlightItem(item, runEvent);

    return this;
  }

  @Method()
  public async unhighlightItem(item: Element) {
    this.choice.unhighlightItem(item);

    return this;
  }

  @Method()
  public async highlightAll() {
    this.choice.highlightAll();

    return this;
  }

  @Method()
  public async unhighlightAll() {
    this.choice.unhighlightAll();

    return this;
  }

  @Method()
  public async removeItemsByValue(value: string) {
    this.choice.removeItemsByValue(value);

    return this;
  }

  @Method()
  public async removeActiveItems(excludedId?: number) {
    this.choice.removeActiveItems(excludedId);

    return this;
  }

  @Method()
  public async removeHighlightedItems(runEvent?: boolean) {
    this.choice.removeHighlightedItems(runEvent);

    return this;
  }

  @Method()
  public async showDropdown(focusInput?: boolean) {
    this.choice.showDropdown(focusInput);

    return this;
  }

  @Method()
  public async hideDropdown(blurInput?: boolean) {
    this.choice.hideDropdown(blurInput);

    return this;
  }

  @Method()
  public async toggleDropdown() {
    this.choice.toggleDropdown();

    return this;
  }

  @Method()
  public async getValue(valueOnly?: boolean): Promise<string | Array<string>> {
    return this.choice.getValue(valueOnly);
  }

  @Method()
  public async setValue(args: Array<any>) {
    this.choice.setValue(args);

    return this;
  }

  @Method()
  public async setValueByChoice(value: string | Array<string>) {
    this.choice.setValueByChoice(value);

    return this;
  }

  @Method()
  public async setChoices(choices: Array<any>, value: string, label: string, replaceChoices?: boolean) {
    this.choice.setChoices(choices, value, label, replaceChoices);

    return this;
  }

  @Method()
  public async clearStore() {
    this.choice.clearStore();

    return this;
  }

  @Method()
  public async clearInput() {
    this.choice.clearInput();

    return this;
  }

  @Method()
  public async enable() {
    this.choice.enable();

    return this;
  }

  @Method()
  public async disable() {
    this.choice.disable();

    return this;
  }

  @Method()
  public async ajax(fn: AjaxFn) {
    this.choice.ajax(fn);

    return this;
  }

  protected componentDidLoad() {
    this.init();
  }

  protected componentDidUpdate() {
    this.init();
  }

  protected componentDidUnload() {
    this.destroy();
  }

  protected render(): any {
    const attributes = {
      'data-selector': 'root',
      'name': this.name || null
    };

    // destroy choices element to restore previous dom structure
    // so vdom can replace the element correctly
    this.destroy();

    switch (this.type) {
    case 'single':
      this.element =
        <select { ...attributes }>
          { this.value ? createSelectOptions(this.value) : null }
        </select>;
      break;
    case 'multiple':
      this.element =
        <select multiple { ...attributes }>
          { this.value ? createSelectOptions(this.value) : null }
        </select>;
      break;
    case 'text':
    default:
      this.element =
        <input type="text" value={ this.value } { ...attributes }/>;
      break;
    }

    return this.element;
  }

  private init() {
    const props = {
      silent: this.silent,
      items: this.items,
      choices: this.choices,
      renderChoiceLimit: this.renderChoiceLimit,
      maxItemCount: this.maxItemCount,
      addItems: this.addItems,
      removeItems: this.removeItems,
      removeItemButton: this.removeItemButton,
      editItems: this.editItems,
      duplicateItems: this.duplicateItems,
      delimiter: this.delimiter,
      paste: this.paste,
      searchEnabled: this.searchEnabled,
      searchChoices: this.searchChoices,
      searchFields: this.searchFields,
      searchFloor: this.searchFloor,
      searchResultLimit: this.searchResultLimit,
      position: this.position,
      resetScrollPosition: this.resetScrollPosition,
      regexFilter: this.regexFilter,
      shouldSort: this.shouldSort,
      shouldSortItems: this.shouldSortItems,
      sortFilter: this.sortFilter,
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
      callbackOnCreateTemplates: this.callbackOnCreateTemplates
    };
    const settings = filterObject(props, isDefined);

    this.choice = new Choices(this.root.querySelector('[data-selector="root"]'), settings);
  }

  private destroy() {
    if (this.element) {
      this.element = null;
    }

    if (this.choice) {
      this.choice.destroy();
      this.choice = null;
    }
  }
}
