## 1.5.1

- Added ReactJS documentation.
- Updated project description and documentation.
- Updated demo adding repository link.
- Fixed external links with `rel="noopener"`.

# 1.5.0

- Updated `choices.js` to version `9.0.1`.
  - [Release changes](https://github.com/jshjohnson/Choices/releases).
- Updated `@stencil/core` to version `1.12.7`.
  - [CHANGELOG](https://github.com/ionic-team/stencil/blob/master/CHANGELOG.md).
- Updated demo application.
- Changed web component interface:
  - `ClassNames`:
    - Added `selectedState`.
    - Removed `hiddenState`.
    - Replaced `itemOption` with `itemChoice`.
  - `FuseOptions` (`fusejs.io` updates from `2.7.4` to version `3.4.6`):
    - Added options:
      - `includeMatches`.
      - `includeScore`.
      - `findAllMatches`.
      - `sortFn`.
      - `getFn`.
  - `IchoicesProps`:
    - Added properties:
      - `uniqueItemText`.
      - `customAddItemText`.
      - `valueComparer`.
    - Replaced properties:
      - `addItemFilterFn` with `addItemFilter` (it allows `string` and `RegExp` types).
      - `sortFn` with `sorter`.
  - `IChoicesMethods`:
    - Removed `ajax` method.

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
