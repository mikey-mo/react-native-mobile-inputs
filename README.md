# New Document# React Native Mobile Inputs
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
* +46 (SWE)

### Current Formatting and Validation Supported
* +1 (US)
* +44 (UK)
* +33 (FR)
* +61 (AUS)
* +49 (GER)
* +46 (SWE)

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
`pickerProps`\
Type: `Object`\
Purpose: Props object specifically for `react-native-picker-select` `Picker` component.\
Example: `{ disabled: ..., onValueChange: ... }`

`inputProps`\
Type: `Object`\
Purpose: Props object specifically for `react-native-elements` `Input` component.\
Example: `{ label: ..., labelStyle: ... }`

`onEndNumInput`\
Type: `Function`\
Purpose: On end of number input.  Takes a `value` argument.  Will return a concatenated string of the Int + Number.  If the `splitIntAndNum` prop is passed, it will return an object of `{ int: ..., num: ... }`.\
Example: `(value) => console.log(value)`

`placeholderNum`\
Type: `String`\
Purpose: Placeholder for the number input.\
Example: `'+1 (718) 621 1234'`

`containerStyle`\
Type: `Object`\
Purpose: Styles for container holding both Int picker and Num input.\
Example: `{ width: ..., height: ..., backgroundColor: ... }`

`numContainerStyle`\
Type: `Object`\
Purpose: Styles Num input container.\
Example: `{ width: ..., height: ..., backgroundColor: ... }`

`inputNumComtainerStyle`\
Type: `Object`\
Purpose: Styles the Input for the Num input container.\
Example: `{ width: ..., height: ..., backgroundColor: ... }`

`intContainerStyle`\
Type: `Object`\
Purpose: Styles the Int picker container.\
Example: `{ width: ..., height: ..., backgroundColor: ... }`

`errorStyleNum`\
Type: `Object`\
Purpose: Styles the Error text for Num input.\
Example: `{ color: ..., fontSize: ... }`

`nextRefFocus`\
Type: `String`\
Purpose: Works with the `onEndNumInput` prop to `focus` on a next input.\
Example: `NextInput`

`disableNumError`\
Type: `Boolean`\
Purpose: Disables whether or not Num error text will render.\
Example: false

`disableFormatter`\
Type: `Boolean`\
Purpose: Disables formatting for Num input.\
Example: false

`inputStyle`\
Type: `Object`\
Purpose: Styles the Num input for Input component.\
Example: `{ color: ..., fontWeight: ... }`

`splitIntAndNum`\
Type: `Boolean`\
Purpose: Works with `onEndNumInput`.  Splits Int and Num into an object on return.\
Example: false

   [React Native Elements]: <https://github.com/react-native-training/react-native-elements>
 