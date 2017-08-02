require 'json'
package = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|
  s.name          = "RNUncontrolledDatePickerIOS"
  s.version       = package["version"]
  s.summary       = package["description"]
  s.homepage      = package["homepage"]
  s.license       = { :type => package["licence"], :file => "LICENSE" }
  s.author        = { package["author"]["name"] => package["author"]["email"] }
  s.platform      = :ios, "7.0"
  s.source        = { package["repository"]["type"] => package["repository"]["url"], :tag => package["version"] }
  s.source_files  = "RNUncontrolledDatePickerIOS.{h,m}"
  s.requires_arc  = true

  s.dependency "React"
end
