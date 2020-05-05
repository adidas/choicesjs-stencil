# 1.5.0

- Update `choices.js` to version `9.0.1`. Changes:
  - `hiddenState` className is removed.
  - `itemOption` className is replaced by `itemChoice` className.
  - New `selectedState` className is added.
  - `fusejs.io` updates from `2.7.4` to version `3.4.6`. Changes:
    - New options added to `FuseOptions`:
      - `includeMateches`,
      - `includeScore`,
      - `findAllMatches`,
      - `sortFn`,
      - and `getFn`.
  - Changes on `IchoicesProps`:
    - `addItemFilterFn` renamed to `addItemFilter`. It also allows `string` and `RegExp` types.
    - `sortFn` renamed to `sorter`.
    - Added `uniqueItemText`.
    - Added `customAddItemText`.
    - Added `valueComparer`.
  - Removed `ajax` on `IChoicesMethods`.
- Update `@stencil/core` to version `1.12.7`.
  - See: https://github.com/ionic-team/stencil/blob/master/CHANGELOG.md
- Update other dev dependencies:
  - `@babel/plugin-syntax-dynamic-import` to version `7.8.3`.
  - `@stencil/sass` to version `1.3.1`.
  - `@types/jest` to version `25.2.1`.
  - `choices.js` to version `9.0.1`.
  - `jest` to version `25.5.2`.
  - `jest-dot-reporter` to version `1.0.14`.
  - `rimraf` to version `3.0.2`.
  - `tslint` to version `6.1.2`.
  - `typedoc` to version `0.17.6`.
  - `workbox-build` to version `5.1.3`.
  - `fsevents` to version `2.1.3`. 
- Rename `utils.tsx` to `utils.ts`
- 

# 1.4.0

- Updated `@stencil/core` to version `1.5.4`.
- Removed unnecessary event definitions.
- Fixed method definitions: `highlightItem` and `unhighlightItem`.

## 1.3.1

- Fixed package registry.

# 1.3.0

- Updated StencilJS core to v0.18.1.
- Updated ChoicesJS to v7.0.0.
  - `regexFilter` config has been replaced with `addItemFilterFn` function.
  - `toggleDropdown` method has been removed.
  - `clearChoices` method has been added.
- Updated example with new options.
- Updated documentation with example of framework integration.

## 1.2.1

- Fixed Travis configuration to publish and create documentation on release tags.

# 1.2.0

- Updated to Choices.js v4.1.3. Changes:
  - Renamed property `duplicateItems` to `duplicateItemsAllowed`.
  - Renamed property `sortFilter` to `sortFn`.
  - Renamed property `removeItemsByValue` to `removeActiveItemsByValue`.
  - Renamed property `setValueByChoice` to `setChoiceByValue`.
  - Modfied `callbackOnCreateTemplates` which receives the class names as first argument (`this.config.classNames`).
- Removed `sass-inline-svg` dependency because the assets are now bundled along with the CSS.
- Updated TravisCI configuration to publish on tags.
- Updated example.

## 1.1.1

- Fixed placeholder behavior to avoid input dynamic width.
- Added NPM and TravisCI badges in the README file.
- Updated `@stencil/core`.
- Removed `.meta.yml` file.

# 1.1.0

- Fixed component to be able to work within a `<form/>` element.
- Fixed `getValue` public method.
- Fixed `placeholder` property when it is used as element attribute.
- Updated dev and public examples:
  - Wrap select elements in a form to get their values.
  - Show the values of the select elements.
- Updated logo.

# 1.0.0

- Initial version of `choicesjs-stencil` web component.
