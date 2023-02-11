# snapkit-custom-camera.podspec

require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "snapkit-custom-camera"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  snapkit-custom-camera
                   DESC
  s.homepage     = "https://github.com/github_account/snapkit-custom-camera"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "sondhoang" => "sondh@gmail.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/github_account/snapkit-custom-camera.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,cc,cpp,m,mm,swift}"
  s.requires_arc = true

  s.dependency "React"
  # ...
  # s.dependency "..."
end

