import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';

import errorStrings from './error-strings';
import validations from './validations';
// import formating from './formating';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  intContainer: {
    flex: 25,
  },
  numContainer: {
    flex: 75,
  },
});

class MobileInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        int: '',
        num: '',
      },
      errors: {
        intEr: '',
        numEr: '',
      },
    };
  }

  performValidation = (value, type) => {
    console.log('is there a validation running?', value, type);
    const { inputs } = this.state;
    const { int } = inputs;
    if (type === 'intEr') {
      try {
        validations[int](value);
        this.validationPassed(type);
      } catch (e) {
        this.validationFailed(type);
      }
    } else {
      try {
        if (validations[int](value) === true) {
          console.log(value, 'validation is passing...?');
          this.validationPassed(type);
        } else {
          this.validationFailed(type);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  validationFailed = (type) => {
    console.log('this is being called?');
    const state = { ...this.state };
    const { errors } = state;
    errors[type] = errorStrings[type];
    this.setState({
      errors,
    });
  }

  validationPassed = (type) => {
    const state = { ...this.state };
    const { errors } = state;
    errors[type] = '';
    this.setState({
      errors,
    });
  }

  onInputChange = (value, type) => {
    const state = { ...this.state };
    const { inputs } = state;
    inputs[type] = value;
    this.setState({
      inputs,
    });
  }

  onInputEnd = (event, erType, ref) => {
    const { text } = event.nativeEvent;
    this.performValidation(text, erType);
    if (ref) this[ref].focus();
  }

  render() {
    const {
      inputs,
      errors,
    } = this.state;
    const {
      int,
      num,
    } = inputs;
    const {
      intEr,
      numEr,
    } = errors;
    const {
      containerStyle,
      placeholderInt,
      placeholderNum,
      intContainerStyle,
      numContainerStyle,
      errorStyleInt,
      errorStyleNum,
      shake,
      nextRef,
    } = this.props;

    return (
      <View style={[styles.container, { ...containerStyle }]}>
        <Input
          onEndEditing={(event) => { this.onInputEnd(event, 'intEr', 'mobileNum'); }}
          ref={(mobileInt) => { this.mobileInt = mobileInt; }}
          keyboardType="number-pad"
          maxLength={4}
          value={int}
          onChangeText={text => this.onInputChange(text, 'int')}
          containerStyle={[styles.intContainer, { ...intContainerStyle }]}
          shake={shake}
          placeholder={placeholderInt}
          errorMessage={intEr}
          errorStyle={[errorStyleInt]}
        />
        <Input
          onEndEditing={(event) => { this.onInputEnd(event, 'numEr', nextRef); }}
          ref={(mobileNum) => { this.mobileNum = mobileNum; }}
          keyboardType="number-pad"
          maxLength={15}
          value={num}
          onChangeText={text => this.onInputChange(text, 'num')}
          containerStyle={[styles.numContainer, { ...numContainerStyle }]}
          shake={shake}
          placeholder={placeholderNum}
          errorMessage={numEr}
          errorStyle={[errorStyleNum]}
        />
      </View>
    );
  }
}

MobileInputs.defaultProps = {
  placeholderInt: '+1',
  placeholderNum: '(718) 111 2222',
  containerStyle: {},
  shake: false,
  numContainerStyle: {},
  intContainerStyle: {},
  errorStyleInt: {},
  errorStyleNum: {},
  nextRef: '',
};

MobileInputs.propTypes = {
  placeholderInt: PropTypes.string,
  placeholderNum: PropTypes.string,
  containerStyle: PropTypes.shape({}),
  shake: PropTypes.bool,
  numContainerStyle: PropTypes.shape({}),
  intContainerStyle: PropTypes.shape({}),
  errorStyleInt: PropTypes.shape({}),
  errorStyleNum: PropTypes.shape({}),
  nextRef: PropTypes.string,
};

export default MobileInputs;
