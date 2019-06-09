# React Native Mobile Inputs
#### Warning: In Development

React Native Mobile Inputs was created to add validations and formatting to the native iOS and Android picker and [React Native Elements] input component.

# Purpose

Without a `Picker` component in the `react-native-elements` library, it is difficult to create a mobile input that references the international code and formats the number accordingly.  This package hopes to integrate a mobile int picker and mobile number input that interacts seemlessly with the `react-native-elements` package both logically and stylistically.

# Component Logic

The `MobileInput` component will render a picker on the left displaying the current int code, and an `Input` on the right displaying an input for the mobile number.  Formatting occurs on either the `onEndEditing` event in the `Input` component, or an `onValueChange` event in the `Picker` component. The current int code influences the number input, validates the number input, and returns with either an error or a formatting of the number input.

### Current Int Codes Supported
* +1 (US)
* +44 (UK)
* +33 (FR)
* +61 (AUS)
* +49 (GER)

### Current Formatting and Validation Supported
* +1 (US)
* +44 (UK)
* +33 (FR)
* +61 (AUS)
* +49 (GER)

# Installation
Begin with installation of the package.

```npm i --save react-native-mobile-inputs```

Import the component with ES6 logic.

```import MobileInputs from 'react-native-mobile-inputs```

Usage of component:

```
<View>
  <MobileInput />
</View>
```

### Supported Props / Usage
`pickerProps`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Object | Props object specifically for `react-native-picker-select`. | `{ disabled: ..., onValueChange: ... }` |
`inputProps`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Object | Props object specifically for `react-native-elements` `Input` component. | `{ label: ..., labelStyle: ... }` |
`onEndNumInput`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Function | On end of number input.  Takes a `value` argument.  Will return a concatenated string of the Int + Number.  If the `splitIntAndNum` prop is passed, it will return an object of `{ int: ..., num: ... }`.| `(value) => console.log(value)` |
`placeholderNum`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| String | Placeholder for the number input. | `'+1 (718) 621 1234'` |
`containerStyle`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Object | Styles for container holding both Int picker and Num input. | `{ width: ..., height: ..., backgroundColor: ... }` |
`numContainerStyle`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Object | Styles Num input container. | `{ width: ..., height: ..., backgroundColor: ... }` |
`inputNumComtainerStyle`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Object | Styles the Input for the Num input container. | `{ width: ..., height: ..., backgroundColor: ... }` |
`intContainerStyle`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Object | Styles the Int picker container. | `{ width: ..., height: ..., backgroundColor: ... }` |
`errorStyleNum`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Object | Styles the Error text for Num input. | `{ color: ..., fontSize: ... }` |
`nextRefFocus`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| String | Works with the `onEndNumInput` prop to `focus` on a next input. | `NextInput` |
`disableNumError`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Boolean | Disables whether or not Num error text will render. | false |
`disableFormatter`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Boolean | Disables formatting for Num input. | false |
`inputStyle`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Object | Styles the Num input for Input component. | `{ color: ..., fontWeight: ... }` |
`splitIntAndNum`
| Type | Purpose | Example |
| :---: | :---: |  :---: |
| Boolean | Works with `onEndNumInput`.  Splits Int and Num into an object on return. | false |

   [React Native Elements]: <https://github.com/react-native-training/react-native-elements>
 