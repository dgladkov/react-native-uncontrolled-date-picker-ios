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
