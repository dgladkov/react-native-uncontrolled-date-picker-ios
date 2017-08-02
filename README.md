# react-native-uncontrolled-date-picker-ios

## Getting started

`$ npm install react-native-uncontrolled-date-picker-ios --save`

### Mostly automatic installation

`$ react-native link react-native-uncontrolled-date-picker-ios`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-uncontrolled-date-picker-ios` and add `RNUncontrolledDatePickerIOS.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `RNUncontrolledDatePickerIOS.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Usage

Please check [Example](./Example) directory for an example project with the following implementation:

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UncontrolledDatePickerIOS from 'react-native-uncontrolled-date-picker-ios';

export default class Example extends Component {

  static propTypes = {
    date: PropTypes.instanceOf(Date)
  };

  static defaultProps = {
    initialDate: new Date(),
  };

  constructor(props) {
    super(props);
    this.state = {
      date: this.props.initialDate,
    };
  }

  onButtonPress = () => {
    this._datepicker.getDate((date) => {
      this.setState({ date });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <UncontrolledDatePickerIOS
          ref={(x) => { this._datepicker = x; }}
          date={this.props.initialDate}
          style={styles.datepicker}
        />
        <Button
          title="Get Datepicker Date"
          onPress={this.onButtonPress}
        />
        <Text>{this.state.date.toString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  datepicker: {
    width: '100%',
  },
});

AppRegistry.registerComponent('Example', () => Example);
```
