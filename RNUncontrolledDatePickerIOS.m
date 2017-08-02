#import "RNUncontrolledDatePickerIOS.h"

@implementation RCTConvert(UIDatePicker)

RCT_ENUM_CONVERTER(UIDatePickerMode, (@{
  @"time": @(UIDatePickerModeTime),
  @"date": @(UIDatePickerModeDate),
  @"datetime": @(UIDatePickerModeDateAndTime),
  @"countdown": @(UIDatePickerModeCountDownTimer), // not supported yet
}), UIDatePickerModeTime, integerValue)

@end

@implementation RNUncontrolledDatePickerIOS

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [UIDatePicker new];
}

RCT_EXPORT_METHOD(getDate:(nonnull NSNumber *)reactTag
                  callback:(RCTResponseSenderBlock)callback)
{
  [self.bridge.uiManager addUIBlock:^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, UIDatePicker *> *viewRegistry) {
    UIDatePicker *view = viewRegistry[reactTag];
    if ([view isKindOfClass:[UIDatePicker class]]) {
      static NSDateFormatter *formatter;
      static dispatch_once_t onceToken;
      dispatch_once(&onceToken, ^{
        formatter = [NSDateFormatter new];
        formatter.dateFormat = @"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZZ";
        formatter.locale = [NSLocale localeWithLocaleIdentifier:@"en_US_POSIX"];
        formatter.timeZone = [NSTimeZone timeZoneWithName:@"UTC"];
      });
      NSDate *chosenDate = [view date];
      callback(@[[formatter stringFromDate:chosenDate]]);
    } else {
      RCTLogError(@"Cannot get date: %@ (tag #%@) is not an UIDatePicker", view, reactTag);
    }
  }];

}

RCT_EXPORT_VIEW_PROPERTY(date, NSDate)
RCT_EXPORT_VIEW_PROPERTY(minimumDate, NSDate)
RCT_EXPORT_VIEW_PROPERTY(maximumDate, NSDate)
RCT_EXPORT_VIEW_PROPERTY(minuteInterval, NSInteger)
RCT_REMAP_VIEW_PROPERTY(mode, datePickerMode, UIDatePickerMode)
RCT_REMAP_VIEW_PROPERTY(timeZoneOffsetInMinutes, timeZone, NSTimeZone)

@end
