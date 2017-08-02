import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  findNodeHandle,
  NativeModules,
  requireNativeComponent,
  StyleSheet,
  View,
} from 'react-native';

/**
 * Use `UncontrolledDatePickerIOS` to render a date/time picker (selector) on iOS.
 * This is an uncontrolled version of the component, to read the date you should save
 * element ref and call `ref.getDate(cb)`
 */
export default class UncontrolledDatePickerIOS extends Component {

  static propTypes = {
    ...View.propTypes,
    /**
     * The currently selected date.
     */
    date: PropTypes.instanceOf(Date).isRequired,

    /**
     * Maximum date.
     *
     * Restricts the range of possible date/time values.
     */
    maximumDate: PropTypes.instanceOf(Date),

    /**
     * Minimum date.
     *
     * Restricts the range of possible date/time values.
     */
    minimumDate: PropTypes.instanceOf(Date),

    /**
     * The date picker mode.
     */
    mode: PropTypes.oneOf(['date', 'time', 'datetime']),

    /**
     * The interval at which minutes can be selected.
     */
    minuteInterval: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30]),

    /**
     * Timezone offset in minutes.
     *
     * By default, the date picker will use the device's timezone. With this
     * parameter, it is possible to force a certain timezone offset. For
     * instance, to show times in Pacific Standard Time, pass -7 * 60.
     */
    timeZoneOffsetInMinutes: PropTypes.number,
  };

  static defaultProps = {
    maximumDate: undefined,
    minimumDate: undefined,
    mode: 'datetime',
    minuteInterval: undefined,
    timeZoneOffsetInMinutes: undefined,
  };

  getDate(cb) {
    NativeModules.RNUncontrolledDatePickerIOS.getDate(
      findNodeHandle(this._picker),
      iso => cb(new Date(iso)),
    );
  }

  _picker = undefined;

  render() {
    const {
      date,
      mode,
      minimumDate,
      maximumDate,
      minuteInterval,
      timeZoneOffsetInMinutes,
      ...viewProps
    } = this.props;
    return (
      <View {...viewProps}>
        <RNUncontrolledDatePickerIOS
          ref={(picker) => { this._picker = picker; }}
          style={styles.datePickerIOS}
          date={date.getTime()}
          maximumDate={maximumDate ? maximumDate.getTime() : undefined}
          minimumDate={minimumDate ? minimumDate.getTime() : undefined}
          mode={mode}
          minuteInterval={minuteInterval}
          timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datePickerIOS: {
    height: 216,
  },
});

const RNUncontrolledDatePickerIOS = requireNativeComponent('RNUncontrolledDatePickerIOS', {
  propTypes: {
    ...UncontrolledDatePickerIOS.propTypes,
    date: PropTypes.number,
    minimumDate: PropTypes.number,
    maximumDate: PropTypes.number,
  },
});
