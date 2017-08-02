Pod::Spec.new do |s|
  s.name         = "RNUncontrolledDatePickerIOS"
  s.version      = "1.0.0"
  s.summary      = "RNUncontrolledDatePickerIOS"
  s.description  = <<-DESC
                  RNUncontrolledDatePickerIOS
                   DESC
  s.homepage     = ""
  s.license      = { :type => "MIT", :file => "LICENSE" }
  s.author       = { "author" => "dmitry.gladkov@@gmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNUncontrolledDatePickerIOS.git", :tag => "master" }
  s.source_files  = "RNUncontrolledDatePickerIOS.{h,m}"
  s.requires_arc = true

  s.dependency "React"
end
