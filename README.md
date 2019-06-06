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

### Current Formatting and Validation Supported
* +1 (US)
* +44 (UK)
* +33 (FR)
* +61 (AUS)

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

### Supported Props
`onEndInput` \
`PlaceholderNum`\
`containerStyle`\
`shake`\
`numContainerStyle`\
`inputNumComtainerStyle`\
`intContainerStyle`\
`errorStyleNum`\
`nextRefFocus`\
`disableNumError`\
`disableFormatter`\
`inputStyle`

   [React Native Elements]: <https://github.com/react*native*training/react*native*elements>
 