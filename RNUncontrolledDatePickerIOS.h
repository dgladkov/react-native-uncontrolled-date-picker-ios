#import <UIKit/UIKit.h>

#if __has_include(<React/RCTBridge.h>)
  #import <React/RCTBridge.h>
  #import <React/RCTConvert.h>
  #import <React/RCTEventDispatcher.h>
  #import <React/RCTLog.h>
  #import <React/RCTUIManager.h>
  #import <React/RCTViewManager.h>
  #import <React/UIView+React.h>
#else
  #import "RCTBridge.h"
  #import "RCTConvert.h"
  #import "RCTEventDispatcher.h"
  #import "RCTLog.h"
  #import "RCTUIManager.h"
  #import "RCTViewManager.h"
  #import "UIView+React.h"
#endif

@interface RCTConvert(UIDatePicker)

+ (UIDatePickerMode)UIDatePickerMode:(id)json;

@end

@interface RNUncontrolledDatePickerIOS : RCTViewManager

@end
